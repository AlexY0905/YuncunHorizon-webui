let page = {
    init: function () {
        this.getKeyWord()
        this.search_btn()
    },
    getKeyWord: function () {
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
        $('#keyword_btn31').on('touchend', function () {
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
        $('#keyword_btn71').on('touchend', function () {
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
        $('#keyword_btn111').on('touchend', function () {
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
        $('#keyword_btn141').on('touchend', function () {
            console.log('1231231232-----')
            $('.keyWord_ipt').val($(this).html())
        })

        $('.slider_four_in_line').on('click', 'div', function () {
            console.log('+++++++++++==========')
        })


    },
    search_btn: function () {
        $('.search_btn').on('click', function () {
            console.log(2222222222, $('.keyWord_ipt').val());
        })
    }
}
$(function () {
    page.init()
})