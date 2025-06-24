function showPacks(milestone) {
  const container = document.getElementById('packs-container');
  container.innerHTML = ''; // Clear existing

  // Example data — customize these
  const packsByMilestone = {
    100: [
      { name: 'Dark Blue Recolor', link: 'dark-blue.html' },
    ],
    300: [
      { name: 'Pure Red Recolor', link: 'pure-red.html' },
    ],
    500: [
      { name: 'Pink Recolor', link: 'pink.html' },
    ],
    1000: [
      { name: 'Black & White Recolor', link: 'black-white.html' },
    ],
    // Add more as you unlock them
  };

  const packs = packsByMilestone[milestone] || [];
  if (packs.length === 0) {
    container.innerHTML = `<p>No packs yet for ${milestone} subs. Stay tuned!</p>`;
    return;
  }

  packs.forEach(pack => {
    const btn = document.createElement('a');
    btn.className = 'pack-button';
    btn.href = pack.link;
    btn.textContent = pack.name;
    container.appendChild(btn);
  });
}
