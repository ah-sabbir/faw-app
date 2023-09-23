// Editor.jsx
import { Puck } from "@measured/puck";
import "@measured/puck/dist/index.css";

// Create puck component config
const config:any = {
  components: {
    HeadingBlock: {
      fields: {
        children: {
          type: "text",
        },
      },
      render: ({ children }:any) => {
        return <h1>{children}</h1>;
      },
    },
  },
};

// Describe the initial data
const initialData:any = {
  content: [],
  root: {},
};

// Save the data to your database
const save = (data:any) => {};


const Editor = () => {
    return <Puck config={config} data={initialData} onPublish={save} />;
}


export default Editor;