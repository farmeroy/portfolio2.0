export default function smoothScrollHandler(goal) {
  const goalEl = document.getElementById(goal);
  // const goalTop = goalEl.offsetTop;
  // topNav.className = "topnav";
  // topNavButton.className = "fa fa-bars";
  // const offsetY = document.getElementById("myTopnav").clientHeight;
  // removed '- offsetY' from scroll function
  console.log(goal)
  scroll({
    top: goalEl.getBoundingClientRect().top + window.pageYOffset,
    behavior: "smooth",
  });
}
