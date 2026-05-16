# My Personal Web Project
## HTML Structure
This website is the first website that i made, using HTML, and CSS. However, i struggled with a lot of stages, begining with hack club tutorial. I learned how to make basic structure of the HTML and decorate with CSS, adding Tailwind framework. Additionally, i searched about HTML structure more and more to make this web the structure consists of:
- Header that contains:
    - The logo which is "MSA"
    - The navigation bar which include the four main sections, such as Home Skills, and Contact
- The main section cotains:
    - Greeting sentence, and my job which is "student"
    - Button to move to the contact section
    - Social media icons, by importing "font awesome" library
    - Photo of mine
- Skills
    - There is three blocks, each one is a skill with an icon and list of it
    - The block has shadow, so it seems like cards
- Contact
    - It contains form that has two input boxes, one for name, and one for email, and text area box for message.
    - I created an account on emailjs and get the public key, because it is most easy way to send messages instead of backend and API.
    - I created service of gmail in emailjs with email that you want to recieve the messages from, and get the service ID.
    - I created a tempelate of mail, which is name, email, and message, and get the template ID.
    - I initiated the emailjs in Javacript code, and by using public key, template, and service ID. The web sends the form (name, email, and message) to emailjs, and emialjs apply the service ID which refers to the gmail that is connected to my email, and it sends the form to my email in the template that i made it in the emailjs. 
- Footer
    - I added the copywrite symbol

## CSS Structure
After creating this structure, i started decorating it with css. I made seperated file for CSS, and linked it with HTML file. I used W3school to see a lot of features of css, and gain ideas. In addition, i took a look about personal web of one of my friends to gather ideas of design to make.


