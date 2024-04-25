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


// second tab

let btn_tabs = document.querySelectorAll(".tab_open_btn");
let tabs = document.querySelectorAll(".tabs");
let first_tab = document.querySelector(".tabs");
let tab_text = document.querySelector(".tab_changing_text");
let change_heaading = document.querySelector(".change_heading");
let changing_color_text_starting = document.querySelector(".color_change_text");
changing_color_text_starting.classList.add("lg_text");
first_tab.classList.add("appear");
let changing_color_svg_starting = document.querySelector(".color_change_svg");
changing_color_svg_starting.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.3635 12.7083C20.5509 12.5208 20.6562 12.2665 20.6562 12.0013C20.6562 11.7362 20.5509 11.4818 20.3635 11.2943L14.7065 5.63732C14.6142 5.54181 14.5039 5.46563 14.3819 5.41322C14.2599 5.36081 14.1286 5.33322 13.9959 5.33207C13.8631 5.33091 13.7314 5.35622 13.6085 5.4065C13.4856 5.45678 13.374 5.53103 13.2801 5.62492C13.1862 5.71882 13.1119 5.83047 13.0616 5.95337C13.0114 6.07626 12.9861 6.20794 12.9872 6.34072C12.9884 6.4735 13.016 6.60472 13.0684 6.72672C13.1208 6.84873 13.197 6.95907 13.2925 7.05132L17.2425 11.0013L3.99946 11.0013C3.73425 11.0013 3.47989 11.1067 3.29236 11.2942C3.10482 11.4817 2.99946 11.7361 2.99946 12.0013C2.99946 12.2665 3.10482 12.5209 3.29236 12.7084C3.47989 12.896 3.73425 13.0013 3.99946 13.0013L17.2425 13.0013L13.2925 16.9513C13.1103 17.1399 13.0095 17.3925 13.0118 17.6547C13.0141 17.9169 13.1192 18.1677 13.3046 18.3531C13.4901 18.5385 13.7409 18.6437 14.0031 18.646C14.2653 18.6483 14.5179 18.5475 14.7065 18.3653L20.3635 12.7083Z" fill="url(#paint0_linear_41260_10388)"/>
<defs>
<linearGradient id="paint0_linear_41260_10388" x1="20.6562" y1="5.33203" x2="4.36771" y2="19.4726" gradientUnits="userSpaceOnUse">
<stop stop-color="#F4EAD8"/>
<stop offset="1" stop-color="#E0B764"/>
</linearGradient>
</defs>
</svg>
`;

btn_tabs.forEach(btn_tab => {
    let changing_color_text = btn_tab.querySelector(".color_change_text");
    let changing_color_svg = btn_tab.querySelector(".color_change_svg");
    btn_tab.addEventListener("click", () => {
        document.querySelectorAll('.color_change_text').forEach(text => {
            text.classList.remove("lg_text");
        });
        document.querySelectorAll('.color_change_svg').forEach(svg => {
            svg.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.3635 12.7083C20.5509 12.5208 20.6562 12.2665 20.6562 12.0013C20.6562 11.7362 20.5509 11.4818 20.3635 11.2943L14.7065 5.63732C14.6142 5.54181 14.5039 5.46563 14.3819 5.41322C14.2599 5.36081 14.1286 5.33322 13.9959 5.33207C13.8631 5.33091 13.7314 5.35622 13.6085 5.4065C13.4856 5.45678 13.374 5.53103 13.2801 5.62492C13.1862 5.71882 13.1119 5.83047 13.0616 5.95337C13.0114 6.07626 12.9861 6.20794 12.9872 6.34072C12.9884 6.4735 13.016 6.60472 13.0684 6.72672C13.1208 6.84873 13.197 6.95907 13.2925 7.05132L17.2425 11.0013L3.99946 11.0013C3.73425 11.0013 3.47989 11.1067 3.29236 11.2942C3.10482 11.4817 2.99946 11.7361 2.99946 12.0013C2.99946 12.2665 3.10482 12.5209 3.29236 12.7084C3.47989 12.896 3.73425 13.0013 3.99946 13.0013L17.2425 13.0013L13.2925 16.9513C13.1103 17.1399 13.0095 17.3925 13.0118 17.6547C13.0141 17.9169 13.1192 18.1677 13.3046 18.3531C13.4901 18.5385 13.7409 18.6437 14.0031 18.646C14.2653 18.6483 14.5179 18.5475 14.7065 18.3653L20.3635 12.7083Z" fill="#FCF9F6" fill-opacity="0.7"/>
</svg>
`;
        });

        tabs.forEach(tab => {
            tab.classList.remove("appear");
        });

        let associatedTab = btn_tab.closest(".tabs");
        associatedTab.classList.add("appear");

        changing_color_text.classList.add("lg_text");
        changing_color_svg.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.3635 12.7083C20.5509 12.5208 20.6562 12.2665 20.6562 12.0013C20.6562 11.7362 20.5509 11.4818 20.3635 11.2943L14.7065 5.63732C14.6142 5.54181 14.5039 5.46563 14.3819 5.41322C14.2599 5.36081 14.1286 5.33322 13.9959 5.33207C13.8631 5.33091 13.7314 5.35622 13.6085 5.4065C13.4856 5.45678 13.374 5.53103 13.2801 5.62492C13.1862 5.71882 13.1119 5.83047 13.0616 5.95337C13.0114 6.07626 12.9861 6.20794 12.9872 6.34072C12.9884 6.4735 13.016 6.60472 13.0684 6.72672C13.1208 6.84873 13.197 6.95907 13.2925 7.05132L17.2425 11.0013L3.99946 11.0013C3.73425 11.0013 3.47989 11.1067 3.29236 11.2942C3.10482 11.4817 2.99946 11.7361 2.99946 12.0013C2.99946 12.2665 3.10482 12.5209 3.29236 12.7084C3.47989 12.896 3.73425 13.0013 3.99946 13.0013L17.2425 13.0013L13.2925 16.9513C13.1103 17.1399 13.0095 17.3925 13.0118 17.6547C13.0141 17.9169 13.1192 18.1677 13.3046 18.3531C13.4901 18.5385 13.7409 18.6437 14.0031 18.646C14.2653 18.6483 14.5179 18.5475 14.7065 18.3653L20.3635 12.7083Z" fill="url(#paint0_linear_41260_10388)"/>
<defs>
<linearGradient id="paint0_linear_41260_10388" x1="20.6562" y1="5.33203" x2="4.36771" y2="19.4726" gradientUnits="userSpaceOnUse">
<stop stop-color="#F4EAD8"/>
<stop offset="1" stop-color="#E0B764"/>
</linearGradient>
</defs>
</svg>
`;
    });
});

let tab_open_btn_1 = document.querySelector(".tab_open_btn_1");
let tab_open_btn_2 = document.querySelector(".tab_open_btn_2");
let tab_open_btn_3 = document.querySelector(".tab_open_btn_3");
let tab_open_btn_4 = document.querySelector(".tab_open_btn_4");
let tab_open_btn_5 = document.querySelector(".tab_open_btn_5");
let tab_open_btn_6 = document.querySelector(".tab_open_btn_6");
let tab_open_btn_7 = document.querySelector(".tab_open_btn_7");
let tab_open_btn_8 = document.querySelector(".tab_open_btn_8");

tab_open_btn_1.addEventListener("click", () => {
    tab_text.innerHTML = `The Julian Project offers academic opportunities beyond the classroom for aspiring historians to dive deeper into historical research. Our goal is to make the study of history more accessible to all. Especially for First-Generation and Low-Income (FGLI) students, we offer free, individual mentorship throughout the year to help guide you on this enriching journey. We rely on donations to make these opportunities possible and hope you could contribute to The Julian Project.`;
    change_heaading.innerHTML = "Political System";
});

tab_open_btn_2.addEventListener("click", () => {
    tab_text.innerHTML = `Embarking on writing an extensive history research paper offers an immersive journey into the depths of the past.`;
    change_heaading.innerHTML = "Millitary System";
});
tab_open_btn_3.addEventListener("click", () => {
    tab_text.innerHTML = `Lorem ipsum dolor sit amet consectetur. Tristique pharetra augue et sed venenatis. Adipiscing morbi enim vulputate enim. Nisi justo interdum sem risus consectetur id.`;
    change_heaading.innerHTML = "Gender History";
});
tab_open_btn_4.addEventListener("click", () => {
    tab_text.innerHTML = `To bridge the inequality gap in the humanities, The Julian Grant recognizes and supports the remarkable achievements of low-income historians. Valued at $250,this esteemed grant aims to honor the resilience and academic prowess of low income scholars who have displayed exceptional dedication and passion in their pursuit of the histories. `;
    change_heaading.innerHTML = "Economic History";
});
tab_open_btn_5.addEventListener("click", () => {
    tab_text.innerHTML = `By providing financial assistance, The Julian Grant seeks to empower and enable low-income students of history to continue their invaluable contributions to the field of history. This award not only celebrates the accomplishments of low-income individuals but also serves as a catalyst for their continued success and endeavors within the historical community.`;
    change_heaading.innerHTML = "Environmental System";
});
tab_open_btn_6.addEventListener("click", () => {
    tab_text.innerHTML = `Embarking on writing an extensive history research paper offers an immersive journey into the depths of the past.`;
    change_heaading.innerHTML = "Cultural History";
});
tab_open_btn_7.addEventListener("click", () => {
    tab_text.innerHTML = `PublishingDuring this stage, the paper is set to be published in the next quarterly issue of The Julian Project. Authors will receive a notice one month prior to publication.`;
    change_heaading.innerHTML = "Social System";
});
tab_open_btn_8.addEventListener("click", () => {
    tab_text.innerHTML = `Reviewal ProcessThe next step to publishing is the reviewal process. Once a paper is accepted for publication, there is three week turn-around to make final edits before final publication.`;
    change_heaading.innerHTML = "Intellectual System";
});


// accordion

let accordion = document.querySelectorAll(".accordion");
let text_disp = document.querySelector(".disp_text");
let svg_accord = document.querySelector(".svg_cont_accord");
// text_disp.style.display = "block";
// svg_accord.innerHTML = `<svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M13 2.5H8C8 2.5 8 2.5 7.9321 2.5C7.70711 2.5 8.26522 2.5 8 2.5C7.73478 2.5 7.70711 2.5 7.5 2.5C7 2.5 7 2.5 7 2.5H6H1C0.734784 2.5 0.48043 2.39464 0.292893 2.20711C0.105357 2.01957 0 1.76522 0 1.5C0 1.23478 0.105357 0.98043 0.292893 0.792893C0.48043 0.605357 0.734784 0.5 1 0.5H6H6.5C7 0.5 6.73478 0.503254 7 0.503254C7.26522 0.503254 6.5 0.503254 7 0.5C7 0.5 7.5 0.5 7.70711 0.5H8H13C13.2652 0.5 13.5196 0.605357 13.7071 0.792893C13.8946 0.98043 14 1.23478 14 1.5C14 1.76522 13.8946 2.01957 13.7071 2.20711C13.5196 2.39464 13.2652 2.5 13 2.5Z" fill="black"/>
// </svg>`;

accordion.forEach(accord_itm => {
    let accord_btn = accord_itm.querySelector(".btn_accord");
    let svg_accord = accord_itm.querySelector(".svg_cont_accord");
    accord_btn.addEventListener("click", () => {
        accordion.forEach(items => {
            if (items !== accord_itm) {
                let remove_text = items.querySelector(".disp_text");
                let svg_remove = items.querySelector(".svg_cont_accord");
                remove_text.style.display = "none";
                svg_remove.innerHTML = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 7.99609H8V12.9961C8 13.2613 7.89464 13.5157 7.70711 13.7032C7.51957 13.8907 7.26522 13.9961 7 13.9961C6.73478 13.9961 6.48043 13.8907 6.29289 13.7032C6.10536 13.5157 6 13.2613 6 12.9961V7.99609H1C0.734784 7.99609 0.48043 7.89074 0.292893 7.7032C0.105357 7.51566 0 7.26131 0 6.99609C0 6.73088 0.105357 6.47652 0.292893 6.28899C0.48043 6.10145 0.734784 5.99609 1 5.99609H6V0.996094C6 0.730877 6.10536 0.476523 6.29289 0.288987C6.48043 0.10145 6.73478 -0.00390625 7 -0.00390625C7.26522 -0.00390625 7.51957 0.10145 7.70711 0.288987C7.89464 0.476523 8 0.730877 8 0.996094V5.99609H13C13.2652 5.99609 13.5196 6.10145 13.7071 6.28899C13.8946 6.47652 14 6.73088 14 6.99609C14 7.26131 13.8946 7.51566 13.7071 7.7032C13.5196 7.89074 13.2652 7.99609 13 7.99609Z" fill="black"/>
</svg>`;
            }
        });
        let disp_text = accord_itm.querySelector(".disp_text");
        let disp_prop = window.getComputedStyle(disp_text).display;
        if (disp_prop === "none") {
            disp_text.style.display = "block";
            svg_accord.innerHTML = `<svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2.5H8C8 2.5 8 2.5 7.9321 2.5C7.70711 2.5 8.26522 2.5 8 2.5C7.73478 2.5 7.70711 2.5 7.5 2.5C7 2.5 7 2.5 7 2.5H6H1C0.734784 2.5 0.48043 2.39464 0.292893 2.20711C0.105357 2.01957 0 1.76522 0 1.5C0 1.23478 0.105357 0.98043 0.292893 0.792893C0.48043 0.605357 0.734784 0.5 1 0.5H6H6.5C7 0.5 6.73478 0.503254 7 0.503254C7.26522 0.503254 6.5 0.503254 7 0.5C7 0.5 7.5 0.5 7.70711 0.5H8H13C13.2652 0.5 13.5196 0.605357 13.7071 0.792893C13.8946 0.98043 14 1.23478 14 1.5C14 1.76522 13.8946 2.01957 13.7071 2.20711C13.5196 2.39464 13.2652 2.5 13 2.5Z" fill="black"/>
</svg>
`;
        } else {
            disp_text.style.display = "none";
            svg_accord.innerHTML = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 7.99609H8V12.9961C8 13.2613 7.89464 13.5157 7.70711 13.7032C7.51957 13.8907 7.26522 13.9961 7 13.9961C6.73478 13.9961 6.48043 13.8907 6.29289 13.7032C6.10536 13.5157 6 13.2613 6 12.9961V7.99609H1C0.734784 7.99609 0.48043 7.89074 0.292893 7.7032C0.105357 7.51566 0 7.26131 0 6.99609C0 6.73088 0.105357 6.47652 0.292893 6.28899C0.48043 6.10145 0.734784 5.99609 1 5.99609H6V0.996094C6 0.730877 6.10536 0.476523 6.29289 0.288987C6.48043 0.10145 6.73478 -0.00390625 7 -0.00390625C7.26522 -0.00390625 7.51957 0.10145 7.70711 0.288987C7.89464 0.476523 8 0.730877 8 0.996094V5.99609H13C13.2652 5.99609 13.5196 6.10145 13.7071 6.28899C13.8946 6.47652 14 6.73088 14 6.99609C14 7.26131 13.8946 7.51566 13.7071 7.7032C13.5196 7.89074 13.2652 7.99609 13 7.99609Z" fill="black"/>
</svg>
`;
        }
    });
});


// scroll to top

let scroll_btn = document.querySelector(".scroll_top");
let scroll_pt = 200;
scroll_btn.classList.add("d-none");

window.addEventListener("scroll", () => {
    if (window.scrollY > scroll_pt) {
        scroll_btn.classList.remove("d-none");
    } else {
        scroll_btn.classList.add("d-none");
    }
    scroll_btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});


// progress

window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


// AOS Animation

AOS.init({
    duration: 2000,
    once: true,
});


// preloader

let preloader = document.querySelector(".preloader");
body.style.overflow = "hidden";
setTimeout(() => {
    preloader.classList.add("-top-105");
    body.style.overflow = "auto";
}, 3000);

// comeback notification

let title = document.title;
window.addEventListener("blur", () => {
    document.title = "Come back 😐";
});

window.addEventListener("focus", () => {
    document.title = title;
});