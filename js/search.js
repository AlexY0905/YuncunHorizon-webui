let page = {
    init: function () {
        this.getKeyWord()
        this.search_btn()
    },
    getKeyWord: function () {
        $('.button-rainbow').on('click', 'button', function () {
            $('.keyWord_ipt').val($(this).val())
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