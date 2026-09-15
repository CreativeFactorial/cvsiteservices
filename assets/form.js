// Sends quote forms to Formspree in the background, then shows our own thank-you page.
// Formspree's free plan ignores _next, so the redirect has to happen here.
(function () {
  var THANK_YOU = 'thank-you.html';

  document.querySelectorAll('form.form-grid[action*="formspree.io"]').forEach(function (form) {
    var button = form.querySelector('button[type="submit"]');
    var note = form.querySelector('.form-note');
    var noteText = note ? note.textContent : '';

    form.addEventListener('submit', function (e) {
      if (!window.fetch || !window.FormData) return; // very old browser: let the normal post happen
      e.preventDefault();

      var label = button ? button.textContent : '';
      if (button) { button.disabled = true; button.textContent = 'Sending…'; }
      if (note) { note.textContent = noteText; note.removeAttribute('role'); }

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then(function (res) {
          if (res.ok) { window.location.href = THANK_YOU; return; }
          return res.json().catch(function () { return {}; }).then(function (data) {
            var msg = data && data.errors && data.errors.length
              ? data.errors.map(function (x) { return x.message; }).join(' ')
              : 'Something went wrong sending your request.';
            throw new Error(msg);
          });
        })
        .catch(function (err) {
          if (button) { button.disabled = false; button.textContent = label; }
          if (note) {
            var msg = err.message.replace(/[.!?]?\s*$/, '.');
            note.textContent = msg + ' Please try again, or call (406) 404-9963.';
            note.setAttribute('role', 'alert');
          }
        });
    });
  });
})();
