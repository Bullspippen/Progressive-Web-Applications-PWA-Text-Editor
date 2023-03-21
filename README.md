# Progressive-Web-Applications-PWA-Text-Editor

Text Editor is a Progressive Web Application (PWA) that allows users to create notes or code snippets with or without an internet connection. The app features data persistence techniques that ensure data is saved even when offline and includes both GET and PUT methods for IndexedDB object stores. Text Editor is bundled with webpack and uses babel to enable the use of async/await. It also features a service worker created with workbox that caches static assets for offline use and can be installed as a PWA.

## Features
- Create notes or code snippets with or without an internet connection
- Automatically saves content inside the text editor when the DOM window is unfocused
- Uses IndexedDB to create an object store and includes both GET and PUT methods
- Bundled with webpack and uses babel to enable the use of async/await
- Creates a service worker with workbox that caches static assets
- Can be installed as a Progressive Web Application

## Getting Started
To run Text Editor locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Bullspippen/Progressive-Web-Applications-PWA-Text-Editor.git`
2. Install dependencies: `npm install`
3. Start the server: `npm run start`

## How to Use
1. Open Text Editor in your web browser.
2. To create a new note or code snippet, click the "New" button.
3. Enter your content in the text editor.
4. To save your content, click off the DOM window or close the text editor.
5. To reopen a saved note or code snippet, click the "Open" button and select the note or code snippet you want to open.
6. To install Text Editor as a PWA, click the "Install" button and follow the prompts.

## Credits
Text Editor was created by **Mohamed Osman**