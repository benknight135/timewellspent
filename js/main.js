window.onload = () => {
  'use strict';

  let newWorker;

  function showUpdateBar() {
    let update_notif = document.getElementById('update-notif');
    update_notif.className = 'show';
  }

  function showNoUpdateBar() {
    let noupdate_notif = document.getElementById('noupdate-notif');
    noupdate_notif.className = 'show';
  }

  // The click event on the pop up notification
  document.getElementById('reload').addEventListener('click', function(){
    newWorker.postMessage({ action: 'skipWaiting' });
  });

  if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('./sw.js').then(reg => {
      reg.addEventListener('updatefound', () => {
        // A wild service worker has appeared in reg.installing!
        newWorker = reg.installing;

        newWorker.addEventListener('statechange', () => {
          // Has network.state changed?
          switch (newWorker.state) {
            case 'installed':
              if (navigator.serviceWorker.controller) {
                // new update available
                showUpdateBar();
              } else {
                showNoUpdateBar();
              }
              // No update available
              break;
          }
        });
      });
    });

    let refreshing;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (refreshing) return;
      window.location.reload();
      refreshing = true;
    });
  }
}
