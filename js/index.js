$(function () {

    $('#lide>a').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    })

    // // 加载
     window.onhashchange = locapages;
     locapages();

    function locapages() {
        var hash = location.hash;

        switch (hash) {
            case "":
                $('#main').load("../../pages/home.html")
                break;
            case "#home":
                $('#main').load("../../pages/home.html")
                console.log(hash)
                break;
            case "#recruit":
                $('#main').load("../../pages/recruit.html")
                console.log(hash)
                break;
            case "#want-borrow":
                $('#main').load("../../pages/want-borrow.html")
                break;
            case "#per-conter":
                $('#main').load("../../pages/per-conter.html")
                break;
            default:
                $('#main').load("../../pages/404.html")
                break;
        }
        activeChangeNav(hash)
    }
        //激活导航样式
        function activeChangeNav(hash) {
            // console.log(hash)
           // console.log($(".content-nav .nav-item a[href='"+hash+"']"))

            //先找对应的a添加active 删除active
           // $(".lide a[href='"+hash+"']").addClass("active").parent().siblings().find("a").removeClass("active");

           if(hash==="") hash="#home";
            //先删除所有a的active
            $("#lide a").removeClass("active")
            //再给对应加上active
            $("#lide a[href='" + hash + "']").addClass("active")
        }

        algin();
        function algin(){
            // 获取本地存储数据
           var username = localStorage.getItem('username');
           var pid = localStorage.getItem('pid')
            if(username && pid){ //都有
                // 渲染登录
                $('#signd').html('<a class="nav-link" href="#">'+username+'</a>');
                // 渲染注销'
                $('#regis').html('<a class="nav-link" href="#" id="re">注销</a>');
            }else{   //没有登录
                // 渲染登录
                $('#signd').html('<a class="nav-link" href="../sign.html">登录</a>');
                // 渲染注册
                $('#regis').html('<a class="nav-link" href="../register.html">注册</a>');
            }
        }
        // 注销事件委派
        // 注销动态获取
        $('#regis').on('click',"#re",function(){
             if(confirm("你确定要退出吗!")){
                 localStorage.removeItem('username');
                 localStorage.removeItem('pid')
                //  恢复页面
                  // 渲染登录
                  $('#signd').html('<a class="nav-link" href="../sign.html">登录</a>');
                  // 渲染注册
                  $('#regis').html('<a class="nav-link" href="../register.html">注册</a>');
             }
        })
})