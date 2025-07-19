function toggleNav() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("hidden");
}

function OpenNav() {
    document.getElementById("mobileOverlay").classList.remove("hidden");
    document.getElementById("drawerMenu").classList.remove("translate-x-full");
    document.body.classList.add("overflow-hidden");
}

function CloseNav() {
    document.getElementById("drawerMenu").classList.add("translate-x-full");
    setTimeout(() => {
        document.getElementById("mobileOverlay").classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
    }, 300);
}
