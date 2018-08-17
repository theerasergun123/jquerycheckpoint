function boldit(){
    $("#text").css("fontWeight","bold");

}

function italicit(){
    $("#text").css("fontStyle","italic");
}

function underit(){
    $("#text").css("textDecoration", "underline");

}

function backbitch(){
    $("#text").css("textDecoration", "none");
    $("#text").css("fontWeight", "normal");
    $("#text").css("fontFamily", "Arial");
    $("#text").css("fontStyle", "normal");
    $("#text").css("fontSize", "16px");
    $("#text").css("color","black");
    $("#colorChanger").val("Change Color");
    $("#fonts").val("Fonts");
    $("#sizes").val("Font Size");




}

function getSelectValue()
{
    var selectedSize = $("#sizes").val();
    
    $("#text").css("fontSize", selectedSize + "px");
}

function getSelectValueTwo(){
var selectedFont = $("#fonts").val();

$("#text").css("fontFamily", selectedFont);
}

function colorIt(){
var selectedColor = $("#colorChanger").val();

$("#text").css("color", selectedColor);

}

