const createBtn = document.querySelector(".accountbtn__create");
const loginBtn = document.querySelector(".accountbtn__login");
const login = document.querySelector("#login");
const registration = document.querySelector("#registration");
const closes = document.querySelectorAll(".close");
const links = document.querySelectorAll("#link");
const registForm = document.querySelector("#registBtn");
const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const course = document.getElementById("coursetitle");
const password = document.getElementById("userPassword");
const authorizationUserName = document.getElementById("authorizationUserName");
const authorizationPassword = document.getElementById("authorizationPassword");

class NewUser{
    constructor(username, course, pass){
        this.username=username;
        this.course=course;
        this.password=pass;
    }
}

console.log(login);
//вывод текущей даты
let currentYear = document.querySelector(".footer__span");
let popup = document.querySelector(".popup");
currentYear.innerHTML = new Date().getFullYear();
 let users = [];
if(localStorage.getItem("userArray")){ 
   users =  JSON.parse( localStorage.getItem("userArray"));
//    console.log(users);
  
} 

loginForm.addEventListener("submit",function(e){ 
    e.preventDefault();
 console.log(users);
        console.log(authorizationUserName.value);
       
        for(let i=0; i<users.length; i++){
           console.log(users[i]);
            // users =  JSON.parse( localStorage.getItem("userArray"));
            if((users[i].username==authorizationUserName.value) && (users[i].password==authorizationPassword.value) ){
                    // localStorage.setItem("LoginStatus",true);
                    
                    popup.classList.remove("d-none");
                 document.querySelector(".modal-txt").textContent=`🥳 Successfully authorization!`;
                 clearInputs();
            } 
            // if(users[0].username=="narineshankyan@yandex.ru"){
            //     console.log("ok");
            // }
            else             
                // if (users.length==0 ||authorizationUserName.value!= users[i].username || authorizationPassword.value!=users[i].password ) {                   
                // console.log("нет такой пользовател");
               {
                clearInputs();
                popup.classList.remove("d-none");
                document.querySelector(".modal-txt").textContent=`☹ User is not found!`;         
             }
              
        } 
    
})

function registerNewUser(){    
    if(username.value && course.value && password.value){
       users.push(new NewUser(username.value, course.value, password.value));
    localStorage.setItem("userArray",JSON.stringify(users));  
    popup.classList.remove("d-none");
    document.querySelector(".modal-txt").textContent=`🥳 Successfully registered!`
    }
    else
 {
    popup.classList.remove("d-none");
    document.querySelector(".modal-txt").textContent=`☹ Data filled in incorrectly!`
 }
     
}
//очистка инпутов
const inputs = document.querySelectorAll("input");
function clearInputs(){
   inputs.forEach(input=>input.value="");
}
//................

// переключатели  кнопок regist/login........
loginBtn.addEventListener("click", function(){
    login.classList.toggle("d-none")
})
createBtn.addEventListener("click", function(event){    
    registration.classList.remove("d-none")
})
//.......................................

//проверка родителя кнопки close и закрытие соотвветсвующего окна Login/Register
for(let close of closes){
    close.addEventListener("click",function(e){
        if(e.target.closest("#login")){
            login.classList.toggle("d-none"); 
        }
        else if(e.target.closest("#registration")){
            registration.classList.toggle("d-none") 
        }
    })
}

// переключениe ссылок register/login
for(let link of links){
    link.addEventListener("click",function(e){
        if(e.target.closest(".login-box__registerLink")){
            
            registration.classList.remove("d-none") ;
            login.classList.add("d-none");
        }
        else if(e.target.closest(".register-box__registerLink")){
            login.classList.remove("d-none");
            registration.classList.add("d-none") ;
        }
    })
}
const modalCloseItem = document.querySelector(".modalCloseItem");
console.log(document.querySelector(".modalCloseItem"));
modalCloseItem.addEventListener("click",(e)=>{
popup.classList.add("d-none"); 
    
})

registForm.addEventListener('submit',function(e){
    // console.log(e.target);
    e.preventDefault();
    const inputValues = new FormData(registForm); 
    
   const arr = Array.from(inputValues.entries());
//    console.log(arr);
   let newarr = [];
   arr.forEach(item=> {   
    newarr.push(item[1]);   
    });
    
    if((newarr[2]!=newarr[3]))
    {
    popup.classList.remove("d-none");
    document.querySelector(".modal-txt").textContent = "Password mismatch!"  
       
    }
    else
    {
        registerNewUser();  
        clearInputs();
        // popup.classList.remove("d-none");
        // document.querySelector(".modal-txt").textContent=`🥳 Вы успешно зарегистрировались!`
       
    }   
})

let locks = document.querySelectorAll(".lock-icon"); 
console.log(locks);
 locks.forEach(lockicon=>lockicon.addEventListener("click",(e)=>{
    console.log(e.target);
    // console.log(lock.previousElementSibling);
    if(lockicon.previousElementSibling.type === "password")
            {
                // lockicon.getAttribute("src")= ".\lock-open.png";
                lockicon.previousElementSibling.type = "text";
            }
            else{
                lockicon.previousElementSibling.type = "password";
            }
    
    }) ) 

// forms.forEach(item =>  item.addEventListener('submit',function(e){
//     // console.log(e.target);
//     e.preventDefault();
//     const a = new FormData(item);

//    const arr = Array.from(a.entries());
//    let newarr = [];
//    arr.forEach(item=> {   
//     newarr.push(item[1]); 
//     // console.log(newarr); 
//     });
    
//     if((newarr[2]!=newarr[3])){

//     popup.classList.remove("d-none");
// //  document.querySelector(".popup").textContent = "Пароли не совподают! "  
       
//     }
//     else
//     {
//         registerNewUser();  
//         clearInputs();
//         popup.classList.remove("d-none");
//         document.querySelector(".modal-txt").textContent=`✔" " Вы успешно зарегистрировались!`

        

//     }
   
// }))

// let forms = document.querySelectorAll("form");
// forms.forEach(item =>  item.addEventListener('submit',function(e){
//     // console.log(e.target);
//     e.preventDefault();
//     const a = new FormData(item);

//    const arr = Array.from(a.entries());
//    let newarr = [];
//    arr.forEach(item=> {   
//     newarr.push(item[1]); 
//     // console.log(newarr); 
//     });
    
//     if((newarr[2]!=newarr[3])){

//     popup.classList.remove("d-none");
// //  document.querySelector(".popup").textContent = "Пароли не совподают! "  
       
//     }
//     else
//     {
//         registerNewUser();  
//         clearInputs();
//         popup.classList.remove("d-none");
//         document.querySelector(".modal-txt").textContent=`✔" " Вы успешно зарегистрировались!`

        

//     }
   
// }))







 


 





