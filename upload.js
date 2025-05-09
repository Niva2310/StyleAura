const uploadInput = document.getElementById("uploadInput");
const previewContainer = document.getElementById("previewContainer");

uploadInput.addEventListener("change", () => {
  previewContainer.innerHTML = "";

  Array.from(uploadInput.files).forEach((file, index) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.alt = `Wardrobe item ${index + 1}`;
      img.style.width = "150px";
      img.style.margin = "10px";
      previewContainer.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
});

function goToNextPage() {
  alert("You can now move to outfit suggestions or selection!");
  // Redirect if you have suggestions.html ready:
  // window.location.href = "suggestions.html";
}
