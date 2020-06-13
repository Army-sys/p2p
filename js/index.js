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
            // 为空
            case "":
                $('#main').load("../../pages/home.html")
                break;
                // 首页
            case "#home":
                $('#main').load("../../pages/home.html")
                console.log(hash)
                break;
                // 招聘
            case "#recruit":
                $('#main').load("../../pages/recruit.html")
                console.log(hash)
                break;
                // 想要借贷
            case "#want-borrow":
                $('#main').load("../../pages/want-borrow.html")
                break;
                // 个人中心
            case "#per-conter":
                $('#main').load("../../pages/per-conter.html",function(){
                    $("#rightContent").load("../../pages/per-conter/getuserinfo.html")
                })
                break;
                // 信息
                case "#per-conter/getuserinfo":
                    loadPersonalPage(hash)
                    break;
    
                //个人中心>更新资料
                case "#per-conter/updateuser":
                    loadPersonalPage(hash)
                    break;

                    //个人中心>流水
                case "#per-conter/water":
                    loadPersonalPage(hash)
                    break;

                         //个人中心>借款
                case "#per-conter/borrowB":
                    loadPersonalPage(hash)
                    break;

                            //个人中心>还款明细
                case "#per-conter/ange":
                    loadPersonalPage(hash)
                    break;
                      
            //个人中心>更新
            case "#per-conter/datein":
                loadPersonalPage(hash)
                break;
                    // 充值明细
                    case "#per-conter/gedeta":
                        loadPersonalPage(hash)
                        break;
                // 其他
            default:
                $('#main').load("../../pages/404.html")
                break;
        }
        
    }
    //加载个人中心二级页面
    function loadPersonalPage(hash){
      
        hash=hash.substr(1);
      
        if($("#rightContent").length){//点击
            $("#rightContent").load("../../pages/"+hash+".html"); 
            activePersonalNav(hash);
        }else{//刷新
            $("#main").load("../../pages/per-conter.html",function(){
                $("#rightContent").load("../../pages/"+hash+".html");
                activePersonalNav(hash);
            });
        }
        
    }
     //激活个人中心二级路由
     function activePersonalNav(hash){
        // console.log(1111)
        // console.log(hash);
        $(".finer li a").removeClass("active");
        $(".finer li a[href='#"+hash+"']").addClass("active");
    }
    //激活导航样式
    function activeChangeNav(hash) {
        // console.log(hash)
        // console.log($(".content-nav .nav-item a[href='"+hash+"']"))

        //先找对应的a添加active 删除active
        // $(".lide a[href='"+hash+"']").addClass("active").parent().siblings().find("a").removeClass("active");

        if (hash === "") hash = "#home";
        if(hash.includes("#per-conter")) hash="#per-conter";
        //先删除所有a的active
        $("#lide a").removeClass("active")
        //再给对应加上active
        $("#lide a[href='" + hash + "']").addClass("active")
    }

    algin();

    function algin() {
        // 获取本地存储数据
        var username = localStorage.getItem('username');
        var pid = localStorage.getItem('pid')
        if (username && pid) { //都有
            // 渲染登录
            $('#signd').html('<a class="nav-link" href="#">' + username + '</a>');
            // 渲染注销'
            $('#regis').html('<a class="nav-link" href="#" id="re">注销</a>');
        } else { //没有登录
            // 渲染登录
            $('#signd').html('<a class="nav-link" href="../sign.html">登录</a>');
            // 渲染注册
            $('#regis').html('<a class="nav-link" href="../register.html">注册</a>');
        }
    }
    // 注销事件委派
    // 注销动态获取
    $('#regis').on('click', "#re", function () {
        if (confirm("你确定要退出吗!")) {
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