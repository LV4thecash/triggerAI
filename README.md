# TriggerAI

This repository contains the NOVA TRIGGER Chrome extension located in
`nova-trigger/`.

To run the extension locally and avoid the blank popup issue:

```bash
cd nova-trigger
npm install
npm run build
```

Then load the prebuilt `nova-trigger/dist` folder as an unpacked extension in
Chrome. Loading the root folder will not work because the source `index.html`
requires the Vite development server.
