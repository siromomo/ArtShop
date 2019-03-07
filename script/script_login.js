window.onload = function () {
    if (window.location.href.indexOf("mail") !== -1 && document.cookie.indexOf("haveAlerted") === -1) {
        alert("注册成功!");
        var t = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);
        document.cookie = "haveAlerted=true; expires=" + t.toGMTString();
    }
    var navItems = document.getElementsByClassName("navLink");
    if (document.title === "Art Shop") {
        var curr = navItems[0].getElementsByTagName("a")[0];
        curr.removeAttribute("href");
        curr.style.color = "#ff5555";
    } else if (document.title === "Art Shop - Painting Item") {
        var curr = navItems[1].getElementsByTagName("a")[0];
        curr.removeAttribute("href");
        curr.style.color = "#ff5555";
    }
};

if (document.cookie.length > 0 && getCookie("user").length > 0) {
    var hadLogin = document.getElementsByClassName("personal login")[0];
    var hasNotLogin = document.getElementsByClassName("personal notLogin")[0];
    var toLogin = document.getElementsByClassName("toLogin")[0];
    var welcome = document.getElementsByClassName("welcome")[0];
    var username = document.getElementById("hadLoginUsername");
    hadLogin.style.display = "block";
    hasNotLogin.style.display = "none";
    toLogin.style.display = "none";
    welcome.style.display = "inline";
    username.innerText = getCookie("user");


    //var right = document.getElementsByClassName("right")[0];
    //right.style.marginTop = "-24%";
    var perList = document.getElementsByClassName("personal")[0].getElementsByTagName("ul")[0];
    perList.style.left = "10%";
} else {
    var hadLogin = document.getElementsByClassName("personal login")[0];
    var hasNotLogin = document.getElementsByClassName("personal notLogin")[0];
    var toLogin = document.getElementsByClassName("toLogin")[0];
    var welcome = document.getElementsByClassName("welcome")[0];
    hadLogin.style.display = "none";
    hasNotLogin.style.display = "block";
    toLogin.style.display = "inline";
    welcome.style.display = "none";
    if(document.title === "Art Shop - Shopping Cart" || document.title === "Art Shop - Personal Info"){
        window.location.href = "index.html";
    }
}

var verImgDiv = document.getElementsByClassName("verification")[0];
var verImgList = verImgDiv.getElementsByTagName("img");
for (let i = 0; i < 4; i++) {
    let rand = Math.floor(Math.random() * 10);
    var verImg = verImgList[i];
    verImg.id = rand + "";
    verImg.src = "verificationCode/" + rand + ".jpg"
}


function getCookie(cookieName) {
    let name = cookieName + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0)
            return c.substring(name.length, c.length);
    }
    return "";
}

function login() {
    var loginBlock = document.getElementsByClassName("loginBlock")[0];
    var cover = document.getElementsByClassName("cover")[0];
    loginBlock.style.display = "block";
    cover.style.display = "block";
    cover.style.height = (window.innerHeight) + "px";
    document.documentElement.style.overflowY = 'hidden';


    loginBlock.style.left = (window.innerWidth - loginBlock.scrollWidth) / 2 + "px";
    loginBlock.style.top = (window.innerHeight - loginBlock.scrollHeight) / 2 + "px";
}


function loginSubmit() {
    let loginForm = document.getElementById("loginForm");
    let inputs = loginForm.getElementsByTagName("input");
    let valid = true;
    for (let i = 0; i < inputs.length; i++) {
        let ele = inputs[i];
        if (ele.name === "user") {
            if (ele.value === null || ele.value.length === 0) {
                alert("请填写用户名");
                valid = false;
                break;
            }
        } else if (ele.name === "pwd") {
            if (ele.value === null || ele.value.length === 0) {
                alert("请填写密码");
                valid = false;
                break;
            }
        } else if (ele.name === "ver") {
            if (ele.value === null || ele.value.length === 0) {
                alert("请填写验证码");
                valid = false;
            } else {
                let verCode = ele.value;
                let corrCode = "";
                var verImgDiv = document.getElementsByClassName("verification")[0];
                var verImgList = verImgDiv.getElementsByTagName("img");
                for (let i = 0; i < 4; i++) {
                    let verImg = verImgList[i];
                    corrCode += verImg.id;
                }
                if (corrCode !== verCode) {
                    alert("验证码错误");
                    valid = false;
                }
            }
        }
    }
    if(valid){
        try {
            loginForm.submit();
        }catch (e) {
            alert("服务器错误");
        }
    }
}

function register() {
    var registerBlock = document.getElementsByClassName("registerBlock")[0];
    var cover = document.getElementsByClassName("cover")[0];
    registerBlock.style.display = "block";
    cover.style.display = "block";
    cover.style.height = Math.max(document.body.scrollHeight, window.innerHeight) + "px";

    registerBlock.style.left = (window.innerWidth - registerBlock.scrollWidth) / 2 + "px";
    registerBlock.style.top = (window.innerHeight - registerBlock.scrollHeight) / 2 + "px";
    document.documentElement.style.overflowY = 'hidden';

    var invalidEles = document.getElementsByClassName("invalid");
    for(let i = 0; i < invalidEles.length; i++)
        invalidEles[i].style.display = "none";

    var inputs = document.getElementsByClassName("regInput");
    for(let i = 0; i < inputs.length; i++)
        inputs[i].value = "";
}

function logout() {
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

var regValid = false;

function checkRegUser(user) {
    if (user.length === 0) {
        var emptyUser = document.getElementById("emptyUser");
        emptyUser.style.display = "inline";
        regValid = false;
    } else {
        var emptyUser = document.getElementById("emptyUser");
        emptyUser.style.display = "none";
        regValid = true;
        if (user.length < 6 || /^[a-zA-Z]+$/.test(user) || /^[0-9]+$/.test(user)) {
            var invalidUser = document.getElementById("invalidUser");
            invalidUser.style.display = "inline";
            regValid = false;
        } else {
            var invalidUser = document.getElementById("invalidUser");
            invalidUser.style.display = "none";
            regValid = true;
        }
    }
}

function checkRegPwd(pwd) {
    if (pwd.length === 0) {
        var emptyPwd = document.getElementById("emptyPwd");
        emptyPwd.style.display = "inline";
        regValid = false;
    } else {
        var emptyPwd = document.getElementById("emptyPwd");
        emptyPwd.style.display = "none";
        regValid = true;
        var regUserInput = document.getElementById("regUser");
        if (pwd.length < 6 || pwd === regUserInput.value) {
            var invalidUser = document.getElementById("invalidPwd");
            invalidUser.style.display = "inline";
            regValid = false;
        } else {
            var invalidUser = document.getElementById("invalidPwd");
            invalidUser.style.display = "none";
            regValid = true;
        }
    }
}

function checkRegEmail(email) {
    var reg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
    if (email.length === 0) {
        var emptyMail = document.getElementById("emptyMail");
        emptyMail.style.display = "inline";
        regValid = false;
    } else {
        var emptyMail = document.getElementById("emptyMail");
        emptyMail.style.display = "none";
        regValid = true;
        if (reg.test(email)) {
            var invalidUser = document.getElementById("invalidMail");
            invalidUser.style.display = "none";
            regValid = true;
        } else {
            var invalidUser = document.getElementById("invalidMail");
            invalidUser.style.display = "inline";
            regValid = false;
        }
    }
}

function checkRegTel(tel) {
    var reg = /^[0-9]+$/;
    var emptyTel = document.getElementById("emptyTel");
    if (tel.length === 0) {
        emptyTel.style.display = "inline";
        regValid = false;
    } else {
        emptyTel.style.display = "none";
        var invalidTel = document.getElementById("invalidTel");
        if (tel.length !== 11 || !reg.test(tel)) {
            invalidTel.style.display = "inline";
            regValid = false;
        } else {
            invalidTel.style.display = "none";
            regValid = true;
        }
    }
}

function checkRegRepPwd(repPwd) {
    var pwd = document.getElementById("regPwd");
    if (repPwd.length === 0) {
        var emptyRep = document.getElementById("emptyRep");
        emptyRep.style.display = "inline";
        regValid = false;
    } else {
        var emptyRep = document.getElementById("emptyRep");
        emptyRep.style.display = "none";
        regValid = true;
        if (repPwd !== pwd.value) {
            var invalidUser = document.getElementById("invalidRep");
            invalidUser.style.display = "inline";
            regValid = false;
        } else {
            var invalidUser = document.getElementById("invalidRep");
            invalidUser.style.display = "none";
            regValid = true;
        }
    }
}

function checkRegAddr(repAddr) {
    var emptyAddr = document.getElementById("emptyAddr");
    if(repAddr.length === 0){
        emptyAddr.style.display = "inline";
        regValid = false;
    }
    else{
        emptyAddr.style.display = "none";
        regValid = true;
    }
}

function registerSubmit() {
    var regUserInput = document.getElementById("regUser");
    checkRegUser(regUserInput.value);
    if (!regValid)
        return;
    var regEmailInput = document.getElementById("regEmail");
    checkRegEmail(regEmailInput.value);
    if (!regValid)
        return;
    var regTelInput = document.getElementById("regTel");
    checkRegTel(regTelInput.value);
    if(!regValid)
        return;
    var regAddrInput = document.getElementById("regAddr");
    checkRegAddr(regAddrInput.value);
    if(!regValid)
        return;
    var regPwdInput = document.getElementById("regPwd");
    checkRegPwd(regPwdInput.value);
    if (!regValid)
        return;
    var regRepInput = document.getElementById("regRepPwd");
    checkRegRepPwd(regRepInput.value);
    if(!regValid)
        return;

    var regForm = document.getElementById("registerForm");
    if (regValid) {
        try {
            document.cookie = "haveAlerted=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
            regForm.submit();
        } catch (e) {
            alert("注册失败，服务器错误");
        }
    } else {
        alert("注册失败，填写不符合格式");
    }
}

var regUserInput = document.getElementById("regUser");
regUserInput.onblur = function () {
    checkRegUser(regUserInput.value);
};

var regEmailInput = document.getElementById("regEmail");
regEmailInput.onblur = function () {
    checkRegEmail(regEmailInput.value);
};
var regPwdInput = document.getElementById("regPwd");
regPwdInput.onblur = function () {
    checkRegPwd(regPwdInput.value);
};
var regRepInput = document.getElementById("regRepPwd");
regRepInput.onblur = function () {
    checkRegRepPwd(regRepInput.value);
};
var regTelInput = document.getElementById("regTel");
regTelInput.onblur = function () {
    checkRegTel(regTelInput.value);
};
var regAddrInput = document.getElementById("regAddr");
regAddrInput.onblur = function () {
    checkRegAddr(regAddrInput.value);
}

function removeFromCart() {
    alert("删除成功!");
}

function showCartContent() {
    var contentDiv = document.getElementById("showCartInOtherPage");
    contentDiv.style.display = "block";

}

function hideCartContent() {
    var contentDiv = document.getElementById("showCartInOtherPage");
    contentDiv.style.display = "none";
}