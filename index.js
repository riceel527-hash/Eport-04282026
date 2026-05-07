
function contact(event) {
 event.preventDefault();
emailjs
.sendForm(
    'service_5k2ad7k',
    'template_m74hasa',
    event.target,
    'pcMbVjjCOaA8Ua1no'
).then(() => {
    console.log('this worked1')
})

}
