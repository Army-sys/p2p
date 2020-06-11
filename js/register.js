$(function (){

    //初始化插件
    $('#myform').validate({

        //验证规则
        rules: {
            user: {//name属性
                required: true,
                isUser: true
            },
            pwd: {
                required: true,
                isPwd: true
            },
            checkPwd: {
                equalTo: "#pwd"
            }
           
        },
        //错误提示信息
        messages: {
            user: {
                required: '请输入账号'
            },
            pwd: {
                required: '请输入密码'
            },
            checkPwd: {
                equalTo: "两次密码不一致"
            }
            
        }
    })

    //自定义验证规则 === 用户名验证
    jQuery.validator.addMethod("isUser", function (value, element) {
        var tel = /^[A-z]\w{5,11}$/; //6到12位首字符必须是字母，后面(字母、数字、下划线)
        return this.optional(element) || (tel.test(value));
    }, "6到12位首字符必须是字母，后面(字母、数字、下划线)");

    //密码验证  === 改动三处
    jQuery.validator.addMethod("isPwd", function (value, element) {
        var tel = /^[A-z]\w{5,11}$/; //6到12位首字符必须是字母，后面(字母、数字、下划线)
        return this.optional(element) || (tel.test(value));
    }, "输入6-12正确密码");



})