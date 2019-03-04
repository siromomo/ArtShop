var footprintString = getCookie("footprint");
if(footprintString === null || footprintString === undefined || footprintString.length === 0)
    footprintString = "<a href='index.html' style='color: #ff5555'>首页</a>";
var pageTitle = document.title;
var stringToAdd = "";
switch (pageTitle) {
    case "Art Shop - Painting Item":
        stringToAdd = " - <a href='item.html' style='color: #ff5555'>商品详情</a>";
        break;
    case "Art Shop - Personal Info":
        stringToAdd = " - <a href='info.html' style='color: #ff5555'>个人信息</a>";
        break;
    case "Art Shop - Search Page":
        stringToAdd = " - <a href='search.html' style='color: #ff5555'>搜索</a>";
        break;
    case "Art Shop - Shopping Cart":
        stringToAdd = " - <a href='shoppingCart.html' style='color: #ff5555'>购物车</a>";
        break;
    default:
        footprintString = "<a href='index.html' style='color: #ff5555'>首页</a>"
}
if(stringToAdd !== "") {
    let lastIndex = footprintString.indexOf(stringToAdd);
    if (lastIndex !== -1)
        footprintString = footprintString.substring(0, lastIndex + stringToAdd.length);
    else
        footprintString += stringToAdd;
}
document.getElementsByClassName("footPrintContent")[0].innerHTML = footprintString;
document.cookie = "footprint=" + footprintString;

var footprintSpan = document.getElementsByClassName("footPrintContent")[0];
var footLinks = footprintSpan.getElementsByTagName("a");
footLinks[footLinks.length - 1].removeAttribute("href");