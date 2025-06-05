# NOVA TRIGGER

Chrome extension that triggers a Relevance AI webhook.

## Development

```bash
npm install
npm run build
```

After running the build command, open Chrome's **Extensions** page and load the
`nova-trigger/dist` directory as an unpacked extension. Opening `index.html`
from the root folder will cause a MIME type error because the React source files
are not compiled. Always use the contents of the `dist` folder when testing the
extension.
