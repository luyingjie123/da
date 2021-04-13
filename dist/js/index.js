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


// 获取添加的商品
$.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
    uid: "51169",
}, res => {
    let str = "";
    res.data.forEach(i => {
        console.log(i.pimg);
        str += `
        <a href=" "
        target="_blank">
        <div class="box-right-L">
            <div class="box-right-L-left">
                <img src="${i.pimg}"
                    alt="">
            </div>
            <div class="box-right-L-right">
                <a href="" class="box-right-L-right-1">[ 乐海方舟 ] 独家呈献：DP龙猪2021巡演 成都站</a>
                <a href="" class="box-right-L-right-2">梵木创艺区·正火艺术中心1号馆</a>
                <a href="" class="box-right-L-right-3">2021.06.05 周六 20:30</a>
                <div class="box-right-L-right-4">¥200
                    <span>起</span>
                </div>
            </div>

        </div>

    </a>
        `
    });
    $(".box-right").html(str);


    // 通过添加数据库的内容 修改img的内容
    $(".TOP-TOP-IMG").attr("src", res.data[0].pimg)


})








