$(function () {
    // 获取
    var $nickname = $('#nickname')
    var $phone = $('#phone')
    var $email = $('#email')



    var uFlag = false;
    var pFlag = false;
    var eFlag = false;


    //   注册聚焦事件
    $nickname.blur(function () {
        //    正则验证
        //   聚焦事件
        var nickval = $(this).val();
        var span = $(this).next();
        if (/^[\u4E00-\u9FA5A-Za-z0-9_]+$/.test(nickval)) { //合法的

            //alert(123)
            span.text("").removeClass("error");
            $nickname.removeClass("active");
            uFlag = true;
        } else {


            span.html('请输入正确用户名').addClass("error");
            $nickname.addClass("active");
            uFlag = false;
        }

    })

    // 注册电话聚焦事件
    $phone.blur(function () {
        var phone = $(this).val();
        var span = $(this).next();
        if (/^.{3,20}$/.test(phone)) {
            // 合法
            span.text('').removeClass('error')
            $(phone).removeClass("active")
            pFlag = true;
        } else {
            span.text('请输入3-20位电话号码').addClass('error')
            $phone.addClass("active")
            pFlag = false;
        }
    })

    //邮箱
    $email.blur(function () {
        var email = $(this).val();
        var span = $(this).next();
        if (/^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})$/.test(email)) {
            span.text('').removeClass('error')
            $email.removeClass('active')
            eFlag = true;
        } else {
            span.text('请输入正确邮箱').addClass('error')
            $email.addClass("active")
            eFlag = false;
        }
    })


    $('#btn').click(function () {
        var nickname = $('#nickname').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var id = localStorage.getItem('pid');

        //   判断
        if (!(uFlag && pFlag && eFlag)){
           
            $phone.trigger("blur");
            $email.trigger("blur");
            $nickname.trigger("blur");
            return false;
        };

        // 数据传输

        $.ajax({
            url: "http://127.0.0.1:8848/updateuser.php",
            type: "POST",
            data: {
                nickname: nickname,
                phone: phone,
                email: email,
                id: id
            },
            success: function (res) {
                if (res == "ok") {
                    alert("恭喜你,修改成功!!!")
                    location.href = "index.html#per-conter/getuserinfo"
                } else {
                    alert("保存失败,请稍后再试!")
                }

            }

        })

    })
})