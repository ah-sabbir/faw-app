'use client'

import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef, useState } from "react";


interface editorProps {
    updated: boolean;
}



const Editor = ({updated}:editorProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const ref = useRef<EditorJS>();

    const initializeEditor = async () => {
        const Editorjs = (await import("@editorjs/editorjs")).default;
        const Header = (await import("@editorjs/header")).default;
        const ImageTool = (await import("@editorjs/image")).default;

        if(!ref.current) {
            ref.current = new Editorjs({
                holder: "builder",
                placeholder: "Let`s write an awesome story!",
                // onChange: (e) => {console.log("Changed: ", JSON.stringify(e))},
                onReady() {
                    console.log("Editor is ready to work!");
                },
                tools: {
                    header: Header,
                    Image: ImageTool,
                    // image: {
                    //     config: {
                    //         endpoints: {
                    //             byFile: process.env.NEXT_PUBLIC_URL+ `/api/upload`,
                    //             // byUrl: "http://localhost:3000/api/fetchImage",
                    //         },
                    //         additionalRequestHeaders: {
                    //             "Access-Control-Allow-Origin": "*",
                    //         },
                    //     },
                    // },
                },
            });
        }
    }

    useEffect(() => {
        if(typeof window !== "undefined") {
            setIsMounted(true);
        }
    }, [])

    useEffect(() => {
        const init = async () => {
            await initializeEditor();
        }
        if(isMounted) {
            init();
            return () => {
                if(ref.current){
                    ref.current.destroy();
                }
            };
        }

    }, [isMounted])

    const save = () =>{
        if(ref.current){
           ref.current.save().then((outputData) => {
            console.log("working save function");
                console.log("Article data: ", outputData);
            }).catch((error) => {
                console.log("Saving failed: ", error)
            });
        }
    }

    useEffect(() => {
        if(updated){
            save();
        }
    }, [updated])

return (
    <>
        <div id="builder"></div>
    </>
)
}


export default Editor;