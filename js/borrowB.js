$(function () {
 
    //console.log("borrow_apply.js")
    //获取会话存储值
    var type = sessionStorage.getItem("type");
    switch (type) {
        case "1":
            $("#borrowType").text("信用贷").addClass("btn-success");
            break;
        case "2":
            $("#borrowType").text("车易贷").addClass("btn-warning text-white");
            break;
        case "3":
            $("#borrowType").text("房易贷").addClass("btn-primary");
            break;
        default:
            location.href = "/#want-borrow";
    }

    //    提交按钮点击事件

    $('#borrowApplyBtn').click(function () {
        // var username = localStorage.getItem("username"),
         var borrowmoney = $("#borrowmoney").val()
        // var interest = $("#interest").val(),
        // var borrowtime = $("#borrowtime").val(),
        // var repaytype = $('input[type="radio"]:checked').val(),
        // var minbid = $("#minbid").val(),
        // var bouns = $("#bouns").val(),
        // var days = $("#days").val(),
        // var title = $("#title").val(),
        // var info = $("#info").val()
        // 调用ajax接口
        $.ajax({
            url: "http://127.0.0.1:8848/borrow.php",
            type: "POST",
            data: {
                acc: localStorage.getItem("username"),
                borrowmoney: borrowmoney,
                interest: $("#interest").val(),
                borrowtime: $("#borrowtime").val(),
                repaytype: $('input[type="radio"]:checked').val(),
                minbid: $("#minbid").val(),
                bouns: $("#bouns").val(),
                days: $("#days").val(),
                title: $("#title").val(),
                info: $("#info").val()
            },
            success:function(res){
              // localStorage.setItem('borrowmoney',borrowmoney)
                
                if(res == "ok"){
                    alert("提交成功,请等待消息!")
                    location.href ="/index.html#home"
                }else{
                    alert("提交失败,请稍后再试!")
                }
            }
        })
    })
})