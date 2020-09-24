//icon
function icon(){
    document.getElementById("icon1").href.baseVal = "#icon-tishi"
    document.getElementById("icon2").href.baseVal = "#icon-tishi"
    document.getElementById("icon3").href.baseVal = "#icon-tishi"
    document.getElementById("icon4").href.baseVal = "#icon-tishi"
    
}
function icon1(){
    document.getElementById("icon1").href.baseVal = "#icon-tishi"
    document.getElementById("icon5").href.baseVal = "#icon-tishi"
}
//矿池输入用户名时判断
function CheckName(){
    var name_input=$('#name').val()
    var reg =/^[0-9]*$/;
    var flag = reg.test(name_input);
    // console.log(flag)
    icon1()
    $("#aa").css("display","inline");
    
        if(CheckStr(name_input)==false){
            $("#ts").html("用户名存在特殊字符");
            $("#ts").css("color","red");
            return; 
        }else if(name_input===null|| name_input===''){
            $("#ts").html("用户名不能为空");
            $("#ts").css("color","red");
            return;
        }else if(name_input.length <= 2){
            $("#ts").html("用户名长度不能小于3");
            $("#ts").css("color","red");
        }else if(flag){
            $("#ts").html("用户名不能为纯数字");
            $("#ts").css("color","red");
        }else if(name_input.length >= 2){
            $("#ts").html("");
            $("#aa").css("display","none");
        }
}

//算力输入用户名时判断
function Checkname1(){
    var name_input=$('#name').val()
    var reg =/^[0-9]*$/;
    var flag = reg.test(name_input);
    icon();
    // console.log(svgElement1)
    $("#aa").css("display","inline");
    if(CheckStr(name_input)==false){
        $("#ts").html("用户名存在特殊字符");
        $("#ts").css("color","red");
        return; 
    }else if(name_input===null|| name_input===''){
        $("#ts").html("用户名不能为空");
        $("#ts").css("color","red");
        return;
    }else if(name_input.length <= 5){
        $("#ts").html("用户名长度不能小于6");
        $("#ts").css("color","red");
        return;
    }else if(flag){
        $("#ts").html("用户名不能为纯数字");
        $("#ts").css("color","red");
    }else if(name_input.length >= 6){
        $("#ts").html("");
        $("#aa").css("display","none");
    }
}     

//输入密码时判断
function CheckQiang(pwd){
    var pass_input=$('#inputPassword').val()
    var password=document.getElementById("inputPassword");
    icon();
    $("#cc").css("display","inline");
    if(password.value==='' || password.value===null){
        $("#err_msgPsw").html("密码不能为空");
        $("#err_msgPsw").css("color","red");
        return;
    }else if(pass_input.length<6){
        $("#err_msgPsw").html("密码不能小于6");
        $("#err_msgPsw").css("color","red");
        return;
    }else if(pass_input.length>16){
        $("#err_msgPsw").html("密码不能大于16");
        $("#err_msgPsw").css("color","red");
        return;
    }else if(password.value!=='' || password.value!==null){
        $("#err_msgPsw").html("");
        $("#cc").css("display","none");
    }


    var Mcolor,Wcolor,Scolor;
    var m=0;
    var Modes=0;
    for(var i=0; i<pwd.length; i++){
        var charType=0;  // 字符类型 ASCII类型
        var t=pwd.charCodeAt(i);  //返回字符串pwd第i个字符的 Unicode 编码
        if(t>=48 && t <=57){charType=1;}
        else if(t>=65 && t <=90){charType=2;}
        else if(t>=97 && t <=122){charType=4;}
        else{charType=4;}
        Modes |= charType;
    }
    for(var i=0;i<4;i++){
        if(Modes & 1){m++;}
        Modes>>>=1;
    }
    if(pwd.length<=4){m=1;}
    if(pwd.length<=0){m=0;}
    switch(m){
        case 1 :                       // 如果输入的密码位数少于5位，那么就判定为弱
            Wcolor="pwd pwd_Weak_c";    //如果输入的密码只由数字、小写字母、大写字母或其它特殊符号当中的一种类型组成，则判定为弱
            Mcolor="pwd pwd_c";
            Scolor="pwd pwd_c pwd_c_r";
            document.getElementById("err_msgPsw").style.color="red";
            document.getElementById("err_msgPsw").innerHTML = "您的密码强度太弱了";
            break;
        case 2 :   //如果密码由数字、小写字母、大写字母或其它特殊符号当中的两种类型组成，则判定为中
            Wcolor="pwd pwd_Medium_c";
            Mcolor="pwd pwd_Medium_c";
            Scolor="pwd pwd_c pwd_c_r";
            document.getElementById("err_msgPsw").style.color="	Green";
            document.getElementById("err_msgPsw").innerHTML = "您的密码强度一般";
            break;
        case 3 : //如果密码由数字、小写字母、大写字母或其它特殊符号当中的三种类型以上组成，则判定为强
            Wcolor="pwd pwd_Strong_c";
            Mcolor="pwd pwd_Strong_c";
            Scolor="pwd pwd_Strong_c pwd_Strong_c_r";
            document.getElementById("err_msgPsw").innerHTML = "您的密码很强 很不错！";
            break;
        default :
            Wcolor="pwd pwd_c";
            Mcolor="pwd pwd_c pwd_f";
            Scolor="pwd pwd_c pwd_c_r";
            document.getElementById("err_msgPsw").style.display="none";
            break;
    }
    document.getElementById('pwd_Weak').className=Wcolor;
    document.getElementById('pwd_Medium').className=Mcolor;
    document.getElementById('pwd_Strong').className=Scolor;

}
//再次输入密码判断
function CheckQiang1(pwd){
    var password=document.getElementById("inputPassword");
    var passwordRepeat=document.getElementById("inputPassword2");    
    icon();
    $("#dd").css("display","inline");
    if(passwordRepeat.value==='' || passwordRepeat.value===null){
        $("#password_2").html("确认密码不能为空");
        $("#password_2").css("color","red");
        return;
    }else if(password.value!==passwordRepeat.value){
        $("#password_2").html("密码设置前后不一致");
        $("#password_2").css("color","red");
        return;
    }else if(password.value===passwordRepeat.value){
        $("#password_2").html("");
        $("#dd").css("display","none");
    }
}
//输入邮箱时判断
function CheckEmeil(){
    var mail=document.getElementById("inputEmail");
    icon();
    //验证邮箱是否为空
    $("#bb").css("display","inline");
    apos = mail.value.indexOf("@")
    dotpos = mail.value.lastIndexOf(".")
    if(mail.value==='' || mail.value===null){
        $("#mail").html("邮箱不能为空");
        $("#mail").css("color","red");
    }else if(apos < 1 || dotpos - apos < 3){
        //验证邮件格式
        $("#mail").html("邮箱格式错误");
        $("#mail").css("color","red");
        return;
    }else{
        //验证邮件格式
        $("#mail").html("");
        $("#bb").css("display","none");
    }
}
//输入手机号时判断
function CheckPhone(){
    var regPhone=document.getElementById("regPhone");
    icon1();
    $("#ee").css("display","inline");
    if(regPhone.value==='' || regPhone.value===null){
        $("#err_msgPhone").html("手机号不能为空");
        $("#err_msgPhone").css("color","red");
        return;
    }else if(isNaN(regPhone.value)){//验证手机号格式
        $("#err_msgPhone").html("手机号请输入数字");
        $("#err_msgPhone").css("color","red");
        return;
    }else if(regPhone.value.length!==11){
        $("#err_msgPhone").html("手机号是11个数字");
        $("#err_msgPhone").css("color","red");
        return;
    }else{
        $("#err_msgPhone").html("");
        $("#ee").css("display","none");
        return;
    }

}
