function uploadImages() {
  const input = document.getElementById("fileInput");
  const previewArea = document.getElementById("previewArea");

  if (!input.files.length) return alert("Please select images to upload.");

  const wardrobe = JSON.parse(localStorage.getItem("wardrobe")) || [];

  Array.from(input.files).forEach(file => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageUrl = e.target.result;

      const card = document.createElement("div");
      card.className = "wardrobe-card";

      const img = document.createElement("img");
      img.src = imageUrl;

      const select = document.createElement("select");
      ["Top", "Bottom", "Footwear", "Accessory", "Outerwear"].forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat;
        opt.textContent = cat;
        select.appendChild(opt);
      });

      const season = document.createElement("select");
      ["Summer", "Winter", "Monsoon"].forEach(sea => {
        const opt = document.createElement("option");
        opt.value = sea;
        opt.textContent = sea;
        season.appendChild(opt);
      });

      const occasion = document.createElement("select");
      ["Casual", "Formal", "Party", "Ethnic"].forEach(occ => {
        const opt = document.createElement("option");
        opt.value = occ;
        opt.textContent = occ;
        occasion.appendChild(opt);
      });

      const confirm = document.createElement("p");
      confirm.style.color = "green";
      confirm.style.fontWeight = "bold";

      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save";
      saveBtn.className = "btn";
      saveBtn.onclick = () => {
        wardrobe.push({
          image: imageUrl,
          category: select.value,
          season: season.value,
          occasion: occasion.value
        });
        localStorage.setItem("wardrobe", JSON.stringify(wardrobe));
        confirm.textContent = `Saved as ${select.value}`;
      };

      card.appendChild(img);
      card.appendChild(select);
      card.appendChild(season);
      card.appendChild(occasion);
      card.appendChild(saveBtn);
      card.appendChild(confirm);
      previewArea.appendChild(card);
    };

    reader.readAsDataURL(file);
  });

  previewArea.innerHTML = ""; // Clear old preview
}

function clearWardrobe() {
  localStorage.removeItem("wardrobe");
  document.getElementById("previewArea").innerHTML = "<p>No wardrobe items available.</p>";
}

