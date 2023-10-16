
'use client'

import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles
// import ReactQuill from 'react-quill';

import type ReactQuill from 'react-quill';
import dynamic from 'next/dynamic';
const QuillWrapper = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    // eslint-disable-next-line react/display-name
    return ({ ...props }) => <RQ {...props} />;
  },
  {
    ssr: false,
  }
) as typeof ReactQuill;


const modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['bold', 'italic', 'underline'],
    ['link', 'image', 'video'],
    [{ 'align': [] }],
    ['clean']
  ],
};

const formats = [
  'header', 'font', 'size',
  'list', 'bullet',
  'bold', 'italic', 'underline',
  'link', 'image', 'video', 'align'
];

const BlogEditor = ({content, onChange}:any) => {
    
  return <QuillWrapper theme="snow" value={content} onChange={onChange} modules={modules} formats={formats} placeholder="Write something amazing..."/>;
  
};

export default BlogEditor;