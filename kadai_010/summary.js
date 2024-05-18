$(function(){
    $('#change-color').on('click',()=>{
        $('#target').toggleClass('add')
    })

    let n=0

    $('#change-text').on('click',()=>{
        n++
        if (n%2==1) {
            $('#target').text('hello')
        }
        else{
            $('#target').text('こんにちは')
        }
    })

    $('#fade-out').on('click',()=>{
        $('#target').fadeOut(3000)
    })

    $('#fade-in').on('click',()=>{
        $('#target').fadeIn(3000)
    })
})
