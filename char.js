let togg9 = document.getElementById("togg9");
let d9 = document.getElementById("d9");
togg9.addEventListener("click", () => {
    if(getComputedStyle(d9).display != "none"){
      d9.style.display = "none";
    } else {
      d9.style.display = "flex";
    }
  })