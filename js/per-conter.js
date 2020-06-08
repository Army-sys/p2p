$(function(){
    // 给div注册点击事件
    $('.finer>div').click(function(){
        // 给点击div添加active 其他兄弟div去掉active
        $(this).addClass('active').siblings().removeClass('active')
        // 获取索引
       var index = $(this).index();
    //    给二级div同步索引 点击添加active 其他去掉
       $('.accont>div').eq(index).addClass("active").siblings().removeClass('active')
    })
})