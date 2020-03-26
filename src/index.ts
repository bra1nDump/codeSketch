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
  "function hello(name: string) {\n  console.log(`hello ${name}`)\n}\nhello('kirill')\n"

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
        // TODO: fix this supa shitty doc walk
        let doc = state.doc.toString()
        if (
          // if not a method
          doc[pos - 1] === '.'
          || doc[editor.movePos(pos, "left", "word") - 1] === '.'
          // one word on the current line 
          || state.doc.lineAt(pos).content.toString().trimLeft().indexOf(' ') > -1
          // empty line
          || state.doc.lineAt(pos).content.toString().trimLeft() === ''
          === false
        ) {
            return undefined;
        }

        let tsSource = state.doc.toString()
        let cursorPosition = state.selection.primary.head
        let completions = completionsAt(tsSource, cursorPosition)

        return {
          items: (completions
            .map(({name}) => 
              ({
                label: name,
                start: pos,
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
style.height = `${window.innerHeight}px`

let body = document.body
// TODO: figure out a way how to add overscroll-behavior-y css property using style
body.setAttribute('style', `margin:0px; overscroll-behavior-y:contain;`)

window.addEventListener('resize', () => {
  // TODO: refactor
  document.getElementById(editorDomId).style.height = `${window.innerHeight}px`
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

