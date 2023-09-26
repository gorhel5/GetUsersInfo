import users from './Users.js';

const username = document.querySelector('.username__input');
const age = document.querySelector('.age__input');
const password = document.querySelector('.pass__input');
const button = document.querySelector('.btn');

class UsersInfo {

    pushData(us, age, pass) {
        return {
            username: us,
            age: age,
            pass: pass,
        }
    }
}

button.addEventListener('click', () => {
    let a = new UsersInfo();
    let b = a.pushData(username.value, age.value, password.value)
    users.push(b);
    console.log(users)
});