const balls = document.getElementsByClassName('ball');
var eyes = document.getElementsByClassName('eyes');
var eye_list = []
var eye_number = 3;

for (let i=0;i<eye_number;i++){
    var div = document.createElement('div');
    let eye = eyes[0].appendChild(div);
    eye.classList.add('eye');
    eye.setAttribute('id',`eye${i}`);
    eye_list.push(eye)
}
console.log(eye_list)
for (let i=0;i<eye_list.length;i++){
    console.log(eye_list[i])
    var div = document.createElement('div');
    ball = eye_list[i].appendChild(div).classList.add('ball');
}


document.onmousemove = (event) => {
    const x = (event.clientX * 100) / window.innerWidth + '%';
    const y = (event.clientY * 100) / window.innerHeight + '%';

    for (let i=0;i<eye_number;i++){
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transform = 'translate(-' + x + ',-' + y + ')';
    }
};