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
        location.href = "http://localhost:8080";



    })

})
// $(".zcdl-ztnr-s").child()

$(".btn-sange").click(function () {
    let num = $(".btn-sange").index($(this))
    console.log(num);
    $(".zcdl-ztnr-sss").css("display", "none").eq(num).css("display", "block")

    // 划过
})
























