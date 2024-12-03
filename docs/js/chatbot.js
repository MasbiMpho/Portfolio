//ChatBot Functionality

//Open Chatbot Function
function OpenChatFunc(){
    document.getElementById('chatWindow').style.display = 'flex';
    document.getElementById('userinput').focus();
    displayMessageFunc("Hello, I'm De-O. How can I assist you today?", 'botChat');
}

//Close Chatbot Function
function CloseChatFunc(){
    document.getElementById('chatWindow').style.display = 'none';
    chatWindowContent.innerHTML = '';
    userinput.value = '';
}


function displayMessageFunc(message, sender){
    const chatwc = document.getElementById('chatWindowContent');
    const content = document.createElement('div');

    content.classList.add('txtMessages', sender);

    // if (message.includes('education')) {
    //     // If message has a URL, turn it into a clickable link
    //     const linkStart = message.indexOf('#education');
    //     const linkText = message.substring(linkStart);
    //     const linkEnd = linkText.indexOf(' ') !== -1 ? linkText.indexOf(' ') : linkText.length;
    //     const url = linkText.substring(0, linkEnd);
        
    //     const textBeforeLink = message.substring(0, linkStart);
    //     const linkElement = `<a href="${url}" target="_blank">${url}</a>`;
    //     content.innerHTML = textBeforeLink + ' ' + linkElement;
    //    } else
    //   if (message.includes('award') || message.includes('awards')) {
    //      // If message has a URL, turn it into a clickable link
    //      const linkStart = message.indexOf('#awards');
    //      const linkText = message.substring(linkStart);
    //      const linkEnd = linkText.indexOf(' ') !== -1 ? linkText.indexOf(' ') : linkText.length;
    //      const url = linkText.substring(0, linkEnd);
        
    //      const textBeforeLink = message.substring(0, linkStart);
    //      const linkElement = `<a href="${url}" target="_blank">${url}</a>`;
    //      content.innerHTML = textBeforeLink + ' ' + linkElement;
    //    } else {
    //     content.textContent = message;
    //   }
    content.textContent = message;

    chatwc.appendChild(content);
    chatwc.scrollTop = chatwc.scrollHeight;
}

function botResponseFunc(userinput){
    const lowercase = userinput.toLowerCase();

    const softskills = [
        "Achievement Oriented",
        "Adaptable and Agile"
      ];

      const bulletsoftskills = softskills.map(item => `• ${item}`).join("\n");


      const techskills = [
        "HTML/CSS",
        "JavaScript"
      ];

      const bullettechskills = techskills.map(item => `• ${item}`).join("\n");
 
    switch(true){
        // Greetings and Intro Response
        case lowercase.includes('hello') || lowercase.includes('hi'):
            return "Hello, How can I assist you today?";
        break;
        case lowercase.includes('how are you'):
            return "Fine and you";
        break;
        case lowercase.includes('good') || lowercase.includes('great') || lowercase.includes('fine'):
            return "That's great to hear. Anything I can help with?";
        break;
        case lowercase.includes('your name'):
            return "ChatBot. De-O ChatBot.";
        break;
        case lowercase.includes('bye'):
            return "Good bye";
        break;
        case lowercase.includes('help'):
            return "Of course! Tell me what you need assistance with, and I’ll do my best to help.";
        break;
        case lowercase.includes('thanks') || lowercase.includes('thank you'):
            return "You're welcome! Anything else I can help with?";
        break;
        case lowercase.includes('skills') || lowercase.includes('skill'):
            navigateToSection('skills');
            return "I see you’re interested in Mpho's skills. Here’s what I found: \n\n" + "List of Soft Skills \n"+ bulletsoftskills + "\n\n"+ "List of Technical Skills \n" + bullettechskills + "\n\n To explore Mpho's complete skill set, please refer to the Skills section, which I've conveniently navigated to for you.";
        break;
        case lowercase.includes('about'):
            navigateToSection('about');
            return "I was created by Mpho Masibigiri to assist with various tasks, such as showcasing his skills, education and provide contact information at your request. I can also navigate the webpage toi help make things easier :)";
        break;
        case lowercase.includes('education'):
            navigateToSection('education');
            return "I have redirected you to the Education Section. Enjoy and call if you need any more assisstance.";
        break;
        case lowercase.includes('interests') || lowercase.includes('interest'):
            navigateToSection('interests');
            return "I have redirected you to the Interest Section. Enjoy and call if you need any more assisstance.";
        break;
        case lowercase.includes('awards') || lowercase.includes('award'):
            navigateToSection('awards');    
            return "I have redirected you to the Award Section. Enjoy and call if you need any more assisstance.";
            
        break;
        default:
            return "I’m not sure I understand. Can you explain your request a bit more?";
        break;

    }
    

    // if(lowercase.includes('hello') || lowercase.includes('hi')) {
    //     return "Hello, How can I assist you today?";
    // }else{
    //     return "Sorry, I didn't understand that. Could you please rephrase?";
    // }
}


function navigateToSection(section) {
    
    const targetSection = document.getElementById(section);
    targetSection.scrollIntoView({ behavior: 'smooth' });
}

function sendMessageFunc(){
    const input = document.getElementById('userinput').value.trim();

    if(input === ''){
       return displayMessageFunc("It looks like you sent an empty message! Try typing something.", 'botChat');
    }

    displayMessageFunc(input, 'userChat');

    document.getElementById('userinput').value = '';
   
    setTimeout(() => {
        const response = botResponseFunc(input);
        displayMessageFunc(response, 'botChat');
    }, 1200);
}

document.getElementById('userinput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();

      sendMessageFunc();
    }
  });
