function generateOutfit() {
  const wardrobe = JSON.parse(localStorage.getItem("wardrobe")) || [];
  const occasion = document.getElementById("occasion").value;
  const season = document.getElementById("season").value;

  const categories = {
    Top: [],
    Bottom: [],
    Footwear: [],
    Accessory: [],
    Outerwear: []
  };

  wardrobe.forEach(item => {
    if (categories[item.category]) {
      categories[item.category].push(item);
    }
  });

  const outfit = {};
  for (let cat in categories) {
    const items = categories[cat];
    if (items.length > 0) {
      outfit[cat] = items[Math.floor(Math.random() * items.length)];
    }
  }

  const container = document.getElementById("outfitContainer");
  container.innerHTML = "";

  for (let key in outfit) {
    const item = outfit[key];
    const section = document.createElement("div");
    section.className = "outfit-item";

    const label = document.createElement("h3");
    label.textContent = `${key}`;

    const img = document.createElement("img");
    img.src = item.image;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.onclick = () => removeItem(item.image);

    section.appendChild(label);
    section.appendChild(img);
    section.appendChild(removeBtn);
    container.appendChild(section);
  }

  if (Object.keys(outfit).length === 0) {
    container.innerHTML = "<p>No wardrobe items available to suggest an outfit.</p>";
  }

  localStorage.setItem("lastOutfit", JSON.stringify(outfit));
}

function removeItem(imageURL) {
  let wardrobe = JSON.parse(localStorage.getItem("wardrobe")) || [];
  wardrobe = wardrobe.filter(item => item.image !== imageURL);
  localStorage.setItem("wardrobe", JSON.stringify(wardrobe));
  generateOutfit();
}

function saveLook() {
  const lastOutfit = JSON.parse(localStorage.getItem("lastOutfit"));
  if (!lastOutfit) return;

  const savedLooks = JSON.parse(localStorage.getItem("savedLooks")) || [];
  savedLooks.push(lastOutfit);
  localStorage.setItem("savedLooks", JSON.stringify(savedLooks));
  alert("Look saved!");
  displaySavedLooks();
}

function displaySavedLooks() {
  const container = document.getElementById("savedLooks");
  const saved = JSON.parse(localStorage.getItem("savedLooks")) || [];

  container.innerHTML = "<h3>Saved Looks 👗</h3>";
  saved.forEach(look => {
    const lookDiv = document.createElement("div");
    lookDiv.className = "saved-look";
    for (let part in look) {
      const img = document.createElement("img");
      img.src = look[part].image;
      img.alt = part;
      img.style.width = "80px";
      img.style.borderRadius = "5px";
      lookDiv.appendChild(img);
    }
    container.appendChild(lookDiv);
  });
}

window.onload = displaySavedLooks;
