//ChatBot Functionality

//Open Chatbot Function
function OpenChatFunc(){
    document.getElementById('chatWindow').style.display = 'flex';
}

//Close Chatbot Function
function CloseChatFunc(){
    document.getElementById('chatWindow').style.display = 'none';
}

//Empty Message Validation
function validateFormFunc(){
    var input = document.getElementById('userinput').value;

    if(input == "")
    {
        alert("All fields must be filled out.");
        return false
    }
    return true;
}

