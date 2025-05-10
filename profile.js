document.getElementById("profileForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting in the traditional way

  // Get values from the form
  const bodyType = document.querySelector("[name='bodyType']").value;
  const colors = document.querySelector("[name='colors']").value.split(",").map(color => color.trim());
  const stylePref = document.querySelector("[name='stylePref']").value;
  const occasions = document.querySelector("[name='occasions']").value.split(",").map(occasion => occasion.trim());

  // Create an object to represent the user's profile
  const userProfile = {
    bodyType,
    favoriteColors: colors,
    style: stylePref,
    occasions
  };

  // Save the user profile to localStorage
  localStorage.setItem("userProfile", JSON.stringify(userProfile));

  // Alert the user that their profile has been saved
  alert("Profile saved successfully!");

  // Optionally, reset the form after submission
  document.getElementById("profileForm").reset();
});
