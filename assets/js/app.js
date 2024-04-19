let nav_btn = document.querySelector("#nav-icon2");
let lg_view = document.querySelector(".lg_view");
let body = document.body;
nav_btn.addEventListener("click", () => {
    nav_btn.classList.toggle("open");
    if (nav_btn.classList.contains("open")) {
        lg_view.classList.add("show");
        body.style.overflow = "hidden";
    } else {
        lg_view.classList.remove("show");
        body.style.overflow = "auto";
    }
});

// var gif = document.getElementById('gif');
// var isPlaying = false;

// function play_video() {
//     if (isPlaying) {
//         gif.pause();
//         isPlaying = false;
//         document.querySelector('.play_back p').textContent = "Play Video";
//     } else {
//         gif.play();
//         isPlaying = true;
//         document.querySelector('.play_back p').textContent = "Pause Video";
//     }
// }