function close1() {
    var registerBlock = document.getElementsByClassName("registerBlock")[0];
    var cover = document.getElementsByClassName("cover")[0];
    registerBlock.style.display = "none";
    cover.style.display = "none";
    document.documentElement.style.overflowY = 'scroll';
};
function close2() {
    var loginBlock = document.getElementsByClassName("loginBlock")[0];
    var cover = document.getElementsByClassName("cover")[0];
    loginBlock.style.display = "none";
    cover.style.display = "none";
    document.documentElement.style.overflowY = 'scroll';
};