import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
    <div class="loading-container">
      <div class="loading-spinner"></div>
    </div>
  `;
  main.appendChild(spinner);
};

// Attempt to initialize the editor, with a spinner fallback
let editor;
try {
  editor = new Editor();
} catch (error) {
  console.error('Failed to initialize the editor:', error);
  loadSpinner();
}

// Check if service workers are supported and register the Workbox service worker
if ('serviceWorker' in navigator) {
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register().then(() => {
    console.log('Service worker registered successfully.');
  }).catch((error) => {
    console.error('Service worker registration failed:', error);
  });
} else {
  console.error('Service workers are not supported in this browser.');
}
