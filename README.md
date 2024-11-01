# textify

Testify is a simple, responsive, and efficient text editor designed for developers and writers who want a clean, distraction-free writing experience. Built as a Progressive Web Application (PWA), Testify can be used both online and offline, allowing you to work seamlessly no matter where you are.

Table of Contents
Features
Installation
Usage
Technologies Used
Contributing
License
Features
Offline Support: Testify is a Progressive Web Application, allowing users to access and edit content without an internet connection.
Automatic Saving: Your work is automatically saved in the browser's local storage and IndexedDB, ensuring no data is lost.
Code Syntax Highlighting: Ideal for developers, Testify supports syntax highlighting for various programming languages.
Customizable Themes: Switch between light and dark modes to enhance readability and reduce eye strain.
Installable on Desktop and Mobile: Install Testify as a standalone app on any device for quick access.
Installation
To set up Testify locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/testify.git
cd testify
Install Dependencies: Make sure you have Node.js installed, then run:

bash
Copy code
npm install
Build the Client:

bash
Copy code
npm run build
Start the Application: In development mode:

bash
Copy code
npm run start:dev
In production mode:

bash
Copy code
npm start
Access the Application: Once the server is running, open your browser and navigate to http://localhost:3000.

Usage
Basic Editing
Open Testify: Start by opening the application in your browser.
Create or Edit Content: Start typing in the editor. Content will be saved automatically.
Change Themes: Toggle between light and dark themes in the settings menu.
Syntax Highlighting: If writing code, the editor will highlight syntax for supported languages.
Install the PWA: Click the "Install" button to install Testify on your device and use it offline.
Offline Use
Testify saves all content locally, allowing you to access it even when offline. Once you reconnect, any new data is automatically synced to your latest state.

Technologies Used
Frontend: HTML, CSS, JavaScript, CodeMirror (for syntax highlighting)
Backend: Node.js, Express.js
Database: IndexedDB (for offline content storage)
Build Tools: Webpack
Service Worker: Workbox for caching assets and enabling offline functionality
Contributing
Contributions are welcome! Here’s how you can contribute:

Fork the Repository: Create your own fork of the project.
Create a Feature Branch: Make a branch for your feature or bug fix.
bash
Copy code
git checkout -b feature/YourFeature
Make Your Changes: Implement your changes and commit.
Submit a Pull Request: Push your branch and open a pull request with a description of your changes.
License
This project is licensed under the MIT License. See the LICENSE file for more information.

Testify offers a streamlined, no-nonsense text editing experience, combining the essentials of a code editor with the versatility of a PWA. We hope Testify becomes your go-to tool for efficient, accessible, and offline-enabled text editing!
