// Ambient declarations for things Parcel resolves at build time but `tsc` does not.
// These exist so `npm run typecheck` can run over the real source tree.

// Parcel turns a CSS import into a build-time side effect.
declare module '*.css';

// markdown-it-ts ships no type declarations.
declare module 'markdown-it-ts' {
  interface MarkdownItOptions {
    html?: boolean;
  }
  interface MarkdownIt {
    render(markdown: string): string;
    renderInline(markdown: string): string;
  }
  export default function markdownIt(options?: MarkdownItOptions): MarkdownIt;
}
