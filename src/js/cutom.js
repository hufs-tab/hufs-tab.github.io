export const toggleNav = () => {
    let x = document.getElementById("myNav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
