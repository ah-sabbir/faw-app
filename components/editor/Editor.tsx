'use client'

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import { useEffect, useRef } from "react";

interface editorProps {
    updated: boolean;
}

const Editor = ({updated}:editorProps) => {


return (
    <>
        <div id="editorjs"></div>
    </>
)
}


export default Editor;