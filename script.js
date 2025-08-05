document.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.getElementById("downloadBtn");

  downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "Niya_Aniyan_Resume.pdf"; // file should be in same folder
    link.download = "Niya_Aniyan_Resume.pdf"; // name to save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
