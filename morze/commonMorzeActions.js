import {morzeToVibration} from './morzeToVibration';
import {transliteration} from './transliterationEngToRus';
import {encodeMorse} from './encodeMorze';
import {decodeMorse} from './decodeMorze';

import asyncStorage from '../utils/asyncStorage';

export const commonMorzeActions = (stringData, isEncoding = true) => {
    if (isEncoding) {
        return morzeToVibration(encodeMorse(transliteration(stringData.toLowerCase())), (async () => {
            try {
                const speed = await asyncStorage.getData('morzeSpeed');
                if (speed === 'Fast') return 2;
                else if (speed === 'Medium') return 1;
                else if (speed === 'Slow') return 0.5;
            } catch (err) {
                console.warn(err);
            } finally {
                return 1;
            }
        })());
    }

    return decodeMorse(stringData);
};
