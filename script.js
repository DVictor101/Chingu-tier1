/**THE SCROLL TO TOP SCRIPT */
const goTop = document.querySelector(".footer--div__top");
const header = document.querySelector("nav");

goTop.addEventListener("click", function () {
  header.scrollIntoView({ behavior: "smooth" });
});
/**THE HOMEPAGE BUTTON SCROLL TO SCRIPT */
const goTHome = document.querySelector(".homelist");
const nav = document.querySelector("nav");

goTHome.addEventListener("click", function () {
  nav.scrollIntoView({ behavior: "smooth" });
});
/**THE ABOUT BUTTON SCROLL TO SCRIPT */
const goToAboutUs = document.querySelector(".aboutuslist");
const aboutUs = document.querySelector(".feature-container");

goToAboutUs.addEventListener("click", function () {
  aboutUs.scrollIntoView({ behavior: "smooth" });
});
/**THE SERVICES BUTTON SCROLL TO SCRIPT */
const goService = document.querySelector(".serviceslist");
const services = document.querySelector(".services");

goService.addEventListener("click", function () {
  services.scrollIntoView({ behavior: "smooth" });
});
/**THE SERVICES BUTTON SCROLL TO SCRIPT */
const goContact = document.querySelector(".contactlist");
const Contact = document.querySelector(".sixth--contact__sec");

goContact.addEventListener("click", function () {
  Contact.scrollIntoView({ behavior: "smooth" });
});
/**THE SERVICES BUTTON SCROLL TO SCRIPT */
const goExternal = document.querySelector(".external");
const loadFooter = document.querySelector("footer");

goExternal.addEventListener("click", function () {
  loadFooter.scrollIntoView({ behavior: "smooth" });
});
/********************************************************************************************THE BUTTON MENU DISPLAY */
const closeMenuTab = document.querySelector(".menuclose");
const menuBtn = document.querySelector(".nav_container__btnheader");
const menuTab = document.querySelector(".nav_container__menuheader");
menuBtn.addEventListener("click", function () {
  menuTab.style.display = "block";
  closeMenuTab.style.display = "block";
});
closeMenuTab.addEventListener("click", function () {
  menuTab.style.display = "none";
  closeMenuTab.style.display = "none";
});
