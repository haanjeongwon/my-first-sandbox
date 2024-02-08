// OPP에 있는 게 더 최신임

// 수정 전
let textElements = document.querySelectorAll('.text');

textElements.forEach(function(element) {
  let textContent = element.textContent;
  
  // 정규 표현식을 사용하여 로마자와 숫자로 이루어진 부분을 찾습니다.
  // let regex = /([a-zA-Z0-9?!()]+)/g;
  let regex = /([가-힣]+)/g;
  let matches = textContent.match(regex);
  console.log(matches);

  // let hangulRegex = /[가-힣\s]/g;
  let hangulRegex = /[a-zA-Z0-9?!()]/g;
  for (let i = 0; i < matches.length; i++) {
      let filteredString = matches[i].replace(hangulRegex, '');
      matches[i] = filteredString;
  }

  let splitMatches = [];
  matches.forEach(function(string) {
    for (let i = 0; i < string.length; i++) {
      splitMatches.push(string.charAt(i));
    }
  });
  matches = splitMatches;

  matches = new Set(matches);
  console.log(matches);

  if (matches) {
    matches.forEach(function(match) {
      textContent = textContent.replaceAll(match, `<span class="fix">${match}</span>`);
    });
    element.innerHTML = textContent;
  }
});

// 수정 후
let textEls = document.getElementsByClassName('tt');

for (let textEl of textEls) {
  let innerText = textEl.textContent;
  console.log(innerText);

  let inLetter = /([가-힣]+)/g;
  let outLetter = /[a-zA-Z0-9?!()]/g;
  let matchedText = innerText.match(inLetter);
  let splittedText = [];

  for (let i = 0; i < matchedText.length; i++) {
    let filteredText = matchedText[i].replace(outLetter, '');
    matchedText[i] = filteredText;
  };
  console.log(matchedText);

  // matchedText.forEach(function(string) {
  //   for (let i = 0; i < string.length; i++) {
  //     splittedText.push(string.charAt(i));
  //   }
  // });
  for (let match of matchedText) {
    for (let i = 0; i < match.length; i++) {
      splittedText.push(match.charAt(i));
    };
  };
  matchedText = splittedText;
  console.log(matchedText);
  matchedText = new Set(matchedText);
  console.log(matchedText);

  if (matchedText) {
    for (let match of matchedText) {
      innerText = innerText.replaceAll(match, `<span class="hh">${match}</span>`);
    };
    textEl.innerHTML = innerText;
  };
};