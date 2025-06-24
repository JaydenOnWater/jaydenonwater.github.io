const milestonePacks = {
  "100": [
    { name: "Red Recolor", url: "https://example.com/100-red.zip" },
    { name: "Orange Recolor", url: "https://example.com/100-orange.zip" },
    { name: "Yellow Recolor", url: "https://example.com/100-yellow.zip" },
    { name: "Gold Recolor", url: "https://example.com/100-gold.zip" },
  ],
  "300": [
    { name: "Green Recolor", url: "https://example.com/300-green.zip" },
    { name: "Lime Recolor", url: "https://example.com/300-lime.zip" },
    { name: "Chartreuse Recolor", url: "https://example.com/300-chartreuse.zip" },
    { name: "Olive Recolor", url: "https://example.com/300-olive.zip" },
  ],
  "500": [
    { name: "Blue Recolor", url: "https://example.com/500-blue.zip" },
    { name: "Sky Blue Recolor", url: "https://example.com/500-skyblue.zip" },
    { name: "Navy Recolor", url: "https://example.com/500-navy.zip" },
    { name: "Teal Recolor", url: "https://example.com/500-teal.zip" },
  ],
  // Add more milestones here...
};

function loadPacks(milestone) {
  const packsSection = document.getElementById("packs");
  packsSection.innerHTML = ""; // Clear previous content

  const packs = milestonePacks[milestone];
  if (!packs) {
    packsSection.innerHTML = "<p>No packs available for this milestone.</p>";
    return;
  }

  const container = document.createElement("div");
  container.className = "download-links-container";

  packs.forEach(pack => {
    const link = document.createElement("a");
    link.href = pack.url;
    link.textContent = pack.name;
    link.className = "download-button";
    link.target = "_blank";
    container.appendChild(link);
  });

  packsSection.appendChild(container);
}

