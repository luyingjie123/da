$(".xiala-css").hover(function () {
    $(".xiala-css-li").css("display", "block")
}, function () {
    $(".xiala-css-li").css("display", "none")
})
// 登陆接口
$(".denglu").click(function () {
    $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
        username: $(".name").val(),
        password: $(".password").val(),
    }, res => {
        alert(res.msg)
        console.log(res);
    })

})

// $(".btn").click(function () {
//     if ($(".tizhi").eq(0).css("display") != "none" && $(".tizhi").eq(2).attr("display") != "none") {

//     } else {
//         
//     }
// })














