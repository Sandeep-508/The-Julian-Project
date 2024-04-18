// $(document).ready(function () {
//     $('#nav-icon2').click(function () {
//         $(this).toggleClass('open');
//     });
// });

let nav_btn = document.querySelector("#nav-icon2");
let lg_view = document.querySelector(".lg_view");

nav_btn.addEventListener("click", () => {
    nav_btn.classList.toggle("open");
    if (nav_btn.classList.contains("open")) {
        lg_view.classList.add("show");
    } else {
        lg_view.classList.remove("show");
    }
});