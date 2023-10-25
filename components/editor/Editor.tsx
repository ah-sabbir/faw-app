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
        // const Image = (await import("@editorjs/image")).default;

        if(!ref.current) {
            ref.current = new Editorjs({
                holder: "builder",
                placeholder: "Let`s write an awesome story!",
                tools: {
                    header: Header,
                    // image: {
                    //     class: Image,
                    //     config: {
                    //         endpoints: {
                    //             byFile: "http://localhost:3000/api/uploadImage",
                    //             byUrl: "http://localhost:3000/api/fetchImage",
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