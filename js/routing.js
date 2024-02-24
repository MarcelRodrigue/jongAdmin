window.onload = function(){
    const button = document.getElementById('traitretiquet');
    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const prev = document.getElementById('prev');

    button.addEventListener('click', function() {
        form2.classList.remove('hide');
        form1.classList.add('hide');

    })
    prev.addEventListener('click', function() {
        console.log('hello')
        form1.classList.remove('hide');
        form2.classList.add('hide');

    })
    
}

