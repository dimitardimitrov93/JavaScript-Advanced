function solve(dayOfWeek) {

    let printMsg;

    switch (dayOfWeek) {
        case 'Monday':
            printMsg = '1';
            break;
        case 'Tuesday':
            printMsg = '2';
            break;
        case 'Wednesday':
            printMsg = '3';
            break;
        case 'Thursday':
            printMsg = '4';
            break;
        case 'Friday':
            printMsg = '5';
            break;
        case 'Saturday':
            printMsg = '6';
            break;
        case 'Sunday':
            printMsg = '7';
            break;
        default: printMsg = 'error';
            break;
    }

    console.log(printMsg);
}

solve('Friday');