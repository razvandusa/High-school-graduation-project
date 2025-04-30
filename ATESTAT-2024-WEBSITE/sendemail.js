function sendMail (){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

emailjs.send('service_tt8dwod', 'template_0v3nv75', parms).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
    document.querySelector('input[id="email"]').value = "";
    document.querySelector('input[id="message"]').value = "";
    document.querySelector('input[id="name"]').value = "";
  },
  (error) => {
    console.log('FAILED...', error);
  },
);
}