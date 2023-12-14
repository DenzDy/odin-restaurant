import './style.css';
import './reset.css';
import './images/main-background-pic.jpeg';
import initialize_home from './home.js';
import load_menu from './menu.js';
function click_handling(nav_item){
    const nav_items = document.getElementsByClassName("nav-item");
    Array.from(nav_items).forEach(element => {
        if(nav_item != element){
            element.classList.remove("click");
        }
    });
    nav_item.classList.add("click");  
}
function select_initializer(nav_item){
    switch(nav_item.id){
        case "home":
            clear_main();
            document.body.querySelector("#content").appendChild(initialize_home());
            break;
        case "menu":
            clear_main();
            document.body.querySelector("#content").appendChild(load_menu());
            break;
        case "contact":
            clear_main();
            document.body.querySelector("#content").appendChild(load_menu());
            break;
    }
}
function clear_main(){
    const main = document.getElementById("main-container");
    if(main !== null){
        main.remove();
    }
}
function initialize_nav(){
    const nav_container = document.createElement('div');
    function create_nav_item(id_name){
        const nav_item = document.createElement("div");
        nav_item.classList.add("nav-item");
        nav_item.setAttribute("id", id_name);
        nav_item.innerHTML = id_name.charAt(0).toUpperCase() + id_name.slice(1);
        nav_item.addEventListener('click', (e) => {
            click_handling(nav_item);
            select_initializer(nav_item);  
        });
        return nav_item;
    }
    nav_container.classList.add("nav-container");
    nav_container.append(
        create_nav_item("home"), 
        create_nav_item("menu"), 
        create_nav_item("contact")
    );
    return nav_container;
}
function initialize_header(){
    const header_container = document.createElement("div");
    const header_text = document.createElement("div");
    header_text.classList.add("header-text");
    header_text.innerHTML = "Restaurant";
    header_container.classList.add("header-container");
    header_container.append(header_text, initialize_nav());
    return header_container;
    
}
function load_website(){
    document.body.querySelector("#content").appendChild(initialize_header());
    document.body.querySelector("#content").appendChild(initialize_home());
}
load_website();
