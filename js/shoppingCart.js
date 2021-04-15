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



    // --------当全部勾选是，全选点亮，有一个没点亮全选就熄灭----------------
    // 先获取勾选框一共有几个
    //  在获取点击的勾选框有几个
    // 判断
    // 当勾选框和点击过得 数量保持一致 全选按钮点亮 反之熄灭 
    function danxK() {
        let sumPnv = 0;
        let spmvI = 0;
        for (let i = 0; i < ($(".gouxuan").length); i++) {
            spmvI = i + 1;
            if ($(".gouxuan").eq(i).prop("checked") == true) {
                sumPnv++;
            }
        }

        // 判断是否熄灭
        if (sumPnv == spmvI) {
            $(".gouxuan-quan").prop("checked", true)
        } else {
            $(".gouxuan-quan").prop("checked", false)
        }

    }



    // 点击多选所有打勾
    // ------------------------------------------------------------
    // 封装 勾选框被点击获取商品总价
    function adc() {
        let num = 0;//获取总价
        let stst = 0;
        // 先判断是否勾选
        for (let i = 0; i < $(".gouxuan").length; i++) {
            // 判断状态
            if ($(".gouxuan").eq(i).prop("checked") == true) {
                num += ($(".gouxuan").eq(i).parent().children(".xiaoji-leijia").html() * 1)
                stst++
            }
        }
        $("#quanxuan-shuliang").html(stst)//选中了几个
        return num
        // $("#text-zongjia").text(adc()); 获得勾选框被勾选的所都单价数量显示到总价
    }
    // ------------------------------------------------------------
    // 选中了几个商品
    $(".gouxuan").click(function () {
        adc()
        $("#text-zongjia").text(adc());
        danxK()


    })

    // 点击全部，勾选全部
    $(".gouxuan-quan").click(function () {
        $(".gouxuan").prop("checked", $(".gouxuan-quan").prop("checked"))//单选框全部勾选
        $("#text-zongjia").text(adc());
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
        $("#text-zongjia").text(adc());
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

        $("#text-zongjia").text(adc());



    })
    // 删除按钮
    $(".sovm-btn").click(function () {
        if ($(".gouxuan").length <= 0) {
            console.log("没有商品");
        } else {
            console.log("有商品");
        }
        $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php", {
            uid: $(this).attr("uid"),
            pid: $(this).attr("pid"),
        }, res => {
            location.href = "http://localhost:8080/shoppingCart.html"
        })
        sllj()
    })
    // 当购物车中没有商品时，显示新页面（购物车为空
    let sum = 1
    if (sum == $(".sovm-btn").length + 1) {
        console.log("购物车没有商品,购物车隐藏,2号显示");
        $(".gwc-bx").css("display", "none")
        $(".tishi-zhuti").css("display", "block")
    } else {
        console.log("有商品");
        $(".gwc-bx").css("display", "block")
    }
    // 显示购物车一共有几个商品
    $("#quanxuan-shuliang-s").html($(".sovm-btn").length)


})





