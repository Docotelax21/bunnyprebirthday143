
document.addEventListener('DOMContentLoaded', ()=>{
  const messages = [
    "I love the way your smile starts my day.",
    "Your laugh is my favourite song.",
    "I love your hands—they fit perfectly in mine.",
    "How you make tea on rainy days.",
    "Your stubbornness when you're right.",
    "The little notes you hide for me.",
    "How you make food taste like home.",
    "You dancing in the kitchen at midnight.",
    "The way you look when concentrating.",
    "Your texts that turn my bad days around."
  ];
  const grid = document.getElementById('heartsGrid');
  const reasonBox = document.getElementById('reasonPanel');
  if(grid){
    for(let i=1;i<=143;i++){
      const div=document.createElement('div');
      div.className='heart';
      div.dataset.index=(i-1)%messages.length;
      div.innerHTML='<span class="icon">❤</span>';
      div.addEventListener('click', ()=>{
        if(div.classList.contains('revealed')){ div.classList.remove('revealed'); reasonBox.textContent=''; return; }
        document.querySelectorAll('.heart.revealed').forEach(h=>h.classList.remove('revealed'));
        div.classList.add('revealed');
        reasonBox.textContent = (i) + '. ' + messages[div.dataset.index];
      });
      grid.appendChild(div);
    }
  }
  document.querySelectorAll('.polaroid').forEach(p=>{
    p.addEventListener('click', ()=>{
      const img = p.querySelector('img');
      const src = img.src;
      window.open(src, '_blank');
    });
  });
  const quizBtn = document.getElementById('quizSubmit');
  if(quizBtn){
    quizBtn.addEventListener('click', ()=>{ alert('Quiz submitted'); });
  }
  const gift = document.getElementById('giftBox');
  if(gift){
    gift.addEventListener('click', ()=>{ alert('Surprise: your real gift comes on 19 March at 01:00 — 143 hours before her birthday.'); });
  }
});
