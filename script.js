// Reductive Lie Neurons — project page interactions

document.addEventListener('DOMContentLoaded', function () {
  // Copy BibTeX to clipboard
  var btn = document.getElementById('copy-bibtex');
  var pre = document.getElementById('bibtex-text');
  if (btn && pre) {
    btn.addEventListener('click', function () {
      var text = pre.innerText;
      var done = function () {
        var original = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(function () { btn.textContent = original; }, 1500);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(fallback);
      } else {
        fallback();
      }
      function fallback() {
        var ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); done(); } catch (e) {}
        document.body.removeChild(ta);
      }
    });
  }
});
