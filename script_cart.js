var table = document.getElementById("cartItems") ;
var footer = document.getElementsByClassName("changePage")[0];
var rows = table.rows.length ;
var cols = 0;
if(rows !== 0)
    cols = table.rows.item(0).cells.length ;
if(rows === 0 || cols === 0){
    table.style.display = "none";
    footer.style.display = "none";
    var noItem = document.getElementById("noItemInCart");
    noItem.style.display = "block";
}
function makeCartEmpty() {
    alert("结账成功！");
}