let toggleNavStatus = false;

let toggleNav = function(){
    let getSidebar = document.querySelector(".nav");

    if (toggleNavStatus === false){
        getSidebar.style.visibility = "visible";
        toggleNavStatus = true;
    }  

else if (toggleNavStatus === true) {
    getSidebar.style.visibility = "hidden";
    toggleNavStatus = false;
}
}

let backgroundToggle = function(){
    let setToBlue = document.querySelector("body");
    setToBlue.style.backgroundColor = "deepskyblue";

    let getSidebar = document.querySelector(".nav");
    getSidebar.style.visibility = "hidden";
}
