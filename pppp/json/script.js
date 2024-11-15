const wrap = document.getElementById('wrap');
const currentPageEl = document.getElementById('list-nav-current');
const prevBtn = document.getElementById('list-nav-prev');
const nextBtn = document.getElementById('list-nav-next');
let totalPages;
let currentPage = 1;
let postsPerPage = 4;

fetch('./posts.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('네트워크 오류: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    //* start
    const posts = data;
    totalPages = Math.abs(posts.length / postsPerPage);

    function renderPage() {
      wrap.innerHTML = '';
      currentPageEl.innerHTML = currentPage;

      // for (const [index, post] of list.entries()) {
      for (let i = (currentPage - 1) * postsPerPage; i <= currentPage * postsPerPage - 1; i++) {
        const post = posts[i];
        wrap.insertAdjacentHTML('beforeend',
          `<li>
            <div class="list-l">
              <a class="list-title tt">${post.title}</a>
              <div class="list-date">${post.date}</div>
            </div>
            <div class="list-r">
              <a><img src="./thumb/thumb-${post.index}.jpg" /></a>
            </div>
          </li>`);
      }

      if (currentPage == 1) {
        prevBtn.classList.add('hide')
      } else {
        prevBtn.classList.remove('hide')
      }

      if (currentPage == totalPages) {
        nextBtn.classList.add('hide')
      } else {
        nextBtn.classList.remove('hide')
      }
    };

    prevBtn.addEventListener('click', function() {
      if (currentPage > 1) {
        currentPage--;
        renderPage();
      }
    });

    nextBtn.addEventListener('click', function() {
      if (currentPage < totalPages) {
        currentPage++;
        renderPage();
      }
    });
    
    renderPage();
    //* end
  })
  .catch(error => {
    console.error('오류 발생:', error);
  });