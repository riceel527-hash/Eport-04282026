
function contact(event) {
 event.preventDefault();
const loading = document.querySelector(".modal__overlay--loading");
const success = document.querySelector(".modal__overlay--success");
loading.classList += " modal__overlay--visible";
emailjs.sendForm(
    'service_5k2ad7k',
    'template_m74hasa',
    event.target,
    'pcMbVjjC0aA8Ua1no'
).then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
}).catch(() => {
      loading.classList.remove("modal__overlay--visible");
   alert("The email service is temporarily unavailable. Please contact me directly on email@email.com"
      );
    })
}

//setTimeout(() => {

//console.log('it worked 1')    
//}, 1000);

//}

