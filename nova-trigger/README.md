# NOVA TRIGGER

Chrome extension that triggers a Relevance AI webhook.

## Development

```bash
npm install
npm run build
```

After running the build command, open Chrome's **Extensions** page and load the
contents of `nova-trigger/dist` as an unpacked extension. Loading the root
folder directly will fail because the `index.html` file in the source directory
expects to be served by Vite. You must load the prebuilt files from `dist/`
to avoid MIME type errors and the blank popup issue.
