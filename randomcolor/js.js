function randomhex() {
    const val = 'abcdef0123456789';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        const toAdd = Math.floor(Math.random() * 16); 
        color += val[toAdd];
    }
    return color;
}

randomhex();

//random buttton k click karne pe div ka color change ho jaye aur generated color me wo color ka hex code aa jaye

const randbutton=document.querySelector('.generatehex');
const div1=document.querySelector('.hex');
const div1a=document.querySelector('.colorhex');

randbutton.addEventListener('click',(e)=>{
    // console.log("clicked");
    const col=randomhex();
    div1.style.backgroundColor=col;
    div1a.innerHTML=col;

})


let valRed, valGreen, valBlue;

const targetred = document.getElementById('red');
targetred.addEventListener('input', (e) => {
    valRed = e.target.value;
});

const targetgreen = document.getElementById('green');
targetgreen.addEventListener('input', (e) => {
    valGreen = e.target.value;
});

const targetblue = document.getElementById('blue');
targetblue.addEventListener('input', (e) => {
    valBlue = e.target.value;
});

const randbutton2 = document.querySelector('.generatergb');
const div2 = document.querySelector('.rgb');
const div2a = document.querySelector('.colorrgb');

randbutton2.addEventListener('click', (e) => {
    const col2 = `rgb(${valRed || 0}, ${valGreen || 0}, ${valBlue || 0})`;
    div2.style.backgroundColor = col2;
    div2a.innerHTML = `<h1>Generated Color: ${col2}</h1>`;

});
