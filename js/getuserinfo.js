
$(function(){
  
    // 发送ajax
    $.ajax({
        url:"http://127.0.0.1:8848/getuserinfo.php",
        type:"GET",
        
        data:{
            id:localStorage.getItem("pid")
        },
        dataType:"json",
        success:function(res){
            //console.log(res);
            for(var key in res){
                $("#"+key).text(res[key]);
            }
            // $("#username").text(data.username);
            // $("#nickname").text(data.nickname);
            // $("#totalmoney").text(data.totalmoney);
            // $("#usablemoney").text(data.usablemoney);
            // $("#lastlogintime").text(data.lastlogintime);
            // $("#blockedmoney").text(data.blockedmoney);
        //}
        }
    })
})