document.addEventListener("DOMContentLoaded", function () {

    console.log("Site Francine Santos Nutricionista carregado com sucesso.");

    if (typeof lucide !== "undefined") {

        lucide.createIcons();

        console.log("Lucide carregado");

    } else {

        console.log("Lucide não carregou");

    }

});
