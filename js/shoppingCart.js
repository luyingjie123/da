$.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
    id: 51178
}, res => {


    console.log(res);


    let str = ''


    res.data.forEach((i, v) => {

        str += `
         <div class="boss-zyzsnr-hz">
                <!-- 项目信息 -->
                <div class="boss-xmxx" style="width: 40%;">

                    <img class="boss-img-guc" src="${i.pimg}"
                        alt="">
                    <div class="boss-xmxx-bootm">
                        <p>${i.pname}</p>
                        <p>2021.05.01 14:30</p>
                        <p>${i.pdesc}</p>
                    </div>
                </div>
                <!-- 座位信息 -->
                <div style="width: 17%; line-height: 100px;">
                    暂无座位信息
                </div>
                <!-- 单价 -->
                <div class="danjia-s" style="width: 9%; line-height: 100px;">
                ${i.pprice}
                </div>
                <!-- 数量 -->
                <div class="shuliang-gwc" style="width: 9%; line-height: 100px;">
                    <span class="btn-shuliang-zuo">+</span>
                    <span uid="${i.uid}" pid="${i.pid}" class="punm">${i.pnum} </span>
                    <span   class="btn-shuliang-you">-</span>
                    
                </div>
                <!-- 优惠 -->
                <div style="width: 10%; line-height: 100px;">暂无</div>
                <!-- 小计     -->
                <div  class="xiaoji-leijia" style="width: 10%; line-height: 100px;">${i.pnum * i.pprice}</div>
                <div uid="${i.uid}" pid="${i.pid}" class="sovm-btn" style="width: 5%; line-height: 100px;">删除</div>
                <input class="gouxuan" type="checkbox" name="delall">
                
               
            </div>
         `
        $(".boss-zyzsnr").html(str)
    });
    // 点击多选所有打勾
    console.log($(".gouxuan"));
    $(".gouxuan-quan").click(function () {


        $(".gouxuan").prop("checked", $(".gouxuan-quan").prop("checked"))
    })




    // +按钮
    $(".btn-shuliang-zuo").click(function () {
        // siblings 相邻的
        // text
        // 判断=6的时候不加
        if ($(this).siblings(".punm").text() < 6) {
            $(this).siblings(".punm").html(($(this).siblings(".punm").text() * 1) + 1)
        } else {
            alert("最多只能购买6张")
        }
        // 把修改的数量添加到数据库中
        $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php", {

            uid: $(this).siblings(".punm").attr("uid"),
            pid: $(this).siblings(".punm").attr("pid"),
            pnum: $(this).siblings(".punm").text(),
        }, res => {
            // console.log(res);
        })
        // 数量累加
        $(this).parent().siblings(".xiaoji-leijia").html($(this).parent().siblings(".danjia-s").text() * $(this).siblings(".punm").text())
    })
    // -按钮
    $(".btn-shuliang-you").click(function () {
        // 判断 小于1的时候不能-
        if (($(this).siblings(".punm").text() >= 2)) {
            $(this).siblings(".punm").html(($(this).siblings(".punm").text() * 1) - 1)
        } else {
            alert("至少一张")
        }
        // 把修改的数量添加到数据库中
        $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php", {

            uid: $(this).siblings(".punm").attr("uid"),
            pid: $(this).siblings(".punm").attr("pid"),
            pnum: $(this).siblings(".punm").text(),
        }, res => {
        })


        // 数量累加
        // parent 找父元素
        // console.log($(this).parent().siblings(".xiaoji-leijia").text()); 获得点击按钮对应的总价
        // console.log($(this).siblings(".punm").text()); //获得按钮对应的数量
        // $(this).parent().siblings(".danjia-s") 获得按钮对应的单价
        $(this).parent().siblings(".xiaoji-leijia").html($(this).parent().siblings(".danjia-s").text() * $(this).siblings(".punm").text())

    })
    // 删除按钮
    $(".sovm-btn").click(function () {
        console.log();

        $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php", {
            uid: $(this).attr("uid"),
            pid: $(this).attr("pid"),
        }, res => {
            location.href = "http://localhost:8080/shoppingCart.html"
        })
    })
    // xiaoji-leijia
    $(".xiaoji-leijia").each(function () {
        let a = 0;
        a += parseInt($(this).eq(0).html())
        a += parseInt($(this).eq(1).html())
        console.log(a);


    })








})

