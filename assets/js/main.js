import { initBurgerMenu } from "./burger-menu.js";
import { initReadings } from "./readings-date.js";
import { initTimestamp } from "./get-time.js";
import { initChatInput } from "./responsive-textbox.js";

document.addEventListener('DOMContentLoaded', () => {
    initBurgerMenu();
    initReadings();
    initTimestamp();
    initChatInput();

    //dark theme toggle
const darkThemeToggle = document.querySelector('.theme-toggle');
    if(darkThemeToggle){
        darkThemeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        })
    }
});