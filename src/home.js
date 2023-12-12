function initialize_home(){
    const main_container = document.createElement("div");
    const main_grid_container = document.createElement("div");
    const pic_container = document.createElement("div");
    const content_container = document.createElement("div");
    const main_h1 = document.createElement("h1");
    const main_parag = document.createElement("p");
    const main_button = document.createElement('button');
    main_container.setAttribute("id","main-container");
    main_grid_container.classList.add("main-grid-container");
    pic_container.classList.add("content-container");
    pic_container.setAttribute("id", "home-card-pic-container");
    content_container.classList.add("content-container", "main-font-color");
    content_container.setAttribute("id", "home-card-content-container");
    main_h1.setAttribute("id", "main-card-header-text");
    main_h1.innerHTML = "Restaurant";
    main_parag.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis, mauris ac aliquam venenatis, enim nisl placerat dui, non consequat arcu justo id urna. Sed ac tellus quis est iaculis laoreet in sit amet arcu. Donec rhoncus, sapien vitae lacinia porta, nulla quam tincidunt nisi, quis auctor metus felis in dolor.  ";
    main_parag.setAttribute('id', 'main-card-paragraph');
    main_button.setAttribute('id', 'main-card-button');
    main_button.innerHTML = "Learn More";
    content_container.append(main_h1, main_parag, main_button);
    main_grid_container.append(pic_container, content_container);
    main_container.appendChild(main_grid_container);
    return main_container;
}

export default initialize_home;