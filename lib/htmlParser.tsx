function convertTHTML(data: any[]): string {

 const html = [];

  for (const block of data) {
    const tagName = block.type;
    const children = block.children;

    html.push(`<${tagName}`);

    // Handle block-specific attributes
    switch (tagName) {
      case "paragraph":
        html.push(` style="text-align: left;"`); // Apply default text alignment
        break;
      case "header":
        const headerLevel = parseInt(block.data.level, 10); // Safely parse header level
        html.push(` level="${headerLevel}"`);
        break;
      // Add cases for other blocks with specific attributes as needed
      default:
        // No additional attributes for other block types
    }

    html.push(">");

    if (children) {
      html.push(convertTHTML(children));
    }

    // Handle text blocks with potential formatting
    if (tagName === "text") {
      const text = block.text;
      const hasBold = text.includes("**");
      const hasItalic = text.includes("*");
      const formattedText = text
        .replace(/\*\*/g, "<strong>$&</strong>")
        .replace(/\*/g, "<em>$&</em>");
      html.push(formattedText);
    }

    html.push(`</${tagName}>`);
  }

  return html.join("");
}


export default convertTHTML;