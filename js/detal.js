let id = location.search.split("=")[1];
$.get("http://jx.xuzhixiang.top/ap/api/detail.php", {
    id: id
}, res => {
    // 把数据改成活的

    $(".img-img").attr("src", res.data.pimg)
    $(".pname").html(res.data.pname)
    $(".pdesc").html(res.data.pdesc)
    $(".pprice").html(res.data.pprice)
    console.log(res.data.pid);
    // 计数器
    let num = 1;
    $(".shuliang-num").html(num)
    // -按钮
    $(".jian-btn").click(function () {
        if (num > 1) {
            num--
            $(".shuliang-num").html(num)
            $(".zongjia").html((res.data.pprice) * num)

        }
    })
    // +按钮
    $(".jia-btn").click(function () {
        if (num < 6) {
            num++
            $(".shuliang-num").html(num)
            $(".zongjia").html((res.data.pprice) * num)

        }
    })
    // 总价

    // 加入购物车按钮  8.给用户购物车中添加商品 接口


    $(".btn1").click(function () {
        $.get("http://jx.xuzhixiang.top/ap/api/add-product.php", {
            uid: 51178,
            pid: res.data.pid,
            pnum: $(".shuliang-num").html()
        }, res => {
            console.log(res);
            alert("加入购物车成功")
            location.href = "http://localhost:8080/shoppingCart.html";
        })
    })



})






