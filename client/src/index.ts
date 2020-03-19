import {EditorView} from '@codemirror/next/view'
import {EditorState} from '@codemirror/next/state'
import * as commands from '@codemirror/next/commands'
import {javascript} from '@codemirror/next/lang-javascript'
import {lineNumbers} from '@codemirror/next/gutter'
import {defaultHighlighter} from '@codemirror/next/highlight'
import {keymap} from '@codemirror/next/keymap'

const helloTypeScriptProgram = 
  'function hello(name: string) {\n  console.log(`hello ${name}`)\n}\n'

let state = EditorState.create({
  doc: helloTypeScriptProgram,
  extensions: [

    // create a static extension
    // great example of how facets bring value.
    // We could have created multiple consumers of
    // domEventHandlers facet consumers: extensions
    // extensions do the work, but the work 
    // is driven by facets
    EditorView.domEventHandlers.of({
      touchstart: onTouchStart,
      touchend: onTouchEnd
    }),

    keymap(commands.baseKeymap),
    
    defaultHighlighter,

    javascript()
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

import * as bent from 'bent'
const post = bent('http://localhost:8080/api', 'POST', 'json', 200)

// add even listeners to buttons
document.getElementById('run')
.addEventListener('click', async () => {
  let response = await 
    post('/run', { 
      code: editor.state.doc.toString() 
    })
  console.log(response)
})

