'use client'

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import { useEffect, useRef } from "react";

interface editorProps {
    updated: boolean;
}

const Editor = ({updated}:editorProps) => {

    useEffect(() => {
        const editor = new EditorJS({
            holder:'editorjs',
            placeholder: 'Let`s write an awesome story!',
            tools: {
                header: Header,
            },
        });

        return () => {
            editor.isReady.then(() => {
                editor.save();
            });
        };

    }, [updated])

return (
    <>
        <div id="editorjs"></div>
    </>
)
}


export default Editor;