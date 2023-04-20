function menu_ON_OFF(){
    const nav = document.querySelector('nav');
    const icon = document.querySelector('#nav-responsive');
   
icon.addEventListener("click", function () {
    let navStyle = document.querySelector(".show").style
    if (navStyle.display === "flex") {
        navStyle.display = "none";
        nav.style.color = "black";
        // nav.style.backgroundColor = "#fff";
    } else {
        navStyle.display = "flex";
        nav.style.color = "black";
    }

    if (icon.classList.contains('ri-menu-line')) {
        icon.classList.remove('ri-menu-line');
        icon.classList.add('ri-close-fill');
    } else {
        icon.classList.remove('ri-close-fill');
        icon.classList.add('ri-menu-line');
    }
})

}


// function dark-light mode

function dark_light_mode(){
    let DarkSun = document.querySelector(".ri-sun-fill")
    let LightSun = document.querySelector(".ri-sun-line")
    let DarkMoon = document.querySelector(".ri-moon-fill")
    let lightMoon = document.querySelector(".ri-moon-line")
    let home = document.querySelector("#home")
    let main = document.querySelector("main")
    let button = document.querySelectorAll(".btn")
    const clipart = document.querySelector("#clipart")
    let anchor = document.querySelector("#links a")

    LightSun.addEventListener("click",function(){
        // console.log("dark-sun");
        // main.style.backgroundColor="#fff";
        // main.style.color="black";
        // nav.backgroundColor="red"
        home.style.backgroundColor="#fff"
        clipart.backgroundColor="initial"
        home.style.color="black"
        anchor.color="#fff"
        button.forEach(function(elem){
            elem.style.color="black"
        })
    })
    
    DarkMoon.addEventListener("click",function(){

        // main.style.backgroundColor="black";
        // main.style.color="#fff";
        home.style.backgroundColor="black"
        clipart.backgroundColor="initial"
        anchor.color="#fff"
        home.style.color="#fff"
        button.forEach(function(elem){
            elem.style.color="#fff"
        })
        // button.style.color="#fff"
        console.log("light-moon");
    })
}






menu_ON_OFF()
// dark_light_mode()
