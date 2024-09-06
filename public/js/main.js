const socket = io()

const send = document.getElementById('chat-form')
const msg = document.getElementById('msg')
const onlineUsers = document.getElementById('users')
const message = document.querySelector('.chat-messages')
const join = document.getElementById('join')
const codeRoom = document.getElementById('room')

const { username } = Qs.parse(location.search, {
    ignoreQueryPrefix: true,
});


join.addEventListener('click', (e) => {
    e.preventDefault()

    socket.emit('join', codeRoom.value)
    message.innerHTML = '';
    codeRoom.value = '';
    msg.focus();
})

socket.emit('init', username)

//listening message
socket.on('message', msg => {
    displayMessage(msg)
});

//listening user join
socket.on('listUser', ({ users }) => {
    displayUserOnline(users)
})

//message submit
send.addEventListener('submit', (e) => {
    e.preventDefault();

    //get message input
    socket.emit('chatMessage', msg.value);

    //clear message input
    msg.value = '';
    msg.focus();
});


//display message to DOM
function displayMessage({ username, msg, time }) {
    //create div with class message
    const div = document.createElement('div');
    div.classList.add('message');

    //create p contain class, username, and time
    const p = document.createElement('p');
    p.classList.add('meta');
    p.innerHTML = username;
    p.innerHTML += `<span> ${time}</span>`;
    div.appendChild(p);

    //create p contain message
    const p2 = document.createElement('p');
    p2.classList.add('text');
    p2.innerHTML = msg;
    div.appendChild(p2);

    message.append(div);

    //scroll down form message
    message.scrollTop = message.scrollHeight;
}


function displayUserOnline(users) {
    //reset list user online
    onlineUsers.innerHTML = ''

    //create list user online with the same room
    users.forEach(user => {
        const li = document.createElement('li')
        li.innerHTML = user.username
        onlineUsers.appendChild(li)
    });
}