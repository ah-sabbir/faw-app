
'use client'

import 'react-quill/dist/quill.snow.css'; // Import Quill styles
// import { modules, formats } from './Toolbar/Toolbar';
import type ReactQuill from 'react-quill';
import dynamic from 'next/dynamic';
import './Editor.css';
import ImageModal from './utils/imageModal';
import { useEffect, useRef, useState } from 'react';


const QuillWrapper = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    return RQ;
  },
  {
    ssr: false,
  }
) as typeof ReactQuill;




const BlogEditor = ({content, onChange, onImageSelectorChange, ...props}:any) => {

  // const [isModalOpen, setIsModalOpen] = useState(false);

  
  const imageHandler = async (e:any) => {
    onImageSelectorChange(true,e);
  }
  
  const modules = {
    toolbar: {
      container:[
      [{ size:[]}],
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
    'size',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'code',
    'list',
    'ordered',
    'bullet',
    'align',
    'color',
    'background',
    'link',
    'image',
    'video',
  ];
    
  return <>
        <QuillWrapper theme="snow" value={content} onChange={onChange} modules={modules} formats={formats} placeholder="Write something amazing..."/>
        {/* <ImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
  </>
  
};

export default BlogEditor;