/* script.js — single shared script for site interactivity */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 143 messages array (143 entries) ---------- */
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
"10. Your texts that turn my bad days around.",
"11. The way you call me when you're excited.",
"12. How you fall asleep reading.",
"13. Your voice saying my name.",
"14. The seriousness you put into silly things.",
"15. When you teach me new things.",
"16. How your eyes light up at sunsets.",
"17. The smell of you when you hug me.",
"18. The way you remember small details.",
"19. Your courage to try new things.",
"20. The way you say sorry — sincere and soft.",
"21. You making playlists for us.",
"22. Your love for the little misadventures.",
"23. How you call dibs on the best seat.",
"24. The way you make my family feel welcome.",
"25. Your ridiculous movie reactions.",
"26. How you hide snacks and then share them.",
"27. Your sketches and doodles.",
"28. The hoodie I stole and never gave back.",
"29. The confidence you wear like a crown.",
"30. Your terrible (but amazing) puns.",
"31. How you make rain feel romantic.",
"32. You turning boring chores into fun.",
"33. How you hold your coffee.",
"34. Your messy hair in the morning.",
"35. The way you call me when you want company.",
"36. Your determination when you set your mind.",
"37. The secret nickname only I know.",
"38. Your curiosity about everything.",
"39. How you support my weird ideas.",
"40. Your soft voice when you read aloud.",
"41. The little dances you make up.",
"42. Your taste in terrible 90s songs.",
"43. How you plan things and still surprise me.",
"44. Your honesty, even when it’s hard.",
"45. The way you say goodnight.",
"46. How you cheer for me louder than anyone.",
"47. The way you squeeze my hand.",
"48. You leaving notes in pockets.",
"49. The smell of your jacket.",
"50. Your appetite for adventure.",
"51. How you let me be weird.",
"52. Your quiet strength.",
"53. The way you tease me lovingly.",
"54. Your curiosity about my childhood stories.",
"55. How you make a house feel like a home.",
"56. The way you organize playlists by mood.",
"57. That look you give when you’re proud.",
"58. Your stubborn loyalty.",
"59. How you forgive easily.",
"60. Your silly morning routines.",
"61. The passion you put into your art.",
"62. How you make rainy days cozy.",
"63. Your bravery in front of new things.",
"64. The softness of your texts at night.",
"65. Your fashion sense (yes, even the bold socks).",
"66. You humming while you cook.",
"67. How you challenge me to be better.",
"68. Your weird but perfect sleep positions.",
"69. When you cheer for small wins.",
"70. Your smell on the pillow next to me.",
"71. The way you plan silly dates.",
"72. Your tears when something moves you.",
"73. How you make me feel safe.",
"74. Your quiet laughter in the dark.",
"75. You bringing snacks just in case.",
"76. The way you remember anniversaries.",
"77. Your stubborn streak — I love it.",
"78. How you read menus like a pro.",
"79. Your silly impressions.",
"80. How you always find the best spot to watch the sunset.",
"81. Your curious questions at midnight.",
"82. How you make simple meals special.",
"83. The way you paint with big, brave strokes.",
"84. Your courage to be vulnerable.",
"85. The warmth of your hands on mine.",
"86. How you stay up just to finish a show with me.",
"87. Your handmade little surprises.",
"88. How you dance in the rain unapologetically.",
"89. Your silly faces when you concentrate.",
"90. The way you check in on friends.",
"91. How you invent nicknames for everything.",
"92. The way you make a bad day manageable.",
"93. Your obsession with tiny details.",
"94. How you apologize with meaning.",
"95. The way you take photos of the small things.",
"96. Your late-night snack runs.",
"97. How you pick the perfect movie.",
"98. Your tolerance for my jokes.",
"99. How you keep secrets safe.",
"100. Your silly competitiveness in games.",
"101. The way you trace constellations with me.",
"102. Your love for tiny plants.",
"103. How you hum the same song for days.",
"104. The way you hold my jacket on cold nights.",
"105. Your slow, thoughtful smiles.",
"106. How you make me tea just right.",
"107. Your interest in stories I tell.",
"108. The way you say 'we' when you plan.",
"109. How you create cozy corners at home.",
"110. Your thumbprints on my phone case.",
"111. How you make a simple \"hello\" feel special.",
"112. The way you look at me when I'm not looking.",
"113. Your stubborn optimism.",
"114. How you make a rainy afternoon magical.",
"115. The way you encourage my weirdest ideas.",
"116. Your playlist choices that always fit the moment.",
"117. How you stay calm under pressure.",
"118. The way you cook something new bravely.",
"119. Your small acts of kindness to strangers.",
"120. How you fix small things with big care.",
"121. The secret language of your glances.",
"122. How you hum while doing chores.",
"123. Your choice of terrible puns that make me smile.",
"124. The way you tuck your hair behind your ear.",
"125. How you fold notes and save them.",
"126. Your love for city walks at night.",
"127. The soft groan you make when you laugh too hard.",
"128. How you read recipes like they are poems.",
"129. Your willingness to admit when you're wrong.",
"130. The way you sketch ideas on napkins.",
"131. How you plan surprises for others.",
"132. Your gentle scold when I'm late.",
"133. The way you keep our memories organized.",
"134. How you show up when it matters most.",
"135. Your silly secret dances.",
"136. The way you fall asleep on my shoulder.",
"137. How you support my bad haircut choices.",
"138. Your early morning texts to say good morning.",
"139. The way you cheer me up with one sentence.",
"140. Your stubborn love that never quits.",
"141. The way you believe in me even when I don't.",
"142. Your hands in mine — forever feels right.",
"143. I love you — in all small ways, every day."
  ];

  /* ---------- hearts grid (on index & 143) ---------- */
  const heartsGrid = document.getElementById('heartsGrid');
  const reasonPanel = document.getElementById('reasonPanel');

  if (heartsGrid && reasonPanel) {
    // populate hearts (only once)
    heartsGrid.innerHTML = '';
    for (let i=1;i<=143;i++) {
      const box = document.createElement('div');
      box.className = 'heart';
      box.dataset.msg = MESSAGES[(i-1) % MESSAGES.length]; // cycle if needed
      box.innerHTML = '<span class="icon">❤</span>';
      box.addEventListener('click', () => {
        // toggle reveal
        if (box.classList.contains('revealed')) {
          box.classList.remove('revealed');
          reasonPanel.textContent = '';
          return;
        }
        document.querySelectorAll('.heart.revealed').forEach(h=>h.classList.remove('revealed'));
        box.classList.add('revealed');
        reasonPanel.textContent = (i) + '. ' + box.dataset.msg;
      });
      heartsGrid.appendChild(box);
    }

    // reveal random / reset on pages that have buttons
    const revealRandom = document.getElementById('revealRandom');
    if (revealRandom) revealRandom.addEventListener('click', () => {
      const hearts = Array.from(document.querySelectorAll('.heart'));
      const notRevealed = hearts.filter(h=>!h.classList.contains('revealed'));
      if (notRevealed.length === 0) return alert('All opened 💖');
      const pick = notRevealed[Math.floor(Math.random()*notRevealed.length)];
      pick.classList.add('revealed');
      pick.scrollIntoView({behavior:'smooth', block:'center'});
      reasonPanel.textContent = pick.dataset.msg;
    });

    const resetBtn = document.getElementById('resetHearts');
    if (resetBtn) resetBtn.addEventListener('click', () => {
      document.querySelectorAll('.heart').forEach(h=>h.classList.remove('revealed'));
      reasonPanel.textContent = '';
    });
  }

  /* ---------- polaroid clicks ---------- */
  document.querySelectorAll('.polaroid').forEach(p=>{
    p.addEventListener('click', ()=>{
      const img = p.querySelector('img');
      if (img && img.src) window.open(img.src, '_blank');
    });
  });

  /* ---------- open-when ---------- */
  const OPEN_WHEN = {
    sad: "If you're sad, breathe. I wish I could sit with you and press pause on the world. Remember our Shell garage laugh. I'm a call away.",
    lonely: "When you're lonely, hold your phone close: I'm with you in every quiet moment. Our future mornings are coming.",
    miss: "If you miss me, imagine my arms. Imagine small things: my hand finding yours. I'm coming back to you.",
    doubt: "If you doubt yourself, remember you showed up, you stayed, you kissed. You're capable and brave. I believe in you.",
    sleep: "Can't sleep? Picture us on the birthday getaway: no alarms, just waves; breathe with me for ten counts.",
    stressed: "When you're stressed, make a small list: one I can help with, one you can let go, one thing to laugh about. I'm here.",
    smile: "Need a smile? Remember the tiny gum peck — cutest test. You can turn a day around with one silly face."
  };
  document.querySelectorAll('.open-card').forEach(btn=>{
    btn.addEventListener('click', ()=> {
      const key = btn.dataset.key;
      const out = document.getElementById('openDisplay');
      if (out) out.textContent = OPEN_WHEN[key] || '';
      out.style.opacity = '0';
      setTimeout(()=> out.style.opacity = '1', 30);
    });
  });

  /* ---------- paths interactions ---------- */
  document.querySelectorAll('.polaroid[data-path]').forEach(p=>{
    p.addEventListener('click', ()=>{
      const key = p.dataset.path;
      const panel = document.getElementById('pathPanel');
      if (!panel) return;
      if (key === 'adventure') panel.textContent = 'You chose Adventure — birthday getaway booked in your daydreams.';
      if (key === 'cozy') panel.textContent = 'You chose Cozy — blankets, tea and long talks.';
      if (key === 'spicy') panel.textContent = 'You chose Spicy — a night we won\'t forget.';
    });
  });

  /* ---------- quiz ---------- */
  const quizBtn = document.getElementById('quizSubmit');
  if (quizBtn) {
    quizBtn.addEventListener('click', ()=>{
      const a1 = (document.getElementById('q1')||{}).value||'';
      const a2 = (document.getElementById('q2')||{}).value||'';
      const a3 = (document.getElementById('q3')||{}).value||'';
      let score = 0;
      if (a1.toLowerCase().includes('mc') || a1.toLowerCase().includes('mcdonald')) score++;
      if (a2.toLowerCase().includes('hoodie') || a2.toLowerCase().includes('jacket')) score++;
      if (a3.toLowerCase().includes('you') || a3.toLowerCase().includes('her')) score++;
      const out = document.getElementById('quizResult');
      if (out) out.textContent = `You scored ${score}/3 — perfect for fun, not for grading 😉`;
    });
  }

  /* ---------- extras: miss-me, gift, shake ---------- */
  const missBtn = document.getElementById('missBtn');
  if (missBtn) {
    const randomMsgs = [
      "I miss you more than I thought I could.",
      "Counting down to when I can hold you.",
      "You make every day softer."
    ];
    missBtn.addEventListener('click', ()=> {
      const pick = randomMsgs[Math.floor(Math.random()*randomMsgs.length)];
      const out = document.getElementById('extrasOutput');
      if (out) out.textContent = pick;
    });
  }

  const shakeBtn = document.getElementById('shakeBtn');
  if (shakeBtn) {
    shakeBtn.addEventListener('click', ()=> {
      const out = document.getElementById('extrasOutput');
      if (out) out.textContent = 'Your real gift will come on 19 March at 01:00 — 143 hours before her birthday.';
    });
  }

  const giftBox = document.getElementById('giftBox');
  if (giftBox) {
    giftBox.addEventListener('click', ()=> {
      const out = document.getElementById('extrasOutput');
      if (out) out.textContent = 'A snippet: Aqeelah, check your messages on the night — a surprise waits. ❤';
    });
  }

}); // DOMContentLoaded end
