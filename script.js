let greeting = '';
const greetings = () => {
    const today = new Date();
    const hourOfDay = today.getHours();
    
    if (hourOfDay < 12) {
        greeting = 'Morning,';
    }
    else if (hourOfDay < 18) {
        greeting = 'Afternoon,';
    }
    else if (hourOfDay < 23) {
        greeting = 'Evening,';
    }
    return greeting;
}
//Stores the random messages 
const wiseWords = {
    emoji : [0x1F429, 0x1F603, 0x1F4A9, 0x1F60D, 0x1F929, 0x1F974],
    action : ['reading', 'drinking tea', 'going back to sleep', 'running'],
    think : ['take you on a new course', 'kill you', 'make you blind', 'make you question'],
    decide : ['see it and seize it', 'let it be', 'move on', 'conquer it'] 
}
//Will combine all the messages
let msg = [];

//Function to obtain random messages from each property, and push into variable 'msg'
const randomWise = obj  => {
    
    msg.push(greeting);
    
    for (let prop in obj) {
        let randomMsg = 0;
        randomMsg = Math.floor(Math.random() * obj[prop].length);

        switch (prop) {
            case 'emoji':
                //String.fromCodePoint converts hexadecimal into emoji
                msg.push(String.fromCodePoint(obj[prop][randomMsg]));
                break;
            case 'action': 
                msg.push(`Begin the day by ${obj[prop][randomMsg]}.`);
                break;
            case 'think': 
                msg.push(`Remember, the smallest most inconsequential thing can ${obj[prop][randomMsg]}.`);
                break;
            case 'decide': 
                msg.push(`You just have to ${obj[prop][randomMsg]}.`);
                break;
            default:
                msg.push('Fortune...eh, there are no wise words!')
        }
    }
    return msg;
}

//Holds the complete program
const completeMessage = () => {
    greetings();
    randomWise(wiseWords);

    const formattedMsg = msg.join('\n');
    console.log(formattedMsg);
}

completeMessage();

