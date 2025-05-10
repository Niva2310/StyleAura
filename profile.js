// Make sure the form submits only when everything is correct
document.getElementById('profileForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way

  // Capture the form values
  const bodyType = document.querySelector("[name='bodyType']").value;
  const colors = document.querySelector("[name='colors']").value.split(',').map(color => color.trim());
  const stylePref = document.querySelector("[name='stylePref']").value;
  const occasions = document.querySelector("[name='occasions']").value.split(',').map(occasion => occasion.trim());

  // Check if the form values are all valid
  if (!bodyType || !colors.length || !stylePref || !occasions.length) {
    alert("Please fill out all the fields.");
    return;
  }

  // Create the profile object
  const profile = {
    bodyType,
    favoriteColors: colors,
    style: stylePref,
    occasions
  };

  // Save the profile object to localStorage
  localStorage.setItem('userProfile', JSON.stringify(profile));

  // Provide feedback to the user
  alert("Profile saved successfully!");

  // Reset the form after submission (optional)
  document.getElementById('profileForm').reset();
});
