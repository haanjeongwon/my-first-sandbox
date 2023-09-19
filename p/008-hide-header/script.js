const header = document.getElementById('header');
let prevScrollPos = window.pageYOffset;

// 스크롤 이벤트 리스너를 등록합니다.
window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    // 스크롤 방향을 확인하고 헤더를 나타나게 하거나 숨깁니다.
    if (prevScrollPos > currentScrollPos) {
        // 스크롤을 올리는 중
        header.classList.remove('hidden');
    } else {
        // 스크롤을 내리는 중
        header.classList.add('hidden');
    }

    prevScrollPos = currentScrollPos;
});