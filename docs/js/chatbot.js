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

    if(lowercase.includes('hello') || lowercase.includes('hi')) {
        return "Hello, How can I assist you today?";
    }else{
        return "Sorry, I didn't understand that. Could you please rephrase?";
    }
}

function sendMessageFunc(){
    const input = document.getElementById('userinput').value.trim();

    if(input === ''){
       return displayMessageFunc("It looks like you sent an empty message! Try typing something.", 'botChat');
    }

    displayMessageFunc(input, 'userMessage');

    document.getElementById('userinput').value = '';

    setTimeout(() => {
        const response = botResponseFunc(input);
        displayMessageFunc(response, 'botChat');
    }, 1200);
}

document.getElementById('userinput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      
    //   alert('You pressed Enter: ' + this.value);
      sendMessageFunc();
    }
  });
