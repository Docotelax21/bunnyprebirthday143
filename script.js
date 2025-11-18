/* Shared script for hearts, polaroids, open-when, extras */
document.addEventListener('DOMContentLoaded', () => {

  // SAMPLE MESSAGES (for demo) — replace / expand with your full 143 messages array
  const MESSAGES = [
    "I love the way your smile starts my day.",
    "Your laugh is my favourite song.",
    "I love your hands they fit perfectly in mine.",
    "How you always make everyting feel cozy.",
    "Your stubbornness when you're right.",
    "The way you look at me.",
    "How you make food taste like home.",
    "You always making tiktoks.",
    "The way you look when concentrating.",
    "becuase you're the best girlfriend."
  ];

  // Populate hearts grid (used on index.html and 143.html)
  const heartsGrid = document.getElementById('heartsGrid');
  const reasonPanel = document.getElementById('reasonPanel');
  if (heartsGrid && reasonPanel) {
    // Clear existing
    heartsGrid.innerHTML = '';
    for (let i = 1; i <= 143; i++) {
      const div = document.createElement('div');
      div.className = 'heart';
      // cycle messages so demo works — replace with full array mapping if you paste 143 messages
      const msgIndex = (i - 1) % MESSAGES.length;
      div.dataset.msg = MESSAGES[msgIndex];
      div.innerHTML = '<span class="icon">❤</span>';
      div.addEventListener('click', () => {
        // toggle reveal
        if (div.classList.contains('revealed')) {
          div.classList.remove('revealed');
          reasonPanel.textContent = '';
          return;
        }
        // hide any other revealed
        document.querySelectorAll('.heart.revealed').forEach(h => h.classList.remove('revealed'));
        div.classList.add('revealed');
        reasonPanel.textContent = i + '. ' + div.dataset.msg;
      });
      heartsGrid.appendChild(div);
    }
  }

  // Polaroid click: open full image in new tab (simple lightbox)
  document.querySelectorAll('.polaroid').forEach(p => {
    p.addEventListener('click', () => {
      const img = p.querySelector('img');
      if (img && img.src) window.open(img.src, '_blank');
    });
  });

  // Extras: gift box click (if present)
  const gift = document.getElementById('giftBox');
  if (gift) {
    gift.addEventListener('click', () => {
      alert('Surprise: your real gift will come on 19 March at 01:00 — 143 hours before her birthday.');
    });
  }

  // Quiz stub (if present)
  const quizBtn = document.getElementById('quizSubmit');
  if (quizBtn) {
    quizBtn.addEventListener('click', () => {
      alert('Quiz submitted — customize script.js to show a friendly result message.');
    });
  }

});
