import Image from "next/image";

interface Block {
    data: {
        text: string;
        level?: number;
        embed?: string;
    };
    id: string;
    type: string;
    Prototype: Object;
}

export function CustomImg(props:any) {
    const {url, caption,stretched, withBackground, withBorder, ...otherProps} = props;
    return <><Image {...props} quality={80} sizes="(max-width: 768px) 100vw, 33vw" width={100} height={100} alt={caption}/><br /><em>${caption}</em></>;
}


export default function Parse(props:any) {
    const { blocks } = props;
    // console.log(blocks)
    var convertedHtml = "";
    blocks.map((block:Block,i:any) => {
        console.log(block);
      
      switch (block.type) {
        case "header":
          convertedHtml += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
          break;
        case "embded":
          convertedHtml += `<div><iframe width="560" height="315" src="${block.data.embed}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
          break;
        case "paragraph":
            convertedHtml += `<p>${block.data.text}</p>`;
            break;
        case "delimiter":
          convertedHtml += "<hr />";
          break;
        case "image":
          convertedHtml += CustomImg(block.data).toString();
          break;
        case "simpleImage":
            convertedHtml += CustomImg(block.data).toString();
        case "list":
            convertedHtml += "<ul>";
            (block.data as any)?.items.forEach(function(li:HTMLLIElement) {
                convertedHtml += `<li>${li}</li>`;
            });
            convertedHtml += "</ul>";
            break;
        default:
          console.log("Unknown block type", block.type);
          break;
      }
    });
    return convertedHtml;
  }