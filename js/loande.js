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
            
             var borr = $('#borrowmoney').text();
            
             
             var own = $('#ownmoney').text();
             var boo = borr-own;
            
             
             var cha = $('#chargemoney').val();
             if(cha*1 > boo*1){
                 alert("超出投资额度,请选择其他用户!!")
                 location.href="/index.html"
                 return false
                 
             }else{
                
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