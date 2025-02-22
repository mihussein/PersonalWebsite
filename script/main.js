// In your main.js or script file
document.addEventListener('DOMContentLoaded', () => {
  const aboutRadio = document.getElementById('about');
  const socialRadio = document.getElementById('social');
  const aboutSection = document.querySelector('.article-about');
  const socialSection = document.querySelector('.article-social');

  function toggleSections() {
    if (aboutRadio.checked) {
      aboutSection.style.display = 'block';
      socialSection.style.display = 'none';
    } else if (socialRadio.checked) {
      aboutSection.style.display = 'none';
      socialSection.style.display = 'block';
    }
  }

  aboutRadio.addEventListener('change', toggleSections);
  socialRadio.addEventListener('change', toggleSections);

  // Initialize with about section visible
  toggleSections();
});


document.getElementById("copyLink").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default anchor behavior

  const id = this.getAttribute("session-id"); // Get the link from the `data-url` attribute

  // Use the Clipboard API to copy the link
  navigator.clipboard.writeText(id).then(() => {
    alert("Session ID copied to clipboard!");
  }).catch((err) => {
    console.error("Failed to copy link: ", err);
  });
});

