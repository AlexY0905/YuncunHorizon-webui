preSql = function (obj){
            
    var dom = $(obj);
    var re= /(.*?((select)|(from)|(count)|(delete)|(update)|(drop)|(truncate)|(or)|(and)|(into)|(insert)|(table)|(%20)).*?){2,}/i;//   /select|update|delete|exec|count|drop|or|and|alter|insert|’|"|=|;|>|<|%/i;
    if (re.test(dom.val().toLowerCase())){
        ShowFailure("请您不要输入特殊字符关键字！")
        dom.val("");
    }
    
}