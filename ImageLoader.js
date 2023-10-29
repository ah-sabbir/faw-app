export default function ImageLoader({ src }) {
    return `${process.env.NEXT_PUBLIC_URL}/${src}`;
  }