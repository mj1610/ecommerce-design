var menu = document.getElementById("menu-items");
menu.style.maxHeight = "0px";

function toggle() {
  if (menu.style.maxHeight == "0px") {
    menu.style.maxHeight = "200px";
  } else menu.style.maxHeight = "0px";
}

// var productimg = document.getElementById("product-img");
// var smallimg = document.getElementsByClassName("small-img");
// smallimg[0].onclick = function () {
//   productimg.src = smallimg[0].src;
// };

var login = document.getElementById("login");
var reg = document.getElementById("reg");
var indicator = document.getElementById("indicator");

function regFunc() {
  reg.style.transform = "translateX(0px)";
  login.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(100px)";
}
function loginFunc() {
  reg.style.transform = "translateX(300px)";
  login.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0px)";
}
