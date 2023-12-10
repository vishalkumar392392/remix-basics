import {
  Form,
  __toESM,
  require_jsx_dev_runtime,
  useActionData,
  useNavigation
} from "/build/_shared/chunk-SW2BQ3AV.js";

// app/components/NewNote.css
var NewNote_default = "/build/_assets/NewNote-HBKIPWFQ.css";

// app/components/NewNote.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function NewNote() {
  const navigation = useNavigation();
  const data = useActionData();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", id: "note-form", children: [
    (data == null ? void 0 : data.message) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: data.message }, void 0, false, {
      fileName: "app/components/NewNote.jsx",
      lineNumber: 12,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", children: "Title" }, void 0, false, {
        fileName: "app/components/NewNote.jsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "title", name: "title", required: true }, void 0, false, {
        fileName: "app/components/NewNote.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NewNote.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "content", children: "Content" }, void 0, false, {
        fileName: "app/components/NewNote.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { id: "content", name: "content", rows: "5", required: true }, void 0, false, {
        fileName: "app/components/NewNote.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NewNote.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-actions", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { disabled: isSubmitting, children: isSubmitting ? "Adding..." : "Add Note" }, void 0, false, {
      fileName: "app/components/NewNote.jsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/NewNote.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/NewNote.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var NewNote_default2 = NewNote;
function links() {
  return [{ rel: "stylesheet", href: NewNote_default }];
}

export {
  NewNote_default2 as NewNote_default,
  links
};
//# sourceMappingURL=/build/_shared/chunk-GNZUAOKE.js.map
