const btnE1 = document.querySelector(".btn")

btnE1.addEventListener("mouseover", (e) => {
  console.log(e.pageX, e.pageY);

  const x = e.pageX - btnE1.offsetLeft;
  const y = e.pageY - btnE1.offsetTop;

  btnE1.style.setProperty("--posx", x + "px");
  btnE1.style.setProperty("--posy", y + "px");
});
