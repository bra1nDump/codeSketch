/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@codemirror/next/commands/dist/index.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@codemirror/next/commands/dist/index.es.js ***!
  \*****************************************************************/
/*! exports provided: baseKeymap, deleteCharBackward, deleteCharForward, extendCharLeft, extendCharRight, extendLineDown, extendLineEnd, extendLineStart, extendLineUp, extendWordLeft, extendWordRight, indentSelection, insertNewlineAndIndent, macBaseKeymap, moveCharLeft, moveCharRight, moveLineDown, moveLineEnd, moveLineStart, moveLineUp, moveWordLeft, moveWordRight, pcBaseKeymap, selectAll, selectDocEnd, selectDocStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseKeymap", function() { return baseKeymap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCharBackward", function() { return deleteCharBackward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCharForward", function() { return deleteCharForward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendCharLeft", function() { return extendCharLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendCharRight", function() { return extendCharRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendLineDown", function() { return extendLineDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendLineEnd", function() { return extendLineEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendLineStart", function() { return extendLineStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendLineUp", function() { return extendLineUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendWordLeft", function() { return extendWordLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendWordRight", function() { return extendWordRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indentSelection", function() { return indentSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNewlineAndIndent", function() { return insertNewlineAndIndent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "macBaseKeymap", function() { return macBaseKeymap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveCharLeft", function() { return moveCharLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveCharRight", function() { return moveCharRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveLineDown", function() { return moveLineDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveLineEnd", function() { return moveLineEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveLineStart", function() { return moveLineStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveLineUp", function() { return moveLineUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveWordLeft", function() { return moveWordLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveWordRight", function() { return moveWordRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pcBaseKeymap", function() { return pcBaseKeymap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDocEnd", function() { return selectDocEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDocStart", function() { return selectDocStart; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state */ "./node_modules/@codemirror/next/state/dist/index.es.js");


function moveSelection(view, dir, granularity) {
    let transaction = view.state.t().forEachRange(range => {
        if (!range.empty && granularity != "lineboundary")
            return new _state__WEBPACK_IMPORTED_MODULE_0__["SelectionRange"](dir == "left" || dir == "backward" ? range.from : range.to);
        return new _state__WEBPACK_IMPORTED_MODULE_0__["SelectionRange"](view.movePos(range.head, dir, granularity, "move"));
    });
    if (transaction.selection.eq(view.state.selection))
        return false;
    if (granularity == "line")
        transaction.annotate(_state__WEBPACK_IMPORTED_MODULE_0__["Transaction"].preserveGoalColumn, true);
    view.dispatch(transaction.scrollIntoView());
    return true;
}
/// Move the selection one character to the left (which is backward in
/// left-to-right text, forward in right-to-left text).
const moveCharLeft = view => moveSelection(view, "left", "character");
/// Move the selection one character to the right.
const moveCharRight = view => moveSelection(view, "right", "character");
/// Move the selection one word to the left.
const moveWordLeft = view => moveSelection(view, "left", "word");
/// Move the selection one word to the right.
const moveWordRight = view => moveSelection(view, "right", "word");
/// Move the selection one line up.
const moveLineUp = view => moveSelection(view, "backward", "line");
/// Move the selection one line down.
const moveLineDown = view => moveSelection(view, "forward", "line");
/// Move the selection to the start of the line.
const moveLineStart = view => moveSelection(view, "backward", "lineboundary");
/// Move the selection to the end of the line.
const moveLineEnd = view => moveSelection(view, "forward", "lineboundary");
function extendSelection(view, dir, granularity) {
    let transaction = view.state.t().forEachRange(range => {
        return new _state__WEBPACK_IMPORTED_MODULE_0__["SelectionRange"](range.anchor, view.movePos(range.head, dir, granularity, "extend"));
    });
    if (transaction.selection.eq(view.state.selection))
        return false;
    if (granularity == "line")
        transaction.annotate(_state__WEBPACK_IMPORTED_MODULE_0__["Transaction"].preserveGoalColumn, true);
    view.dispatch(transaction.scrollIntoView());
    return true;
}
/// Move the selection head one character to the left, while leaving
/// the anchor in place.
const extendCharLeft = view => extendSelection(view, "left", "character");
/// Move the selection head one character to the right.
const extendCharRight = view => extendSelection(view, "right", "character");
/// Move the selection head one word to the left.
const extendWordLeft = view => extendSelection(view, "left", "word");
/// Move the selection head one word to the right.
const extendWordRight = view => extendSelection(view, "right", "word");
/// Move the selection head one line up.
const extendLineUp = view => extendSelection(view, "backward", "line");
/// Move the selection head one line down.
const extendLineDown = view => extendSelection(view, "forward", "line");
/// Move the selection head to the start of the line.
const extendLineStart = view => extendSelection(view, "backward", "lineboundary");
/// Move the selection head to the end of the line.
const extendLineEnd = view => extendSelection(view, "forward", "lineboundary");
/// Move the selection to the start of the document.
const selectDocStart = ({ state, dispatch }) => {
    dispatch(state.t().setSelection(_state__WEBPACK_IMPORTED_MODULE_0__["EditorSelection"].single(0)).scrollIntoView());
    return true;
};
/// Move the selection to the end of the document.
const selectDocEnd = ({ state, dispatch }) => {
    dispatch(state.t().setSelection(_state__WEBPACK_IMPORTED_MODULE_0__["EditorSelection"].single(state.doc.length)).scrollIntoView());
    return true;
};
/// Select the entire document.
const selectAll = ({ state, dispatch }) => {
    dispatch(state.t().setSelection(_state__WEBPACK_IMPORTED_MODULE_0__["EditorSelection"].single(0, state.doc.length)));
    return true;
};
function deleteText(view, dir) {
    let transaction = view.state.t().forEachRange((range, transaction) => {
        let { from, to } = range;
        if (from == to) {
            let target = view.movePos(range.head, dir, "character", "move");
            from = Math.min(from, target);
            to = Math.max(to, target);
        }
        if (from == to)
            return range;
        transaction.replace(from, to, "");
        return new _state__WEBPACK_IMPORTED_MODULE_0__["SelectionRange"](from);
    });
    if (!transaction.docChanged)
        return false;
    view.dispatch(transaction.scrollIntoView());
    return true;
}
/// Delete the character before the cursor (which is the one to left
/// in left-to-right text, but the one to the right in right-to-left
/// text).
const deleteCharBackward = view => deleteText(view, "backward");
/// Delete the character after the cursor.
const deleteCharForward = view => deleteText(view, "forward");
// FIXME support indenting by tab, configurable indent units
function space(n) {
    let result = "";
    for (let i = 0; i < n; i++)
        result += " ";
    return result;
}
function getIndentation(state, pos) {
    for (let f of state.facet(_state__WEBPACK_IMPORTED_MODULE_0__["EditorState"].indentation)) {
        let result = f(state, pos);
        if (result > -1)
            return result;
    }
    return -1;
}
/// Replace the selection with a newline and indent the newly created
/// line(s).
const insertNewlineAndIndent = ({ state, dispatch }) => {
    let i = 0, indentation = state.selection.ranges.map(r => {
        let indent = getIndentation(state, r.from);
        return indent > -1 ? indent : /^\s*/.exec(state.doc.lineAt(r.from).slice(0, 50))[0].length;
    });
    dispatch(state.t().forEachRange(({ from, to }, tr) => {
        let indent = indentation[i++], line = tr.doc.lineAt(to);
        while (to < line.end && /s/.test(line.slice(to - line.start, to + 1 - line.start)))
            to++;
        tr.replace(from, to, ["", space(indent)]);
        return new _state__WEBPACK_IMPORTED_MODULE_0__["SelectionRange"](from + indent + 1);
    }).scrollIntoView());
    return true;
};
/// Auto-indent the selected lines. This uses the [indentation
/// behavor](#state.EditorState^indentation) as source.
const indentSelection = ({ state, dispatch }) => {
    // FIXME this will base all indentation on the same state, which is
    // wrong (indentation looks at the indent of previous lines, which may
    // be changed).
    let lastLine = -1, positions = [];
    for (let range of state.selection.ranges) {
        for (let { start, end } = state.doc.lineAt(range.from);;) {
            if (start != lastLine) {
                lastLine = start;
                let indent = getIndentation(state, start), current;
                if (indent > -1 &&
                    indent != (current = /^\s*/.exec(state.doc.slice(start, Math.min(end, start + 100)))[0].length))
                    positions.push({ pos: start, current, indent });
            }
            if (end + 1 > range.to)
                break;
            ({ start, end } = state.doc.lineAt(end + 1));
        }
    }
    if (positions.length > 0) {
        let tr = state.t();
        for (let { pos, current, indent } of positions) {
            let start = tr.changes.mapPos(pos);
            tr.replace(start, start + current, space(indent));
        }
        dispatch(tr);
    }
    return true;
};
/// The default keymap for Linux/Windows/non-Mac platforms. Binds the
/// arrows for cursor motion, shift-arrow for selection extension,
/// ctrl-arrows for by-word motion, home/end for line start/end,
/// ctrl-home/end for document start/end, ctrl-a to select all,
/// backspace/delete for deletion, and enter for newline-and-indent.
const pcBaseKeymap = {
    "ArrowLeft": moveCharLeft,
    "ArrowRight": moveCharRight,
    "Shift-ArrowLeft": extendCharLeft,
    "Shift-ArrowRight": extendCharRight,
    "Mod-ArrowLeft": moveWordLeft,
    "Mod-ArrowRight": moveWordRight,
    "Shift-Mod-ArrowLeft": extendWordLeft,
    "Shift-Mod-ArrowRight": extendWordRight,
    "ArrowUp": moveLineUp,
    "ArrowDown": moveLineDown,
    "Shift-ArrowUp": extendLineUp,
    "Shift-ArrowDown": extendLineDown,
    "Home": moveLineStart,
    "End": moveLineEnd,
    "Shift-Home": extendLineStart,
    "Shift-End": extendLineEnd,
    "Mod-Home": selectDocStart,
    "Mod-End": selectDocEnd,
    "Mod-a": selectAll,
    "Backspace": deleteCharBackward,
    "Delete": deleteCharForward,
    "Enter": insertNewlineAndIndent
};
/// The default keymap for Mac platforms. Includes the bindings from
/// the [PC keymap](#commands.pcBaseKeymap) (using Cmd instead of
/// Ctrl), and adds Mac-specific default bindings.
const macBaseKeymap = {
    "Control-b": moveCharLeft,
    "Control-f": moveCharRight,
    "Shift-Control-b": extendCharLeft,
    "Shift-Control-f": extendCharRight,
    "Control-p": moveLineUp,
    "Control-n": moveLineDown,
    "Shift-Control-p": extendLineUp,
    "Shift-Control-n": extendLineDown,
    "Control-a": moveLineStart,
    "Control-e": moveLineEnd,
    "Shift-Control-a": extendLineStart,
    "Shift-Control-e": extendLineEnd,
    "Cmd-ArrowUp": selectDocStart,
    "Cmd-ArrowDown": selectDocEnd,
    "Control-d": deleteCharForward,
    "Control-h": deleteCharBackward
};
for (let key in pcBaseKeymap)
    macBaseKeymap[key] = pcBaseKeymap[key];
const mac = typeof navigator != "undefined" ? /Mac/.test(navigator.platform)
    : typeof os != "undefined" ? os.platform() == "darwin" : false;
/// The default keymap for the current platform.
const baseKeymap = mac ? macBaseKeymap : pcBaseKeymap;




/***/ }),

/***/ "./node_modules/@codemirror/next/gutter/dist/index.es.js":
/*!***************************************************************!*\
  !*** ./node_modules/@codemirror/next/gutter/dist/index.es.js ***!
  \***************************************************************/
/*! exports provided: GutterMarker, gutter, gutters, lineNumberMarkers, lineNumbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GutterMarker", function() { return GutterMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gutter", function() { return gutter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gutters", function() { return gutters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineNumberMarkers", function() { return lineNumberMarkers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineNumbers", function() { return lineNumbers; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view */ "./node_modules/@codemirror/next/view/dist/index.es.js");
/* harmony import */ var _rangeset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../rangeset */ "./node_modules/@codemirror/next/rangeset/dist/index.es.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state */ "./node_modules/@codemirror/next/state/dist/index.es.js");




/// A gutter marker represents a bit of information attached to a line
/// in a specific gutter. Your own custom markers have to extend this
/// class.
class GutterMarker extends _rangeset__WEBPACK_IMPORTED_MODULE_1__["RangeValue"] {
    /// @internal
    compare(other) {
        return this == other || this.constructor == other.constructor && this.eq(other);
    }
    /// Render the DOM node for this marker, if any.
    toDOM(_view) { return null; }
    /// Create a range that places this marker at the given position.
    at(pos) { return new _rangeset__WEBPACK_IMPORTED_MODULE_1__["Range"](pos, pos, this); }
}
GutterMarker.prototype.elementClass = "";
GutterMarker.prototype.startMapMode = GutterMarker.prototype.endMapMode = _state__WEBPACK_IMPORTED_MODULE_2__["MapMode"].TrackBefore;
const defaults = {
    style: "",
    renderEmptyElements: false,
    elementStyle: "",
    initialMarkers: () => _rangeset__WEBPACK_IMPORTED_MODULE_1__["RangeSet"].empty,
    updateMarkers: (markers) => markers,
    lineMarker: () => null,
    initialSpacer: null,
    updateSpacer: null,
    domEventHandlers: {}
};
const activeGutters = _state__WEBPACK_IMPORTED_MODULE_2__["Facet"].define();
/// Define an editor gutter.
function gutter(config) {
    return [gutters(), activeGutters.of(Object(_state__WEBPACK_IMPORTED_MODULE_2__["fillConfig"])(config, defaults))];
}
const baseTheme = _view__WEBPACK_IMPORTED_MODULE_0__["EditorView"].baseTheme({
    gutters: {
        background: "#f5f5f5",
        borderRight: "1px solid silver",
        color: "#999",
        display: "flex",
        height: "100%",
        boxSizing: "border-box",
        left: 0
    },
    gutter: {
        display: "flex !important",
        flexDirection: "column",
        flexShrink: 0,
        boxSizing: "border-box",
        height: "100%",
        overflow: "hidden"
    },
    gutterElement: {
        boxSizing: "border-box"
    },
    "gutterElement.lineNumber": {
        padding: "0 3px 0 5px",
        minWidth: "20px",
        textAlign: "right",
        whiteSpace: "nowrap"
    }
});
const unfixGutters = _state__WEBPACK_IMPORTED_MODULE_2__["Facet"].define({
    combine: values => values.some(x => x)
});
/// The gutter-drawing plugin is automatically enabled when you add a
/// gutter, but you can use this function to explicitly configure it.
///
/// Unless `fixed` is explicitly set to `false`, the gutters are
/// fixed, meaning they don't scroll along with the content
/// horizontally.
function gutters(config) {
    let result = [
        gutterView,
        baseTheme
    ];
    if (config && config.fixed === false)
        result.push(unfixGutters.of(true));
    return result;
}
const gutterView = _view__WEBPACK_IMPORTED_MODULE_0__["ViewPlugin"].fromClass(class {
    constructor(view) {
        this.view = view;
        this.dom = document.createElement("div");
        this.dom.className = Object(_view__WEBPACK_IMPORTED_MODULE_0__["themeClass"])("gutters");
        this.dom.setAttribute("aria-hidden", "true");
        this.gutters = view.state.facet(activeGutters).map(conf => new SingleGutterView(view, conf));
        for (let gutter of this.gutters)
            this.dom.appendChild(gutter.dom);
        this.fixed = !view.state.facet(unfixGutters);
        if (this.fixed) {
            // FIXME IE11 fallback, which doesn't support position: sticky,
            // by using position: relative + event handlers that realign the
            // gutter (or just force fixed=false on IE11?)
            this.dom.style.position = "sticky";
        }
        view.scrollDOM.insertBefore(this.dom, view.contentDOM);
    }
    update(update) {
        if (!this.updateGutters(update))
            return;
        let contexts = this.gutters.map(gutter => new UpdateContext(gutter, this.view.viewport));
        this.view.viewportLines(line => {
            let text;
            if (Array.isArray(line.type))
                text = line.type.find(b => b.type == _view__WEBPACK_IMPORTED_MODULE_0__["BlockType"].Text);
            else
                text = line.type == _view__WEBPACK_IMPORTED_MODULE_0__["BlockType"].Text ? line : undefined;
            if (!text)
                return;
            for (let cx of contexts)
                cx.line(this.view, text);
        }, 0);
        for (let cx of contexts)
            cx.finish();
        this.dom.style.minHeight = this.view.contentHeight + "px";
        if (update.state.facet(unfixGutters) != !this.fixed) {
            this.fixed = !this.fixed;
            this.dom.style.position = this.fixed ? "sticky" : "";
        }
    }
    updateGutters(update) {
        let prev = update.prevState.facet(activeGutters), cur = update.state.facet(activeGutters);
        let change = update.docChanged || update.heightChanged;
        if (prev == cur) {
            for (let gutter of this.gutters)
                if (gutter.update(update))
                    change = true;
        }
        else {
            change = true;
            let gutters = [];
            for (let conf of cur) {
                let known = prev.indexOf(conf);
                if (known < 0) {
                    gutters.push(new SingleGutterView(this.view, conf));
                }
                else {
                    this.gutters[known].update(update);
                    gutters.push(this.gutters[known]);
                }
            }
            for (let g of this.gutters)
                g.dom.remove();
            for (let g of gutters)
                this.dom.appendChild(g.dom);
            this.gutters = gutters;
        }
        return change;
    }
}).provide(_view__WEBPACK_IMPORTED_MODULE_0__["PluginField"].scrollMargins, value => {
    if (value.gutters.length == 0 || !value.fixed)
        return null;
    return value.view.textDirection == "ltr" ? { left: value.dom.offsetWidth } : { right: value.dom.offsetWidth };
});
class UpdateContext {
    constructor(gutter, viewport) {
        this.gutter = gutter;
        this.localMarkers = [];
        this.i = 0;
        this.height = 0;
        this.cursor = gutter.markers.iter(viewport.from);
    }
    line(view, line) {
        if (this.localMarkers.length)
            this.localMarkers = [];
        while (this.cursor.value && this.cursor.from <= line.from) {
            if (this.cursor.from == line.from)
                this.localMarkers.push(this.cursor.value);
            this.cursor.next();
        }
        let forLine = this.gutter.config.lineMarker(view, line, this.localMarkers);
        if (forLine)
            this.localMarkers.unshift(forLine);
        let gutter = this.gutter;
        if (this.localMarkers.length == 0 && !gutter.config.renderEmptyElements)
            return;
        let above = line.top - this.height;
        if (this.i == gutter.elements.length) {
            let newElt = new GutterElement(view, line.height, above, this.localMarkers, gutter.elementClass);
            gutter.elements.push(newElt);
            gutter.dom.appendChild(newElt.dom);
        }
        else {
            let markers = this.localMarkers, elt = gutter.elements[this.i];
            if (sameMarkers(markers, elt.markers)) {
                markers = elt.markers;
                this.localMarkers.length = 0;
            }
            elt.update(view, line.height, above, markers, gutter.elementClass);
        }
        this.height = line.bottom;
        this.i++;
    }
    finish() {
        let gutter = this.gutter;
        while (gutter.elements.length > this.i)
            gutter.dom.removeChild(gutter.elements.pop().dom);
    }
}
class SingleGutterView {
    constructor(view, config) {
        this.view = view;
        this.config = config;
        this.elements = [];
        this.spacer = null;
        this.dom = document.createElement("div");
        this.dom.className = Object(_view__WEBPACK_IMPORTED_MODULE_0__["themeClass"])("gutter" + (this.config.style ? "." + this.config.style : ""));
        this.elementClass = Object(_view__WEBPACK_IMPORTED_MODULE_0__["themeClass"])("gutterElement" + (this.config.style ? "." + this.config.style : ""));
        for (let prop in config.domEventHandlers) {
            this.dom.addEventListener(prop, (event) => {
                let line = view.lineAtHeight(event.clientY);
                if (config.domEventHandlers[prop](view, line, event))
                    event.preventDefault();
            });
        }
        this.markers = config.initialMarkers(view);
        if (config.initialSpacer) {
            this.spacer = new GutterElement(view, 0, 0, [config.initialSpacer(view)], this.elementClass);
            this.dom.appendChild(this.spacer.dom);
            this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none";
        }
    }
    update(update) {
        let prevMarkers = this.markers;
        this.markers = this.config.updateMarkers(this.markers.map(update.changes), update);
        if (this.spacer && this.config.updateSpacer) {
            let updated = this.config.updateSpacer(this.spacer.markers[0], update);
            if (updated != this.spacer.markers[0])
                this.spacer.update(update.view, 0, 0, [updated], this.elementClass);
        }
        return this.markers == prevMarkers;
    }
    destroy() {
        this.dom.remove();
    }
}
class GutterElement {
    constructor(view, height, above, markers, eltClass) {
        this.height = -1;
        this.above = 0;
        this.dom = document.createElement("div");
        this.update(view, height, above, markers, eltClass);
    }
    update(view, height, above, markers, cssClass) {
        if (this.height != height)
            this.dom.style.height = (this.height = height) + "px";
        if (this.above != above)
            this.dom.style.marginTop = (this.above = above) ? above + "px" : "";
        if (this.markers != markers) {
            this.markers = markers;
            for (let ch; ch = this.dom.lastChild;)
                ch.remove();
            let cls = cssClass;
            for (let m of markers) {
                let dom = m.toDOM(view);
                if (dom)
                    this.dom.appendChild(dom);
                let c = m.elementClass;
                if (c)
                    cls += " " + c;
            }
            this.dom.className = cls;
        }
    }
}
function sameMarkers(a, b) {
    if (a.length != b.length)
        return false;
    for (let i = 0; i < a.length; i++)
        if (!a[i].compare(b[i]))
            return false;
    return true;
}
/// Used to insert markers into the line number gutter.
const lineNumberMarkers = _state__WEBPACK_IMPORTED_MODULE_2__["Annotation"].define();
const lineNumberConfig = _state__WEBPACK_IMPORTED_MODULE_2__["Facet"].define({
    combine(values) {
        return Object(_state__WEBPACK_IMPORTED_MODULE_2__["combineConfig"])(values, { formatNumber: String, domEventHandlers: {} }, {
            domEventHandlers(a, b) {
                let result = {};
                for (let event in a)
                    result[event] = a[event];
                for (let event in b) {
                    let exists = result[event], add = b[event];
                    result[event] = exists ? (view, line, event) => exists(view, line, event) || add(view, line, event) : add;
                }
                return result;
            }
        });
    }
});
class NumberMarker extends GutterMarker {
    constructor(number) {
        super();
        this.number = number;
    }
    eq(other) { return this.number == other.number; }
    toDOM(view) {
        let config = view.state.facet(lineNumberConfig);
        return document.createTextNode(config.formatNumber(this.number));
    }
}
const lineNumberGutter = gutter({
    style: "lineNumber",
    updateMarkers(markers, update) {
        for (let tr of update.transactions) {
            let ann = tr.annotation(lineNumberMarkers);
            if (ann)
                markers = markers.update(ann);
        }
        return markers;
    },
    lineMarker(view, line, others) {
        if (others.length)
            return null;
        // FIXME try to make the line number queries cheaper?
        return new NumberMarker(view.state.doc.lineAt(line.from).number);
    },
    initialSpacer(view) {
        return new NumberMarker(maxLineNumber(view.state.doc.lines));
    },
    updateSpacer(spacer, update) {
        let max = maxLineNumber(update.view.state.doc.lines);
        return max == spacer.number ? spacer : new NumberMarker(max);
    }
});
/// Create a line number gutter extension. The order in which the
/// gutters appear is determined by their extension priority.
function lineNumbers(config = {}) {
    return [
        lineNumberConfig.of(config),
        lineNumberGutter
    ];
}
function maxLineNumber(lines) {
    let last = 9;
    while (last < lines)
        last = last * 10 + 9;
    return last;
}




/***/ }),

/***/ "./node_modules/@codemirror/next/highlight/dist/index.es.js":
/*!******************************************************************!*\
  !*** ./node_modules/@codemirror/next/highlight/dist/index.es.js ***!
  \******************************************************************/
/*! exports provided: TagSystem, defaultHighlighter, defaultTags, highlighter, styleTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagSystem", function() { return TagSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultHighlighter", function() { return defaultHighlighter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTags", function() { return defaultTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlighter", function() { return highlighter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleTags", function() { return styleTags; });
/* harmony import */ var lezer_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lezer-tree */ "./node_modules/lezer-tree/dist/tree.js");
/* harmony import */ var lezer_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lezer_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var style_mod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-mod */ "./node_modules/style-mod/src/style-mod.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view */ "./node_modules/@codemirror/next/view/dist/index.es.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state */ "./node_modules/@codemirror/next/state/dist/index.es.js");
/* harmony import */ var _rangeset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rangeset */ "./node_modules/@codemirror/next/rangeset/dist/index.es.js");






const Inherit = 1;
/// A tag system defines a set of node (token) tags used for
/// highlighting. You'll usually want to use the
/// [default](#highlight.defaultTags) set, but it is possible to
/// define your own custom system when that doesn't fit your use case.
class TagSystem {
    /// Define a tag system. Each tag identifies a type of syntactic
    /// element, which can have a single type and any number of flags.
    /// The `flags` argument should be an array of flag names, and the
    /// `types` argument an array of type names. Type names may have a
    /// `"name=parentName"` format to specify that this type is an
    /// instance of some other type, which means that, if no styling for
    /// the type itself is provided, it'll fall back to the parent
    /// type's styling.
    ///
    /// You can specify a `subtypes` property to assign a given number
    /// of sub-types to each type. These are automatically generated
    /// types with the base type name suffixed with `#1` to `#`_`N`_
    /// (where _N_ is the number given in the `subtypes` field) that
    /// have the base type as parent type.
    constructor(options) {
        /// @internal
        this.typeNames = [""];
        /// @internal
        this.typeIDs = Object.create(null);
        /// A [node
        /// prop](https://lezer.codemirror.net/docs/ref#tree.NodeProp) used
        /// to associate styling tag information with syntax tree nodes.
        this.prop = new lezer_tree__WEBPACK_IMPORTED_MODULE_0__["NodeProp"]();
        this.flags = options.flags;
        this.types = options.types;
        this.flagMask = Math.pow(2, this.flags.length) - 1;
        this.typeShift = this.flags.length + 1;
        let subtypes = options.subtypes || 0;
        let parentNames = [undefined];
        this.typeIDs[""] = 0;
        let typeID = 1;
        for (let type of options.types) {
            let match = /^([\w\-]+)(?:=([\w-]+))?$/.exec(type);
            if (!match)
                throw new RangeError("Invalid type name " + type);
            let id = typeID++;
            this.typeNames[id] = match[1];
            this.typeIDs[match[1]] = id;
            parentNames[id] = match[2];
            for (let i = 0; i < subtypes; i++) {
                let subID = typeID++, name = match[1] + "#" + (i + 1);
                this.typeNames[subID] = name;
                this.typeIDs[name] = subID;
                parentNames[subID] = match[1];
            }
        }
        this.parents = parentNames.map(name => {
            if (name == null)
                return 0;
            let id = this.typeIDs[name];
            if (id == null)
                throw new RangeError(`Unknown parent type '${name}' specified`);
            return id;
        });
        if (this.flags.length > 29 || this.typeNames.length > Math.pow(2, 29 - this.flags.length))
            throw new RangeError("Too many style tag flags to fit in a 30-bit integer");
    }
    /// Parse a tag name into a numeric ID. Only necessary if you are
    /// manually defining [node properties](#highlight.TagSystem.prop)
    /// for this system.
    get(name) {
        let value = name.charCodeAt(0) == 43 ? 1 : 0; // Check for leading '+'
        for (let part of (value ? name.slice(1) : name).split(" "))
            if (part) {
                let flag = this.flags.indexOf(part);
                if (flag > -1) {
                    value += 1 << (flag + 1);
                }
                else {
                    let typeID = this.typeIDs[part];
                    if (typeID == null)
                        throw new RangeError(`Unknown tag type '${part}'`);
                    if (value >> this.typeShift)
                        throw new RangeError(`Multiple tag types specified in '${name}'`);
                    value += typeID << this.typeShift;
                }
            }
        return value;
    }
    /// Create a
    /// [`PropSource`](https://lezer.codemirror.net/docs/ref#tree.PropSource)
    /// that adds node properties for this system. `tags` should map
    /// node type
    /// [selectors](https://lezer.codemirror.net/docs/ref#tree.NodeType^match)
    /// to tag names.
    add(tags) {
        let match = lezer_tree__WEBPACK_IMPORTED_MODULE_0__["NodeType"].match(tags);
        return this.prop.add((type) => {
            let found = match(type);
            return found == null ? undefined : this.get(found);
        });
    }
    /// Create a highlighter extension for this system, styling the
    /// given tags using the given CSS objects.
    highlighter(spec) {
        let styling = new Styling(this, spec);
        return [
            _view__WEBPACK_IMPORTED_MODULE_2__["ViewPlugin"].define(view => new Highlighter(view, this.prop, styling)).decorations(),
            _view__WEBPACK_IMPORTED_MODULE_2__["EditorView"].styleModule.of(styling.module)
        ];
    }
    /// @internal
    specificity(tag) {
        let flags = tag & this.flagMask, spec = 0;
        for (let i = 1; i <= this.flags.length; i++)
            if (flags & (1 << i))
                spec++;
        for (let type = tag >> (this.flags.length + 1); type; type = this.parents[type])
            spec += 1000;
        return spec;
    }
}
/// The set of highlighting tags used by regular language packages and
/// themes.
const defaultTags = new TagSystem({
    flags: ["invalid", "meta",
        "link", "strong", "emphasis", "monospace",
        "changed", "inserted", "deleted",
        "definition", "constant", "control"],
    subtypes: 7,
    types: [
        "comment",
        "lineComment=comment",
        "blockComment=comment",
        "name",
        "variableName=name",
        "typeName=name",
        "propertyName=name",
        "className=name",
        "labelName=name",
        "namespace=name",
        "literal",
        "string=literal",
        "character=string",
        "number=literal",
        "integer=number",
        "float=number",
        "regexp=literal",
        "escape=literal",
        "color=literal",
        "content",
        "heading=content",
        "list=content",
        "quote=content",
        "keyword",
        "self=keyword",
        "null=keyword",
        "atom=keyword",
        "unit=keyword",
        "modifier=keyword",
        "operatorKeyword=keyword",
        "operator",
        "derefOperator=operator",
        "arithmeticOperator=operator",
        "logicOperator=operator",
        "bitwiseOperator=operator",
        "compareOperator=operator",
        "updateOperator=operator",
        "typeOperator=operator",
        "punctuation",
        "separator=punctuation",
        "bracket=punctuation",
        "angleBracket=bracket",
        "squareBracket=bracket",
        "paren=bracket",
        "brace=bracket"
    ]
});
/// Used to add a set of tags to a language syntax via
/// [`Parser.withProps`](https://lezer.codemirror.net/docs/ref#lezer.Parser.withProps).
/// The argument object can use syntax node selectors (see
/// [`NodeType.match`](https://lezer.codemirror.net/docs/ref#tree.NodeType^match))
/// as property names, and tag names (in the [default tag
/// system](#highlight.defaultTags)) as values.
const styleTags = (tags) => defaultTags.add(tags);
/// Create a highlighter theme that adds the given styles to the given
/// tags. The spec's property names must be tag names, and the values
/// [`style-mod`](https://github.com/marijnh/style-mod#documentation)
/// style objects that define the CSS for that tag.
const highlighter = (spec) => defaultTags.highlighter(spec);
class StyleRule {
    constructor(type, flags, specificity, cls) {
        this.type = type;
        this.flags = flags;
        this.specificity = specificity;
        this.cls = cls;
    }
}
class Styling {
    constructor(tags, spec) {
        this.tags = tags;
        this.cache = Object.create(null);
        let modSpec = Object.create(null);
        let nextCls = 0;
        let rules = [];
        for (let prop in spec) {
            let tag = tags.get(prop);
            let cls = "c" + nextCls++;
            modSpec[cls] = spec[prop];
            rules.push(new StyleRule(tag >> tags.typeShift, tag & tags.flagMask, tags.specificity(tag), cls));
        }
        this.rules = rules.sort((a, b) => b.specificity - a.specificity);
        this.module = new style_mod__WEBPACK_IMPORTED_MODULE_1__["StyleModule"](modSpec);
    }
    match(tag) {
        let known = this.cache[tag];
        if (known != null)
            return known;
        let result = "";
        let type = tag >> this.tags.typeShift, flags = tag & this.tags.flagMask;
        for (;;) {
            for (let rule of this.rules) {
                if (rule.type == type && (rule.flags & flags) == rule.flags) {
                    if (result)
                        result += " ";
                    result += this.module[rule.cls];
                    flags &= ~rule.flags;
                    if (type)
                        break;
                }
            }
            if (type)
                type = this.tags.parents[type];
            else
                break;
        }
        return this.cache[tag] = result;
    }
}
class Highlighter {
    constructor(view, prop, styling) {
        this.prop = prop;
        this.styling = styling;
        this.tree = view.state.tree;
        this.decorations = this.buildDeco(view.visibleRanges, this.tree);
    }
    update(update) {
        let syntax = update.state.facet(_state__WEBPACK_IMPORTED_MODULE_3__["EditorState"].syntax);
        if (!syntax.length) {
            this.decorations = _view__WEBPACK_IMPORTED_MODULE_2__["Decoration"].none;
        }
        else if (syntax[0].parsePos(update.state) < update.view.viewport.to) {
            this.decorations = this.decorations.map(update.changes);
        }
        else if (this.tree != syntax[0].getTree(update.state) || update.viewportChanged) {
            this.tree = syntax[0].getTree(update.state);
            this.decorations = this.buildDeco(update.view.visibleRanges, this.tree);
        }
    }
    buildDeco(ranges, tree) {
        let builder = new _rangeset__WEBPACK_IMPORTED_MODULE_4__["RangeSetBuilder"]();
        let start = 0;
        function flush(pos, style) {
            if (pos > start && style)
                builder.add(start, pos, _view__WEBPACK_IMPORTED_MODULE_2__["Decoration"].mark({ class: style })); // FIXME cache these
            start = pos;
        }
        for (let { from, to } of ranges) {
            start = from;
            // The current node's own classes
            let curClass = "";
            let context = [];
            let inherited = [];
            tree.iterate({
                from, to,
                enter: (type, start) => {
                    let inheritedClass = inherited.length ? inherited[inherited.length - 1] : "";
                    let cls = inheritedClass;
                    let style = type.prop(this.prop);
                    if (style != null) {
                        let val = this.styling.match(style);
                        if (val) {
                            if (cls)
                                cls += " ";
                            cls += val;
                        }
                        if (style & Inherit)
                            inheritedClass = cls;
                    }
                    context.push(cls);
                    if (inheritedClass)
                        inherited.push(inheritedClass);
                    if (cls != curClass) {
                        flush(start, curClass);
                        curClass = cls;
                    }
                },
                leave: (_t, _s, end) => {
                    context.pop();
                    inherited.pop();
                    let backTo = context.length ? context[context.length - 1] : "";
                    if (backTo != curClass) {
                        flush(Math.min(to, end), curClass);
                        curClass = backTo;
                    }
                }
            });
        }
        return builder.finish();
    }
}
/// A default highlighter (works well with light themes).
const defaultHighlighter = highlighter({
    invalid: { color: "#f00" },
    keyword: { color: "#708" },
    atom: { color: "#219" },
    number: { color: "#164" },
    string: { color: "#a11" },
    character: { color: "#a11" },
    regexp: { color: "#e40" },
    escape: { color: "#e40" },
    "variableName definition": { color: "#00f" },
    typeName: { color: "#085" },
    "propertyName definition": { color: "#00c" },
    comment: { color: "#940" },
    meta: { color: "#555" }
});




/***/ }),

/***/ "./node_modules/@codemirror/next/keymap/dist/index.es.js":
/*!***************************************************************!*\
  !*** ./node_modules/@codemirror/next/keymap/dist/index.es.js ***!
  \***************************************************************/
/*! exports provided: NormalizedKeymap, keymap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalizedKeymap", function() { return NormalizedKeymap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keymap", function() { return keymap; });
/* harmony import */ var w3c_keyname__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! w3c-keyname */ "./node_modules/w3c-keyname/index.es.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../view */ "./node_modules/@codemirror/next/view/dist/index.es.js");



const mac = typeof navigator != "undefined" ? /Mac/.test(navigator.platform) : false;
function normalizeKeyName(name) {
    const parts = name.split(/-(?!$)/);
    let result = parts[parts.length - 1];
    if (result == "Space")
        result = " ";
    let alt, ctrl, shift, meta;
    for (let i = 0; i < parts.length - 1; ++i) {
        const mod = parts[i];
        if (/^(cmd|meta|m)$/i.test(mod))
            meta = true;
        else if (/^a(lt)?$/i.test(mod))
            alt = true;
        else if (/^(c|ctrl|control)$/i.test(mod))
            ctrl = true;
        else if (/^s(hift)?$/i.test(mod))
            shift = true;
        else if (/^mod$/i.test(mod)) {
            if (mac)
                meta = true;
            else
                ctrl = true;
        }
        else
            throw new Error("Unrecognized modifier name: " + mod);
    }
    if (alt)
        result = "Alt-" + result;
    if (ctrl)
        result = "Ctrl-" + result;
    if (meta)
        result = "Meta-" + result;
    if (shift)
        result = "Shift-" + result;
    return result;
}
function modifiers(name, event, shift) {
    if (event.altKey)
        name = "Alt-" + name;
    if (event.ctrlKey)
        name = "Ctrl-" + name;
    if (event.metaKey)
        name = "Meta-" + name;
    if (shift !== false && event.shiftKey)
        name = "Shift-" + name;
    return name;
}
/// Create a view extension that registers a keymap.
///
/// You can add multiple keymap behaviors to an editor. Their
/// priorities determine their precedence (the ones specified early or
/// with high priority get to dispatch first). When a handler has
/// returned `true` for a given key, no further handlers are called.
const keymap = (map) => {
    let set = new NormalizedKeymap(map);
    return _view__WEBPACK_IMPORTED_MODULE_1__["EditorView"].domEventHandlers.of({
        keydown(view, event) {
            let handler = set.get(event);
            return handler ? handler(view) : false;
        }
    });
};
/// Stores a set of keybindings in normalized form, and helps looking
/// up the binding for a keyboard event. Only needed when binding keys
/// in some custom way.
class NormalizedKeymap {
    /// Create a normalized map.
    constructor(map) {
        this.map = Object.create(null);
        for (const prop in map)
            this.map[normalizeKeyName(prop)] = map[prop];
    }
    /// Look up the binding for the given keyboard event, or `undefined`
    /// if none is found.
    get(event) {
        const name = Object(w3c_keyname__WEBPACK_IMPORTED_MODULE_0__["keyName"])(event), isChar = name.length == 1 && name != " ";
        const direct = this.map[modifiers(name, event, !isChar)];
        if (direct)
            return direct;
        let baseName;
        if (isChar && (event.shiftKey || event.altKey || event.metaKey) &&
            (baseName = w3c_keyname__WEBPACK_IMPORTED_MODULE_0__["base"][event.keyCode]) && baseName != name) {
            const fromCode = this.map[modifiers(baseName, event, true)];
            if (fromCode)
                return fromCode;
        }
        return undefined;
    }
}




/***/ }),

/***/ "./node_modules/@codemirror/next/lang-javascript/dist/index.es.js":
/*!************************************************************************!*\
  !*** ./node_modules/@codemirror/next/lang-javascript/dist/index.es.js ***!
  \************************************************************************/
/*! exports provided: esLint, javascript, javascriptSyntax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "esLint", function() { return esLint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "javascript", function() { return javascript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "javascriptSyntax", function() { return javascriptSyntax; });
/* harmony import */ var lezer_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lezer-javascript */ "./node_modules/lezer-javascript/dist/index.js");
/* harmony import */ var lezer_javascript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lezer_javascript__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _syntax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../syntax */ "./node_modules/@codemirror/next/syntax/dist/index.es.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state */ "./node_modules/@codemirror/next/state/dist/index.es.js");
/* harmony import */ var _highlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../highlight */ "./node_modules/@codemirror/next/highlight/dist/index.es.js");





const statementIndent = Object(_syntax__WEBPACK_IMPORTED_MODULE_1__["continuedIndent"])({ except: /^{/ });
/// A syntax provider based on the [Lezer JavaScript
/// parser](https://github.com/lezer-parser/javascript), extended with
/// highlighting and indentation information.
const javascriptSyntax = new _syntax__WEBPACK_IMPORTED_MODULE_1__["LezerSyntax"](lezer_javascript__WEBPACK_IMPORTED_MODULE_0__["parser"].withProps(_syntax__WEBPACK_IMPORTED_MODULE_1__["indentNodeProp"].add(type => {
    if (type.name == "IfStatement")
        return Object(_syntax__WEBPACK_IMPORTED_MODULE_1__["continuedIndent"])({ except: /^({|else\b)/ });
    if (type.name == "TryStatement")
        return Object(_syntax__WEBPACK_IMPORTED_MODULE_1__["continuedIndent"])({ except: /^({|catch|finally)\b/ });
    if (type.name == "LabeledStatement")
        return _syntax__WEBPACK_IMPORTED_MODULE_1__["flatIndent"];
    if (type.name == "SwitchBody")
        return context => {
            let after = context.textAfter, closed = after[0] == "}", isCase = /^(case|default)\b/.test(after);
            return context.baseIndent + (closed ? 0 : isCase ? 1 : 2) * context.unit;
        };
    if (type.name == "TemplateString" || type.name == "BlockComment")
        return () => -1;
    if (/(Statement|Declaration)$/.test(type.name) || type.name == "Property")
        return statementIndent;
    return undefined;
}), _syntax__WEBPACK_IMPORTED_MODULE_1__["foldNodeProp"].add({
    Block(tree) { return { from: tree.start + 1, to: tree.end - 1 }; }
}), _state__WEBPACK_IMPORTED_MODULE_2__["languageData"].add({
    Script: { closeBrackets: ["(", "[", "{", "'", '"', "`"] }
}), Object(_highlight__WEBPACK_IMPORTED_MODULE_3__["styleTags"])({
    "get set async static": "modifier",
    "for while do if else switch try catch finally return throw break continue default case": "keyword control",
    "in of await yield void typeof delete instanceof": "operatorKeyword",
    "export import let var const function class extends": "keyword definition",
    "with debugger from as": "keyword",
    TemplateString: "string#2",
    "BooleanLiteral Super": "atom",
    this: "self",
    null: "null",
    Star: "modifier",
    VariableName: "variableName",
    VariableDefinition: "variableName definition",
    Label: "labelName",
    PropertyName: "propertyName",
    PropertyNameDefinition: "propertyName definition",
    "PostfixOp UpdateOp": "updateOperator",
    LineComment: "lineComment",
    BlockComment: "blockComment",
    Number: "number",
    String: "string",
    ArithOp: "arithmeticOperator",
    LogicOp: "logicOperator",
    BitOp: "bitwiseOperator",
    CompareOp: "compareOperator",
    RegExp: "regexp",
    Equals: "operator definition",
    Spread: "punctuation",
    "Arrow :": "punctuation definition",
    "( )": "paren",
    "[ ]": "squareBracket",
    "{ }": "brace",
    ".": "derefOperator",
    ", ;": "separator"
})));
/// Returns an extension that installs the JavaScript syntax provider.
function javascript() { return javascriptSyntax.extension; }

/// Connects an [ESLint](https://eslint.org/) linter to CodeMirror's
/// [lint](#lint) integration. `eslint` should be an instance of the
/// [`Linter`](https://eslint.org/docs/developer-guide/nodejs-api#linter)
/// class, and `config` an optional ESLint configuration. The return
/// value of this function can be passed to [`linter`](#lint.linter)
/// to create a JavaScript linting extension.
///
/// Note that ESLint targets node, and is tricky to run in the
/// browser. The [eslint4b](https://github.com/mysticatea/eslint4b)
/// and
/// [eslint4b-prebuilt](https://github.com/marijnh/eslint4b-prebuilt/)
/// packages may help with that.
function esLint(eslint, config) {
    if (!config) {
        config = {
            parserOptions: { ecmaVersion: 2019, sourceType: "module" },
            env: { browser: true, node: true, es6: true, es2015: true, es2017: true, es2020: true },
            rules: {}
        };
        eslint.getRules().forEach((desc, name) => {
            if (desc.meta.docs.recommended)
                config.rules[name] = 2;
        });
    }
    function range(state, from = 0, to = state.doc.length) {
        let fromLine = state.doc.lineAt(from), offset = { line: fromLine.number - 1, col: from - fromLine.start, pos: from };
        return eslint.verify(state.doc.slice(from, to), config)
            .map((val) => translateDiagnostic(val, state.doc, offset));
    }
    return (view) => {
        let [syntax] = view.state.facet(_state__WEBPACK_IMPORTED_MODULE_2__["EditorState"].syntax);
        if (syntax == javascriptSyntax)
            return range(view.state);
        if (!syntax || !(syntax instanceof _syntax__WEBPACK_IMPORTED_MODULE_1__["LezerSyntax"] && syntax.parser.hasNested))
            return [];
        let found = [];
        // FIXME move to async parsing?
        syntax.getTree(view.state).iterate({
            enter(type, start, end) {
                if (type == javascriptSyntax.docNodeType) {
                    for (let d of range(view.state, start, end))
                        found.push(d);
                    return false;
                }
                return undefined;
            }
        });
        return found;
    };
}
function mapPos(line, col, doc, offset) {
    return doc.line(line + offset.line).start + col + (line == 1 ? offset.col - 1 : -1);
}
function translateDiagnostic(input, doc, offset) {
    let start = mapPos(input.line, input.column, doc, offset);
    let result = {
        from: start,
        to: input.endLine != null && input.endColumn != 1 ? mapPos(input.endLine, input.endColumn, doc, offset) : start,
        message: input.message,
        source: input.ruleId ? "jshint:" + input.ruleId : "jshint",
        severity: input.severity == 1 ? "warning" : "error",
    };
    if (input.fix) {
        let { range, text } = input.fix, from = range[0] + offset.pos - start, to = range[1] + offset.pos - start;
        result.actions = [{
                name: "fix",
                apply(view, start) {
                    view.dispatch(view.state.t().replace(start + from, start + to, text).scrollIntoView());
                }
            }];
    }
    return result;
}




/***/ }),

/***/ "./node_modules/@codemirror/next/rangeset/dist/index.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@codemirror/next/rangeset/dist/index.es.js ***!
  \*****************************************************************/
/*! exports provided: Range, RangeSet, RangeSetBuilder, RangeValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeSet", function() { return RangeSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeSetBuilder", function() { return RangeSetBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeValue", function() { return RangeValue; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state */ "./node_modules/@codemirror/next/state/dist/index.es.js");


/// Each range is associated with a value, which must inherit from
/// this class.
class RangeValue {
    /// Compare this value with another value. The default
    /// implementation compares by identity.
    eq(other) { return this == other; }
    /// Create a [range](#rangeset.Range) with this value.
    range(from, to = from) { return new Range(from, to, this); }
}
RangeValue.prototype.startSide = RangeValue.prototype.endSide = 0;
RangeValue.prototype.point = false;
RangeValue.prototype.startMapMode = RangeValue.prototype.endMapMode = _state__WEBPACK_IMPORTED_MODULE_0__["MapMode"].TrackDel;
/// A range associates a value with a range of positions.
class Range {
    /// @internal
    constructor(
    /// The range's start position.
    from, 
    /// Its end position.
    to, 
    /// The value associated with this range.
    value) {
        this.from = from;
        this.to = to;
        this.value = value;
    }
}
function cmpRange(a, b) {
    return a.from - b.from || a.value.startSide - b.value.startSide;
}
// The maximum amount of ranges to store in a single chunk
const ChunkSize = 250, 
// Chunks with points of this size are never skipped during
// compare, since moving past those points is likely to speed
// up, rather than slow down, the comparison.
BigPointSize = 500, 
// A large (fixnum) value to use for max/min values.
Far = 1e9;
class Chunk {
    constructor(from, to, value, 
    // Chunks are marked with the largest point that occurs
    // in them (or -1 for no points), so that scans that are
    // only interested in points (such as the
    // heightmap-related logic) can skip range-only chunks.
    maxPoint) {
        this.from = from;
        this.to = to;
        this.value = value;
        this.maxPoint = maxPoint;
    }
    get length() { return this.to[this.to.length - 1]; }
    // With side == -1, return the first index where to >= pos. When
    // side == 1, the first index where from > pos.
    findIndex(pos, end, side = end * Far, startAt = 0) {
        if (pos <= 0)
            return startAt;
        let arr = end < 0 ? this.to : this.from;
        for (let lo = startAt, hi = arr.length;;) {
            if (lo == hi)
                return lo;
            let mid = (lo + hi) >> 1;
            let diff = arr[mid] - pos || (end < 0 ? this.value[mid].startSide : this.value[mid].endSide) - side;
            if (mid == lo)
                return diff >= 0 ? lo : hi;
            if (diff >= 0)
                hi = mid;
            else
                lo = mid + 1;
        }
    }
    between(offset, from, to, f) {
        for (let i = this.findIndex(from, -1), e = this.findIndex(to, 1, undefined, i); i < e; i++)
            if (f(this.from[i] + offset, this.to[i] + offset, this.value[i]) === false)
                return false;
    }
    map(offset, changes) {
        let value = [], from = [], to = [], newPos = -1, maxPoint = -1;
        for (let i = 0; i < this.value.length; i++) {
            let val = this.value[i];
            let newFrom = changes.mapPos(this.from[i] + offset, val.startSide, val.startMapMode);
            let newTo = changes.mapPos(this.to[i] + offset, val.endSide, val.endMapMode);
            if (newTo < 0) {
                if (newFrom < 0)
                    continue;
                newTo = -(newTo + 1);
            }
            if (newFrom < 0)
                newFrom = -(newFrom + 1);
            if ((newTo - newFrom || val.endSide - val.startSide) < 0)
                continue;
            if (newPos < 0)
                newPos = newFrom;
            if (val.point)
                maxPoint = Math.max(maxPoint, newTo - newFrom);
            value.push(val);
            from.push(newFrom - newPos);
            to.push(newTo - newPos);
        }
        return { mapped: value.length ? new Chunk(from, to, value, maxPoint) : null, pos: newPos };
    }
}
/// A range set stores a collection of [ranges](#rangeset.Range) in a
/// way that makes them efficient to [map](#rangeset.RangeSet.map) and
/// [update](#rangeset.RangeSet.update). This is an immutable data
/// structure.
class RangeSet {
    /// @internal
    constructor(
    /// @internal
    chunkPos, 
    /// @internal
    chunk, 
    /// @internal
    nextLayer = RangeSet.empty, 
    /// @internal
    maxPoint) {
        this.chunkPos = chunkPos;
        this.chunk = chunk;
        this.nextLayer = nextLayer;
        this.maxPoint = maxPoint;
    }
    /// @internal
    get length() {
        let last = this.chunk.length - 1;
        return last < 0 ? 0 : Math.max(this.chunkEnd(last), this.nextLayer.length);
    }
    /// @internal
    get size() {
        if (this == RangeSet.empty)
            return 0;
        let size = this.nextLayer.size;
        for (let chunk of this.chunk)
            size += chunk.value.length;
        return size;
    }
    /// @internal
    chunkEnd(index) {
        return this.chunkPos[index] + this.chunk[index].length;
    }
    /// Update the range set, optionally adding new ranges or filtering
    /// out existing ones.
    update({ add = [], sort = false, filter, filterFrom = 0, filterTo = this.length }) {
        if (add.length == 0 && !filter)
            return this;
        if (sort)
            add.slice().sort(cmpRange);
        if (this == RangeSet.empty)
            return add.length ? RangeSet.of(add) : this;
        let cur = new LayerCursor(this, null, -1).goto(0), i = 0, spill = [];
        let builder = new RangeSetBuilder();
        while (cur.value || i < add.length) {
            if (i < add.length && (cur.from - add[i].from || cur.startSide - add[i].value.startSide) >= 0) {
                let range = add[i++];
                if (!builder.addInner(range.from, range.to, range.value))
                    spill.push(range);
            }
            else if (cur.rangeIndex == 1 && cur.chunkIndex < this.chunk.length &&
                (i == add.length || this.chunkEnd(cur.chunkIndex) < add[i].from) &&
                (!filter || filterFrom > this.chunkEnd(cur.chunkIndex) || filterTo < this.chunkPos[cur.chunkIndex]) &&
                builder.addChunk(this.chunkPos[cur.chunkIndex], this.chunk[cur.chunkIndex])) {
                cur.nextChunk();
            }
            else {
                if (!filter || filterFrom > cur.to || filterTo < cur.from || filter(cur.from, cur.to, cur.value)) {
                    if (!builder.addInner(cur.from, cur.to, cur.value))
                        spill.push(new Range(cur.from, cur.to, cur.value));
                }
                cur.next();
            }
        }
        return builder.finishInner(this.nextLayer == RangeSet.empty && !spill.length ? RangeSet.empty
            : this.nextLayer.update({ add: spill, filter, filterFrom, filterTo }));
    }
    /// Map this range set through a set of changes, return the new set.
    map(changes) {
        if (changes.length == 0 || this == RangeSet.empty)
            return this;
        let chunks = [], chunkPos = [], maxPoint = -1;
        for (let i = 0; i < this.chunk.length; i++) {
            let start = this.chunkPos[i], chunk = this.chunk[i];
            let touch = changes.touchesRange(start, start + chunk.length);
            if (touch === false) {
                maxPoint = Math.max(maxPoint, chunk.maxPoint);
                chunks.push(chunk);
                chunkPos.push(changes.mapPos(start));
            }
            else if (touch === true) {
                let { mapped, pos } = chunk.map(start, changes);
                if (mapped) {
                    maxPoint = Math.max(maxPoint, mapped.maxPoint);
                    chunks.push(mapped);
                    chunkPos.push(pos);
                }
            }
        }
        let next = this.nextLayer.map(changes);
        return chunks.length == 0 ? next : new RangeSet(chunkPos, chunks, next, maxPoint);
    }
    /// Iterate over the ranges that touch the region `from` to `to`,
    /// calling `f` for each. There is no guarantee that the ranges will
    /// be reported in any order. When the callback returns `false`,
    /// iteration stops.
    between(from, to, f) {
        if (this == RangeSet.empty)
            return;
        for (let i = 0; i < this.chunk.length; i++) {
            let start = this.chunkPos[i], chunk = this.chunk[i];
            if (to >= start && from <= start + chunk.length &&
                chunk.between(start, from - start, to - start, f) === false)
                return;
        }
        this.nextLayer.between(from, to, f);
    }
    /// Iterate over the ranges in the set that touch the area between
    /// from and to, ordered by their start position and side.
    iter(from = 0) {
        return HeapCursor.from([this]).goto(from);
    }
    /// Iterate over two groups of sets, calling methods on `comparator`
    /// to notify it of possible differences. `textDiff` indicates how
    /// the underlying data changed between these ranges, and is needed
    /// to synchronize the iteration. `from` and `to` are coordinates in
    /// the _new_ space, after these changes.
    static compare(oldSets, newSets, textDiff, length, comparator) {
        var _a;
        let minPoint = (_a = comparator.minPointSize, (_a !== null && _a !== void 0 ? _a : -1));
        let a = oldSets.filter(set => set.maxPoint >= BigPointSize ||
            set != RangeSet.empty && newSets.indexOf(set) < 0 && set.maxPoint >= minPoint);
        let b = newSets.filter(set => set.maxPoint >= BigPointSize ||
            set != RangeSet.empty && oldSets.indexOf(set) < 0 && set.maxPoint >= minPoint);
        let sharedChunks = findSharedChunks(a, b);
        let sideA = new SpanCursor(a, sharedChunks, minPoint);
        let sideB = new SpanCursor(b, sharedChunks, minPoint);
        let posA = 0, posB = 0;
        for (let range of textDiff) {
            compare(sideA, posA, sideB, posB, range.fromB - posB, comparator);
            posA = range.toA;
            posB = range.toB;
        }
        compare(sideA, posA, sideB, posB, length - posB, comparator);
    }
    /// Iterate over a group of range sets at the same time, notifying
    /// the iterator about the ranges covering every given piece of
    /// content.
    static spans(sets, from, to, iterator) {
        var _a;
        let cursor = new SpanCursor(sets, null, (_a = iterator.minPointSize, (_a !== null && _a !== void 0 ? _a : -1))).goto(from), pos = from;
        for (;;) {
            let curTo = Math.min(cursor.to, to);
            if (cursor.point)
                iterator.point(pos, curTo, cursor.point, cursor.pointFrom < from, cursor.to > to);
            else if (curTo > pos)
                iterator.span(pos, curTo, cursor.active);
            if (cursor.to > to)
                break;
            pos = cursor.to;
            cursor.next();
        }
    }
    /// Create a range set for the given range or array of ranges. By
    /// default, this expects the ranges to be _sorted_ (by start
    /// position and, if two start at the same position,
    /// `value.startSide`). You can pass `true` as second argument to
    /// cause the method to sort them.
    static of(ranges, sort = false) {
        let build = new RangeSetBuilder();
        for (let range of ranges instanceof Range ? [ranges] : sort ? ranges.slice().sort(cmpRange) : ranges)
            build.add(range.from, range.to, range.value);
        return build.finish();
    }
}
/// The empty set of ranges.
RangeSet.empty = new RangeSet([], [], null, -1);
RangeSet.empty.nextLayer = RangeSet.empty;
/// A range set builder is a data structure that helps build up a
/// [range set](#rangeset.RangeSet) directly, without first allocating
/// an array of [`Range`](#rangeset.Range) objects.
class RangeSetBuilder {
    constructor() {
        this.chunks = [];
        this.chunkPos = [];
        this.chunkStart = -1;
        this.last = null;
        this.lastFrom = -Far;
        this.lastTo = -Far;
        this.from = [];
        this.to = [];
        this.value = [];
        this.maxPoint = -1;
        this.setMaxPoint = -1;
        this.nextLayer = null;
    }
    finishChunk(newArrays) {
        this.chunks.push(new Chunk(this.from, this.to, this.value, this.maxPoint));
        this.chunkPos.push(this.chunkStart);
        this.chunkStart = -1;
        this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint);
        this.maxPoint = -1;
        if (newArrays) {
            this.from = [];
            this.to = [];
            this.value = [];
        }
    }
    /// Add a range. Ranges should be added in sorted (by `from` and
    /// `value.startSide`) order.
    add(from, to, value) {
        if (!this.addInner(from, to, value))
            (this.nextLayer || (this.nextLayer = new RangeSetBuilder)).add(from, to, value);
    }
    /// @internal
    addInner(from, to, value) {
        let diff = from - this.lastTo || value.startSide - this.last.endSide;
        if (diff <= 0 && (from - this.lastFrom || value.startSide - this.last.startSide) < 0)
            throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        if (diff < 0)
            return false;
        if (this.from.length == ChunkSize)
            this.finishChunk(true);
        if (this.chunkStart < 0)
            this.chunkStart = from;
        this.from.push(from - this.chunkStart);
        this.to.push(to - this.chunkStart);
        this.last = value;
        this.lastFrom = from;
        this.lastTo = to;
        this.value.push(value);
        if (value.point)
            this.maxPoint = Math.max(this.maxPoint, to - from);
        return true;
    }
    /// @internal
    addChunk(from, chunk) {
        if ((from - this.lastTo || chunk.value[0].startSide - this.last.endSide) < 0)
            return false;
        if (this.from.length)
            this.finishChunk(true);
        this.setMaxPoint = Math.max(this.setMaxPoint, chunk.maxPoint);
        this.chunks.push(chunk);
        this.chunkPos.push(from);
        let last = chunk.value.length - 1;
        this.last = chunk.value[last];
        this.lastFrom = chunk.from[last] + from;
        this.lastTo = chunk.to[last] + from;
        return true;
    }
    /// Finish the range set. Returns the new set. The builder can't be
    /// used anymore after this has been called.
    finish() { return this.finishInner(RangeSet.empty); }
    /// @internal
    finishInner(next) {
        if (this.from.length)
            this.finishChunk(false);
        if (this.chunks.length == 0)
            return next;
        let result = new RangeSet(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(next) : next, this.setMaxPoint);
        this.from = null; // Make sure further `add` calls produce errors
        return result;
    }
}
function findSharedChunks(a, b) {
    let inA = new Map();
    for (let set of a)
        for (let i = 0; i < set.chunk.length; i++)
            if (set.chunk[i].maxPoint < BigPointSize)
                inA.set(set.chunk[i], set.chunkPos[i]);
    let shared = new Set();
    for (let set of b)
        for (let i = 0; i < set.chunk.length; i++)
            if (inA.get(set.chunk[i]) == set.chunkPos[i])
                shared.add(set.chunk[i]);
    return shared;
}
class LayerCursor {
    constructor(layer, skip, minPoint) {
        this.layer = layer;
        this.skip = skip;
        this.minPoint = minPoint;
    }
    get startSide() { return this.value ? this.value.startSide : 0; }
    get endSide() { return this.value ? this.value.endSide : 0; }
    goto(pos, side = -Far) {
        this.chunkIndex = this.rangeIndex = 0;
        this.gotoInner(pos, side, false);
        return this;
    }
    gotoInner(pos, side, forward) {
        while (this.chunkIndex < this.layer.chunk.length) {
            let next = this.layer.chunk[this.chunkIndex];
            if (!(this.skip && this.skip.has(next) ||
                this.layer.chunkEnd(this.chunkIndex) < pos ||
                next.maxPoint < this.minPoint))
                break;
            this.chunkIndex++;
            forward = false;
        }
        let rangeIndex = this.chunkIndex == this.layer.chunk.length ? 0
            : this.layer.chunk[this.chunkIndex].findIndex(pos - this.layer.chunkPos[this.chunkIndex], -1, side);
        if (!forward || this.rangeIndex < rangeIndex)
            this.rangeIndex = rangeIndex;
        this.next();
    }
    forward(pos, side) {
        if ((this.to - pos || this.endSide - side) < 0)
            this.gotoInner(pos, side, true);
    }
    next() {
        for (;;) {
            if (this.chunkIndex == this.layer.chunk.length) {
                this.from = this.to = Far;
                this.value = null;
                break;
            }
            else {
                let chunkPos = this.layer.chunkPos[this.chunkIndex], chunk = this.layer.chunk[this.chunkIndex];
                let from = chunkPos + chunk.from[this.rangeIndex];
                this.from = from;
                this.to = chunkPos + chunk.to[this.rangeIndex];
                this.value = chunk.value[this.rangeIndex];
                if (++this.rangeIndex == chunk.value.length) {
                    this.chunkIndex++;
                    if (this.skip) {
                        while (this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]))
                            this.chunkIndex++;
                    }
                    this.rangeIndex = 0;
                }
                if (this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
                    break;
            }
        }
    }
    nextChunk() {
        this.chunkIndex++;
        this.rangeIndex = 0;
        this.next();
    }
    compare(other) {
        return this.from - other.from || this.startSide - other.startSide || this.to - other.to || this.endSide - other.endSide;
    }
}
class HeapCursor {
    constructor(heap) {
        this.heap = heap;
    }
    static from(sets, skip = null, minPoint = -1) {
        let heap = [];
        for (let set of sets)
            for (let cur = set; cur != RangeSet.empty; cur = cur.nextLayer) {
                if (cur.maxPoint >= minPoint)
                    heap.push(new LayerCursor(cur, skip, minPoint));
            }
        return heap.length == 1 ? heap[0] : new HeapCursor(heap);
    }
    get startSide() { return this.value ? this.value.startSide : 0; }
    goto(pos, side = -Far) {
        for (let cur of this.heap)
            cur.goto(pos, side);
        for (let i = this.heap.length >> 1; i >= 0; i--)
            heapBubble(this.heap, i);
        this.next();
        return this;
    }
    forward(pos, side) {
        for (let cur of this.heap)
            cur.forward(pos, side);
        for (let i = this.heap.length >> 1; i >= 0; i--)
            heapBubble(this.heap, i);
        if ((this.to - pos || this.value.endSide - side) < 0)
            this.next();
    }
    next() {
        if (this.heap.length == 0) {
            this.from = this.to = Far;
            this.value = null;
        }
        else {
            let top = this.heap[0];
            this.from = top.from;
            this.to = top.to;
            this.value = top.value;
            if (top.value)
                top.next();
            heapBubble(this.heap, 0);
        }
    }
}
function heapBubble(heap, index) {
    for (let cur = heap[index];;) {
        let childIndex = (index << 1) + 1;
        if (childIndex >= heap.length)
            break;
        let child = heap[childIndex];
        if (childIndex + 1 < heap.length && child.compare(heap[childIndex + 1]) >= 0) {
            child = heap[childIndex + 1];
            childIndex++;
        }
        if (cur.compare(child) < 0)
            break;
        heap[childIndex] = cur;
        heap[index] = child;
        index = childIndex;
    }
}
class SpanCursor {
    constructor(sets, skip, minPoint) {
        this.minPoint = minPoint;
        this.active = [];
        this.activeTo = [];
        this.minActive = -1;
        // A currently active point range, if any
        this.point = null;
        this.pointFrom = 0;
        this.to = -Far;
        this.endSide = 0;
        this.cursor = HeapCursor.from(sets, skip, minPoint);
    }
    goto(pos, side = -Far) {
        this.cursor.goto(pos, side);
        this.active.length = this.activeTo.length = 0;
        this.minActive = -1;
        this.to = pos;
        this.endSide = side;
        this.next();
        return this;
    }
    forward(pos, side) {
        while (this.minActive > -1 && (this.activeTo[this.minActive] - pos || this.active[this.minActive].endSide - side) < 0)
            this.removeActive(this.minActive);
        this.cursor.forward(pos, side);
    }
    removeActive(index) {
        remove(this.active, index);
        remove(this.activeTo, index);
        this.minActive = findMinIndex(this.active, this.activeTo);
    }
    // After calling this, if `this.point` != null, the next range is a
    // point. Otherwise, it's a regular range, covered by `this.active`.
    next() {
        let from = this.to;
        this.point = null;
        for (;;) {
            let a = this.minActive;
            if (a > -1 && (this.activeTo[a] - this.cursor.from || this.active[a].endSide - this.cursor.startSide) < 0) {
                if (this.activeTo[a] > from) {
                    this.to = this.activeTo[a];
                    this.endSide = this.active[a].endSide;
                    break;
                }
                this.removeActive(a);
            }
            else if (!this.cursor.value) {
                this.to = this.endSide = Far;
                break;
            }
            else if (this.cursor.from > from) {
                this.to = this.cursor.from;
                this.endSide = this.cursor.startSide;
                break;
            }
            else {
                let nextVal = this.cursor.value;
                if (!nextVal.point) { // Opening a range
                    this.active.push(nextVal);
                    this.activeTo.push(this.cursor.to);
                    this.minActive = findMinIndex(this.active, this.activeTo);
                    this.cursor.next();
                }
                else { // New point
                    this.point = nextVal;
                    this.pointFrom = this.cursor.from;
                    this.to = this.cursor.to;
                    this.endSide = nextVal.endSide;
                    this.cursor.next();
                    if (this.to > from)
                        this.forward(this.to, this.endSide);
                    break;
                }
            }
        }
    }
}
function compare(a, startA, b, startB, length, comparator) {
    a.goto(startA);
    b.goto(startB);
    let endB = startB + length;
    let pos = startB, dPos = startB - startA;
    for (;;) {
        let diff = (a.to + dPos) - b.to || a.endSide - b.endSide;
        let end = diff < 0 ? a.to + dPos : b.to, clipEnd = Math.min(end, endB);
        if (a.point || b.point) {
            if (!(a.point && b.point && (a.point == b.point || a.point.eq(b.point))))
                comparator.comparePoint(pos, clipEnd, a.point, b.point);
        }
        else {
            if (clipEnd > pos && !sameSet(a.active, b.active))
                comparator.compareRange(pos, clipEnd, a.active, b.active);
        }
        if (end > endB)
            break;
        pos = end;
        if (diff <= 0)
            a.next();
        if (diff >= 0)
            b.next();
    }
}
function sameSet(a, b) {
    if (a.length != b.length)
        return false;
    outer: for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++)
            if (a[i] == b[i] || a[i].eq(b[j]))
                continue outer;
        return false;
    }
    return true;
}
function remove(array, index) {
    let last = array.pop();
    if (index != array.length)
        array[index] = last;
}
function findMinIndex(value, array) {
    let found = -1, foundPos = Far;
    for (let i = 0; i < array.length; i++)
        if ((array[i] - foundPos || value[i].endSide - value[found].endSide) < 0) {
            found = i;
            foundPos = array[i];
        }
    return found;
}




/***/ }),

/***/ "./node_modules/@codemirror/next/state/dist/index.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/@codemirror/next/state/dist/index.es.js ***!
  \**************************************************************/
/*! exports provided: Text, Annotation, Change, ChangeDesc, ChangeSet, ChangedRange, EditorSelection, EditorState, ExtensionGroup, Facet, MapMode, Precedence, SelectionRange, StateField, Transaction, combineConfig, fillConfig, languageData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Annotation", function() { return Annotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Change", function() { return Change; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeDesc", function() { return ChangeDesc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeSet", function() { return ChangeSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangedRange", function() { return ChangedRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorSelection", function() { return EditorSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorState", function() { return EditorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtensionGroup", function() { return ExtensionGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facet", function() { return Facet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMode", function() { return MapMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Precedence", function() { return Precedence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionRange", function() { return SelectionRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateField", function() { return StateField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineConfig", function() { return combineConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillConfig", function() { return fillConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languageData", function() { return languageData; });
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../text */ "./node_modules/@codemirror/next/text/dist/index.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _text__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony import */ var lezer_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lezer-tree */ "./node_modules/lezer-tree/dist/tree.js");
/* harmony import */ var lezer_tree__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lezer_tree__WEBPACK_IMPORTED_MODULE_1__);




/// A single selection range. When
/// [`allowMultipleSelections`](#state.EditorState^allowMultipleSelections)
/// is enabled, a [selection](#state.EditorSelection) may hold
/// multiple ranges. By default, selections hold exactly one range.
class SelectionRange {
    /// Create a range. `head` defaults to `anchor` when not given.
    constructor(
    /// The anchor of the range—the side that doesn't move when you
    /// extend it.
    anchor, 
    /// The head of the range, which is moved when the range is
    /// [extended](#state.SelectionRange.extend).
    head = anchor) {
        this.anchor = anchor;
        this.head = head;
    }
    /// The lower side of the range.
    get from() { return Math.min(this.anchor, this.head); }
    /// The upper side of the range.
    get to() { return Math.max(this.anchor, this.head); }
    /// True when `anchor` and `head` are at the same position.
    get empty() { return this.anchor == this.head; }
    /// Map this range through a mapping.
    map(mapping) {
        let anchor = mapping.mapPos(this.anchor), head = mapping.mapPos(this.head);
        if (anchor == this.anchor && head == this.head)
            return this;
        else
            return new SelectionRange(anchor, head);
    }
    /// Extend this range to cover at least `from` to `to`.
    extend(from, to = from) {
        if (from <= this.anchor && to >= this.anchor)
            return new SelectionRange(from, to);
        let head = Math.abs(from - this.anchor) > Math.abs(to - this.anchor) ? from : to;
        return new SelectionRange(this.anchor, head);
    }
    /// Compare this range to another range.
    eq(other) {
        return this.anchor == other.anchor && this.head == other.head;
    }
    /// Return a JSON-serializable object representing the range.
    toJSON() { return this; }
    /// Convert a JSON representation of a range to a `SelectionRange`
    /// instance.
    static fromJSON(json) {
        if (!json || typeof json.anchor != "number" || typeof json.head != "number")
            throw new RangeError("Invalid JSON representation for SelectionRange");
        return new SelectionRange(json.anchor, json.head);
    }
    /// @internal FIXME export?
    static groupAt(state, pos, bias = 1) {
        // FIXME at some point, take language-specific identifier characters into account
        let line = state.doc.lineAt(pos), linePos = pos - line.start;
        if (line.length == 0)
            return new SelectionRange(pos);
        if (linePos == 0)
            bias = 1;
        else if (linePos == line.length)
            bias = -1;
        let read = linePos + (bias < 0 ? -1 : 0), type = Object(_text__WEBPACK_IMPORTED_MODULE_0__["charType"])(line.slice(read, read + 1));
        let from = pos, to = pos;
        for (let lineFrom = linePos; lineFrom > 0 && Object(_text__WEBPACK_IMPORTED_MODULE_0__["charType"])(line.slice(lineFrom - 1, lineFrom)) == type; lineFrom--)
            from--;
        for (let lineTo = linePos; lineTo < line.length && Object(_text__WEBPACK_IMPORTED_MODULE_0__["charType"])(line.slice(lineTo, lineTo + 1)) == type; lineTo++)
            to++;
        return new SelectionRange(to, from);
    }
}
/// An editor selection holds one or more selection ranges.
class EditorSelection {
    /// @internal
    constructor(
    /// The ranges in the selection, sorted by position. Ranges cannot
    /// overlap (but they may touch, if they aren't empty).
    ranges, 
    /// The index of the _primary_ range in the selection (which is
    /// usually the range that was added last).
    primaryIndex = 0) {
        this.ranges = ranges;
        this.primaryIndex = primaryIndex;
    }
    /// Map a selection through a mapping. Mostly used to adjust the
    /// selection position for changes.
    map(mapping) {
        return EditorSelection.create(this.ranges.map(r => r.map(mapping)), this.primaryIndex);
    }
    /// Compare this selection to another selection.
    eq(other) {
        if (this.ranges.length != other.ranges.length ||
            this.primaryIndex != other.primaryIndex)
            return false;
        for (let i = 0; i < this.ranges.length; i++)
            if (!this.ranges[i].eq(other.ranges[i]))
                return false;
        return true;
    }
    /// Get the primary selection range. Usually, you should make sure
    /// your code applies to _all_ ranges, by using transaction methods
    /// like [`forEachRange`](#state.transaction.forEachRange).
    get primary() { return this.ranges[this.primaryIndex]; }
    /// Make sure the selection only has one range. Returns a selection
    /// holding only the primary range from this selection.
    asSingle() {
        return this.ranges.length == 1 ? this : new EditorSelection([this.primary]);
    }
    /// Extend this selection with an extra range.
    addRange(range, primary = true) {
        return EditorSelection.create([range].concat(this.ranges), primary ? 0 : this.primaryIndex + 1);
    }
    /// Replace a given range with another range, and then normalize the
    /// selection to merge and sort ranges if necessary.
    replaceRange(range, which = this.primaryIndex) {
        let ranges = this.ranges.slice();
        ranges[which] = range;
        return EditorSelection.create(ranges, this.primaryIndex);
    }
    /// Convert this selection to an object that can be serialized to
    /// JSON.
    toJSON() {
        return this.ranges.length == 1 ? this.ranges[0].toJSON() :
            { ranges: this.ranges.map(r => r.toJSON()), primaryIndex: this.primaryIndex };
    }
    /// Create a selection from a JSON representation.
    static fromJSON(json) {
        if (json && Array.isArray(json.ranges)) {
            if (typeof json.primaryIndex != "number" || json.primaryIndex >= json.ranges.length)
                throw new RangeError("Invalid JSON representation for EditorSelection");
            return new EditorSelection(json.ranges.map((r) => SelectionRange.fromJSON(r)), json.primaryIndex);
        }
        return new EditorSelection([SelectionRange.fromJSON(json)]);
    }
    /// Create a selection holding a single range.
    static single(anchor, head = anchor) {
        return new EditorSelection([new SelectionRange(anchor, head)], 0);
    }
    /// Sort and merge the given set of ranges, creating a valid
    /// selection.
    static create(ranges, primaryIndex = 0) {
        for (let pos = 0, i = 0; i < ranges.length; i++) {
            let range = ranges[i];
            if (range.empty ? range.from <= pos : range.from < pos)
                return normalized(ranges.slice(), primaryIndex);
            pos = range.to;
        }
        return new EditorSelection(ranges, primaryIndex);
    }
}
function normalized(ranges, primaryIndex = 0) {
    let primary = ranges[primaryIndex];
    ranges.sort((a, b) => a.from - b.from);
    primaryIndex = ranges.indexOf(primary);
    for (let i = 1; i < ranges.length; i++) {
        let range = ranges[i], prev = ranges[i - 1];
        if (range.empty ? range.from <= prev.to : range.from < prev.to) {
            let from = prev.from, to = Math.max(range.to, prev.to);
            if (i <= primaryIndex)
                primaryIndex--;
            ranges.splice(--i, 2, range.anchor > range.head ? new SelectionRange(to, from) : new SelectionRange(from, to));
        }
    }
    return new EditorSelection(ranges, primaryIndex);
}
function checkSelection(selection, doc) {
    for (let range of selection.ranges)
        if (range.to > doc.length)
            throw new RangeError("Selection points outside of document");
}

let nextID = 0;
/// A facet is a value that is assicated with a state and can be
/// influenced by any number of extensions. Extensions can provide
/// input values for the facet, and the facet combines those into an
/// output value.
///
/// Examples of facets are the theme styles associated with an editor
/// (which are all stored) or the tab size (which is reduced to a
/// single value, using the input with the hightest precedence).
class Facet {
    constructor(
    /// @internal
    combine, 
    /// @internal
    compareInput, 
    /// @internal
    compare, isStatic) {
        this.combine = combine;
        this.compareInput = compareInput;
        this.compare = compare;
        this.isStatic = isStatic;
        /// @internal
        this.id = nextID++;
        this.default = combine([]);
    }
    /// Define a new facet.
    static define(config = {}) {
        return new Facet(config.combine || ((a) => a), config.compareInput || ((a, b) => a === b), config.compare || (!config.combine ? sameArray : (a, b) => a === b), !!config.static);
    }
    /// Returns an extension that adds the given value for this facet.
    of(value) {
        return new FacetProvider([], this, 0 /* Static */, value);
    }
    /// Create an extension that computes a value for the facet from a
    /// state. You must take care to declare the parts of the state that
    /// this value depends on, since your function is only called again
    /// for a new state when one of those parts changed.
    ///
    /// In most cases, you'll want to use
    /// [`StateField.provide`](#state.StateField^provide) instead.
    compute(deps, get) {
        if (this.isStatic)
            throw new Error("Can't compute a static facet");
        return new FacetProvider(deps, this, 1 /* Single */, get);
    }
    /// Create an extension that computes zero or more values for this
    /// facet from a state.
    computeN(deps, get) {
        if (this.isStatic)
            throw new Error("Can't compute a static facet");
        return new FacetProvider(deps, this, 2 /* Multi */, get);
    }
}
function sameArray(a, b) {
    return a == b || a.length == b.length && a.every((e, i) => e === b[i]);
}
class FacetProvider {
    constructor(dependencies, facet, type, value) {
        this.dependencies = dependencies;
        this.facet = facet;
        this.type = type;
        this.value = value;
        this.id = nextID++;
    }
    dynamicSlot(addresses) {
        let getter = this.value;
        let compare = this.facet.compareInput;
        let idx = addresses[this.id] >> 1, multi = this.type == 2 /* Multi */;
        let depDoc = false, depSel = false, depAddrs = [];
        for (let dep of this.dependencies) {
            if (dep == "doc")
                depDoc = true;
            else if (dep == "selection")
                depSel = true;
            else if ((addresses[dep.id] & 1) == 0)
                depAddrs.push(addresses[dep.id]);
        }
        return (state, tr) => {
            if (!tr || tr.reconfigured) {
                state.values[idx] = getter(state);
                return 1 /* Changed */;
            }
            else {
                let depChanged = (depDoc && tr.docChanged) || (depSel && (tr.docChanged || tr.selectionSet)) ||
                    depAddrs.some(addr => (ensureAddr(state, addr) & 1 /* Changed */) > 0);
                if (!depChanged)
                    return 0;
                let newVal = getter(state), oldVal = tr.startState.values[idx];
                if (multi ? compareArray(newVal, oldVal, compare) : compare(newVal, oldVal))
                    return 0;
                state.values[idx] = newVal;
                return 1 /* Changed */;
            }
        };
    }
}
function compareArray(a, b, compare) {
    if (a.length != b.length)
        return false;
    for (let i = 0; i < a.length; i++)
        if (!compare(a[i], b[i]))
            return false;
    return true;
}
function dynamicFacetSlot(addresses, facet, providers) {
    let providerAddrs = providers.map(p => addresses[p.id]);
    let providerTypes = providers.map(p => p.type);
    let dynamic = providerAddrs.filter(p => !(p & 1));
    let idx = addresses[facet.id] >> 1;
    return (state, tr) => {
        let oldAddr = !tr ? null : tr.reconfigured ? tr.startState.config.address[facet.id] : idx << 1;
        let changed = oldAddr == null;
        for (let dynAddr of dynamic) {
            if (ensureAddr(state, dynAddr) & 1 /* Changed */)
                changed = true;
        }
        if (!changed)
            return 0;
        let values = [];
        for (let i = 0; i < providerAddrs.length; i++) {
            let value = getAddr(state, providerAddrs[i]);
            if (providerTypes[i] == 2 /* Multi */)
                for (let val of value)
                    values.push(val);
            else
                values.push(value);
        }
        let newVal = facet.combine(values);
        if (oldAddr != null && facet.compare(newVal, getAddr(tr.startState, oldAddr)))
            return 0;
        state.values[idx] = newVal;
        return 1 /* Changed */;
    };
}
/// Fields can store additional information in an editor state, and
/// keep it in sync with the rest of the state.
class StateField {
    constructor(
    /// @internal
    id, createF, updateF, compareF, 
    /// @internal
    facets) {
        this.id = id;
        this.createF = createF;
        this.updateF = updateF;
        this.compareF = compareF;
        this.facets = facets;
    }
    /// Define a state field.
    static define(config) {
        return new StateField(nextID++, config.create, config.update, config.compare || ((a, b) => a === b), []);
    }
    provide(facet, get, prec) {
        let provider = facet.compute([this], get ? state => get(state.field(this)) : state => state.field(this));
        return new StateField(this.id, this.createF, this.updateF, this.compareF, this.facets.concat(maybePrec(prec, provider)));
    }
    /// Extends the field to provide zero or more input values for the
    /// given facet.
    provideN(facet, get, prec) {
        let provider = facet.computeN([this], state => get(state.field(this)));
        return new StateField(this.id, this.createF, this.updateF, this.compareF, this.facets.concat(maybePrec(prec, provider)));
    }
    /// @internal
    slot(addresses) {
        let idx = addresses[this.id] >> 1;
        return (state, tr) => {
            let oldIdx = !tr ? null : tr.reconfigured ? tr.startState.config.address[this.id] >> 1 : idx;
            if (oldIdx == null) {
                state.values[idx] = this.createF(state);
                return 1 /* Changed */;
            }
            else {
                let oldVal = tr.startState.values[oldIdx], value = this.updateF(oldVal, tr, state);
                if (this.compareF(oldVal, value))
                    return 0;
                state.values[idx] = value;
                return 1 /* Changed */;
            }
        };
    }
}
/// By default extensions are registered in the order they are
/// provided in a flattening of the nested arrays that were provided.
/// Individual extension values can be assigned a precedence to
/// override this. Extensions that do not have a precedence set get
/// the precedence of the nearest parent with a precedence, or
/// [`Default`](#state.Precedence.Default) if there is no such parent.
/// The final ordering of extensions is determined by first sorting by
/// precedence and then by order within each precedence.
class Precedence {
    constructor(
    /// @internal
    val) {
        this.val = val;
    }
    /// Tag an extension with this precedence.
    set(extension) {
        return new PrecExtension(extension, this.val);
    }
}
/// A precedence below the default precedence, which will cause
/// default-precedence extensions to override it even if they are
/// specified later in the extension ordering.
Precedence.Fallback = new Precedence(3);
/// The regular default precedence.
Precedence.Default = new Precedence(2);
/// A higher-than-default precedence.
Precedence.Extend = new Precedence(1);
/// Precedence above the `Default` and `Extend` precedences.
Precedence.Override = new Precedence(0);
function maybePrec(prec, ext) {
    return prec == null ? ext : prec.set(ext);
}
class PrecExtension {
    constructor(e, prec) {
        this.e = e;
        this.prec = prec;
    }
}
class GroupExtension {
    constructor(extension, group) {
        this.extension = extension;
        this.group = group;
    }
}
/// Extension groups can be used to make a configuration dynamic.
/// [Wrapping](#state.ExtensionGroup.of) an extension in a group
/// allows you to later replace it with
/// [`Transaction.replaceExtension`](#state.Transaction.replaceExtension).
/// A given group may only occur once within a given configuration.
class ExtensionGroup {
    /// Define a new group. The name is used only for debugging
    /// purposes.
    constructor(name) {
        this.name = name;
    }
    /// Tag the given extension with this group.
    of(extension) { return new GroupExtension(extension, this); }
}
class Configuration {
    constructor(source, replacements, dynamicSlots, address, staticValues) {
        this.source = source;
        this.replacements = replacements;
        this.dynamicSlots = dynamicSlots;
        this.address = address;
        this.staticValues = staticValues;
        this.statusTemplate = [];
        while (this.statusTemplate.length < staticValues.length)
            this.statusTemplate.push(0 /* Uninitialized */);
    }
    staticFacet(facet) {
        let addr = this.address[facet.id];
        return addr == null ? facet.default : this.staticValues[addr >> 1];
    }
    static resolve(extension, replacements = new Map, oldState) {
        let fields = [];
        let facets = Object.create(null);
        for (let ext of flatten(extension, replacements)) {
            if (ext instanceof StateField)
                fields.push(ext);
            else
                (facets[ext.facet.id] || (facets[ext.facet.id] = [])).push(ext);
        }
        let address = Object.create(null);
        let staticValues = [];
        let dynamicSlots = [];
        for (let field of fields) {
            address[field.id] = dynamicSlots.length << 1;
            dynamicSlots.push(a => field.slot(a));
        }
        for (let id in facets) {
            let providers = facets[id], facet = providers[0].facet;
            if (providers.every(p => p.type == 0 /* Static */)) {
                address[facet.id] = (staticValues.length << 1) | 1;
                let value = facet.combine(providers.map(p => p.value));
                let oldAddr = oldState ? oldState.config.address[facet.id] : null;
                if (oldAddr != null) {
                    let oldVal = getAddr(oldState, oldAddr);
                    if (facet.compare(value, oldVal))
                        value = oldVal;
                }
                staticValues.push(value);
            }
            else {
                for (let p of providers) {
                    if (p.type == 0 /* Static */) {
                        address[p.id] = (staticValues.length << 1) | 1;
                        staticValues.push(p.value);
                    }
                    else {
                        address[p.id] = dynamicSlots.length << 1;
                        dynamicSlots.push(a => p.dynamicSlot(a));
                    }
                }
                address[facet.id] = dynamicSlots.length << 1;
                dynamicSlots.push(a => dynamicFacetSlot(a, facet, providers));
            }
        }
        return new Configuration(extension, replacements, dynamicSlots.map(f => f(address)), address, staticValues);
    }
}
function flatten(extension, replacements) {
    let result = [[], [], [], []];
    let seen = new Set();
    let groupsSeen = new Set();
    (function inner(ext, prec) {
        if (seen.has(ext))
            return;
        seen.add(ext);
        if (Array.isArray(ext)) {
            for (let e of ext)
                inner(e, prec);
        }
        else if (ext instanceof GroupExtension) {
            if (groupsSeen.has(ext.group))
                throw new RangeError(`Duplicate use of group '${ext.group.name}' in extensions`);
            groupsSeen.add(ext.group);
            inner(replacements.get(ext.group) || ext.extension, prec);
        }
        else if (ext.extension) {
            inner(ext.extension, prec);
        }
        else if (ext instanceof PrecExtension) {
            inner(ext.e, ext.prec);
        }
        else {
            result[prec].push(ext);
            if (ext instanceof StateField)
                inner(ext.facets, prec);
        }
    })(extension, Precedence.Default.val);
    return result.reduce((a, b) => a.concat(b));
}
function ensureAddr(state, addr) {
    if (addr & 1)
        return 2 /* Computed */;
    let idx = addr >> 1;
    let status = state.status[idx];
    if (status == 4 /* Computing */)
        throw new Error("Cyclic dependency between fields and/or facets");
    if (status & 2 /* Computed */)
        return status;
    state.status[idx] = 4 /* Computing */;
    let changed = state.config.dynamicSlots[idx](state, state.applying);
    return state.status[idx] = 2 /* Computed */ | changed;
}
function getAddr(state, addr) {
    return addr & 1 ? state.config.staticValues[addr >> 1] : state.values[addr >> 1];
}

const allowMultipleSelections = Facet.define({
    combine: values => values.some(v => v),
    static: true
});
let annotationID = 0;
/// Annotations are tagged values that are used to add metadata to
/// transactions in an extensible way.
class Annotation {
    constructor() {
        /// @internal
        this.id = annotationID++;
    }
    /// Define a new type of annotation.
    static define() { return new Annotation(); }
}
/// A node prop that can be stored on a grammar's top node to
/// associate information with the language. Different extension might
/// use different properties from this object (which they typically
/// export as an interface).
const languageData = new lezer_tree__WEBPACK_IMPORTED_MODULE_1__["NodeProp"]();
// FIXME add a view plugin that schedules background parsing
// FIXME add a way to be notified when the document is fully parsed

const empty = [];
/// Distinguishes different ways in which positions can be mapped.
var MapMode;
(function (MapMode) {
    /// Map a position to a valid new position, even when its context
    /// was deleted.
    MapMode[MapMode["Simple"] = 0] = "Simple";
    /// Return a negative number if a deletion happens across the
    /// position. This number will be `-(newPos + 1)`, where `newPos` is
    /// the result you'd get with `MapMode.Simple`.
    MapMode[MapMode["TrackDel"] = 1] = "TrackDel";
    /// Return a negative number if the character _before_ the position
    /// is deleted. The result is encoded the same way as with
    /// `MapMode.TrackDel`.
    MapMode[MapMode["TrackBefore"] = 2] = "TrackBefore";
    /// Return a negative number if the character _after_ the position is
    /// deleted.
    MapMode[MapMode["TrackAfter"] = 3] = "TrackAfter";
})(MapMode || (MapMode = {}));
/// A change description describes a document change. This is usually
/// used as a superclass of [`Change`](#state.Change), but can be used
/// to store change data without storing the replacement string
/// content.
class ChangeDesc {
    /// Create a description that replaces the text between positions
    /// `from` and `to` with a new string of length `length`.
    constructor(
    /// The start position of the change.
    from, 
    /// The end of the change (as a pre-change document position).
    to, 
    /// The length of the replacing content.
    length) {
        this.from = from;
        this.to = to;
        this.length = length;
    }
    /// Get the change description of the inverse of this change.
    get invertedDesc() { return new ChangeDesc(this.from, this.from + this.length, this.to - this.from); }
    /// @internal
    mapPos(pos, bias = -1, mode = MapMode.Simple) {
        let { from, to, length } = this;
        if (pos < from)
            return pos;
        if (pos > to)
            return pos + (length - (to - from));
        if (pos == to || pos == from) {
            if (from < pos && mode == MapMode.TrackBefore || to > pos && mode == MapMode.TrackAfter)
                return -pos - 1;
            return (from == to ? bias <= 0 : pos == from) ? from : from + length;
        }
        pos = from + (bias <= 0 ? 0 : length);
        return mode != MapMode.Simple ? -pos - 1 : pos;
    }
    /// Return a JSON-serializeable object representing this value.
    toJSON() { return this; }
    /// Create a change description from its JSON representation.
    static fromJSON(json) {
        if (!json || typeof json.from != "number" || typeof json.to != "number" || typeof json.length != "number")
            throw new RangeError("Invalid JSON representation for ChangeDesc");
        return new ChangeDesc(json.from, json.to, json.length);
    }
}
/// Change objects describe changes to the document.
class Change extends ChangeDesc {
    /// Create a change that replaces `from` to `to` with `text`. The
    /// text is given as an array of lines. When it doesn't span lines,
    /// the array has a single element. When it does, a new element is
    /// added for every line. It should never have zero elements.
    constructor(from, to, 
    /// The replacement content.
    text) {
        super(from, to, textLength(text));
        this.from = from;
        this.to = to;
        this.text = text;
    }
    /// Create the inverse of this change when applied to the given
    /// document. `change.invert(doc).apply(change.apply(doc))` gets you
    /// the same document as the original `doc`.
    invert(doc) {
        return new Change(this.from, this.from + this.length, doc.sliceLines(this.from, this.to));
    }
    /// Apply this change to the given content, returning an updated
    /// version of the document.
    apply(doc) {
        return doc.replace(this.from, this.to, this.text);
    }
    /// Map this change through a mapping, producing a new change that
    /// can be applied to a post-mapping document. May return null if
    /// the mapping completely replaces the region this change would
    /// apply to.
    map(mapping) {
        let from = mapping.mapPos(this.from, 1), to = mapping.mapPos(this.to, -1);
        return from > to ? null : new Change(from, to, this.text);
    }
    /// A change description for this change.
    get desc() { return new ChangeDesc(this.from, this.to, this.length); }
    /// Produce a JSON-serializable object representing this change.
    toJSON() {
        return { from: this.from, to: this.to, text: this.text };
    }
    /// Read a change instance from its JSON representation.
    static fromJSON(json) {
        if (!json || typeof json.from != "number" || typeof json.to != "number" ||
            !Array.isArray(json.text) || json.text.length == 0 || json.text.some((val) => typeof val != "string"))
            throw new RangeError("Invalid JSON representation for Change");
        return new Change(json.from, json.to, json.text);
    }
}
function textLength(text) {
    let length = -1;
    for (let line of text)
        length += line.length + 1;
    return length;
}
/// A change set holds a sequence of changes or change descriptions.
class ChangeSet {
    /// @internal
    constructor(
    /// The changes in this set.
    changes, 
    /// @internal
    mirror = empty) {
        this.changes = changes;
        this.mirror = mirror;
        this._changedRanges = null;
    }
    /// The number of changes in the set.
    get length() {
        return this.changes.length;
    }
    /// Change sets can track which changes are inverses of each other,
    /// to allow robust position mapping in situations where changes are
    /// undone and then redone again. This queries which change is the
    /// mirror image of a given change (by index).
    getMirror(n) {
        for (let i = 0; i < this.mirror.length; i++)
            if (this.mirror[i] == n)
                return this.mirror[i + (i % 2 ? -1 : 1)];
        return null;
    }
    /// Append a change to this set, returning an extended set. `mirror`
    /// may be the index of a change already in the set, which
    /// [mirrors](#state.ChangeSet.getMirror) the new change.
    append(change, mirror) {
        return new ChangeSet(this.changes.concat(change), mirror != null ? this.mirror.concat(this.length, mirror) : this.mirror);
    }
    /// Append another change set to this one.
    appendSet(changes) {
        return changes.length == 0 ? this :
            this.length == 0 ? changes :
                new ChangeSet(this.changes.concat(changes.changes), this.mirror.concat(changes.mirror.map(i => i + this.length)));
    }
    /// @internal
    mapPos(pos, bias = -1, mode = MapMode.Simple) {
        return this.mapInner(pos, bias, mode, 0, this.length);
    }
    /// @internal
    mapInner(pos, bias, mode, fromI, toI) {
        let dir = toI < fromI ? -1 : 1;
        let recoverables = null;
        let hasMirrors = this.mirror.length > 0, rec, mirror, deleted = false;
        for (let i = fromI - (dir < 0 ? 1 : 0), endI = toI - (dir < 0 ? 1 : 0); i != endI; i += dir) {
            let { from, to, length } = this.changes[i];
            if (dir < 0) {
                let len = to - from;
                to = from + length;
                length = len;
            }
            if (pos < from)
                continue;
            if (pos > to) {
                pos += length - (to - from);
                continue;
            }
            // Change touches this position
            if (recoverables && (rec = recoverables[i]) != null) { // There's a recovery for this change, and it applies
                pos = from + rec;
                continue;
            }
            if (hasMirrors && (mirror = this.getMirror(i)) != null &&
                (dir > 0 ? mirror > i && mirror < toI : mirror < i && mirror >= toI)) { // A mirror exists
                if (pos > from && pos < to) { // If this change deletes the position, skip forward to the mirror
                    i = mirror;
                    pos = this.changes[i].from + (pos - from);
                    continue;
                }
                (recoverables || (recoverables = {}))[mirror] = pos - from;
            }
            if (pos > from && pos < to) {
                if (mode != MapMode.Simple)
                    deleted = true;
                pos = bias <= 0 ? from : from + length;
            }
            else {
                if (from < pos && mode == MapMode.TrackBefore || to > pos && mode == MapMode.TrackAfter)
                    deleted = true;
                pos = (from == to ? bias <= 0 : pos == from) ? from : from + length;
            }
        }
        return deleted ? -pos - 1 : pos;
    }
    /// Check whether these changes touch a given range. When one of the
    /// changes entirely covers the range, the string `"cover"` is
    /// returned.
    touchesRange(from, to) {
        let result = false;
        for (let change of this.changes) {
            if (change.to >= from && change.from <= to) {
                if (change.from < from && change.to > to)
                    return "cover";
                result = true;
            }
            let diff = change.length - (change.to - change.from);
            if (from > change.from)
                from += diff;
            if (to > change.to)
                to += diff;
        }
        return result;
    }
    /// Get a partial [mapping](#state.Mapping) covering part of this
    /// change set.
    partialMapping(from, to = this.length) {
        if (from == 0 && to == this.length)
            return this;
        return new PartialMapping(this, from, to);
    }
    /// Summarize this set of changes as a minimal sequence of changed
    /// ranges, sored by position. For example, if you have changes
    /// deleting between 1 and 4 and inserting a character at 1, the
    /// result would be a single range saying 1 to 4 in the old doc was
    /// replaced with range 1 to 2 in the new doc.
    changedRanges() {
        if (this._changedRanges)
            return this._changedRanges;
        let set = [];
        for (let i = 0; i < this.length; i++) {
            let change = this.changes[i];
            let fromA = change.from, toA = change.to, fromB = change.from, toB = change.from + change.length;
            if (i < this.length - 1) {
                let mapping = this.partialMapping(i + 1);
                fromB = mapping.mapPos(fromB, 1);
                toB = mapping.mapPos(toB, -1);
            }
            if (i > 0) {
                let mapping = this.partialMapping(i, 0);
                fromA = mapping.mapPos(fromA, 1);
                toA = mapping.mapPos(toA, -1);
            }
            new ChangedRange(fromA, toA, fromB, toB).addToSet(set);
        }
        return this._changedRanges = set;
    }
    /// Convert a set of changes to a set of change descriptions.
    get desc() {
        if (this.changes.length == 0 || this.changes[0] instanceof ChangeDesc)
            return this;
        return new ChangeSet(this.changes.map(ch => ch.desc), this.mirror);
    }
    /// Create a JSON-serializable representation of this change set.
    toJSON() {
        let changes = this.changes.map(change => change.toJSON());
        return this.mirror.length == 0 ? changes : { mirror: this.mirror, changes };
    }
    /// Read a change set from its JSON representation.
    static fromJSON(ChangeType, json) {
        let mirror, changes;
        if (Array.isArray(json)) {
            mirror = empty;
            changes = json;
        }
        else if (!json || !Array.isArray(json.mirror) || !Array.isArray(json.changes)) {
            throw new RangeError("Invalid JSON representation for ChangeSet");
        }
        else {
            ({ mirror, changes } = json);
        }
        return new ChangeSet(changes.map((ch) => ChangeType.fromJSON(ch)), mirror);
    }
}
/// The empty change set.
ChangeSet.empty = new ChangeSet(empty);
class PartialMapping {
    constructor(changes, from, to) {
        this.changes = changes;
        this.from = from;
        this.to = to;
    }
    mapPos(pos, bias = -1, mode = MapMode.Simple) {
        return this.changes.mapInner(pos, bias, mode, this.from, this.to);
    }
}
/// A changed range represents a replacement as two absolute ranges,
/// one pointing into the old document (the replaced content) and one
/// pointing into the new document (the content that replaces it).
class ChangedRange {
    // FIXME store unchanged ranges instead?
    constructor(
    /// The start of the replaced range in the old document.
    fromA, 
    /// The end of the replaced range in the old document.
    toA, 
    /// The start of the replacing range in the new document.
    fromB, 
    /// The end of the replacing range in the new document.
    toB) {
        this.fromA = fromA;
        this.toA = toA;
        this.fromB = fromB;
        this.toB = toB;
    }
    /// @internal
    join(other) {
        return new ChangedRange(Math.min(this.fromA, other.fromA), Math.max(this.toA, other.toA), Math.min(this.fromB, other.fromB), Math.max(this.toB, other.toB));
    }
    /// @internal
    // FIXME used by view. Document?
    addToSet(set) {
        let i = set.length, me = this;
        for (; i > 0; i--) {
            let range = set[i - 1];
            if (range.fromA > me.toA)
                continue;
            if (range.toA < me.fromA)
                break;
            me = me.join(range);
            set.splice(i - 1, 1);
        }
        set.splice(i, 0, me);
        return set;
    }
    /// The difference in document length created by this change
    /// (positive when the document grew).
    get lenDiff() { return (this.toB - this.fromB) - (this.toA - this.fromA); }
    /// @internal
    static mapPos(pos, bias, changes) {
        let off = 0;
        for (let range of changes) {
            if (pos < range.fromA)
                break;
            if (pos <= range.toA) {
                let side = range.toA == range.fromA ? bias : pos == range.fromA ? -1 : pos == range.toA ? 1 : bias;
                return side < 0 ? range.fromB : range.toB;
            }
            off = range.toB - range.toA;
        }
        return pos + off;
    }
}

/// Changes to the editor state are grouped into transactions.
/// Usually, a user action creates a single transaction, which may
/// contain zero or more document changes. Create a transaction by
/// calling [`EditorState.t`](#state.EditorState.t).
///
/// Transactions are mutable, and usually built up piece by piece with
/// updating methods and method chaining (most methods return the
/// transaction itself). Once they are
/// [applied](#state.Transaction.apply), they can't be updated
/// anymore.
class Transaction {
    /// @internal
    constructor(
    /// The state from which the transaction starts.
    startState, time = Date.now()) {
        this.startState = startState;
        /// The document changes made by this transaction.
        this.changes = ChangeSet.empty;
        /// The document versions after each of the changes.
        this.docs = [];
        this._annotations = Object.create(null);
        this.flags = 0;
        /// @internal
        this.reconfigureData = null;
        this.state = null;
        this.selection = startState.selection;
        this._annotations[Transaction.time.id] = time;
    }
    /// The document at the end of the transaction.
    get doc() {
        let last = this.docs.length - 1;
        return last < 0 ? this.startState.doc : this.docs[last];
    }
    /// Add annotations to this transaction. Annotations can provide
    /// additional information about the transaction.
    annotate(annotation, value) {
        this.ensureOpen();
        this._annotations[annotation.id] = value;
        return this;
    }
    /// Get the value of the given annotation type, if any.
    annotation(annotation) {
        return this._annotations[annotation.id];
    }
    /// Add a change to this transaction. If `mirror` is given, it
    /// should be the index (in `this.changes.changes`) at which the
    /// mirror image of this change sits.
    change(change, mirror) {
        this.ensureOpen();
        if (change.from == change.to && change.length == 0)
            return this;
        if (change.from < 0 || change.to < change.from || change.to > this.doc.length)
            throw new RangeError(`Invalid change ${change.from} to ${change.to}`);
        this.changes = this.changes.append(change, mirror);
        this.docs.push(change.apply(this.doc));
        this.selection = this.selection.map(change);
        return this;
    }
    /// Indicates whether the transaction changed the document.
    get docChanged() {
        return this.changes.length > 0;
    }
    /// Add a change replacing the given document range with the given
    /// content.
    replace(from, to, text) {
        return this.change(new Change(from, to, typeof text == "string" ? this.startState.splitLines(text) : text));
    }
    /// Replace all selection ranges with the given content.
    replaceSelection(text) {
        let content = typeof text == "string" ? this.startState.splitLines(text) : text;
        return this.forEachRange(range => {
            let change = new Change(range.from, range.to, content);
            this.change(change);
            return new SelectionRange(range.from + change.length);
        });
    }
    /// Run the given function for each selection range. The method will
    /// map the ranges to reflect deletions/insertions that happen
    /// before them. At the end, set the new selection to the ranges
    /// returned by the function (again, automatically mapped to for
    /// changes that happened after them).
    forEachRange(f) {
        let sel = this.selection, start = this.changes.length, newRanges = [];
        for (let range of sel.ranges) {
            let before = this.changes.length;
            let result = f(range.map(this.changes.partialMapping(start)), this);
            if (this.changes.length > before) {
                let mapping = this.changes.partialMapping(before);
                for (let i = 0; i < newRanges.length; i++)
                    newRanges[i] = newRanges[i].map(mapping);
            }
            newRanges.push(result);
        }
        return this.setSelection(EditorSelection.create(newRanges, sel.primaryIndex));
    }
    /// Update the selection.
    setSelection(selection) {
        this.ensureOpen();
        if (!this.startState.facet(allowMultipleSelections))
            selection = selection.asSingle();
        checkSelection(selection, this.doc);
        this.selection = selection;
        this.flags |= 1 /* SelectionSet */;
        return this;
    }
    /// Tells you whether this transaction explicitly sets a new
    /// selection (as opposed to just mapping the selection through
    /// changes).
    get selectionSet() {
        return (this.flags & 1 /* SelectionSet */) > 0;
    }
    /// Set a flag on this transaction that indicates that the editor
    /// should scroll the selection into view after applying it.
    scrollIntoView() {
        this.ensureOpen();
        this.flags |= 2 /* ScrollIntoView */;
        return this;
    }
    /// Query whether the selection should be scrolled into view after
    /// applying this transaction.
    get scrolledIntoView() {
        return (this.flags & 2 /* ScrollIntoView */) > 0;
    }
    /// Provice new content for a given [extension
    /// group](#state.ExtensionGroup) in the current configuration. (If
    /// the group isn't present in the configuration, this will not have
    /// any effect.)
    replaceExtension(group, content) {
        this.ensureOpen();
        if (!this.reconfigureData) {
            let replaced = new Map();
            this.startState.config.replacements.forEach((ext, group) => replaced.set(group, ext));
            this.reconfigureData = { base: this.startState.config.source, replaced };
        }
        this.reconfigureData.replaced.set(group, content);
        return this;
    }
    /// Move to an entirely new state configuration.
    reconfigure(extension) {
        this.ensureOpen();
        this.reconfigureData = { base: extension, replaced: new Map };
        return this;
    }
    /// Indicates whether the transaction reconfigures the state.
    get reconfigured() {
        return this.reconfigureData != null;
    }
    ensureOpen() {
        if (this.state)
            throw new Error("Transactions may not be modified after being applied");
    }
    /// Apply this transaction, computing a new editor state. May be
    /// called multiple times (the result is cached). The transaction
    /// cannot be further modified after this has been called.
    apply() {
        return this.state || (this.state = this.startState.applyTransaction(this));
    }
    /// Create a set of changes that undo the changes made by this
    /// transaction.
    invertedChanges() {
        if (!this.changes.length)
            return ChangeSet.empty;
        let changes = [], set = this.changes;
        for (let i = set.length - 1; i >= 0; i--)
            changes.push(set.changes[i].invert(i == 0 ? this.startState.doc : this.docs[i - 1]));
        return new ChangeSet(changes, set.mirror.length ? set.mirror.map(i => set.length - i - 1) : set.mirror);
    }
}
/// Annotation used to store transaction timestamps.
Transaction.time = Annotation.define();
/// Annotation used to indicate that this transaction shouldn't
/// clear the goal column, which is used during vertical cursor
/// motion (so that moving over short lines doesn't reset the
/// horizontal position to the end of the shortest line). Should
/// generally only be set by commands that perform vertical motion.
Transaction.preserveGoalColumn = Annotation.define();
/// Annotation used to associate a transaction with a user interface
/// event. The view will set this to...
///
///  - `"paste"` when pasting content
///  - `"cut"` when cutting
///  - `"drop"` when content is inserted via drag-and-drop
///  - `"keyboard"` when moving the selection via the keyboard
///  - `"pointer"` when moving the selection through the pointing device
Transaction.userEvent = Annotation.define();
/// Annotation indicating whether a transaction should be added to
/// the undo history or not.
Transaction.addToHistory = Annotation.define();

const DefaultIndentUnit = 2, DefaultTabsize = 4, DefaultSplit = /\r\n?|\n/;
/// The editor state class is a persistent (immutable) data structure.
/// To update a state, you [create](#state.EditorState.t) and
/// [apply](#state.Transaction.apply) a
/// [transaction](#state.Transaction), which produces a _new_ state
/// instance, without modifying the original object.
///
/// As such, _never_ mutate properties of a state directly. That'll
/// just break things.
class EditorState {
    /// @internal
    constructor(
    /// @internal
    config, 
    /// The current document.
    doc, 
    /// The current selection.
    selection, tr = null) {
        this.config = config;
        this.doc = doc;
        this.selection = selection;
        /// @internal
        this.applying = null;
        this.status = config.statusTemplate.slice();
        if (tr && !tr.reconfigured) {
            this.values = tr.startState.values.slice();
        }
        else {
            this.values = config.dynamicSlots.map(_ => null);
            // Copy over old values for shared facets/fields if this is a reconfigure
            if (tr)
                for (let id in config.address) {
                    let cur = config.address[id], prev = tr.startState.config.address[id];
                    if (prev != null && (cur & 1) == 0)
                        this.values[cur >> 1] = getAddr(tr.startState, prev);
                }
        }
        this.applying = tr;
        for (let i = 0; i < this.config.dynamicSlots.length; i++)
            ensureAddr(this, i << 1);
        this.applying = null;
    }
    field(field, require = true) {
        let addr = this.config.address[field.id];
        if (addr == null) {
            if (require)
                throw new RangeError("Field is not present in this state");
            return undefined;
        }
        ensureAddr(this, addr);
        return getAddr(this, addr);
    }
    /// Start a new transaction from this state. When not given, the
    /// timestamp defaults to
    /// [`Date.now()`](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/now).
    t(timestamp) {
        return new Transaction(this, timestamp);
    }
    /// Join an array of lines using the state's [line
    /// separator](#state.EditorState^lineSeparator).
    joinLines(text) { return text.join(this.facet(EditorState.lineSeparator) || "\n"); }
    /// Split a string into lines using the state's [line
    /// separator](#state.EditorState^lineSeparator).
    splitLines(text) { return text.split(this.facet(EditorState.lineSeparator) || DefaultSplit); }
    /// Get the value of a state [behavior](#extension.Behavior).
    facet(facet) {
        let addr = this.config.address[facet.id];
        if (addr == null)
            return facet.default;
        ensureAddr(this, addr);
        return getAddr(this, addr);
    }
    /// Convert this state to a JSON-serializable object.
    toJSON() {
        // FIXME plugin state serialization
        return {
            doc: this.joinLines(this.doc.sliceLines(0, this.doc.length)),
            selection: this.selection.toJSON()
        };
    }
    /// Deserialize a state from its JSON representation.
    static fromJSON(json, config = {}) {
        if (!json || typeof json.doc != "string")
            throw new RangeError("Invalid JSON representation for EditorState");
        return EditorState.create({
            doc: json.doc,
            selection: EditorSelection.fromJSON(json.selection),
            extensions: config.extensions
        });
    }
    /// @internal
    applyTransaction(tr) {
        let reconf = tr.reconfigureData, config = reconf ? Configuration.resolve(reconf.base, reconf.replaced, this) : this.config;
        return new EditorState(config, tr.doc, tr.selection, tr);
    }
    /// Create a new state. You'll usually only need this when
    /// initializing an editor—updated states are created by applying
    /// transactions.
    static create(config = {}) {
        let configuration = Configuration.resolve(config.extensions || []);
        let doc = config.doc instanceof _text__WEBPACK_IMPORTED_MODULE_0__["Text"] ? config.doc
            : _text__WEBPACK_IMPORTED_MODULE_0__["Text"].of((config.doc || "").split(configuration.staticFacet(EditorState.lineSeparator) || DefaultSplit));
        let selection = config.selection || EditorSelection.single(0);
        checkSelection(selection, doc);
        if (!configuration.staticFacet(allowMultipleSelections))
            selection = selection.asSingle();
        return new EditorState(configuration, doc, selection);
    }
    /// The size (in columns) of a tab in the document, determined by
    /// the [`tabSize`](#state.EditorState^tabSize) behavior.
    get tabSize() { return this.facet(EditorState.tabSize); }
    /// The size of an indent unit in the document. Determined by the
    /// [`indentUnit`](#state.EditorState^indentUnit) facet.
    get indentUnit() { return this.facet(EditorState.indentUnit); }
    /// Get the syntax tree for this state, which is the current
    /// (possibly incomplete) parse tree of the [syntax](#state.Syntax)
    /// with the highest precedence, or the empty tree if there is no
    /// syntax available.
    get tree() {
        let syntax = this.facet(EditorState.syntax);
        return syntax.length ? syntax[0].getTree(this) : lezer_tree__WEBPACK_IMPORTED_MODULE_1__["Tree"].empty;
    }
}
/// A facet that, when enabled, causes the editor to allow multiple
/// ranges to be selected. You should probably not use this
/// directly, but let a plugin like
/// [multiple-selections](#multiple-selections) handle it (which
/// also makes sure the selections are visible in the view).
EditorState.allowMultipleSelections = allowMultipleSelections;
/// Facet that defines a way to query for automatic indentation
/// depth at the start of a given line.
EditorState.indentation = Facet.define();
/// Configures the tab size to use in this state. The first
/// (highest-precedence) value of the behavior is used.
EditorState.tabSize = Facet.define({
    combine: values => values.length ? values[0] : DefaultTabsize
});
/// The line separator to use. By default, any of `"\n"`, `"\r\n"`
/// and `"\r"` is treated as a separator when splitting lines, and
/// lines are joined with `"\n"`.
///
/// When you configure a value here, only that precise separator
/// will be used, allowing you to round-trip documents through the
/// editor without normalizing line separators.
EditorState.lineSeparator = Facet.define({
    combine: values => values.length ? values[0] : undefined,
    static: true
});
/// Facet for overriding the unit (in columns) by which
/// indentation happens. When not set, this defaults to 2.
EditorState.indentUnit = Facet.define({
    combine: values => values.length ? values[0] : DefaultIndentUnit
});
/// Facet that registers a parsing service for the state.
EditorState.syntax = Facet.define();
/// A facet that registers a code folding service. When called
/// with the extent of a line, it'll return a range object when a
/// foldable that starts on that line (but continues beyond it) can
/// be found.
EditorState.foldable = Facet.define();

/// Utility function for combining behaviors to fill in a config
/// object from an array of provided configs. Will, by default, error
/// when a field gets two values that aren't ===-equal, but you can
/// provide combine functions per field to do something else.
function combineConfig(configs, defaults, // Should hold only the optional properties of Config, but I haven't managed to express that
combine = {}) {
    let result = {};
    for (let config of configs)
        for (let key of Object.keys(config)) {
            let value = config[key], current = result[key];
            if (current === undefined)
                result[key] = value;
            else if (current === value || value === undefined) ; // No conflict
            else if (Object.hasOwnProperty.call(combine, key))
                result[key] = combine[key](current, value);
            else
                throw new Error("Config merge conflict for field " + key);
        }
    for (let key in defaults)
        if (result[key] === undefined)
            result[key] = defaults[key];
    return result;
}
/// Defaults the fields in a configuration object to values given in
/// `defaults` if they are not already present.
function fillConfig(config, defaults) {
    let result = {};
    for (let key in config)
        result[key] = config[key];
    for (let key in defaults)
        if (result[key] === undefined)
            result[key] = defaults[key];
    return result;
}




/***/ }),

/***/ "./node_modules/@codemirror/next/syntax/dist/index.es.js":
/*!***************************************************************!*\
  !*** ./node_modules/@codemirror/next/syntax/dist/index.es.js ***!
  \***************************************************************/
/*! exports provided: IndentContext, LezerSyntax, closeNodeProp, continuedIndent, delimitedIndent, flatIndent, foldNodeProp, indentNodeProp, openNodeProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndentContext", function() { return IndentContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LezerSyntax", function() { return LezerSyntax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeNodeProp", function() { return closeNodeProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "continuedIndent", function() { return continuedIndent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delimitedIndent", function() { return delimitedIndent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatIndent", function() { return flatIndent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldNodeProp", function() { return foldNodeProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indentNodeProp", function() { return indentNodeProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openNodeProp", function() { return openNodeProp; });
/* harmony import */ var lezer_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lezer-tree */ "./node_modules/lezer-tree/dist/tree.js");
/* harmony import */ var lezer_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lezer_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state */ "./node_modules/@codemirror/next/state/dist/index.es.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view */ "./node_modules/@codemirror/next/view/dist/index.es.js");




/// A syntax tree node prop used to associate indentation strategies
/// with node types. Such a strategy is a function from an indentation
/// context to a number. That number may be -1, to indicate that no
/// definitive indentation can be determined, or a column number to
/// which the given line should be indented.
const indentNodeProp = new lezer_tree__WEBPACK_IMPORTED_MODULE_0__["NodeProp"]();
function syntaxIndentation(syntax) {
    return _state__WEBPACK_IMPORTED_MODULE_1__["EditorState"].indentation.of((state, pos) => {
        return computeIndentation(state, syntax.getTree(state), pos);
    });
}
// Compute the indentation for a given position from the syntax tree.
function computeIndentation(state, ast, pos) {
    let tree = ast.resolve(pos);
    // Enter previous nodes that end in empty error terms, which means
    // they were broken off by error recovery, so that indentation
    // works even if the constructs haven't been finished.
    for (let scan = tree, scanPos = pos;;) {
        let last = scan.childBefore(scanPos);
        if (!last)
            break;
        if (last.type.prop(lezer_tree__WEBPACK_IMPORTED_MODULE_0__["NodeProp"].error) && last.start == last.end) {
            tree = scan;
            scanPos = last.start;
        }
        else {
            scan = last;
            scanPos = scan.end + 1;
        }
    }
    for (; tree; tree = tree.parent) {
        let strategy = indentStrategy(tree.type) || (tree.parent == null ? topIndent : null);
        if (strategy)
            return strategy(new IndentContext(state, pos, tree));
    }
    return -1;
}
function indentStrategy(type) {
    let strategy = type.prop(indentNodeProp);
    if (!strategy) {
        let delim = type.prop(lezer_tree__WEBPACK_IMPORTED_MODULE_0__["NodeProp"].delim);
        if (delim)
            return delimitedIndent({ closing: delim.split(" ")[1] });
    }
    return strategy;
}
function topIndent() { return 0; }
/// Objects of this type provide context information and helper
/// methods to indentation functions.
class IndentContext {
    /// @internal
    constructor(
    /// The editor state.
    state, 
    /// The position at which indentation is being computed.
    pos, 
    /// The syntax tree node for which the indentation strategy is
    /// registered.
    node) {
        this.state = state;
        this.pos = pos;
        this.node = node;
    }
    /// The indent unit (number of spaces per indentation level).
    get unit() { return this.state.indentUnit; }
    /// Get the text directly after `this.pos`, either the entire line
    /// or the next 50 characters, whichever is shorter.
    get textAfter() {
        return this.state.doc.slice(this.pos, Math.min(this.pos + 50, this.state.doc.lineAt(this.pos).end)).match(/^\s*(.*)/)[1];
    }
    /// find the column position (taking tabs into account) of the given
    /// position in the given string.
    countColumn(line, pos) {
        // FIXME use extending character information
        if (pos < 0)
            pos = line.length;
        let tab = this.state.tabSize;
        for (var i = 0, n = 0;;) {
            let nextTab = line.indexOf("\t", i);
            if (nextTab < 0 || nextTab >= pos)
                return n + (pos - i);
            n += nextTab - i;
            n += tab - (n % tab);
            i = nextTab + 1;
        }
    }
    /// Find the indentation column of the given document line.
    lineIndent(line) {
        let text = line.slice(0, Math.min(50, line.length, this.node.start > line.start ? this.node.start - line.start : 1e8));
        return this.countColumn(text, text.search(/\S/));
    }
    /// Get the indentation at the reference line for `this.tree`, which
    /// is the line on which it starts, unless there is a node that is
    /// _not_ a parent of this node covering the start of that line. If
    /// so, the line at the start of that node is tried, again skipping
    /// on if it is covered by another such node.
    get baseIndent() {
        let line = this.state.doc.lineAt(this.node.start);
        // Skip line starts that are covered by a sibling (or cousin, etc)
        for (;;) {
            let atBreak = this.node.resolve(line.start);
            while (atBreak.parent && atBreak.parent.start == atBreak.start)
                atBreak = atBreak.parent;
            if (isParent(atBreak, this.node))
                break;
            line = this.state.doc.lineAt(atBreak.start);
        }
        return this.lineIndent(line);
    }
    /// Find the column for the given position.
    column(pos) {
        let line = this.state.doc.lineAt(pos);
        return this.countColumn(line.slice(0, pos - line.start), pos - line.start);
    }
}
function isParent(parent, of) {
    for (let cur = of; cur; cur = cur.parent)
        if (parent == cur)
            return true;
    return false;
}
// Check whether a delimited node is aligned (meaning there are
// non-skipped nodes on the same line as the opening delimiter). And
// if so, return the opening token.
function bracketedAligned(context) {
    let tree = context.node;
    let openToken = tree.childAfter(tree.start);
    if (!openToken)
        return null;
    let openLine = context.state.doc.lineAt(openToken.start);
    for (let pos = openToken.end;;) {
        let next = tree.childAfter(pos);
        if (!next)
            return null;
        if (!next.type.prop(lezer_tree__WEBPACK_IMPORTED_MODULE_0__["NodeProp"].skipped))
            return next.start < openLine.end ? openToken : null;
        pos = next.end;
    }
}
/// An indentation strategy for delimited (usually bracketed) nodes.
/// Will, by default, indent one unit more than the parent's base
/// indent unless the line starts with a closing token. When `align`
/// is true and there are non-skipped nodes on the node's opening
/// line, the content of the node will be aligned with the end of the
/// opening node, like this:
///
///     foo(bar,
///         baz)
function delimitedIndent({ closing, align = true, units = 1 }) {
    return (context) => {
        let closed = context.textAfter.slice(0, closing.length) == closing;
        let aligned = align ? bracketedAligned(context) : null;
        if (aligned)
            return closed ? context.column(aligned.start) : context.column(aligned.end);
        return context.baseIndent + (closed ? 0 : context.unit * units);
    };
}
/// An indentation strategy that aligns a node content to its base
/// indentation.
const flatIndent = (context) => context.baseIndent;
/// Creates an indentation strategy that, by default, indents
/// continued lines one unit more than the node's base indentation.
/// You can provide `except` to prevent indentation of lines that
/// match a pattern (for example `/^else\b/` in `if`/`else`
/// constructs), and you can change the amount of units used with the
/// `units` option.
function continuedIndent({ except, units = 1 } = {}) {
    return (context) => {
        let matchExcept = except && except.test(context.textAfter);
        return context.baseIndent + (matchExcept ? 0 : units * context.unit);
    };
}

/// This node prop is used to associate folding information with node
/// types. Given a subtree, it should check whether that tree is
/// foldable and return the range that can be collapsed when it is.
const foldNodeProp = new lezer_tree__WEBPACK_IMPORTED_MODULE_0__["NodeProp"]();
function syntaxFolding(syntax) {
    return _state__WEBPACK_IMPORTED_MODULE_1__["EditorState"].foldable.of((state, start, end) => {
        let inner = syntax.getTree(state).resolve(end);
        let found = null;
        for (let cur = inner; cur; cur = cur.parent) {
            if (cur.end <= end || cur.start > end)
                continue;
            if (found && cur.start < start)
                break;
            let prop = cur.type.prop(foldNodeProp);
            if (prop) {
                let value = prop(cur, state);
                if (value && value.from <= end && value.from >= start && value.to > end)
                    found = value;
            }
        }
        return found;
    });
}

/// A [syntax provider](#state.Syntax) based on a
/// [Lezer](https://lezer.codemirror.net) parser.
class LezerSyntax {
    /// Create a syntax instance for the given parser. You'll usually
    /// want to use the
    /// [`withProps`](https://lezer.codemirror.net/docs/ref/#lezer.Parser.withProps)
    /// method to register CodeMirror-specific syntax node props in the
    /// parser, before passing it to this constructor.
    constructor(parser) {
        this.parser = parser;
        let setSyntax = _state__WEBPACK_IMPORTED_MODULE_1__["Annotation"].define();
        this.field = _state__WEBPACK_IMPORTED_MODULE_1__["StateField"].define({
            create(state) { return SyntaxState.advance(lezer_tree__WEBPACK_IMPORTED_MODULE_0__["Tree"].empty, parser, state.doc); },
            update(value, tr) { return value.apply(tr, parser, setSyntax); }
        });
        this.extension = [
            _state__WEBPACK_IMPORTED_MODULE_1__["EditorState"].syntax.of(this),
            this.field,
            _view__WEBPACK_IMPORTED_MODULE_2__["ViewPlugin"].define(view => new HighlightWorker(view, this, setSyntax)),
            syntaxIndentation(this),
            syntaxFolding(this)
        ];
    }
    getTree(state) {
        return state.field(this.field).tree;
    }
    parsePos(state) {
        return state.field(this.field).upto;
    }
    ensureTree(state, upto, timeout = 100) {
        let field = state.field(this.field);
        if (field.upto >= upto)
            return field.updatedTree;
        if (!field.parse)
            field.startParse(this.parser, state.doc);
        if (field.parse.pos < upto) {
            let done = work(field.parse, timeout, upto);
            if (done)
                return field.stopParse(done, state.doc.length);
        }
        return field.parse.pos < upto ? null : field.stopParse();
    }
    get docNodeType() { return this.parser.group.types[1]; }
    languageDataAt(state, pos) {
        let type = this.parser.group.types[1];
        if (this.parser.hasNested) {
            let tree = this.getTree(state);
            let target = tree.resolve(pos);
            while (target) {
                if (target.type.prop(lezer_tree__WEBPACK_IMPORTED_MODULE_0__["NodeProp"].top)) {
                    type = target.type;
                    break;
                }
                target = target.parent;
            }
        }
        return (type.prop(_state__WEBPACK_IMPORTED_MODULE_1__["languageData"]) || nothing);
    }
}
const nothing = {};
class DocStream {
    constructor(doc, length = doc.length) {
        this.doc = doc;
        this.length = length;
        this.cursorPos = 0;
        this.string = "";
        this.cursor = doc.iter();
    }
    get(pos) {
        if (pos >= this.length)
            return -1;
        let stringStart = this.cursorPos - this.string.length;
        if (pos < stringStart || pos >= this.cursorPos) {
            if (pos < this.cursorPos) { // Reset the cursor if we have to go back
                this.cursor = this.doc.iter();
                this.cursorPos = 0;
            }
            this.string = this.cursor.next(pos - this.cursorPos).value;
            this.cursorPos = pos + this.string.length;
            stringStart = this.cursorPos - this.string.length;
        }
        return this.string.charCodeAt(pos - stringStart);
    }
    read(from, to) {
        let stringStart = this.cursorPos - this.string.length;
        if (from < stringStart || to >= this.cursorPos)
            return this.doc.slice(from, to);
        else
            return this.string.slice(from - stringStart, to - stringStart);
    }
    clip(at) {
        return new DocStream(this.doc, at);
    }
}
function work(parse, time, upto = 5000000 /* MaxPos */) {
    let endTime = Date.now() + time;
    for (;;) {
        let done = parse.advance();
        if (done)
            return done;
        if (parse.pos > upto || Date.now() > endTime)
            return null;
    }
}
function takeTree(parse, base) {
    let parsed = parse.forceFinish();
    let after = base.applyChanges([{ fromA: 0, toA: parse.pos, fromB: 0, toB: parse.pos }]);
    return parsed.append(after);
}
class SyntaxState {
    constructor(tree, upto) {
        this.tree = tree;
        this.upto = upto;
        this.parse = null;
        this.updatedTree = tree;
    }
    static advance(tree, parser, doc) {
        let parse = parser.startParse(new DocStream(doc), { cache: tree });
        let done = work(parse, 25 /* Apply */);
        return done ? new SyntaxState(done, doc.length) : new SyntaxState(takeTree(parse, tree), parse.pos);
    }
    apply(tr, parser, annotation) {
        let given = tr.annotation(annotation);
        return given || (!tr.docChanged && this) || SyntaxState.advance((this.parse ? takeTree(this.parse, this.updatedTree) : this.updatedTree).applyChanges(tr.changes.changedRanges()), parser, tr.doc);
    }
    startParse(parser, doc) {
        this.parse = parser.startParse(new DocStream(doc), { cache: this.updatedTree });
    }
    stopParse(tree, upto) {
        if (!tree)
            tree = takeTree(this.parse, this.updatedTree);
        this.updatedTree = tree;
        this.upto = (upto !== null && upto !== void 0 ? upto : this.parse.pos);
        this.parse = null;
        return tree;
    }
}
let requestIdle = typeof window != "undefined" && window.requestIdleCallback ||
    ((callback, { timeout }) => setTimeout(callback, timeout));
let cancelIdle = typeof window != "undefined" && window.cancelIdleCallback || clearTimeout;
// FIXME figure out some way to back off from full re-parses when the
// document is large—you could waste a lot of battery re-parsing a
// multi-megabyte document every time you insert a backtick, even if
// it happens in the background.
class HighlightWorker {
    constructor(view, syntax, setSyntax) {
        this.view = view;
        this.syntax = syntax;
        this.setSyntax = setSyntax;
        this.working = -1;
        this.work = this.work.bind(this);
        this.scheduleWork();
    }
    update(update) {
        if (update.docChanged)
            this.scheduleWork();
    }
    scheduleWork() {
        if (this.working > -1)
            return;
        let { state } = this.view, field = state.field(this.syntax.field);
        if (field.upto >= state.doc.length)
            return;
        this.working = requestIdle(this.work, { timeout: 200 /* Pause */ });
    }
    work(deadline) {
        this.working = -1;
        let { state } = this.view, field = state.field(this.syntax.field);
        if (field.upto >= state.doc.length)
            return;
        if (!field.parse)
            field.startParse(this.syntax.parser, state.doc);
        let done = work(field.parse, deadline ? Math.max(25 /* MinSlice */, deadline.timeRemaining()) : 100 /* Slice */);
        if (done || field.parse.badness > .8)
            this.view.dispatch(state.t().annotate(this.setSyntax, new SyntaxState(field.stopParse(done, state.doc.length), state.doc.length)));
        else
            this.scheduleWork();
    }
    destroy() {
        if (this.working >= 0)
            cancelIdle(this.working);
    }
}

function mkMatchProp() { return new lezer_tree__WEBPACK_IMPORTED_MODULE_0__["NodeProp"]({ deserialize(str) { return str.split(" "); } }); }
/// A node prop that encodes information about which other nodes match
/// this node as delimiters. Should hold a space-separated list of
/// node names of the closing nodes that match this node.
const openNodeProp = mkMatchProp();
/// Like `openNodeProp`, but for closing nodes. Should hold a
/// space-separated list of opening node names that match this closing
/// delimiter.
const closeNodeProp = mkMatchProp();




/***/ }),

/***/ "./node_modules/@codemirror/next/text/dist/index.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/@codemirror/next/text/dist/index.es.js ***!
  \*************************************************************/
/*! exports provided: CharType, Line, Text, charType, codePointAt, countColumn, findColumn, fromCodePoint, isExtendingChar, isWordChar, minPairCodePoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharType", function() { return CharType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charType", function() { return charType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codePointAt", function() { return codePointAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countColumn", function() { return countColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findColumn", function() { return findColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromCodePoint", function() { return fromCodePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExtendingChar", function() { return isExtendingChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWordChar", function() { return isWordChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minPairCodePoint", function() { return minPairCodePoint; });
let extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u180b-\u180d\u18a9\u200c\u200d]/;
try {
    extendingChars = new RegExp("\\p{Grapheme_Extend}", "u");
}
catch (_) { }
/// Test whether a given code unit (as in, the thing that `charCodeAt`
/// returns) extends the character before it.
function isExtendingChar(code) {
    return code >= 768 && (code >= 0xdc00 && code < 0xe000 || extendingChars.test(String.fromCharCode(code)));
}
const nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let wordChar;
try {
    wordChar = new RegExp("[\\p{Alphabetic}_]", "u");
}
catch (_) { }
// FIXME this doesn't work for astral chars yet (need different calling convention)
function isWordCharBasic(ch) {
    if (wordChar)
        return wordChar.test(ch);
    return /\w/.test(ch) || ch > "\x80" &&
        (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch));
}
/// Test whether the given character is a word character.
function isWordChar(ch, wordChars) {
    if (!wordChars)
        return isWordCharBasic(ch);
    if (wordChars.source.indexOf("\\w") > -1 && isWordCharBasic(ch))
        return true;
    return wordChars.test(ch);
}
/// This is used to group characters into three categories—word
/// characters, whitespace, and anything else. It is used, by default,
/// to do things like selecting by word.
var CharType;
(function (CharType) {
    CharType[CharType["Word"] = 0] = "Word";
    CharType[CharType["Space"] = 1] = "Space";
    CharType[CharType["Other"] = 2] = "Other";
})(CharType || (CharType = {}));
/// Determine the character type for a given character.
function charType(ch, wordChars) {
    // FIXME make this configurable in a better way
    return /\s/.test(ch) ? CharType.Space : isWordChar(ch, wordChars) ? CharType.Word : CharType.Other;
}
/// Find the code point at the given position in a string (as in the
/// [`codePointAt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)
/// string method).
function codePointAt(str, pos) {
    let code0 = str.charCodeAt(pos);
    if (code0 < 0xd800 || code0 > 0xdbff || pos + 1 == str.length)
        return code0;
    let code1 = str.charCodeAt(pos + 1);
    if (code1 < 0xdc00 || code1 > 0xdfff)
        return code0;
    return ((code0 - 0xd800) << 10) + (code1 - 0xdc00) + 0x10000;
}
/// Given a Unicode codepoint, return the JavaScript string that
/// respresents it (as in
/// [`String.fromCodePoint`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint).
function fromCodePoint(code) {
    if (code <= 0xffff)
        return String.fromCharCode(code);
    code -= 0x10000;
    return String.fromCharCode((code >> 10) + 0xd800, (code & 1023) + 0xdc00);
}
/// The first character that takes up two positions in a JavaScript
/// string. It is often useful to compare with this after calling
/// `codePointAt`, to figure out whether your character takes up 1 or
/// 2 index positions.
const minPairCodePoint = 0x10000;

/// Count the column position at the given offset into the string,
/// taking extending characters and tab size into account.
function countColumn(string, n, tabSize) {
    for (let i = 0; i < string.length; i++) {
        let code = string.charCodeAt(i);
        if (code == 9)
            n += tabSize - (n % tabSize);
        else if (code < 768 || !isExtendingChar(code))
            n++;
    }
    return n;
}
/// Find the offset that corresponds to the given column position in a
/// string, taking extending characters and tab size into account.
function findColumn(string, n, col, tabSize) {
    for (let i = 0; i < string.length; i++) {
        let code = string.charCodeAt(i);
        if (isExtendingChar(code))
            continue;
        if (n >= col)
            return { offset: i, leftOver: 0 };
        n += code == 9 ? tabSize - (n % tabSize) : 1;
    }
    return { offset: string.length, leftOver: col - n };
}

/// The document tree type.
class Text {
    /// @internal
    constructor() { }
    /// Get the line description around the given position.
    lineAt(pos) {
        if (pos < 0 || pos > this.length)
            throw new RangeError(`Invalid position ${pos} in document of length ${this.length}`);
        for (let i = 0; i < lineCache.length; i += 2) {
            if (lineCache[i] != this)
                continue;
            let line = lineCache[i + 1];
            if (line.start <= pos && line.end >= pos)
                return line;
        }
        return cacheLine(this, this.lineInner(pos, false, 1, 0).finish(this));
    }
    /// Get the description for the given (1-based) line number.
    line(n) {
        if (n < 1 || n > this.lines)
            throw new RangeError(`Invalid line number ${n} in ${this.lines}-line document`);
        for (let i = 0; i < lineCache.length; i += 2) {
            if (lineCache[i] != this)
                continue;
            let line = lineCache[i + 1];
            if (line.number == n)
                return line;
        }
        return cacheLine(this, this.lineInner(n, true, 1, 0).finish(this));
    }
    /// Replace a range of the text with the given lines. `text` should
    /// have a length of at least one.
    replace(from, to, text) {
        if (text.length == 0)
            throw new RangeError("An inserted range must have at least one line");
        return this.replaceInner(from, to, text, textLength(text));
    }
    /// Retrieve the lines between the given points.
    sliceLines(from, to = this.length) {
        return this.sliceTo(from, to, [""]);
    }
    /// Retrieve the text between the given points.
    slice(from, to, lineSeparator = "\n") {
        return this.sliceLines(from, to).join(lineSeparator);
    }
    /// Test whether this text is equal to another instance.
    eq(other) { return this == other || eqContent(this, other); }
    /// Iterate over the text. When `dir` is `-1`, iteration happens
    /// from end to start. This will return lines and the breaks between
    /// them as separate strings, and for long lines, might split lines
    /// themselves into multiple chunks as well.
    iter(dir = 1) { return new RawTextCursor(this, dir); }
    /// Iterate over a range of the text. When `from` > `to`, the
    /// iterator will run in reverse.
    iterRange(from, to = this.length) { return new PartialTextCursor(this, from, to); }
    /// Iterate over lines in the text, starting at position (_not_ line
    /// number) `from`. An iterator returned by this combines all text
    /// on a line into a single string (which may be expensive for very
    /// long lines), and skips line breaks (its
    /// [`lineBreak`](#text.TextIterator.lineBreak) property is always
    /// false).
    iterLines(from = 0) { return new LineCursor(this, from); }
    /// Flattens the document into a single string, using `"\n"` as line
    /// separator.
    toString() { return this.slice(0, this.length); }
    /// Create a `Text` instance for the given array of lines.
    static of(text) {
        if (text.length == 0)
            throw new RangeError("A document must have at least one line");
        let length = textLength(text);
        return length < 1024 /* MaxLeaf */ ? new TextLeaf(text, length) : TextNode.from(TextLeaf.split(text, []), length);
    }
}
let lineCache = [], lineCachePos = -2, lineCacheSize = 12;
function cacheLine(text, line) {
    lineCachePos = (lineCachePos + 2) % lineCacheSize;
    lineCache[lineCachePos] = text;
    lineCache[lineCachePos + 1] = line;
    return line;
}
// Leaves store an array of strings. There are always line breaks
// between these strings (though not between adjacent leaves). These
// are limited in length, so that bigger documents are constructed as
// a tree structure. Long lines will be broken into a number of
// single-line leaves.
class TextLeaf extends Text {
    constructor(text, length = textLength(text)) {
        super();
        this.text = text;
        this.length = length;
    }
    get lines() { return this.text.length; }
    get children() { return null; }
    replaceInner(from, to, text, length) {
        return Text.of(appendText(this.text, appendText(text, sliceText(this.text, 0, from)), to));
    }
    sliceTo(from, to = this.length, target) {
        return appendText(this.text, target, from, to);
    }
    lineInner(target, isLine, line, offset) {
        for (let i = 0;; i++) {
            let string = this.text[i], end = offset + string.length;
            if ((isLine ? line : end) >= target)
                return new Line(offset, end, line, string);
            offset = end + 1;
            line++;
        }
    }
    decomposeStart(to, target) {
        target.push(new TextLeaf(sliceText(this.text, 0, to), to));
    }
    decomposeEnd(from, target) {
        target.push(new TextLeaf(sliceText(this.text, from), this.length - from));
    }
    lastLineLength() { return this.text[this.text.length - 1].length; }
    firstLineLength() { return this.text[0].length; }
    static split(text, target) {
        let part = [], length = -1;
        for (let line of text) {
            for (;;) {
                let newLength = length + line.length + 1;
                if (newLength < 512 /* BaseLeaf */) {
                    length = newLength;
                    part.push(line);
                    break;
                }
                let cut = 512 /* BaseLeaf */ - length - 1, after = line.charCodeAt(cut);
                if (after >= 0xdc00 && after < 0xe000)
                    cut++;
                part.push(line.slice(0, cut));
                target.push(new TextLeaf(part, 512 /* BaseLeaf */));
                line = line.slice(cut);
                length = -1;
                part = [];
            }
        }
        if (length != -1)
            target.push(new TextLeaf(part, length));
        return target;
    }
}
// Nodes provide the tree structure of the `Text` type. They store a
// number of other nodes or leaves, taking care to balance itself on
// changes.
class TextNode extends Text {
    constructor(children, length) {
        super();
        this.children = children;
        this.length = length;
        this.lines = 1;
        for (let child of children)
            this.lines += child.lines - 1;
    }
    replaceInner(from, to, text, length) {
        let lengthDiff = length - (to - from), newLength = this.length + lengthDiff;
        if (newLength <= 512 /* BaseLeaf */)
            return new TextLeaf(appendText(this.sliceLines(to), appendText(text, this.sliceTo(0, from, [""]))), newLength);
        let children;
        for (let i = 0, pos = 0; i < this.children.length; i++) {
            let child = this.children[i], end = pos + child.length;
            if (from >= pos && to <= end &&
                (lengthDiff > 0
                    ? child.length + lengthDiff < Math.max(newLength >> (3 /* BranchShift */ - 1), 1024 /* MaxLeaf */)
                    : child.length + lengthDiff > newLength >> (3 /* BranchShift */ + 1))) {
                // Fast path: if the change only affects one child and the
                // child's size remains in the acceptable range, only update
                // that child
                children = this.children.slice();
                children[i] = child.replace(from - pos, to - pos, text);
                return new TextNode(children, newLength);
            }
            else if (end >= from) {
                // Otherwise, we must build up a new array of children
                if (children == null)
                    children = this.children.slice(0, i);
                if (pos < from) {
                    if (end == from)
                        children.push(child);
                    else
                        child.decomposeStart(from - pos, children);
                }
                if (pos <= from && end >= from)
                    TextLeaf.split(text, children);
                if (pos >= to)
                    children.push(child);
                else if (end > to)
                    child.decomposeEnd(to - pos, children);
            }
            pos = end;
        }
        return children ? TextNode.from(children, newLength) : this;
    }
    sliceTo(from, to, target) {
        let pos = 0;
        for (let child of this.children) {
            let end = pos + child.length;
            if (to > pos && from < end)
                child.sliceTo(Math.max(0, from - pos), Math.min(child.length, to - pos), target);
            pos = end;
        }
        return target;
    }
    lineInner(target, isLine, line, offset) {
        for (let i = 0;; i++) {
            let child = this.children[i], end = offset + child.length, endLine = line + child.lines - 1;
            if ((isLine ? endLine : end) >= target) {
                let inner = child.lineInner(target, isLine, line, offset), add;
                if (inner.start == offset && (add = this.lineLengthTo(i))) {
                    inner.start -= add;
                    inner.content = null;
                }
                if (inner.end == end && (add = this.lineLengthFrom(i + 1))) {
                    inner.end += add;
                    inner.content = null;
                }
                return inner;
            }
            offset = end;
            line = endLine;
        }
    }
    decomposeStart(to, target) {
        for (let i = 0, pos = 0;; i++) {
            let child = this.children[i], end = pos + child.length;
            if (end <= to) {
                target.push(child);
            }
            else {
                if (pos < to)
                    child.decomposeStart(to - pos, target);
                break;
            }
            pos = end;
        }
    }
    decomposeEnd(from, target) {
        let pos = 0;
        for (let child of this.children) {
            let end = pos + child.length;
            if (pos >= from)
                target.push(child);
            else if (end > from && pos < from)
                child.decomposeEnd(from - pos, target);
            pos = end;
        }
    }
    lineLengthTo(to) {
        let length = 0;
        for (let i = to - 1; i >= 0; i--) {
            let child = this.children[i];
            if (child.lines > 1)
                return length + child.lastLineLength();
            length += child.length;
        }
        return length;
    }
    lastLineLength() { return this.lineLengthTo(this.children.length); }
    lineLengthFrom(from) {
        let length = 0;
        for (let i = from; i < this.children.length; i++) {
            let child = this.children[i];
            if (child.lines > 1)
                return length + child.firstLineLength();
            length += child.length;
        }
        return length;
    }
    firstLineLength() { return this.lineLengthFrom(0); }
    static from(children, length) {
        if (length < 1024 /* MaxLeaf */) {
            let text = [""];
            for (let child of children)
                child.sliceTo(0, child.length, text);
            return new TextLeaf(text, length);
        }
        let chunkLength = Math.max(512 /* BaseLeaf */, length >> 3 /* BranchShift */), maxLength = chunkLength << 1, minLength = chunkLength >> 1;
        let chunked = [], currentLength = 0, currentChunk = [];
        function add(child) {
            let childLength = child.length, last;
            if (childLength > maxLength && child instanceof TextNode) {
                for (let node of child.children)
                    add(node);
            }
            else if (childLength > minLength && (currentLength > minLength || currentLength == 0)) {
                flush();
                chunked.push(child);
            }
            else if (child instanceof TextLeaf && currentLength > 0 &&
                (last = currentChunk[currentChunk.length - 1]) instanceof TextLeaf &&
                child.length + last.length <= 512 /* BaseLeaf */) {
                currentLength += childLength;
                currentChunk[currentChunk.length - 1] = new TextLeaf(appendText(child.text, last.text.slice()), child.length + last.length);
            }
            else {
                if (currentLength + childLength > chunkLength)
                    flush();
                currentLength += childLength;
                currentChunk.push(child);
            }
        }
        function flush() {
            if (currentLength == 0)
                return;
            chunked.push(currentChunk.length == 1 ? currentChunk[0] : TextNode.from(currentChunk, currentLength));
            currentLength = 0;
            currentChunk.length = 0;
        }
        for (let child of children)
            add(child);
        flush();
        return chunked.length == 1 ? chunked[0] : new TextNode(chunked, length);
    }
}
Text.empty = Text.of([""]);
function textLength(text) {
    let length = -1;
    for (let line of text)
        length += line.length + 1;
    return length;
}
function appendText(text, target, from = 0, to = 1e9) {
    for (let pos = 0, i = 0, first = true; i < text.length && pos <= to; i++) {
        let line = text[i], end = pos + line.length;
        if (end >= from) {
            if (end > to)
                line = line.slice(0, to - pos);
            if (pos < from)
                line = line.slice(from - pos);
            if (first) {
                target[target.length - 1] += line;
                first = false;
            }
            else
                target.push(line);
        }
        pos = end + 1;
    }
    return target;
}
function sliceText(text, from, to) {
    return appendText(text, [""], from, to);
}
function eqContent(a, b) {
    if (a.length != b.length || a.lines != b.lines)
        return false;
    let iterA = new RawTextCursor(a), iterB = new RawTextCursor(b);
    for (let offA = 0, offB = 0;;) {
        if (iterA.lineBreak != iterB.lineBreak || iterA.done != iterB.done) {
            return false;
        }
        else if (iterA.done) {
            return true;
        }
        else if (iterA.lineBreak) {
            iterA.next();
            iterB.next();
            offA = offB = 0;
        }
        else {
            let strA = iterA.value.slice(offA), strB = iterB.value.slice(offB);
            if (strA.length == strB.length) {
                if (strA != strB)
                    return false;
                iterA.next();
                iterB.next();
                offA = offB = 0;
            }
            else if (strA.length > strB.length) {
                if (strA.slice(0, strB.length) != strB)
                    return false;
                offA += strB.length;
                iterB.next();
                offB = 0;
            }
            else {
                if (strB.slice(0, strA.length) != strA)
                    return false;
                offB += strA.length;
                iterA.next();
                offA = 0;
            }
        }
    }
}
class RawTextCursor {
    constructor(text, dir = 1) {
        this.dir = dir;
        this.done = false;
        this.lineBreak = false;
        this.value = "";
        this.nodes = [text];
        this.offsets = [dir > 0 ? 0 : text instanceof TextLeaf ? text.text.length : text.children.length];
    }
    next(skip = 0) {
        for (;;) {
            let last = this.nodes.length - 1;
            if (last < 0) {
                this.done = true;
                this.value = "";
                this.lineBreak = false;
                return this;
            }
            let top = this.nodes[last];
            let offset = this.offsets[last];
            if (top instanceof TextLeaf) {
                // Internal offset with lineBreak == false means we have to
                // count the line break at this position
                if (offset != (this.dir > 0 ? 0 : top.text.length) && !this.lineBreak) {
                    this.lineBreak = true;
                    if (skip == 0) {
                        this.value = "\n";
                        return this;
                    }
                    skip--;
                    continue;
                }
                // Otherwise, move to the next string
                let next = top.text[offset - (this.dir < 0 ? 1 : 0)];
                this.offsets[last] = (offset += this.dir);
                if (offset == (this.dir > 0 ? top.text.length : 0)) {
                    this.nodes.pop();
                    this.offsets.pop();
                }
                this.lineBreak = false;
                if (next.length > skip) {
                    this.value = skip == 0 ? next : this.dir > 0 ? next.slice(skip) : next.slice(0, next.length - skip);
                    return this;
                }
                skip -= next.length;
            }
            else if (offset == (this.dir > 0 ? top.children.length : 0)) {
                this.nodes.pop();
                this.offsets.pop();
            }
            else {
                let next = top.children[this.dir > 0 ? offset : offset - 1], len = next.length;
                this.offsets[last] = offset + this.dir;
                if (skip > len) {
                    skip -= len;
                }
                else {
                    this.nodes.push(next);
                    this.offsets.push(this.dir > 0 ? 0 : next instanceof TextLeaf ? next.text.length : next.children.length);
                }
            }
        }
    }
}
class PartialTextCursor {
    constructor(text, start, end) {
        this.value = "";
        this.cursor = new RawTextCursor(text, start > end ? -1 : 1);
        if (start > end) {
            this.skip = text.length - start;
            this.limit = start - end;
        }
        else {
            this.skip = start;
            this.limit = end - start;
        }
    }
    next() {
        if (this.limit <= 0) {
            this.limit = -1;
        }
        else {
            let { value, lineBreak } = this.cursor.next(this.skip);
            this.skip = 0;
            this.value = value;
            let len = lineBreak ? 1 : value.length;
            if (len > this.limit)
                this.value = this.cursor.dir > 0 ? value.slice(0, this.limit) : value.slice(len - this.limit);
            this.limit -= this.value.length;
        }
        return this;
    }
    get lineBreak() { return this.cursor.lineBreak; }
    get done() { return this.limit < 0; }
}
class LineCursor {
    constructor(text, from = 0) {
        this.value = "";
        this.done = false;
        this.cursor = text.iter();
        this.skip = from;
    }
    next() {
        if (this.cursor.done) {
            this.done = true;
            this.value = "";
            return this;
        }
        for (this.value = "";;) {
            let { value, lineBreak, done } = this.cursor.next(this.skip);
            this.skip = 0;
            if (done || lineBreak)
                return this;
            this.value += value;
        }
    }
    get lineBreak() { return false; }
}
// FIXME rename start/end to from/to for consistency with other types?
/// This type describes a line in the document. It is created
/// on-demand when lines are [queried](#text.Text.lineAt).
class Line {
    /// @internal
    constructor(
    /// The position of the start of the line.
    start, 
    /// The position at the end of the line (_before_ the line break,
    /// if this isn't the last line).
    end, 
    /// This line's line number (1-based).
    number, 
    /// @internal
    content) {
        this.start = start;
        this.end = end;
        this.number = number;
        this.content = content;
    }
    /// The length of the line (not including any line break after it).
    get length() { return this.end - this.start; }
    /// Retrieve a part of the content of this line. This is a method,
    /// rather than, say, a string property, to avoid concatenating long
    /// lines whenever they are accessed. Try to write your code, if it
    /// is going to be doing a lot of line-reading, to read only the
    /// parts it needs.
    slice(from = 0, to = this.length) {
        if (typeof this.content == "string")
            return to == from + 1 ? this.content.charAt(from) : this.content.slice(from, to);
        if (from == to)
            return "";
        let result = this.content.slice(from, to);
        if (from == 0 && to == this.length)
            this.content = result;
        return result;
    }
    /// @internal
    finish(text) {
        if (this.content == null)
            this.content = new LineContent(text, this.start);
        return this;
    }
}
class LineContent {
    constructor(doc, start) {
        this.doc = doc;
        this.start = start;
        this.cursor = null;
        this.strings = null;
    }
    // FIXME quadratic complexity (somewhat) when iterating long lines in small pieces
    slice(from, to) {
        if (!this.cursor) {
            this.cursor = this.doc.iter();
            this.strings = [this.cursor.next(this.start).value];
        }
        for (let result = "", pos = 0, i = 0;; i++) {
            if (i == this.strings.length)
                this.strings.push(this.cursor.next().value);
            let string = this.strings[i], end = pos + string.length;
            if (end <= from)
                continue;
            result += string.slice(Math.max(0, from - pos), Math.min(string.length, to - pos));
            if (end >= to)
                return result;
            pos += string.length;
        }
    }
}




/***/ }),

/***/ "./node_modules/@codemirror/next/view/dist/index.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/@codemirror/next/view/dist/index.es.js ***!
  \*************************************************************/
/*! exports provided: Range, BlockInfo, BlockType, Decoration, EditorView, PluginField, ViewPlugin, ViewUpdate, WidgetType, __test, themeClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInfo", function() { return BlockInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockType", function() { return BlockType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decoration", function() { return Decoration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorView", function() { return EditorView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginField", function() { return PluginField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPlugin", function() { return ViewPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUpdate", function() { return ViewUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetType", function() { return WidgetType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__test", function() { return __test; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeClass", function() { return themeClass; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state */ "./node_modules/@codemirror/next/state/dist/index.es.js");
/* harmony import */ var style_mod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-mod */ "./node_modules/style-mod/src/style-mod.js");
/* harmony import */ var _rangeset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../rangeset */ "./node_modules/@codemirror/next/rangeset/dist/index.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return _rangeset__WEBPACK_IMPORTED_MODULE_2__["Range"]; });

/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../text */ "./node_modules/@codemirror/next/text/dist/index.es.js");






let [nav, doc] = typeof navigator != "undefined"
    ? [navigator, document]
    : [{ userAgent: "", vendor: "", platform: "" }, { documentElement: { style: {} } }];
const ie_edge = /Edge\/(\d+)/.exec(nav.userAgent);
const ie_upto10 = /MSIE \d/.test(nav.userAgent);
const ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(nav.userAgent);
const ie = !!(ie_upto10 || ie_11up || ie_edge);
const gecko = !ie && /gecko\/(\d+)/i.test(nav.userAgent);
const chrome = !ie && /Chrome\/(\d+)/.exec(nav.userAgent);
const webkit = !ie && 'WebkitAppearance' in doc.documentElement.style;
var browser = {
    mac: /Mac/.test(nav.platform),
    ie,
    ie_version: ie_upto10 ? doc.documentMode || 6 : ie_11up ? +ie_11up[1] : ie_edge ? +ie_edge[1] : 0,
    gecko,
    gecko_version: gecko ? +(/Firefox\/(\d+)/.exec(nav.userAgent) || [0, 0])[1] : 0,
    chrome: !!chrome,
    chrome_version: chrome ? +chrome[1] : 0,
    ios: !ie && /AppleWebKit/.test(nav.userAgent) && /Mobile\/\w+/.test(nav.userAgent),
    android: /Android\b/.test(nav.userAgent),
    webkit,
    safari: /Apple Computer/.test(nav.vendor),
    webkit_version: webkit ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0,
    tabSize: doc.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};

function getSelection(root) {
    return (root.getSelection ? root.getSelection() : document.getSelection());
}
// Work around Chrome issue https://bugs.chromium.org/p/chromium/issues/detail?id=447523
// (isCollapsed inappropriately returns true in shadow dom)
function selectionCollapsed(domSel) {
    let collapsed = domSel.isCollapsed;
    if (collapsed && browser.chrome && domSel.rangeCount && !domSel.getRangeAt(0).collapsed)
        collapsed = false;
    return collapsed;
}
function hasSelection(dom, selection) {
    if (!selection.anchorNode)
        return false;
    try {
        // Firefox will raise 'permission denied' errors when accessing
        // properties of `sel.anchorNode` when it's in a generated CSS
        // element.
        return dom.contains(selection.anchorNode.nodeType == 3 ? selection.anchorNode.parentNode : selection.anchorNode);
    }
    catch (_) {
        return false;
    }
}
function clientRectsFor(dom) {
    if (dom.nodeType == 3) {
        let range = document.createRange();
        range.setEnd(dom, dom.nodeValue.length);
        range.setStart(dom, 0);
        return range.getClientRects();
    }
    else if (dom.nodeType == 1) {
        return dom.getClientRects();
    }
    else {
        return [];
    }
}
// Scans forward and backward through DOM positions equivalent to the
// given one to see if the two are in the same place (i.e. after a
// text node vs at the end of that text node)
function isEquivalentPosition(node, off, targetNode, targetOff) {
    return targetNode ? (scanFor(node, off, targetNode, targetOff, -1) ||
        scanFor(node, off, targetNode, targetOff, 1)) : false;
}
function domIndex(node) {
    for (var index = 0;; index++) {
        node = node.previousSibling;
        if (!node)
            return index;
    }
}
function scanFor(node, off, targetNode, targetOff, dir) {
    for (;;) {
        if (node == targetNode && off == targetOff)
            return true;
        if (off == (dir < 0 ? 0 : maxOffset(node))) {
            if (node.nodeName == "DIV")
                return false;
            let parent = node.parentNode;
            if (!parent || parent.nodeType != 1)
                return false;
            off = domIndex(node) + (dir < 0 ? 0 : 1);
            node = parent;
        }
        else if (node.nodeType == 1) {
            node = node.childNodes[off + (dir < 0 ? -1 : 0)];
            off = dir < 0 ? maxOffset(node) : 0;
        }
        else {
            return false;
        }
    }
}
function maxOffset(node) {
    return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
}
function windowRect(win) {
    return { left: 0, right: win.innerWidth,
        top: 0, bottom: win.innerHeight };
}
const ScrollSpace = 5;
function scrollRectIntoView(dom, rect) {
    let doc = dom.ownerDocument, win = doc.defaultView;
    for (let cur = dom.parentNode; cur;) {
        if (cur.nodeType == 1) { // Element
            let bounding, top = cur == document.body;
            if (top) {
                bounding = windowRect(win);
            }
            else {
                if (cur.scrollHeight <= cur.clientHeight && cur.scrollWidth <= cur.clientWidth) {
                    cur = cur.parentNode;
                    continue;
                }
                let rect = cur.getBoundingClientRect();
                // Make sure scrollbar width isn't included in the rectangle
                bounding = { left: rect.left, right: rect.left + cur.clientWidth,
                    top: rect.top, bottom: rect.top + cur.clientHeight };
            }
            let moveX = 0, moveY = 0;
            if (rect.top < bounding.top)
                moveY = -(bounding.top - rect.top + ScrollSpace);
            else if (rect.bottom > bounding.bottom)
                moveY = rect.bottom - bounding.bottom + ScrollSpace;
            if (rect.left < bounding.left)
                moveX = -(bounding.left - rect.left + ScrollSpace);
            else if (rect.right > bounding.right)
                moveX = rect.right - bounding.right + ScrollSpace;
            if (moveX || moveY) {
                if (top) {
                    win.scrollBy(moveX, moveY);
                }
                else {
                    if (moveY) {
                        let start = cur.scrollTop;
                        cur.scrollTop += moveY;
                        moveY = cur.scrollTop - start;
                    }
                    if (moveX) {
                        let start = cur.scrollLeft;
                        cur.scrollLeft += moveX;
                        moveX = cur.scrollLeft - start;
                    }
                    rect = { left: rect.left - moveX, top: rect.top - moveY,
                        right: rect.right - moveX, bottom: rect.bottom - moveY };
                }
            }
            if (top)
                break;
            cur = cur.parentNode;
        }
        else if (cur.nodeType == 11) { // A shadow root
            cur = cur.host;
        }
        else {
            break;
        }
    }
}
class DOMSelection {
    constructor() {
        this.anchorNode = null;
        this.anchorOffset = 0;
        this.focusNode = null;
        this.focusOffset = 0;
    }
    eq(domSel) {
        return this.anchorNode == domSel.anchorNode && this.anchorOffset == domSel.anchorOffset &&
            this.focusNode == domSel.focusNode && this.focusOffset == domSel.focusOffset;
    }
    set(domSel) {
        this.anchorNode = domSel.anchorNode;
        this.anchorOffset = domSel.anchorOffset;
        this.focusNode = domSel.focusNode;
        this.focusOffset = domSel.focusOffset;
    }
}
let preventScrollSupported = null;
// Feature-detects support for .focus({preventScroll: true}), and uses
// a fallback kludge when not supported.
function focusPreventScroll(dom) {
    if (dom.setActive)
        return dom.setActive(); // in IE
    if (preventScrollSupported)
        return dom.focus(preventScrollSupported);
    let stack = [];
    for (let cur = dom; cur; cur = cur.parentNode) {
        stack.push(cur, dom.scrollTop, dom.scrollLeft);
        if (cur == cur.ownerDocument)
            break;
    }
    dom.focus(preventScrollSupported == null ? {
        get preventScroll() {
            preventScrollSupported = { preventScroll: true };
            return true;
        }
    } : undefined);
    if (!preventScrollSupported) {
        preventScrollSupported = false;
        for (let i = 0; i < stack.length;) {
            let elt = stack[i++], top = stack[i++], left = stack[i++];
            if (elt.scrollTop != top)
                elt.scrollTop = top;
            if (elt.scrollLeft != left)
                elt.scrollLeft = left;
        }
    }
}

class DOMPos {
    constructor(node, offset, precise = true) {
        this.node = node;
        this.offset = offset;
        this.precise = precise;
    }
    static before(dom, precise) { return new DOMPos(dom.parentNode, domIndex(dom), precise); }
    static after(dom, precise) { return new DOMPos(dom.parentNode, domIndex(dom) + 1, precise); }
}
const none = [];
class ContentView {
    constructor() {
        this.parent = null;
        this.dom = null;
        this.dirty = 2 /* Node */;
    }
    get editorView() {
        if (!this.parent)
            throw new Error("Accessing view in orphan content view");
        return this.parent.editorView;
    }
    get overrideDOMText() { return null; }
    get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0;
    }
    get posAtEnd() {
        return this.posAtStart + this.length;
    }
    posBefore(view) {
        let pos = this.posAtStart;
        for (let child of this.children) {
            if (child == view)
                return pos;
            pos += child.length + child.breakAfter;
        }
        throw new RangeError("Invalid child in posBefore");
    }
    posAfter(view) {
        return this.posBefore(view) + view.length;
    }
    coordsAt(pos) { return null; }
    sync() {
        if (this.dirty & 2 /* Node */) {
            let parent = this.dom, pos = parent.firstChild;
            for (let child of this.children) {
                if (child.dirty) {
                    if (pos && !child.dom && !ContentView.get(pos)) {
                        let prev = pos.previousSibling;
                        if (child.reuseDOM(pos))
                            pos = prev ? prev.nextSibling : parent.firstChild;
                    }
                    child.sync();
                    child.dirty = 0 /* Not */;
                }
                pos = syncNodeInto(parent, pos, child.dom);
            }
            while (pos)
                pos = rm(pos);
        }
        else if (this.dirty & 1 /* Child */) {
            for (let child of this.children)
                if (child.dirty) {
                    child.sync();
                    child.dirty = 0 /* Not */;
                }
        }
    }
    reuseDOM(dom) { return false; }
    localPosFromDOM(node, offset) {
        let after;
        if (node == this.dom) {
            after = this.dom.childNodes[offset];
        }
        else {
            let bias = maxOffset(node) == 0 ? 0 : offset == 0 ? -1 : 1;
            for (;;) {
                let parent = node.parentNode;
                if (parent == this.dom)
                    break;
                if (bias == 0 && parent.firstChild != parent.lastChild) {
                    if (node == parent.firstChild)
                        bias = -1;
                    else
                        bias = 1;
                }
                node = parent;
            }
            if (bias < 0)
                after = node;
            else
                after = node.nextSibling;
        }
        if (after == this.dom.firstChild)
            return 0;
        while (after && !ContentView.get(after))
            after = after.nextSibling;
        if (!after)
            return this.length;
        for (let i = 0, pos = 0;; i++) {
            let child = this.children[i];
            if (child.dom == after)
                return pos;
            pos += child.length + child.breakAfter;
        }
    }
    domBoundsAround(from, to, offset = 0) {
        let fromI = -1, fromStart = -1, toI = -1, toEnd = -1;
        for (let i = 0, pos = offset; i < this.children.length; i++) {
            let child = this.children[i], end = pos + child.length;
            if (pos < from && end > to)
                return child.domBoundsAround(from, to, pos);
            if (end >= from && fromI == -1) {
                fromI = i;
                fromStart = pos;
            }
            if (end >= to && toI == -1) {
                toI = i;
                toEnd = end;
                break;
            }
            pos = end + child.breakAfter;
        }
        return { from: fromStart, to: toEnd,
            startDOM: (fromI ? this.children[fromI - 1].dom.nextSibling : null) || this.dom.firstChild,
            endDOM: toI < this.children.length - 1 ? this.children[toI + 1].dom : null };
    }
    // FIXME track precise dirty ranges, to avoid full DOM sync on every touched node?
    markDirty(andParent = false) {
        if (this.dirty & 2 /* Node */)
            return;
        this.dirty |= 2 /* Node */;
        this.markParentsDirty(andParent);
    }
    markParentsDirty(childList) {
        for (let parent = this.parent; parent; parent = parent.parent) {
            if (childList)
                parent.dirty |= 2 /* Node */;
            if (parent.dirty & 1 /* Child */)
                return;
            parent.dirty |= 1 /* Child */;
            childList = false;
        }
    }
    setParent(parent) {
        if (this.parent != parent) {
            this.parent = parent;
            if (this.dirty)
                this.markParentsDirty(true);
        }
    }
    setDOM(dom) {
        this.dom = dom;
        dom.cmView = this;
    }
    get rootView() {
        for (let v = this;;) {
            let parent = v.parent;
            if (!parent)
                return v;
            v = parent;
        }
    }
    replaceChildren(from, to, children = none) {
        this.markDirty();
        for (let i = from; i < to; i++)
            this.children[i].parent = null;
        this.children.splice(from, to - from, ...children);
        for (let i = 0; i < children.length; i++)
            children[i].setParent(this);
    }
    ignoreMutation(rec) { return false; }
    ignoreEvent(event) { return false; }
    childCursor(pos = this.length) {
        return new ChildCursor(this.children, pos, this.children.length);
    }
    childPos(pos, bias = 1) {
        return this.childCursor().findPos(pos, bias);
    }
    toString() {
        let name = this.constructor.name.replace("View", "");
        return name + (this.children.length ? "(" + this.children.join() + ")" :
            this.length ? "[" + (name == "Text" ? this.text : this.length) + "]" : "") +
            (this.breakAfter ? "#" : "");
    }
    static get(node) { return node.cmView; }
}
ContentView.prototype.breakAfter = 0;
// Remove a DOM node and return its next sibling.
function rm(dom) {
    let next = dom.nextSibling;
    dom.parentNode.removeChild(dom);
    return next;
}
function syncNodeInto(parent, pos, dom) {
    if (dom.parentNode == parent) {
        while (pos != dom)
            pos = rm(pos);
        pos = dom.nextSibling;
    }
    else {
        parent.insertBefore(dom, pos);
    }
    return pos;
}
class ChildCursor {
    constructor(children, pos, i) {
        this.children = children;
        this.pos = pos;
        this.i = i;
        this.off = 0;
    }
    findPos(pos, bias = 1) {
        for (;;) {
            if (pos > this.pos || pos == this.pos &&
                (bias > 0 || this.i == 0 || this.children[this.i - 1].breakAfter)) {
                this.off = pos - this.pos;
                return this;
            }
            let next = this.children[--this.i];
            this.pos -= next.length + next.breakAfter;
        }
    }
}

function combineAttrs(source, target) {
    for (let name in source) {
        if (name == "class" && target.class)
            target.class += " " + source.class;
        else if (name == "style" && target.style)
            target.style += ";" + source.style;
        else
            target[name] = source[name];
    }
    return target;
}
function attrsEq(a, b) {
    if (a == b)
        return true;
    if (!a || !b)
        return false;
    let keysA = Object.keys(a), keysB = Object.keys(b);
    if (keysA.length != keysB.length)
        return false;
    for (let key of keysA) {
        if (keysB.indexOf(key) == -1 || a[key] !== b[key])
            return false;
    }
    return true;
}
function updateAttrs(dom, prev, attrs) {
    if (prev)
        for (let name in prev)
            if (!(attrs && name in attrs))
                dom.removeAttribute(name);
    if (attrs)
        for (let name in attrs)
            if (!(prev && prev[name] == attrs[name]))
                dom.setAttribute(name, attrs[name]);
}

const none$1 = [];
class InlineView extends ContentView {
    match(other) { return false; }
    get children() { return none$1; }
    getSide() { return 0; }
}
const MaxJoinLen = 256;
class TextView extends InlineView {
    constructor(text, tagName, clss, attrs) {
        super();
        this.text = text;
        this.tagName = tagName;
        this.attrs = attrs;
        this.textDOM = null;
        this.class = clss;
    }
    get length() { return this.text.length; }
    createDOM(textDOM) {
        let tagName = this.tagName || (this.attrs || this.class ? "span" : null);
        this.textDOM = textDOM || document.createTextNode(this.text);
        if (tagName) {
            let dom = document.createElement(tagName);
            dom.appendChild(this.textDOM);
            if (this.class)
                dom.className = this.class;
            if (this.attrs)
                for (let name in this.attrs)
                    dom.setAttribute(name, this.attrs[name]);
            this.setDOM(dom);
        }
        else {
            this.setDOM(this.textDOM);
        }
    }
    sync() {
        if (!this.dom)
            this.createDOM();
        if (this.textDOM.nodeValue != this.text) {
            this.textDOM.nodeValue = this.text;
            let dom = this.dom;
            if (this.textDOM != dom && (this.dom.firstChild != this.textDOM || dom.lastChild != this.textDOM)) {
                while (dom.firstChild)
                    dom.removeChild(dom.firstChild);
                dom.appendChild(this.textDOM);
            }
        }
    }
    reuseDOM(dom) {
        if (dom.nodeType != 3)
            return false;
        this.createDOM(dom);
        return true;
    }
    merge(from, to = this.length, source = null) {
        if (source &&
            (!(source instanceof TextView) ||
                source.tagName != this.tagName || source.class != this.class ||
                !attrsEq(source.attrs, this.attrs) || this.length - (to - from) + source.length > MaxJoinLen))
            return false;
        this.text = this.text.slice(0, from) + (source ? source.text : "") + this.text.slice(to);
        this.markDirty();
        return true;
    }
    slice(from, to = this.length) {
        return new TextView(this.text.slice(from, to), this.tagName, this.class, this.attrs);
    }
    localPosFromDOM(node, offset) {
        return node == this.textDOM ? offset : offset ? this.text.length : 0;
    }
    domAtPos(pos) { return new DOMPos(this.textDOM, pos); }
    domBoundsAround(from, to, offset) {
        return { from: offset, to: offset + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
    }
    coordsAt(pos) {
        return textCoords(this.textDOM, pos);
    }
}
function textCoords(text, pos) {
    let range = document.createRange();
    if (browser.chrome || browser.gecko) {
        // These browsers reliably return valid rectangles for empty ranges
        range.setEnd(text, pos);
        range.setStart(text, pos);
        return range.getBoundingClientRect();
    }
    else {
        // Otherwise, get the rectangle around a character and take one side
        let extend = pos == 0 ? 1 : -1;
        range.setEnd(text, pos + (extend > 0 ? 1 : 0));
        range.setStart(text, pos - (extend < 0 ? 1 : 0));
        let rect = range.getBoundingClientRect();
        let x = extend < 0 ? rect.right : rect.left;
        return { left: x, right: x, top: rect.top, bottom: rect.bottom };
    }
}
// Also used for collapsed ranges that don't have a placeholder widget!
class WidgetView extends InlineView {
    constructor(widget, length, side, open) {
        super();
        this.widget = widget;
        this.length = length;
        this.side = side;
        this.open = open;
    }
    static create(widget, length, side, open = 0) {
        return new (widget.customView || WidgetView)(widget, length, side, open);
    }
    slice(from, to = this.length) { return WidgetView.create(this.widget, to - from, this.side); }
    sync() {
        if (!this.dom || !this.widget.updateDOM(this.dom)) {
            this.setDOM(this.widget.toDOM(this.editorView));
            this.dom.contentEditable = "false";
        }
    }
    getSide() { return this.side; }
    merge(from, to = this.length, source = null) {
        if (source) {
            if (!(source instanceof WidgetView) || !source.open ||
                from > 0 && !(source.open & 1 /* Start */) ||
                to < this.length && !(source.open & 2 /* End */))
                return false;
            if (!this.widget.compare(source.widget))
                throw new Error("Trying to merge incompatible widgets");
        }
        this.length = from + (source ? source.length : 0) + (this.length - to);
        return true;
    }
    match(other) {
        if (other.length == this.length && other instanceof WidgetView && other.side == this.side) {
            if (this.widget.constructor == other.widget.constructor) {
                if (!this.widget.eq(other.widget.value))
                    this.markDirty(true);
                this.widget = other.widget;
                return true;
            }
        }
        return false;
    }
    ignoreMutation() { return true; }
    ignoreEvent(event) { return this.widget.ignoreEvent(event); }
    get overrideDOMText() {
        if (this.length == 0)
            return [""];
        let top = this;
        while (top.parent)
            top = top.parent;
        let view = top.editorView, text = view && view.state.doc, start = this.posAtStart;
        return text ? text.sliceLines(start, start + this.length) : [""];
    }
    domAtPos(pos) {
        return pos == 0 ? DOMPos.before(this.dom) : DOMPos.after(this.dom, pos == this.length);
    }
    domBoundsAround() { return null; }
    coordsAt(pos) {
        let rects = this.dom.getClientRects();
        for (let i = pos > 0 ? rects.length - 1 : 0;; i += (pos > 0 ? -1 : 1)) {
            let rect = rects[i];
            if (pos > 0 ? i == 0 : i == rects.length - 1 || rect.top < rect.bottom)
                return rects[i];
        }
        return null;
    }
}
class CompositionView extends WidgetView {
    domAtPos(pos) { return new DOMPos(this.widget.value.text, pos); }
    sync() { if (!this.dom)
        this.setDOM(this.widget.toDOM(this.editorView)); }
    ignoreMutation() { return false; }
    get overrideDOMText() { return null; }
    coordsAt(pos) { return textCoords(this.widget.value.text, pos); }
}

/// Widgets added to the content are described by subclasses of this
/// class. This makes it possible to delay creating of the DOM
/// structure for a widget until it is needed, and to avoid redrawing
/// widgets even when the decorations that define them are recreated.
/// `T` can be a type of value passed to instances of the widget type.
class WidgetType {
    /// Create an instance of this widget type.
    constructor(
    /// @internal
    value) {
        this.value = value;
    }
    /// Compare this instance to another instance of the same class. By
    /// default, it'll compare the instances' parameters with `===`.
    eq(value) { return this.value === value; }
    /// Update a DOM element created by a widget of the same type but
    /// with a different value to reflect this widget. May return true
    /// to indicate that it could update, false to indicate it couldn't
    /// (in which case the widget will be redrawn). The default
    /// implementation just returns false.
    updateDOM(_dom) { return false; }
    /// @internal
    compare(other) {
        return this == other || this.constructor == other.constructor && this.eq(other.value);
    }
    /// The estimated height this widget will have, to be used when
    /// estimating the height of content that hasn't been drawn. May
    /// return -1 to indicate you don't know. The default implementation
    /// returns -1.
    get estimatedHeight() { return -1; }
    /// Can be used to configure which kinds of events inside the widget
    /// should be ignored by the editor. The default is to ignore all
    /// events.
    ignoreEvent(_event) { return true; }
    //// @internal
    get customView() { return null; }
}
/// The different types of blocks that can occur in an editor view.
var BlockType;
(function (BlockType) {
    /// A line of text.
    BlockType[BlockType["Text"] = 0] = "Text";
    /// A block widget associated with the position after it.
    BlockType[BlockType["WidgetBefore"] = 1] = "WidgetBefore";
    /// A block widget associated with the position before it.
    BlockType[BlockType["WidgetAfter"] = 2] = "WidgetAfter";
    /// A block widget [replacing](#view.Decoration^replace) a range of content.
    BlockType[BlockType["WidgetRange"] = 3] = "WidgetRange";
})(BlockType || (BlockType = {}));
/// A decoration provides information on how to draw or style a piece
/// of content. You'll usually use it wrapped in a
/// [`Range`](#rangeset.Range), which adds a start and
/// end position.
class Decoration extends _rangeset__WEBPACK_IMPORTED_MODULE_2__["RangeValue"] {
    /// @internal
    constructor(
    /// @internal
    startSide, 
    /// @internal
    endSide, 
    /// @internal
    widget, 
    /// The config object used to create this decoration.
    spec) {
        super();
        this.startSide = startSide;
        this.endSide = endSide;
        this.widget = widget;
        this.spec = spec;
    }
    /// @internal
    get point() { return false; }
    /// @internal
    get heightRelevant() { return false; }
    /// Create a mark decoration, which influences the styling of the
    /// text in its range.
    static mark(spec) {
        return new MarkDecoration(spec);
    }
    /// Create a widget decoration, which adds an element at the given
    /// position.
    static widget(spec) {
        let side = spec.side || 0;
        if (spec.block)
            side += (200000000 /* BigBlock */ + 1) * (side > 0 ? 1 : -1);
        return new PointDecoration(spec, side, side, !!spec.block, spec.widget || null, false);
    }
    /// Create a replace decoration which replaces the given range with
    /// a widget, or simply hides it.
    static replace(spec) {
        let block = !!spec.block;
        let { start, end } = getInclusive(spec);
        let startSide = block ? -200000000 /* BigBlock */ * (start ? 2 : 1) : 100000000 /* BigInline */ * (start ? -1 : 1);
        let endSide = block ? 200000000 /* BigBlock */ * (end ? 2 : 1) : 100000000 /* BigInline */ * (end ? 1 : -1);
        return new PointDecoration(spec, startSide, endSide, block, spec.widget || null, true);
    }
    /// Create a line decoration, which can add DOM attributes to the
    /// line starting at the given position.
    static line(spec) {
        return new LineDecoration(spec);
    }
    /// Build a [`DecorationSet`](#view.DecorationSet) from the given
    /// decorated range or ranges.
    static set(of, sort = false) {
        return _rangeset__WEBPACK_IMPORTED_MODULE_2__["RangeSet"].of(of, sort);
    }
    /// @internal
    hasHeight() { return this.widget ? this.widget.estimatedHeight > -1 : false; }
}
/// The empty set of decorations.
Decoration.none = _rangeset__WEBPACK_IMPORTED_MODULE_2__["RangeSet"].empty;
class MarkDecoration extends Decoration {
    constructor(spec) {
        let { start, end } = getInclusive(spec);
        super(100000000 /* BigInline */ * (start ? -1 : 1), 100000000 /* BigInline */ * (end ? 1 : -1), null, spec);
    }
    eq(other) {
        return this == other ||
            other instanceof MarkDecoration &&
                this.spec.tagName == other.spec.tagName &&
                this.spec.class == other.spec.class &&
                attrsEq(this.spec.attributes || null, other.spec.attributes || null);
    }
    range(from, to = from) {
        if (from >= to)
            throw new RangeError("Mark decorations may not be empty");
        return super.range(from, to);
    }
}
class LineDecoration extends Decoration {
    constructor(spec) {
        super(-100000000 /* BigInline */, -100000000 /* BigInline */, null, spec);
    }
    get point() { return true; }
    eq(other) {
        return other instanceof LineDecoration && attrsEq(this.spec.attributes, other.spec.attributes);
    }
    range(from, to = from) {
        if (to != from)
            throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(from, to);
    }
}
LineDecoration.prototype.startMapMode = LineDecoration.prototype.endMapMode = _state__WEBPACK_IMPORTED_MODULE_0__["MapMode"].TrackBefore;
class PointDecoration extends Decoration {
    constructor(spec, startSide, endSide, block, widget, isReplace) {
        super(startSide, endSide, widget, spec);
        this.block = block;
        this.isReplace = isReplace;
        if (block) {
            this.startMapMode = startSide < 0 ? _state__WEBPACK_IMPORTED_MODULE_0__["MapMode"].TrackBefore : _state__WEBPACK_IMPORTED_MODULE_0__["MapMode"].TrackAfter;
            this.endMapMode = endSide < 0 ? _state__WEBPACK_IMPORTED_MODULE_0__["MapMode"].TrackBefore : _state__WEBPACK_IMPORTED_MODULE_0__["MapMode"].TrackAfter;
        }
        else {
            this.startMapMode = this.endMapMode = _state__WEBPACK_IMPORTED_MODULE_0__["MapMode"].TrackDel;
        }
    }
    get point() { return true; }
    // Only relevant when this.block == true
    get type() {
        return this.startSide < this.endSide ? BlockType.WidgetRange
            : this.startSide < 0 ? BlockType.WidgetBefore : BlockType.WidgetAfter;
    }
    get heightRelevant() { return this.block || !!this.widget && this.widget.estimatedHeight >= 5; }
    eq(other) {
        return other instanceof PointDecoration &&
            widgetsEq(this.widget, other.widget) &&
            this.block == other.block &&
            this.startSide == other.startSide && this.endSide == other.endSide;
    }
    range(from, to = from) {
        if (this.isReplace && (from > to || (from == to && this.startSide > 0 && this.endSide < 0)))
            throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && to != from)
            throw new RangeError("Widget decorations can only create zero-length ranges");
        return super.range(from, to);
    }
}
function getInclusive(spec) {
    let { inclusiveStart: start, inclusiveEnd: end } = spec;
    if (start == null)
        start = spec.inclusive;
    if (end == null)
        end = spec.inclusive;
    return { start: start || false, end: end || false };
}
function widgetsEq(a, b) {
    return a == b || !!(a && b && a.compare(b));
}
const MinRangeGap = 4;
function addRange(from, to, ranges) {
    let last = ranges.length - 1;
    if (last >= 0 && ranges[last] + MinRangeGap > from)
        ranges[last] = Math.max(ranges[last], to);
    else
        ranges.push(from, to);
}

const theme = _state__WEBPACK_IMPORTED_MODULE_0__["Facet"].define();
const baseThemeID = style_mod__WEBPACK_IMPORTED_MODULE_1__["StyleModule"].newName();
function buildTheme(id, spec) {
    let styles = Object.create(null);
    for (let prop in spec) {
        let parts = prop.split("."), selector = "." + id + (parts[0] == "wrap" ? "" : " ");
        for (let i = 1; i <= parts.length; i++)
            selector += ".cm-" + parts.slice(0, i).join("-");
        styles[selector] = spec[prop];
    }
    return new style_mod__WEBPACK_IMPORTED_MODULE_1__["StyleModule"](styles, { generateClasses: false });
}
/// Create a set of CSS class names for the given theme selector,
/// which can be added to a DOM element within an editor to make
/// themes able to style it. Theme selectors can be single words or
/// words separated by dot characters. In the latter case, the
/// returned classes combine those that match the full name and those
/// that match some prefix—for example `"panel.search"` will match
/// both the theme styles specified as `"panel.search"` and those with
/// just `"panel"`. More specific theme styles (with more dots) take
/// precedence.
function themeClass(selector) {
    let parts = selector.split("."), result = "";
    for (let i = 1; i <= parts.length; i++)
        result += (result ? " " : "") + "cm-" + parts.slice(0, i).join("-");
    return result;
}
const baseTheme = buildTheme(baseThemeID, {
    wrap: {
        position: "relative !important",
        boxSizing: "border-box",
        "&.cm-focused": {
            // FIXME it would be great if we could directly use the browser's
            // default focus outline, but it appears we can't, so this tries to
            // approximate that
            outline_fallback: "1px dotted #212121",
            outline: "5px auto -webkit-focus-ring-color"
        },
        display: "flex !important",
        flexDirection: "column"
    },
    scroller: {
        display: "flex !important",
        alignItems: "flex-start !important",
        fontFamily: "monospace",
        lineHeight: 1.4,
        height: "100%",
        overflowX: "auto"
    },
    content: {
        margin: 0,
        flexGrow: 2,
        minHeight: "100%",
        display: "block",
        whiteSpace: "pre",
        boxSizing: "border-box",
        padding: "4px 0",
        outline: "none",
        caretColor: "black",
    },
    line: {
        display: "block",
        padding: "0 2px 0 4px"
    }
});

const LineClass = themeClass("line");
class LineView extends ContentView {
    constructor() {
        super(...arguments);
        this.children = [];
        this.length = 0;
        this.prevAttrs = undefined;
        this.attrs = null;
        this.breakAfter = 0;
    }
    // Consumes source
    merge(from, to, source, takeDeco) {
        if (source) {
            if (!(source instanceof LineView))
                return false;
            if (!this.dom)
                source.transferDOM(this); // Reuse source.dom when appropriate
        }
        if (takeDeco)
            this.setDeco(source ? source.attrs : null);
        let elts = source ? source.children : [];
        let cur = this.childCursor();
        let { i: toI, off: toOff } = cur.findPos(to, 1);
        let { i: fromI, off: fromOff } = cur.findPos(from, -1);
        let dLen = from - to;
        for (let view of elts)
            dLen += view.length;
        this.length += dLen;
        // Both from and to point into the same text view
        if (fromI == toI && fromOff) {
            let start = this.children[fromI];
            // Maybe just update that view and be done
            if (elts.length == 1 && start.merge(fromOff, toOff, elts[0]))
                return true;
            if (elts.length == 0) {
                start.merge(fromOff, toOff, null);
                return true;
            }
            // Otherwise split it, so that we don't have to worry about aliasing front/end afterwards
            let after = start.slice(toOff);
            if (after.merge(0, 0, elts[elts.length - 1]))
                elts[elts.length - 1] = after;
            else
                elts.push(after);
            toI++;
            toOff = 0;
        }
        // Make sure start and end positions fall on node boundaries
        // (fromOff/toOff are no longer used after this), and that if the
        // start or end of the elts can be merged with adjacent nodes,
        // this is done
        if (toOff) {
            let end = this.children[toI];
            if (elts.length && end.merge(0, toOff, elts[elts.length - 1]))
                elts.pop();
            else
                end.merge(0, toOff, null);
        }
        else if (toI < this.children.length && elts.length &&
            this.children[toI].merge(0, 0, elts[elts.length - 1])) {
            elts.pop();
        }
        if (fromOff) {
            let start = this.children[fromI];
            if (elts.length && start.merge(fromOff, undefined, elts[0]))
                elts.shift();
            else
                start.merge(fromOff, undefined, null);
            fromI++;
        }
        else if (fromI && elts.length && this.children[fromI - 1].merge(this.children[fromI - 1].length, undefined, elts[0])) {
            elts.shift();
        }
        // Then try to merge any mergeable nodes at the start and end of
        // the changed range
        while (fromI < toI && elts.length && this.children[toI - 1].match(elts[elts.length - 1])) {
            elts.pop();
            toI--;
        }
        while (fromI < toI && elts.length && this.children[fromI].match(elts[0])) {
            elts.shift();
            fromI++;
        }
        // And if anything remains, splice the child array to insert the new elts
        if (elts.length || fromI != toI)
            this.replaceChildren(fromI, toI, elts);
        return true;
    }
    split(at) {
        let end = new LineView;
        end.breakAfter = this.breakAfter;
        if (this.length == 0)
            return end;
        let { i, off } = this.childPos(at);
        if (off) {
            end.append(this.children[i].slice(off));
            this.children[i].merge(off, undefined, null);
            i++;
        }
        for (let j = i; j < this.children.length; j++)
            end.append(this.children[j]);
        while (i > 0 && this.children[i - 1].length == 0) {
            this.children[i - 1].parent = null;
            i--;
        }
        this.children.length = i;
        this.markDirty();
        this.length = at;
        return end;
    }
    transferDOM(other) {
        if (!this.dom)
            return;
        other.setDOM(this.dom);
        other.prevAttrs = this.prevAttrs === undefined ? this.attrs : this.prevAttrs;
        this.prevAttrs = undefined;
        this.dom = null;
    }
    setDeco(attrs) {
        if (!attrsEq(this.attrs, attrs)) {
            if (this.dom) {
                this.prevAttrs = this.attrs;
                this.markDirty();
            }
            this.attrs = attrs;
        }
    }
    // Only called when building a line view in ContentBuilder
    append(child) {
        this.children.push(child);
        child.setParent(this);
        this.length += child.length;
    }
    // Only called when building a line view in ContentBuilder
    addLineDeco(deco) {
        let attrs = deco.spec.attributes;
        if (attrs)
            this.attrs = combineAttrs(attrs, this.attrs || {});
    }
    domAtPos(pos) {
        let i = 0;
        for (let off = 0; i < this.children.length; i++) {
            let child = this.children[i], end = off + child.length;
            if (end == off && child.getSide() <= 0)
                continue;
            if (pos > off && pos < end && child.dom.parentNode == this.dom)
                return child.domAtPos(pos - off);
            if (pos <= off)
                break;
            off = end;
        }
        for (; i > 0; i--) {
            let before = this.children[i - 1].dom;
            if (before.parentNode == this.dom)
                return DOMPos.after(before);
        }
        return new DOMPos(this.dom, 0);
    }
    // FIXME might need another hack to work around Firefox's behavior
    // of not actually displaying the cursor even though it's there in
    // the DOM
    sync() {
        if (!this.dom) {
            this.setDOM(document.createElement("div"));
            this.dom.className = LineClass;
            this.prevAttrs = this.attrs ? null : undefined;
        }
        if (this.prevAttrs !== undefined) {
            updateAttrs(this.dom, this.prevAttrs, this.attrs);
            this.dom.classList.add(LineClass);
            this.prevAttrs = undefined;
        }
        super.sync();
        let last = this.dom.lastChild;
        if (!last || (last.nodeName != "BR" && !(ContentView.get(last) instanceof TextView))) {
            let hack = document.createElement("BR");
            hack.cmIgnore = true;
            this.dom.appendChild(hack);
        }
    }
    measureTextSize() {
        if (this.children.length == 0 || this.length > 20)
            return null;
        let totalWidth = 0;
        for (let child of this.children) {
            if (!(child instanceof TextView))
                return null;
            let rects = clientRectsFor(child.dom);
            if (rects.length != 1)
                return null;
            totalWidth += rects[0].width;
        }
        return { lineHeight: this.dom.getBoundingClientRect().height,
            charWidth: totalWidth / this.length };
    }
    coordsAt(pos) {
        for (let off = 0, i = 0; i < this.children.length; i++) {
            let child = this.children[i], end = off + child.length;
            if (end >= pos)
                return child.coordsAt(pos - off);
            off = end;
        }
        return this.dom.lastChild.getBoundingClientRect();
    }
    match(other) { return false; }
    get type() { return BlockType.Text; }
}
const none$2 = [];
class BlockWidgetView extends ContentView {
    constructor(widget, length, type, 
    // This is set by the builder and used to distinguish between
    // adjacent widgets and parts of the same widget when calling
    // `merge`. It's kind of silly that it's an instance variable, but
    // it's hard to route there otherwise.
    open = 0) {
        super();
        this.widget = widget;
        this.length = length;
        this.type = type;
        this.open = open;
        this.breakAfter = 0;
    }
    merge(from, to, source) {
        if (!(source instanceof BlockWidgetView) || !source.open ||
            from > 0 && !(source.open & 1 /* Start */) ||
            to < this.length && !(source.open & 2 /* End */))
            return false;
        if (!this.widget.compare(source.widget))
            throw new Error("Trying to merge an open widget with an incompatible node");
        this.length = from + source.length + (this.length - to);
        return true;
    }
    domAtPos(pos) {
        return pos == 0 ? DOMPos.before(this.dom) : DOMPos.after(this.dom, pos == this.length);
    }
    split(at) {
        let len = this.length - at;
        this.length = at;
        return new BlockWidgetView(this.widget, len, this.type);
    }
    get children() { return none$2; }
    sync() {
        if (!this.dom || !this.widget.updateDOM(this.dom)) {
            this.setDOM(this.widget.toDOM(this.editorView));
            this.dom.contentEditable = "false";
        }
    }
    get overrideDOMText() {
        return this.parent ? this.parent.view.state.doc.sliceLines(this.posAtStart, this.posAtEnd) : [""];
    }
    domBoundsAround() { return null; }
    match(other) {
        if (other instanceof BlockWidgetView && other.type == this.type &&
            other.widget.constructor == this.widget.constructor) {
            if (!other.widget.eq(this.widget.value))
                this.markDirty(true);
            this.widget = other.widget;
            this.length = other.length;
            this.breakAfter = other.breakAfter;
            return true;
        }
        return false;
    }
}

class ContentBuilder {
    constructor(doc, pos, end) {
        this.doc = doc;
        this.pos = pos;
        this.end = end;
        this.content = [];
        this.curLine = null;
        this.breakAtStart = 0;
        this.text = "";
        this.textOff = 0;
        this.cursor = doc.iter();
        this.skip = pos;
    }
    posCovered() {
        if (this.content.length == 0)
            return !this.breakAtStart && this.doc.lineAt(this.pos).start != this.pos;
        let last = this.content[this.content.length - 1];
        return !last.breakAfter && !(last instanceof BlockWidgetView && last.type == BlockType.WidgetBefore);
    }
    getLine() {
        if (!this.curLine)
            this.content.push(this.curLine = new LineView);
        return this.curLine;
    }
    addWidget(view) {
        this.curLine = null;
        this.content.push(view);
    }
    finish() {
        if (!this.posCovered())
            this.getLine();
    }
    buildText(length, tagName, clss, attrs, _ranges) {
        while (length > 0) {
            if (this.textOff == this.text.length) {
                let { value, lineBreak, done } = this.cursor.next(this.skip);
                this.skip = 0;
                if (done)
                    throw new Error("Ran out of text content when drawing inline views");
                if (lineBreak) {
                    if (!this.posCovered())
                        this.getLine();
                    if (this.content.length)
                        this.content[this.content.length - 1].breakAfter = 1;
                    else
                        this.breakAtStart = 1;
                    this.curLine = null;
                    length--;
                    continue;
                }
                else {
                    this.text = value;
                    this.textOff = 0;
                }
            }
            let take = Math.min(this.text.length - this.textOff, length);
            this.getLine().append(new TextView(this.text.slice(this.textOff, this.textOff + take), tagName, clss, attrs));
            length -= take;
            this.textOff += take;
        }
    }
    span(from, to, active) {
        let tagName = null, clss = null;
        let attrs = null;
        for (let { spec } of active) {
            if (spec.tagName)
                tagName = spec.tagName;
            if (spec.class)
                clss = clss ? clss + " " + spec.class : spec.class;
            if (spec.attributes)
                for (let name in spec.attributes) {
                    let value = spec.attributes[name];
                    if (value == null)
                        continue;
                    if (name == "class") {
                        clss = clss ? clss + " " + value : value;
                    }
                    else {
                        if (!attrs)
                            attrs = {};
                        if (name == "style" && attrs.style)
                            value = attrs.style + ";" + value;
                        attrs[name] = value;
                    }
                }
        }
        this.buildText(to - from, tagName, clss, attrs, active);
        this.pos = to;
    }
    point(from, to, deco, openStart, openEnd) {
        let open = (openStart ? 1 /* Start */ : 0) | (openEnd ? 2 /* End */ : 0);
        let len = to - from;
        if (deco instanceof PointDecoration) {
            if (deco.block) {
                let { type } = deco;
                if (type == BlockType.WidgetAfter && !this.posCovered())
                    this.getLine();
                this.addWidget(new BlockWidgetView(deco.widget || new NullWidget("div"), len, type, open));
            }
            else {
                this.getLine().append(WidgetView.create(deco.widget || new NullWidget("span"), len, deco.startSide, open));
            }
        }
        else if (this.doc.lineAt(this.pos).start == this.pos) { // Line decoration
            this.getLine().addLineDeco(deco);
        }
        if (len) {
            // Advance the iterator past the replaced content
            if (this.textOff + len <= this.text.length) {
                this.textOff += len;
            }
            else {
                this.skip += len - (this.text.length - this.textOff);
                this.text = "";
                this.textOff = 0;
            }
            this.pos = to;
        }
    }
    static build(text, from, to, decorations) {
        let builder = new ContentBuilder(text, from, to);
        _rangeset__WEBPACK_IMPORTED_MODULE_2__["RangeSet"].spans(decorations, from, to, builder);
        builder.finish();
        return builder;
    }
}
class NullWidget extends WidgetType {
    toDOM() { return document.createElement(this.value); }
    updateDOM(elt) { return elt.nodeName.toLowerCase() == this.value; }
}

const wrappingWhiteSpace = ["pre-wrap", "normal", "pre-line"];
class HeightOracle {
    constructor() {
        this.doc = _text__WEBPACK_IMPORTED_MODULE_3__["Text"].empty;
        this.lineWrapping = false;
        this.direction = "ltr";
        this.heightSamples = {};
        this.lineHeight = 14;
        this.charWidth = 7;
        this.lineLength = 30;
        // Used to track, during updateHeight, if any actual heights changed
        this.heightChanged = false;
    }
    heightForGap(from, to) {
        let lines = this.doc.lineAt(to).number - this.doc.lineAt(from).number + 1;
        if (this.lineWrapping)
            lines += Math.ceil(((to - from) - (lines * this.lineLength * 0.5)) / this.lineLength);
        return this.lineHeight * lines;
    }
    heightForLine(length) {
        if (!this.lineWrapping)
            return this.lineHeight;
        let lines = 1 + Math.max(0, Math.ceil((length - this.lineLength) / (this.lineLength - 5)));
        return lines * this.lineHeight;
    }
    setDoc(doc) { this.doc = doc; return this; }
    mustRefresh(lineHeights, whiteSpace, direction) {
        let newHeight = false;
        for (let i = 0; i < lineHeights.length; i++) {
            let h = lineHeights[i];
            if (h < 0) {
                i++;
            }
            else if (!this.heightSamples[Math.floor(h * 10)]) { // Round to .1 pixels
                newHeight = true;
                this.heightSamples[Math.floor(h * 10)] = true;
            }
        }
        return newHeight || (wrappingWhiteSpace.indexOf(whiteSpace) > -1) != this.lineWrapping || this.direction != direction;
    }
    refresh(whiteSpace, direction, lineHeight, charWidth, lineLength, knownHeights) {
        let lineWrapping = wrappingWhiteSpace.indexOf(whiteSpace) > -1;
        let changed = Math.round(lineHeight) != Math.round(this.lineHeight) ||
            this.lineWrapping != lineWrapping ||
            this.direction != direction;
        this.lineWrapping = lineWrapping;
        this.direction = direction;
        this.lineHeight = lineHeight;
        this.charWidth = charWidth;
        this.lineLength = lineLength;
        if (changed) {
            this.heightSamples = {};
            for (let i = 0; i < knownHeights.length; i++) {
                let h = knownHeights[i];
                if (h < 0)
                    i++;
                else
                    this.heightSamples[Math.floor(h * 10)] = true;
            }
        }
        return changed;
    }
}
// This object is used by `updateHeight` to make DOM measurements
// arrive at the right nides. The `heights` array is a sequence of
// block heights, starting from position `from`.
class MeasuredHeights {
    constructor(from, heights) {
        this.from = from;
        this.heights = heights;
        this.index = 0;
    }
    get more() { return this.index < this.heights.length; }
}
/// Record used to represent information about a block-level element
/// in the editor view.
class BlockInfo {
    /// @internal
    constructor(
    /// The start of the element in the document.
    from, 
    /// The length of the element.
    length, 
    /// The top position of the element.
    top, 
    /// Its height.
    height, 
    /// The type of element this is. When querying lines, this may be
    /// an array of all the blocks that make up the line.
    type) {
        this.from = from;
        this.length = length;
        this.top = top;
        this.height = height;
        this.type = type;
    }
    /// The end of the element as a document position.
    get to() { return this.from + this.length; }
    /// The bottom position of the element.
    get bottom() { return this.top + this.height; }
    /// @internal
    join(other) {
        let detail = (Array.isArray(this.type) ? this.type : [this])
            .concat(Array.isArray(other.type) ? other.type : [other]);
        return new BlockInfo(this.from, this.length + other.length, this.top, this.height + other.height, detail);
    }
}
var QueryType;
(function (QueryType) {
    QueryType[QueryType["ByPos"] = 0] = "ByPos";
    QueryType[QueryType["ByHeight"] = 1] = "ByHeight";
    QueryType[QueryType["ByPosNoHeight"] = 2] = "ByPosNoHeight";
})(QueryType || (QueryType = {}));
class HeightMap {
    constructor(length, // The number of characters covered
    height, // Height of this part of the document
    flags = 2 /* Outdated */) {
        this.length = length;
        this.height = height;
        this.flags = flags;
    }
    get outdated() { return (this.flags & 2 /* Outdated */) > 0; }
    set outdated(value) { this.flags = (value ? 2 /* Outdated */ : 0) | (this.flags & ~2 /* Outdated */); }
    setHeight(oracle, height) {
        if (this.height != height) {
            this.height = height;
            oracle.heightChanged = true;
        }
    }
    // Base case is to replace a leaf node, which simply builds a tree
    // from the new nodes and returns that (HeightMapBranch and
    // HeightMapGap override this to actually use from/to)
    replace(_from, _to, nodes) {
        return HeightMap.of(nodes);
    }
    // Again, these are base cases, and are overridden for branch and gap nodes.
    decomposeLeft(_to, result) { result.push(this); }
    decomposeRight(_from, result) { result.push(this); }
    applyChanges(decorations, oldDoc, oracle, changes) {
        let me = this;
        for (let i = changes.length - 1; i >= 0; i--) {
            let { fromA, toA, fromB, toB } = changes[i];
            let start = me.lineAt(fromA, QueryType.ByPosNoHeight, oldDoc, 0, 0);
            let end = start.to >= toA ? start : me.lineAt(toA, QueryType.ByPosNoHeight, oldDoc, 0, 0);
            toB += end.to - toA;
            toA = end.to;
            while (i > 0 && start.from <= changes[i - 1].toA) {
                fromA = changes[i - 1].fromA;
                fromB = changes[i - 1].fromB;
                i--;
                if (fromA < start.from)
                    start = me.lineAt(fromA, QueryType.ByPosNoHeight, oldDoc, 0, 0);
            }
            fromB += start.from - fromA;
            fromA = start.from;
            let nodes = NodeBuilder.build(oracle, decorations, fromB, toB);
            me = me.replace(fromA, toA, nodes);
        }
        return me.updateHeight(oracle, 0);
    }
    static empty() { return new HeightMapText(0, 0); }
    // nodes uses null values to indicate the position of line breaks.
    // There are never line breaks at the start or end of the array, or
    // two line breaks next to each other, and the array isn't allowed
    // to be empty (same restrictions as return value from the builder).
    static of(nodes) {
        if (nodes.length == 1)
            return nodes[0];
        let i = 0, j = nodes.length, before = 0, after = 0;
        for (;;) {
            if (i == j) {
                if (before > after * 2) {
                    let split = nodes[i - 1];
                    if (split.break)
                        nodes.splice(--i, 1, split.left, null, split.right);
                    else
                        nodes.splice(--i, 1, split.left, split.right);
                    j += 1 + split.break;
                    before -= split.size;
                }
                else if (after > before * 2) {
                    let split = nodes[j];
                    if (split.break)
                        nodes.splice(j, 1, split.left, null, split.right);
                    else
                        nodes.splice(j, 1, split.left, split.right);
                    j += 2 + split.break;
                    after -= split.size;
                }
                else {
                    break;
                }
            }
            else if (before < after) {
                let next = nodes[i++];
                if (next)
                    before += next.size;
            }
            else {
                let next = nodes[--j];
                if (next)
                    after += next.size;
            }
        }
        let brk = 0;
        if (nodes[i - 1] == null) {
            brk = 1;
            i--;
        }
        else if (nodes[i] == null) {
            brk = 1;
            j++;
        }
        return new HeightMapBranch(HeightMap.of(nodes.slice(0, i)), brk, HeightMap.of(nodes.slice(j)));
    }
}
HeightMap.prototype.size = 1;
class HeightMapBlock extends HeightMap {
    constructor(length, height, type) {
        super(length, height);
        this.type = type;
    }
    blockAt(_height, _doc, top, offset) {
        return new BlockInfo(offset, this.length, top, this.height, this.type);
    }
    lineAt(_value, _type, doc, top, offset) {
        return this.blockAt(0, doc, top, offset);
    }
    forEachLine(_from, _to, doc, top, offset, f) {
        f(this.blockAt(0, doc, top, offset));
    }
    updateHeight(oracle, offset = 0, _force = false, measured) {
        if (measured && measured.from <= offset && measured.more)
            this.setHeight(oracle, measured.heights[measured.index++]);
        this.outdated = false;
        return this;
    }
    toString() { return `block(${this.length})`; }
}
class HeightMapText extends HeightMapBlock {
    constructor(length, height) {
        super(length, height, BlockType.Text);
        this.collapsed = 0; // Amount of collapsed content in the line
        this.widgetHeight = 0; // Maximum inline widget height
    }
    replace(_from, _to, nodes) {
        if (nodes.length == 1 && nodes[0] instanceof HeightMapText && Math.abs(this.length - nodes[0].length) < 10) {
            nodes[0].height = this.height;
            return nodes[0];
        }
        else {
            return HeightMap.of(nodes);
        }
    }
    updateHeight(oracle, offset = 0, force = false, measured) {
        if (measured && measured.from <= offset && measured.more)
            this.setHeight(oracle, measured.heights[measured.index++]);
        else if (force || this.outdated)
            this.setHeight(oracle, Math.max(this.widgetHeight, oracle.heightForLine(this.length - this.collapsed)));
        this.outdated = false;
        return this;
    }
    toString() {
        return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
    }
}
class HeightMapGap extends HeightMap {
    constructor(length) { super(length, 0); }
    lines(doc, offset) {
        let firstLine = doc.lineAt(offset).number, lastLine = doc.lineAt(offset + this.length).number;
        return { firstLine, lastLine, lineHeight: this.height / (lastLine - firstLine + 1) };
    }
    blockAt(height, doc, top, offset) {
        let { firstLine, lastLine, lineHeight } = this.lines(doc, offset);
        let line = Math.max(0, Math.min(lastLine - firstLine, Math.floor((height - top) / lineHeight)));
        let { start, length } = doc.line(firstLine + line);
        return new BlockInfo(start, length, top + lineHeight * line, lineHeight, BlockType.Text);
    }
    lineAt(value, type, doc, top, offset) {
        if (type == QueryType.ByHeight)
            return this.blockAt(value, doc, top, offset);
        if (type == QueryType.ByPosNoHeight) {
            let { start, end } = doc.lineAt(value);
            return new BlockInfo(start, end - start, 0, 0, BlockType.Text);
        }
        let { firstLine, lineHeight } = this.lines(doc, offset);
        let { start, length, number } = doc.lineAt(value);
        return new BlockInfo(start, length, top + lineHeight * (number - firstLine), lineHeight, BlockType.Text);
    }
    forEachLine(from, to, doc, top, offset, f) {
        let { firstLine, lastLine, lineHeight } = this.lines(doc, offset);
        for (let line = firstLine; line <= lastLine; line++) {
            let { start, end } = doc.line(line);
            if (start > to)
                break;
            if (end >= from)
                f(new BlockInfo(start, end - start, top, top += lineHeight, BlockType.Text));
        }
    }
    replace(from, to, nodes) {
        let after = this.length - to;
        if (after > 0) {
            let last = nodes[nodes.length - 1];
            if (last instanceof HeightMapGap)
                nodes[nodes.length - 1] = new HeightMapGap(last.length + after);
            else
                nodes.push(null, new HeightMapGap(after - 1));
        }
        if (from > 0) {
            let first = nodes[0];
            if (first instanceof HeightMapGap)
                nodes[0] = new HeightMapGap(from + first.length);
            else
                nodes.unshift(new HeightMapGap(from - 1), null);
        }
        return HeightMap.of(nodes);
    }
    decomposeLeft(to, result) {
        result.push(to == this.length ? this : new HeightMapGap(to));
    }
    decomposeRight(from, result) {
        result.push(from == 0 ? this : new HeightMapGap(this.length - from));
    }
    updateHeight(oracle, offset = 0, force = false, measured) {
        let end = offset + this.length;
        if (measured && measured.from <= offset + this.length && measured.more) {
            // Fill in part of this gap with measured lines. We know there
            // can't be widgets or collapsed ranges in those lines, because
            // they would already have been added to the heightmap (gaps
            // only contain plain text).
            let nodes = [], pos = Math.max(offset, measured.from);
            if (measured.from > offset)
                nodes.push(new HeightMapGap(measured.from - offset - 1).updateHeight(oracle, offset));
            while (pos <= end && measured.more) {
                let len = oracle.doc.lineAt(pos).length;
                if (nodes.length)
                    nodes.push(null);
                let line = new HeightMapText(len, measured.heights[measured.index++]);
                line.outdated = false;
                nodes.push(line);
                pos += len + 1;
            }
            if (pos <= end)
                nodes.push(null, new HeightMapGap(end - pos).updateHeight(oracle, pos));
            oracle.heightChanged = true;
            return HeightMap.of(nodes);
        }
        else if (force || this.outdated) {
            this.setHeight(oracle, oracle.heightForGap(offset, offset + this.length));
            this.outdated = false;
        }
        return this;
    }
    toString() { return `gap(${this.length})`; }
}
class HeightMapBranch extends HeightMap {
    constructor(left, brk, right) {
        super(left.length + brk + right.length, left.height + right.height, brk | (left.outdated || right.outdated ? 2 /* Outdated */ : 0));
        this.left = left;
        this.right = right;
        this.size = left.size + right.size;
    }
    get break() { return this.flags & 1 /* Break */; }
    blockAt(height, doc, top, offset) {
        let mid = top + this.left.height;
        return height < mid || this.right.height == 0 ? this.left.blockAt(height, doc, top, offset)
            : this.right.blockAt(height, doc, mid, offset + this.left.length + this.break);
    }
    lineAt(value, type, doc, top, offset) {
        let rightTop = top + this.left.height, rightOffset = offset + this.left.length + this.break;
        let left = type == QueryType.ByHeight ? value < rightTop || this.right.height == 0 : value < rightOffset;
        let base = left ? this.left.lineAt(value, type, doc, top, offset)
            : this.right.lineAt(value, type, doc, rightTop, rightOffset);
        if (this.break || (left ? base.to < rightOffset : base.from > rightOffset))
            return base;
        let subQuery = type == QueryType.ByPosNoHeight ? QueryType.ByPosNoHeight : QueryType.ByPos;
        if (left)
            return base.join(this.right.lineAt(rightOffset, subQuery, doc, rightTop, rightOffset));
        else
            return this.left.lineAt(rightOffset, subQuery, doc, top, offset).join(base);
    }
    forEachLine(from, to, doc, top, offset, f) {
        let rightTop = top + this.left.height, rightOffset = offset + this.left.length + this.break;
        if (this.break) {
            if (from < rightOffset)
                this.left.forEachLine(from, to, doc, top, offset, f);
            if (to >= rightOffset)
                this.right.forEachLine(from, to, doc, rightTop, rightOffset, f);
        }
        else {
            let mid = this.lineAt(rightOffset, QueryType.ByPos, doc, top, offset);
            if (from < mid.from)
                this.left.forEachLine(from, mid.from - 1, doc, top, offset, f);
            if (mid.to >= from && mid.from <= to)
                f(mid);
            if (to > mid.to)
                this.right.forEachLine(mid.to + 1, to, doc, rightTop, rightOffset, f);
        }
    }
    replace(from, to, nodes) {
        let rightStart = this.left.length + this.break;
        if (to < rightStart)
            return this.balanced(this.left.replace(from, to, nodes), this.right);
        if (from > this.left.length)
            return this.balanced(this.left, this.right.replace(from - rightStart, to - rightStart, nodes));
        let result = [];
        if (from > 0)
            this.decomposeLeft(from, result);
        let left = result.length;
        for (let node of nodes)
            result.push(node);
        if (from > 0)
            mergeGaps(result, left - 1);
        if (to < this.length) {
            let right = result.length;
            this.decomposeRight(to, result);
            mergeGaps(result, right);
        }
        return HeightMap.of(result);
    }
    decomposeLeft(to, result) {
        let left = this.left.length;
        if (to <= left)
            return this.left.decomposeLeft(to, result);
        result.push(this.left);
        if (this.break) {
            left++;
            if (to >= left)
                result.push(null);
        }
        if (to > left)
            this.right.decomposeLeft(to - left, result);
    }
    decomposeRight(from, result) {
        let left = this.left.length, right = left + this.break;
        if (from >= right)
            return this.right.decomposeRight(from - right, result);
        if (from < left)
            this.left.decomposeRight(from, result);
        if (this.break && from < right)
            result.push(null);
        result.push(this.right);
    }
    balanced(left, right) {
        if (left.size > 2 * right.size || right.size > 2 * left.size)
            return HeightMap.of(this.break ? [left, null, right] : [left, right]);
        this.left = left;
        this.right = right;
        this.height = left.height + right.height;
        this.outdated = left.outdated || right.outdated;
        this.size = left.size + right.size;
        this.length = left.length + this.break + right.length;
        return this;
    }
    updateHeight(oracle, offset = 0, force = false, measured) {
        let { left, right } = this, rightStart = offset + left.length + this.break, rebalance = null;
        if (measured && measured.from <= offset + left.length && measured.more)
            rebalance = left = left.updateHeight(oracle, offset, force, measured);
        else
            left.updateHeight(oracle, offset, force);
        if (measured && measured.from <= rightStart + right.length && measured.more)
            rebalance = right = right.updateHeight(oracle, rightStart, force, measured);
        else
            right.updateHeight(oracle, rightStart, force);
        if (rebalance)
            return this.balanced(left, right);
        this.height = this.left.height + this.right.height;
        this.outdated = false;
        return this;
    }
    toString() { return this.left + (this.break ? " " : "-") + this.right; }
}
function mergeGaps(nodes, around) {
    let before, after;
    if (nodes[around] == null &&
        (before = nodes[around - 1]) instanceof HeightMapGap &&
        (after = nodes[around + 1]) instanceof HeightMapGap)
        nodes.splice(around - 1, 3, new HeightMapGap(before.length + 1 + after.length));
}
const relevantWidgetHeight = 5;
class NodeBuilder {
    constructor(pos, oracle) {
        this.pos = pos;
        this.oracle = oracle;
        this.nodes = [];
        this.lineStart = -1;
        this.lineEnd = -1;
        this.covering = null;
        this.writtenTo = pos;
    }
    get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
    }
    span(_from, to) {
        if (this.lineStart > -1) {
            let end = Math.min(to, this.lineEnd), last = this.nodes[this.nodes.length - 1];
            if (last instanceof HeightMapText)
                last.length += end - this.pos;
            else if (end > this.pos || !this.isCovered)
                this.nodes.push(new HeightMapText(end - this.pos, -1));
            this.writtenTo = end;
            if (to > end) {
                this.nodes.push(null);
                this.writtenTo++;
                this.lineStart = -1;
            }
        }
        this.pos = to;
    }
    point(from, to, deco) {
        if (from < to || deco.heightRelevant) {
            let height = deco.widget ? Math.max(0, deco.widget.estimatedHeight) : 0;
            let len = to - from;
            if (deco.block) {
                this.addBlock(new HeightMapBlock(len, height, deco.type));
            }
            else if (len || height >= relevantWidgetHeight) {
                this.addLineDeco(height, len);
            }
        }
        else if (to > from) {
            this.span(from, to);
        }
        if (this.lineEnd > -1 && this.lineEnd < this.pos)
            this.lineEnd = this.oracle.doc.lineAt(this.pos).end;
    }
    enterLine() {
        if (this.lineStart > -1)
            return;
        let { start, end } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = start;
        this.lineEnd = end;
        if (this.writtenTo < start) {
            if (this.writtenTo < start - 1 || this.nodes[this.nodes.length - 1] == null)
                this.nodes.push(new HeightMapGap(start - this.writtenTo - 1));
            this.nodes.push(null);
        }
        if (this.pos > start)
            this.nodes.push(new HeightMapText(this.pos - start, -1));
        this.writtenTo = this.pos;
    }
    ensureLine() {
        this.enterLine();
        let last = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (last instanceof HeightMapText)
            return last;
        let line = new HeightMapText(0, -1);
        this.nodes.push(line);
        return line;
    }
    addBlock(block) {
        this.enterLine();
        if (block.type == BlockType.WidgetAfter && !this.isCovered)
            this.ensureLine();
        this.nodes.push(block);
        this.writtenTo = this.pos = this.pos + block.length;
        if (block.type != BlockType.WidgetBefore)
            this.covering = block;
    }
    addLineDeco(height, length) {
        let line = this.ensureLine();
        line.length += length;
        line.collapsed += length;
        line.widgetHeight = Math.max(line.widgetHeight, height);
        this.writtenTo = this.pos = this.pos + length;
    }
    finish(from) {
        let last = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
        if (this.lineStart > -1 && !(last instanceof HeightMapText) && !this.isCovered)
            this.nodes.push(new HeightMapText(0, -1));
        else if (this.writtenTo < this.pos || last == null)
            this.nodes.push(new HeightMapGap(this.pos - this.writtenTo));
        let pos = from;
        for (let node of this.nodes) {
            if (node instanceof HeightMapText)
                node.updateHeight(this.oracle, pos);
            pos += node ? node.length : 1;
        }
        return this.nodes;
    }
    // Always called with a region that on both sides either stretches
    // to a line break or the end of the document.
    // The returned array uses null to indicate line breaks, but never
    // starts or ends in a line break, or has multiple line breaks next
    // to each other.
    static build(oracle, decorations, from, to) {
        let builder = new NodeBuilder(from, oracle);
        _rangeset__WEBPACK_IMPORTED_MODULE_2__["RangeSet"].spans(decorations, from, to, builder);
        return builder.finish(from);
    }
    get minPointSize() { return 0; }
}
function heightRelevantDecoChanges(a, b, diff, length) {
    let comp = new DecorationComparator();
    _rangeset__WEBPACK_IMPORTED_MODULE_2__["RangeSet"].compare(a, b, diff, length, comp);
    return comp.changes;
}
class DecorationComparator {
    constructor() {
        this.changes = [];
    }
    compareRange() { }
    comparePoint(from, to, a, b) {
        if (from < to || a && a.heightRelevant || b && b.heightRelevant)
            addRange(from, to, this.changes);
    }
    get minPointSize() { return 0; }
}

const none$3 = [];
const domEventHandlers = _state__WEBPACK_IMPORTED_MODULE_0__["Facet"].define();
const clickAddsSelectionRange = _state__WEBPACK_IMPORTED_MODULE_0__["Facet"].define();
const dragMovesSelection = _state__WEBPACK_IMPORTED_MODULE_0__["Facet"].define();
/// Plugin fields are a mechanism for allowing plugins to provide
/// values that can be retrieved through the
/// [`pluginValues`](#view.EditorView.pluginValues) view method.
class PluginField {
    static define() { return new PluginField(); }
}
/// Plugins can provide additional scroll margins (space around the
/// sides of the scrolling element that should be considered
/// invisible) through this field. This can be useful when the
/// plugin introduces elements that cover part of that element (for
/// example a horizontally fixed gutter).
PluginField.scrollMargins = PluginField.define();
let nextPluginID = 0;
const viewPlugin = _state__WEBPACK_IMPORTED_MODULE_0__["Facet"].define();
/// View plugins associate stateful values with a view. They can
/// influence the way the content is drawn, and are notified of things
/// that happen in the view.
class ViewPlugin {
    constructor(
    /// @internal
    id, 
    /// @internal
    create, 
    /// @internal
    fields) {
        this.id = id;
        this.create = create;
        this.fields = fields;
        this.extension = viewPlugin.of(this);
    }
    /// Define a plugin from a constructor function that creates the
    /// plugin's value, given an editor view.
    static define(create) {
        return new ViewPlugin(nextPluginID++, create, []);
    }
    /// Create a plugin for a class whose constructor takes a single
    /// editor view as argument.
    static fromClass(cls) {
        return ViewPlugin.define(view => new cls(view));
    }
    /// Create a new version of this plugin that provides a given
    /// [plugin field](#view.PluginField).
    provide(field, get) {
        return new ViewPlugin(this.id, this.create, this.fields.concat({ field, get }));
    }
    decorations(get) {
        return this.provide(pluginDecorations, get || ((value) => value.decorations));
    }
}
// FIXME somehow ensure that no replacing decorations end up in here
const pluginDecorations = PluginField.define();
class PluginInstance {
    constructor(value, spec) {
        this.value = value;
        this.spec = spec;
        this.updateFunc = this.value.update ? this.value.update.bind(this.value) : () => undefined;
    }
    static create(spec, view) {
        let value;
        try {
            value = spec.create(view);
        }
        catch (e) {
            console.error("CodeMirror plugin crashed:", e);
            return PluginInstance.dummy;
        }
        return new PluginInstance(value, spec);
    }
    takeField(type, target) {
        for (let { field, get } of this.spec.fields)
            if (field == type)
                target.push(get(this.value));
    }
    update(update) {
        try {
            this.updateFunc(update);
            return this;
        }
        catch (e) {
            console.error("CodeMirror plugin crashed:", e);
            if (this.value.destroy)
                try {
                    this.value.destroy();
                }
                catch (_) { }
            return PluginInstance.dummy;
        }
    }
    destroy() {
        try {
            if (this.value.destroy)
                this.value.destroy();
        }
        catch (e) {
            console.error("CodeMirror plugin crashed:", e);
        }
    }
}
PluginInstance.dummy = new PluginInstance({}, ViewPlugin.define(() => ({})));
const editorAttributes = _state__WEBPACK_IMPORTED_MODULE_0__["Facet"].define({
    combine: values => values.reduce((a, b) => combineAttrs(b, a), {})
});
const contentAttributes = _state__WEBPACK_IMPORTED_MODULE_0__["Facet"].define({
    combine: values => values.reduce((a, b) => combineAttrs(b, a), {})
});
// Provide decorations
const decorations = _state__WEBPACK_IMPORTED_MODULE_0__["Facet"].define();
const styleModule = _state__WEBPACK_IMPORTED_MODULE_0__["Facet"].define();
const phrases = _state__WEBPACK_IMPORTED_MODULE_0__["Facet"].define();
/// View [plugins](#view.ViewPlugin) are given instances of this
/// class, which describe what happened, whenever the view is updated.
class ViewUpdate {
    /// @internal
    constructor(
    /// The editor view that the update is associated with.
    view, 
    /// The new editor state.
    state, 
    /// The transactions involved in the update. May be empty.
    transactions = none$3) {
        this.view = view;
        this.state = state;
        this.transactions = transactions;
        /// @internal
        this.flags = 0;
        this.changes = transactions.reduce((chs, tr) => chs.appendSet(tr.changes), _state__WEBPACK_IMPORTED_MODULE_0__["ChangeSet"].empty);
        this.prevState = view.state;
        let focus = view.hasFocus;
        if (focus != view.inputState.notifiedFocused) {
            view.inputState.notifiedFocused = focus;
            this.flags != 1 /* Focus */;
        }
        if (this.docChanged)
            this.flags |= 2 /* Height */;
    }
    /// Tells you whether the viewport changed in this update.
    get viewportChanged() {
        return (this.flags & 4 /* Viewport */) > 0;
    }
    /// Indicates whether the line height in the editor changed in this update.
    get heightChanged() {
        return (this.flags & 2 /* Height */) > 0;
    }
    /// True when this update indicates a focus change.
    get focusChanged() {
        return (this.flags & 1 /* Focus */) > 0;
    }
    /// Whether the document changed in this update.
    get docChanged() {
        return this.transactions.some(tr => tr.docChanged);
    }
    /// Whether the selection was explicitly set in this update.
    get selectionSet() {
        return this.transactions.some(tr => tr.selectionSet);
    }
    /// @internal
    get empty() { return this.flags == 0 && this.transactions.length == 0; }
}

function visiblePixelRange(dom, paddingTop) {
    let rect = dom.getBoundingClientRect();
    let left = Math.max(0, rect.left), right = Math.min(innerWidth, rect.right);
    let top = Math.max(0, rect.top), bottom = Math.min(innerHeight, rect.bottom);
    for (let parent = dom.parentNode; parent;) { // (Cast to any because TypeScript is useless with Node types)
        if (parent.nodeType == 1) {
            if (parent.scrollHeight > parent.clientHeight || parent.scrollWidth > parent.clientWidth) {
                let parentRect = parent.getBoundingClientRect();
                left = Math.max(left, parentRect.left);
                right = Math.min(right, parentRect.right);
                top = Math.max(top, parentRect.top);
                bottom = Math.min(bottom, parentRect.bottom);
            }
            parent = parent.parentNode;
        }
        else if (parent.nodeType == 11) { // Shadow root
            parent = parent.host;
        }
        else {
            break;
        }
    }
    return { left: left - rect.left, right: right - rect.left,
        top: top - (rect.top + paddingTop), bottom: bottom - (rect.top + paddingTop) };
}
// Line gaps are placeholder widgets used to hide pieces of overlong
// lines within the viewport, as a kludge to keep the editor
// responsive when a ridiculously long line is loaded into it.
class LineGap {
    constructor(from, to, size) {
        this.from = from;
        this.to = to;
        this.size = size;
    }
    static same(a, b) {
        if (a.length != b.length)
            return false;
        for (let i = 0; i < a.length; i++) {
            let gA = a[i], gB = b[i];
            if (gA.from != gB.from || gA.to != gB.to || gA.size != gB.size)
                return false;
        }
        return true;
    }
    draw(wrapping) {
        return Decoration.replace({ widget: new LineGapWidget({ size: this.size, vertical: wrapping }) }).range(this.from, this.to);
    }
}
class LineGapWidget extends WidgetType {
    toDOM() {
        let elt = document.createElement("div");
        if (this.value.vertical) {
            elt.style.height = this.value.size + "px";
        }
        else {
            elt.style.width = this.value.size + "px";
            elt.style.height = "2px";
            elt.style.display = "inline-block";
        }
        return elt;
    }
    eq(other) { return this.value.size == other.size && this.value.vertical == other.vertical; }
    get estimatedHeight() { return this.value.vertical ? this.value.size : -1; }
}
class ViewState {
    constructor(state) {
        this.state = state;
        // These are contentDOM-local coordinates
        this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 };
        this.paddingTop = 0;
        this.paddingBottom = 0;
        this.heightOracle = new HeightOracle;
        this.heightMap = HeightMap.empty();
        this.scrollTo = -1;
        // Briefly set to true when printing, to disable viewport limiting
        this.printing = false;
        this.visibleRanges = [];
        this.heightMap = this.heightMap.applyChanges(state.facet(decorations), _text__WEBPACK_IMPORTED_MODULE_3__["Text"].empty, this.heightOracle.setDoc(state.doc), [new _state__WEBPACK_IMPORTED_MODULE_0__["ChangedRange"](0, 0, 0, state.doc.length)]);
        this.viewport = this.getViewport(0, -1);
        this.lineGaps = this.ensureLineGaps([]);
        this.lineGapDeco = Decoration.set(this.lineGaps.map(gap => gap.draw(false)));
        this.computeVisibleRanges();
    }
    update(update, scrollTo = -1) {
        let prev = this.state;
        this.state = update.state;
        let newDeco = this.state.facet(decorations);
        let contentChanges = update.changes.changedRanges();
        let heightChanges = extendWithRanges(contentChanges, heightRelevantDecoChanges(update.prevState.facet(decorations), newDeco, update ? contentChanges : [], this.state.doc.length));
        let prevHeight = this.heightMap.height;
        this.heightMap = this.heightMap.applyChanges(newDeco, prev.doc, this.heightOracle.setDoc(this.state.doc), heightChanges);
        if (this.heightMap.height != prevHeight)
            update.flags |= 2 /* Height */;
        let viewport = heightChanges.length ? this.mapViewport(this.viewport, update.changes) : this.viewport;
        if (!viewport || scrollTo > -1 && (scrollTo < viewport.from || scrollTo > viewport.to) ||
            !this.viewportIsCovering(viewport))
            viewport = this.getViewport(0, scrollTo);
        if (!viewport.eq(this.viewport)) {
            this.viewport = viewport;
            update.flags |= 4 /* Viewport */;
        }
        if (this.lineGaps.length || this.viewport.to - this.viewport.from > 15000 /* MinViewPort */)
            update.flags |= this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, update.changes)));
        this.computeVisibleRanges();
        if (scrollTo > -1)
            this.scrollTo = scrollTo;
    }
    measure(docView, repeated) {
        let dom = docView.dom, whiteSpace = "", direction = "ltr";
        if (!repeated) {
            // Vertical padding
            let style = window.getComputedStyle(dom);
            whiteSpace = style.whiteSpace, direction = (style.direction || "ltr");
            this.paddingTop = parseInt(style.paddingTop) || 0;
            this.paddingBottom = parseInt(style.paddingBottom) || 0;
        }
        // Pixel viewport
        let pixelViewport = this.printing ? { top: -1e8, bottom: 1e8, left: -1e8, right: 1e8 } : visiblePixelRange(dom, this.paddingTop);
        let dTop = pixelViewport.top - this.pixelViewport.top, dBottom = pixelViewport.bottom - this.pixelViewport.bottom;
        this.pixelViewport = pixelViewport;
        if (this.pixelViewport.bottom <= this.pixelViewport.top ||
            this.pixelViewport.right <= this.pixelViewport.left)
            return 0;
        let lineHeights = docView.measureVisibleLineHeights();
        let refresh = false, bias = 0;
        if (!repeated) {
            if (this.heightOracle.mustRefresh(lineHeights, whiteSpace, direction)) {
                let { lineHeight, charWidth } = docView.measureTextSize();
                refresh = this.heightOracle.refresh(whiteSpace, direction, lineHeight, charWidth, (docView.dom).clientWidth / charWidth, lineHeights);
                if (refresh)
                    docView.minWidth = 0;
            }
            if (dTop > 0 && dBottom > 0)
                bias = Math.max(dTop, dBottom);
            else if (dTop < 0 && dBottom < 0)
                bias = Math.min(dTop, dBottom);
        }
        this.heightOracle.heightChanged = false;
        this.heightMap = this.heightMap.updateHeight(this.heightOracle, 0, refresh, new MeasuredHeights(this.viewport.from, lineHeights));
        let result = this.heightOracle.heightChanged ? 2 /* Height */ : 0;
        let scrollTo = this.scrollTo;
        this.scrollTo = -1;
        if (!this.viewportIsCovering(this.viewport, bias) ||
            scrollTo > -1 && (scrollTo < this.viewport.from || scrollTo > this.viewport.to)) {
            this.viewport = this.getViewport(bias, scrollTo);
            result |= 4 /* Viewport */;
        }
        if (this.lineGaps.length || this.viewport.to - this.viewport.from > 15000 /* MinViewPort */)
            result |= this.updateLineGaps(this.ensureLineGaps(refresh ? [] : this.lineGaps));
        this.computeVisibleRanges();
        if (scrollTo > -1)
            docView.scrollPosIntoView(scrollTo); // FIXME return instead?
        return result;
    }
    getViewport(bias, scrollTo) {
        // This will divide VP.Margin between the top and the
        // bottom, depending on the bias (the change in viewport position
        // since the last update). It'll hold a number between 0 and 1
        let marginTop = 0.5 - Math.max(-0.5, Math.min(0.5, bias / 1000 /* Margin */ / 2));
        let map = this.heightMap, doc = this.state.doc, { top, bottom } = this.pixelViewport;
        let viewport = new Viewport(map.lineAt(top - marginTop * 1000 /* Margin */, QueryType.ByHeight, doc, 0, 0).from, map.lineAt(bottom + (1 - marginTop) * 1000 /* Margin */, QueryType.ByHeight, doc, 0, 0).to);
        // If scrollTo is > -1, make sure the viewport includes that position
        if (scrollTo > -1) {
            if (scrollTo < viewport.from) {
                let { top: newTop } = map.lineAt(scrollTo, QueryType.ByPos, doc, 0, 0);
                viewport = new Viewport(map.lineAt(newTop - 1000 /* Margin */ / 2, QueryType.ByHeight, doc, 0, 0).from, map.lineAt(newTop + (bottom - top) + 1000 /* Margin */ / 2, QueryType.ByHeight, doc, 0, 0).to);
            }
            else if (scrollTo > viewport.to) {
                let { bottom: newBottom } = map.lineAt(scrollTo, QueryType.ByPos, doc, 0, 0);
                viewport = new Viewport(map.lineAt(newBottom - (bottom - top) - 1000 /* Margin */ / 2, QueryType.ByHeight, doc, 0, 0).from, map.lineAt(newBottom + 1000 /* Margin */ / 2, QueryType.ByHeight, doc, 0, 0).to);
            }
        }
        return viewport;
    }
    mapViewport(viewport, changes) {
        let from = changes.mapPos(viewport.from, -1), to = changes.mapPos(viewport.to, 1);
        if ((to - from) - (viewport.to - viewport.from) > 100)
            return null; // Grew too much, recompute
        return new Viewport(this.heightMap.lineAt(from, QueryType.ByPos, this.state.doc, 0, 0).from, this.heightMap.lineAt(to, QueryType.ByPos, this.state.doc, 0, 0).to);
    }
    viewportIsCovering({ from, to }, bias = 0) {
        let { top } = this.heightMap.lineAt(from, QueryType.ByPos, this.state.doc, 0, 0);
        let { bottom } = this.heightMap.lineAt(to, QueryType.ByPos, this.state.doc, 0, 0);
        return (from == 0 || top <= this.pixelViewport.top - Math.max(10 /* MinCoverMargin */, Math.min(-bias, 250 /* MaxCoverMargin */))) &&
            (to == this.state.doc.length ||
                bottom >= this.pixelViewport.bottom + Math.max(10 /* MinCoverMargin */, Math.min(bias, 250 /* MaxCoverMargin */)));
    }
    mapLineGaps(gaps, changes) {
        if (!gaps.length || !changes.changes.length)
            return gaps;
        let mapped = [];
        for (let gap of gaps)
            if (!changes.touchesRange(gap.from, gap.to))
                mapped.push(new LineGap(changes.mapPos(gap.from), changes.mapPos(gap.to), gap.size));
        return mapped;
    }
    // Computes positions in the viewport where the start or end of a
    // line should be hidden, trying to reuse existing line gaps when
    // appropriate to avoid unneccesary redraws.
    // Uses crude character-counting for the positioning and sizing,
    // since actual DOM coordinates aren't always available and
    // predictable. Relies on generous margins (see LG.Margin) to hide
    // the artifacts this might produce from the user.
    ensureLineGaps(current) {
        let gaps = [];
        // This won't work at all in predominantly right-to-left text.
        if (this.heightOracle.direction != "ltr")
            return gaps;
        this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.state.doc, 0, 0, line => {
            if (line.length < 10000 /* Margin */)
                return;
            let structure = lineStructure(line.from, line.to, this.state);
            if (structure.total < 10000 /* Margin */)
                return;
            let viewFrom, viewTo;
            if (this.heightOracle.lineWrapping) {
                if (line.from != this.viewport.from)
                    viewFrom = line.from;
                else
                    viewFrom = findPosition(structure, (this.pixelViewport.top - line.top) / line.height);
                if (line.to != this.viewport.to)
                    viewTo = line.to;
                else
                    viewTo = findPosition(structure, (this.pixelViewport.bottom - line.top) / line.height);
            }
            else {
                let totalWidth = structure.total * this.heightOracle.charWidth;
                viewFrom = findPosition(structure, this.pixelViewport.left / totalWidth);
                viewTo = findPosition(structure, this.pixelViewport.right / totalWidth);
            }
            let sel = this.state.selection.primary;
            // Make sure the gap doesn't cover a selection end
            if (sel.from <= viewFrom && sel.to >= line.from)
                viewFrom = sel.from;
            if (sel.from <= line.to && sel.to >= viewTo)
                viewTo = sel.to;
            let gapTo = viewFrom - 10000 /* Margin */, gapFrom = viewTo + 10000 /* Margin */;
            if (gapTo > line.from + 5000 /* HalfMargin */)
                gaps.push(find(current, gap => gap.from == line.from && gap.to > gapTo - 5000 /* HalfMargin */ && gap.to < gapTo + 5000 /* HalfMargin */) ||
                    new LineGap(line.from, gapTo, this.gapSize(line, gapTo, true, structure)));
            if (gapFrom < line.to - 5000 /* HalfMargin */)
                gaps.push(find(current, gap => gap.to == line.to && gap.from > gapFrom - 5000 /* HalfMargin */ &&
                    gap.from < gapFrom + 5000 /* HalfMargin */) ||
                    new LineGap(gapFrom, line.to, this.gapSize(line, gapFrom, false, structure)));
        });
        return gaps;
    }
    gapSize(line, pos, start, structure) {
        if (this.heightOracle.lineWrapping) {
            let height = line.height * findFraction(structure, pos);
            return start ? height : line.height - height;
        }
        else {
            let ratio = findFraction(structure, pos);
            return structure.total * this.heightOracle.charWidth * (start ? ratio : 1 - ratio);
        }
    }
    updateLineGaps(gaps) {
        if (!LineGap.same(gaps, this.lineGaps)) {
            this.lineGaps = gaps;
            this.lineGapDeco = Decoration.set(gaps.map(gap => gap.draw(this.heightOracle.lineWrapping)));
            return 16 /* LineGaps */;
        }
        return 0;
    }
    computeVisibleRanges() {
        let deco = this.state.facet(decorations);
        if (this.lineGaps.length)
            deco = deco.concat(this.lineGapDeco);
        let ranges = [];
        _rangeset__WEBPACK_IMPORTED_MODULE_2__["RangeSet"].spans(deco, this.viewport.from, this.viewport.to, {
            span(from, to) { ranges.push({ from, to }); },
            point() { },
            minPointSize: 20
        });
        this.visibleRanges = ranges;
    }
    lineAt(pos, editorTop) {
        return this.heightMap.lineAt(pos, QueryType.ByPos, this.state.doc, editorTop + this.paddingTop, 0);
    }
    lineAtHeight(height, editorTop) {
        return this.heightMap.lineAt(height, QueryType.ByHeight, this.state.doc, editorTop + this.paddingTop, 0);
    }
    blockAtHeight(height, editorTop) {
        return this.heightMap.blockAt(height, this.state.doc, editorTop + this.paddingTop, 0);
    }
    forEachLine(from, to, f, editorTop) {
        return this.heightMap.forEachLine(from, to, this.state.doc, editorTop + this.paddingTop, 0, f);
    }
}
/// Indicates the range of the document that is in the visible
/// viewport.
class Viewport {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    eq(b) { return this.from == b.from && this.to == b.to; }
}
function extendWithRanges(diff, ranges) {
    if (ranges.length == 0)
        return diff;
    let result = [];
    for (let dI = 0, rI = 0, posA = 0, posB = 0;; dI++) {
        let next = dI == diff.length ? null : diff[dI], off = posA - posB;
        let end = next ? next.fromB : 1e9;
        while (rI < ranges.length && ranges[rI] < end) {
            let from = ranges[rI], to = ranges[rI + 1];
            let fromB = Math.max(posB, from), toB = Math.min(end, to);
            if (fromB <= toB)
                new _state__WEBPACK_IMPORTED_MODULE_0__["ChangedRange"](fromB + off, toB + off, fromB, toB).addToSet(result);
            if (to > end)
                break;
            else
                rI += 2;
        }
        if (!next)
            return result;
        new _state__WEBPACK_IMPORTED_MODULE_0__["ChangedRange"](next.fromA, next.toA, next.fromB, next.toB).addToSet(result);
        posA = next.toA;
        posB = next.toB;
    }
}
function lineStructure(from, to, state) {
    let ranges = [], pos = 0, total = 0;
    _rangeset__WEBPACK_IMPORTED_MODULE_2__["RangeSet"].spans(state.facet(decorations), from, to, {
        span() { },
        point(from, to) {
            if (from > pos) {
                ranges.push({ from: pos, to: from });
                total += to - pos;
            }
            pos = to;
        },
        minPointSize: 20 // We're only interested in collapsed ranges of a significant size
    });
    if (pos < to) {
        ranges.push({ from: pos, to });
        total += to - pos;
    }
    return { total, ranges };
}
function findPosition({ total, ranges }, ratio) {
    if (ratio <= 0)
        return ranges[0].from;
    if (ratio >= 1)
        return ranges[ranges.length - 1].to;
    let dist = Math.floor(total * ratio);
    for (let i = 0;; i++) {
        let { from, to } = ranges[i], size = to - from;
        if (dist <= size)
            return from + dist;
        dist -= size;
    }
}
function findFraction(structure, pos) {
    let counted = 0;
    for (let { from, to } of structure.ranges) {
        if (pos <= to) {
            counted += pos - from;
            break;
        }
        counted += to - from;
    }
    return counted / structure.total;
}
function find(array, f) {
    for (let val of array)
        if (f(val))
            return val;
    return undefined;
}

const none$4 = [];
class DocView extends ContentView {
    constructor(view) {
        super();
        this.view = view;
        this.viewports = none$4;
        this.compositionDeco = Decoration.none;
        this.decorations = [];
        this.selectionDirty = null;
        // Track a minimum width for the editor. When measuring sizes in
        // checkLayout, this is updated to point at the width of a given
        // element and its extent in the document. When a change happens in
        // that range, these are reset. That way, once we've seen a
        // line/element of a given length, we keep the editor wide enough to
        // fit at least that element, until it is changed, at which point we
        // forget it again.
        this.minWidth = 0;
        this.minWidthFrom = 0;
        this.minWidthTo = 0;
        // Track whether the DOM selection was set in a lossy way, so that
        // we don't mess it up when reading it back it
        this.impreciseAnchor = null;
        this.impreciseHead = null;
        this.setDOM(view.contentDOM);
        this.children = [new LineView];
        this.children[0].setParent(this);
        this.updateInner([new _state__WEBPACK_IMPORTED_MODULE_0__["ChangedRange"](0, 0, 0, view.state.doc.length)], this.updateDeco(), 0);
    }
    get root() { return this.view.root; }
    get editorView() { return this.view; }
    get length() { return this.view.state.doc.length; }
    // Update the document view to a given state. scrollIntoView can be
    // used as a hint to compute a new viewport that includes that
    // position, if we know the editor is going to scroll that position
    // into view.
    update(update) {
        var _a;
        let changedRanges = update.changes.changedRanges();
        if (this.minWidth > 0 && changedRanges.length) {
            if (!changedRanges.every(({ fromA, toA }) => toA < this.minWidthFrom || fromA > this.minWidthTo)) {
                this.minWidth = 0;
            }
            else {
                this.minWidthFrom = _state__WEBPACK_IMPORTED_MODULE_0__["ChangedRange"].mapPos(this.minWidthFrom, 1, changedRanges);
                this.minWidthTo = _state__WEBPACK_IMPORTED_MODULE_0__["ChangedRange"].mapPos(this.minWidthTo, 1, changedRanges);
            }
        }
        // When the DOM nodes around the selection are moved to another
        // parent, Chrome sometimes reports a different selection through
        // getSelection than the one that it actually shows to the user.
        // This forces a selection update when lines are joined to work
        // around that. Issue #54
        let forceSelection = browser.chrome && !this.compositionDeco.size && update &&
            update.changes.changes.some(ch => ch.text.length > 1);
        if (!((_a = this.view.inputState) === null || _a === void 0 ? void 0 : _a.composing))
            this.compositionDeco = Decoration.none;
        else if (update.transactions.length)
            this.compositionDeco = computeCompositionDeco(this.view, changedRanges);
        let prevDeco = this.decorations, deco = this.updateDeco();
        let decoDiff = findChangedDeco(prevDeco, deco, changedRanges, update.state.doc.length);
        changedRanges = extendWithRanges(changedRanges, decoDiff);
        if (this.dirty == 0 /* Not */ && changedRanges.length == 0 &&
            !(update.flags & (4 /* Viewport */ | 16 /* LineGaps */)) &&
            update.state.selection.primary.from >= this.view.viewport.from &&
            update.state.selection.primary.to <= this.view.viewport.to) {
            this.updateSelection(forceSelection);
            return false;
        }
        else {
            this.updateInner(changedRanges, deco, update.prevState.doc.length, forceSelection);
            return true;
        }
    }
    // Used both by update and checkLayout do perform the actual DOM
    // update
    updateInner(changes, deco, oldLength, forceSelection = false) {
        this.updateChildren(changes, deco, oldLength);
        this.view.observer.ignore(() => {
            // Lock the height during redrawing, since Chrome sometimes
            // messes with the scroll position during DOM mutation (though
            // no relayout is triggered and I cannot imagine how it can
            // recompute the scroll position without a layout)
            this.dom.style.height = this.view.viewState.heightMap.height + "px";
            this.dom.style.minWidth = this.minWidth ? this.minWidth + "px" : "";
            this.sync();
            this.dirty = 0 /* Not */;
            this.updateSelection(forceSelection);
            this.dom.style.height = "";
        });
    }
    updateChildren(changes, deco, oldLength) {
        let cursor = this.childCursor(oldLength);
        for (let i = changes.length - 1;; i--) {
            let next = i >= 0 ? changes[i] : null;
            if (!next)
                break;
            let { fromA, toA, fromB, toB } = next;
            let { content, breakAtStart } = ContentBuilder.build(this.view.state.doc, fromB, toB, deco);
            let { i: toI, off: toOff } = cursor.findPos(toA, 1);
            let { i: fromI, off: fromOff } = cursor.findPos(fromA, -1);
            this.replaceRange(fromI, fromOff, toI, toOff, content, breakAtStart);
        }
    }
    replaceRange(fromI, fromOff, toI, toOff, content, breakAtStart) {
        let before = this.children[fromI], last = content.length ? content[content.length - 1] : null;
        let breakAtEnd = last ? last.breakAfter : breakAtStart;
        // Change within a single line
        if (fromI == toI && !breakAtStart && !breakAtEnd && content.length < 2 &&
            before.merge(fromOff, toOff, content.length ? last : null, fromOff == 0))
            return;
        let after = this.children[toI];
        // Make sure the end of the line after the update is preserved in `after`
        if (toOff < after.length || after.children.length && after.children[after.children.length - 1].length == 0) {
            // If we're splitting a line, separate part of the start line to
            // avoid that being mangled when updating the start line.
            if (fromI == toI) {
                after = after.split(toOff);
                toOff = 0;
            }
            // If the element after the replacement should be merged with
            // the last replacing element, update `content`
            if (!breakAtEnd && last && after.merge(0, toOff, last, true)) {
                content[content.length - 1] = after;
            }
            else {
                // Remove the start of the after element, if necessary, and
                // add it to `content`.
                if (toOff || after.children.length && after.children[0].length == 0)
                    after.merge(0, toOff, null, false);
                content.push(after);
            }
        }
        else if (after.breakAfter) {
            // The element at `toI` is entirely covered by this range.
            // Preserve its line break, if any.
            if (last)
                last.breakAfter = 1;
            else
                breakAtStart = 1;
        }
        // Since we've handled the next element from the current elements
        // now, make sure `toI` points after that.
        toI++;
        before.breakAfter = breakAtStart;
        if (fromOff > 0) {
            if (!breakAtStart && content.length && before.merge(fromOff, before.length, content[0], false)) {
                before.breakAfter = content.shift().breakAfter;
            }
            else if (fromOff < before.length || before.children.length && before.children[before.children.length - 1].length == 0) {
                before.merge(fromOff, before.length, null, false);
            }
            fromI++;
        }
        // Try to merge widgets on the boundaries of the replacement
        while (fromI < toI && content.length) {
            if (this.children[toI - 1].match(content[content.length - 1]))
                toI--, content.pop();
            else if (this.children[fromI].match(content[0]))
                fromI++, content.shift();
            else
                break;
        }
        if (fromI < toI || content.length)
            this.replaceChildren(fromI, toI, content);
    }
    // Sync the DOM selection to this.state.selection
    updateSelection(force = false) {
        this.clearSelectionDirty();
        if (this.root.activeElement != this.dom)
            return;
        let primary = this.view.state.selection.primary;
        // FIXME need to handle the case where the selection falls inside a block range
        let anchor = this.domAtPos(primary.anchor);
        let head = this.domAtPos(primary.head);
        let domSel = getSelection(this.root);
        // If the selection is already here, or in an equivalent position, don't touch it
        if (force ||
            !isEquivalentPosition(anchor.node, anchor.offset, domSel.anchorNode, domSel.anchorOffset) ||
            !isEquivalentPosition(head.node, head.offset, domSel.focusNode, domSel.focusOffset)) {
            this.view.observer.ignore(() => {
                // Selection.extend can be used to create an 'inverted' selection
                // (one where the focus is before the anchor), but not all
                // browsers support it yet.
                if (domSel.extend) {
                    domSel.collapse(anchor.node, anchor.offset);
                    if (!primary.empty)
                        domSel.extend(head.node, head.offset);
                }
                else {
                    let range = document.createRange();
                    if (primary.anchor > primary.head)
                        [anchor, head] = [head, anchor];
                    range.setEnd(head.node, head.offset);
                    range.setStart(anchor.node, anchor.offset);
                    domSel.removeAllRanges();
                    domSel.addRange(range);
                }
            });
        }
        this.impreciseAnchor = anchor.precise ? null : new DOMPos(domSel.anchorNode, domSel.anchorOffset);
        this.impreciseHead = head.precise ? null : new DOMPos(domSel.focusNode, domSel.focusOffset);
    }
    nearest(dom) {
        for (let cur = dom; cur;) {
            let domView = ContentView.get(cur);
            if (domView && domView.rootView == this)
                return domView;
            cur = cur.parentNode;
        }
        return null;
    }
    posFromDOM(node, offset) {
        let view = this.nearest(node);
        if (!view)
            throw new RangeError("Trying to find position for a DOM position outside of the document");
        return view.localPosFromDOM(node, offset) + view.posAtStart;
    }
    domAtPos(pos) {
        let { i, off } = this.childCursor().findPos(pos, -1);
        for (; i < this.children.length - 1;) {
            let child = this.children[i];
            if (off < child.length || child instanceof LineView)
                break;
            i++;
            off = 0;
        }
        return this.children[i].domAtPos(off);
    }
    coordsAt(pos) {
        for (let off = this.length, i = this.children.length - 1;; i--) {
            let child = this.children[i], start = off - child.breakAfter - child.length;
            if (pos >= start && child.type != BlockType.WidgetAfter)
                return child.coordsAt(pos - start);
            off = start;
        }
    }
    measureVisibleLineHeights() {
        let result = [], { from, to } = this.view.viewState.viewport;
        let minWidth = Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1;
        for (let pos = 0, i = 0; i < this.children.length; i++) {
            let child = this.children[i], end = pos + child.length;
            if (end > to)
                break;
            if (pos >= from) {
                result.push(child.dom.getBoundingClientRect().height);
                let width = child.dom.scrollWidth;
                if (width > minWidth) {
                    this.minWidth = minWidth = width;
                    this.minWidthFrom = pos;
                    this.minWidthTo = end;
                }
            }
            pos = end + child.breakAfter;
        }
        return result;
    }
    measureTextSize() {
        for (let child of this.children) {
            if (child instanceof LineView) {
                let measure = child.measureTextSize();
                if (measure)
                    return measure;
            }
        }
        // If no workable line exists, force a layout of a measurable element
        let dummy = document.createElement("div"), lineHeight, charWidth;
        dummy.className = "cm-line";
        dummy.textContent = "abc def ghi jkl mno pqr stu";
        this.view.observer.ignore(() => {
            this.dom.appendChild(dummy);
            let rect = clientRectsFor(dummy.firstChild)[0];
            lineHeight = dummy.getBoundingClientRect().height;
            charWidth = rect ? rect.width / 27 : 7;
            dummy.remove();
        });
        return { lineHeight, charWidth };
    }
    clearSelectionDirty() {
        if (this.selectionDirty != null) {
            cancelAnimationFrame(this.selectionDirty);
            this.selectionDirty = null;
        }
    }
    setSelectionDirty() {
        this.view.observer.clearSelection();
        if (this.selectionDirty == null)
            this.selectionDirty = requestAnimationFrame(() => this.updateSelection());
    }
    childCursor(pos = this.length) {
        // Move back to start of last element when possible, so that
        // `ChildCursor.findPos` doesn't have to deal with the edge case
        // of being after the last element.
        let i = this.children.length;
        if (i)
            pos -= this.children[--i].length;
        return new ChildCursor(this.children, pos, i);
    }
    computeBlockGapDeco() {
        let visible = this.view.viewState.viewport, viewports = [visible];
        let { head, anchor } = this.view.state.selection.primary;
        if (head < visible.from || head > visible.to) {
            let { from, to } = this.view.viewState.lineAt(head, 0);
            viewports.push(new Viewport(from, to));
        }
        if (!viewports.some(({ from, to }) => anchor >= from && anchor <= to)) {
            let { from, to } = this.view.viewState.lineAt(anchor, 0);
            viewports.push(new Viewport(from, to));
        }
        this.viewports = viewports.sort((a, b) => a.from - b.from);
        let deco = [];
        for (let pos = 0, i = 0;; i++) {
            let next = i == viewports.length ? null : viewports[i];
            let end = next ? next.from - 1 : this.length;
            if (end > pos) {
                let height = this.view.viewState.lineAt(end, 0).bottom - this.view.viewState.lineAt(pos, 0).top;
                deco.push(Decoration.replace({ widget: new BlockGapWidget(height), block: true, inclusive: true }).range(pos, end));
            }
            if (!next)
                break;
            pos = next.to + 1;
        }
        return Decoration.set(deco);
    }
    updateDeco() {
        return this.decorations = [
            ...this.view.state.facet(decorations),
            this.computeBlockGapDeco(),
            this.view.viewState.lineGapDeco,
            this.compositionDeco,
            ...this.view.pluginField(pluginDecorations)
        ];
    }
    scrollPosIntoView(pos) {
        let rect = this.coordsAt(pos);
        if (!rect)
            return;
        let mLeft = 0, mRight = 0, mTop = 0, mBottom = 0;
        for (let margins of this.view.pluginField(PluginField.scrollMargins))
            if (margins) {
                let { left, right, top, bottom } = margins;
                if (left != null)
                    mLeft = Math.max(mLeft, left);
                if (right != null)
                    mRight = Math.max(mRight, right);
                if (top != null)
                    mTop = Math.max(mTop, top);
                if (bottom != null)
                    mBottom = Math.max(mBottom, bottom);
            }
        scrollRectIntoView(this.dom, {
            left: rect.left - mLeft, top: rect.top - mTop,
            right: rect.right + mRight, bottom: rect.bottom + mBottom
        });
    }
}
// Browsers appear to reserve a fixed amount of bits for height
// styles, and ignore or clip heights above that. For Chrome and
// Firefox, this is in the 20 million range, so we try to stay below
// that.
const MaxNodeHeight = 1e7;
class BlockGapWidget extends WidgetType {
    toDOM() {
        let elt = document.createElement("div");
        this.updateDOM(elt);
        return elt;
    }
    updateDOM(elt) {
        if (this.value < MaxNodeHeight) {
            while (elt.lastChild)
                elt.lastChild.remove();
            elt.style.height = this.value + "px";
        }
        else {
            elt.style.height = "";
            for (let remaining = this.value; remaining > 0; remaining -= MaxNodeHeight) {
                let fill = elt.appendChild(document.createElement("div"));
                fill.style.height = Math.min(remaining, MaxNodeHeight) + "px";
            }
        }
        return true;
    }
    get estimatedHeight() { return this.value; }
}
function computeCompositionDeco(view, changes) {
    let sel = getSelection(view.root);
    let textNode = sel.focusNode && nearbyTextNode(sel.focusNode, sel.focusOffset);
    if (!textNode)
        return Decoration.none;
    let cView = view.docView.nearest(textNode);
    let from, to, topNode = textNode;
    if (cView instanceof InlineView) {
        from = cView.posAtStart;
        to = from + cView.length;
        topNode = cView.dom;
    }
    else if (cView instanceof LineView) {
        while (topNode.parentNode != cView.dom)
            topNode = topNode.parentNode;
        let prev = topNode.previousSibling;
        while (prev && !ContentView.get(prev))
            prev = prev.previousSibling;
        from = to = prev ? ContentView.get(prev).posAtEnd : cView.posAtStart;
    }
    else {
        return Decoration.none;
    }
    let newFrom = _state__WEBPACK_IMPORTED_MODULE_0__["ChangedRange"].mapPos(from, 1, changes), newTo = Math.max(newFrom, _state__WEBPACK_IMPORTED_MODULE_0__["ChangedRange"].mapPos(to, -1, changes));
    let text = textNode.nodeValue, doc = view.state.doc;
    if (newTo - newFrom < text.length) {
        if (doc.slice(newFrom, Math.min(doc.length, newFrom + text.length)) == text)
            newTo = newFrom + text.length;
        else if (doc.slice(Math.max(0, newTo - text.length), newTo) == text)
            newFrom = newTo - text.length;
        else
            return Decoration.none;
    }
    else if (doc.slice(newFrom, newTo) != text) {
        return Decoration.none;
    }
    return Decoration.set(Decoration.replace({ widget: new CompositionWidget({ top: topNode, text: textNode }) }).range(newFrom, newTo));
}
class CompositionWidget extends WidgetType {
    eq(value) { return this.value.top == value.top && this.value.text == value.text; }
    toDOM() { return this.value.top; }
    ignoreEvent() { return false; }
    get customView() { return CompositionView; }
}
function nearbyTextNode(node, offset) {
    for (;;) {
        if (node.nodeType == 3)
            return node;
        if (node.nodeType == 1 && offset > 0) {
            node = node.childNodes[offset - 1];
            offset = maxOffset(node);
        }
        else if (node.nodeType == 1 && offset < node.childNodes.length) {
            node = node.childNodes[offset];
            offset = 0;
        }
        else {
            return null;
        }
    }
}
class DecorationComparator$1 {
    constructor() {
        this.changes = [];
    }
    compareRange(from, to) { addRange(from, to, this.changes); }
    comparePoint(from, to) { addRange(from, to, this.changes); }
}
function findChangedDeco(a, b, diff, length) {
    let comp = new DecorationComparator$1;
    _rangeset__WEBPACK_IMPORTED_MODULE_2__["RangeSet"].compare(a, b, diff, length, comp);
    return comp.changes;
}

// FIXME rename "word" to something more descriptive of what it actually does?
function movePos(view, start, direction, granularity = "character", action) {
    let sel = getSelection(view.root);
    let context = LineContext.get(view, start);
    let dir = direction == "forward" || direction == "right" ? 1 : -1;
    // Can only query native behavior when Selection.modify is
    // supported, the cursor is well inside the rendered viewport, and
    // we're not doing by-line motion on Gecko (which will mess up goal
    // column motion)
    if (sel.modify && context && !context.nearViewportEnd(view) && view.hasFocus &&
        granularity != "word" &&
        !(granularity == "line" && (browser.gecko || view.state.selection.ranges.length > 1))) {
        return view.observer.ignore(() => {
            let prepared = context.prepareForQuery(view, start);
            let startDOM = view.docView.domAtPos(start);
            let equiv = (!browser.chrome || prepared.lines.length == 0) &&
                isEquivalentPosition(startDOM.node, startDOM.offset, sel.focusNode, sel.focusOffset) && false;
            // Firefox skips an extra character ahead when extending across
            // an uneditable element (but not when moving)
            if (prepared.atWidget && browser.gecko && action == "extend")
                action = "move";
            if (action == "move" && !(equiv && sel.isCollapsed))
                sel.collapse(startDOM.node, startDOM.offset);
            else if (action == "extend" && !equiv)
                sel.extend(startDOM.node, startDOM.offset);
            sel.modify(action, direction, granularity);
            view.docView.setSelectionDirty();
            let result = view.docView.posFromDOM(sel.focusNode, sel.focusOffset);
            context.undoQueryPreparation(view, prepared);
            return result;
        });
    }
    else if (granularity == "character") {
        return moveCharacterSimple(start, dir, context, view.state.doc);
    }
    else if (granularity == "lineboundary") {
        if (context)
            return context.start + (dir < 0 ? 0 : context.line.length);
        let line = view.state.doc.lineAt(start);
        return dir < 0 ? line.start : line.end;
    }
    else if (granularity == "line") {
        if (context && !context.nearViewportEnd(view, dir)) {
            let startCoords = view.coordsAtPos(start);
            let goal = getGoalColumn(view, start, startCoords.left);
            for (let startY = dir < 0 ? startCoords.top : startCoords.bottom, dist = 5; dist < 50; dist += 10) {
                let pos = posAtCoords(view, { x: goal.column, y: startY + dist * dir }, dir);
                if (pos < 0)
                    break;
                if (pos != start) {
                    goal.pos = pos;
                    return pos;
                }
            }
        }
        // Can't do a precise one based on DOM positions, fall back to per-column
        return moveLineByColumn(view.state.doc, view.state.tabSize, start, dir);
    }
    else if (granularity == "word") {
        return moveWord(view, start, direction);
    }
    else {
        throw new RangeError("Invalid move granularity: " + granularity);
    }
}
function moveLineByColumn(doc, tabSize, pos, dir) {
    let line = doc.lineAt(pos);
    // FIXME also needs goal column?
    let col = 0;
    for (const iter = doc.iterRange(line.start, pos); !iter.next().done;)
        col = Object(_text__WEBPACK_IMPORTED_MODULE_3__["countColumn"])(iter.value, col, tabSize);
    if (dir < 0 && line.start == 0)
        return 0;
    else if (dir > 0 && line.end == doc.length)
        return line.end;
    let otherLine = doc.line(line.number + dir);
    let result = otherLine.start;
    let seen = 0;
    for (const iter = doc.iterRange(otherLine.start, otherLine.end); seen >= col && !iter.next().done;) {
        const { offset, leftOver } = Object(_text__WEBPACK_IMPORTED_MODULE_3__["findColumn"])(iter.value, seen, col, tabSize);
        seen = col - leftOver;
        result += offset;
    }
    return result;
}
function moveCharacterSimple(start, dir, context, doc) {
    if (context == null) {
        for (let pos = start;; pos += dir) {
            if (dir < 0 && pos == 0 || dir > 0 && pos == doc.length)
                return pos;
            if (!Object(_text__WEBPACK_IMPORTED_MODULE_3__["isExtendingChar"])((dir < 0 ? doc.slice(pos - 1, pos) : doc.slice(pos, pos + 1)).charCodeAt(0))) {
                if (dir < 0)
                    return pos - 1;
                else if (pos != start)
                    return pos;
            }
        }
    }
    for (let { i, off } = context.line.childPos(start - context.start), { children } = context.line, pos = start;;) {
        if (off == (dir < 0 || i == children.length ? 0 : children[i].length)) {
            i += dir;
            if (i < 0 || i >= children.length) // End/start of line
                return Math.max(0, Math.min(doc.length, pos + (start == pos ? dir : 0)));
            off = dir < 0 ? children[i].length : 0;
        }
        let inline = children[i];
        if (inline instanceof TextView) {
            if (!Object(_text__WEBPACK_IMPORTED_MODULE_3__["isExtendingChar"])(inline.text.charCodeAt(off - (dir < 0 ? 1 : 0)))) {
                if (dir < 0)
                    return pos - 1;
                else if (pos != start)
                    return pos;
            }
            off += dir;
            pos += dir;
        }
        else if (inline.length > 0) {
            return pos - off + (dir < 0 ? 0 : inline.length);
        }
    }
}
function moveWord(view, start, direction) {
    let { doc } = view.state;
    for (let pos = start, i = 0;; i++) {
        let next = movePos(view, pos, direction, "character", "move");
        if (next == pos)
            return pos; // End of document
        if (doc.sliceLines(Math.min(next, pos), Math.max(next, pos)).length > 1)
            return next; // Crossed a line boundary
        let group = _state__WEBPACK_IMPORTED_MODULE_0__["SelectionRange"].groupAt(view.state, next, next > pos ? -1 : 1);
        let away = pos < group.from && pos > group.to;
        // If the group is away from its start position, we jumped over a
        // bidi boundary, and should take the side closest (in index
        // coordinates) to the start position
        let start = away ? pos < group.head : group.from == pos ? false : group.to == pos ? true : next < pos;
        pos = start ? group.from : group.to;
        if (i > 0 || /\S/.test(doc.slice(group.from, group.to)))
            return pos;
        next = Math.max(0, Math.min(doc.length, pos + (start ? -1 : 1)));
    }
}
function getGoalColumn(view, pos, column) {
    for (let goal of view.inputState.goalColumns)
        if (goal.pos == pos)
            return goal;
    let goal = { pos: 0, column };
    view.inputState.goalColumns.push(goal);
    return goal;
}
class LineContext {
    constructor(line, start, index) {
        this.line = line;
        this.start = start;
        this.index = index;
    }
    static get(view, pos) {
        for (let i = 0, off = 0;; i++) {
            let line = view.docView.children[i], end = off + line.length;
            if (end >= pos) {
                if (line instanceof LineView)
                    return new LineContext(line, off, i);
                if (line.length)
                    return null;
            }
            off = end + 1;
        }
    }
    nearViewportEnd(view, side = 0) {
        for (let { from, to } of view.docView.viewports)
            if (from > 0 && from == this.start && side <= 0 ||
                to < view.state.doc.length && to == this.start + this.line.length && side >= 0)
                return true;
        return false;
    }
    // FIXME limit the amount of work in character motion in non-bidi
    // context? or not worth it?
    prepareForQuery(view, pos) {
        let linesToSync = [], atWidget = false;
        function maybeHide(view) {
            if (!(view instanceof TextView))
                atWidget = true;
            if (view.length > 0)
                return false;
            view.dom.remove();
            if (linesToSync.indexOf(view.parent) < 0)
                linesToSync.push(view.parent);
            return true;
        }
        let { i, off } = this.line.childPos(pos - this.start);
        if (off == 0) {
            for (let j = i; j < this.line.children.length; j++)
                if (!maybeHide(this.line.children[j]))
                    break;
            for (let j = i; j > 0; j--)
                if (!maybeHide(this.line.children[j - 1]))
                    break;
        }
        function addForLine(line, omit = -1) {
            if (line.children.length == 0)
                return;
            for (let i = 0, off = 0; i <= line.children.length; i++) {
                let next = i == line.children.length ? null : line.children[i];
                if ((!next || !(next instanceof TextView)) && off != omit &&
                    (i == 0 || !(line.children[i - 1] instanceof TextView))) {
                    line.dom.insertBefore(document.createTextNode("\u200b"), next ? next.dom : null);
                    if (linesToSync.indexOf(line) < 0)
                        linesToSync.push(line);
                }
                if (next)
                    off += next.length;
            }
        }
        if (this.index > 0)
            addForLine(this.line.parent.children[this.index - 1]);
        addForLine(this.line, pos - this.start);
        if (this.index < this.line.parent.children.length - 1)
            addForLine(this.line.parent.children[this.index + 1]);
        return { lines: linesToSync, atWidget };
    }
    undoQueryPreparation(view, toSync) {
        for (let line of toSync.lines) {
            line.dirty = 2 /* Node */;
            line.sync();
            line.dirty = 0 /* Not */;
        }
    }
}
// Search the DOM for the {node, offset} position closest to the given
// coordinates. Very inefficient and crude, but can usually be avoided
// by calling caret(Position|Range)FromPoint instead.
// FIXME holding arrow-up/down at the end of the viewport is a rather
// common use case that will repeatedly trigger this code. Maybe
// introduce some element of binary search after all?
function getdx(x, rect) {
    return rect.left > x ? rect.left - x : Math.max(0, x - rect.right);
}
function getdy(y, rect) {
    return rect.top > y ? rect.top - y : Math.max(0, y - rect.bottom);
}
function yOverlap(a, b) {
    return a.top < b.bottom - 1 && a.bottom > b.top + 1;
}
function upTop(rect, top) {
    return top < rect.top ? { top, left: rect.left, right: rect.right, bottom: rect.bottom } : rect;
}
function upBot(rect, bottom) {
    return bottom > rect.bottom ? { top: rect.top, left: rect.left, right: rect.right, bottom } : rect;
}
function domPosAtCoords(parent, x, y) {
    let closest, closestRect, closestX, closestY;
    let above, below, aboveRect, belowRect;
    for (let child = parent.firstChild; child; child = child.nextSibling) {
        let rects = clientRectsFor(child);
        for (let i = 0; i < rects.length; i++) {
            let rect = rects[i];
            if (closestRect && yOverlap(closestRect, rect))
                rect = upTop(upBot(rect, closestRect.bottom), closestRect.top);
            let dx = getdx(x, rect), dy = getdy(y, rect);
            if (dx == 0 && dy == 0)
                return child.nodeType == 3 ? domPosInText(child, x, y) : domPosAtCoords(child, x, y);
            if (!closest || closestY > dy || closestY == dy && closestX > dx) {
                closest = child;
                closestRect = rect;
                closestX = dx;
                closestY = dy;
            }
            if (dx == 0) {
                if (y > rect.bottom && (!aboveRect || aboveRect.bottom < rect.bottom)) {
                    above = child;
                    aboveRect = rect;
                }
                else if (y < rect.top && (!belowRect || belowRect.top > rect.top)) {
                    below = child;
                    belowRect = rect;
                }
            }
            else if (aboveRect && yOverlap(aboveRect, rect)) {
                aboveRect = upBot(aboveRect, rect.bottom);
            }
            else if (belowRect && yOverlap(belowRect, rect)) {
                belowRect = upTop(belowRect, rect.top);
            }
        }
    }
    if (aboveRect && aboveRect.bottom >= y) {
        closest = above;
        closestRect = aboveRect;
    }
    else if (belowRect && belowRect.top <= y) {
        closest = below;
        closestRect = belowRect;
    }
    if (!closest)
        return { node: parent, offset: 0 };
    let clipX = Math.max(closestRect.left, Math.min(closestRect.right, x));
    if (closest.nodeType == 3)
        return domPosInText(closest, clipX, y);
    if (!closestX && closest.contentEditable == "true")
        domPosAtCoords(closest, clipX, y);
    let offset = Array.prototype.indexOf.call(parent.childNodes, closest) +
        (x >= (closestRect.left + closestRect.right) / 2 ? 1 : 0);
    return { node: parent, offset };
}
function domPosInText(node, x, y) {
    let len = node.nodeValue.length, range = document.createRange();
    for (let i = 0; i < len; i++) {
        range.setEnd(node, i + 1);
        range.setStart(node, i);
        let rects = range.getClientRects();
        for (let j = 0; j < rects.length; j++) {
            let rect = rects[j];
            if (rect.top == rect.bottom)
                continue;
            if (rect.left - 1 <= x && rect.right + 1 >= x &&
                rect.top - 1 <= y && rect.bottom + 1 >= y) {
                let right = x >= (rect.left + rect.right) / 2, after = right;
                if (browser.chrome || browser.gecko) {
                    // Check for RTL on browsers that support getting client
                    // rects for empty ranges.
                    range.setEnd(node, i);
                    let rectBefore = range.getBoundingClientRect();
                    if (rectBefore.left == rect.right)
                        after = !right;
                }
                return { node, offset: i + (after ? 1 : 0) };
            }
        }
    }
    return { node, offset: 0 };
}
function posAtCoords(view, { x, y }, bias = -1) {
    let content = view.contentDOM.getBoundingClientRect(), block;
    let halfLine = view.defaultLineHeight / 2;
    for (let bounced = false;;) {
        block = view.blockAtHeight(y, content.top);
        if (block.top > y || block.bottom < y) {
            bias = block.top > y ? -1 : 1;
            y = Math.min(block.bottom - halfLine, Math.max(block.top + halfLine, y));
            if (bounced)
                return -1;
            else
                bounced = true;
        }
        if (block.type == BlockType.Text)
            break;
        y = bias > 0 ? block.bottom + halfLine : block.top - halfLine;
    }
    let lineStart = block.from;
    // If this is outside of the rendered viewport, we can't determine a position
    if (lineStart < view.viewport.from)
        return view.viewport.from == 0 ? 0 : -1;
    if (lineStart > view.viewport.to)
        return view.viewport.to == view.state.doc.length ? view.state.doc.length : -1;
    // Clip x to the viewport sides
    x = Math.max(content.left + 1, Math.min(content.right - 1, x));
    let root = view.root, element = root.elementFromPoint(x, y);
    // There's visible editor content under the point, so we can try
    // using caret(Position|Range)FromPoint as a shortcut
    let node, offset = -1;
    if (element && view.contentDOM.contains(element) && !(view.docView.nearest(element) instanceof WidgetView)) {
        if (root.caretPositionFromPoint) {
            let pos = root.caretPositionFromPoint(x, y);
            if (pos)
                ({ offsetNode: node, offset } = pos);
        }
        else if (root.caretRangeFromPoint) {
            let range = root.caretRangeFromPoint(x, y);
            if (range)
                ({ startContainer: node, startOffset: offset } = range);
        }
    }
    // No luck, do our own (potentially expensive) search
    if (!node) {
        let { line } = LineContext.get(view, lineStart);
        ({ node, offset } = domPosAtCoords(line.dom, x, y));
    }
    return view.docView.posFromDOM(node, offset);
}

// This will also be where dragging info and such goes
class InputState {
    constructor(view) {
        this.lastKeyCode = 0;
        this.lastKeyTime = 0;
        this.lastSelectionOrigin = null;
        this.lastSelectionTime = 0;
        this.registeredEvents = [];
        this.customHandlers = [];
        this.composing = false;
        this.goalColumns = [];
        this.mouseSelection = null;
        for (let type in handlers) {
            let handler = handlers[type];
            view.contentDOM.addEventListener(type, (event) => {
                if (!eventBelongsToEditor(view, event))
                    return;
                if (this.runCustomHandlers(type, view, event))
                    event.preventDefault();
                else
                    handler(view, event);
            });
            this.registeredEvents.push(type);
        }
        // Must always run, even if a custom handler handled the event
        view.contentDOM.addEventListener("keydown", (event) => {
            view.inputState.lastKeyCode = event.keyCode;
            view.inputState.lastKeyTime = Date.now();
        });
        if (view.root.activeElement == view.contentDOM)
            view.dom.classList.add("cm-focused");
        this.notifiedFocused = view.hasFocus;
        this.ensureHandlers(view);
    }
    setSelectionOrigin(origin) {
        this.lastSelectionOrigin = origin;
        this.lastSelectionTime = Date.now();
    }
    ensureHandlers(view) {
        let handlers = view.state.facet(domEventHandlers);
        if (handlers == this.customHandlers)
            return;
        this.customHandlers = handlers;
        for (let set of handlers) {
            for (let type in set)
                if (this.registeredEvents.indexOf(type) < 0) {
                    this.registeredEvents.push(type);
                    (type != "scroll" ? view.contentDOM : view.scrollDOM).addEventListener(type, (event) => {
                        if (!eventBelongsToEditor(view, event))
                            return;
                        if (this.runCustomHandlers(type, view, event))
                            event.preventDefault();
                    });
                }
        }
    }
    runCustomHandlers(type, view, event) {
        for (let handlers of this.customHandlers) {
            let handler = handlers[type];
            if (handler) {
                try {
                    if (handler(view, event) || event.defaultPrevented)
                        return true;
                }
                catch (e) {
                    console.error(e);
                }
            }
        }
        return false;
    }
    startMouseSelection(view, event, update) {
        if (this.mouseSelection)
            this.mouseSelection.destroy();
        this.mouseSelection = new MouseSelection(this, view, event, update);
    }
    update(update) {
        if (this.mouseSelection)
            this.mouseSelection.map(update.changes);
        this.lastKeyCode = this.lastSelectionTime = 0;
    }
    destroy() {
        if (this.mouseSelection)
            this.mouseSelection.destroy();
    }
}
class MouseSelection {
    constructor(inputState, view, event, update) {
        this.inputState = inputState;
        this.view = view;
        this.update = update;
        let doc = view.contentDOM.ownerDocument;
        doc.addEventListener("mousemove", this.move = this.move.bind(this));
        doc.addEventListener("mouseup", this.up = this.up.bind(this));
        this.extend = event.shiftKey;
        this.multiple = view.state.facet(_state__WEBPACK_IMPORTED_MODULE_0__["EditorState"].allowMultipleSelections) && addsSelectionRange(view, event);
        this.dragMove = dragMovesSelection$1(view, event);
        this.startSelection = view.state.selection;
        let { pos, bias } = this.queryPos(event);
        this.startPos = this.curPos = pos;
        this.startBias = this.curBias = bias;
        this.dragging = isInPrimarySelection(view, this.startPos, event) ? null : false;
        // When clicking outside of the selection, immediately apply the
        // effect of starting the selection
        if (this.dragging === false) {
            event.preventDefault();
            this.select();
        }
    }
    queryPos(event) {
        let pos = this.view.posAtCoords({ x: event.clientX, y: event.clientY });
        let coords = pos < 0 ? null : this.view.coordsAtPos(pos);
        let bias = !coords ? 1 :
            coords.top > event.clientY ? -1 :
                coords.bottom < event.clientY ? 1 :
                    coords.left > event.clientX ? -1 : 1;
        return { pos, bias };
    }
    move(event) {
        if (event.buttons == 0)
            return this.destroy();
        if (this.dragging !== false)
            return;
        let { pos, bias } = this.queryPos(event);
        if (pos == this.curPos && bias == this.curBias)
            return;
        this.curPos = pos;
        this.curBias = bias;
        this.select();
    }
    up(event) {
        if (this.dragging == null)
            this.select();
        this.destroy();
    }
    destroy() {
        let doc = this.view.contentDOM.ownerDocument;
        doc.removeEventListener("mousemove", this.move);
        doc.removeEventListener("mouseup", this.up);
        this.inputState.mouseSelection = null;
    }
    select() {
        let selection = this.update(this.view, this.startSelection, this.startPos, this.startBias, this.curPos, this.curBias, this.extend, this.multiple);
        if (!selection.eq(this.view.state.selection))
            this.view.dispatch(this.view.state.t().setSelection(selection)
                .annotate(_state__WEBPACK_IMPORTED_MODULE_0__["Transaction"].userEvent, "pointer")
                .scrollIntoView());
    }
    map(changes) {
        if (changes.length) {
            this.startSelection = this.startSelection.map(changes);
            this.startPos = changes.mapPos(this.startPos);
            this.curPos = changes.mapPos(this.curPos);
        }
        if (this.dragging)
            this.dragging = this.dragging.map(changes);
    }
}
function addsSelectionRange(view, event) {
    let facet = view.state.facet(clickAddsSelectionRange);
    return facet.length ? facet[0](event) : browser.mac ? event.metaKey : event.ctrlKey;
}
function dragMovesSelection$1(view, event) {
    let facet = view.state.facet(dragMovesSelection);
    return facet.length ? facet[0](event) : browser.mac ? !event.altKey : !event.ctrlKey;
}
function isInPrimarySelection(view, pos, event) {
    let { primary } = view.state.selection;
    if (primary.empty)
        return false;
    if (pos < primary.from || pos > primary.to)
        return false;
    if (pos > primary.from && pos < primary.to)
        return true;
    // On boundary clicks, check whether the coordinates are inside the
    // selection's client rectangles
    let sel = getSelection(view.root);
    if (sel.rangeCount == 0)
        return true;
    let rects = sel.getRangeAt(0).getClientRects();
    for (let i = 0; i < rects.length; i++) {
        let rect = rects[i];
        if (rect.left <= event.clientX && rect.right >= event.clientX &&
            rect.top <= event.clientY && rect.bottom >= event.clientY)
            return true;
    }
    return false;
}
function eventBelongsToEditor(view, event) {
    if (!event.bubbles)
        return true;
    if (event.defaultPrevented)
        return false;
    for (let node = event.target, cView; node != view.contentDOM; node = node.parentNode)
        if (!node || node.nodeType == 11 || ((cView = ContentView.get(node)) && cView.ignoreEvent(event)))
            return false;
    return true;
}
const handlers = Object.create(null);
// This is very crude, but unfortunately both these browsers _pretend_
// that they have a clipboard API—all the objects and methods are
// there, they just don't work, and they are hard to test.
const brokenClipboardAPI = (browser.ie && browser.ie_version < 15) ||
    (browser.ios && browser.webkit_version < 604);
function capturePaste(view) {
    let doc = view.dom.ownerDocument;
    let target = doc.body.appendChild(doc.createElement("textarea"));
    target.style.cssText = "position: fixed; left: -10000px; top: 10px";
    target.focus();
    setTimeout(() => {
        view.focus();
        doc.body.removeChild(target);
        doPaste(view, target.value);
    }, 50);
}
function doPaste(view, text) {
    view.dispatch(view.state.t().replaceSelection(text)
        .annotate(_state__WEBPACK_IMPORTED_MODULE_0__["Transaction"].userEvent, "paste").scrollIntoView());
}
function mustCapture(event) {
    let mods = (event.ctrlKey ? 1 /* Ctrl */ : 0) | (event.metaKey ? 8 /* Meta */ : 0) |
        (event.altKey ? 2 /* Alt */ : 0) | (event.shiftKey ? 4 /* Shift */ : 0);
    let code = event.keyCode, macCtrl = browser.mac && mods == 1 /* Ctrl */;
    return code == 8 || (macCtrl && code == 72) || // Backspace, Ctrl-h on Mac
        code == 46 || (macCtrl && code == 68) || // Delete, Ctrl-d on Mac
        code == 27 || // Esc
        (mods == (browser.mac ? 8 /* Meta */ : 1 /* Ctrl */) && // Ctrl/Cmd-[biyz]
            (code == 66 || code == 73 || code == 89 || code == 90));
}
handlers.keydown = (view, event) => {
    if (mustCapture(event))
        event.preventDefault();
    view.inputState.setSelectionOrigin("keyboard");
};
handlers.touchdown = handlers.touchmove = (view, event) => {
    view.inputState.setSelectionOrigin("pointer");
};
handlers.mousedown = (view, event) => {
    if (event.button == 0)
        view.startMouseSelection(event, updateMouseSelection(event.detail));
};
function rangeForClick(view, pos, bias, type) {
    if (type == 1) { // Single click
        return new _state__WEBPACK_IMPORTED_MODULE_0__["SelectionRange"](pos);
    }
    else if (type == 2) { // Double click
        return _state__WEBPACK_IMPORTED_MODULE_0__["SelectionRange"].groupAt(view.state, pos, bias);
    }
    else { // Triple click
        let context = LineContext.get(view, pos);
        if (context)
            return new _state__WEBPACK_IMPORTED_MODULE_0__["SelectionRange"](context.start + context.line.length, context.start);
        let { start, end } = view.state.doc.lineAt(pos);
        return new _state__WEBPACK_IMPORTED_MODULE_0__["SelectionRange"](start, end);
    }
}
function updateMouseSelection(type) {
    return (view, startSelection, startPos, startBias, curPos, curBias, extend, multiple) => {
        let range = rangeForClick(view, curPos, curBias, type);
        if (startPos != curPos && !extend) {
            let startRange = rangeForClick(view, startPos, startBias, type);
            let from = Math.min(startRange.from, range.from), to = Math.max(startRange.to, range.to);
            range = from < range.from ? new _state__WEBPACK_IMPORTED_MODULE_0__["SelectionRange"](from, to) : new _state__WEBPACK_IMPORTED_MODULE_0__["SelectionRange"](to, from);
        }
        if (extend)
            return startSelection.replaceRange(startSelection.primary.extend(range.from, range.to));
        else if (multiple)
            return startSelection.addRange(range);
        else
            return _state__WEBPACK_IMPORTED_MODULE_0__["EditorSelection"].create([range]);
    };
}
handlers.dragstart = (view, event) => {
    let { doc, selection: { primary } } = view.state;
    let { mouseSelection } = view.inputState;
    if (mouseSelection)
        mouseSelection.dragging = primary;
    if (event.dataTransfer) {
        event.dataTransfer.setData("Text", doc.slice(primary.from, primary.to));
        event.dataTransfer.effectAllowed = "copyMove";
    }
};
handlers.drop = (view, event) => {
    if (!event.dataTransfer)
        return;
    let dropPos = view.posAtCoords({ x: event.clientX, y: event.clientY });
    let text = event.dataTransfer.getData("Text");
    if (dropPos < 0 || !text)
        return;
    event.preventDefault();
    let tr = view.state.t();
    let { mouseSelection } = view.inputState;
    if (mouseSelection && mouseSelection.dragging && mouseSelection.dragMove) {
        tr.replace(mouseSelection.dragging.from, mouseSelection.dragging.to, "");
        dropPos = tr.changes.mapPos(dropPos);
    }
    let change = new _state__WEBPACK_IMPORTED_MODULE_0__["Change"](dropPos, dropPos, view.state.splitLines(text));
    tr.change(change)
        .setSelection(_state__WEBPACK_IMPORTED_MODULE_0__["EditorSelection"].single(dropPos, dropPos + change.length))
        .annotate(_state__WEBPACK_IMPORTED_MODULE_0__["Transaction"].userEvent, "drop");
    view.focus();
    view.dispatch(tr);
};
handlers.paste = (view, event) => {
    view.observer.flush();
    let data = brokenClipboardAPI ? null : event.clipboardData;
    let text = data && data.getData("text/plain");
    if (text) {
        doPaste(view, text);
        event.preventDefault();
    }
    else {
        capturePaste(view);
    }
};
function captureCopy(view, text) {
    // The extra wrapper is somehow necessary on IE/Edge to prevent the
    // content from being mangled when it is put onto the clipboard
    let doc = view.dom.ownerDocument;
    let target = doc.body.appendChild(doc.createElement("textarea"));
    target.style.cssText = "position: fixed; left: -10000px; top: 10px";
    target.value = text;
    target.focus();
    target.selectionEnd = text.length;
    target.selectionStart = 0;
    setTimeout(() => {
        doc.body.removeChild(target);
        view.focus();
    }, 50);
}
handlers.copy = handlers.cut = (view, event) => {
    let range = view.state.selection.primary;
    if (range.empty)
        return;
    let data = brokenClipboardAPI ? null : event.clipboardData;
    let text = view.state.joinLines(view.state.doc.sliceLines(range.from, range.to));
    if (data) {
        event.preventDefault();
        data.clearData();
        data.setData("text/plain", text);
    }
    else {
        captureCopy(view, text);
    }
    if (event.type == "cut") {
        view.dispatch(view.state.t().replaceSelection([""]).scrollIntoView().annotate(_state__WEBPACK_IMPORTED_MODULE_0__["Transaction"].userEvent, "cut"));
    }
};
handlers.focus = handlers.blur = view => {
    setTimeout(() => {
        if (view.hasFocus != view.inputState.notifiedFocused)
            view.update([]);
    }, 10);
};
handlers.beforeprint = view => {
    view.viewState.printing = true;
    view.requestMeasure();
    setTimeout(() => {
        view.viewState.printing = false;
        view.requestMeasure();
    }, 2000);
};
function forceClearComposition(view) {
    if (view.docView.compositionDeco.size)
        view.update([]);
}
handlers.compositionstart = handlers.compositionupdate = view => {
    if (!view.inputState.composing) {
        if (view.docView.compositionDeco.size) {
            view.observer.flush();
            forceClearComposition(view);
        }
        // FIXME possibly set a timeout to clear it again on Android
        view.inputState.composing = true;
    }
};
handlers.compositionend = view => {
    view.inputState.composing = false;
    setTimeout(() => {
        if (!view.inputState.composing)
            forceClearComposition(view);
    }, 50);
};

const observeOptions = {
    childList: true,
    characterData: true,
    subtree: true,
    characterDataOldValue: true
};
// IE11 has very broken mutation observers, so we also listen to
// DOMCharacterDataModified there
const useCharData = browser.ie && browser.ie_version <= 11;
class DOMObserver {
    constructor(view, onChange, onScrollChanged) {
        this.view = view;
        this.onChange = onChange;
        this.onScrollChanged = onScrollChanged;
        this.active = false;
        this.ignoreSelection = new DOMSelection;
        this.charDataQueue = [];
        this.charDataTimeout = null;
        this.scrollTargets = [];
        this.intersection = null;
        this.intersecting = false;
        // Timeout for scheduling check of the parents that need scroll handlers
        this.parentCheck = -1;
        this.dom = view.contentDOM;
        this.observer = new MutationObserver(mutations => this.flush(mutations));
        if (useCharData)
            this.onCharData = (event) => {
                this.charDataQueue.push({ target: event.target,
                    type: "characterData",
                    oldValue: event.prevValue });
                if (this.charDataTimeout == null)
                    this.charDataTimeout = setTimeout(() => this.flush(), 20);
            };
        this.onSelectionChange = () => {
            if (this.view.root.activeElement == this.dom)
                this.flush();
        };
        this.start();
        this.onScroll = this.onScroll.bind(this);
        window.addEventListener("scroll", this.onScroll);
        if (typeof IntersectionObserver == "function") {
            this.intersection = new IntersectionObserver(entries => {
                if (this.parentCheck < 0)
                    this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1000);
                if (entries[entries.length - 1].intersectionRatio > 0 != this.intersecting) {
                    this.intersecting = !this.intersecting;
                    this.onScroll();
                }
            }, {});
            this.intersection.observe(this.dom);
        }
        this.listenForScroll();
    }
    onScroll() {
        if (this.intersecting) {
            this.flush();
            this.onScrollChanged();
        }
    }
    listenForScroll() {
        this.parentCheck = -1;
        let i = 0, changed = null;
        for (let dom = this.dom; dom;) {
            if (dom.nodeType == 1) {
                if (!changed && i < this.scrollTargets.length && this.scrollTargets[i] == dom)
                    i++;
                else if (!changed)
                    changed = this.scrollTargets.slice(0, i);
                if (changed)
                    changed.push(dom);
                dom = dom.parentNode;
            }
            else if (dom.nodeType == 11) { // Shadow root
                dom = dom.host;
            }
            else {
                break;
            }
        }
        if (i < this.scrollTargets.length && !changed)
            changed = this.scrollTargets.slice(0, i);
        if (changed) {
            for (let dom of this.scrollTargets)
                dom.removeEventListener("scroll", this.onScroll);
            for (let dom of this.scrollTargets = changed)
                dom.addEventListener("scroll", this.onScroll);
        }
    }
    ignore(f) {
        if (!this.active)
            return f();
        try {
            this.stop();
            return f();
        }
        finally {
            this.start();
            this.clear();
        }
    }
    start() {
        if (this.active)
            return;
        this.observer.observe(this.dom, observeOptions);
        // FIXME is this shadow-root safe?
        this.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
        if (useCharData)
            this.dom.addEventListener("DOMCharacterDataModified", this.onCharData);
        this.active = true;
    }
    stop() {
        if (!this.active)
            return;
        this.active = false;
        this.observer.disconnect();
        this.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
        if (useCharData)
            this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData);
    }
    takeCharRecords() {
        let result = this.charDataQueue;
        if (result.length) {
            this.charDataQueue = [];
            clearTimeout(this.charDataTimeout);
            this.charDataTimeout = null;
        }
        return result;
    }
    clearSelection() {
        this.ignoreSelection.set(getSelection(this.view.root));
    }
    // Throw away any pending changes
    clear() {
        this.observer.takeRecords();
        this.takeCharRecords();
        this.clearSelection();
    }
    // Apply pending changes, if any
    flush(records = this.observer.takeRecords()) {
        if (this.charDataQueue.length)
            records = records.concat(this.takeCharRecords());
        let selection = getSelection(this.view.root);
        let newSel = !this.ignoreSelection.eq(selection) && hasSelection(this.dom, selection);
        if (records.length == 0 && !newSel)
            return;
        let from = -1, to = -1, typeOver = false;
        for (let record of records) {
            let range = this.readMutation(record);
            if (!range)
                continue;
            if (range.typeOver)
                typeOver = true;
            if (from == -1) {
                ({ from, to } = range);
            }
            else {
                from = Math.min(range.from, from);
                to = Math.max(range.to, to);
            }
        }
        let apply = from > -1 || newSel;
        if (!apply || !this.onChange(from, to, typeOver)) {
            if (this.view.docView.dirty) {
                this.ignore(() => this.view.docView.sync());
                this.view.docView.dirty = 0 /* Not */;
            }
            this.view.docView.updateSelection();
        }
        this.clearSelection();
    }
    readMutation(rec) {
        let cView = this.view.docView.nearest(rec.target);
        if (!cView || cView.ignoreMutation(rec))
            return null;
        cView.markDirty();
        if (rec.type == "childList") {
            let childBefore = findChild(cView, rec.previousSibling || rec.target.previousSibling, -1);
            let childAfter = findChild(cView, rec.nextSibling || rec.target.nextSibling, 1);
            return { from: childBefore ? cView.posAfter(childBefore) : cView.posAtStart,
                to: childAfter ? cView.posBefore(childAfter) : cView.posAtEnd, typeOver: false };
        }
        else { // "characterData"
            return { from: cView.posAtStart, to: cView.posAtEnd, typeOver: rec.target.nodeValue == rec.oldValue };
        }
    }
    destroy() {
        this.stop();
        if (this.intersection)
            this.intersection.disconnect();
        for (let dom of this.scrollTargets)
            dom.removeEventListener("scroll", this.onScroll);
        window.removeEventListener("scroll", this.onScroll);
        clearTimeout(this.parentCheck);
    }
}
function findChild(cView, dom, dir) {
    while (dom) {
        let curView = ContentView.get(dom);
        if (curView && curView.parent == cView)
            return curView;
        let parent = dom.parentNode;
        dom = parent != cView.dom ? parent : dir > 0 ? dom.nextSibling : dom.previousSibling;
    }
    return null;
}

const LineSep = "\ufdda"; // A Unicode 'non-character', used to denote newlines internally
function applyDOMChange(view, start, end, typeOver) {
    let change, newSel;
    let sel = view.state.selection.primary, bounds;
    if (start > -1 && (bounds = view.docView.domBoundsAround(start, end, 0))) {
        let { from, to } = bounds;
        let selPoints = view.docView.impreciseHead || view.docView.impreciseAnchor ? [] : selectionPoints(view.contentDOM, view.root);
        let reader = new DOMReader(selPoints);
        reader.readRange(bounds.startDOM, bounds.endDOM);
        newSel = selectionFromPoints(selPoints, from);
        let preferredPos = sel.from, preferredSide = null;
        // Prefer anchoring to end when Backspace is pressed
        if (view.inputState.lastKeyCode === 8 && view.inputState.lastKeyTime > Date.now() - 100) {
            preferredPos = sel.to;
            preferredSide = "end";
        }
        let diff = findDiff(view.state.doc.slice(from, to, LineSep), reader.text, preferredPos - from, preferredSide);
        if (diff)
            change = new _state__WEBPACK_IMPORTED_MODULE_0__["Change"](from + diff.from, from + diff.toA, reader.text.slice(diff.from, diff.toB).split(LineSep));
    }
    else if (view.hasFocus) {
        let domSel = getSelection(view.root);
        let { impreciseHead: iHead, impreciseAnchor: iAnchor } = view.docView;
        let head = iHead && iHead.node == domSel.focusNode && iHead.offset == domSel.focusOffset ? view.state.selection.primary.head
            : view.docView.posFromDOM(domSel.focusNode, domSel.focusOffset);
        let anchor = iAnchor && iAnchor.node == domSel.anchorNode && iAnchor.offset == domSel.anchorOffset
            ? view.state.selection.primary.anchor
            : selectionCollapsed(domSel) ? head : view.docView.posFromDOM(domSel.anchorNode, domSel.anchorOffset);
        if (head != sel.head || anchor != sel.anchor)
            newSel = _state__WEBPACK_IMPORTED_MODULE_0__["EditorSelection"].single(anchor, head);
    }
    if (!change && !newSel)
        return false;
    // Heuristic to notice typing over a selected character
    if (!change && typeOver && !sel.empty && newSel && newSel.primary.empty)
        change = new _state__WEBPACK_IMPORTED_MODULE_0__["Change"](sel.from, sel.to, view.state.doc.sliceLines(sel.from, sel.to));
    if (change) {
        let startState = view.state;
        // Android browsers don't fire reasonable key events for enter,
        // backspace, or delete. So this detects changes that look like
        // they're caused by those keys, and reinterprets them as key
        // events.
        if (browser.android &&
            ((change.from == sel.from && change.to == sel.to &&
                change.length == 1 && change.text.length == 2 &&
                dispatchKey(view, "Enter", 10)) ||
                (change.from == sel.from - 1 && change.to == sel.to && change.length == 0 &&
                    dispatchKey(view, "Backspace", 8)) ||
                (change.from == sel.from && change.to == sel.to + 1 && change.length == 0 &&
                    dispatchKey(view, "Delete", 46))))
            return view.state != startState;
        let tr = startState.t();
        if (change.from >= sel.from && change.to <= sel.to && change.to - change.from >= (sel.to - sel.from) / 3) {
            let before = sel.from < change.from ? startState.doc.slice(sel.from, change.from, LineSep) : "";
            let after = sel.to > change.to ? startState.doc.slice(change.to, sel.to, LineSep) : "";
            tr.replaceSelection((before + change.text.join(LineSep) + after).split(LineSep));
        }
        else {
            tr.change(change);
            if (newSel && !tr.selection.primary.eq(newSel.primary))
                tr.setSelection(tr.selection.replaceRange(newSel.primary));
        }
        view.dispatch(tr.scrollIntoView().annotate(_state__WEBPACK_IMPORTED_MODULE_0__["Transaction"].userEvent, "input"));
        return true;
    }
    else if (newSel && !newSel.primary.eq(sel)) {
        let tr = view.state.t().setSelection(newSel);
        if (view.inputState.lastSelectionTime > Date.now() - 50) {
            if (view.inputState.lastSelectionOrigin == "keyboard")
                tr.scrollIntoView();
            else
                tr.annotate(_state__WEBPACK_IMPORTED_MODULE_0__["Transaction"].userEvent, view.inputState.lastSelectionOrigin);
        }
        view.dispatch(tr);
        return true;
    }
    return false;
}
function findDiff(a, b, preferredPos, preferredSide) {
    let minLen = Math.min(a.length, b.length);
    let from = 0;
    while (from < minLen && a.charCodeAt(from) == b.charCodeAt(from))
        from++;
    if (from == minLen && a.length == b.length)
        return null;
    let toA = a.length, toB = b.length;
    while (toA > 0 && toB > 0 && a.charCodeAt(toA - 1) == b.charCodeAt(toB - 1)) {
        toA--;
        toB--;
    }
    if (preferredSide == "end") {
        let adjust = Math.max(0, from - Math.min(toA, toB));
        preferredPos -= toA + adjust - from;
    }
    if (toA < from && a.length < b.length) {
        let move = preferredPos <= from && preferredPos >= toA ? from - preferredPos : 0;
        from -= move;
        toB = from + (toB - toA);
        toA = from;
    }
    else if (toB < from) {
        let move = preferredPos <= from && preferredPos >= toB ? from - preferredPos : 0;
        from -= move;
        toA = from + (toA - toB);
        toB = from;
    }
    return { from, toA, toB };
}
class DOMReader {
    constructor(points) {
        this.points = points;
        this.text = "";
    }
    readRange(start, end) {
        if (!start)
            return;
        let parent = start.parentNode;
        for (let cur = start;;) {
            this.findPointBefore(parent, cur);
            this.readNode(cur);
            let next = cur.nextSibling;
            if (next == end)
                break;
            let view = ContentView.get(cur), nextView = ContentView.get(next);
            if ((view ? view.breakAfter : isBlockElement(cur)) ||
                ((nextView ? nextView.breakAfter : isBlockElement(next)) && !(cur.nodeName == "BR" && !cur.cmIgnore)))
                this.text += LineSep;
            cur = next;
        }
        this.findPointBefore(parent, end);
    }
    readNode(node) {
        if (node.cmIgnore)
            return;
        let view = ContentView.get(node);
        let fromView = view && view.overrideDOMText;
        let text;
        if (fromView != null)
            text = fromView.join(LineSep);
        else if (node.nodeType == 3)
            text = node.nodeValue;
        else if (node.nodeName == "BR")
            text = node.nextSibling ? LineSep : "";
        else if (node.nodeType == 1)
            this.readRange(node.firstChild, null);
        if (text != null) {
            this.findPointIn(node, text.length);
            this.text += text;
        }
    }
    findPointBefore(node, next) {
        for (let point of this.points)
            if (point.node == node && node.childNodes[point.offset] == next)
                point.pos = this.text.length;
    }
    findPointIn(node, maxLen) {
        for (let point of this.points)
            if (point.node == node)
                point.pos = this.text.length + Math.min(point.offset, maxLen);
    }
}
function isBlockElement(node) {
    return node.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(node.nodeName);
}
class DOMPoint {
    constructor(node, offset) {
        this.node = node;
        this.offset = offset;
        this.pos = -1;
    }
}
function selectionPoints(dom, root) {
    let result = [];
    if (root.activeElement != dom)
        return result;
    let { anchorNode, anchorOffset, focusNode, focusOffset } = getSelection(root);
    if (anchorNode) {
        result.push(new DOMPoint(anchorNode, anchorOffset));
        if (focusNode != anchorNode || focusOffset != anchorOffset)
            result.push(new DOMPoint(focusNode, focusOffset));
    }
    return result;
}
function selectionFromPoints(points, base) {
    if (points.length == 0)
        return null;
    let anchor = points[0].pos, head = points.length == 2 ? points[1].pos : anchor;
    return anchor > -1 && head > -1 ? _state__WEBPACK_IMPORTED_MODULE_0__["EditorSelection"].single(anchor + base, head + base) : null;
}
function dispatchKey(view, name, code) {
    let options = { key: name, code: name, keyCode: code, which: code, cancelable: true };
    let down = new KeyboardEvent("keydown", options);
    view.contentDOM.dispatchEvent(down);
    let up = new KeyboardEvent("keyup", options);
    view.contentDOM.dispatchEvent(up);
    return down.defaultPrevented || up.defaultPrevented;
}

// The editor's update state machine looks something like this:
//
//     Idle → Updating ⇆ Idle (unchecked) → Measuring → Idle
//                                         ↑      ↓
//                                         Updating (measure)
//
// The difference between 'Idle' and 'Idle (unchecked)' lies in
// whether a layout check has been scheduled. A regular update through
// the `update` method updates the DOM in a write-only fashion, and
// relies on a check (scheduled with `requestAnimationFrame`) to make
// sure everything is where it should be and the viewport covers the
// visible code. That check continues to measure and then optionally
// update until it reaches a coherent state.
/// An editor view represents the editor's user interface. It holds
/// the editable DOM surface, and possibly other elements such as the
/// line number gutter. It handles events and dispatches state
/// transactions for editing actions.
class EditorView {
    /// Construct a new view. You'll usually want to put `view.dom` into
    /// your document after creating a view, so that the user can see
    /// it.
    constructor(config = {}) {
        this.plugins = [];
        this.editorAttrs = {};
        this.contentAttrs = {};
        /// @internal
        this.updateState = 2 /* Updating */;
        /// @internal
        this.measureScheduled = -1;
        /// @internal
        this.measureRequests = [];
        this.contentDOM = document.createElement("div");
        this.scrollDOM = document.createElement("div");
        this.scrollDOM.className = themeClass("scroller");
        this.scrollDOM.appendChild(this.contentDOM);
        this.dom = document.createElement("div");
        this.dom.appendChild(this.scrollDOM);
        this.dispatch = config.dispatch || ((tr) => this.update([tr]));
        this.root = (config.root || document);
        this.viewState = new ViewState(config.state || _state__WEBPACK_IMPORTED_MODULE_0__["EditorState"].create());
        this.plugins = this.state.facet(viewPlugin).map(spec => PluginInstance.create(spec, this));
        this.observer = new DOMObserver(this, (from, to, typeOver) => applyDOMChange(this, from, to, typeOver), () => this.measure());
        this.docView = new DocView(this);
        this.inputState = new InputState(this);
        this.mountStyles();
        this.updateAttrs();
        this.updateState = 0 /* Idle */;
        ensureGlobalHandler();
        this.requestMeasure();
    }
    /// The current editor state.
    get state() { return this.viewState.state; }
    /// To be able to display large documents without consuming too much
    /// memory or overloading the browser, CodeMirror only draws the
    /// code that is visible (plus a margin around it) to the DOM. This
    /// property tells you the extent of the current drawn viewport, in
    /// document positions.
    get viewport() { return this.viewState.viewport; }
    /// When there are, for example, large collapsed ranges in the
    /// viewport, its size can be a lot bigger than the actual visible
    /// content. Thus, if you are doing something like styling the
    /// content in the viewport, it is preferable to only do so for
    /// these ranges, which are the subset of the viewport that is
    /// actually drawn.
    get visibleRanges() { return this.viewState.visibleRanges; }
    /// Update the view for the given array of transactions. This will
    /// update the visible document and selection to match the state
    /// produced by the transactions, and notify view plugins of the
    /// change.
    update(transactions) {
        if (this.updateState != 0 /* Idle */)
            throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        this.updateState = 2 /* Updating */;
        let state = this.state;
        for (let tr of transactions) {
            if (tr.startState != state)
                throw new RangeError("Trying to update state with a transaction that doesn't start from the current state.");
            state = tr.apply();
        }
        let update = new ViewUpdate(this, state, transactions);
        if (state.doc != this.state.doc || transactions.some(tr => tr.selectionSet && !tr.annotation(_state__WEBPACK_IMPORTED_MODULE_0__["Transaction"].preserveGoalColumn)))
            this.inputState.goalColumns.length = 0;
        let scrollTo = transactions.some(tr => tr.scrolledIntoView) ? state.selection.primary.head : -1;
        this.viewState.update(update, scrollTo);
        if (!update.empty)
            this.updatePlugins(update);
        let redrawn = this.docView.update(update);
        this.inputState.ensureHandlers(this);
        if (this.state.facet(styleModule) != this.styleModules)
            this.mountStyles();
        this.updateAttrs();
        this.updateState = 0 /* Idle */;
        if (redrawn || scrollTo > -1)
            this.requestMeasure();
    }
    updatePlugins(update) {
        let prevSpecs = update.prevState.facet(viewPlugin), specs = update.state.facet(viewPlugin);
        if (prevSpecs != specs) {
            let newPlugins = [], reused = [];
            for (let spec of specs) {
                let found = prevSpecs.indexOf(spec);
                if (found < 0) {
                    newPlugins.push(PluginInstance.create(spec, this));
                }
                else {
                    let plugin = this.plugins[found].update(update);
                    reused.push(plugin);
                    newPlugins.push(plugin);
                }
            }
            for (let plugin of this.plugins)
                if (plugin.destroy && reused.indexOf(plugin) < 0)
                    plugin.destroy();
            this.plugins = newPlugins;
        }
        else {
            for (let i = 0; i < this.plugins.length; i++)
                this.plugins[i] = this.plugins[i].update(update);
        }
    }
    /// @internal
    measure() {
        if (this.measureScheduled > -1)
            cancelAnimationFrame(this.measureScheduled);
        this.measureScheduled = 1; // Prevent requestMeasure calls from scheduling another animation frame
        for (let i = 0;; i++) {
            this.updateState = 1 /* Measuring */;
            let changed = this.viewState.measure(this.docView, i > 0);
            let measuring = this.measureRequests;
            if (!changed && !measuring.length)
                break;
            this.measureRequests = [];
            if (i > 5) {
                console.warn("Viewport failed to stabilize");
                break;
            }
            let measured = measuring.map(m => m.read(this));
            let update = new ViewUpdate(this, this.state);
            update.flags |= changed;
            this.updateState = 2 /* Updating */;
            this.updatePlugins(update);
            if (changed)
                this.docView.update(update);
            for (let i = 0; i < measuring.length; i++)
                measuring[i].write(measured[i], this);
            if (!(changed & 4 /* Viewport */) && this.measureRequests.length == 0)
                break;
        }
        this.updateState = 0 /* Idle */;
        this.measureScheduled = -1;
    }
    updateAttrs() {
        let editorAttrs = combineAttrs(this.state.facet(editorAttributes), {
            class: themeClass("wrap") + (this.hasFocus ? " cm-focused " : " ") +
                baseThemeID + " " + this.state.facet(theme).join(" ")
        });
        updateAttrs(this.dom, this.editorAttrs, editorAttrs);
        this.editorAttrs = editorAttrs;
        let contentAttrs = combineAttrs(this.state.facet(contentAttributes), {
            spellcheck: "false",
            contenteditable: "true",
            class: themeClass("content"),
            style: `${browser.tabSize}: ${this.state.tabSize}`
        });
        updateAttrs(this.contentDOM, this.contentAttrs, contentAttrs);
        this.contentAttrs = contentAttrs;
    }
    mountStyles() {
        this.styleModules = this.state.facet(styleModule);
        style_mod__WEBPACK_IMPORTED_MODULE_1__["StyleModule"].mount(this.root, this.styleModules.concat(baseTheme).reverse());
    }
    /// Look up a translation for the given phrase (via the
    /// [`phrases`](#view.EditorView^phrases) facet), or return the
    /// original string if no translation is found.
    phrase(phrase) {
        for (let map of this.state.facet(phrases)) {
            if (Object.prototype.hasOwnProperty.call(map, phrase))
                return map[phrase];
        }
        return phrase;
    }
    /// Find the DOM parent node and offset (child offset if `node` is
    /// an element, character offset when it is a text node) at the
    /// given document position.
    domAtPos(pos) {
        return this.docView.domAtPos(pos);
    }
    /// Find the document position at the given DOM node. Can be useful
    /// for associating positions with DOM events. Will raise an error
    /// when `node` isn't part of the editor content.
    posAtDOM(node, offset = 0) {
        return this.docView.posFromDOM(node, offset);
    }
    readMeasured() {
        if (this.updateState == 2 /* Updating */)
            throw new Error("Reading the editor layout isn't allowed during an update");
        if (this.updateState == 0 /* Idle */ && this.measureScheduled > -1)
            this.measure();
    }
    /// Make sure plugins get a chance to measure the DOM before the
    /// next frame. Calling this is preferable to messing with the DOM
    /// directly from, for example, an even handler, because it'll make
    /// sure measuring and drawing done by other components is
    /// synchronized, avoiding unnecessary DOM layout computations.
    requestMeasure(request) {
        if (this.measureScheduled < 0)
            this.measureScheduled = requestAnimationFrame(() => this.measure());
        if (request) {
            if (request.key != null)
                for (let i = 0; i < this.measureRequests.length; i++) {
                    if (this.measureRequests[i].key === request.key) {
                        this.measureRequests[i] = request;
                        return;
                    }
                }
            this.measureRequests.push(request);
        }
    }
    /// Collect all values provided by the active plugins for a given
    /// field.
    pluginField(field) {
        // FIXME make this error when called during plugin updating
        let result = [];
        for (let plugin of this.plugins)
            plugin.takeField(field, result);
        return result;
    }
    /// Get the value of a specific plugin, if present. Note that
    /// plugins that crash can be dropped from a view, so even when you
    /// know you registered a given plugin, it is recommended to check
    /// the return value of this method.
    plugin(plugin) {
        for (let inst of this.plugins)
            if (inst.spec == plugin)
                return inst.value;
        return null;
    }
    /// Find the line or block widget at the given vertical position.
    /// `editorTop`, if given, provides the vertical position of the top
    /// of the editor. It defaults to the editor's screen position
    /// (which will force a DOM layout).
    blockAtHeight(height, editorTop) {
        this.readMeasured();
        return this.viewState.blockAtHeight(height, ensureTop(editorTop, this.contentDOM));
    }
    /// Find information for the line at the given vertical position.
    /// The resulting block info might hold another array of block info
    /// structs in its `type` field if this line consists of more than
    /// one block.
    lineAtHeight(height, editorTop) {
        this.readMeasured();
        return this.viewState.lineAtHeight(height, ensureTop(editorTop, this.contentDOM));
    }
    /// Find the height information for the given line.
    lineAt(pos, editorTop) {
        this.readMeasured();
        return this.viewState.lineAt(pos, ensureTop(editorTop, this.contentDOM));
    }
    /// Iterate over the height information of the lines in the
    /// viewport.
    viewportLines(f, editorTop) {
        let { from, to } = this.viewport;
        this.viewState.forEachLine(from, to, f, ensureTop(editorTop, this.contentDOM));
    }
    /// The editor's total content height.
    get contentHeight() {
        return this.viewState.heightMap.height + this.viewState.paddingTop + this.viewState.paddingBottom;
    }
    /// Compute cursor motion from the given position, in the given
    /// direction, by the given unit. Since this might involve
    /// temporarily mutating the DOM selection, you can pass the action
    /// type this will be used for to, in case the editor selection is
    /// set to the new position right away, avoid an extra DOM selection
    /// change.
    movePos(start, direction, granularity = "character", action = "move") {
        return movePos(this, start, direction, granularity, action);
    }
    /// Get the document position at the given screen coordinates.
    /// Returns -1 if no valid position could be found.
    posAtCoords(coords) {
        this.readMeasured();
        return posAtCoords(this, coords);
    }
    /// Get the screen coordinates at the given document position.
    coordsAtPos(pos) {
        this.readMeasured();
        return this.docView.coordsAt(pos);
    }
    /// The default width of a character in the editor. May not
    /// accurately reflect the width of all characters.
    get defaultCharacterWidth() { return this.viewState.heightOracle.charWidth; }
    /// The default height of a line in the editor.
    get defaultLineHeight() { return this.viewState.heightOracle.lineHeight; }
    /// The text direction (`direction` CSS property) of the editor.
    get textDirection() { return this.viewState.heightOracle.direction; }
    /// Start a custom mouse selection event.
    startMouseSelection(event, update) {
        this.focus();
        this.inputState.startMouseSelection(this, event, update);
    }
    /// Check whether the editor has focus.
    get hasFocus() {
        return this.root.activeElement == this.contentDOM;
    }
    /// Put focus on the editor.
    focus() {
        this.observer.ignore(() => {
            focusPreventScroll(this.contentDOM);
            this.docView.updateSelection();
        });
    }
    /// Clean up this editor view, removing its element from the
    /// document, unregistering event handlers, and notifying
    /// plugins. The view instance can no longer be used after
    /// calling this.
    destroy() {
        for (let plugin of this.plugins)
            plugin.destroy();
        this.inputState.destroy();
        this.dom.remove();
        this.observer.destroy();
        if (this.measureScheduled > -1)
            cancelAnimationFrame(this.measureScheduled);
    }
    /// Create a theme extension. The argument object should map [theme
    /// selectors](#view.themeClass) to styles, which are (potentially
    /// nested) [style
    /// declarations](https://github.com/marijnh/style-mod#documentation)
    /// providing the CSS styling for the selector.
    static theme(spec) {
        let prefix = style_mod__WEBPACK_IMPORTED_MODULE_1__["StyleModule"].newName();
        return [theme.of(prefix), styleModule.of(buildTheme(prefix, spec))];
    }
    /// Create an extension that adds styles to the base theme.
    static baseTheme(spec) {
        return _state__WEBPACK_IMPORTED_MODULE_0__["Precedence"].Fallback.set(styleModule.of(buildTheme(baseThemeID, spec)));
    }
}
/// Facet that registers [view plugins](#view.ViewPlugin). Usually,
/// it is more convenient to use
/// [`ViewPlugin.register`](#view.ViewPlugin^register).
EditorView.plugin = viewPlugin;
/// Facet to add a [style
/// module](https://github.com/marijnh/style-mod#readme) to an editor
/// view. The view will ensure that the module is registered in its
/// [document root](#view.EditorConfig.root).
EditorView.styleModule = styleModule;
/// Facet that can be used to add DOM event handlers. The value
/// should be an object mapping event names to handler functions. The
/// first such function to return true will be assumed to have handled
/// that event, and no other handlers or built-in behavior will be
/// activated for it.
EditorView.domEventHandlers = domEventHandlers;
/// Facet used to configure whether a given selection drag event
/// should move or copy the selection. The given predicate will be
/// called with the `mousedown` event, and can return `true` when
/// the drag should move the content.
EditorView.dragMovesSelection = dragMovesSelection;
/// Facet used to configure whether a given selecting click adds
/// a new range to the existing selection or replaces it entirely.
EditorView.clickAddsSelectionRange = clickAddsSelectionRange;
/// A facet that determines which [decorations](#view.Decoration)
/// are shown in the view. See also [view
/// plugins](#view.EditorView^decorations), which have a separate
/// mechanism for providing decorations.
EditorView.decorations = decorations;
/// Registers translation phrases. The
/// [`phrase`](#view.EditorView.phrase) method will look through all
/// objects registered with this facet to find translations for
/// its argument.
EditorView.phrases = phrases;
/// Facet that provides attributes for the editor's editable DOM
/// element.
EditorView.contentAttributes = contentAttributes;
/// Facet that provides editor DOM attributes for the editor's
/// outer element.
EditorView.editorAttributes = editorAttributes;
function ensureTop(given, dom) {
    return given == null ? dom.getBoundingClientRect().top : given;
}
let resizeDebounce = -1;
function ensureGlobalHandler() {
    window.addEventListener("resize", () => {
        if (resizeDebounce == -1)
            resizeDebounce = setTimeout(handleResize, 50);
    });
}
function handleResize() {
    resizeDebounce = -1;
    let found = document.querySelectorAll(".cm-content");
    for (let i = 0; i < found.length; i++) {
        let docView = ContentView.get(found[i]);
        if (docView)
            docView.editorView.requestMeasure();
    }
}

/// @internal
const __test = { HeightMap, HeightOracle, MeasuredHeights, QueryType };




/***/ }),

/***/ "./node_modules/lezer-javascript/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/lezer-javascript/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var lezer = __webpack_require__(/*! lezer */ "./node_modules/lezer/dist/index.js");

// This file was generated by lezer-generator. You probably shouldn't edit it.
const 
  noSemi = 180,
  PostfixOp = 3,
  insertSemi = 181,
  templateContent = 182,
  templateDollarBrace = 183,
  templateEnd = 184;

/* Hand-written tokenizers for JavaScript tokens that can't be
   expressed by lezer's built-in tokenizer. */

const newline = [10, 13, 8232, 8233];
const space = [9, 11, 12, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288];

const braceR = 125, braceL = 123, semicolon = 59, slash = 47, star = 42,
      plus = 43, minus = 45, dollar = 36, backtick = 96, backslash = 92;

// FIXME this should technically enter block comments
function newlineBefore(input, pos) {
  for (let i = pos - 1; i >= 0; i--) {
    let prev = input.get(i);
    if (newline.includes(prev)) return true
    if (!space.includes(prev)) break
  }
  return false
}

const insertSemicolon = new lezer.ExternalTokenizer((input, token, stack) => {
  let pos = token.start, next = input.get(pos);
  if ((next == braceR || next == -1 || newlineBefore(input, pos)) && stack.canShift(insertSemi))
    token.accept(insertSemi, token.start);
}, {contextual: true});

const noSemicolon = new lezer.ExternalTokenizer((input, token, stack) => {
  let pos = token.start, next = input.get(pos++);
  if (space.includes(next) || newline.includes(next)) return
  if (next == slash) {
    let after = input.get(pos++);
    if (after == slash || after == star) return
  }
  if (next != braceR && next != semicolon && next != -1 && !newlineBefore(input, token.start) &&
      stack.canShift(noSemi))
    token.accept(noSemi, token.start);
}, {contextual: true});

const postfix = new lezer.ExternalTokenizer((input, token, stack) => {
  let pos = token.start, next = input.get(pos++);
  if ((next == plus || next == minus) && next == input.get(pos++) &&
      !newlineBefore(input, token.start) && stack.canShift(PostfixOp))
    token.accept(PostfixOp, pos);
}, {contextual: true});

const template = new lezer.ExternalTokenizer((input, token) => {
  let pos = token.start, afterDollar = false;
  for (;;) {
    let next = input.get(pos++);
    if (next < 0) {
      if (pos - 1 > token.start) token.accept(templateContent, pos - 1);
      break
    } else if (next == backtick) {
      if (pos == token.start + 1) token.accept(templateEnd, pos);
      else token.accept(templateContent, pos - 1);
      break
    } else if (next == braceL && afterDollar) {
      if (pos == token.start + 2) token.accept(templateDollarBrace, pos);
      else token.accept(templateContent, pos - 2);
      break
    } else if (next == 10 /* "\n" */ && pos > token.start + 1) {
      // Break up template strings on lines, to avoid huge tokens
      token.accept(templateContent, pos);
      break
    } else if (next == backslash && pos != input.length) {
      pos++;
    }
    afterDollar = next == dollar;
  }
});

// This file was generated by lezer-generator. You probably shouldn't edit it.
const parser = lezer.Parser.deserialize({
  states: "!2bOYOSOOO$QOSO'#FvO&{O!lO'#CmO(tOSO'#CqO*pO!lO'#GkOXOS'#Gk'#GkO,lX#tO'#C{O,vOSO'#D]O/qOSO'#DcO1aOSO'#DmOXOS'#Dv'#DvO3VOSO'#DuO3ZO!lO'#GhO5]OSO'#E^OXOW'#Gh'#GhOXOS'#Gq'#GqO5aOSO'#FeO5eO!fO'#FfOXOS'#G_'#G_OXOS(3Cy(3CyQXOSOOO/qOSO'#D_O5lOSO'#EcO5pOSO'#CjO5zOSO'#DuO6UOSO'#EdO6`OSO'#CcO6|OSO'#ElO7^OSO'#EoO7eOSO'#EuO7eOSO'#EwOYOSO'#EyO7eOSO'#E{O7eOSO'#FOO7iOSO'#FUO7mO!gO'#FYO/qOSO'#F[O7wO!gO'#F^O8RO!gO'#FaO5eO!fO'#FcOXOS,5<R,5<RO8]O!lO'#CmO:qOSO,59]O:uOSO'#FyO:|OSO(3C|O<rOYO'#GmOXOS'#Gm'#GmO>[OSO,59pO>cO`O'#DVO?VOSO'#DvO?jOSO'#GeO?wO!fO'#GdO6UOSO'#GcO@[OSO'#GcO@fOSO'#DnO5pOSO'#DtO5}OSO'#DuO@pO!fO'#FxO/qOSO'#FiOXOS,59h,59hOAWOSO'#DaOB|O`O,5:dO/qOSO,5:dO/qOSO,5:fO/qOSO,5:fO/qOSO,5:fO/qOSO,5:fO/qOSO,5:fO/qOSO,5:fO/qOSO,5:fO/qOSO,5:fO/qOSO,5:fO/qOSO,5:fO/qOSO,5:fOCQOSO,5:uOXOW,5:z,5:zOXOW,5:{,5:{OXOW,5:|,5:|ODpX#tO'#FwO/qOSO'#GjOXXO(3Cz(3CzODzX#tO,59gOEOOSO'#FzOXOS(3C}(3C}OGyOSO,59wOG}O!lO,59}OIyOSO,5:XOI}OSO,59YOJROSO,5:aO/qOSO,5:xOYOSO,5<POXOS'#Gb'#GbOXOS,5<Q,5<QOKqO!lO,59yOXOS'#Cm'#CmOMmOSO,5:}OXOS'#Ce'#CeOMtOSO'#CnO7iOSO,59UONUOSO,59UO5}OSO,59UONYOSO,5:aO5pOSO,59UON^OSO'#CqONnO`O'#CtOXOS'#Ge'#GeO! OO!fO,5;OO! YOSO'#EhO! aOSO'#CjO! eOSO,58}O! iOSO,58}OXOS,58},58}O!#XO!fO,58}O!#cOSO'#EnO!#jOSO'#GsO!#qOSO,5;WO!#uOSO,5;WO5eO!fO,5;WO!#yOSO'#EqOXOS'#Er'#ErOXOS'#Es'#EsOYOSO,5;ZO!%uOSO,5;ZO/qOSO'#DmOYOSO,5;aOYOSO,5;cO!%yOSO,5;eOYOSO,5;gO!%}OSO,5;jO!&ROSO,5;pOXOS,5;t,5;tO/qOSO,5;tO5eO!fO,5;vOXOS,5;x,5;xO!)`OSO,5;xOXOS,5;{,5;{O!)`OSO,5;{OXOS,5;},5;}OXOS1G.w1G.wOXOS,5<U,5<UO!)dOYO-E9hOXOS,5=X,5=XOXOW1G/[1G/[O!*|OSO'#CwOXOS'#Go'#GoO/qOSO'#GoO!+gOSO'#GoO!,QOSO'#DWO!,_O`O'#DWOCQOSO'#DWO!,lOSO'#GnO!,sOSO,59qO!,zOSO'#CvO!-XOSO'#GfO!-`OSO,59`O!-dO`O'#DWO/qOSO,5=OO@[OSO,5<}O!-zOSO'#GPO!.UOSO(3DSOXOS,5<},5<}O!.lO`O'#DqOXOW,5:Y,5:YO/qOSO,5:YO!/VOSO,5:YO7iOSO,5:`ONUOSO,5:`O5}OSO,5:`OXOS,5<T,5<TO!/^O!lO-E9gO!1YOYO'#GpO/qOSO'#GpO!2rOSO,59{OXOW'#Cw'#CwOXOW1G0O1G0OO!2vOSO1G0OO!2zO!lO1G0QO!4vO!lO1G0QO!6rO!lO1G0QO!8nO!lO1G0QO!:jO!lO1G0QO!<fO!lO1G0QO!>bO!lO1G0QO!@^O!lO1G0QO!BYO!lO1G0QO!DUO!lO1G0QO!FQO!lO1G0QO!G|OrO'#CmOCQOSO'#DcO!I{OSO'#DuO!JPOrO1G0aO!KfOrO'#GhO!MXOSO'#E^OCQOSO'#D_OXXO,5<S,5<SO!M]OWO,5=UOXOW1G/R1G/ROXOS,5<V,5<VOXOS1G/c1G/cOXOW1G/s1G/sOXOS1G.t1G.tOXOW1G/{1G/{O!MaO!lO1G0dOXOS1G1k1G1kOXOW1G/e1G/eOXOS1G0i1G0iO/qOSO1G0iOXOS1G.p1G.pO7iOSO1G.pONUOSO1G.pOJROSO1G/{O5}OSO1G.pO6UOSO'#CvO# ]O!fO'#GQO6UOSO'#FqO5eO!fO1G0jOXOS'#DO'#DOO# gOSO'#GrO# qOSO,5;SO# uOSO1G.iOXOS1G.i1G.iO5eO!fO1G.iO# yOSO'#CmO#!TOSO'#GtO#![OSO,5;YO#!`OSO'#GtO#!dOSO'#GTO#!kOSO(3DWOXOS,5=_,5=_O5lOSO1G0rO#!xOSO1G0rOXOS1G0r1G0rO#!|OYO,5=aO#$oOSO,5=aO#$yOSO,5;]O#&lOSO,5;]O6UOSO,5=aOXOS1G0u1G0uOYOSO1G0uOXOS1G0{1G0{OXOS1G0}1G0}O7eOSO1G1PO#&pOSO1G1RO#)wOSO'#FQOXOS1G1U1G1UO7iOSO1G1[O#,xOSO1G1[O5eO!fO1G1`OXOS1G1b1G1bOXOS'#F`'#F`O5eO!fO1G1dO5eO!fO1G1gO#-POSO,5=ZOCQOSO,59bO6UOSO,59bO7iOSO,59rOCQOSO,59rOXOS'#D['#D[ONUOSO,59rO#-TOrO,59rO#.mOSO'#GeOXOS,59b,59bO#.wOSO'#GdO#/ROSO'#F{O#/YO`O(3DOOXOS,5=Y,5=YOXOW1G/]1G/]O#/|OSO'#GOO#0TO`O(3DROXOS,5=Q,5=QOXOS1G.z1G.zO!,_O`O,59rO#0hO!lO1G2jOXOS1G2i1G2iOXOS,5<[,5<[O6UOSO,5<[OXOS-E9n-E9nO#2ZO`O'#F}ONUOSO'#DrO!,hO`O'#DrOXO`(3DQ(3DQO#2tOSO,5:]O#2xO`O'#DrO#3VO`O'#DrO#3gOSO1G/tOXOW1G/t1G/tO/qOSO1G/tOXOW1G/z1G/zO7iOSO1G/zONUOSO1G/zO#3kOSO'#F|O#3rOSO(3DPOXOS,5=[,5=[O!1YOYO,5=[OXOW1G/g1G/gOXOW7+%j7+%jO#5kOrO,59}O#7WOSO,5:aOCQOSO,5:fOCQOSO,5:fOCQOSO,5:fOCQOSO,5:fOCQOSO,5:fOCQOSO,5:fOCQOSO,5:fOCQOSO,5:fOCQOSO,5:fOCQOSO,5:fOCQOSO,5:fO/qOSO7+%{OCQOSO,5:xO#8vOrO,59yO#:cOSO,5:aO#:gO!lO'#FxOXXO1G2p1G2pO#3gOSO7+&TOXOS7+$[7+$[O7iOSO7+$[OXOW7+%g7+%gONUOSO7+$[OXOS,5<],5<]OXOS-E9o-E9oOXOS7+&U7+&UO#<cOSO'#GRO#<jOSO(3DUOXOS,5=^,5=^O#<tO`O,5=^OXOS1G0n1G0nO5eO!fO7+$TOXOS7+$T7+$TO#<xOSO'#GSO#=POSO(3DVOXOS,5=`,5=`OXOS1G0t1G0tO5lOSO,5=`OXOS,5<`,5<`OXOS-E9r-E9rO#=ZOSO7+&^O5eO!fO7+&^O/qOSO1G2{O/qOSO1G2|O#=_OSO1G0wO#?QOSO1G0wO#?UOSO1G0wO#@wO!fO1G2{OXOS7+&a7+&aO5eO!fO7+&kOYOSO7+&mO#A[OSO'#GUOXOS'#Gw'#GwOXOS(3DX(3DXO#D]OSO,5;lO/qOSO'#FRO#DaOSO'#FTOXOS7+&v7+&vO#DeOSO7+&vO6UOSO7+&vOXOS7+&z7+&zOXOS7+'O7+'OOXOS7+'R7+'ROXOS1G2u1G2uO#GoOrO1G.|O#IXOSO1G.|OXOS1G/^1G/^O#IcOrO1G/^O7iOSO1G/^OCQOSO,5=OOXOS,5<W,5<WOCQOSO'#DWOXOS-E9j-E9jOXOS,5<Z,5<ZOXOS-E9m-E9mONUOSO1G/^OXOS3)/Y3)/YOXO`,5<Y,5<YO7iOSO,5:^ONUOSO,5:^OXOW1G/w1G/wO!,hO`O,5:^O#J{O`O,5:^OXOW7+%`7+%`O#3gOSO7+%`OXOW7+%f7+%fO7iOSO7+%fOXOS,5<X,5<XO#KYOYO-E9kO/qOSO,5<XOXOS1G2v1G2vO#LrOrO'#GkO#N_OrO1G0QO$ zOrO1G0QO$#gOrO1G0QO$%SOrO1G0QO$&oOrO1G0QO$([OrO1G0QO$)wOrO1G0QO$+dOrO1G0QO$-POrO1G0QO$.lOrO1G0QO$0XOrO1G0QO$1tOrO1G0aO$3ZO!lO<<IgO$5VOrO1G0dO#7WOSO1G/{OXOS<<Io<<IoOXOS<<Gv<<GvO7iOSO<<GvOXOS,5<^,5<^O$6rOSO-E9pOXOS'#Ej'#EjO$6|OSO1G2xOXOS<<Go<<GoOXOS,5<_,5<_OXOS-E9q-E9qO$7TOSO,5<_O#!TOSO1G2zO$7XOSO<<IxOXOS<<Ix<<IxO$7]OSO7+(gO$7aOSO7+(hOXOS7+&c7+&cO$7eOSO7+&cO$7iOSO7+&cO$9[OSO7+&cO/qOSO7+(gO/qOSO7+(hOXOS<<JV<<JVOXOS<<JX<<JXOXOS,5<a,5<aOXOS1G1W1G1WO$9`OSO,5;mOXOS,5;o,5;oO7iOSO<<JbO$9dOSO<<JbOCQOSO7+$hOXOS7+$x7+$xO$9hOrO1G2jO7iOSO7+$xOXO`1G/x1G/xO7iOSO1G/xONUOSO1G/xO!,hO`O1G/xOXOW<<Hz<<HzOXOW<<IQ<<IQO$;QOYO3)/VO$<jOrO'#FxOCQOSO'#FiOCQOSO7+%{OXOSAN=bAN=bO$>VO`O1G1xOXOS7+(d7+(dO5lOSO1G1yOXOS7+(f7+(fO5eO!fOAN?dOXOS<<LR<<LROXOS<<LS<<LSOXOS<<I}<<I}O$>ZOSO<<I}O$>_OSO<<I}O$@QOSO<<LRO$@UOSO<<LSOXOS1G1X1G1XOXOSAN?|AN?|O7iOSOAN?|O$@YOrO<<HSOXOS<<Hd<<HdOXO`7+%d7+%dO7iOSO7+%dONUOSO7+%dO$ArOrO-E9gO$C_OrO<<IgOXOS'#Ek'#EkOXOS8;$v8;$vOXOS8;$w8;$wOXOSG25OG25OOXOSAN?iAN?iO$DzOSOAN?iOXOSANAmANAmOXOSANAnANAnO$EOOSOG25hOXO`<<IO<<IOO7iOSO<<IOOXOSG25TG25TO7iOSOLD+SOXO`AN>jAN>jOXOS!$'Nn!$'Nn",
  stateData: "$HeSOSTOS%QOS~WjOZ^O[bO_hO`gOcXOfROiVOl^Os^Ot^Ou^Ov^Ow^O!SeO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!_WO!`WO!cfO#XiO#YiO#ZiO#akO#dlO#jmO#lnO#noO#ppO#sqO#yrO#}sO$PtO$RuO$UvO$WwO%SQO%]UO~WjOZ^O[bO_hO`gOcXOfROiVOl^Os^Ot^Ou^Ov^Ow^O!SeO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!_WO!`WO!cfO#XiO#YiO#ZiO#akO#dlO#jmO#lnO#noO#ppO#sqO#yrO#}sO$PtO$RuO$UvO$WwO%SQO%]UO$y$jX~RrX[rXcrXfrXm$SXnrXqrX!`rX!kaX!mrX!orX!prX!qrX!rrX!srX!trX!urX!vrX!wrX!xrX!yrX!zrX!{rX!|rX#OrX#RrX${rX%]rX~Z^O_!YO`!XOcXOd!UOfROi!QOl^Oq|Os^Ot^Ou^Ov^Ow^O!SeO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!_WO!`WO!c!WO%SyO%]UOg$mPg%VP~R!mOc!^Of!`Oq![O!`!cO!m!_O!o!aO!p!bO!q!bO!r!bO!s!dO!t!eO!u!eO!v!eO!w!fO!x!gO!y!hO!z!iO!{!jO!|!kO#O!lO%]UO[%_X${%_X!U%_Xg%_X%`%_Xi%_Xm%_X~$|!rO$}!qO%O$kP~WjOZ^O[bO_hO`gOcXOfROiVOl^Os^Ot^Ou^Ov^Ow^O!SeO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!_WO!`WO!cfO#XiO#YiO#ZiO#akO#dlO#jmO#lnO#noO#ppO#sqO#yrO#}sO$PtO$RuO$UvO$WwO%SQO%]UO!Q$nP~Z^O_!YO`!XOcXOfROi!QOl^Os^Ot^Ou^Ov^Ow^O!SeO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!_WO!`WO!c!WO%SyO%]UO~Z^O_!YO`!XOcXOd!UOfROi!QOl^Os^Ot^Ou^Ov^Ow^O!SeO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!_WO!`WO!c!WO%SyO%]UO!U%VP~!k!zO~n!{O#R!{OR%[X[%[Xc%[Xf%[Xq%[X!`%[X!m%[X!o%[X!p%[X!q%[X!r%[X!s%[X!t%[X!u%[X!v%[X!w%[X!x%[X!y%[X!z%[X!{%[X!|%[X#O%[X${%[X%]%[Xg%[X!U%[X%`%[Xi%[Xm%[X~n!{O~m!|O~[!}O${!}O~%S#QO~c#TO%S#QO%T#SO~`#YOc#TO%S#QO~f#ZOi#[O%S#QO~]#bO_#`O`gOi#_O!cfO#XiO#YiO#ZiO%T#SO~Z#iOi#eO%S#QO%T#SOY%gP~c#jO!W#nO~c#oO~iVO~[!}O$z#wO${!}O~[!}O$z#zO${!}O~[!}O$z#|O${!}O~RrXcrXfrXgaXgrXnaXnrXqaXqrX!`rX!kaX!mrX!orX!prX!qrX!rrX!srX!trX!urX!vrX!wrX!xrX!yrX!zrX!{rX!|rX#OrX#RrX%]rX[rX${rX!UaX!UrX%`rX#hrXirXmrX~g$OO~q|Og$mX~Z^O_!YO`!XOcXOfROi!QOl^Os^Ot^Ou^Ov^Ow^O!SeO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!_WO!`WO!c!WO%SyO%]UOg$^Zq$^Z~R!mOc!^Of!`Oq|O!`!cO!m!_O!o!aO!p!bO!q!bO!r!bO!s!dO!t!eO!u!eO!v!eO!w!fO!x!gO!y!hO!z!iO!{!jO!|!kO#O!lO%]UOg$mP~g$SOg$SO~Z$WOd$ZOf$VOl$WO{$aO|$YO}$YO%T#SO%Z$TO!Q%YP!Q%bP~g%XXn%XXq%XX!k!jX!U%XX!Q%XX~n!{Og%XXq%XX!U%XX~n$bOg%WXq%WX!U%WX[%WX${%WX~q$eOg$sP!U$sP~i$gO!d$iO%S#QO~q![O[$lX${$lX!U$lXg$lXi$lXm$lX~Z^O_!YO`!XOcXOd$qOfROi!QOl^Os^Ot^Ou^Ov^Ow^O!SeO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!_WO!`WO!c!WO%SyO%]UO!U%dP~%Z$sO~Z^O_!YO`!XOcXOfROi!QOl^Os^Ot^Ou^Ov^Ow^O!S%XO!W%SO!X%SO!Y%SO!Z%SO![%SO!]%SO!^%SO!_%SO!`%SO!c!WO%S%RO%]UO~$|!rO$}!qO%O$kX~%O%[O~WjOZ^O[bO_hO`gOcXOfROiVOl^Os^Ot^Ou^Ov^Ow^O!SeO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!_WO!`WO!cfO#XiO#YiO#ZiO#akO#dlO#jmO#lnO#noO#ppO#sqO#yrO#}sO$PtO$RuO$UvO$WwO%SQO%]UO!Q$nX~!Q%^O~c!^Of!`O!m!_O%]UOR!Va[!Vaq!Va!`!Va!o!Va!p!Va!q!Va!r!Va!s!Va!t!Va!u!Va!v!Va!w!Va!x!Va!y!Va!z!Va!{!Va!|!Va#O!Va${!Vag!Va!U!Va%`!Vai!Vam!Va~!U%_O~!U%`O~Z^O_!YO`!XOcXOfROiVOl^Os^Ot^Ou^Ov^Ow^O!SeO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!_WO!`WO!c!WO%SyO%]UO~R!mOc!^Of!`O!`!cO!m!_O!o!aO!p!bO!q!bO!r!bO!s!dO!t!eO!u!eO!v!eO!w!fO!x!gO!y!hO!z!iO!{!jO!|!kO#O!lO%]UO[!Raq!Ra${!Rag!Ra!U!Ra%`!Rai!Ram!Ra~i$gO!d%fO~d!UOf#ZOi#[O%S#QO!U%VP~c#TO~!k%jO~d!UOf#ZOi#[O%S#QOg%VP~Z$^Od%lOl$^O%Z$sO!Q%YP~q%nO[$tP${$tP~%S%pO!Q%fP~`#YO~Y%sO~Z^O_hO`gOcXOfROi!QOl^Os^Ot^Ou^Ov^Ow^O!SeO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!_WO!`WO!cfO%SyO%]UO~Y%sO[!}O${!}O~%S%vO!Q%hP~q%{OY$wP~#]%}O~Y&OO~Z^O[&SO_!YO`!XOcXOfROi!QOl^Os^Ot^Ou^Ov^Ow^O!SeO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!_WO!`WO!c!WO#X&UO#Y&UO#Z&UO%SyO%]UO~c#jO~#j&ZO~i&]O~#z&`O#{&_OW#xaZ#xa[#xa_#xa`#xac#xaf#xai#xal#xas#xat#xau#xav#xaw#xa!S#xa!W#xa!X#xa!Y#xa!Z#xa![#xa!]#xa!^#xa!_#xa!`#xa!c#xa#X#xa#Y#xa#Z#xa#a#xa#d#xa#j#xa#l#xa#n#xa#p#xa#s#xa#y#xa#}#xa$P#xa$R#xa$U#xa$W#xa$y#xa%S#xa%]#xa!Q#xa#q#xa]#xa#v#xa~%S&cO~R!mOc!^Of!`O!`!cO!m!_O!o!aO!p!bO!q!bO!r!bO!s!dO!t!eO!u!eO!v!eO!w!fO!x!gO!y!hO!z!iO!{!jO!|!kO#O!lO%]UOg$^cq$^c~c!OXmkXm!OXnkXqkXq!OX!QkX!Q!OX~m&hOn&gOc%cXm%cXqjXq%cX!QjX!Q%cX~c#TOm&jOqzX!QzX~Z$UOf$VOl$UO%Z&kO~q&rO!Q$oP~!Q&tO!Q&tO~m&hOn&gOqjX!QjX~q&vO!Q$rP~!Q&xO~Z$UOf$VOl$UO|&yO}&yO%T#SO%Z&kO~q$eOg$sX!U$sX~d&}Of#ZOi#[O%S#QOg$dZq$dZ!U$dZ~['SO{'UO|'RO}'RO!g'VO%T#SO%Z&kO!Q$qP~i$gO!d'YO~R!mOc!^Of!`O!`!cO!m!_O!o!aO!p!bO!q!bO!r!bO!s!dO!t!eO!u!eO!v!eO!w!fO!x!gO!y!hO!z!iO!{!jO!|!kO#O!lO%]UO[$]cq$]c${$]c!U$]cg$]c%`$]ci$]cm$]c~R!mOc!^Of!`Oq'_O!`!cO!m!_O!o!aO!p!bO!q!bO!r!bO!s!dO!t!eO!u!eO!v!eO!w!fO!x!gO!y!hO!z!iO!{!jO!|!kO#O!lO%]UO!U$pP~!U'bO~g'cO~R!mOc!^Of!`O!m!_O%]UO[!niq!ni!`!ni!o!ni!p!ni!q!ni!r!ni!s!ni!t!ni!u!ni!v!ni!w!ni!x!ni!y!ni!z!ni!{!ni!|!ni#O!ni${!nig!ni!U!ni%`!nii!nim!ni~R!mOc!^Of!`O!m!_O!o!aO%]UO[!niq!ni!`!ni!p!ni!q!ni!r!ni!s!ni!t!ni!u!ni!v!ni!w!ni!x!ni!y!ni!z!ni!{!ni!|!ni#O!ni${!nig!ni!U!ni%`!nii!nim!ni~R!mOc!^Of!`O!m!_O!o!aO!p!bO!q!bO!r!bO%]UO[!niq!ni!`!ni!s!ni!t!ni!u!ni!v!ni!w!ni!x!ni!y!ni!z!ni!{!ni!|!ni#O!ni${!nig!ni!U!ni%`!nii!nim!ni~R!mOc!^Of!`O!`!cO!m!_O!o!aO!p!bO!q!bO!r!bO%]UO[!niq!ni!s!ni!t!ni!u!ni!v!ni!w!ni!x!ni!y!ni!z!ni!{!ni!|!ni#O!ni${!nig!ni!U!ni%`!nii!nim!ni~R!mOc!^Of!`O!`!cO!m!_O!o!aO!p!bO!q!bO!r!bO!s!dO%]UO[!niq!ni!t!ni!u!ni!v!ni!w!ni!x!ni!y!ni!z!ni!{!ni!|!ni#O!ni${!nig!ni!U!ni%`!nii!nim!ni~R!mOc!^Of!`O!`!cO!m!_O!o!aO!p!bO!q!bO!r!bO!s!dO!t!eO!u!eO!v!eO%]UO[!niq!ni!w!ni!x!ni!y!ni!z!ni!{!ni!|!ni#O!ni${!nig!ni!U!ni%`!nii!nim!ni~R!mOc!^Of!`O!`!cO!m!_O!o!aO!p!bO!q!bO!r!bO!s!dO!t!eO!u!eO!v!eO!w!fO%]UO[!niq!ni!x!ni!y!ni!z!ni!{!ni!|!ni#O!ni${!nig!ni!U!ni%`!nii!nim!ni~R!mOc!^Of!`O!`!cO!m!_O!o!aO!p!bO!q!bO!r!bO!s!dO!t!eO!u!eO!v!eO!w!fO!x!gO%]UO[!niq!ni!y!ni!z!ni!{!ni!|!ni#O!ni${!nig!ni!U!ni%`!nii!nim!ni~R!mOc!^Of!`O!`!cO!m!_O!o!aO!p!bO!q!bO!r!bO!s!dO!t!eO!u!eO!v!eO!w!fO!x!gO!y!hO%]UO[!niq!ni!z!ni!{!ni!|!ni#O!ni${!nig!ni!U!ni%`!nii!nim!ni~R!mOc!^Of!`O!`!cO!m!_O!o!aO!p!bO!q!bO!r!bO!s!dO!t!eO!u!eO!v!eO!w!fO!x!gO!y!hO!z!iO%]UO[!niq!ni!{!ni!|!ni#O!ni${!nig!ni!U!ni%`!nii!nim!ni~R!mOc!^Of!`O!`!cO!m!_O!o!aO!p!bO!q!bO!r!bO!s!dO!t!eO!u!eO!v!eO!w!fO!x!gO!y!hO!z!iO!{!jO%]UO[!niq!ni!|!ni#O!ni${!nig!ni!U!ni%`!nii!nim!ni~RrXcrXfrXnrX!`rX!kaX!mrX!orX!prX!qrX!rrX!srX!trX!urX!vrX!wrX!xrX!yrX!zrX!{rX!|rX#OrX#PrX#RrX%]rXnaXqaXqrX!QaX!QrX~!k'eO~R!mOc!^Of!`O!`'hO!m!_O!o'fO!p'gO!q'gO!r'gO!s'iO!t'jO!u'jO!v'jO!w'kO!x'lO!y'mO!z'nO!{'oO!|'pO#O!lO#P'qO%]UO~n'rO#R'rOR%[Xc%[Xf%[X!`%[X!m%[X!o%[X!p%[X!q%[X!r%[X!s%[X!t%[X!u%[X!v%[X!w%[X!x%[X!y%[X!z%[X!{%[X!|%[X#O%[X#P%[X%]%[Xq%[X!Q%[X~n'rO~%`'vO~R!mOc!^Of!`O!`!cO!m!_O!o!aO!p!bO!q!bO!r!bO!s!dO!t!eO!u!eO!v!eO!w!fO!x!gO!y!hO!z!iO!{!jO!|!kO#O!lO%]UO[#Qiq#Qi${#Qig#Qi!U#Qi%`#Qii#Qim#Qi~q%nO[$tX${$tX~q(QO#](SO!Q$uP~!Q(TO~Z(UO~qaX!QaX#]rX~q(XO!Q$vP~!Q(ZO~#]([O~q%{OY$wX~i#eO%S#QOY$hZq$hZ~Z(`O~n!{O!u(aO#R!{O#h(bOR%[X[%[Xc%[Xf%[Xq%[X!`%[X!m%[X!o%[X!p%[X!q%[X!r%[X!s%[X!t%[X!v%[X!w%[X!x%[X!y%[X!z%[X!{%[X!|%[X#O%[X%]%[X~n!{O!u(aO#h(bO~Z^O[(cO_!YO`!XOcXOfROi!QOl^Os^Ot^Ou^Ov^Ow^O!SeO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!_WO!`WO!c!WO%SyO%]UO~[(eO~#q(iOW#oiZ#oi[#oi_#oi`#oic#oif#oii#oil#ois#oit#oiu#oiv#oiw#oi!S#oi!W#oi!X#oi!Y#oi!Z#oi![#oi!]#oi!^#oi!_#oi!`#oi!c#oi#X#oi#Y#oi#Z#oi#a#oi#d#oi#j#oi#l#oi#n#oi#p#oi#s#oi#y#oi#}#oi$P#oi$R#oi$U#oi$W#oi$y#oi%S#oi%]#oi!Q#oi]#oi#v#oi~WjOZ^O[bO](oO_hO`gOcXOfROiVOl^Os^Ot^Ou^Ov^Ow^O!SeO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!_WO!`WO!cfO#XiO#YiO#ZiO#akO#dlO#jmO#lnO#noO#ppO#sqO#v(nO#yrO#}sO$PtO$RuO$UvO$WwO%SQO%]UO!Q$xP~c(rOiVO~g(vO~R!mOc!^Of!`O!`'hO!m!_O!o'fO!p'gO!q'gO!r'gO!s'iO!t'jO!u'jO!v'jO!w'kO!x'lO!y'mO!z'nO!{'oO!|'pO#O!lO%]UOqza!Qza~n'rOq%XX!Q%XX~n(|Oq%WX!Q%WX~q&rO!Q$oX~Z$UOd)OOf$VOl$UO{$aO|$YO}$YO%T#SO%Z&kOq$`Z!Q$`Z~q&vO!Q$rX~Z$^Od%lOl$^O%Z$sOq$cZ!Q$cZ~R!mOc!^Of!`O!`!cO!m!_O!o!aO!p!bO!q!bO!r!bO!s!dO!t!eO!u!eO!v!eO!w!fO!x!gO!y!hO!z!iO!{!jO!|!kO#O!lO%]UOg%Wiq%Wi!U%Wi[%Wi${%Wi~['SO{'UO|'RO}'RO!g'VO%T#SO%Z&kO!Q$qX~!Q)XO~|)YO})YO%T#SO%Z&kO~{)ZO|)YO})YO%T#SO%Z&kO~i$gO~q'_O!U$pX~Z^O_!YO`!XOcXOd)bOfROi!QOl^Os^Ot^Ou^Ov^Ow^O!SeO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!_WO!`WO!c!WO%SyO%]UOq$aZ!U$aZ~c!^Of!`O!m!_O%]UOR!Va!`!Va!o!Va!p!Va!q!Va!r!Va!s!Va!t!Va!u!Va!v!Va!w!Va!x!Va!y!Va!z!Va!{!Va!|!Va#O!Va#P!Vaq!Va!Q!Va~Z^O_!YO`!XOcXOfROiVOl^Os^Ot^Ou^Ov^Ow^O!S%XO!W%SO!X%SO!Y%SO!Z%SO![%SO!]%SO!^%SO!_%SO!`%SO!c!WO%S%RO%]UO~R!mOc!^Of!`O!`'hO!m!_O!o'fO!p'gO!q'gO!r'gO!s'iO!t'jO!u'jO!v'jO!w'kO!x'lO!y'mO!z'nO!{'oO!|'pO#O!lO%]UO#P!Raq!Ra!Q!Ra~!k)sO~q![O%`$lXR$lX[$lXc$lXf$lX!`$lX!m$lX!o$lX!p$lX!q$lX!r$lX!s$lX!t$lX!u$lX!v$lX!w$lX!x$lX!y$lX!z$lX!{$lX!|$lX#O$lX${$lX%]$lXg$lX!U$lXi$lXm$lX~q(QO!Q$uX~%S%pOq$fZ!Q$fZ~%Z)yO~q(XO!Q$vX~%S%vOq$gZ!Q$gZ~Y*QO~Z^O_!YO`!XOcXOfROi!QOl^Os^Ot^Ou^Ov^Ow^O!SeO!U*UO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!_WO!`WO!c!WO%SyO%]UO~[*WO~Z^O[*WO_!YO`!XOcXOfROi!QOl^Os^Ot^Ou^Ov^Ow^O!SeO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!_WO!`WO!c!WO%SyO%]UO~n$bO!u*YO#h*ZO[%WXq%WX${%WX~WjOZ^O[bO](oO_hO`gOcXOfROiVOl^Os^Ot^Ou^Ov^Ow^O!SeO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!_WO!`WO!cfO#XiO#YiO#ZiO#akO#dlO#jmO#lnO#noO#ppO#sqO#v(nO#yrO#}sO$PtO$RuO$UvO$WwO%SQO%]UO!Q$xX~!Q*_O~m*aO~#{*bOW#xqZ#xq[#xq_#xq`#xqc#xqf#xqi#xql#xqs#xqt#xqu#xqv#xqw#xq!S#xq!W#xq!X#xq!Y#xq!Z#xq![#xq!]#xq!^#xq!_#xq!`#xq!c#xq#X#xq#Y#xq#Z#xq#a#xq#d#xq#j#xq#l#xq#n#xq#p#xq#s#xq#y#xq#}#xq$P#xq$R#xq$U#xq$W#xq$y#xq%S#xq%]#xq!Q#xq#q#xq]#xq#v#xq~R!mOc!^Of!`O!`'hO!m!_O!o'fO!p'gO!q'gO!r'gO!s'iO!t'jO!u'jO!v'jO!w'kO!x'lO!y'mO!z'nO!{'oO!|'pO#O!lO%]UOqji!Qji~n*dOqji!Qji~R!mOc!^Of!`O!`'hO!m!_O!o'fO!p'gO!q'gO!r'gO!s'iO!t'jO!u'jO!v'jO!w'kO!x'lO!y'mO!z'nO!{'oO!|'pO#O!lO%]UOqzi!Qzi~|*kO}*kO%T#SO%Z&kO~R!mOc!^Of!`O!`!cO!m!_O!o!aO!p!bO!q!bO!r!bO!s!dO!t!eO!u!eO!v!eO!w!fO!x!gO!y!hO!z!iO!{!jO!|!kO#O!lO%]UOq$ac!U$ac~R!mOc!^Of!`Oq*pO!`'hO!m!_O!o'fO!p'gO!q'gO!r'gO!s'iO!t'jO!u'jO!v'jO!w'kO!x'lO!y'mO!z'nO!{'oO!|'pO#O!lO%]UO#P%_X!Q%_X~R!mOc!^Of!`O!m!_O%]UO!`!ni!o!ni!p!ni!q!ni!r!ni!s!ni!t!ni!u!ni!v!ni!w!ni!x!ni!y!ni!z!ni!{!ni!|!ni#O!ni#P!niq!ni!Q!ni~R!mOc!^Of!`O!m!_O!o'fO%]UO!`!ni!p!ni!q!ni!r!ni!s!ni!t!ni!u!ni!v!ni!w!ni!x!ni!y!ni!z!ni!{!ni!|!ni#O!ni#P!niq!ni!Q!ni~R!mOc!^Of!`O!m!_O!o'fO!p'gO!q'gO!r'gO%]UO!`!ni!s!ni!t!ni!u!ni!v!ni!w!ni!x!ni!y!ni!z!ni!{!ni!|!ni#O!ni#P!niq!ni!Q!ni~R!mOc!^Of!`O!`'hO!m!_O!o'fO!p'gO!q'gO!r'gO%]UO!s!ni!t!ni!u!ni!v!ni!w!ni!x!ni!y!ni!z!ni!{!ni!|!ni#O!ni#P!niq!ni!Q!ni~R!mOc!^Of!`O!`'hO!m!_O!o'fO!p'gO!q'gO!r'gO!s'iO%]UO!t!ni!u!ni!v!ni!w!ni!x!ni!y!ni!z!ni!{!ni!|!ni#O!ni#P!niq!ni!Q!ni~R!mOc!^Of!`O!`'hO!m!_O!o'fO!p'gO!q'gO!r'gO!s'iO!t'jO!u'jO!v'jO%]UO!w!ni!x!ni!y!ni!z!ni!{!ni!|!ni#O!ni#P!niq!ni!Q!ni~R!mOc!^Of!`O!`'hO!m!_O!o'fO!p'gO!q'gO!r'gO!s'iO!t'jO!u'jO!v'jO!w'kO%]UO!x!ni!y!ni!z!ni!{!ni!|!ni#O!ni#P!niq!ni!Q!ni~R!mOc!^Of!`O!`'hO!m!_O!o'fO!p'gO!q'gO!r'gO!s'iO!t'jO!u'jO!v'jO!w'kO!x'lO%]UO!y!ni!z!ni!{!ni!|!ni#O!ni#P!niq!ni!Q!ni~R!mOc!^Of!`O!`'hO!m!_O!o'fO!p'gO!q'gO!r'gO!s'iO!t'jO!u'jO!v'jO!w'kO!x'lO!y'mO%]UO!z!ni!{!ni!|!ni#O!ni#P!niq!ni!Q!ni~R!mOc!^Of!`O!`'hO!m!_O!o'fO!p'gO!q'gO!r'gO!s'iO!t'jO!u'jO!v'jO!w'kO!x'lO!y'mO!z'nO%]UO!{!ni!|!ni#O!ni#P!niq!ni!Q!ni~R!mOc!^Of!`O!`'hO!m!_O!o'fO!p'gO!q'gO!r'gO!s'iO!t'jO!u'jO!v'jO!w'kO!x'lO!y'mO!z'nO!{'oO%]UO!|!ni#O!ni#P!niq!ni!Q!ni~R!mOc!^Of!`O!`'hO!m!_O!o'fO!p'gO!q'gO!r'gO!s'iO!t'jO!u'jO!v'jO!w'kO!x'lO!y'mO!z'nO!{'oO!|'pO#O!lO#P*qO%]UO~R!mOc!^Of!`O!`!cO!m!_O!o!aO!p!bO!q!bO!r!bO!s!dO!t!eO!u!eO!v!eO!w!fO!x!gO!y!hO!z!iO!{!jO!|!kO%]UO[!}yq!}y#O!}y${!}yg!}y!U!}y%`!}yi!}ym!}y~R!mOc!^Of!`O!`'hO!m!_O!o'fO!p'gO!q'gO!r'gO!s'iO!t'jO!u'jO!v'jO!w'kO!x'lO!y'mO!z'nO!{'oO!|'pO#O!lO%]UO#P#Qiq#Qi!Q#Qi~#]*sOq$fc!Q$fc~q(QO!Q$uP~#]*uO~Z*wO~!U*xO~!U*yO~!U*zO~Z^O_!YO`!XOcXOfROi!QOl^Os^Ot^Ou^Ov^Ow^O!SeO!U*zO!WWO!XWO!YWO!ZWO![WO!]WO!^WO!_WO!`WO!c!WO%SyO%]UO~[*|O~m+PO~!U+RO~R!mOc!^Of!`O!`'hO!m!_O!o'fO!p'gO!q'gO!r'gO!s'iO!t'jO!u'jO!v'jO!w'kO!x'lO!y'mO!z'nO!{'oO!|'pO#O!lO%]UOq%Wi!Q%Wi~R!mOc!^Of!`O!`!cO!m!_O!o!aO!p!bO!q!bO!r!bO!s!dO!t!eO!u!eO!v!eO!w!fO!x!gO!y!hO!z!iO!{!jO!|!kO#O!lO%]UOq$ak!U$ak~q*pOR$lXc$lXf$lX!`$lX!m$lX!o$lX!p$lX!q$lX!r$lX!s$lX!t$lX!u$lX!v$lX!w$lX!x$lX!y$lX!z$lX!{$lX!|$lX#O$lX#P$lX%]$lX!Q$lX~%Z+ZO~!U+_O~Z^O_!YO`!XOcXOfROi!QOl^Os^Ot^Ou^Ov^Ow^O!SeO!U+_O!WWO!XWO!YWO!ZWO![WO!]WO!^WO!_WO!`WO!c!WO%SyO%]UO~!U+aO~!U+bO~R!mOc!^Of!`O!`'hO!m!_O!o'fO!p'gO!q'gO!r'gO!s'iO!t'jO!u'jO!v'jO!w'kO!x'lO!y'mO!z'nO!{'oO!|'pO#O!lO%]UOqjy!Qjy~R!mOc!^Of!`O!`'hO!m!_O!o'fO!p'gO!q'gO!r'gO!s'iO!t'jO!u'jO!v'jO!w'kO!x'lO!y'mO!z'nO!{'oO!|'pO#O!lO%]UOq$]c#P$]c!Q$]c~R!mOc!^Of!`O!`'hO!m!_O!o'fO!p'gO!q'gO!r'gO!s'iO!t'jO!u'jO!v'jO!w'kO!x'lO!y'mO!z'nO!{'oO!|'pO%]UO#O!}y#P!}yq!}y!Q!}y~!U+fO~#{+gOW#x!ZZ#x!Z[#x!Z_#x!Z`#x!Zc#x!Zf#x!Zi#x!Zl#x!Zs#x!Zt#x!Zu#x!Zv#x!Zw#x!Z!S#x!Z!W#x!Z!X#x!Z!Y#x!Z!Z#x!Z![#x!Z!]#x!Z!^#x!Z!_#x!Z!`#x!Z!c#x!Z#X#x!Z#Y#x!Z#Z#x!Z#a#x!Z#d#x!Z#j#x!Z#l#x!Z#n#x!Z#p#x!Z#s#x!Z#y#x!Z#}#x!Z$P#x!Z$R#x!Z$U#x!Z$W#x!Z$y#x!Z%S#x!Z%]#x!Z!Q#x!Z#q#x!Z]#x!Z#v#x!Z~T%ZS%S%Q!pw~%S%Z~",
  goto: "!$O%lPPPPPPP%mP%}PPPP&pPP'U*`PP-bPP-bP/s/zPPP0S3SP4OPPPPP6[6[8WPPP8^8uP6[P:mP6[PPPPPPPPP;s6[PP>O>bP6[6[>fP@hP6[PPPPPPPPPPPPPP6[PP6[P6[6[6[&pBhPPPB|PCPCS%mPCV%mPC]C]C]P%mP%mP%mP%mPP%mPCcCfPCf%mPPP%mP%mP%mPCj%mP%mP%m%mDQDWD^DiDpDvD|ETEZEaEhEnEuE|FSFYF]F`FdFjFmFpFvFyF|GSGVG]GcGfPPPPPPPPGiPPH_IdIlJWJpPJtPNpNtP!!p!!s!!v!#R!#U!#i!#l!#o!#r!#v!#zmbOPVo!t!|#m#p#q#s&W&](i(jQ#WgQ#ajQ#gkS$Y!Q&rQ$m!XQ%k#YQ&y$aS'R$g'PS)Y'U'VR*k)Zn_OPVjo!t!|#m#p#q#s&W&](i(jR%t#b$pYOPVWehot|!Y![!^!`!a!b!c!d!e!f!g!h!i!j!k!l!q!t!z!{!|#b#j#m#o#p#q#s#w$V$b$i$q%S%X%f%j&S&W&]&g&j'Y'_'e'f'g'h'i'j'k'l'm'n'o'p'q'r(a(b(c(e(i(j(n(|)O)b)s*W*Y*Z*d*p*q*|U!RRX$ZQ#RfQ#Vgf#]i!U#T#Z$e%l%n&U&h&}(rQ#fkQ$j!WQ$l!XS%i#W#YQ%w#eQ']$mQ'{%kQ(^%{Q(_%}Q)}(XQ*P([R+]*u#nZOPRVWXeot|![!^!`!a!b!c!d!e!f!g!h!i!j!k!q!t!z!{!|#b#j#m#o#p#q#s#w$V$b$i$q%f%j&S&W&]'Y'_'q(a(b(c(e(i(j(n)b*W*Y*Z*|Q#UgS#Xh!YQ$k!X!S%T!l$Z%S%X&g&j'e'f'g'h'i'j'k'l'm'n'o'p'r(|)O)s*d*p*qU%h#V#W#YQ&i$XS'[$l$mS'y%i%kQ({&lQ)V'QQ)_']Q)v'{Q*g)SQ*i)WQ+V*jR+e+W#h]OPVWeot|![!^!`!a!b!c!d!e!f!g!h!i!j!k!q!t!z!{!|#b#m#o#p#q#s#w$V$b$i$q%f%j&S&W&]'Y'_'q(a(b(c(e(i(j(n)b*W*Y*Z*|S!SRXf#]i!U#T#Z$e%l%n&U&h&}(r!Q%W!l%S%X&g&j'e'f'g'h'i'j'k'l'm'n'o'p'r(|)O)s*d*p*qQ&R#jR&n$ZS$_!Q#[R)R&vU$^!Q#[&vR$t!_$r^OPRVWXeot|![!^!`!a!b!c!d!e!f!g!h!i!j!k!l!q!t!z!{!|#b#j#m#o#p#q#s#w$V$Z$b$i$q%S%X%f%j&S&W&]&g&j'Y'_'e'f'g'h'i'j'k'l'm'n'o'p'q'r(a(b(c(e(i(j(n(|)O)b)s*W*Y*Z*d*p*q*|#T!oS}!w#P$Q$o$p$v$w$x$y$z${$|$}%O%P%Q%U%b&m&z'a'd's(w(z)a)d)e)f)g)h)i)j)k)l)m)n)o)p)q)r*f*n+S+X+Y!sTOPVXot!`!q!t!z!|#b#j#m#o#p#q#s#w$V$i%f%j&S&W&]'Y'e(a(b(c(e(i(j(n)s*W*Y*Z*|#l[OPRVWXeot|![!^!`!a!b!c!d!e!f!g!h!i!j!k!q!t!z!{!|#b#m#o#p#q#s#w$V$b$i$q%f%j&S&W&]'Y'_'q(a(b(c(e(i(j(n)b*W*Y*Z*|!S%V!l$Z%S%X&g&j'e'f'g'h'i'j'k'l'm'n'o'p'r(|)O)s*d*p*qQ%q#_Q%y#eQ&Q#jQ)x(QR*O(X$s^OPRVWXeot|![!^!`!a!b!c!d!e!f!g!h!i!j!k!l!q!t!z!{!|#b#j#m#o#p#q#s#w$V$Z$b$i$q%S%X%f%j&S&W&]&g&j'Y'_'e'f'g'h'i'j'k'l'm'n'o'p'q'r(a(b(c(e(i(j(n(|)O)b)s*W*Y*Z*d*p*q*|Q$[!QR)P&rY$U!Q$Y$a&r&yS'Q$g'PU)W'R'U'VS*j)Y)ZR+W*klbOPVo!t!|#m#p#q#s&W&](i(jQ#urS%a!z'eQ%g#UQ'Z$kQ'x%hS'z%j)sQ(p&_Q(q&`Q(y&iQ)^'[Q)u'yQ*e({Q*h)VQ*m)_Q*r)vQ+Q*bQ+T*gQ+U*iQ+c+RQ+d+VQ+h+eR+i+g#O!nS}!w$Q$o$p$v$w$x$y$z${$|$}%O%P%Q%U%b&m&z'a'd(w(z)a)d)e)f)g)h)i)j)k)l)m)n)o)p)q)r*f*n+S+X+YT%d#P's$r^OPRVWXeot|![!^!`!a!b!c!d!e!f!g!h!i!j!k!l!q!t!z!{!|#b#j#m#o#p#q#s#w$V$Z$b$i$q%S%X%f%j&S&W&]&g&j'Y'_'e'f'g'h'i'j'k'l'm'n'o'p'q'r(a(b(c(e(i(j(n(|)O)b)s*W*Y*Z*d*p*q*|Q#pmQ#qnQ#spQ#tqR(h&ZQ$h!WQ%e#RQ'X$jQ)['WQ)t'wR*l)]T'S$g'P#nZOPRVWXeot|![!^!`!a!b!c!d!e!f!g!h!i!j!k!q!t!z!{!|#b#j#m#o#p#q#s#w$V$b$i$q%f%j&S&W&]'Y'_'q(a(b(c(e(i(j(n)b*W*Y*Z*|S#Xh!Y!T%T!l$Z%S%X&g&j'e'f'g'h'i'j'k'l'm'n'o'p'r(|)O)s*d*p*q#l[OPRVWXeot|![!^!`!a!b!c!d!e!f!g!h!i!j!k!q!t!z!{!|#b#m#o#p#q#s#w$V$b$i$q%f%j&S&W&]'Y'_'q(a(b(c(e(i(j(n)b*W*Y*Z*|!S%V!l$Z%S%X&g&j'e'f'g'h'i'j'k'l'm'n'o'p'r(|)O)s*d*p*qR&Q#jn_OPVjo!t!|#m#p#q#s&W&](i(jR&S#jR#djR)z(SR+[*sQ#fkR(^%{Q#mlR&W#nR&^#tT(k&](jl`OPVo!t!|#m#p#q#s&W&](i(jQ&d#zR&e#|QPORxPQ!pUR%Y!pQ!ZSU$n!Z'u*oR*o)dS{R}R$P{Q!tVR%]!tQ&q$[R(}&qS'^$p'aR)`'^Q'P$gR)U'PQ&u$_R)Q&uS$d!V$cR&|$dQ%m#^R'|%mS(P%q)zR)w(PS(W%w*PR)|(WQ%z#fR(]%zQ(j&]R*^(jRdOR!sUT!]S)dQ!ORR$R}R!vVR&s$[Q'`$pR)c'aR'T$gR&w$_Q$f!VR&{$cR%o#^Q(R%qR*t)zQ(Y%wR*v*PR%|#fR(m&]ScOPS!uV!tQ#roQ%c!|Q&V#mQ&X#pQ&Y#qQ&[#sQ(g&WS(k&](jR*](iQ#OaQ#vsQ#yuQ#{vQ#}wQ%t#dQ&P#iQ&b#xQ(O%oQ(V%uQ(s&aQ(t&dQ(u&eQ){(UQ*R(`Q*[(hR+^*wSzR#ZT!yX#TW!VRX#T#ZS#^i&UQ$c!US&o$Z%lQ'O$eQ'}%nR)T&}b!TRXi!U#T#Z$e%n&}S&p$Z%lQ(f&UQ(x&hR*c(rT$`!Q#[!nSOPVXot!`!q!t!z!|#b#j#m#o#p#q#s#w$V$i%f%j&S&W&]'Y(a(b(c(e(i(j(n*W*Y*Z*|Q}RQ!wWQ#PeQ$Q|Q$o![Q$p!^Q$v!aQ$w!bQ$x!cQ$y!dQ$z!eQ${!fQ$|!gQ$}!hQ%O!iQ%P!jQ%Q!kQ%U!lQ%b!{S&m$Z)OQ&z$bQ'a$qQ'd%SQ's%XQ(w&gQ(z&jQ)a'_S)d'e)sQ)e'fQ)f'gQ)g'hQ)h'iQ)i'jQ)j'kQ)k'lQ)l'mQ)m'nQ)n'oQ)o'pQ)q'qQ)r'rQ*f(|Q*n)bQ+S*dQ+X*pR+Y*qT!rU!plaOPVo!t!|#m#p#q#s&W&](i(jS!xX#oQ#xtQ$u!`Q%Z!qS%a!z'eQ%u#bQ&T#jQ&a#wQ&f$VQ'W$iQ'w%fS'z%j)sQ(d&SQ)]'YQ*S(aQ*T(bQ*V(cQ*X(eQ*`(nQ*{*WQ*}*YQ+O*ZR+`*|R!PRR$]!QS$X!Q&rS&l$Y$aR)S&yR$r!^lbOPVo!t!|#m#p#q#s&W&](i(jR#cjR%r#_R#hkR%x#eT#kl#nT#ll#nT(l&](j",
  nodeNames: "⚠ Script ⚠ PostfixOp LineComment BlockComment Script ExportDeclaration export Star from String ; default FunctionDeclaration async function VariableDefinition ParamList ( Spread ArrayPattern [ ] ObjectPattern { PatternProperty PropertyName Number : Equals TemplateString SequenceExpression , VariableName BooleanLiteral this null super RegExp ArrayExpression ObjectExpression Property async get set PropertyNameDefinition Block } NewExpression new ArgList ) UnaryExpression await yield void typeof delete LogicOp BitOp ArithOp ArithOp ParenthesizedExpression ClassExpression class extends ClassBody MethodDeclaration static FunctionExpression ArrowFunction ParamList Arrow MemberExpression . BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp in instanceof CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression TaggedTemplatExpression ClassDeclaration VariableDeclaration let var const ExportGroup as VariableName VariableName ImportDeclaration import ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try catch finally ReturnStatement return ThrowStatement throw BreakStatement break Label ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement",
  nodeProps: [
    [lezer.NodeProp.delim, 18,"( )",21,"[ ]",24,"{ }",40,"[ ]",41,"{ }",47,"{ }",51,"( )",63,"( )",67,"{ }",104,"{ }",110,"{ }",113,"( )",128,"{ }"]
  ],
  repeatNodeCount: 15,
  tokenData: "<v~R!SX^$_pq$_qr%Srs%itu&]uv&vvw'Twx'exy(Syz(Xz{(^{|(s|})T}!O)Y!O!P)e!P!Q*u!Q!R5i!R![6c![!]8S!]!^8Z!^!_8`!_!`8x!`!a9b!a!b9x!c!}&]!}#O9}#P#Q:S#Q#R:X#R#S&]#S#T:a#T#o&]#o#p:f#p#q:k#q#r:{#r#s;S#y#z$_$f$g$_$g#BY&]#BY#BZ;X#BZ$IS&]$IS$I_;X$I_$I|&]$I|$JO;X$JO$JT&]$JT$JU;X$JU$KV&]$KV$KW;X$KW&FU&]&FU&FV;X&FV~&]~$dY%Q~X^$_pq$_#y#z$_$f$g$_#BY#BZ$_$IS$I_$_$I|$JO$_$JT$JU$_$KV$KW$_&FU&FV$_~%XP!]~!_!`%[~%aP!w~!_!`%d~%iO!w~~%nUZ~OY%iZr%irs&Qs#O%i#O#P&V#P~%i~&VOZ~~&YPO~%i_&dU%ZS%SZtu&]!Q![&]!c!}&]#R#S&]#T#o&]$g~&]~&{P!q~!_!`'OY'TO#RY~'YQ!z~vw'`!_!`'O~'eO!{~~'jUZ~OY'eZw'ewx&Qx#O'e#O#P'|#P~'e~(PPO~'e~(XOc~~(^O!U~~(eQ%TT!rYz{(k!_!`'O~(pP!o~!_!`'O~(xQ!`~{|)O!_!`'O~)TO!_~~)YOq~~)_Q!`~}!O)O!_!`'O~)jQ!mY!O!P)p!Q![){~)sP!O!P)v~){Od~T*QRlT!Q![){!g!h*Z#X#Y*ZT*^R{|*g}!O*g!Q![*mT*jP!Q![*mT*rPlT!Q![*m~*zZ!pYOY+mZz+mz{-f{!P+m!P!Q3z!Q!_+m!_!`4V!`!}+m!}#O4s#O#P5`#P~+mP+rVwPOY+mZ!P+m!P!Q,X!Q!}+m!}#O,p#O#P-]#P~+mP,^UwP#Z#[,X#]#^,X#a#b,X#g#h,X#i#j,X#m#n,XP,sTOY,pZ#O,p#O#P-S#P#Q+m#Q~,pP-VQOY,pZ~,pP-`QOY+mZ~+m~-kYwPOY-fYZ.ZZz-fz{/O{!P-f!P!Q2v!Q!}-f!}#O0^#O#P2d#P~-f~.^ROz.Zz{.g{~.Z~.jTOz.Zz{.g{!P.Z!P!Q.y!Q~.Z~/OOT~~/TYwPOY-fYZ.ZZz-fz{/O{!P-f!P!Q/s!Q!}-f!}#O0^#O#P2d#P~-f~/zUT~wP#Z#[,X#]#^,X#a#b,X#g#h,X#i#j,X#m#n,X~0aWOY0^YZ.ZZz0^z{0y{#O0^#O#P2Q#P#Q-f#Q~0^~0|YOY0^YZ.ZZz0^z{0y{!P0^!P!Q1l!Q#O0^#O#P2Q#P#Q-f#Q~0^~1qTT~OY,pZ#O,p#O#P-S#P#Q+m#Q~,p~2TTOY0^YZ.ZZz0^z{0y{~0^~2gTOY-fYZ.ZZz-fz{/O{~-f~2{_wPOz.Zz{.g{#Z.Z#Z#[2v#[#].Z#]#^2v#^#a.Z#a#b2v#b#g.Z#g#h2v#h#i.Z#i#j2v#j#m.Z#m#n2v#n~.Z~4PQS~OY3zZ~3zZ4^V#RYwPOY+mZ!P+m!P!Q,X!Q!}+m!}#O,p#O#P-]#P~+mP4vTOY4sZ#O4s#O#P5V#P#Q+m#Q~4sP5YQOY4sZ~4sP5cQOY+mZ~+mT5nVlT!O!P6T!Q![6c!g!h*Z#U#V6t#X#Y*Z#c#d7Y#l#m7hT6YRlT!Q![6T!g!h*Z#X#Y*ZT6hSlT!O!P6T!Q![6c!g!h*Z#X#Y*ZT6wQ!Q!R6}!R!S6}T7SQlT!Q!R6}!R!S6}T7]P!Q!Y7`T7ePlT!Q!Y7`T7kR!Q![7t!c!i7t#T#Z7tT7yRlT!Q![7t!c!i7t#T#Z7tZ8ZOmR#PW~8`O[~~8eQ!t~!^!_8k!_!`8s~8pP!s~!_!`'O~8xO!t~~8}Qn~!_!`9T!`!a9]~9YP!w~!_!`%d~9bO!k~~9gQ!t~!_!`8s!`!a9m~9rQ!s~!_!`'O!`!a8k~9}O#O~~:SOf~~:XOg~~:^P!y~!_!`'O~:fO%]~~:kOi~~:pQ!x~!_!`'O#p#q:v~:{O!|~_;SO!Q]%`Q~;XO!^~~;bf%ZS%SZ%Q~X^$_pq$_tu&]!Q![&]!c!}&]#R#S&]#T#o&]#y#z$_$f$g$_$g#BY&]#BY#BZ;X#BZ$IS&]$IS$I_;X$I_$I|&]$I|$JO;X$JO$JT&]$JT$JU;X$JU$KV&]$KV$KW;X$KW&FU&]&FU&FV;X&FV~&]",
  tokenizers: [noSemicolon, postfix, 0, 1, 2, 3, insertSemicolon, template],
  specializeTable: 8160,
  specializations: [{export:16, from:21, default:26, async:31, function:32, true:70, false:70, this:72, null:74, super:76, new:100, await:109, yield:111, void:112, typeof:114, delete:116, class:130, extends:132, in:166, instanceof:168, let:202, var:204, const:206, as:211, import:218, for:224, of:233, while:236, with:240, do:244, if:248, else:250, switch:254, case:260, try:266, catch:268, finally:270, return:274, throw:278, break:282, continue:288, debugger:292},
   {async:87, get:89, set:91, static:139}],
  tokenPrec: 8152
});

exports.parser = parser;


/***/ }),

/***/ "./node_modules/lezer-tree/dist/tree.js":
/*!**********************************************!*\
  !*** ./node_modules/lezer-tree/dist/tree.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/// The default maximum length of a `TreeBuffer` node.
exports.DefaultBufferLength = 1024;
var Iteration = /** @class */ (function () {
    function Iteration(enter, leave) {
        this.enter = enter;
        this.leave = leave;
        this.result = undefined;
    }
    Object.defineProperty(Iteration.prototype, "done", {
        get: function () { return this.result !== undefined; },
        enumerable: true,
        configurable: true
    });
    Iteration.prototype.doEnter = function (type, start, end) {
        var value = this.enter(type, start, end);
        if (value === undefined)
            return true;
        if (value !== false)
            this.result = value;
        return false;
    };
    return Iteration;
}());
var nextPropID = 0;
/// Each [node type](#tree.NodeType) can have metadata associated with
/// it in props. Instances of this class represent prop names.
var NodeProp = /** @class */ (function () {
    /// Create a new node prop type. You can optionally pass a
    /// `deserialize` function.
    function NodeProp(_a) {
        var deserialize = (_a === void 0 ? {} : _a).deserialize;
        this.id = nextPropID++;
        this.deserialize = deserialize || (function () {
            throw new Error("This node type doesn't define a deserialize function");
        });
    }
    /// Create a string-valued node prop whose deserialize function is
    /// the identity function.
    NodeProp.string = function () { return new NodeProp({ deserialize: function (str) { return str; } }); };
    /// Create a number-valued node prop whose deserialize function is
    /// just `Number`.
    NodeProp.number = function () { return new NodeProp({ deserialize: Number }); };
    /// Creates a boolean-valued node prop whose deserialize function
    /// returns true for any input.
    NodeProp.flag = function () { return new NodeProp({ deserialize: function () { return true; } }); };
    /// Store a value for this prop in the given object. This can be
    /// useful when building up a prop object to pass to the
    /// [`NodeType`](#tree.NodeType) constructor. Returns its first
    /// argument.
    NodeProp.prototype.set = function (propObj, value) {
        propObj[this.id] = value;
        return propObj;
    };
    /// This is meant to be used with
    /// [`NodeGroup.extend`](#tree.NodeGroup.extend) or
    /// [`Parser.withProps`](#lezer.Parser.withProps) to compute prop
    /// values for each node type in the group. Takes a [match
    /// object](#tree.NodeType.match) or function that returns undefined
    /// if the node type doesn't get this prop, and the prop's value if
    /// it does.
    NodeProp.prototype.add = function (match) {
        return new NodePropSource(this, typeof match == "function" ? match : NodeType.match(match));
    };
    /// The special node type that the parser uses to represent parse
    /// errors has this flag set. (You shouldn't use it for custom nodes
    /// that represent erroneous content.)
    NodeProp.error = NodeProp.flag();
    /// Nodes that were produced by skipped expressions (such as
    /// comments) have this prop set to true.
    NodeProp.skipped = NodeProp.flag();
    /// Prop that is used to describe a rule's delimiters. For example,
    /// a parenthesized expression node would set this to the string `"(
    /// )"` (the open and close strings separated by a space). This is
    /// added by the parser generator's `@detectDelim` feature, but you
    /// can also manually add them.
    NodeProp.delim = NodeProp.string();
    /// Indicates that this node indicates a top level document.
    NodeProp.top = NodeProp.flag();
    return NodeProp;
}());
exports.NodeProp = NodeProp;
/// Type returned by [`NodeProp.add`](#tree.NodeProp.add). Describes
/// the way a prop should be added to each node type in a node group.
var NodePropSource = /** @class */ (function () {
    /// @internal
    function NodePropSource(
    /// @internal
    prop, 
    /// @internal
    f) {
        this.prop = prop;
        this.f = f;
    }
    return NodePropSource;
}());
exports.NodePropSource = NodePropSource;
/// Each node in a syntax tree has a node type associated with it.
var NodeType = /** @class */ (function () {
    /// @internal
    function NodeType(
    /// The name of the node type. Not necessarily unique, but if the
    /// grammar was written properly, different node types with the
    /// same name within a node group should play the same semantic
    /// role.
    name, 
    /// @internal
    props, 
    /// The id of this node in its group. Corresponds to the term ids
    /// used in the parser.
    id) {
        this.name = name;
        this.props = props;
        this.id = id;
    }
    /// Retrieves a node prop for this type. Will return `undefined` if
    /// the prop isn't present on this node.
    NodeType.prototype.prop = function (prop) { return this.props[prop.id]; };
    /// Create a function from node types to arbitrary values by
    /// specifying an object whose property names are node names. Often
    /// useful with [`NodeProp.add`](#tree.NodeProp.add). You can put
    /// multiple node names, separated by spaces, in a single property
    /// name to map multiple node names to a single value.
    NodeType.match = function (map) {
        var direct = Object.create(null);
        for (var prop in map)
            for (var _i = 0, _a = prop.split(" "); _i < _a.length; _i++) {
                var name = _a[_i];
                direct[name] = map[prop];
            }
        return function (node) { return direct[node.name]; };
    };
    /// An empty dummy node type to use when no actual type is available.
    NodeType.none = new NodeType("", Object.create(null), 0);
    return NodeType;
}());
exports.NodeType = NodeType;
/// A node group holds a collection of node types. It is used to
/// compactly represent trees by storing their type ids, rather than a
/// full pointer to the type object, in a number array. Each parser
/// [has](#lezer.Parser.group) a node group, and [tree
/// buffers](#tree.TreeBuffer) can only store collections of nodes
/// from the same group. A group can have a maximum of 2**16 (65536)
/// node types in it, so that the ids fit into 16-bit typed array
/// slots.
var NodeGroup = /** @class */ (function () {
    /// Create a group with the given types. The `id` property of each
    /// type should correspond to its position within the array.
    function NodeGroup(
    /// The node types in this group, by id.
    types) {
        this.types = types;
        for (var i = 0; i < types.length; i++)
            if (types[i].id != i)
                throw new RangeError("Node type ids should correspond to array positions when creating a node group");
    }
    /// Create a copy of this group with some node properties added. The
    /// arguments to this method should be created with
    /// [`NodeProp.add`](#tree.NodeProp.add).
    NodeGroup.prototype.extend = function () {
        var props = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            props[_i] = arguments[_i];
        }
        var newTypes = [];
        for (var _a = 0, _b = this.types; _a < _b.length; _a++) {
            var type = _b[_a];
            var newProps = null;
            for (var _c = 0, props_1 = props; _c < props_1.length; _c++) {
                var source = props_1[_c];
                var value = source.f(type);
                if (value !== undefined) {
                    if (!newProps) {
                        newProps = Object.create(null);
                        for (var prop in type.props)
                            newProps[prop] = type.props[prop];
                    }
                    newProps[source.prop.id] = value;
                }
            }
            newTypes.push(newProps ? new NodeType(type.name, newProps, type.id) : type);
        }
        return new NodeGroup(newTypes);
    };
    return NodeGroup;
}());
exports.NodeGroup = NodeGroup;
/// A subtree is a representation of part of the syntax tree. It may
/// either be the tree root, or a tagged node.
var Subtree = /** @class */ (function () {
    function Subtree() {
    }
    Object.defineProperty(Subtree.prototype, "name", {
        // Shorthand for `.type.name`.
        get: function () { return this.type.name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Subtree.prototype, "depth", {
        /// The depth (number of parent nodes) of this subtree
        get: function () {
            var d = 0;
            for (var p = this.parent; p; p = p.parent)
                d++;
            return d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Subtree.prototype, "root", {
        /// The root of the tree that this subtree is part of
        get: function () {
            var cx = this;
            while (cx.parent)
                cx = cx.parent;
            return cx;
        },
        enumerable: true,
        configurable: true
    });
    /// Find the node at a given position. By default, this will return
    /// the lowest-depth subtree that covers the position from both
    /// sides, meaning that nodes starting or ending at the position
    /// aren't entered. You can pass a `side` of `-1` to enter nodes
    /// that end at the position, or `1` to enter nodes that start
    /// there.
    Subtree.prototype.resolve = function (pos, side) {
        if (side === void 0) { side = 0; }
        var result = this.resolveAt(pos);
        // FIXME this is slightly inefficient in that it scans the result
        // of resolveAt twice (but further complicating child-finding
        // logic seems unattractive as well)
        if (side != 0)
            for (;;) {
                var child = (side < 0 ? result.childBefore(pos) : result.childAfter(pos));
                if (!child || (side < 0 ? child.end : child.start) != pos)
                    break;
                result = child;
            }
        return result;
    };
    Object.defineProperty(Subtree.prototype, "firstChild", {
        /// Get the first child of this subtree.
        get: function () { return this.childAfter(this.start - 1); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Subtree.prototype, "lastChild", {
        /// Find the last child of this subtree.
        get: function () { return this.childBefore(this.end + 1); },
        enumerable: true,
        configurable: true
    });
    return Subtree;
}());
exports.Subtree = Subtree;
/// A piece of syntax tree. There are two ways to approach these
/// trees: the way they are actually stored in memory, and the
/// convenient way.
///
/// Syntax trees are stored as a tree of `Tree` and `TreeBuffer`
/// objects. By packing detail information into `TreeBuffer` leaf
/// nodes, the representation is made a lot more memory-efficient.
///
/// However, when you want to actually work with tree nodes, this
/// representation is very awkward, so most client code will want to
/// use the `Subtree` interface instead, which provides a view on some
/// part of this data structure, and can be used (through `resolve`,
/// for example) to zoom in on any single node.
var Tree = /** @class */ (function (_super) {
    __extends(Tree, _super);
    /// @internal
    function Tree(
    /// @internal
    type, 
    /// The tree's child nodes. Children small enough to fit in a
    /// `TreeBuffer` will be represented as such, other children can be
    /// further `Tree` instances with their own internal structure.
    children, 
    /// The positions (offsets relative to the start of this tree) of
    /// the children.
    positions, 
    /// The total length of this tree @internal
    length) {
        var _this = _super.call(this) || this;
        _this.type = type;
        _this.children = children;
        _this.positions = positions;
        _this.length = length;
        return _this;
    }
    Object.defineProperty(Tree.prototype, "start", {
        /// @internal
        get: function () { return 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tree.prototype, "end", {
        /// @internal
        get: function () { return this.length; },
        enumerable: true,
        configurable: true
    });
    /// @internal
    Tree.prototype.toString = function () {
        var children = this.children.map(function (c) { return c.toString(); }).join();
        return !this.name ? children :
            (/\W/.test(this.name) && !this.type.prop(NodeProp.error) ? JSON.stringify(this.name) : this.name) +
                (children.length ? "(" + children + ")" : "");
    };
    Tree.prototype.partial = function (start, end, offset, children, positions) {
        for (var i = 0; i < this.children.length; i++) {
            var from = this.positions[i];
            if (from > end)
                break;
            var child = this.children[i], to = from + child.length;
            if (to < start)
                continue;
            if (start <= from && end >= to) {
                children.push(child);
                positions.push(from + offset);
            }
            else if (child instanceof Tree) {
                child.partial(start - from, end - from, offset + from, children, positions);
            }
        }
    };
    /// Apply a set of edits to a tree, removing all nodes that were
    /// touched by the edits, and moving remaining nodes so that their
    /// positions are updated for insertions/deletions before them. This
    /// is likely to destroy a lot of the structure of the tree, and
    /// mostly useful for extracting the nodes that can be reused in a
    /// subsequent incremental re-parse.
    Tree.prototype.applyChanges = function (changes) {
        if (changes.length == 0)
            return this;
        var children = [], positions = [];
        function cutAt(tree, pos, side) {
            var found = -1;
            tree.iterate({
                from: pos,
                to: side < 0 ? 0 : tree.length,
                enter: function () { return found < 0 ? undefined : false; },
                leave: function (type, start, end) {
                    if (found < 0 && !type.prop(NodeProp.error))
                        found = side < 0 ? Math.min(pos, end - 1) : Math.max(pos, start + 1);
                }
            });
            return found > -1 ? found : side < 0 ? 0 : tree.length;
        }
        var off = 0;
        for (var i = 0, pos = 0;; i++) {
            var next = i == changes.length ? null : changes[i];
            var nextPos = next ? cutAt(this, next.fromA, -1) : this.length;
            if (nextPos > pos)
                this.partial(pos, nextPos, off, children, positions);
            if (!next)
                break;
            pos = cutAt(this, next.toA, 1);
            off += (next.toB - next.fromB) - (next.toA - next.fromA);
        }
        return new Tree(NodeType.none, children, positions, this.length + off);
    };
    /// Take the part of the tree up to the given position.
    Tree.prototype.cut = function (at) {
        if (at >= this.length)
            return this;
        var children = [], positions = [];
        for (var i = 0; i < this.children.length; i++) {
            var from = this.positions[i];
            if (from >= at)
                break;
            var child = this.children[i], to = from + child.length;
            children.push(to <= at ? child : child.cut(at - from));
            positions.push(from);
        }
        return new Tree(this.type, children, positions, at);
    };
    /// @internal
    Tree.prototype.iterate = function (_a) {
        var _b = _a.from, from = _b === void 0 ? this.start : _b, _c = _a.to, to = _c === void 0 ? this.end : _c, enter = _a.enter, leave = _a.leave;
        var iter = new Iteration(enter, leave);
        this.iterInner(from, to, 0, iter);
        return iter.result;
    };
    /// @internal
    Tree.prototype.iterInner = function (from, to, offset, iter) {
        if (this.type.name && !iter.doEnter(this.type, offset, offset + this.length))
            return;
        if (from <= to) {
            for (var i = 0; i < this.children.length && !iter.done; i++) {
                var child = this.children[i], start = this.positions[i] + offset, end = start + child.length;
                if (start > to)
                    break;
                if (end < from)
                    continue;
                child.iterInner(from, to, start, iter);
            }
        }
        else {
            for (var i = this.children.length - 1; i >= 0 && !iter.done; i--) {
                var child = this.children[i], start = this.positions[i] + offset, end = start + child.length;
                if (end < to)
                    break;
                if (start > from)
                    continue;
                child.iterInner(from, to, start, iter);
            }
        }
        if (iter.leave && this.type.name)
            iter.leave(this.type, offset, offset + this.length);
        return;
    };
    /// @internal
    Tree.prototype.resolveAt = function (pos) {
        if (cacheRoot == this) {
            for (var tree = cached;;) {
                var next = tree.parent;
                if (!next)
                    break;
                if (tree.start < pos && tree.end > pos)
                    return tree.resolve(pos);
                tree = next;
            }
        }
        cacheRoot = this;
        return cached = this.resolveInner(pos, 0, this);
    };
    /// @internal
    Tree.prototype.childBefore = function (pos) {
        return this.findChild(pos, -1, 0, this);
    };
    /// @internal
    Tree.prototype.childAfter = function (pos) {
        return this.findChild(pos, 1, 0, this);
    };
    /// @internal
    Tree.prototype.findChild = function (pos, side, start, parent) {
        for (var i = 0; i < this.children.length; i++) {
            var childStart = this.positions[i] + start, select = -1;
            if (childStart >= pos) {
                if (side < 0 && i > 0)
                    select = i - 1;
                else if (side > 0)
                    select = i;
                else
                    break;
            }
            if (select < 0 && (childStart + this.children[i].length > pos || side < 0 && i == this.children.length - 1))
                select = i;
            if (select >= 0) {
                var child = this.children[select], childStart_1 = this.positions[select] + start;
                if (child.length == 0 && childStart_1 == pos)
                    continue;
                if (child instanceof Tree) {
                    if (child.type.name)
                        return new NodeSubtree(child, childStart_1, parent);
                    return child.findChild(pos, side, childStart_1, parent);
                }
                else {
                    var found = child.findIndex(pos, side, childStart_1, 0, child.buffer.length);
                    if (found > -1)
                        return new BufferSubtree(child, childStart_1, found, parent);
                }
            }
        }
        return null;
    };
    /// @internal
    Tree.prototype.resolveInner = function (pos, start, parent) {
        var found = this.findChild(pos, 0, start, parent);
        return found ? found.resolveAt(pos) : parent;
    };
    /// Append another tree to this tree. `other` must have empty space
    /// big enough to fit this tree at its start.
    Tree.prototype.append = function (other) {
        if (other.children.length && other.positions[0] < this.length)
            throw new Error("Can't append overlapping trees");
        return new Tree(this.type, this.children.concat(other.children), this.positions.concat(other.positions), other.length);
    };
    /// Balance the direct children of this tree.
    Tree.prototype.balance = function (maxBufferLength) {
        if (maxBufferLength === void 0) { maxBufferLength = exports.DefaultBufferLength; }
        return this.children.length <= BalanceBranchFactor ? this
            : balanceRange(this.type, NodeType.none, this.children, this.positions, 0, this.children.length, 0, maxBufferLength, this.length);
    };
    /// Build a tree from a postfix-ordered buffer of node information,
    /// or a cursor over such a buffer.
    Tree.build = function (data) { return buildTree(data); };
    /// The empty tree
    Tree.empty = new Tree(NodeType.none, [], [], 0);
    return Tree;
}(Subtree));
exports.Tree = Tree;
Tree.prototype.parent = null;
// Top-level `resolveAt` calls store their last result here, so that
// if the next call is near the last, parent trees can be cheaply
// reused.
var cacheRoot = Tree.empty;
var cached = Tree.empty;
/// Tree buffers contain (type, start, end, endIndex) quads for each
/// node. In such a buffer, nodes are stored in prefix order (parents
/// before children, with the endIndex of the parent indicating which
/// children belong to it)
var TreeBuffer = /** @class */ (function () {
    /// Create a tree buffer @internal
    function TreeBuffer(
    /// @internal
    buffer, 
    // The total length of the group of nodes in the buffer.
    length, 
    /// @internal
    group, 
    /// An optional type tag, used to tag a buffer as being part of a
    /// repetition @internal
    type) {
        if (type === void 0) { type = NodeType.none; }
        this.buffer = buffer;
        this.length = length;
        this.group = group;
        this.type = type;
    }
    /// @internal
    TreeBuffer.prototype.toString = function () {
        var parts = [];
        for (var index = 0; index < this.buffer.length;)
            index = this.childToString(index, parts);
        return parts.join(",");
    };
    /// @internal
    TreeBuffer.prototype.childToString = function (index, parts) {
        var id = this.buffer[index], endIndex = this.buffer[index + 3];
        var type = this.group.types[id], result = type.name;
        if (/\W/.test(result) && !type.prop(NodeProp.error))
            result = JSON.stringify(result);
        index += 4;
        if (endIndex > index) {
            var children = [];
            while (index < endIndex)
                index = this.childToString(index, children);
            result += "(" + children.join(",") + ")";
        }
        parts.push(result);
        return index;
    };
    /// @internal
    TreeBuffer.prototype.cut = function (at) {
        var cutPoint = 0;
        while (cutPoint < this.buffer.length && this.buffer[cutPoint + 1] < at)
            cutPoint += 4;
        var newBuffer = new Uint16Array(cutPoint);
        for (var i = 0; i < cutPoint; i += 4) {
            newBuffer[i] = this.buffer[i];
            newBuffer[i + 1] = this.buffer[i + 1];
            newBuffer[i + 2] = Math.min(at, this.buffer[i + 2]);
            newBuffer[i + 3] = Math.min(this.buffer[i + 3], cutPoint);
        }
        return new TreeBuffer(newBuffer, Math.min(at, this.length), this.group);
    };
    TreeBuffer.prototype.iterate = function (_a) {
        var _b = _a.from, from = _b === void 0 ? 0 : _b, _c = _a.to, to = _c === void 0 ? this.length : _c, enter = _a.enter, leave = _a.leave;
        var iter = new Iteration(enter, leave);
        this.iterInner(from, to, 0, iter);
        return iter.result;
    };
    /// @internal
    TreeBuffer.prototype.iterInner = function (from, to, offset, iter) {
        if (from <= to) {
            for (var index = 0; index < this.buffer.length;)
                index = this.iterChild(from, to, offset, index, iter);
        }
        else {
            this.iterRev(from, to, offset, 0, this.buffer.length, iter);
        }
    };
    /// @internal
    TreeBuffer.prototype.iterChild = function (from, to, offset, index, iter) {
        var type = this.group.types[this.buffer[index++]], start = this.buffer[index++] + offset, end = this.buffer[index++] + offset, endIndex = this.buffer[index++];
        if (start > to)
            return this.buffer.length;
        if (end >= from && iter.doEnter(type, start, end)) {
            while (index < endIndex && !iter.done)
                index = this.iterChild(from, to, offset, index, iter);
            if (iter.leave)
                iter.leave(type, start, end);
        }
        return endIndex;
    };
    TreeBuffer.prototype.parentNodesByEnd = function (startIndex, endIndex) {
        var _this = this;
        // Build up an array of node indices reflecting the order in which
        // non-empty nodes end, to avoid having to scan for parent nodes
        // at every position during reverse iteration.
        var order = [];
        var scan = function (index) {
            var end = _this.buffer[index + 3];
            if (end == index + 4)
                return end;
            for (var i = index + 4; i < end;)
                i = scan(i);
            order.push(index);
            return end;
        };
        for (var index = startIndex; index < endIndex;)
            index = scan(index);
        return order;
    };
    /// @internal
    TreeBuffer.prototype.iterRev = function (from, to, offset, startIndex, endIndex, iter) {
        var _this = this;
        var endOrder = this.parentNodesByEnd(startIndex, endIndex);
        // Index range for the next non-empty node
        var nextStart = -1, nextEnd = -1;
        var takeNext = function () {
            if (endOrder.length > 0) {
                nextStart = endOrder.pop();
                nextEnd = _this.buffer[nextStart + 3];
            }
            else {
                nextEnd = -1;
            }
        };
        takeNext();
        run: for (var index = endIndex; index > startIndex && !iter.done;) {
            while (nextEnd == index) {
                var base = nextStart;
                var id_1 = this.buffer[base], start_1 = this.buffer[base + 1] + offset, end_1 = this.buffer[base + 2] + offset;
                takeNext();
                if (start_1 <= from && end_1 >= to) {
                    if (!iter.doEnter(this.group.types[id_1], start_1, end_1)) {
                        // Skip the entire node
                        index = base;
                        while (nextEnd > base)
                            takeNext();
                        continue run;
                    }
                }
            }
            var endIndex_1 = this.buffer[--index], end = this.buffer[--index] + offset, start = this.buffer[--index] + offset, id = this.buffer[--index];
            if (start > from || end < to)
                continue;
            if ((endIndex_1 != index + 4 || iter.doEnter(this.group.types[id], start, end)) && iter.leave)
                iter.leave(this.group.types[id], start, end);
        }
    };
    /// @internal
    TreeBuffer.prototype.findIndex = function (pos, side, start, from, to) {
        var lastI = -1;
        for (var i = from, buf = this.buffer; i < to;) {
            var start1 = buf[i + 1] + start, end1 = buf[i + 2] + start;
            var ignore = start1 == end1 && start1 == pos;
            if (start1 >= pos) {
                if (side > 0 && !ignore)
                    return i;
                break;
            }
            if (end1 > pos)
                return i;
            if (!ignore)
                lastI = i;
            i = buf[i + 3];
        }
        return side < 0 ? lastI : -1;
    };
    return TreeBuffer;
}());
exports.TreeBuffer = TreeBuffer;
var NodeSubtree = /** @class */ (function (_super) {
    __extends(NodeSubtree, _super);
    function NodeSubtree(node, start, parent) {
        var _this = _super.call(this) || this;
        _this.node = node;
        _this.start = start;
        _this.parent = parent;
        return _this;
    }
    Object.defineProperty(NodeSubtree.prototype, "type", {
        get: function () { return this.node.type; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NodeSubtree.prototype, "end", {
        get: function () { return this.start + this.node.length; },
        enumerable: true,
        configurable: true
    });
    NodeSubtree.prototype.resolveAt = function (pos) {
        if (pos <= this.start || pos >= this.end)
            return this.parent.resolveAt(pos);
        return this.node.resolveInner(pos, this.start, this);
    };
    NodeSubtree.prototype.childBefore = function (pos) {
        return this.node.findChild(pos, -1, this.start, this);
    };
    NodeSubtree.prototype.childAfter = function (pos) {
        return this.node.findChild(pos, 1, this.start, this);
    };
    NodeSubtree.prototype.toString = function () { return this.node.toString(); };
    NodeSubtree.prototype.iterate = function (_a) {
        var _b = _a.from, from = _b === void 0 ? this.start : _b, _c = _a.to, to = _c === void 0 ? this.end : _c, enter = _a.enter, leave = _a.leave;
        var iter = new Iteration(enter, leave);
        this.node.iterInner(from, to, this.start, iter);
        return iter.result;
    };
    return NodeSubtree;
}(Subtree));
var BufferSubtree = /** @class */ (function (_super) {
    __extends(BufferSubtree, _super);
    function BufferSubtree(buffer, bufferStart, index, parent) {
        var _this = _super.call(this) || this;
        _this.buffer = buffer;
        _this.bufferStart = bufferStart;
        _this.index = index;
        _this.parent = parent;
        return _this;
    }
    Object.defineProperty(BufferSubtree.prototype, "type", {
        get: function () { return this.buffer.group.types[this.buffer.buffer[this.index]]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BufferSubtree.prototype, "start", {
        get: function () { return this.buffer.buffer[this.index + 1] + this.bufferStart; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BufferSubtree.prototype, "end", {
        get: function () { return this.buffer.buffer[this.index + 2] + this.bufferStart; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BufferSubtree.prototype, "endIndex", {
        get: function () { return this.buffer.buffer[this.index + 3]; },
        enumerable: true,
        configurable: true
    });
    BufferSubtree.prototype.childBefore = function (pos) {
        var index = this.buffer.findIndex(pos, -1, this.bufferStart, this.index + 4, this.endIndex);
        return index < 0 ? null : new BufferSubtree(this.buffer, this.bufferStart, index, this);
    };
    BufferSubtree.prototype.childAfter = function (pos) {
        var index = this.buffer.findIndex(pos, 1, this.bufferStart, this.index + 4, this.endIndex);
        return index < 0 ? null : new BufferSubtree(this.buffer, this.bufferStart, index, this);
    };
    BufferSubtree.prototype.iterate = function (_a) {
        var _b = _a.from, from = _b === void 0 ? this.start : _b, _c = _a.to, to = _c === void 0 ? this.end : _c, enter = _a.enter, leave = _a.leave;
        var iter = new Iteration(enter, leave);
        if (from <= to)
            this.buffer.iterChild(from, to, this.bufferStart, this.index, iter);
        else
            this.buffer.iterRev(from, to, this.bufferStart, this.index, this.endIndex, iter);
        return iter.result;
    };
    BufferSubtree.prototype.resolveAt = function (pos) {
        if (pos <= this.start || pos >= this.end)
            return this.parent.resolveAt(pos);
        var found = this.buffer.findIndex(pos, 0, this.bufferStart, this.index + 4, this.endIndex);
        return found < 0 ? this : new BufferSubtree(this.buffer, this.bufferStart, found, this).resolveAt(pos);
    };
    BufferSubtree.prototype.toString = function () {
        var result = [];
        this.buffer.childToString(this.index, result);
        return result.join("");
    };
    return BufferSubtree;
}(Subtree));
var FlatBufferCursor = /** @class */ (function () {
    function FlatBufferCursor(buffer, index) {
        this.buffer = buffer;
        this.index = index;
    }
    Object.defineProperty(FlatBufferCursor.prototype, "id", {
        get: function () { return this.buffer[this.index - 4]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlatBufferCursor.prototype, "start", {
        get: function () { return this.buffer[this.index - 3]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlatBufferCursor.prototype, "end", {
        get: function () { return this.buffer[this.index - 2]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlatBufferCursor.prototype, "size", {
        get: function () { return this.buffer[this.index - 1]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlatBufferCursor.prototype, "pos", {
        get: function () { return this.index; },
        enumerable: true,
        configurable: true
    });
    FlatBufferCursor.prototype.next = function () { this.index -= 4; };
    FlatBufferCursor.prototype.fork = function () { return new FlatBufferCursor(this.buffer, this.index); };
    return FlatBufferCursor;
}());
var BalanceBranchFactor = 8;
function buildTree(data) {
    var _a = data, buffer = _a.buffer, group = _a.group, _b = _a.topID, topID = _b === void 0 ? 0 : _b, _c = _a.maxBufferLength, maxBufferLength = _c === void 0 ? exports.DefaultBufferLength : _c, _d = _a.reused, reused = _d === void 0 ? [] : _d, _e = _a.minRepeatType, minRepeatType = _e === void 0 ? group.types.length : _e;
    var cursor = Array.isArray(buffer) ? new FlatBufferCursor(buffer, buffer.length) : buffer;
    var types = group.types;
    function takeNode(parentStart, minPos, children, positions, tagBuffer) {
        var id = cursor.id, start = cursor.start, end = cursor.end, size = cursor.size, buffer;
        var startPos = start - parentStart;
        if (size < 0) { // Reused node
            children.push(reused[id]);
            positions.push(startPos);
            cursor.next();
            return;
        }
        var type = types[id], node;
        if (end - start <= maxBufferLength && (buffer = findBufferSize(cursor.pos - minPos))) {
            // Small enough for a buffer, and no reused nodes inside
            var data_1 = new Uint16Array(buffer.size - buffer.skip);
            var endPos = cursor.pos - buffer.size, index = data_1.length;
            while (cursor.pos > endPos)
                index = copyToBuffer(buffer.start, data_1, index);
            node = new TreeBuffer(data_1, end - buffer.start, group, tagBuffer);
            startPos = buffer.start - parentStart;
        }
        else { // Make it a node
            var endPos = cursor.pos - size;
            cursor.next();
            var localChildren = [], localPositions = [];
            // Check if this is a repeat wrapper. Store the id of the inner
            // repeat node in the variable if it is
            var repeating = id >= group.types.length ? id - (group.types.length - minRepeatType) : -1;
            if (repeating > -1) {
                type = types[repeating];
                while (cursor.pos > endPos) {
                    var isRepeat = cursor.id == repeating; // This starts with an inner repeated node
                    takeNode(start, endPos, localChildren, localPositions, isRepeat ? type : NodeType.none);
                }
            }
            else {
                while (cursor.pos > endPos)
                    takeNode(start, endPos, localChildren, localPositions, NodeType.none);
            }
            localChildren.reverse();
            localPositions.reverse();
            if (repeating > -1 && localChildren.length > BalanceBranchFactor)
                node = balanceRange(type, type, localChildren, localPositions, 0, localChildren.length, 0, maxBufferLength, end - start);
            else
                node = new Tree(type, localChildren, localPositions, end - start);
        }
        children.push(node);
        positions.push(startPos);
    }
    function findBufferSize(maxSize) {
        // Scan through the buffer to find previous siblings that fit
        // together in a TreeBuffer, and don't contain any reused nodes
        // (which can't be stored in a buffer)
        // If `type` is > -1, only include siblings with that same type
        // (used to group repeat content into a buffer)
        var fork = cursor.fork();
        var size = 0, start = 0, skip = 0, minStart = fork.end - maxBufferLength;
        scan: for (var minPos = fork.pos - maxSize; fork.pos > minPos;) {
            var nodeSize = fork.size, startPos = fork.pos - nodeSize;
            if (nodeSize < 0 || startPos < minPos || fork.start < minStart)
                break;
            var localSkipped = fork.id >= minRepeatType ? 4 : 0;
            var nodeStart = fork.start;
            fork.next();
            while (fork.pos > startPos) {
                if (fork.size < 0)
                    break scan;
                if (fork.id >= minRepeatType)
                    localSkipped += 4;
                fork.next();
            }
            start = nodeStart;
            size += nodeSize;
            skip += localSkipped;
        }
        return size > 4 ? { size: size, start: start, skip: skip } : null;
    }
    function copyToBuffer(bufferStart, buffer, index) {
        var id = cursor.id, start = cursor.start, end = cursor.end, size = cursor.size;
        cursor.next();
        var startIndex = index;
        if (size > 4) {
            var endPos = cursor.pos - (size - 4);
            while (cursor.pos > endPos)
                index = copyToBuffer(bufferStart, buffer, index);
        }
        if (id < minRepeatType) { // Don't copy repeat nodes into buffers
            buffer[--index] = startIndex;
            buffer[--index] = end - bufferStart;
            buffer[--index] = start - bufferStart;
            buffer[--index] = id;
        }
        return index;
    }
    var children = [], positions = [];
    while (cursor.pos > 0)
        takeNode(0, 0, children, positions, NodeType.none);
    var length = children.length ? positions[0] + children[0].length : 0;
    return new Tree(group.types[topID], children.reverse(), positions.reverse(), length);
}
function balanceRange(outerType, innerType, children, positions, from, to, start, maxBufferLength, length) {
    var localChildren = [], localPositions = [];
    if (length <= maxBufferLength) {
        for (var i = from; i < to; i++) {
            localChildren.push(children[i]);
            localPositions.push(positions[i] - start);
        }
    }
    else {
        var maxChild = Math.max(maxBufferLength, Math.ceil(length * 1.5 / BalanceBranchFactor));
        for (var i = from; i < to;) {
            var groupFrom = i, groupStart = positions[i];
            i++;
            for (; i < to; i++) {
                var nextEnd = positions[i] + children[i].length;
                if (nextEnd - groupStart > maxChild)
                    break;
            }
            if (i == groupFrom + 1) {
                var only = children[groupFrom];
                if (only instanceof Tree && only.type == innerType && only.length > maxChild << 1) { // Too big, collapse
                    for (var j = 0; j < only.children.length; j++) {
                        localChildren.push(only.children[j]);
                        localPositions.push(only.positions[j] + groupStart - start);
                    }
                    continue;
                }
                localChildren.push(only);
            }
            else if (i == groupFrom + 1) {
                localChildren.push(children[groupFrom]);
            }
            else {
                var inner = balanceRange(innerType, innerType, children, positions, groupFrom, i, groupStart, maxBufferLength, positions[i - 1] - groupStart);
                if (innerType != NodeType.none && !containsType(inner.children, innerType))
                    inner = new Tree(NodeType.none, inner.children, inner.positions, inner.length);
                localChildren.push(inner);
            }
            localPositions.push(groupStart - start);
        }
    }
    return new Tree(outerType, localChildren, localPositions, length);
}
function containsType(nodes, type) {
    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
        var elt = nodes_1[_i];
        if (elt.type == type)
            return true;
    }
    return false;
}
//# sourceMappingURL=tree.js.map

/***/ }),

/***/ "./node_modules/lezer/dist/index.js":
/*!******************************************!*\
  !*** ./node_modules/lezer/dist/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, '__esModule', { value: true });

var lezerTree = __webpack_require__(/*! lezer-tree */ "./node_modules/lezer-tree/dist/tree.js");

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/// A parse stack. These are used internally by the parser to track
/// parsing progress. They also provide some properties and methods
/// that external code such as a tokenizer can use to get information
/// about the parse state.
var Stack = /** @class */ (function () {
    /// @internal
    function Stack(
    // A group of values that the stack will share with all
    // split instances
    ///@internal
    cx, 
    // Holds state, pos, value stack pos (15 bits array index, 15 bits
    // buffer index) triplets for all but the top state
    /// @internal
    stack, 
    // The current parse state
    /// @internal
    state, 
    // The position at which the next reduce should take place. This
    // can be less than `this.pos` when skipped expressions have been
    // added to the stack (which should be moved outside of the next
    // reduction)
    /// @internal
    reducePos, 
    // The input position up to which this stack has parsed.
    pos, 
    // The amount of error-recovery that happened on this stack
    /// @internal
    recovered, 
    // The output buffer. Holds (type, start, end, size) quads
    // representing nodes created by the parser, where `size` is
    // amount of buffer array entries covered by this node.
    /// @internal
    buffer, 
    // The base offset of the buffer. When stacks are split, the split
    // instance shared the buffer history with its parent up to
    // `bufferBase`, which is the absolute offset (including the
    // offset of previous splits) into the buffer at which this stack
    // starts writing.
    /// @internal
    bufferBase, 
    // A parent stack from which this was split off, if any. This is
    // set up so that it always points to a stack that has some
    // additional buffer content, never to a stack with an equal
    // `bufferBase`.
    /// @internal
    parent) {
        this.cx = cx;
        this.stack = stack;
        this.state = state;
        this.reducePos = reducePos;
        this.pos = pos;
        this.recovered = recovered;
        this.buffer = buffer;
        this.bufferBase = bufferBase;
        this.parent = parent;
    }
    /// @internal
    Stack.prototype.toString = function () {
        return "[" + this.stack.filter(function (_, i) { return i % 3 == 0; }).concat(this.state) + "]@" + this.pos + (this.recovered ? "!" + this.recovered : "");
    };
    // Start an empty stack
    /// @internal
    Stack.start = function (cx, pos) {
        if (pos === void 0) { pos = 0; }
        return new Stack(cx, [], cx.parser.states[0], pos, pos, 0, [], 0, null);
    };
    // Push a state onto the stack, tracking its start position as well
    // as the buffer base at that point.
    /// @internal
    Stack.prototype.pushState = function (state, start) {
        this.stack.push(this.state, start, this.bufferBase + this.buffer.length);
        this.state = state;
    };
    // Apply a reduce action
    /// @internal
    Stack.prototype.reduce = function (action) {
        var depth = action >> 19 /* ReduceDepthShift */, type = action & 65535 /* ValueMask */;
        var parser = this.cx.parser;
        if (depth == 0) {
            // Zero-depth reductions are a special case—they add stuff to
            // the stack without popping anything off.
            if (type < parser.minRepeatTerm)
                this.storeNode(type, this.reducePos, this.reducePos, 4, true);
            this.pushState(parser.getGoto(this.state, type, true), this.reducePos);
            return;
        }
        // Find the base index into `this.stack`, content after which will
        // be dropped. Note that with `StayFlag` reductions we need to
        // consume two extra frames (the dummy parent node for the skipped
        // expression and the state that we'll be staying in, which should
        // be moved to `this.state`).
        var base = this.stack.length - ((depth - 1) * 3) - (action & 262144 /* StayFlag */ ? 6 : 0);
        var start = this.stack[base - 2];
        var bufferBase = this.stack[base - 1], count = this.bufferBase + this.buffer.length - bufferBase;
        if (type < parser.minRepeatTerm || // Normal term
            (action & 131072 /* RepeatFlag */) || // Inner repeat marker
            (type > parser.maxNode && type <= parser.maxRepeatWrap)) { // Repeat wrapper
            var pos = parser.stateFlag(this.state, 1 /* Skipped */) ? this.pos : this.reducePos;
            this.storeNode(type, start, pos, count + 4, true);
        }
        if (action & 262144 /* StayFlag */) {
            this.state = this.stack[base];
        }
        else {
            var baseStateID = this.stack[base - 3];
            this.state = parser.getGoto(baseStateID, type, true);
        }
        while (this.stack.length > base)
            this.stack.pop();
    };
    // Shift a value into the buffer
    /// @internal
    Stack.prototype.storeNode = function (term, start, end, size, isReduce) {
        if (size === void 0) { size = 4; }
        if (isReduce === void 0) { isReduce = false; }
        if (term == 0 /* Err */) { // Try to omit/merge adjacent error nodes
            var cur = this, top = this.buffer.length;
            if (top == 0 && cur.parent) {
                top = cur.bufferBase - cur.parent.bufferBase;
                cur = cur.parent;
            }
            if (top > 0 && cur.buffer[top - 4] == 0 /* Err */ && cur.buffer[top - 1] > -1) {
                if (start == end)
                    return;
                if (cur.buffer[top - 2] >= start) {
                    cur.buffer[top - 2] = end;
                    return;
                }
            }
        }
        if (!isReduce || this.pos == end) { // Simple case, just append
            this.buffer.push(term, start, end, size);
        }
        else { // There may be skipped nodes that have to be moved forward
            var index = this.buffer.length;
            if (index > 0 && this.buffer[index - 4] != 0 /* Err */)
                while (index > 0 && this.buffer[index - 2] > end) {
                    // Move this record forward
                    this.buffer[index] = this.buffer[index - 4];
                    this.buffer[index + 1] = this.buffer[index - 3];
                    this.buffer[index + 2] = this.buffer[index - 2];
                    this.buffer[index + 3] = this.buffer[index - 1];
                    index -= 4;
                    if (size > 4)
                        size -= 4;
                }
            this.buffer[index] = term;
            this.buffer[index + 1] = start;
            this.buffer[index + 2] = end;
            this.buffer[index + 3] = size;
        }
    };
    // Apply a shift action
    /// @internal
    Stack.prototype.shift = function (action, next, nextEnd) {
        if (action & 131072 /* GotoFlag */) {
            this.pushState(action & 65535 /* ValueMask */, this.pos);
        }
        else if ((action & 262144 /* StayFlag */) == 0) { // Regular shift
            var start = this.pos, nextState = action, parser = this.cx.parser;
            if (nextEnd > this.pos || next <= parser.maxNode) {
                this.pos = nextEnd;
                if (!parser.stateFlag(nextState, 1 /* Skipped */))
                    this.reducePos = nextEnd;
            }
            this.pushState(nextState, start);
            if (next <= parser.maxNode)
                this.buffer.push(next, start, nextEnd, 4);
        }
        else { // Shift-and-stay, which means this is a skipped token
            if (next <= this.cx.parser.maxNode)
                this.buffer.push(next, this.pos, nextEnd, 4);
            this.pos = nextEnd;
        }
    };
    // Apply an action
    /// @internal
    Stack.prototype.apply = function (action, next, nextEnd) {
        if (action & 65536 /* ReduceFlag */)
            this.reduce(action);
        else
            this.shift(action, next, nextEnd);
    };
    // Add a prebuilt node into the buffer. This may be a reused node or
    // the result of running a nested parser.
    /// @internal
    Stack.prototype.useNode = function (value, next) {
        var index = this.cx.reused.length - 1;
        if (index < 0 || this.cx.reused[index] != value) {
            this.cx.reused.push(value);
            index++;
        }
        var start = this.pos;
        this.reducePos = this.pos = start + value.length;
        this.pushState(next, start);
        this.buffer.push(index, start, this.reducePos, -1 /* size < 0 means this is a reused value */);
    };
    // Split the stack. Due to the buffer sharing and the fact
    // that `this.stack` tends to stay quite shallow, this isn't very
    // expensive.
    /// @internal
    Stack.prototype.split = function () {
        var parent = this;
        var off = parent.buffer.length;
        // Because the top of the buffer (after this.pos) may be mutated
        // to reorder reductions and skipped tokens, and shared buffers
        // should be immutable, this copies any outstanding skipped tokens
        // to the new buffer, and puts the base pointer before them.
        while (off > 0 && parent.buffer[off - 2] > parent.reducePos)
            off -= 4;
        var buffer = parent.buffer.slice(off), base = parent.bufferBase + off;
        // Make sure parent points to an actual parent with content, if there is such a parent.
        while (parent && base == parent.bufferBase)
            parent = parent.parent;
        return new Stack(this.cx, this.stack.slice(), this.state, this.reducePos, this.pos, this.recovered, buffer, base, parent);
    };
    // Try to recover from an error by 'deleting' (ignoring) one token.
    /// @internal
    Stack.prototype.recoverByDelete = function (next, nextEnd) {
        var isNode = next <= this.cx.parser.maxNode;
        if (isNode)
            this.storeNode(next, this.pos, nextEnd);
        this.storeNode(0 /* Err */, this.pos, nextEnd, isNode ? 8 : 4);
        this.pos = this.reducePos = nextEnd;
        this.recovered += 2 /* Token */;
    };
    /// Check if the given term would be able to be shifted (optionally
    /// after some reductions) on this stack. This can be useful for
    /// external tokenizers that want to make sure they only provide a
    /// given token when it applies.
    Stack.prototype.canShift = function (term) {
        for (var sim = new SimulatedStack(this);;) {
            var action = this.cx.parser.stateSlot(sim.top, 4 /* DefaultReduce */) || this.cx.parser.hasAction(sim.top, term);
            if ((action & 65536 /* ReduceFlag */) == 0)
                return true;
            if (action == 0)
                return false;
            sim.reduce(action);
        }
    };
    Object.defineProperty(Stack.prototype, "ruleStart", {
        /// Find the start position of the rule that is currently being parsed.
        get: function () {
            var force = this.cx.parser.stateSlot(this.state, 5 /* ForcedReduce */);
            if (!(force & 65536 /* ReduceFlag */))
                return 0;
            var base = this.stack.length - (3 * (force >> 19 /* ReduceDepthShift */));
            return this.stack[base + 1];
        },
        enumerable: true,
        configurable: true
    });
    /// Find the start position of the innermost instance of any of the
    /// given term types, or return `-1` when none of them are found.
    ///
    /// **Note:** this is only reliable when there is at least some
    /// state that unambiguously matches the given rule on the stack.
    /// I.e. if you have a grammar like this, where the difference
    /// between `a` and `b` is only apparent at the third token:
    ///
    ///     a { b | c }
    ///     b { "x" "y" "x" }
    ///     c { "x" "y" "z" }
    ///
    /// Then a parse state after `"x"` will not reliably tell you that
    /// `b` is on the stack. You _can_ pass `[b, c]` to reliably check
    /// for either of those two rules (assuming that `a` isn't part of
    /// some rule that includes other things starting with `"x"`).
    Stack.prototype.startOf = function (types) {
        for (var frame = this.stack.length; frame >= 0; frame -= 3) {
            var state = frame == this.stack.length ? this.state : this.stack[frame];
            var force = this.cx.parser.stateSlot(state, 5 /* ForcedReduce */);
            if (types.includes(force & 65535 /* ValueMask */)) {
                var base = frame - (3 * (force >> 19 /* ReduceDepthShift */));
                return this.stack[base + 1];
            }
        }
        return -1;
    };
    // Apply up to Recover.MaxNext recovery actions that conceptually
    // inserts some missing token or rule.
    /// @internal
    Stack.prototype.recoverByInsert = function (next) {
        var _this = this;
        var nextStates = this.cx.parser.nextStates(this.state);
        if (nextStates.length > 4 /* MaxNext */) {
            var best = nextStates.filter(function (s) { return s != _this.state && _this.cx.parser.hasAction(s, next); });
            for (var i = 0; best.length < 4 /* MaxNext */ && i < nextStates.length; i++)
                if (!best.includes(nextStates[i]))
                    best.push(nextStates[i]);
            nextStates = best;
        }
        var result = [];
        for (var i = 0; i < nextStates.length && result.length < 4 /* MaxNext */; i++) {
            if (nextStates[i] == this.state)
                continue;
            var stack = this.split();
            stack.storeNode(0 /* Err */, stack.pos, stack.pos, 4, true);
            stack.pushState(nextStates[i], this.pos);
            stack.recovered += 2 /* Token */;
            result.push(stack);
        }
        return result;
    };
    // Force a reduce, if possible. Return false if that can't
    // be done.
    /// @internal
    Stack.prototype.forceReduce = function () {
        var reduce = this.cx.parser.stateSlot(this.state, 5 /* ForcedReduce */);
        if ((reduce & 65536 /* ReduceFlag */) == 0)
            return false;
        if (!this.cx.parser.validAction(this.state, reduce)) {
            this.storeNode(0 /* Err */, this.reducePos, this.reducePos, 4, true);
            this.recovered += 1 /* Reduce */;
        }
        this.reduce(reduce);
        return true;
    };
    /// @internal
    Stack.prototype.forceAll = function () {
        while (!this.cx.parser.stateFlag(this.state, 2 /* Accepting */) && this.forceReduce()) { }
        return this;
    };
    // Convert the stack's buffer to a syntax tree.
    /// @internal
    Stack.prototype.toTree = function () {
        return lezerTree.Tree.build({ buffer: StackBufferCursor.create(this),
            group: this.cx.parser.group,
            topID: 1 /* Top */,
            maxBufferLength: this.cx.maxBufferLength,
            reused: this.cx.reused,
            minRepeatType: this.cx.parser.minRepeatTerm });
    };
    return Stack;
}());
var Recover;
(function (Recover) {
    Recover[Recover["Token"] = 2] = "Token";
    Recover[Recover["Reduce"] = 1] = "Reduce";
    Recover[Recover["MaxNext"] = 4] = "MaxNext";
})(Recover || (Recover = {}));
// Used to cheaply run some reductions to scan ahead without mutating
// an entire stack
var SimulatedStack = /** @class */ (function () {
    function SimulatedStack(stack) {
        this.stack = stack;
        this.top = stack.state;
        this.rest = stack.stack;
        this.offset = this.rest.length;
    }
    SimulatedStack.prototype.reduce = function (action) {
        var term = action & 65535 /* ValueMask */, depth = action >> 19 /* ReduceDepthShift */;
        if (depth == 0) {
            if (this.rest == this.stack.stack)
                this.rest = this.rest.slice();
            this.rest.push(this.top, 0, 0);
            this.offset += 3;
        }
        else {
            this.offset -= (depth - 1) * 3;
        }
        var goto = this.stack.cx.parser.getGoto(this.rest[this.offset - 3], term, true);
        this.top = goto;
    };
    return SimulatedStack;
}());
// This is given to `Tree.build` to build a buffer, and encapsulates
// the parent-stack-walking necessary to read the nodes.
var StackBufferCursor = /** @class */ (function () {
    function StackBufferCursor(stack, pos, index) {
        this.stack = stack;
        this.pos = pos;
        this.index = index;
        this.buffer = stack.buffer;
        if (this.index == 0)
            this.maybeNext();
    }
    StackBufferCursor.create = function (stack) {
        return new StackBufferCursor(stack, stack.bufferBase + stack.buffer.length, stack.buffer.length);
    };
    StackBufferCursor.prototype.maybeNext = function () {
        var next = this.stack.parent;
        if (next != null) {
            this.index = this.stack.bufferBase - next.bufferBase;
            this.stack = next;
            this.buffer = next.buffer;
        }
    };
    Object.defineProperty(StackBufferCursor.prototype, "id", {
        get: function () { return this.buffer[this.index - 4]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackBufferCursor.prototype, "start", {
        get: function () { return this.buffer[this.index - 3]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackBufferCursor.prototype, "end", {
        get: function () { return this.buffer[this.index - 2]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackBufferCursor.prototype, "size", {
        get: function () { return this.buffer[this.index - 1]; },
        enumerable: true,
        configurable: true
    });
    StackBufferCursor.prototype.next = function () {
        this.index -= 4;
        this.pos -= 4;
        if (this.index == 0)
            this.maybeNext();
    };
    StackBufferCursor.prototype.fork = function () {
        return new StackBufferCursor(this.stack, this.pos, this.index);
    };
    return StackBufferCursor;
}());

/// Tokenizers write the tokens they read into instances of this class.
var Token = /** @class */ (function () {
    function Token() {
        /// The start of the token. This is set by the parser, and should not
        /// be mutated by the tokenizer.
        this.start = -1;
        /// This starts at -1, and should be updated to a term id when a
        /// matching token is found.
        this.value = -1;
        /// When setting `.value`, you should also set `.end` to the end
        /// position of the token. (You'll usually want to use the `accept`
        /// method.)
        this.end = -1;
    }
    /// Accept a token, setting `value` and `end` to the given values.
    Token.prototype.accept = function (value, end) {
        this.value = value;
        this.end = end;
    };
    return Token;
}());
/// An `InputStream` that is backed by a single, flat string.
var StringStream = /** @class */ (function () {
    function StringStream(string, length) {
        if (length === void 0) { length = string.length; }
        this.string = string;
        this.length = length;
    }
    StringStream.prototype.get = function (pos) {
        return pos < 0 || pos >= this.length ? -1 : this.string.charCodeAt(pos);
    };
    StringStream.prototype.read = function (from, to) { return this.string.slice(from, Math.min(this.length, to)); };
    StringStream.prototype.clip = function (at) { return new StringStream(this.string, at); };
    return StringStream;
}());
/// @internal
var TokenGroup = /** @class */ (function () {
    function TokenGroup(data, id) {
        this.data = data;
        this.id = id;
    }
    TokenGroup.prototype.token = function (input, token, stack) { readToken(this.data, input, token, stack, this.id); };
    return TokenGroup;
}());
TokenGroup.prototype.contextual = false;
var ExternalTokenizer = /** @class */ (function () {
    function ExternalTokenizer(token, options) {
        if (options === void 0) { options = {}; }
        this.token = token;
        this.contextual = options && options.contextual || false;
    }
    return ExternalTokenizer;
}());
// Tokenizer data is stored a big uint16 array containing, for each
// state:
//
//  - A group bitmask, indicating what token groups are reachable from
//    this state, so that paths that can only lead to tokens not in
//    any of the current groups can be cut off early.
//
//  - The position of the end of the state's sequence of accepting
//    tokens
//
//  - The number of outgoing edges for the state
//
//  - The accepting tokens, as (token id, group mask) pairs
//
//  - The outgoing edges, as (start character, end character, state
//    index) triples, with end character being exclusive
//
// This function interprets that data, running through a stream as
// long as new states with the a matching group mask can be reached,
// and updating `token` when it matches a token.
function readToken(data, input, token, stack, group) {
    var state = 0, groupMask = 1 << group;
    scan: for (var pos = token.start;;) {
        if ((groupMask & data[state]) == 0)
            break;
        var accEnd = data[state + 1];
        // Check whether this state can lead to a token in the current group
        // Accept tokens in this state, possibly overwriting
        // lower-precedence / shorter tokens
        for (var i = state + 3; i < accEnd; i += 2)
            if ((data[i + 1] & groupMask) > 0) {
                var term = data[i];
                if (token.value == -1 || token.value == term || stack.cx.parser.overrides(term, token.value)) {
                    token.accept(term, pos);
                    break;
                }
            }
        var next = input.get(pos++);
        // Do a binary search on the state's edges
        for (var low = 0, high = data[state + 2]; low < high;) {
            var mid = (low + high) >> 1;
            var index = accEnd + mid + (mid << 1);
            var from = data[index], to = data[index + 1];
            if (next < from)
                high = mid;
            else if (next >= to)
                low = mid + 1;
            else {
                state = data[index + 2];
                continue scan;
            }
        }
        break;
    }
}

// See lezer-generator/src/encode.ts for comments about the encoding
// used here
function decodeArray(input, Type) {
    if (Type === void 0) { Type = Uint16Array; }
    var array = null;
    for (var pos = 0, out = 0; pos < input.length;) {
        var value = 0;
        for (;;) {
            var next = input.charCodeAt(pos++), stop = false;
            if (next == 126 /* BigValCode */) {
                value = 65535 /* BigVal */;
                break;
            }
            if (next >= 92 /* Gap2 */)
                next--;
            if (next >= 34 /* Gap1 */)
                next--;
            var digit = next - 32 /* Start */;
            if (digit >= 46 /* Base */) {
                digit -= 46 /* Base */;
                stop = true;
            }
            value += digit;
            if (stop)
                break;
            value *= 46 /* Base */;
        }
        if (array)
            array[out++] = value;
        else
            array = new Type(value);
    }
    return array;
}

// Environment variable used to control console output
var verbose = typeof process != "undefined" && /\bparse\b/.test(process.env.LOG);
var CacheCursor = /** @class */ (function () {
    function CacheCursor(tree) {
        this.start = [0];
        this.index = [0];
        this.nextStart = 0;
        this.trees = [tree];
    }
    // `pos` must be >= any previously given `pos` for this cursor
    CacheCursor.prototype.nodeAt = function (pos) {
        if (pos < this.nextStart)
            return null;
        for (;;) {
            var last = this.trees.length - 1;
            if (last < 0) { // End of tree
                this.nextStart = 1e9;
                return null;
            }
            var top = this.trees[last], index = this.index[last];
            if (index == top.children.length) {
                this.trees.pop();
                this.start.pop();
                this.index.pop();
                continue;
            }
            var next = top.children[index];
            var start = this.start[last] + top.positions[index];
            if (start >= pos)
                return start == pos ? next : null;
            if (next instanceof lezerTree.TreeBuffer) {
                this.index[last]++;
                this.nextStart = start + next.length;
            }
            else {
                this.index[last]++;
                if (start + next.length >= pos) { // Enter this node
                    this.trees.push(next);
                    this.start.push(start);
                    this.index.push(0);
                }
            }
        }
    };
    return CacheCursor;
}());
var CachedToken = /** @class */ (function (_super) {
    __extends(CachedToken, _super);
    function CachedToken() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.extended = -1;
        _this.mask = 0;
        return _this;
    }
    CachedToken.prototype.clear = function (start) {
        this.start = start;
        this.value = this.extended = -1;
    };
    return CachedToken;
}(Token));
var dummyToken = new Token;
var TokenCache = /** @class */ (function () {
    function TokenCache(parser) {
        this.tokens = [];
        this.mainToken = dummyToken;
        this.actions = [];
        this.tokens = parser.tokenizers.map(function (_) { return new CachedToken; });
    }
    TokenCache.prototype.getActions = function (stack, input) {
        var actionIndex = 0;
        var main = null;
        var parser = stack.cx.parser, tokenizers = parser.tokenizers;
        var mask = parser.stateSlot(stack.state, 3 /* TokenizerMask */);
        for (var i = 0; i < tokenizers.length; i++) {
            if (((1 << i) & mask) == 0)
                continue;
            var tokenizer = tokenizers[i], token = this.tokens[i];
            if (tokenizer.contextual || token.start != stack.pos || token.mask != mask) {
                this.updateCachedToken(token, tokenizer, stack, input);
                token.mask = mask;
            }
            var startIndex = actionIndex;
            if (token.extended > -1)
                actionIndex = this.addActions(stack, token.extended, token.end, actionIndex);
            actionIndex = this.addActions(stack, token.value, token.end, actionIndex);
            if (actionIndex > startIndex) {
                main = token;
                break;
            }
            if (!main || token.value != 0 /* Err */)
                main = token;
        }
        while (this.actions.length > actionIndex)
            this.actions.pop();
        if (!main) {
            main = dummyToken;
            main.start = stack.pos;
            if (stack.pos == input.length)
                main.accept(stack.cx.parser.eofTerm, stack.pos);
            else
                main.accept(0 /* Err */, stack.pos + 1);
        }
        this.mainToken = main;
        return this.actions;
    };
    TokenCache.prototype.updateCachedToken = function (token, tokenizer, stack, input) {
        token.clear(stack.pos);
        tokenizer.token(input, token, stack);
        if (token.value > -1) {
            var parser = stack.cx.parser;
            var specIndex = findOffset(parser.data, parser.specializeTable, token.value);
            if (specIndex >= 0) {
                var found = parser.specializations[specIndex][input.read(token.start, token.end)];
                if (found != null) {
                    if ((found & 1) == 0 /* Specialize */)
                        token.value = found >> 1;
                    else
                        token.extended = found >> 1;
                }
            }
        }
        else if (stack.pos == input.length) {
            token.accept(stack.cx.parser.eofTerm, stack.pos);
        }
        else {
            token.accept(0 /* Err */, stack.pos + 1);
        }
    };
    TokenCache.prototype.putAction = function (action, token, end, index) {
        // Don't add duplicate actions
        for (var i = 0; i < index; i += 3)
            if (this.actions[i] == action)
                return index;
        this.actions[index++] = action;
        this.actions[index++] = token;
        this.actions[index++] = end;
        return index;
    };
    TokenCache.prototype.addActions = function (stack, token, end, index) {
        var state = stack.state, parser = stack.cx.parser, data = parser.data;
        for (var set = 0; set < 2; set++) {
            for (var i = parser.stateSlot(state, set ? 2 /* Skip */ : 1 /* Actions */), next = void 0; (next = data[i]) != 65535 /* End */; i += 3) {
                if (next == token || (next == 0 /* Err */ && index == 0))
                    index = this.putAction(data[i + 1] | (data[i + 2] << 16), token, end, index);
            }
        }
        return index;
    };
    return TokenCache;
}());
var StackContext = /** @class */ (function () {
    function StackContext(parser, maxBufferLength, input, parent, wrapType // Set to -2 when a stack descending from this nesting event finishes
    ) {
        if (parent === void 0) { parent = null; }
        if (wrapType === void 0) { wrapType = -1; }
        this.parser = parser;
        this.maxBufferLength = maxBufferLength;
        this.input = input;
        this.parent = parent;
        this.wrapType = wrapType;
        this.reused = [];
        this.tokens = new TokenCache(parser);
    }
    return StackContext;
}());
var recoverDist = 5, maxRemainingPerStep = 3, minBufferLengthPrune = 200, forceReduceLimit = 10;
/// A parse context can be used for step-by-step parsing. After
/// creating it, you repeatedly call `.advance()` until it returns a
/// tree to indicate it has reached the end of the parse.
var ParseContext = /** @class */ (function () {
    /// @internal
    function ParseContext(parser, input, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.cache, cache = _c === void 0 ? undefined : _c, _d = _b.strict, strict = _d === void 0 ? false : _d, _e = _b.bufferLength, bufferLength = _e === void 0 ? lezerTree.DefaultBufferLength : _e;
        // The position to which the parse has advanced.
        this.pos = 0;
        this.recovering = 0;
        this.tokenCount = 0;
        this.stacks = [Stack.start(new StackContext(parser, bufferLength, input))];
        this.strict = strict;
        this.cache = cache ? new CacheCursor(cache) : null;
    }
    /// @internal
    ParseContext.prototype.putStack = function (stack) {
        this.stacks.push(stack);
        if (this.pos < 0 || stack.pos < this.pos)
            this.pos = stack.pos;
    };
    /// Move the parser forward. This will process all parse stacks at
    /// `this.pos` and try to advance them to a further position. If no
    /// stack for such a position is found, it'll start error-recovery.
    ///
    /// When the parse is finished, this will return a syntax tree. When
    /// not, it returns `null`.
    ParseContext.prototype.advance = function () {
        var stacks = this.stacks, pos = this.pos;
        // This will now hold stacks beyond `pos`.
        this.stacks = [];
        // Will be reset to the next position by `putStack`.
        this.pos = -1;
        var stopped = null, stoppedTokens = null;
        // Keep advancing any stacks at `pos` until they either move
        // forward or can't be advanced. Gather stacks that can't be
        // advanced further in `stopped`.
        for (var i = 0; i < stacks.length; i++) {
            var stack = stacks[i];
            for (;;) {
                if (stack.pos > pos) {
                    this.putStack(stack);
                }
                else {
                    var result = this.advanceStack(stack, stacks);
                    if (result) {
                        stack = result;
                        continue;
                    }
                    else {
                        if (!stopped) {
                            stopped = [];
                            stoppedTokens = [];
                        }
                        stopped.push(stack);
                        var tok = stack.cx.tokens.mainToken;
                        stoppedTokens.push(tok.value, tok.end);
                    }
                }
                break;
            }
        }
        if (!this.stacks.length) {
            var finished = stopped && findFinished(stopped);
            if (finished)
                return finished.toTree();
            if (this.strict)
                throw new SyntaxError("No parse at " + pos);
            if (!this.recovering)
                this.recovering = recoverDist;
        }
        if (this.recovering && stopped) {
            var finished = this.runRecovery(stopped, stoppedTokens);
            if (finished)
                return finished.forceAll().toTree();
        }
        if (this.recovering) {
            var maxRemaining = this.recovering == 1 ? 1 : this.recovering * maxRemainingPerStep;
            if (this.stacks.length > maxRemaining) {
                this.stacks.sort(function (a, b) { return a.recovered - b.recovered; });
                this.stacks.length = maxRemaining;
            }
            if (this.stacks.some(function (s) { return s.reducePos > pos; }))
                this.recovering--;
        }
        else if (this.stacks.length > 1 && this.stacks[0].buffer.length > minBufferLengthPrune) {
            // Prune stacks that have been running without splitting for a
            // while, to avoid getting stuck with multiple successful stacks
            // running endlessly on.
            var minLen = 1e9, minI = -1;
            for (var i = 0; i < this.stacks.length; i++) {
                var stack = this.stacks[i];
                if (stack.buffer.length < minLen) {
                    minLen = stack.buffer.length;
                    minI = i;
                }
            }
            if (minLen > minBufferLengthPrune)
                this.stacks.splice(minI, 1);
        }
        this.tokenCount++;
        return null;
    };
    // Returns an updated version of the given stack, or null if the
    // stack can't advance normally. When `split` is given, stacks split
    // off by ambiguous operations will be pushed to that, or given to
    // `putStack` if they move `pos` forward.
    ParseContext.prototype.advanceStack = function (stack, split) {
        var start = stack.pos, _a = stack.cx, input = _a.input, parser = _a.parser;
        var base = verbose ? stack + " -> " : "";
        if (this.cache) {
            for (var cached = this.cache.nodeAt(start); cached;) {
                var match = parser.group.types[cached.type.id] == cached.type ? parser.getGoto(stack.state, cached.type.id) : -1;
                if (match > -1) {
                    stack.useNode(cached, match);
                    if (verbose)
                        console.log(base + stack + (" (via reuse of " + parser.getName(cached.type.id) + ")"));
                    return stack;
                }
                if (!(cached instanceof lezerTree.Tree) || cached.children.length == 0 || cached.positions[0] > 0)
                    break;
                var inner = cached.children[0];
                if (inner instanceof lezerTree.Tree)
                    cached = inner;
                else
                    break;
            }
        }
        var nest = parser.startNested(stack.state);
        maybeNest: if (nest > -1) {
            var _b = parser.nested[nest], grammar = _b.grammar, endToken = _b.end, placeholder = _b.placeholder;
            var filterEnd = undefined, parseNode = null, nested = void 0, wrapType = undefined;
            if (typeof grammar == "function") {
                var query = grammar(input, stack);
                if (query.stay)
                    break maybeNest;
                (parseNode = query.parseNode, nested = query.parser, filterEnd = query.filterEnd, wrapType = query.wrapType);
            }
            else {
                nested = grammar;
            }
            var end = this.scanForNestEnd(stack, endToken, filterEnd);
            var clippedInput = stack.cx.input.clip(end);
            if (parseNode || !nested) {
                var node = parseNode ? parseNode(clippedInput, stack.pos) : lezerTree.Tree.empty;
                if (node.length != end - stack.pos)
                    node = new lezerTree.Tree(node.type, node.children, node.positions, end - stack.pos);
                if (wrapType != null)
                    node = new lezerTree.Tree(parser.group.types[wrapType], [node], [0], node.length);
                stack.useNode(node, parser.getGoto(stack.state, placeholder, true));
                return stack;
            }
            else {
                var newStack = Stack.start(new StackContext(nested, stack.cx.maxBufferLength, clippedInput, stack, wrapType), stack.pos);
                if (verbose)
                    console.log(base + newStack + " (nested)");
                return newStack;
            }
        }
        var defaultReduce = parser.stateSlot(stack.state, 4 /* DefaultReduce */);
        if (defaultReduce > 0) {
            stack.reduce(defaultReduce);
            if (verbose)
                console.log(base + stack + (" (via always-reduce " + parser.getName(defaultReduce & 65535 /* ValueMask */) + ")"));
            return stack;
        }
        var actions = stack.cx.tokens.getActions(stack, input);
        for (var i = 0; i < actions.length;) {
            var action = actions[i++], term = actions[i++], end = actions[i++];
            var last = i == actions.length || !split;
            var localStack = last ? stack : stack.split();
            localStack.apply(action, term, end);
            if (verbose)
                console.log(base + localStack + (" (via " + ((action & 65536 /* ReduceFlag */) == 0 ? "shift"
                    : "reduce of " + parser.getName(action & 65535 /* ValueMask */)) + " for " + parser.getName(term) + " @ " + start + (localStack == stack ? "" : ", split") + ")"));
            if (last)
                return localStack;
            else if (localStack.pos > start)
                this.putStack(localStack);
            else
                split.push(localStack);
        }
        if (stack.cx.parent && stack.pos == input.length)
            return finishNested(stack);
        return null;
    };
    // Advance a given stack forward as far as it will go. Returns the
    // (possibly updated) stack if it got stuck, or null if it moved
    // forward and was given to `putStack`.
    ParseContext.prototype.advanceFully = function (stack) {
        var pos = stack.pos;
        for (;;) {
            var result = this.advanceStack(stack, null);
            if (!result)
                return stack;
            if (result.pos > pos) {
                this.putStack(result);
                return null;
            }
            stack = result;
        }
    };
    ParseContext.prototype.runRecovery = function (stacks, tokens) {
        var finished = null;
        for (var i = 0; i < stacks.length; i++) {
            var stack = stacks[i], token = tokens[i << 1], tokenEnd = tokens[(i << 1) + 1];
            var base = verbose ? stack + " -> " : "";
            var force = stack.split(), forceBase = base;
            for (var j = 0; force.forceReduce() && j < forceReduceLimit; j++) {
                if (verbose)
                    console.log(forceBase + force + " (via force-reduce)");
                var stopped = this.advanceFully(force);
                if (!stopped)
                    break;
                force = stopped;
                if (verbose)
                    forceBase = stopped + " -> ";
            }
            for (var _i = 0, _a = stack.recoverByInsert(token); _i < _a.length; _i++) {
                var insert = _a[_i];
                if (verbose)
                    console.log(base + insert + " (via recover-insert)");
                this.advanceFully(insert);
            }
            if (stack.cx.input.length > stack.pos) {
                if (tokenEnd == stack.pos) {
                    tokenEnd++;
                    token = 0 /* Err */;
                }
                stack.recoverByDelete(token, tokenEnd);
                if (verbose)
                    console.log(base + stack + (" (via recover-delete " + stack.cx.parser.getName(token) + ")"));
                this.putStack(stack);
            }
            else if (!stack.cx.parent && (!finished || finished.recovered > stack.recovered)) {
                finished = stack;
            }
        }
        return finished;
    };
    /// Force the parse to finish, generating a tree containing the nodes
    /// parsed so far.
    ParseContext.prototype.forceFinish = function () {
        return this.stacks[0].split().forceAll().toTree();
    };
    Object.defineProperty(ParseContext.prototype, "badness", {
        /// A value that indicates how successful the parse is so far, as
        /// the number of error-recovery steps taken divided by the number
        /// of tokens parsed. Could be used to decide to abort a parse when
        /// the input doesn't appear to match the grammar at all.
        get: function () {
            return this.stacks[0].recovered * 2 /* Token */ / this.tokenCount;
        },
        enumerable: true,
        configurable: true
    });
    ParseContext.prototype.scanForNestEnd = function (stack, endToken, filter) {
        var input = stack.cx.input;
        for (var pos = stack.pos; pos < input.length; pos++) {
            dummyToken.start = pos;
            dummyToken.value = -1;
            endToken.token(input, dummyToken, stack);
            if (dummyToken.value > -1 && (!filter || filter(input.read(pos, dummyToken.end))))
                return pos;
        }
        return input.length;
    };
    return ParseContext;
}());
/// A parser holds the parse tables for a given grammar, as generated
/// by `lezer-generator`.
var Parser = /** @class */ (function () {
    /// @internal
    function Parser(
    /// The parse states for this grammar @internal
    states, 
    /// A blob of data that the parse states, as well as some
    /// of `Parser`'s fields, point into @internal
    data, 
    /// The goto table. See `computeGotoTable` in
    /// lezer-generator for details on the format @internal
    goto, 
    /// A node group with the node types used by this parser.
    group, 
    /// The first repeat-related term id @internal
    minRepeatTerm, 
    /// The tokenizer objects used by the grammar @internal
    tokenizers, 
    /// Metadata about nested grammars used in this grammar @internal
    nested, 
    /// Points into this.data at an array of token types that
    /// are specialized @internal
    specializeTable, 
    /// For each specialized token type, this holds an object mapping
    /// names to numbers, with the first bit indicating whether the
    /// specialization extends or replaces the original token, and the
    /// rest of the bits holding the specialized token type. @internal
    specializations, 
    /// Points into this.data at an array that holds the
    /// precedence order (higher precedence first) for ambiguous
    /// tokens @internal
    tokenPrecTable, 
    /// An optional object mapping term ids to name strings @internal
    termNames) {
        if (termNames === void 0) { termNames = null; }
        this.states = states;
        this.data = data;
        this.goto = goto;
        this.group = group;
        this.minRepeatTerm = minRepeatTerm;
        this.tokenizers = tokenizers;
        this.nested = nested;
        this.specializeTable = specializeTable;
        this.specializations = specializations;
        this.tokenPrecTable = tokenPrecTable;
        this.termNames = termNames;
        this.nextStateCache = [];
        this.maxNode = this.group.types.length - 1;
        this.maxRepeatWrap = this.group.types.length + (this.group.types.length - minRepeatTerm) - 1;
        for (var i = 0, l = this.states.length / 6 /* Size */; i < l; i++)
            this.nextStateCache[i] = null;
    }
    /// Parse a given string or stream.
    Parser.prototype.parse = function (input, options) {
        if (typeof input == "string")
            input = new StringStream(input);
        var cx = new ParseContext(this, input, options);
        for (;;) {
            var done = cx.advance();
            if (done)
                return done;
        }
    };
    /// Create a `ParseContext`.
    Parser.prototype.startParse = function (input, options) {
        if (typeof input == "string")
            input = new StringStream(input);
        return new ParseContext(this, input, options);
    };
    /// Get a goto table entry @internal
    Parser.prototype.getGoto = function (state, term, loose) {
        if (loose === void 0) { loose = false; }
        var table = this.goto;
        if (term >= table[0])
            return -1;
        for (var pos = table[term + 1];;) {
            var groupTag = table[pos++], last = groupTag & 1;
            var target = table[pos++];
            if (last && loose)
                return target;
            for (var end = pos + (groupTag >> 1); pos < end; pos++)
                if (table[pos] == state)
                    return target;
            if (last)
                return -1;
        }
    };
    /// Check if this state has an action for a given terminal @internal
    Parser.prototype.hasAction = function (state, terminal) {
        var data = this.data;
        for (var set = 0; set < 2; set++) {
            for (var i = this.stateSlot(state, set ? 2 /* Skip */ : 1 /* Actions */), next = void 0; (next = data[i]) != 65535 /* End */; i += 3) {
                if (next == terminal || next == 0 /* Err */)
                    return data[i + 1] | (data[i + 2] << 16);
            }
        }
        return 0;
    };
    /// @internal
    Parser.prototype.stateSlot = function (state, slot) {
        return this.states[(state * 6 /* Size */) + slot];
    };
    /// @internal
    Parser.prototype.stateFlag = function (state, flag) {
        return (this.stateSlot(state, 0 /* Flags */) & flag) > 0;
    };
    /// @internal
    Parser.prototype.startNested = function (state) {
        var flags = this.stateSlot(state, 0 /* Flags */);
        return flags & 4 /* StartNest */ ? flags >> 10 /* NestShift */ : -1;
    };
    /// @internal
    Parser.prototype.validAction = function (state, action) {
        if (action == this.stateSlot(state, 4 /* DefaultReduce */))
            return true;
        for (var i = this.stateSlot(state, 1 /* Actions */);; i += 3) {
            if (this.data[i] == 65535 /* End */)
                return false;
            if (action == (this.data[i + 1] | (this.data[i + 2] << 16)))
                return true;
        }
    };
    /// Get the states that can follow this one through shift actions or
    /// goto jumps. @internal
    Parser.prototype.nextStates = function (state) {
        var cached = this.nextStateCache[state];
        if (cached)
            return cached;
        var result = [];
        for (var i = this.stateSlot(state, 1 /* Actions */); this.data[i] != 65535 /* End */; i += 3) {
            if ((this.data[i + 2] & (65536 /* ReduceFlag */ >> 16)) == 0 && !result.includes(this.data[i + 1]))
                result.push(this.data[i + 1]);
        }
        var table = this.goto, max = table[0];
        for (var term = 0; term < max; term++) {
            for (var pos = table[term + 1];;) {
                var groupTag = table[pos++], target = table[pos++];
                for (var end = pos + (groupTag >> 1); pos < end; pos++)
                    if (table[pos] == state && !result.includes(target))
                        result.push(target);
                if (groupTag & 1)
                    break;
            }
        }
        return this.nextStateCache[state] = result;
    };
    /// @internal
    Parser.prototype.overrides = function (token, prev) {
        var iPrev = findOffset(this.data, this.tokenPrecTable, prev);
        return iPrev < 0 || findOffset(this.data, this.tokenPrecTable, token) < iPrev;
    };
    /// Create a new `Parser` instance with different values for (some
    /// of) the nested grammars. This can be used to, for example, swap
    /// in a different language for a nested grammar or fill in a nested
    /// grammar that was left blank by the original grammar.
    Parser.prototype.withNested = function (spec) {
        return new Parser(this.states, this.data, this.goto, this.group, this.minRepeatTerm, this.tokenizers, this.nested.map(function (obj) {
            if (!Object.prototype.hasOwnProperty.call(spec, obj.name))
                return obj;
            return { name: obj.name, grammar: spec[obj.name], end: obj.end, placeholder: obj.placeholder };
        }), this.specializeTable, this.specializations, this.tokenPrecTable, this.termNames);
    };
    /// Create a new `Parser` instance whose node types have the given
    /// props added. You should use [`NodeProp.add`](#tree.NodeProp.add)
    /// to create the arguments to this method.
    Parser.prototype.withProps = function () {
        var _a;
        var props = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            props[_i] = arguments[_i];
        }
        return new Parser(this.states, this.data, this.goto, (_a = this.group).extend.apply(_a, props), this.minRepeatTerm, this.tokenizers, this.nested, this.specializeTable, this.specializations, this.tokenPrecTable, this.termNames);
    };
    /// Returns the name associated with a given term. This will only
    /// work for all terms when the parser was generated with the
    /// `--names` option. By default, only the names of tagged terms are
    /// stored.
    Parser.prototype.getName = function (term) {
        return this.termNames ? this.termNames[term] : String(term <= this.maxNode && this.group.types[term].name || term);
    };
    Object.defineProperty(Parser.prototype, "eofTerm", {
        /// The eof term id is always allocated directly after the node
        /// types. @internal
        get: function () { return this.maxRepeatWrap + 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parser.prototype, "hasNested", {
        /// Tells you whether this grammar has any nested grammars.
        get: function () { return this.nested.length > 0; },
        enumerable: true,
        configurable: true
    });
    /// (Used by the output of the parser generator) @internal
    Parser.deserialize = function (spec) {
        var tokenArray = decodeArray(spec.tokenData);
        var nodeNames = spec.nodeNames.split(" "), minRepeatTerm = nodeNames.length;
        for (var i = 0; i < spec.repeatNodeCount; i++)
            nodeNames.push("");
        var nodeProps = [];
        for (var i = 0; i < nodeNames.length; i++)
            nodeProps.push(noProps);
        function setProp(nodeID, prop, value) {
            if (nodeProps[nodeID] == noProps)
                nodeProps[nodeID] = Object.create(null);
            prop.set(nodeProps[nodeID], prop.deserialize(value));
        }
        setProp(0, lezerTree.NodeProp.error, "");
        if (spec.nodeProps)
            for (var _i = 0, _a = spec.nodeProps; _i < _a.length; _i++) {
                var propSpec = _a[_i];
                var prop = propSpec[0];
                for (var i = 1; i < propSpec.length; i += 2)
                    setProp(propSpec[i], prop, propSpec[i + 1]);
            }
        var group = new lezerTree.NodeGroup(nodeNames.map(function (name, i) { return new lezerTree.NodeType(name, nodeProps[i], i); }));
        return new Parser(decodeArray(spec.states, Uint32Array), decodeArray(spec.stateData), decodeArray(spec.goto), group, minRepeatTerm, spec.tokenizers.map(function (value) { return typeof value == "number" ? new TokenGroup(tokenArray, value) : value; }), (spec.nested || []).map(function (_a) {
            var name = _a[0], grammar = _a[1], endToken = _a[2], placeholder = _a[3];
            return ({ name: name, grammar: grammar, end: new TokenGroup(decodeArray(endToken), 0), placeholder: placeholder });
        }), spec.specializeTable, (spec.specializations || []).map(withoutPrototype), spec.tokenPrec, spec.termNames);
    };
    return Parser;
}());
var noProps = Object.create(null);
function findOffset(data, start, term) {
    for (var i = start, next = void 0; (next = data[i]) != 65535 /* End */; i++)
        if (next == term)
            return i - start;
    return -1;
}
// Strip the prototypes from objects, so that they can safely be
// accessed as maps.
function withoutPrototype(obj) {
    if (!(obj instanceof Object))
        return obj;
    var result = Object.create(null);
    for (var prop in obj)
        if (Object.prototype.hasOwnProperty.call(obj, prop))
            result[prop] = obj[prop];
    return result;
}
function findFinished(stacks) {
    var best = null;
    for (var _i = 0, stacks_1 = stacks; _i < stacks_1.length; _i++) {
        var stack = stacks_1[_i];
        if (stack.pos == stack.cx.input.length &&
            stack.cx.parser.stateFlag(stack.state, 2 /* Accepting */) &&
            (!best || best.recovered > stack.recovered))
            best = stack;
    }
    return best;
}
function finishNested(stack) {
    if (stack.cx.wrapType == -2)
        return null; // Another nested stack already finished
    var parent = stack.cx.parent, tree = stack.forceAll().toTree();
    var parentParser = parent.cx.parser, info = parentParser.nested[parentParser.startNested(parent.state)];
    tree = new lezerTree.Tree(tree.type, tree.children, tree.positions.map(function (p) { return p - parent.pos; }), stack.pos - parent.pos);
    if (stack.cx.wrapType > -1)
        tree = new lezerTree.Tree(parentParser.group.types[stack.cx.wrapType], [tree], [0], tree.length);
    stack.cx.wrapType = -2;
    parent.useNode(tree, parentParser.getGoto(parent.state, info.placeholder, true));
    if (verbose)
        console.log(parent + (" (via unnest " + (stack.cx.wrapType > -1 ? parentParser.getName(stack.cx.wrapType) : tree.type.name) + ")"));
    return parent;
}

exports.NodeGroup = lezerTree.NodeGroup;
exports.NodeProp = lezerTree.NodeProp;
exports.NodeType = lezerTree.NodeType;
exports.Subtree = lezerTree.Subtree;
exports.Tree = lezerTree.Tree;
exports.ExternalTokenizer = ExternalTokenizer;
exports.ParseContext = ParseContext;
exports.Parser = Parser;
exports.Stack = Stack;
exports.Token = Token;
exports.TokenGroup = TokenGroup;
//# sourceMappingURL=index.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/style-mod/src/style-mod.js":
/*!*************************************************!*\
  !*** ./node_modules/style-mod/src/style-mod.js ***!
  \*************************************************/
/*! exports provided: StyleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleModule", function() { return StyleModule; });
function sym(name, random) {
  return typeof Symbol == "undefined"
    ? "__" + name + (random ? Math.floor(Math.random() * 1e8) : "")
    : random ? Symbol(name) : Symbol.for(name)
}

const COUNT = sym("\u037c"), SET = sym("styleSet", 1), RULES = sym("rules", 1)
const top = typeof global == "undefined" ? window : global

// :: (Object<Style>, ?{generateClasses: ?boolean}) → StyleModule
// Instances of this class bind the property names from `spec` to CSS
// class names that assign the styles in the corresponding property
// values, unless `generateClasses` is `false`, in which case the
// property names in the spec are treated as plain CSS selectors.
//
// A style module can only be used in a given DOM root after it has
// been _mounted_ there with `StyleModule.mount`.
//
// Style modules should be created once and stored somewhere, as
// opposed to re-creating them every time you need them. The amount of
// CSS rules generated for a given DOM root is bounded by the amount
// of style modules that were used. So to avoid leaking rules, don't
// create these dynamically, but treat them as one-time allocations.
function StyleModule(spec, options) {
  this[RULES] = []
  for (let name in spec) {
    let style = spec[name], specificity = style.specificity || 0
    let id = StyleModule.newName(), selector = name
    if ((options && options.generateClasses) !== false) {
      let className = id
      selector = "." + id
      for (let i = 0; i < specificity; i++) {
        let name = "\u037c_" + (i ? i.toString(36) : "")
        selector += "." + name
        className += " " + name
      }
      this[name] = className
    }
    renderStyle(selector, spec[name], this[RULES])
  }
}

// :: () → string
// Generate a new unique CSS class name.
StyleModule.newName = () => {
  let id = top[COUNT] || 1
  top[COUNT] = id + 1
  return "\u037c" + id.toString(36)
}

StyleModule.prototype = Object.create(null)

// :: (union<Document, ShadowRoot>, union<[StyleModule], StyleModule>)
//
// Mount the given set of modules in the given DOM root, which ensures
// that the CSS rules defined by the module are available in that
// context.
//
// Rules are only added to the document once per root.
//
// Rule order will follow the order of the modules, so that rules from
// modules later in the array take precedence of those from earlier
// modules. If you call this function multiple times for the same root
// in a way that changes the order of already mounted modules, the old
// order will be changed.
StyleModule.mount = function(root, modules) {
  (root[SET] || new StyleSet(root)).mount(Array.isArray(modules) ? modules : [modules])
}

class StyleSet {
  constructor(root) {
    this.root = root
    root[SET] = this
    this.styleTag = (root.ownerDocument || root).createElement("style")
    let target = root.head || root
    target.insertBefore(this.styleTag, target.firstChild)
    this.modules = []
  }

  mount(modules) {
    let sheet = this.styleTag.sheet, reset = !sheet
    let pos = 0 /* Current rule offset */, j = 0 /* Index into this.modules */
    for (let i = 0; i < modules.length; i++) {
      let mod = modules[i], index = this.modules.indexOf(mod)
      if (index < j && index > -1) { // Ordering conflict
        this.modules.splice(index, 1)
        j--
        index = -1
      }
      if (index == -1) {
        this.modules.splice(j++, 0, mod)
        if (!reset) for (let k = 0; k < mod[RULES].length; k++)
          sheet.insertRule(mod[RULES][k], pos++)
      } else {
        while (j < index) pos += this.modules[j++][RULES].length
        pos += mod[RULES].length
        j++
      }
    }

    if (reset) {
      let text = ""
      for (let i = 0; i < this.modules.length; i++)
        text += this.modules[i][RULES].join("\n") + "\n"
      this.styleTag.textContent = text
    }
  }
}

function renderStyle(selector, spec, output) {
  if (typeof spec != "object") throw new RangeError("Expected style object, got " + JSON.stringify(spec))
  let props = []
  for (let prop in spec) {
    if (/^@/.test(prop)) {
      let local = []
      renderStyle(selector, spec[prop], local)
      output.push(prop + " {" + local.join(" ") + "}")
    } else if (/&/.test(prop)) {
      renderStyle(prop.replace(/&/g, selector), spec[prop], output)
    } else if (prop != "specificity") {
      if (typeof spec[prop] == "object") throw new RangeError("The value of a property (" + prop + ") should be a primitive value.")
      props.push(prop.replace(/_.*/, "").replace(/[A-Z]/g, l => "-" + l.toLowerCase()) + ": " + spec[prop])
    }
  }
  if (props.length) output.push(selector + " {" + props.join("; ") + "}")
}

// Style::Object<union<Style,string>>
//
// A style is an object that, in the simple case, maps CSS property
// names to strings holding their values, as in `{color: "red",
// fontWeight: "bold"}`. The property names can be given in
// camel-case—the library will insert a dash before capital letters
// when converting them to CSS.
//
// If you include an underscore in a property name, it and everything
// after it will be removed from the output, which can be useful when
// providing a property multiple times, for browser compatibility
// reasons.
//
// A property called `specificity` has a special meaning: if it holds
// a number _N_, greater than 0, the selector for the class will have
// _N_ extra dummy classes added, and those dummy classes will also be
// present in the class name string created for the style. This allows
// you to create rules that take precedence over other rules, even
// when they are defined earlier.
//
// A property in a style object can also be a sub-selector, which
// extends the current context to add a pseudo-selector or a child
// selector. Such a property should contain a `&` character, which
// will be replaced by the current selector. For example `{"&:before":
// {content: '"hi"'}}`. Sub-selectors and regular properties can
// freely be mixed in a given object. Any property containing a `&` is
// assumed to be a sub-selector.
//
// Finally, a property can specify an @-block to be wrapped around the
// styles defined inside the object that's the property's value. For
// example to create a media query you can do `{"@media screen and
// (min-width: 400px)": {...}}`.

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/w3c-keyname/index.es.js":
/*!**********************************************!*\
  !*** ./node_modules/w3c-keyname/index.es.js ***!
  \**********************************************/
/*! exports provided: default, base, keyName, shift */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyName", function() { return keyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shift", function() { return shift_1; });
var base = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'",
  229: "q"
};
var base_1 = base;

var shift = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ";",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: "\"",
  229: "Q"
};
var shift_1 = shift;

var chrome = typeof navigator != "undefined" && /Chrome\/(\d+)/.exec(navigator.userAgent);
var safari = typeof navigator != "undefined" && /Apple Computer/.test(navigator.vendor);
var gecko = typeof navigator != "undefined" && /Gecko\/\d+/.test(navigator.userAgent);
var mac = typeof navigator != "undefined" && /Mac/.test(navigator.platform);
var ie = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
var brokenModifierNames = chrome && (mac || +chrome[1] < 57) || gecko && mac;

// Fill in the digit keys
for (var i = 0; i < 10; i++) base[48 + i] = base[96 + i] = String(i);

// The function keys
for (var i = 1; i <= 24; i++) base[i + 111] = "F" + i;

// And the alphabetic keys
for (var i = 65; i <= 90; i++) {
  base[i] = String.fromCharCode(i + 32);
  shift[i] = String.fromCharCode(i);
}

// For each code that doesn't have a shift-equivalent, copy the base name
for (var code in base) if (!shift.hasOwnProperty(code)) shift[code] = base[code];

var keyName = function(event) {
  // Don't trust event.key in Chrome when there are modifiers until
  // they fix https://bugs.chromium.org/p/chromium/issues/detail?id=633838
  var ignoreKey = brokenModifierNames && (event.ctrlKey || event.altKey || event.metaKey) ||
    (safari || ie) && event.shiftKey && event.key && event.key.length == 1;
  var name = (!ignoreKey && event.key) ||
    (event.shiftKey ? shift : base)[event.keyCode] ||
    event.key || "Unidentified";
  // Edge sometimes produces wrong names (Issue #3)
  if (name == "Esc") name = "Escape";
  if (name == "Del") name = "Delete";
  // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8860571/
  if (name == "Left") name = "ArrowLeft";
  if (name == "Up") name = "ArrowUp";
  if (name == "Right") name = "ArrowRight";
  if (name == "Down") name = "ArrowDown";
  return name
};

var w3cKeyname = {
	base: base_1,
	shift: shift_1,
	keyName: keyName
};

/* harmony default export */ __webpack_exports__["default"] = (w3cKeyname);



/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = __webpack_require__(/*! @codemirror/next/view */ "./node_modules/@codemirror/next/view/dist/index.es.js");
var state_1 = __webpack_require__(/*! @codemirror/next/state */ "./node_modules/@codemirror/next/state/dist/index.es.js");
var commands = __webpack_require__(/*! @codemirror/next/commands */ "./node_modules/@codemirror/next/commands/dist/index.es.js");
var lang_javascript_1 = __webpack_require__(/*! @codemirror/next/lang-javascript */ "./node_modules/@codemirror/next/lang-javascript/dist/index.es.js");
var gutter_1 = __webpack_require__(/*! @codemirror/next/gutter */ "./node_modules/@codemirror/next/gutter/dist/index.es.js");
var highlight_1 = __webpack_require__(/*! @codemirror/next/highlight */ "./node_modules/@codemirror/next/highlight/dist/index.es.js");
var keymap_1 = __webpack_require__(/*! @codemirror/next/keymap */ "./node_modules/@codemirror/next/keymap/dist/index.es.js");
var helloTypeScriptProgram = "function hello(name: string) {\n  console.log(`hello ${name}`)\n}\n";
var state = state_1.EditorState.create({
    doc: helloTypeScriptProgram,
    extensions: [
        // create a static extension
        // great example of how facets bring value.
        // We could have created multiple consumers of
        // domEventHandlers facet consumers: extensions
        // extensions do the work, but the work 
        // is driven by facets
        view_1.EditorView.domEventHandlers.of({
            touchstart: onTouchStart,
            touchend: onTouchEnd
        }),
        keymap_1.keymap(commands.baseKeymap),
        gutter_1.lineNumbers(),
        highlight_1.defaultHighlighter,
        lang_javascript_1.javascript()
    ]
});
var editor = new view_1.EditorView({ state: state });
// move this to its own class
var clientXStart = null;
var clientYStart = null;
function onTouchStart(view, event) {
    var _a = event.changedTouches[0], clientX = _a.clientX, clientY = _a.clientY;
    clientXStart = clientX;
    clientYStart = clientY;
    return false;
}
// TODO: Add long gestures
function onTouchEnd(view, event) {
    var _a = event.changedTouches[0], clientX = _a.clientX, clientY = _a.clientY;
    var threshold = 40;
    if (clientX - clientXStart > threshold) {
        commands.moveWordRight(editor);
        return true;
    }
    if (clientXStart - clientX > threshold) {
        commands.moveWordLeft(editor);
        return true;
    }
    if (clientY - clientYStart > threshold) {
        commands.moveLineDown(editor);
        return true;
    }
    if (clientYStart - clientY > threshold) {
        commands.moveLineUp(editor);
        return true;
    }
    return false;
}
var style = editor.dom.style;
style.width = "100vw";
style.height = "50vh";
document.body.style.margin = "0px";
document.body.appendChild(editor.dom);
editor.focus();


/***/ })

/******/ });
//# sourceMappingURL=index.js.map