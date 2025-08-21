  const pills = document.querySelectorAll('.filter-pill');
  const items = document.querySelectorAll('.t-item');

  pills.forEach(p => p.addEventListener('click', () => {
    pills.forEach(x => { 
      x.classList.remove('is-active'); 
      x.setAttribute('aria-selected','false'); 
    });
    p.classList.add('is-active'); 
    p.setAttribute('aria-selected','true');

    const f = p.dataset.filter;
    items.forEach(it => {
      const match = f === 'all' || it.dataset.type === f;
      it.style.display = match ? '' : 'none';
    });
  }));
