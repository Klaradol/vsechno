const database =[
"stefan.12345",
"marek.marek23",
"klara.dol.434",
"richarddolezal.4",


]





function login() {
const username = document.getElementById ("username").value
const password = document.getElementById ("password").value

console.log( username, password);

const loginData = username + "." + password

for (let i = 0; i < database.length; i++) {
    if(loginData == database[i]) {
        console.log("Login successful");
        break
     } else if (i == database.length - 1){
          console.log("Login failed");
     }
   
   }

}