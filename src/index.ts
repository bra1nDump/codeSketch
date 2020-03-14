import {EditorView} from "@codemirror/next/view"
import {EditorState} from "@codemirror/next/state"
import * as commands from "@codemirror/next/commands"

const helloTypeScriptProgram = 
  "function hello(name: string) {\n  console.log(`hello ${name}`)\n}\n"

let editor = new EditorView({
  state: EditorState.create({
    doc: helloTypeScriptProgram,
    extensions: [
      EditorView.domEventHandlers.of({
        touchstart: onTouchStart,
        touchend: onTouchEnd
      })
    ]
  })
})

// move this to its own class
var touchStartX: number = null;
function onTouchStart(view: EditorView, event: TouchEvent) {
  touchStartX = event.changedTouches[0].clientX
  console.log(`touchstart ${touchStartX}`)

  return false
}

function onTouchEnd(view: EditorView, event: TouchEvent) {
  const touchEndX = event.changedTouches[0].clientX
  console.log(`touchstart ${touchEndX}`)
  
  // swiped right
  if (touchEndX - touchStartX > 40) {
    commands.moveWordRight(editor)
    return false
  }

  // swiped left
  if (touchStartX - touchEndX > 40) {
    commands.moveWordLeft(editor)
    return false
  }

  return true
}

document.body.appendChild(editor.dom)
editor.focus()
