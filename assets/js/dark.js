const btn = document.getElementById('btn');

btn.addEventListener('click', changeTheme);

function changeTheme() {
  if (btn.textContent === 'Dark') {
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then(function (reg) {
            reg.showNotification('Dark Theme Enabled').then(r => {
                console.log('Returned notification')
            });
        });
    }
    smoothTransition();
    btn.classList.add('btn-animation');
    btn.innerHTML = 'Light';
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then(function (reg) {
            reg.showNotification('Light Theme Enabled').then(r => {
                console.log('Returned notification')
            });
        });
    }
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
