emailjs.init("wHPnp8InUPsAtY7-K");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_gpucgko",
        "template_82e8q7n",
        this
    ).then(() => {
        alert("Message Sent Successfullly!");
        form.reset();
    }).catch((error) => {
        alert("Failed to Send Messages");
        console.log(error);
    });
});