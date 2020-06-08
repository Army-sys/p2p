$(function(){
    // 给点击div注册事件
    $('#collapseTwo>div').click(function(){
        // 给点击div添加active  其他兄弟元素删除active
        $(this).addClass('active').siblings().removeClass('active')
        // 获取索引
        var index = $(this).index();
        // 二级显示
        $('.finor-right>div').eq(index).addClass('active').siblings().removeClass('active')
    })
})