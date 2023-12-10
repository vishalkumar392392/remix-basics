import {
  require_node
} from "/build/_shared/chunk-6RXZO3DH.js";
import {
  Link,
  __toESM,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-SW2BQ3AV.js";

// app/routes/notes.$noteId.jsx
var import_node = __toESM(require_node());

// app/styles/note-details.css
var note_details_default = "/build/_assets/note-details-BRVJV52J.css";

// app/routes/notes.$noteId.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function NoteDetailsPage() {
  const note = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { id: "note-details", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/notes", children: "Back to all Notes" }, void 0, false, {
        fileName: "app/routes/notes.$noteId.jsx",
        lineNumber: 11,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/notes.$noteId.jsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: note.title }, void 0, false, {
        fileName: "app/routes/notes.$noteId.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/notes.$noteId.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { id: "note-details-content", children: note.content }, void 0, false, {
      fileName: "app/routes/notes.$noteId.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.$noteId.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
function links() {
  return [{ rel: "stylesheet", href: note_details_default }];
}
export {
  NoteDetailsPage as default,
  links
};
//# sourceMappingURL=/build/routes/notes.$noteId-TUGR44D5.js.map
