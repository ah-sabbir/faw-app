export const EditorModule = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ size: [] }], // custom dropdown
        ["bold", "italic", "underline", "strike", "blockquote", "code-block"], // toggled buttons
        [
            { list: "ordered" }, 
            { list: "bullet" },
            { list: "check" },
            { list: "indent" },
            { list: "outdent" },
            {indent: "-1"},
            {indent: "+1"},
        ],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ direction: "rtl" }], // text direction
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ align: [] }],
        ["link", "image", "video"],
        ["clean"], // remove formatting button
    ],

};