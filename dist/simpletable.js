function startSimpleTable(){
    $(".simpletable tr:nth-child(odd)").addClass("odd-row");
    $(".simpletable td:first-child, .simpletable th:first-child").addClass("first");
    $(".simpletable td:last-child, .simpletable th:last-child").addClass("last");
};
$(function(){
    startSimpleTable();
});