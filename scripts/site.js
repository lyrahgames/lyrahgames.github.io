function open_site_nav() {
  document.querySelector('html').style.overflow = 'hidden';
  document.getElementById('site-nav-links').style.width = '250px';

  document.getElementById('site-nav-close-area').style.width = '100%';
  document.getElementById('site-nav-close-area').style.backgroundColor =
    '#2225';
}

function close_site_nav_transitionend_callback() {
  document.getElementById('site-nav-close-area').style.width = '0';
  document.getElementById('site-nav-close-area')
    .removeEventListener(
      'transitionend', close_site_nav_transitionend_callback);
}

function close_site_nav() {
  document.querySelector('html').style.overflow = 'unset';
  document.getElementById('site-nav-links').style.width = '0';

  document.getElementById('site-nav-close-area').style.backgroundColor =
    '#2220';
  document.getElementById('site-nav-close-area')
    .addEventListener('transitionend', close_site_nav_transitionend_callback);
}