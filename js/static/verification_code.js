//点击 发送验证码 的同时-----倒计时开始
var countdown=60;
$("#sendYzm").click(function settime(e){
    var regPhone=document.getElementById("regPhone");
    if(regPhone===null || regPhone === ""){
        ShowFailure("手机号不能为空！")
    }else if(isNaN(regPhone.value)){//验证手机号格式
        ShowFailure("手机号请输入数字！")
    }else if(regPhone.value.length!==11){
        ShowFailure("手机号是11个数字！")
    }else{
        if(countdown == 0){
            e.target.removeAttribute("disabled");
            e.target.value="获取校验码";
            countdown =60;
            return;
        }else{
            e.target.setAttribute("disabled",true);
            e.target.setAttribute("color","#fff");
            e.target.value="重新发送（"+countdown+"s)";
            countdown--;
        }
        setTimeout(function(){settime(e);},1000);
    }
    
})