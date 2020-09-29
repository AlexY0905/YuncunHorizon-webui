let page = {
    init: function () {
        this.getKeyWord()
        this.handleKeyWord()
        this.search_btn()
    },
    getKeyWord: function () {
        /**
         *  获取关键字
         */
        /*
        $.ajax({
            type: "",
            url: '',
            data: {},
            dataType: 'json',
            success: function (result) {
                console.log(result);
            },
            error: function () {
                ShowFailure('网络错误, 请稍后再试 !')
            }
        })
        */
        let keyWordList = ['关键字0', '关键字1', '关键字2', '关键字3', '关键字4', '关键字5', '关键字6', '关键字7', '关键字8', '关键字9', '关键字10', '关键字11', '关键字12', '关键字13', '关键字14']
        for (let i = 0; i < 3; i++) {
            let html = ''
            if (i === 0) {
                for (let j = 0; j < 5; j++) {
                    html += `
                        <div id="keyword_btn${j}">${keyWordList[j]}</div>
                    `
                }
                $('.htmleaf-container1 .slider').html(html)
            } else if (i === 1) {
                for (let j = 5; j < 10; j++) {
                    html += `
                        <div id="keyword_btn${j}">${keyWordList[j]}</div>
                    `
                }
                $('.htmleaf-container2 .slider').html(html)
            } else if (i === 2) {
                for (let j = 10; j < 15; j++) {
                    html += `
                        <div id="keyword_btn${j}">${keyWordList[j]}</div>
                    `
                }
                $('.htmleaf-container3 .slider').html(html)
            }
        }
    },
    handleKeyWord: function () {
        /*
        $('.button-rainbow').on('click', 'button', function () {
            $('.keyWord_ipt').val($(this).val())
        })
        */
        $('#keyword_btn0').on('touchend', function () {
            console.log('1231231232-----')
            $('.keyWord_ipt').val($(this).html())
        })
        $('#keyword_btn1').on('touchend', function () {
            console.log('1231231232-----')
            $('.keyWord_ipt').val($(this).html())
        })
        $('#keyword_btn2').on('touchend', function () {
            console.log('1231231232-----')
            $('.keyWord_ipt').val($(this).html())
        })
        $('#keyword_btn3').on('touchend', function () {
            console.log('1231231232-----')
            $('.keyWord_ipt').val($(this).html())
        })
        $('#keyword_btn4').on('touchend', function () {
            console.log('1231231232-----')
            $('.keyWord_ipt').val($(this).html())
        })
        $('#keyword_btn5').on('touchend', function () {
            console.log('1231231232-----')
            $('.keyWord_ipt').val($(this).html())
        })
        $('#keyword_btn6').on('touchend', function () {
            console.log('1231231232-----')
            $('.keyWord_ipt').val($(this).html())
        })
        $('#keyword_btn7').on('touchend', function () {
            console.log('1231231232-----')
            $('.keyWord_ipt').val($(this).html())
        })
        $('#keyword_btn8').on('touchend', function () {
            console.log('1231231232-----')
            $('.keyWord_ipt').val($(this).html())
        })
        $('#keyword_btn9').on('touchend', function () {
            console.log('1231231232-----')
            $('.keyWord_ipt').val($(this).html())
        })
        $('#keyword_btn10').on('touchend', function () {
            console.log('1231231232-----')
            $('.keyWord_ipt').val($(this).html())
        })
        $('#keyword_btn11').on('touchend', function () {
            console.log('1231231232-----')
            $('.keyWord_ipt').val($(this).html())
        })
        $('#keyword_btn12').on('touchend', function () {
            console.log('1231231232-----')
            $('.keyWord_ipt').val($(this).html())
        })
        $('#keyword_btn13').on('touchend', function () {
            console.log('1231231232-----')
            $('.keyWord_ipt').val($(this).html())
        })
        $('#keyword_btn14').on('touchend', function () {
            console.log('1231231232-----')
            $('.keyWord_ipt').val($(this).html())
        })
        $('#keyword_btn15').on('touchend', function () {
            console.log('1231231232-----')
            $('.keyWord_ipt').val($(this).html())
        })
    },
    search_btn: function () {
        /**
         *  搜索
         */
        $('.searchButton').on('click', function () {
            let val = $('.keyWord_ipt').val()
            console.log('----------', val);
            /*
            $.ajax({
                type: "",
                url: '',
                data: {},
                dataType: 'json',
                success: function (result) {

                    console.log(result);
                },
                error: function () {
                    ShowFailure('网络错误, 请稍后再试 !')
                }
            })
            */
        })
    }
}
$(function () {
    page.init()
})