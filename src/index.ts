import {EditorView} from "@codemirror/next/view"
import {EditorState} from "@codemirror/next/state"

var touchStartX = null;

let editor = new EditorView(
  {
    state: EditorState.create(
      {
        doc: "hello",
        extensions: [
          EditorView.domEventHandlers.of({
            touchstart(view: EditorView, event: TouchEvent) {
              console.log("touchstart")
              console.log(event)

              touchStartX = event.changedTouches[0].clientX

              return false
            },
            touchend(view: EditorView, event: TouchEvent) {
              console.log("touchend")
              console.log(event)

              

              return true
            },
          })
        ]
      }
    )
  }
)

document.body.appendChild(editor.dom)