import {EditorView} from '@codemirror/next/view'
import {EditorState} from '@codemirror/next/state'
import * as commands from '@codemirror/next/commands'
import {javascript} from '@codemirror/next/lang-javascript'
import {lineNumbers} from '@codemirror/next/gutter'
import {defaultHighlighter} from '@codemirror/next/highlight'
import {keymap} from '@codemirror/next/keymap'
import {autocomplete} from '@codemirror/next/autocomplete'
import {completionsAt, execute} from './utils'

const helloTypeScriptProgram = 
  "function hello(name: string) : string {\n  return `hello ${name}`\n}\n"

let state = EditorState.create({
  doc: helloTypeScriptProgram,
  extensions: [
    EditorView.domEventHandlers.of({
      touchstart: onTouchStart,
      touchend: onTouchEnd
    }),

    keymap(commands.baseKeymap),
    
    defaultHighlighter,

    javascript(),
    autocomplete({
      async completeAt(state: EditorState, pos: number) {
        let line = state.doc.lineAt(pos)
        let linePos = pos - line.start
        let uptoCursor = line.slice(0, linePos + 1)

        // word starts after last separator
        let start = uptoCursor.lastIndexOf('.')
        if (start === -1) start = uptoCursor.lastIndexOf(' ')
        if (start === -1) start = uptoCursor.lastIndexOf('{')
        if (start === -1) start = uptoCursor.lastIndexOf('(')
        
        // adjust start to be first after the separator
        if (start !== -1) start += 1

        // word starts after leading whitespaces
        if (start === -1 && uptoCursor.trimLeft().indexOf(' ') === -1) 
          start = uptoCursor.length - uptoCursor.trimLeft().length

        // no valid token was started - return
        if (start === -1) return { items: [] }
        
        // if break detected - return []
        if (uptoCursor.lastIndexOf(' ') > start)
          return { items: [] }

        let tsSource = state.doc.toString()
        let completions = completionsAt(tsSource, pos)

        let wordSlice = uptoCursor.substring(start)

        return {
          items: (
            completions.map(({name}) => name)
            .filter((name) => name.startsWith(wordSlice))
            .map((name) => 
              ({
                label: name,
                start: line.start + start,
                end: pos
              })
            )
          )
        }
      }
    })
  ]
})

let editor = new EditorView({state})

// move this to its own class
var clientXStart: number = null;
var clientYStart: number = null;
function onTouchStart(view: EditorView, event: TouchEvent) {
  let {clientX, clientY} = event.changedTouches[0]
  clientXStart = clientX
  clientYStart = clientY
  return false
}

// TODO: Add long gestures
function onTouchEnd(view: EditorView, event: TouchEvent) {
  if (event.changedTouches.length > 1) {
    return false
  }

  let {clientX, clientY} = event.changedTouches[0]
  const threshold = 40
  
  if (clientX - clientXStart > threshold) {
    commands.moveWordRight(editor)
    return true
  }
  if (clientXStart - clientX > threshold) {
    commands.moveWordLeft(editor)
    return true
  }
  if (clientY - clientYStart > threshold) {
    commands.moveLineDown(editor)
    return true
  }
  if (clientYStart - clientY > threshold) {
    commands.moveLineUp(editor)
    return true
  }

  return false
}

// MARK: css
var style = editor.dom.style
let editorDomId = "editor.dom"
editor.dom.id = editorDomId
style.width = '100vw'
style.height = `${window.innerHeight * 0.9}px`

let body = document.body
// TODO: figure out a way how to add overscroll-behavior-y css property using style
body.setAttribute('style', `margin:0px; overscroll-behavior-y:contain;`)

document.getElementById('controls').style.height = `${window.innerHeight * 0.1}px`

window.addEventListener('resize', () => {
  // TODO: refactor
  document.getElementById(editorDomId).style.height = `${window.innerHeight * 0.9}px`
  document.getElementById('controls').style.height = `${window.innerHeight * 0.1}px`
})

// MARK: add editor to dom
document.body.appendChild(editor.dom)
editor.focus()

// add even listeners to buttons
document.getElementById('run')
.addEventListener('click', async () => {
  let response = execute(editor.state.doc.toString())
  console.log(response)

  document.getElementById('run-stdout').innerText = response
})

