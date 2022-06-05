// // Конвертируем англ в рус буквы, если они присутсвуют
// function transliteration(word){
//     var answer = '';
//     var converterEngToRus = {
//         'a': 'а',    'b': 'б',    'c': 'ц',    'd': 'д',
//         'e': 'е',    'f': 'ф',    'g': 'г',    'h': 'х',
//         'i': 'и',    'j': 'й',    'k': 'к',    'l': 'л',
//         'm': 'м',    'n': 'н',    'o': 'о',    'p': 'п',
//         'q': 'к',    'r': 'р',    's': 'с',    't': 'т',
//         'u': 'у',    'v': 'в',    'w': 'в',    'x': 'х',
//         'y': 'у',    'z': 'з',
//     };
//     word =word.toLowerCase();
// 	  for (var i = 0; i < word.length; ++i ) {
//       if (converterEngToRus[word[i]] == undefined){
//         answer += word[i];
//       } else {
//         answer += converterEngToRus[word[i]];
//       }
// 	  }
// 	return answer;
// }
// var step1 = transliteration('Privet');
// console.log('Transliteration: ' + step1);


// // Переведём нашу строку в шифр морзе
// function encodeMorse(morseCode) {
//     var alphabet = {
//       'а': '·−',      'б': '−···',      'в': '·−−',     'г': '−−·',
//       'д': '−··',     'е': '·',         'ё': '·',       'ж': '···−',
//       'з': '−−··',    'и': '··',        'й': '·−−−',    'к': '−·−',
//       'л': '·−··',    'м': '−−',        'н': '−·',      'о': '−−−',
//       'п': '·−−·',    'р': '·−·',       'с': '···',     'т': '−',
//       'у': '··−',     'ф': '··−·',      'х': '····',    'ц': '−·−·',
//       'ч': '−−−·',    'ш': '−−−−',      'щ': '−−·−',    'ъ': '−−·−−',
//       'ы': '−·−−',    'ь': '−··−',      'э': '··−··',   'ю': '··−−',
//       'я': '·−·−',    '.': '·−·−·−',    ',': '·−·−·−',  ':': '−−−···',
//       '!':'−−··−−',   '?':'··−··',      '-': '−····−',  ' ': 's',
  
//       '1':'·−−−−',    '2':'··−−−',      '3':'···−−',    '4':'····−',
//       '5':'·····',    '6':'−····',      '7':'−−···',    '8':'−−−··',
//       '9':'−−−−·',    '0':'−−−−−'
//     }
//   return morseCode
//         .split('')
//         .map(function(e){
//           return alphabet[e.toLowerCase()] || '';
//         })
//         .join('')
//         .replace(/ +/g, '');
// }

// var step2 = encodeMorse(step1);
// console.log('Encode Morse: ' + step2);


// // Конвертируем шифр в вибрации
// function morseToVibration(morseCode, speed = 2){
//     var vibrationPattern = [];
//     var ref = {
//       '·': 1000,
//       '−': 3000,
//       's': 6000, // space
//     }
  
//     morseCode
//     .split('')
//     .map(function(e){
//       if (e != 's') {
//         vibrationPattern.push(ref[e] / speed);
//         // vibrationPattern.push(1000 / speed);
//       }
//       else {
//         // vibrationPattern.push(0);
//         vibrationPattern.push(ref[e] / speed);
//       }
  
//       return ref[e] || '';
//     })
  
//     return vibrationPattern;
//   }
  
//   var step3 =  morseToVibration(step2);
//   console.log(step3);  



// функция декодирования точек и тире в осмысленную строку
function decodeMorse(morseCode) {
    var alphabet = {
      '·−' : 'а',     '−···' : 'б',     '·−−' : 'в',    '−−·' : 'г',
      '−··' : 'д',    '·' : 'е',        '···−' : 'ж',   '−−··' : 'з',
      '··' : 'и',     '·−−−' : 'й',     '−·−' : 'к',    '·−··' : 'л',
      '−−' : 'м',     '−·' : 'н',       '−−−' : 'о',    '·−−·' : 'п',
      '·−·' : 'р',    '···' : 'с',      '−' : 'т',      '··−' : 'у',
      '··−·' : 'ф',   '····' : 'х',     '−·−·' : 'ц',   '−−−·' : 'ч',
      '−−−−' : 'ш',   '−−·−' : 'щ',     '−−·−−' : 'ъ',  '−·−−' : 'ы',
      '−··−' : 'ь',   '··−··' : 'э',    '··−−' : 'ю',   '·−·−' : 'я',
      '·−·−·−' : '.', '·−·−·−' : ',',   '−−−···' : ':', '−−··−−' : '!',
      '··−··' : '?',  '−····−' : '-',   's' : ' ',
  
      '·−−−−' : '1',  '··−−−' : '2',    '···−−' : '3',  '····−' : '4',
      '·····' : '5',  '−····' : '6',    '−−···' : '7',  '−−−··' : '8',
      '−−−−·' : '9',  '−−−−−' : '0'
    }
  
    return morseCode
      .split('   ')
      .map(
        a => a
          .split(' ')
          .map(
            b => alphabet[b]
          ).join('')
      ).join(' ');
}
  

// функция нахождения среднего значения в массиве
function ArrayAvg(myArray) {
    var summ = 0, ArrayLen = myArray.length;
    for (var i = 0; i < ArrayLen; i++)
        if (myArray[i] != 's') {
            summ = summ + myArray[i];
        }
    return summ / ArrayLen;
}


// функция нахождения минимального значения в массиве
function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}


// функция транслитерации времени в осмысленную фразу
function translateKeyToString(signal) {
    // Переменная, разграничивающая точку и тире 
    // в зависимости от длительности нажатия
    var avgTime = Math.round(ArrayAvg(signal));
    
    
    var signalString = '';
        
    for (var i = 0; i < signal.length; i++){
        if (signal[i] <= avgTime) {
            signalString += '·';
        }
        if (signal[i] > avgTime) {
            signalString += '−';
        }
        if (signal[i] == 's') {
            signalString += ' ';
        }
    }


    // console.log('signal:  ' + signalString);
    // console.log('avgTime: ' + avgTime);
    // console.log('decode:  ' + decodeMorse(signalString));
}


// время нажатия кнопок

// var signal = [400, 1200, 1200, 400];
var signal1 = [400, 1200, 1200, 400, 's', 400, 1200, 400, 's', 400, 400, 's', 400, 1200, 1200, 's', 400, 's', 1200];
var signal2 = [];
translateKeyToString(signal1);
