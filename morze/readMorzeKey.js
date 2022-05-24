import KeyEvent from 'react-native-keyevent';
import {commonMorzeActions} from '../../morze/morzeActions';


function ArrayAvg(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
    }
    return summ / ArrayLen;
}

function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}

export function translateKeyToString() {
    var signal = [];

    KeyEvent.onKeyDownListener((keyEvent) => {
        const keyUp = keyEvent.keyCode;
        const keyUpTime = new Date().getMilliseconds();
    });

    KeyEvent.onKeyUpListener((keyEvent) => {
        const keyDown = keyEvent.keyCode;
        const keyDownTime = new Date().getMilliseconds();
    });
    
    var pushTime = keyUpTime - keyDownTime;

    if (pushTime < 3000) {
        signal.push(pushTime);
    } else {
        var avgTime = ArrayAvg(signal) - getMinOfArray(signal);
        var signalString = '';
        
        for (var i = 0; i < signal.length; i++){
            if (signal[i] < avgTime) {
                signalString += '·';
            } else {
                signalString += '−';
            }
        }

        KeyEvent.removeKeyDownListener();
        KeyEvent.removeKeyUpListener();

        return commonMorzeActions(signalString, false);
    }
};
