
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

//登陆划过显示

$(".xiazai-hover-dl-babab ").hover(function () {

    $(".xiazai-hover-dl").css("display", "block")
}, function () {
    $(".xiazai-hover-dl").css("display", "none")
})

//地名划过显示
$(".BOSS-hover-chengshi").hover(function () {

    $(".zybk").css("display", "block")
}, function () {
    $(".zybk").css("display", "none")
})
$("box-right").eq(0)

// 首页商品列表接口
// 获取添加的商品
$.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
    uid: "51178",
}, res => {
    console.log(res.data);
    let str = "";
    let ket = 0
    res.data.forEach(i => {
        ket++;

        if (ket < 7) {
            // 6个单独的小的
            str += `
            <a href="../detal.html?id=${i.pid} "
            target="_blank">
                <div class="box-right-L">
                    <div class="box-right-L-left">
                        <img src="${i.pimg}"
                            alt="">
                    </div>
                    <div class="box-right-L-right">
                        <a href="" class="box-right-L-right-1">"${i.pname}"</a>
                        <a href="" class="box-right-L-right-2">"${i.pdesc}</a>
                        <a href="" class="box-right-L-right-3">2021.06.05 周六 20:30</a>
                        <div class="box-right-L-right-4">¥${i.pprice}
                            <span>起</span>
                        </div>
                    </div>
                </div>
            </a>

            `
        }
    });
    $(".box-right").html(str);


    // 通过添加数据库的内容 修改img的内容
    $(".TOP-TOP-IMG").attr("src", res.data[6].pimg)


})








