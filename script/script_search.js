var changePage = document.getElementsByClassName("changePage")[0];
var showMes = document.getElementsByClassName("showSearchItemMethod")[0];
var searchItemList = document.getElementsByClassName("searchItemList")[0];
var Srows = searchItemList.rows.length ;
var Scols = 0;
if(Srows !== 0)
    Scols = searchItemList.rows.item(0).cells.length ;
if(Srows === 0 || Scols === 0){
    searchItemList.style.display = "none";
    changePage.style.display = "none";
    showMes.style.display = "none";
    var noSearchRes = document.getElementById("noSearchRes");
    noSearchRes.style.display = "block";
}