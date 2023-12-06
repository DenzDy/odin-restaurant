import './style.css';
import './reset.css';
function initializeHeader(){
    let header_container = document.createElement("div").classList.add("header-container");
    let header_text = document.createElement("div").classList.add("header-text").innerHTML = "Restaurant";
    let nav_container = document.createElement("div").classList.add("nav-container").append(
        document.createElement("div").classList.add("nav-item").setAttribute("id", "home").innerHTML = "Home",
        document.createElement("div").classList.add("nav-item").setAttribute("id", "menu").innerHTML = "Menu",
        document.createElement("div").classList.add("nav-item").setAttribute("id", "contact").innerHTML = "Contact" 
    );
    header_text.appendChild(nav_container);
    header_container.appendChild(header_text);
    return header_container;
}
document.body.querySelector("#content").appendChild(initializeHeader());