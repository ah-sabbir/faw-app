'use client'

import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef, useState } from "react";


interface editorProps {
    updated: boolean;
}

interface LoaderProps {
    src: string;
    width: number;
    quality?: number;
}

const imageLoader = ({ src, width, quality }:LoaderProps) => {
    return `${process.env.NEXT_PUBLIC_URL}/${src}?w=${width}&q=${quality || 75}`
  }



const Editor = ({updated}:editorProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const ref = useRef<EditorJS>();

    const initializeEditor = async () => {
        const Editorjs = (await import("@editorjs/editorjs")).default;
        const Header = (await import("@editorjs/header")).default;
        const ImageTool = (await import("@editorjs/image")).default;
        const Marker = (await import("@editorjs/marker")).default;
        const simpleImage = (await import("@editorjs/simple-image")).default;
        const FontSizeTool = (await import ("./utils/inline-font-size-tool/fontSizeTool")).default;
        // const fontFamilyTool = (await import ("./utils/inline-font-family-tool/fontFamilyTool"));
        const socialPost = (await import ('editorjs-social-post-plugin')).default;
        // import Embed from '@editorjs/embed';

        if(!ref.current) {
            ref.current = new Editorjs({
                holder: "builder",
                placeholder: "Let`s write an awesome story!",
                onChange: async (api, event) => {
                    api.saver.save().then((outputData) => {
                        // console.log("Article data: ", outputData);
                    }).catch((error) => {
                        console.log("Saving failed: ", error)
                    });
                },
                onReady: async () => {
                    console.log("Editor is ready to work!");
                },
                tools: {
                    fontSize: FontSizeTool as any,
                    socialPost: socialPost,
                    simpleImage: simpleImage,
                    header: {
                        class: Header,
                        inlineToolbar: true,
                        levels: [1, 2, 3, 4, 5, 6],
                        defaultLevel: 1,
                        defaultAlignment: 'left',
                    } as any,
                    marker: {
                        class: Marker,
                        shortcut: 'CMD+SHIFT+M',
                      },
                    // Image: ImageTool,
                    image: {
                        class: ImageTool,
                        inlineToolbar: true,
                        onChange: (e:Event) => {ref.current?.saver.save()},
                        config: {
                            uploader: {
                                /**
                                 * Upload file to the server and return an uploaded image data
                                 * @param {File} file - file selected from the device or pasted by drag-n-drop
                                 * @return {Promise.<{success, file: {url}}>}
                                 */
                                uploadByFile(file:File){
                                    const formData = new FormData();
                                    formData.append("image", file);
                                    return fetch(`${process.env.NEXT_PUBLIC_URL}/api/upload`, {
                                        method: "POST",
                                        body: formData,
                                    }).then((response) => {
                                        return response.json();
                                    }).then((result) => {
                                        console.log("result: ", result);
                                        return {
                                            success: 1,
                                            file: {
                                                url: `${process.env.NEXT_PUBLIC_URL}/_next/image?url=/_next/`+result.url+'&w=640&q=75',
                                            },
                                        };
                                    });
                                },
                            },
                        },
                    } as any,
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