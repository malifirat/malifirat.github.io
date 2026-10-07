/* Videos load only after a visitor asks to play them. All content and links work without JavaScript. */
'use strict';
document.querySelectorAll('[data-video]').forEach(function (frame) {
  var button = frame.querySelector('button');
  if (!button) return;
  button.addEventListener('click', function () {
    if (frame.querySelector('iframe')) return;
    var id = frame.dataset.video;
    if (!/^[A-Za-z0-9_-]{11}$/.test(id)) return;
    var player = document.createElement('iframe');
    player.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
    player.title = frame.dataset.title || 'Project video';
    player.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture; fullscreen');
    player.setAttribute('allowfullscreen', '');
    player.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    frame.replaceChildren(player);
    player.focus();
  });
});
