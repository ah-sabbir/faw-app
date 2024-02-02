'use client'
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import Link from 'next/link';

const Renderer = ({BlockProps}:any) => {
  return (
    <BlocksRenderer
      content={BlockProps}
      blocks={{
        // You can use the default components to set class names...
        paragraph: ({ children }) => <p className="text-neutral-900 max-w-prose pt-3 pb-3">{children}</p>,
        // ...or point to a design system
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <h1 className="pt-3 pb-3">{children}</h1>
            case 2:
              return <h2 className="pt-3 pb-3">{children}</h2>
            case 3:
              return <h3 className="pt-3 pb-3">{children}</h3>
            case 4:
              return <h4 className="pt-3 pb-3">{children}</h4>
            case 5:
              return <h5 className="pt-3 pb-3">{children}</h5>
            case 6:
              return <h6 className="pt-3 pb-3">{children}</h6>
            default:
              return <h1 className="pt-3 pb-3">{children}</h1>
          }
        },
        // For links, you may want to use the component from your router or framework
        link: ({ children, url }) => <Link href={url}>{children}</Link>,
      }}
      modifiers={{
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <span className="italic">{children}</span>,
      }}
    />
  );
};

export default Renderer;