// creating the form.
let form = document.getElementById("user-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
//clearing the text boxes.
function clearFunction() {
  alert("Your Submission is Successful");
  let uID = document.getElementById("username").value;
  console.log(uID);
  let pwd = document.getElementById("password").value;
  console.log(pwd);
  let mID = document.getElementById("mail").value;
  console.log(mID);
  let area = document.getElementById("state").value;
  console.log(area);
  var user = document.getElementById("username").value;
  var word = document.getElementById("password").value;
  var id = document.getElementById("mail").value;
  var state = document.getElementById("state").value;
  //creating localstorage.
  var name = localStorage.setItem("UserName", user);
  var password = localStorage.setItem("Password", word);
  var mailId = localStorage.setItem("MailID", id);
  var place = localStorage.setItem("State", state);
}

//creation of dropdown button.
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function printfunc() {
  window.print();
}
// creating toast button
function toastfunc() {
  let x = document.getElementById("toastButton");
  x.className = "show";
  setTimeout(() => {
    x.className = x.className.replace("show", "");
  }, 3000);
}
// to check the orientation of window.
window.addEventListener("orientationchange", function (e) {
  let screen = window.screen;
  let angle = screen.orientation.angle;
  let type = screen.orientation.type;
  console.log(`àngle:${angle},type:${type}`);
});
//getting geolocation API.
window.navigator.geolocation.getCurrentPosition(
  function (position) {
    console.log(`Latitide: ${position.coords.latitude}`);
    console.log(`Longitude: ${position.coords.longitude}`);
  },
  function (error) {
    console.log("Error: Location not shared.");
  }
);
