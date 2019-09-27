var goDownEl = document.getElementById("goDown")
var mainEl = document.getElementById("main")
var introductionEl = document.getElementById("introduction")
var profileImage = document.getElementById("profile-image")

goDownEl = document.addEventListener("click", onClick);

function onClick() {
    console.log("hi")
    introductionEl.classList.add("hidden");
    mainEl.classList.remove("hidden")
}
setInterval("change()", 5000);

let imageTracker = "one"
function change() {
    var profileImage = document.getElementById("profile-image")
    if (imageTracker == "one") {
        profileImage.src = "assets/profilePic2.jpg";
        imageTracker = "two";
    } else {
        if (imageTracker == "two") {
            profileImage.src = "assets/profilePic3.jpg";
            imageTracker = "three";
        } else {
            profileImage.src == "assests/profilePic1.jpg"
            imageTracker = "one"
        }
    }
}

