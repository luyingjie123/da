// 获取提示错误框

$(".input").eq(0).focusout(function () {
    // 手机号
    var reg1 = /^1[3456789]\d{9}$/
    if (reg1.test($(this).val())) {
        $(".tizhi").eq(0).css("display", "none")
    } else {
        console.log($(this).val());
        $(".tizhi").eq(0).css("display", "block")
    }


})
// 密码
$(".input").eq(1).focusout(function () {
    var reg1 = /^[a-z0-9A-Z-+.`!@#$%^&*]{6,12}$/
    if (reg1.test($(this).val())) {
        $(".tizhi").eq(1).css("display", "none")
    } else {
        $(".tizhi").eq(1).css("display", "block")
    }
})
// 确认密码
$(".input").eq(2).focusout(function () {
    // attr

    if ($(".input").eq(1).val() == ($(this).val())) {
        $(".tizhi").eq(2).css("display", "none")


    } else {
        $(".tizhi").eq(2).css("display", "block")

    }
})

// 注册点击的时候
$(".btn").click(function () {
    // 显示的时候
    if ($(".tizhi").eq(0).css("display") != "none" && $(".tizhi").eq(2).attr("display") != "none") {
        console.log("输入错误");
    } else {
        // 注册接口
        $.get("http://jx.xuzhixiang.top/ap/api/reg.php", {
            username: $(".input").eq(0).val(),
            password: $(".input").eq(2).val(),
        }, res => {
            alert("恭喜你注册完成")
            console.log(res);
        })
    }
})






