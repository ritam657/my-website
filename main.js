// 
// ওয়েবসাইট লোড হলে কনসোলে একটা মেসেজ দেখাবে
document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully!");

  // ফর্ম সাবমিট করলে একটা alert দেখাবে
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", () => {
      alert("✅ তোমার মেসেজ পাঠানো হয়েছে!");
    });
  }
});