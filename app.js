Telegram.WebApp.expand();

const SUPER_ADMIN={

login:"admin",

password:"12345"

};

let admins=
JSON.parse(
localStorage.getItem(
"admins"
)||"[]"
);

let students=
JSON.parse(
localStorage.getItem(
"students"
)||"[]"
);

function show(id){

[
"home",
"student",
"admin",
"super"

].forEach(

x=>{

let e=
document
.getElementById(
x
);

if(e){

e.style.display=
"none";

}

}

);

document
.getElementById(
id
)
.style.display=
"block";

}

function studentRegister(){

let inputs=
document
.querySelectorAll(
"#student input"
);

let name=
inputs[0].value;

let phone=
inputs[1].value;

let password=
inputs[2].value;

students.push({

name,

phone,

password

});

localStorage
.setItem(

"students",

JSON.stringify(
students
)

);

alert(
"Talaba yaratildi ✅"
);

}

function adminLogin(){

alert(
"Admin panel keyingi bosqichda ulanadi"
);

}

function superLogin(){

let login=
document
.getElementById(
"s1"
).value;

let password=
document
.getElementById(
"s2"
).value;

if(

login===
SUPER_ADMIN.login

&&

password===
SUPER_ADMIN.password

){

openSuperPanel();

}else{

alert(
"Xato login ❌"
);

}

}

function openSuperPanel(){

document.body.innerHTML=`

<div
style='padding:20px;color:white'>

<h1>

👑 Superadmin

</h1>

<br>

<input
id='newLogin'

placeholder='Admin login'>

<br><br>

<input
id='newPass'

placeholder='Parol'>

<br><br>

<button
onclick='createAdmin()'>

Admin yaratish

</button>

<div
id='admins'>

</div>

</div>

`;

renderAdmins();

}

function createAdmin(){

let login=
document
.getElementById(
"newLogin"
).value;

let password=
document
.getElementById(
"newPass"
).value;

admins.push({

login,

password

});

localStorage
.setItem(

"admins",

JSON.stringify(
admins
)

);

renderAdmins();

}

function renderAdmins(){

let html="";

admins.forEach(

a=>{

html+=`

<div>

🛡️
${a.login}

</div>

`;

}

);

document
.getElementById(
"admins"
)
.innerHTML=
html;

  }
