document. querySelector('.tugma').addEventListener('click', function(){
    let ekran = document.querySelector('.tas2');
    console.log(typeof parseInt(ekran.value));
    ekran.value = parseInt(ekran.value) + 1;

    document.querySelector('.tugma2').addEventListener('click', function(){
        let ekran = document.querySelector('.tas2').value = 0;
    })
});