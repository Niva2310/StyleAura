document.getElementById("profileForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const profile = {
    bodyType: formData.get("bodyType"),
    favoriteColors: formData.get("colors").toLowerCase().split(",").map(c => c.trim()),
    stylePref: formData.get("stylePref"),
    occasions: formData.get("occasions").toLowerCase().split(",").map(o => o.trim()),
  };

  localStorage.setItem("userProfile", JSON.stringify(profile));
  alert("Profile saved successfully! 🎉");

  window.location.href = "suggestions.html"; // Redirect back to suggestions
});
