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

function MiniChatFunc(){
    document.getElementById('chatWindow').style.display = 'none';
}

function HelpChatFunc(){
    displayMessageFunc(botResponseFunc('help'),'botChat');

}


function displayMessageFunc(message, sender){
    const chatwc = document.getElementById('chatWindowContent');
    const content = document.createElement('div');

    content.classList.add('txtMessages', sender);

    // if (message.includes('email')) {
    //     // If message has a URL, turn it into a clickable link
    //     const linkStart = message.indexOf('mailto:Mpho.Masibigiri@capaciti.org.za.com');
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

    const helpkey = [
        "hello",
        "how are you",
        "your name",
        "bye",
        "help",
        "thanks",
        "skills",
        "what can you do",
        "about mpho",
        "profile",
        "about you",
        "tell me about yourself",
        "education",
        "where did you study",
        "interests",
        "what does mpho like",
        "awards",
        "accomplishments",
        "do you have experience",
        "call",
        "email",
        "contact",
        "linkedin",
      ];

      const bullethelp = helpkey.map(item => `• ${item}`).join("\n");


    switch(true){
        // Greetings and Intro Response
        case lowercase.includes('hello') || lowercase.includes('hi'):
            return "Hello, How can I assist you today?";
        break;
        case lowercase.includes('how are you'):
            return "Great and you?";
        break;
        case lowercase.includes('good') || lowercase.includes('great') || lowercase.includes('fine'):
            return "That's great to hear. Anything I can help with?";
        break;
        case lowercase.includes('your name'):
            return "ChatBot. De-O ChatBot.";
        break;
        case lowercase.includes('bye'):
            return "Good bye. If you are done kindly select the X at the top right corner to close me.";
            
        break;
        case lowercase.includes('help'):
            return "Of course! \nHere is a list of keywords you can include to help you get started.\n" + bullethelp;
        break;
        case lowercase.includes('thanks') || lowercase.includes('thank you'):
            return "You're welcome! Anything else I can help with?";
        break;
        case lowercase.includes('skills') || lowercase.includes('skill') || lowercase.includes('what can you do'):
            navigateToSection('skills');
            return "Mpho possess a strong set of soft skills, including being achievement-oriented, adaptable, and agile. He thrives in collaborative environments and he is an effective problem-solver, with a focus on time management to consistently meet deadlines and deliver results. Technical expertise spans several programming languages, including C#, C++, HTML/CSS, Java, JavaScript, and Visual Basic. He is also proficient with a variety of tools and technologies, such as Android Studio, Code Blocks, Discord, Eclipse, Git, Lucidchart, MS Office, SQL Server Management Studio, and Visual Studio Code.";
        break;
        case lowercase.includes('about mpho') || lowercase.includes('profile'):
            navigateToSection('about');
            return "Mpho Masibigiri is a Computer Science graduate with a strong passion for developing user-centric applications. He has a solid foundation in programming languages such as Java, HTML/CSS, and C#/C++, and is committed to staying up-to-date with modern technologies to continually improve the user experience. He is analytical, achievement-oriented, and detail-focused, with a proven ability to manage time effectively, meet deadlines, and deliver high-quality results. He also thrives in collaborative team environments, especially in support roles where he can contribute to problem-solving, offer technical assistance, and work alongside others to create innovative solutions.";
        break;
        case lowercase.includes('about you') || lowercase.includes('tell me about yourself'):
            return "I am a Chatbot created by Mpho Masibigiri to assist with various tasks, such as showcasing his skills, education and provide contact information at your request. I can also redirect you to different sections on the webpage :)";
        break;
        case lowercase.includes('education') || lowercase.includes('where did you study') || lowercase.includes('where did mpho study'):
            navigateToSection('education');
            return "Mpho Masibigiri holds a Bachelor of Science in Computer Science and Informatics from the University of Johannesburg. Studies included courses in Agile Programming, Android Application Development using C#, Database Development and Management, Data Structures and Algorithms, Java Application Development, and Object-Oriented Programming. Mpho also gained experience with the Software Development Life Cycle (Waterfall), Project Management and Deliverables, and Web Development using ASP.NET with C#. Prior to that, he completed his Matric at Divine Kingdom Academy.";
        break;
        case lowercase.includes('interests') || lowercase.includes('interest') || lowercase.includes('what does mpho like') || lowercase.includes('skill'):
            navigateToSection('interests');
            return "Mpho Masibigiri has a strong passion for video games, both as a player and an enthusiast of game design and technology, which has enhanced his creativity, problem-solving, and understanding of interactive media. He stays updated on industry trends and enjoys exploring new game mechanics, applying innovative solutions to challenges. Coupled with his love for tech gadgets this keeps him engaged with evolving technologies, enabling him to bring fresh, tech-savvy ideas to his work. Additionally, he's fascinated by the integration of technology in cars, particularly in areas like infotainment, GPS, and vehicle diagnostics.\n I’m excited about how IT is transforming the automotive industry. - Mpho";
        break;
        case lowercase.includes('awards') || lowercase.includes('award') || lowercase.includes('accomplishments') || lowercase.includes('accomplishment'):
            navigateToSection('awards');    
            return "Mpho Masibigiri has been recognized for several achievements, including Best Supporting Actor at the 1st Years Concert in 2016, and he earned a Bachelor's Degree in Computer Science. He also competed in the Male 400M Sprint at the All African Student Convention, showcasing his athleticism. Additionally, he contributed to a Community Project on Family, gaining valuable experience in social initiatives. His academic accomplishments also includes studies on Plate Waste and a Time Flow, both of which enhanced his analytical and research skills.";
            
        break;
        case lowercase.includes('experience') || lowercase.includes('do you have experience'):
            return "Although Mpho Masibigiri does not yet have formal work experience, he is currently gaining valuable hands-on experience through an internship at CapaCiti. During this time, he has had the opportunity to work on exciting projects, such as creating an online portfolio with a chatbot :), further developing his skills and expertise.";
        break;
        case lowercase.includes('contact') || lowercase.includes('how do i contact') || lowercase.includes('a hold of'):
            return "You can contact Mpho via Email, SMS or Call. Type email or call in the message box to get Mpho's contact details.\n*Secret: He prefers calls";
        break;
        case lowercase.includes('email'):
            return "mpho.masibigiri@capaciti.org.za";
        break;
        case lowercase.includes('call'):
            return "071 323 6894";
        break;
        case lowercase.includes('linkedin'):
            return "https://www.linkedin.com/in/mpho-lin-masibigiri";
        break;
        default:
            return "I’m not sure I understand. Can you explain your request a bit more?";
        break;

    }
    
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
