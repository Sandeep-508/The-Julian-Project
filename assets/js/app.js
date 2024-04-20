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

let tab_btn_1 = document.querySelector(".tab_btn_1");
let tab_btn_2 = document.querySelector(".tab_btn_2");
let tab_btn_3 = document.querySelector(".tab_btn_3");
let text_change = document.querySelector(".changing_text");
let tab_cont = document.querySelectorAll(".tab_cont");
let tab_cont_1 = document.querySelector(".tab_cont");
tab_cont_1.classList.add("full");

tab_cont.forEach(item => {
    let btn = item.querySelector(".tab_btn");
    btn.addEventListener("click", () => {
        tab_cont.forEach(other => {
            if (other !== item) {
                other.classList.remove("full");
            }
        });
        item.classList.add("full");
    });
});

tab_btn_1.addEventListener("click", () => {
    text_change.innerHTML = `The Julian
                            Project offers academic opportunities beyond theclassroom for aspiring historians
                            to dive deeper into
                            historical research.Our goal is to make the study of history more accessible to all.
                            Especiallyfor First - Generation and Low - Income(FGLI) students, we offer free, individual mentorship throughout the year to help
                            guide you on thisenriching journey.We rely on donations to make these opportunitiespossible and hope you could
                            contribute to The Julian Project.`;
});

tab_btn_2.addEventListener("click", () => {
    text_change.innerHTML = `Embarking on writing an extensive history research paper offers an immersive journey into the depths of the past.`;
});

tab_btn_3.addEventListener("click", () => {
    text_change.innerHTML = `The Julian Project annually awards prizes to the authors of that year’s
most distinguishing papers.`;
});
