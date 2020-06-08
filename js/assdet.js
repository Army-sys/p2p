$(function(){
    $('.flo>div').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
        var index = $(this).index();
        $('.finor-right>div').eq(index).addClass('active').siblings().removeClass('active')
    })
})