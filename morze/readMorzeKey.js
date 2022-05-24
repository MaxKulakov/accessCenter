import {morzeToVibration} from './morzeToVibration';
import {transliteration} from './transliterationEngToRus';
import {encodeMorse} from './encodeMorze';
import {decodeMorse} from './decodeMorze';

export function commonMorzeActions (stringData, isEncoding = true) {
    if (isEncoding) {
        return morzeToVibration(encodeMorse(transliteration(stringData.toLowerCase())),8);
    }
    return decodeMorse(stringData);
};
