$(function(){
    $('#signbut').click(function(){
        // 获取输入值
         var username = $('.username').val();
         var pwd =$('.pwd').val();
        // 没有值则阻止提交
         if(!(username && pwd)) return false
         
        //  ajax传输
       $.ajax({
        //    地址
           url:"http://127.0.0.1:8848/login.php",
        //    类型
           type:"post",
        //    参数
           data:{
              "username":username,
              "pwd":pwd,
           },
        //    正确返回
           success:function(res){
                
             if(res === "fail"){   //如果失败
                alert('用户名或密码错误')
              }else{  // 成功
                //  存储到本地数据
                // 用户名
                localStorage.setItem("username",username);
                // id
                localStorage.setItem("pid",res)
                // 弹出
                alert(username+"恭喜你注册成功!!!!")
                location.href="/#"
             }
           },
           error:function(err){
               console.log(err)
           }
           
       })

    })
})