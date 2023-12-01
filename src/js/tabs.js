const tabs = document.querySelectorAll('.catalog__header-btn')

tabs.forEach((tab) =>
  tab.addEventListener('click', () => {
    tabs.forEach((item) =>
      item.classList.contains('active-tab') ? item.classList.remove('active-tab') : null
    )
    if (!tab.classList.contains('active-tab')) {
      tab.classList.add('active-tab')
    }
  })
)
