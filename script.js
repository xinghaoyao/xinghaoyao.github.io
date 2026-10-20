'use strict';
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
function preserveProfileLinks() {
  if (!document.body.classList.contains('research-page')) return;
  if (['#about', '#teaching'].includes(location.hash)) {
    location.replace('about.html' + location.hash);
  }
}
window.addEventListener('hashchange', preserveProfileLinks);
preserveProfileLinks();
