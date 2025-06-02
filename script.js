document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tab_links");
  const tabContents = document.querySelectorAll(".tab_contents");

  tabLinks.forEach(link => {
    link.addEventListener("click", function () {
      const target = this.getAttribute("data-tab");

      // Remove all active classes
      tabLinks.forEach(l => l.classList.remove("active_link"));
      tabContents.forEach(c => c.classList.remove("active_tab"));

      // Add active classes to clicked tab and corresponding content
      this.classList.add("active_link");
      document.getElementById(target).classList.add("active_tab");
    });
  });
});
