// [].forEach.call(document.querySelectorAll('.code-after'), function($code) {
//   var lines = $code.textContent.split('\n');

//   if (lines[0] === '') {
//     lines.shift()
//   }

//   var matches;
//   var indentation = (matches = /^[\s\t]+/.exec(lines[0])) !== null ? matches[0] : null;
//   if (!!indentation) {
//     lines = lines.map(function(line) {
//       line = line.replace(indentation, '')
//       return line.replace(/\t/g, '    ')
//     });

//     $code.textContent = lines.join('\n').trim();
//   }
// });

// 출처: https://stackoverflow.com/questions/17257200/removing-leading-whitespace-from-indented-html-source-in-pre-code-tags

const codes = document.querySelectorAll('.code-after');

for (const code of codes) { // forEach로도 해보자

  let lines = code.textContent.split('\n');

  if (lines[0] === '') {
    lines.shift()
  };

  let matches;
  let indentation = (matches = /^[\s\t]+/.exec(lines[0])) !== null ? matches[0] : null;
  if (!!indentation) {
    lines = lines.map(function(line) {
      line = line.replace(indentation, '');
      return line.replace(/\t/g, '  '); // 탭 문자를 2개의 공백으로 변환하며 반환 -- 그런데 확인해 보니 이미 탭을 공백 2개로 표현하고 있어서 이 줄의 공백 변환은 의미 없음
    });

    code.textContent = lines.join('\n').trim();
  }
};