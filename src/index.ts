import {EditorView} from "@codemirror/next/view"
import {EditorState} from "@codemirror/next/state"
import * as commands from "@codemirror/next/commands"
import {javascript} from "@codemirror/next/lang-javascript"
import {lineNumbers} from "@codemirror/next/gutter"
import {defaultHighlighter} from "@codemirror/next/highlight"
import {keymap} from "@codemirror/next/keymap"

const helloTypeScriptProgram = 
  "function hello(name: string) {\n  console.log(`hello ${name}`)\n}\n"

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
    
    lineNumbers(),
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

var style = editor.dom.style
style.width = "100vw"
style.height = "100vh"

document.body.style.margin = "0px"

document.body.appendChild(editor.dom)

editor.focus()
