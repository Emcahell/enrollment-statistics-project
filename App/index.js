import { App } from './App.js';

document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'block';
  }

  App();

  if (loader) {
    loader.style.display = 'none';
  }
});

window.addEventListener('hashchange', () => {
  App();
});