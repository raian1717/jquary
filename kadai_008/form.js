$(function(){
    $('.btn').on('click',()=>{
        $('.text-box').val('クリックしました！')
    })
    $('.text-box').on('input',function () {
        if ($(this).val()) {
            $('.btn').css('display','none')
        }
        else{
            $('.btn').css('display','inline')
        }
    })
})