import './style.css';
import './reset.css';
function initialize_header(){
    const header_container = document.createElement("div");
    const header_text = document.createElement("div");
    const nav_container = document.createElement('div');
    function create_nav_item(id_name){
        const nav_item = document.createElement("div");
        nav_item.classList.add("nav-item");
        nav_item.setAttribute("id", id_name);
        nav_item.innerHTML = id_name.charAt(0).toUpperCase() + id_name.slice(1);
        return nav_item;
    }
    nav_container.classList.add("nav-container");
    nav_container.append(
        create_nav_item("home"), 
        create_nav_item("menu"), 
        create_nav_item("contact")
    );
    header_text.classList.add("header-text");
    header_text.innerHTML = "Restaurant";
    header_container.classList.add("header-container");
    header_container.append(header_text, nav_container);
    return header_container;
    
}
function initialize_home(){
    const main_container = document.createElement("div");
    const main_grid_container = document.createElement("div");
    const pic_container = document.createElement("div");
    const content_container = document.createElement("div");
    main_container.setAttribute("id","main-container");
    main_grid_container.classList.add("main-grid-container");
    pic_container.classList.add("content-container");
    pic_container.setAttribute("id", "pic-container");
    content_container.classList.add("content-container");
    content_container.setAttribute("id", "item-2");
    main_grid_container.append(pic_container, content_container);
    main_container.appendChild(main_grid_container);
    return main_container;

}
document.body.querySelector("#content").appendChild(initialize_header());
document.body.querySelector("#content").appendChild(initialize_home());