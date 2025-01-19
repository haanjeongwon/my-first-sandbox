// Seokki Hangul Beta - 2024.10
seokkiHangul();

function seokkiHangul() {
  const set = [
    { name: 'roman', grep: /[A-Za-z]+(?=[^)]|$)/g },
    { name: 'romanParenthesis', grep: /[A-Za-z](?=[)])/g },
    { name: 'dash', grep: /[-—]/g },
    { name: '한글', grep: /[가-힣]+(?=[^\)\]\›\»\」\』]|$)/g },
    { name: '한글-괄호꺽쇠낫표', grep: /[가-힣](?=[\)\]\›\»\」\』])/g },
    { name: '숫자', grep: /\d+/g },
    { name: '마침표', grep: /[.]+(?=[^’”]|$)/g },
    { name: '마침표-따옴표', grep: /[.](?=[’”])/g },
    { name: '쉼표', grep: /[,]/g },
    { name: '따옴표', grep: /[‘’“”]/g },
    { name: '말줄임표', grep: /[…]/g },
    { name: '꺽쇠', grep: /[‹«]|[›»](?=[^(]|$)/g },
    { name: '꺽쇠-괄호', grep: /[›»](?=[(])/g },
    { name: '낫표', grep: /[「『]|[」』](?=[^\(]|$)/g },
    { name: '낫표-괄호', grep: /[」』](?=[\(])/g },
    { name: '괄호', grep: /[\(\)\{\}\[\]]/g },
    { name: '콜론', grep: /[:;]/g },
  ];

  const textEls = document.getElementsByClassName('tt');

  for (let textEl of textEls) {
    let innerText = textEl.innerText;
    for (let { grep, name } of set) {
      innerText = innerText.replace(grep, (match) => {
        return `<span class="${name}">${match}</span>`;
      });
    }
    textEl.innerHTML = innerText;
  }
};