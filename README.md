# Marvel Marathon

A responsive chronological Marvel marathon task-list website.

## Deploy to Netlify

Connect this repository to Netlify and deploy the `main` branch. The included `netlify.toml` publishes the site from the repository root and configures the progress-storage function. No database credentials or environment variables are required; progress is stored in Netlify Blobs.

After deployment, the first visit creates a random browser ID. Progress is saved locally immediately and synced to Netlify Blobs, so it survives refreshes and can be retrieved on that same browser. This tracker does not include sign-in or cross-device account syncing; clearing browser storage loses the ID used to retrieve its cloud progress.

For local preview, run `npm install` and `npx netlify dev`, then open the local URL Netlify CLI prints. A plain static server still works, but cloud sync requires Netlify's local function runtime.

## Features

- Chronological timeline with film and series filters
- Persistent watch progress with localStorage and Netlify Blobs
- Progress ring and completion percentage
- Reset progress control
- Responsive desktop and mobile layout
