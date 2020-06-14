$(function () {
    // 当前页
    page = 1;
    // 页数
    row = 2;
    datad();

    function datad() {
        // 发送ajax获取请求列表
        $.ajax({
            url: "http://127.0.0.1:8848/getborrow.php?",
            type: "GET",
            data: {
                page: page,
                row: row
            },
            dataType: "json",
            success: function (data) {
                //console.log(data);
                // 获取总条数
                var total = data.total;
                // // 总页数
             var totalpage = Math.ceil(total / row);
                //   分页插件
                $('#page').pagenation({
                    nowPage: page, //当前页
                    pageNum: totalpage, //总页数
                    callback: function (p) {
                        // console.log(p)
                        // p当前页码
                        page = p;
                        datad();
                    }
                });
                //  获取总记录
                var list = data.list;
                //  渲染

                // 定义变量保存数据
                var datalist = "";
                //遍历出数据
                for (var i = 0; i < list.length; i++) {
                    datalist += "<tr>";
                    //    姓名
                    datalist += "<td>" + list[i].userid + "</td>";
                    //    标题
                    datalist += "<td>" + list[i].title + "</td>";
                    //    年利率
                    datalist += "<td class='text-info'>" + (Number(list[i].interest).toFixed(2)) + "</td>";
                    //    借款金额
                    datalist += "<td class='text-info'>" + ((list[i].borrowmoney * 1).toFixed(2)) + "</td>";
                    //    还款方式
                    datalist += "<td class='text-info'>" + (list[i].repaytype == 0 ? '按月分期' : '按月到期') + "</td>";
                    //    进度
                    datalist += "<td >" + (((list[i].ownmoney / list[i].borrowmoney) * 100).toFixed(2)) + "%</td>";
                    //   查看
                    datalist += "<td>"
                    datalist += "<a href='#' class='btn btn-danger btn-sm' data-borrowid='" + list[i].id + "'>查看</a>";
                    datalist += "</td>"

                    datalist += "</tr>";
                }
                $('#boxlist').html(datalist)
            }
        })
    }

    // 注册点击事件
    $('#boxlist').on('click', 'a', function () {
        //存储到会话存储
        sessionStorage.setItem('borrowid', $(this).data('borrowid'));
        location.href = "/loande.html"
        return false
    })
})