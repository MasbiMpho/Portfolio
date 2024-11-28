//ChatBot Functionality

//Open Chatbot Function
function OpenChatFunc(){
    document.getElementById('chatWindow').style.display = 'flex';
    document.getElementById('userinput').focus();
}

//Close Chatbot Function
function CloseChatFunc(){
    document.getElementById('chatWindow').style.display = 'none';
    chatWindowContent.innerHTML = '';
    userinput.value = '';
}

// //Empty Message Validation
// function validateFormFunc(){
//     const input = document.getElementById('userinput').value;

//     if(input == "")
//     {
//         alert("All fields must be filled out.");
//         return false;
//     }
//     return true;
// }

function displayMessageFunc(message, sender){
    const chatwc = document.getElementById('chatWindowContent');
    const content = document.createElement('div');

    content.classList.add('txtMessages', sender);
    content.textContent = message;

    chatwc.appendChild(content);
    chatwc.scrollTop = chatwc.scrollHeight;
}

function botResponseFunc(userinput){
    const lowercase = userinput.toLowerCase();
 
    switch(true){
        case lowercase.includes('hello') || lowercase.includes('hi'):
            return "Hello, How can I assist you today?";
        break;

        case lowercase.includes('how are you'):
            return "Fine";
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
            return "I see you’re interested in Mpho's skills. Here’s what I found! \n kuerngern";
        break;
        case lowercase.includes('about'):
            return "I was created by Mpho Masibigiri to assist with various tasks, such as showcasing his skills, education and provide contact information at your request.";
        break;
        case lowercase.includes('education'):
            return "Hello, How can I assist you today?";
        break;
        case lowercase.includes('interests') || lowercase.includes('interest'):
            return "Hello, How can I assist you today?";
        break;
        case lowercase.includes('awards') || lowercase.includes('award'):
            return "Hello, How can I assist you today?";
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
