const btn = document.getElementById('btn');

btn.addEventListener('click', changeTheme);

function changeTheme() {
  if (btn.textContent === 'Dark') {
    smoothTransition();
    btn.classList.add('btn-animation');
    btn.innerHTML = 'Light';
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    smoothTransition();
    btn.classList.add('btn-animation');
    btn.innerHTML = 'Dark';
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

function smoothTransition() {
  document.documentElement.classList.add('transition');

  setTimeout(() => {
    btn.classList.remove('btn-animation');
    document.documentElement.classList.remove('transition');
  }, 1000);
}
