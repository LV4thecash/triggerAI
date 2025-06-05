# NOVA TRIGGER

Chrome extension that triggers a Relevance AI webhook.

## Usage

The extension is prebuilt in the `dist/` directory.

1. Open Chrome's **Extensions** page.
2. Enable **Developer mode**.
3. Click **Load unpacked** and choose the `dist` folder.

Loading the root source directory will fail because `index.html` expects the
Vite development server.

## Development

To modify the code and rebuild:

```bash
npm install
npm run build
```
