//mcpDESIGNS



var $imageWidth     = 92,    // with borders
    $imageColumns    = 10;    // images across

$("#container > div .img").each(function(index) {
    var $left = (index % $imageColumns * $imageWidth);
    $(this).css("left", $left + "px");
});

$(".img a img").hover(function() {
    $(this).closest(".img").css("z-index", 1);
    $(this).animate({ height: "200", width: "200", left: "-=55", top: "-=55" }, "fast");
    $("#name").css("color", "#242424").html($(this).attr("data-name"));
    $("#school").css("color", "#242424").html($(this).attr("data-school"));
    
}, function() {
    $(this).closest(".img").css("z-index", 0);
    $(this).animate({ height: "90", width: "90", left: "+=55", top: "+=55" }, "fast");
});
