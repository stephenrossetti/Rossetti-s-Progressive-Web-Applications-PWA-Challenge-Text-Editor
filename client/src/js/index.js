// Import Workbox class as well as js/css from other files //
import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

// Clear the content in #main //
const main = document.querySelector('#main');
main.innerHTML = '';

// loading spinner function //
const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

// Initializes the imported Editor function and creates new class //
const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}