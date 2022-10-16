let darkTheme = JSON.parse(localStorage.getItem('theme')) ?? false;

function changeToDarkMode(){

    if (darkTheme) {
        document.documentElement.style.setProperty('--background-color', "#121212");
        document.documentElement.style.setProperty('--blue', "#BB86FC");
        document.documentElement.style.setProperty('--red', "#ff8775");
        document.documentElement.style.setProperty('--yellow', "#FBDF8C");
        document.documentElement.style.setProperty('--light', '#44445e');
        document.documentElement.style.setProperty('--color', "#F1F1FD");
        document.documentElement.style.setProperty('--inactive', "#535370");

    } else {
        document.documentElement.style.setProperty('--background-color', "white");
        document.documentElement.style.setProperty('--blue', "#7879F1");
        document.documentElement.style.setProperty('--red', "#FF715B");
        document.documentElement.style.setProperty('--yellow', "#F9CB40");
        document.documentElement.style.setProperty('--light', '#F9F5FF');
        document.documentElement.style.setProperty('--color', "#28262C");
        document.documentElement.style.setProperty('--inactive', "#afafaf");

    };
    darkTheme = !darkTheme;
    localStorage.setItem('theme', darkTheme);


}
