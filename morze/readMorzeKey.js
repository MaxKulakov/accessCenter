import KeyEvent from 'react-native-keyevent';
import {commonMorzeActions} from '../../morze/morzeActions';

function SendMessage () {
}
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

    var keyDownTime = 0;
    KeyEvent.onKeyDownListener((keyEvent) => {
        const keyDown = keyEvent.keyCode;
        const momentKeyDownTime = new Date().getMilliseconds();
        keyDownTime += momentKeyDownTime;
    });

    KeyEvent.onKeyUpListener((keyEvent) => {
        const keyUp = keyEvent.keyCode;
        const keyUpTime = new Date().getMilliseconds();
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
        textInput.setState({text: commonMorzeActions(signalString, false)});
    }
    if (pushTime >= 5000) {
        SendMessage(this.state.text);
    }

    KeyEvent.removeKeyDownListener();
    KeyEvent.removeKeyUpListener();
};
