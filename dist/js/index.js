console.log($("#top-ss"));
// 回到顶部
$("#top-ss").click(function () {
    console.log("ok");
    $("body,html").stop().animate({
        "scrollTop": 0
    }, 500);
})
//回到顶部划过显示二维码 

$(".HuDaoTopS").hover(function () {

    $(".HuDaoTop-EWM").css("display", "block")
}, function () {
    $(".HuDaoTop-EWM").css("display", "none")
})
//下载划过显示二维码 
$(".TOP-color ").hover(function () {

    $(".xiazai-hover").css("display", "block")
}, function () {
    $(".xiazai-hover").css("display", "none")
})


$(".xiazai-hover-dl-babab ").hover(function () {

    $(".xiazai-hover-dl").css("display", "block")
}, function () {
    $(".xiazai-hover-dl").css("display", "none")
})
//登陆划过显示二维码
// $(".TOP-colorss ").mouseenter(function () {

//     $(".xiazai-hover-dl").css("display", "block")
// })
// $(".TOP-colorss ").mouseleave(function () {

//     $(".xiazai-hover-dl").css("display", "none")
// })


