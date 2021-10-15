export function morzeToVibration(morseCode, speed){
  var vibrationPattern = [1000 / speed];
  var ref = {
    '·': 1000,
    '−': 3000,
    's': 6000, // space
  }

  morseCode
  .split('')
  .map(function(e){
    if (e != 's') {
      vibrationPattern.push(ref[e] / speed);
      vibrationPattern.push(1000 / speed);
    }
    else {
      vibrationPattern.push(0);
      vibrationPattern.push(ref[e] / speed);
    }

    return ref[e] || '';
  })

  return vibrationPattern;
}
