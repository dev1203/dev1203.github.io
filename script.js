$(window).on("load", function() {
    $("#shake").addClass("hand");

    $("#landing-page").css('display','block');
});

$("#down").on("click", function() {
    $("#down").fadeOut();
    $(".hand").fadeOut();
    $("#landing-page").slideUp(1000, function() {
        $(".info").fadeIn(500);
        $("#up").fadeIn();
        $(".box").fadeIn(1000);
    });

});

$("#up").on("click", function() {
    $("#up").fadeOut();
    $("#landing-page").slideDown(1000, function() {
        $(".info").fadeOut(500, );
        $("#down").fadeIn();
        $(".hand").fadeIn();

    });
});

$("#rew").on("click",function(){
    $("#modal-rew").fadeIn();
});

$("#close").on("click",function(){
    $("#modal-rew").fadeOut();
});
