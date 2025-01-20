const myBtn = document.getElementById('clickMe');


myBtn.addEventListener('click', function() {

    const changeColor = document.getElementById('changeColor');

    changeColor.style.color = 'red';
    changeColor.style.backgroundColor = '#000';
    changeColor.style.padding = '50px';
    changeColor.style.display = 'block';
    changeColor.style.fontSize = '20px';
});