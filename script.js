
// Shared script.js for all pages
document.addEventListener('DOMContentLoaded', () => {
  // 143 messages (shortened for brevity, include full 143 if you want)
  const MESSAGES = [
    "1. I love the way your smile starts my day.",
    "2. Your laugh is my favourite song.",
    "3. I love your hands — they fit perfectly in mine.",
    "4. How you make tea on rainy days.",
    "5. Your stubbornness when you’re right (and when you’re not).",
    "6. The little notes you hide for me.",
    "7. How you make food taste like home.",
    "8. You dancing in the kitchen at midnight.",
    "9. The way you look when you’re concentrating.",
    "10. Your texts that turn my bad days around."
  ];

  // If index page has polaroid click handlers (no extra behavior required)

  // 143 page handlers
  const reasonBox = document.getElementById('reasonBox');
  const randomBtn = document.getElementById('randomBtn');
  const resetBtn = document.getElementById('resetBtn');

  if (randomBtn && reasonBox) {
    let shownIndex = null;
    randomBtn.addEventListener('click', () => {
      const i = Math.floor(Math.random()*MESSAGES.length);
      shownIndex = i;
      reasonBox.textContent = MESSAGES[i];
    });
  }
  if (resetBtn && reasonBox) {
    resetBtn.addEventListener('click', ()=>{
      reasonBox.textContent = '';
    });
  }

  // Open-When modal simple
  window.openLetter = function(key){
    const letters = {
      sad: "If you're sad, breathe. Remember our Shell garage laugh — I'm here.",
      lonely: "When you're lonely, hold your phone close. I'm with you.",
      miss: "If you miss me, imagine my arms — I'll be back soon.",
      doubt: "If you doubt yourself, remember you showed up and you stayed. You are brave.",
      sleep: "Can't sleep? Breathe with me for ten counts.",
      stressed: "When you're stressed, focus on one tiny thing you can do right now.",
      smile: "Need a smile? Remember the tiny gum peck — cutest test.")
    };
    return;
  };

});
