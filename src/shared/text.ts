export function makeParagraphs(text: string) {
  const lines = text.split(/\r?\n/);
  const paragraphs: HTMLParagraphElement[] = [];
  lines.forEach(line => {
      let paragraph = document.createElement('p');
      paragraph.innerText = line;
      paragraphs.push(paragraph);
  });

  return paragraphs;
}