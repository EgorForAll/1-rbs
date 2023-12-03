const pagLinks = document.querySelectorAll('.links-custom')
const paginationList = document.querySelector('.links-custom')
const prebBtn = document.querySelector('#prev-page')
const nextBtn = document.querySelector('#next-page')

const changePage = (e) => {
  e.preventDefault()
  pagLinks.forEach((item) => {
    item.classList.contains('active-page-link') ? item.classList.remove('active-page-link') : null
  })
  e.target.classList.add('active-page-link')
  if (e.target.textContent == 1) {
    prebBtn.style.display = 'none'
  } else {
    prebBtn.style.display = 'inline'
  }
}

pagLinks.forEach((link) => {
  link.textContent == 1 && link.classList.contains('active-page-link')
    ? (prebBtn.style.display = 'none')
    : null
  link.addEventListener('click', (e) => changePage(e))
})
