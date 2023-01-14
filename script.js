
                                            //Task 1
// var time= new Date().getHours()
// console.log(time)
// if(time>=6 && time<12){
//     document.body.style.backgroundImage="url('https://i.pinimg.com/originals/ed/7e/69/ed7e697358e7e17df93d431a905fec95.jpg')"
//     document.body.style.backgroundSize='cover'
//     document.querySelector('h1').innerText='Good morning';
//     alert('Good Morning!')
// }
// else if(time>=12 && time<18){
//     document.body.style.backgroundImage='url("https://funkylife.in/wp-content/uploads/2021/07/good-afternoon-images-53.jpg")'
//     document.body.style.backgroundSize='cover'
//     document.body.style.backgroundPosition="center"
//     document.querySelector('h1').innerText='Good afternoon';
//     alert('Good Afternoon!')
// }
// else if(time>=18 && time<24){
//     document.body.style.backgroundImage='url("https://images.unsplash.com/photo-1472120435266-53107fd0c44a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbmluZ3xlbnwwfHwwfHw%3D&w=1000&q=80")'
//     document.body.style.backgroundSize='cover'
//     document.querySelector('h1').innerText='Good evening';
//     alert('Good Evening!')
// }
// else{
//     document.body.style.backgroundImage= "url('https://images.pexels.com/photos/746111/pexels-photo-746111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
//     document.body.style.backgroundSize="cover";
//     document.querySelector('h1').innerText="Midnight!"
//     document.querySelector('h1').style.color="white"
//     alert('Midnight!');
// }


                                          //Task 2

//  function CalcArea(r){
//     return Math.PI*Math.pow(r,2)
//  }      
//  console.log(CalcArea(5))                                   

// var r=5;
// var area=Math.PI*Math.pow(r,2)
// console.log(area)



//  function Download(){
//     let btn=document.getElementById("btn")
//     btn.innerHTML="Downloading"
//  }
//  setTimeout(() => {
//     btn.innerHTML="Download"
//  }, 3000);
// setInterval(() => {
//     btn.innerHTML="Download"
// }, 3000);

    //   Task1
// function Mode(){
//     let icon=document.getElementById("mode")
//     if(icon.className === "fa-regular fa-moon"){
//         icon.className = "fa-regular fa-sun"
//         document.body.style.backgroundColor="#fff"
       
//     }
//     else{
//         icon.className ="fa-regular fa-moon"
//         document.body.style.backgroundColor="black"
//     }
// }


       //Task2
// let input=document.getElementById('inp')
// let p=document.getElementById('content')
// let btn=document.getElementById('btn')
//   function Click(){
//    switch(input.value.trim().slice(-3,-2)){
   
//     case '1':
//         p.innerHTML='Səhər';
//         input.style.color='yellow'
//    break;

//    case '2':
//    p.innerHTML='Günorta';
//    input.style.color='red'
//    break;
   

//    case '3':
//  p.innerHTML='Axşam';
//  input.style.color="black"
//  break;

//  default:
//     alert('Input correct grup number');
//   }   
// }  


        //Task3

let age=prompt('Include your age:')
let p=document.getElementById('text') 

if(age===null || age==='' || !Number(age)){
    alert("Please enter your age again")
}
else if(age>=18){
    p.innerHTML='Welcome'
document.body.style.backgroundColor='red'
}
else{
 p.innerHTML='Soryy...'
 
}