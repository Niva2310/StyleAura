document.getElementById("profileForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from reloading the page

  // Get form values
  const bodyType = document.querySelector("[name='bodyType']").value;
  const colors = document.querySelector("[name='colors']").value.split(",").map(color => color.trim());
  const stylePref = document.querySelector("[name='stylePref']").value;
  const occasions = document.querySelector("[name='occasions']").value.split(",").map(occasion => occasion.trim());

  // Create the profile object
  const userProfile = {
    bodyType,
    favoriteColors: colors,
    style: stylePref,
    occasions
  };

  // Save to localStorage
  localStorage.setItem("userProfile", JSON.stringify(userProfile));

  // Confirm profile saved
  alert("Profile saved successfully!");

  // Optionally, you can reset the form
  document.getElementById("profileForm").reset();
});
