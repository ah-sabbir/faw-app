"use client";
import { useTheme } from "next-themes";
import {
    BlockNoteEditor,
    PartialBlock,
    uploadToTmpFilesDotOrg_DEV_ONLY
} from "@blocknote/core";

import {
    BlockNoteView,
    useBlockNote,
} from "@blocknote/react";

import "@blocknote/core/style.css";



interface EditorProps {
    onChange: (value: string) => void;
    initialContent?: any;
    editable?: boolean;
}


// export type BlockNoteEditorOptions = Partial<{
//     editable: boolean;
//     editorDOMAttributes: Record<string, string>;
//     onEditorReady: (editor: BlockNoteEditor) => void;
//     onEditorContentChange: (editor: BlockNoteEditor) => void;
//     onTextCursorPositionChange: (editor: BlockNoteEditor) => void;
//     defaultStyles: boolean;
//     uploadFile: (file: File) => Promise<string>;
//   }>;


export const Editor = ({
    onChange,
    initialContent,
    editable
}: EditorProps) => {
    const { theme } = useTheme();

    const editor:BlockNoteEditor = useBlockNote({
        editable,
        initialContent: initialContent ? JSON.parse(initialContent) : undefined,
        onEditorContentChange: (editor)=>{
            onChange(JSON.stringify(editor.topLevelBlocks, null, 2))
        }
    });

    const resolveTheme = theme === "dark" ? "dark" : "light";

return (
    <div>
        <BlockNoteView 
        editor={editor}
        theme={resolveTheme}
        />
    </div>
)
}
