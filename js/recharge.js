$(function(){

    //充值按钮 点击事件
    $("#chargbtn").click(function () {
        //获取数据
        var bankcode = $("#bankcode").val();
        var chargemoney = $("#chargemoney").val();
        var id = localStorage.getItem("pid");
        if (!(bankcode && chargemoney)) return false;
        $.ajax({
            url:"http://127.0.0.1:8848/charge.php",
            data:{
                id:id,
                bankcode:bankcode,
                chargemoney:chargemoney
            },
            type:"POST",
            success:function(data){
                if(data =="ok" && chargemoney>100){
                    alert("恭喜您,充值成功！");
                    location.href="/#per-conter/getuserinfo";
                }else{
                    alert("充值失败，请稍后再试~~~");
                    location.href="/recharge.html"
                }
            }
        });

    });
})

