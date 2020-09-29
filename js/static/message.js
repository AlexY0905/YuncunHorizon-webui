//tip是提示信息，type:'success'是成功信息，'danger'是失败信息,'info'是普通信息
function ShowTip(tip, type) {
    var $tip = $('#tip');
    if ($tip.length == 0) {
        if (type === 'success') {
            $tip = $('<span id="tip" style="font-weight:bold;position:fixed;top:10%;left: 50%;z-index:99999999999;background: #cff7e9;border-color: #bcf4e1;color: #08704c;"></span>');
            $('body').append($tip);
        } else if (type === 'danger') {
            $tip = $('<span id="tip" style="font-weight:bold;position:fixed;top:10%;left: 50%;z-index:99999999999;background: #fdd8dd;border-color: #fcc8cf;color: #801f2c"></span>');
            $('body').append($tip);
        } else if (type === 'info') {
            $tip = $('<span id="tip" style="font-weight:bold;position:fixed;top:10%;left: 50%;z-index:99999999999;background: #1890ff"></span>');
            $('body').append($tip);
        } else if (type === 'warning') {
            $tip = $('<span id="tip" style="font-weight:bold;position:fixed;top:10%;left: 50%;z-index:99999999999;background: #faad14"></span>');
            $('body').append($tip);
        }

    }
    $tip.stop(true).attr('class', 'alert alert-' + type).text(tip).css('margin-left', -$tip.outerWidth() / 2).fadeIn(500).delay(2000).fadeOut(500);
}

function ShowMsg(msg) {
    ShowTip(msg, 'info');
}

function ShowSuccess(msg) {
    ShowTip(msg, 'success');
}

function ShowFailure(msg) {
    ShowTip(msg, 'danger');
}

function ShowWarn(msg, $focus, clear) {
    ShowTip(msg, 'warning');
    if ($focus) $focus.focus();
    if (clear) $focus.val('');
    return false;
}