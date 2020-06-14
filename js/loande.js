$(function () {
    $.ajax({
        url: "http://127.0.0.1:8848/getborrowinfo.php",
        type: "GET",
        data: {
            borrowid: sessionStorage.getItem('borrowid')
        },
        dataType: "json",
        success: function (data) {

            //遍历内容
            for (var key in data) {
                $("#" + key).text(data[key])
            }
        }
    })

    $('#btnn').click(function () {
        if (!(localStorage.getItem('pid') && sessionStorage.getItem('borrowid'))) {
            alert('请先登录!!')
            location.href = "./sign.html"

        }
        // 投资
        var chargemoney = $('#chargemoney').val();
        if (!chargemoney) return false
        $.ajax({
            url: "http://127.0.0.1:8848/invest.php",
            type: "POST",
            data: {
                id: localStorage.getItem('pid'),
                borrowid: sessionStorage.getItem('borrowid'),
                chargemoney: chargemoney
            },

            success: function (data) {

               // var char = localStorage.setItem(' chargemoney', chargemoney)
                // 获取缺少的值



                // var ba = localStorage.getItem('borrowmoney')
                // var bb = localStorage.getItem(' chargemoney')
                // console.log(bb);



                // if (ba > bb) {
                //     alert("请投资其他客户")
                //     chargemoney ==0
                //     }return false
                 if (data == '10001') {
                    alert("余额不足,请充值!!")
                } else if (data == "ok") {
                    alert("恭喜你,投资成功!!!")
                } else {
                    alert("充值失败请稍后再试!!!!")
                }
                history.go(0)

            }
        })
    })

})