import { changeCSSVariables, eventWithoutDefaults, returnCSSVariables } from "./tools";

export function changeTabs(){
    let projectElement = document.querySelector('.project');
    let weatherElement = document.querySelector('.weather');
    let infoElement = document.querySelector('.info');
    let themeElement = document.querySelector('.theme');
    let reportElement = document.querySelector('.report');
    let isChange = false;

    eventWithoutDefaults(infoElement , 'click' , ()=>{
        weatherElement.style.display = 'none';
        projectElement.style.display = 'block';
    });

    eventWithoutDefaults(reportElement , 'click' , ()=>{
        weatherElement.style.display = "block";
        projectElement.style.display = "none";
    });

    eventWithoutDefaults(themeElement , 'click' , ()=>{
        if(isChange === false) {
            changeCSSVariables();
            themeElement.innerText = 'Light theme';
            isChange = true;
        }
        else {
            returnCSSVariables();
            themeElement.innerText = 'Dark theme';
            isChange = false;
        }
    });

}