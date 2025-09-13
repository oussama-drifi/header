// menu logic
const dropdownMenu = document.querySelector(".desktop-header .dropdown-links .menu");
const tabsWrapper = document.querySelector(".desktop-header .dropdown-links .menu .tabs-wrapper");
const dropdownLinks = document.querySelectorAll(".desktop-header .dropdown-links > li span");

const tabsWrapperStates = {
    products: 0, // for pricing
    solutions: -600, // for solutions
    recources: -1100 // for recources
} 

dropdownLinks.forEach(link => {
    link.onmouseenter = () => {
        // remove hover state from other links
        dropdownLinks.forEach(link => link.classList.remove("hover"))
        // add hove state to the current link
        link.classList.add("hover");

        // show menu
        dropdownMenu.classList.add("show-menu");

        // decide which menu to show
        switch (link.classList[0]){
            case "products":
                // move to pricing menu
                tabsWrapper.style.transform = `translateX(${tabsWrapperStates.products}px)`;
                // increase size to 600px
                dropdownMenu.classList.add("stretch-menu-width");
                break;
            case "solutions":
                // move to solutions menu
                tabsWrapper.style.transform = `translateX(${tabsWrapperStates.solutions}px)`;
                // resize back to 500px
                dropdownMenu.classList.remove("stretch-menu-width");
                break;
            case "recources":
                // move to recources menu
                tabsWrapper.style.transform = `translateX(${tabsWrapperStates.recources}px)`;
                // resize back to 500px
                dropdownMenu.classList.remove("stretch-menu-width");
                break;
        }
    }
    link.onmouseout = e => {
        if (!dropdownMenu.contains(e.relatedTarget)){
            // remove hover state & hide dropdown menu
            link.classList.remove("hover");
            dropdownMenu.classList.remove("show-menu");
        }
    }
});
dropdownMenu.onmouseout = (e) => {
    // unless the next target is outside the menu, don't hide menu & keep hover state
    if (!dropdownMenu.contains(e.relatedTarget)){
        dropdownMenu.classList.remove("show-menu");
        dropdownLinks.forEach(link => link.classList.remove("hover"));
    }
}