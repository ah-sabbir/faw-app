function textParser(data: any[]): string {

 const texts = [];

  for (const block of data) {
    const tagName = block.type;
    const children = block.children;

    if (children) {
      texts.push(textParser(children));
    }
    // Handle text blocks with potential formatting
    if (tagName === "text") {
      const text = block.text;
      const hasBold = text.includes("**");
      const hasItalic = text.includes("*");
      const formattedText = text
        .replace(/\*\*/g, "<strong>$&</strong>")
        .replace(/\*/g, "<em>$&</em>");
        texts.push(formattedText);
    }
  }

  return texts.join("");
}


export default textParser;