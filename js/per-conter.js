$(function () {

    // 给div注册点击事件
    $('.finer>div').click(function () {
        // 给点击div添加active 其他兄弟div去掉active
        $(this).addClass('active').siblings().removeClass('active')
        // 获取索引
        var index = $(this).index();
        //    给二级div同步索引 点击添加active 其他去掉
        $('.accont>div').eq(index).addClass("active").siblings().removeClass('active')
    })

    // 给点击div注册事件
    $('.rep>div').click(function () {
        // 给点击div添加active  其他兄弟元素删除active
        $(this).addClass('active').siblings().removeClass('active')
        // 获取索引
        var index = $(this).index();

        // 二级显示
        $('.finor-rightd>div').eq(index).addClass('active').siblings().removeClass('active')
    })
    //   点击按钮注册事件
    $('.card button').click(function(){
        // 找到注册按钮的索引
        let index = $(this).closest('.card').siblings().index();
        // 同步索引
        $('accright>div').eq(index).addClass('active').siblings().removeClass('active')
    })
//     $('.flo>div').click(function () {
//         $(this).addClass('active').siblings().removeClass('active')
//         var index = $(this).index();
//         $('.assdet-right>div').eq(index).addClass('active').siblings().removeClass('active')
//     })

//     $('.repe').click(function () {
//         $('.finor-rightd').addClass('active').siblings().removeClass("active")
//         $('.finle').addClass('active')
//     })
//     $('.finerd').click(function () {
//         $('.accont').addClass('active').siblings().removeClass("active")
//     })
//     $('.flod').click(function () {
//         $('.assdet-right').addClass('active').siblings().removeClass("active")
//         $('.finled').addClass('active')
//     })
//     $('.ac').click(function () {
//         $('.acconted').addClass('active').siblings().removeClass("active")
       
//     })
// })