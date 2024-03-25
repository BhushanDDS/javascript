let btn = document.querySelector("#b1");
// btn.onclick = () => {

//     btn.innertext = "Changed Text";

// }
let mode = "light";
btn.addEventListener("click", () => {
    if (mode == "light") {
        mode = "dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");

    } else {
        mode = "light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");


    }

})