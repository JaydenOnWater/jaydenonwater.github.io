function loadPacks(subs) {
  const packs = {
    100: [{ name: 'Dark Blue Recolor', url: 'dark-blue.html' }],
    300: [{ name: 'Pure Red Recolor', url: 'pure-red.html' }],
    500: [{ name: 'Pink Recolor', url: 'pink.html' }],
    1000: [{ name: 'Black & White Recolor', url: 'black-white.html' }],
    // Add more as you create them
  };

  const container = document.getElementById('packs');
  container.innerHTML = '';

  if (!packs[subs]) {
    container.innerHTML = `<p>No packs for ${subs} subs yet.</p>`;
    return;
  }

  packs[subs].forEach(pack => {
    const btn = document.createElement('a');
    btn.href = pack.url;
    btn.className = 'pack-button';
    btn.textContent = pack.name;
    container.appendChild(btn);
  });
}
