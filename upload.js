const imageInput = document.getElementById('imageInput');
const preview = document.getElementById('preview');

imageInput.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
});

function submitImage() {
  alert("Image uploaded successfully! (This is a demo)");
  // You can add a real upload handler here or route to analysis
}
