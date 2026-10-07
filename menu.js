
function toggleMenu() {
  const menu = document.getElementById('menuContent');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}

function closeMenu() {
  const menu = document.getElementById('menuContent');
  menu.style.display = 'none';
}

window.addEventListener('DOMContentLoaded', function() {
  const menu = document.getElementById('menuContent');
  const burger = document.querySelector('.burger');
  fetch('menu.html')
  .then(response => response.text())
  .then(html => {
    menu.innerHTML = html;
  })
  .catch(error => {
    console.error('Error loading menu:', error);
    document.getElementById('menuContent').innerHTML = '<a href="index.html">Error loading menu</a>';
  });
  window.addEventListener("click", function(event) {
    if (menu.style.display === 'block' && !menu.contains(event.target) && !burger.contains(event.target)) {
      closeMenu();
    }
  });
  window.addEventListener('keydown', function(event) {
    if (menu.style.display === 'block' && event.key === 'Escape') {
      closeMenu();
    }
  });
});
