//Adds a new to do item from text box when user hits enter
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var newToDo = ($(this).val());
        $("ul").append("<li><span>[ ]</span> " + newToDo+ "</li>");
        $(this).val("");
    }
})

//Toggle completed items
$("ul").on("click","li", function(){
    $(this).toggleClass("complete");
});

//Click box to remove item
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    event.stopPropagation();
})