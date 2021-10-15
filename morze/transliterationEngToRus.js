export function transliteration(word){
	var answer = '';
  var converterEngToRus = {
    'a': 'а',    'b': 'б',    'c': 'ц',    'd': 'д',
    'e': 'е',    'f': 'ф',    'g': 'г',    'h': 'х',
    'i': 'и',    'j': 'й',    'k': 'к',    'l': 'л',
    'm': 'м',    'n': 'н',    'o': 'о',    'p': 'п',
    'q': 'к',    'r': 'р',    's': 'с',    't': 'т',
    'u': 'у',    'v': 'в',    'w': 'в',    'x': 'х',
    'y': 'у',    'z': 'з',
  };

	for (var i = 0; i < word.length; ++i ) {
		if (converterEngToRus[word[i]] == undefined){
			answer += word[i];
		} else {
			answer += converterEngToRus[word[i]];
		}
	}

	return answer;
}
