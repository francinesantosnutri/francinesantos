document.addEventListener("DOMContentLoaded", () => {

    console.log("JS carregado");

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
        console.log("Lucide carregado");
    } else {
        console.log("Lucide não carregou");
    }

});
