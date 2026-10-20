import { initBurgerMenu } from "./burger-menu.js";
import { initReadings } from "./readings.js";

document.addEventListener('DOMContentLoaded', () => {
    initBurgerMenu();
    initReadings();

    //dark theme toggle
const darkThemeToggle = document.querySelector('.theme-toggle');
    if(darkThemeToggle){
        darkThemeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        })
    }
});