function load_menu(){
    const main = document.createElement("div");
    main.setAttribute("id","main-container");
    main.innerHTML = "To be Announced";
    main.classList.add("main-font-color");
    main.style.fontSize = "5rem";
    main.style.textAlign = "center";
    main.style.fontWeight = 700;
    return main;
}

export default load_menu;