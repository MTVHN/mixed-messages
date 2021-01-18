const wiseWords = {
    action : ['reading', 'drinking tea', 'going back to sleep', 'running'],
    think : ['take you on a new course', 'kill you', 'make you blind', 'make you question'],
    decide : ['see it and seize it', 'let it be', 'move on', 'conquer it'] 
}

let msg = [];

const randomWise = obj  => {
    let randomMsg = 0;

    for (let prop in obj) {
       randomMsg = Math.floor(Math.random() * obj[prop].length);
    }
    
    for (let prop in obj) {
        switch (prop) {
            case 'action': 
                msg.push(`Begin the day by ${obj[prop][randomMsg]}`);
                break;
            case 'think': 
                msg.push(`Remember, the smallest most inconsequential thing can ${obj[prop][randomMsg]}`);
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

const completeMessage = message => {
    randomWise(wiseWords);

    const formattedMsg = msg.join('.\n');
    console.log(formattedMsg);
}

completeMessage(randomWise);

