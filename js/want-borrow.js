$(function(){
   $('#boxab').on("click","button",function(){
 
    //    获取自定义属性
     var type = $(this).data('type');
    // console.log(type);
    //   跳转到借款页面
    // 存到会话储存
    sessionStorage.setItem("type",type)
    location.href="#per-conter/borrowB"
   })
})