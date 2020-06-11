$(function () {
    //  定义变量保存节点
    var $username = $('#username')
    var $pwd = $('#pwd')
    var $email = $('#email')
    var $nickname = $('#nickname')


    //4个标杆
    var uFlag = false;
    var pFlag = false;
    var eFlag = false;
    var nFlag = false;


    // 注册聚焦事件
    $username.blur(function () {
        // 获取值
        var uval = $(this).val();
        var span = $(this).next();

        if (/^[a-zA-Z0-9_-]{4,16}$/.test(uval)) { //合法的
            //    检查注册重复性

            $.ajax({
                // 地址
                url: "http://127.0.0.1:8848/accrepeat.php",
                //类型
                type: "GET",
                // 参数
                data: "username=" + uval,

                success: function (data) {
                    if (data === "ok") { //可以使用
                        span.text("").removeClass("error");
                        $username.removeClass("active");
                        uFlag = true;
                    } else {

                        // (最大值-最小值)+最小值 1000-9999
                        var num = Math.floor(Math.random() * 8999) + 1000;
                        span.html('<strong>用户名太受欢迎<br/>' + '建议:&nbsp;' + uval + num + '</strong>').addClass("error");
                        $username.addClass("active");
                        uFlag = false;
                    }
                }
            });

        } else { //不合法
            span.text("用户名格式不合法").addClass("error");
            $username.addClass("active");
            uFlag = false;
            
        }
    })

    //  密码
    $pwd.blur(function () {
        //  获取值
        var uval = $(this).val();
        var span = $(this).next();
        if (/^\w{4,12}$/.test(uval)) { //合法
            span.text("").removeClass("error");
            $pwd.removeClass("active");
            pFlag = true;

        } else { //不合法
            span.text('请输入2-12位数字').addClass("error");
            $pwd.addClass("active");
            pFlag = false;
        }
    })

    //  邮箱
    $email.blur(function () {
        //  获取值
        var uval = $(this).val();
        var span = $(this).next();
        if (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(uval)) { //合法
            span.text("").removeClass("error");
            $email.removeClass("active");
            eFlag = true;

        } else { //不合法
            span.text('请输入正确邮箱').addClass("error");
            $email.addClass("active");
            eFlag = false;
        }
    })

    //  昵称
    $nickname.blur(function () {

        //  获取值
        var uval = $(this).val();
        var span = $(this).next();
        if (uval != "") { //合法
            span.text("").removeClass("error");
            $nickname.removeClass("active");
            nFlag = true;
        } else { //不合法
            span.text('昵称不能为空').addClass("error");
            $nickname.addClass("active");
            nFlag = false;
        }
    })


    $('#butn').click(function () {
       
        if (!(uFlag && pFlag && eFlag && nFlag)) {
            // 触发失去焦点
            $username.trigger("blur");
            $pwd.trigger("blur");
            $email.trigger("blur");
            $nickname.trigger("blur");
            return false;
        }
        // 获取value值
        var uval = $username.val();
        var pval = $pwd.val();
        var eval = $email.val();
        var nval = $nickname.val();
        // 发送ajax
        $.ajax({
            url:"http://127.0.0.1:8848/reg.php",
            type:"POST",
            data:{
                username: uval,
                pwd: pval,
                email: eval,
                nickname: nval
            },
            success:function(res){
               
                if(res == "ok"){
                    alert('恭喜你,注册成功!');
                    location.href="./sign.html"
                }else{
                    alert("注册失败，请稍后再试~~~");
                }
            }
        })

    
    });
})