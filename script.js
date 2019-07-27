let trigger = document.querySelector('#trigger');
let user = ['idiot','joshua', 'dan', 'auge'];
const username = document.querySelector('#username');
const startup = document.querySelector('#starter');
const signin = document.querySelector('#login');
const logOut = document.querySelector('#logOut');

function start(){
    trigger.classList.toggle('hide');
}
// function clear(){
//
//     trigger.classList.add('hide');
// }
function logout(){
    startup.classList.add('hide');
    signin.classList.remove('hide');
    trigger.classList.toggle('hide');
}
function login(){
    if (user.includes(username.value.toLowerCase())){
        startup.classList.remove('hide');
        signin.classList.add('hide');

    } else {
        console.log('user not available');
    }

}