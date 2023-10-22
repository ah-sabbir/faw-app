
'use client'

import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles
// import { modules, formats } from './Toolbar/Toolbar';
import type ReactQuill from 'react-quill';
import dynamic from 'next/dynamic';


const QuillWrapper = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    return RQ;
  },
  {
    ssr: false,
  }
) as typeof ReactQuill;

const imageHandler = async (e:any) => {
  console.log("the handler is working");
}

const modules = {
  toolbar: {
    container:[
    [{sizeStyle: ['small', false, 'large', 'huge']}],
    [{font:[], size:[]}],
    [{ header: [1, 2, 3, 4, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote', 'code'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{align: []}],
    [{ color: [] }, { background: [] }],
    ['link', 'image', 'video'],
    ['clean'],
    ],
    handlers: {  
      image: imageHandler  
    } 
  },
  clipboard: {
    matchVisual: false,
  },
  
};

const formats = [
  'font',
  'size',
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'code',
  'list',
  'bullet',
  'align',
  'color',
  'background',
  'link',
  'image',
  'video',
];


const BlogEditor = ({content, onChange}:any) => {
    
  return <QuillWrapper theme="snow" value={content} onChange={onChange} modules={modules} formats={formats} placeholder="Write something amazing..."/>;
  
};

export default BlogEditor;