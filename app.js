  
 
document.addEventListener("DOMContentLoaded", function () {
    const homeSection = document.getElementById("home");
    const aboutSection = document.getElementById("about");
    const eventsSection = document.getElementById("events");
    const joinSection = document.getElementById("join");
    const donateSection = document.getElementById("donate");

    const sections = [homeSection, aboutSection, eventsSection, joinSection, donateSection];

    // Hide all sections
    function hideAllSections() {
        sections.forEach(section => section.style.display = "none");
    }

    // Show a specific section
    function showSection(section) {
        hideAllSections();
        section.style.display = "block";
    }

    // Navbar click handlers
    document.getElementById("nav-home").addEventListener("click", () => showSection(homeSection));
    document.getElementById("nav-about").addEventListener("click", () => showSection(aboutSection));
    document.getElementById("nav-events").addEventListener("click", () => showSection(eventsSection));
    document.getElementById("nav-join").addEventListener("click", () => showSection(joinSection));
    document.getElementById("nav-donate").addEventListener("click", () => showSection(donateSection));

    // Back to Home buttons
    document.querySelectorAll(".back-home").forEach(button => {
        button.addEventListener("click", () => showSection(homeSection));
    });

    // Show home first on load
    showSection(homeSection);


    


  
    // document.addEventListener("DOMContentLoaded", function () {
    //   const menuToggle = document.querySelector(".menu-toggle");
    //   const nav = document.querySelector("nav");
    
    //   menuToggle.addEventListener("click", function () {
    //     nav.classList.toggle("show");
    //   });
    // });
  








  // document.getElementById("menu-toggle").addEventListener("click", () => {
  //   document.getElementById("navbar").classList.toggle("show");
  
  
  // });

});

