import {
  NewNote_default,
  links
} from "/build/_shared/chunk-GNZUAOKE.js";
import {
  require_node
} from "/build/_shared/chunk-6RXZO3DH.js";
import {
  Link,
  __toESM,
  require_jsx_dev_runtime,
  useCatch,
  useLoaderData
} from "/build/_shared/chunk-SW2BQ3AV.js";

// app/routes/notes.jsx
var import_node = __toESM(require_node());

// app/components/NoteList.css
var NoteList_default = "/build/_assets/NoteList-KS7CKPGL.css";

// app/components/NoteList.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function NoteList({ notes }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { id: "note-list", children: notes.map(
    (note, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "note", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: note.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "note-meta", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
            "#",
            index + 1
          ] }, void 0, true, {
            fileName: "app/components/NoteList.jsx",
            lineNumber: 13,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("time", { dateTime: note.id, children: new Date(note.id).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
          }) }, void 0, false, {
            fileName: "app/components/NoteList.jsx",
            lineNumber: 15,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/NoteList.jsx",
            lineNumber: 14,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/NoteList.jsx",
          lineNumber: 12,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: note.title }, void 0, false, {
          fileName: "app/components/NoteList.jsx",
          lineNumber: 26,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/NoteList.jsx",
        lineNumber: 11,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: note.content }, void 0, false, {
        fileName: "app/components/NoteList.jsx",
        lineNumber: 28,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NoteList.jsx",
      lineNumber: 10,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/NoteList.jsx",
      lineNumber: 9,
      columnNumber: 11
    }, this) }, note.id, false, {
      fileName: "app/components/NoteList.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ) }, void 0, false, {
    fileName: "app/components/NoteList.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var NoteList_default2 = NoteList;
function links2() {
  return [{ rel: "stylesheet", href: NoteList_default }];
}

// app/routes/notes.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var Notes = () => {
  const notes = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NewNote_default, {}, void 0, false, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NoteList_default2, { notes }, void 0, false, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
};
var notes_default = Notes;
function links3() {
  return [...links(), ...links2()];
}
function meta() {
  return {
    title: "All Notes",
    description: "Manage your notes with ease."
  };
}
function CatchBoundary() {
  var _a;
  const caughtResponse = useCatch();
  const message = ((_a = caughtResponse.data) == null ? void 0 : _a.message) || "Data not found";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NewNote_default, {}, void 0, false, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "info-message", children: message }, void 0, false, {
      fileName: "app/routes/notes.jsx",
      lineNumber: 64,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.jsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}
export {
  CatchBoundary,
  notes_default as default,
  links3 as links,
  meta
};
//# sourceMappingURL=/build/routes/notes-V2KV2MXC.js.map
