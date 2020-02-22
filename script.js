const tabMenu = document.querySelectorAll('.js-tab-menu li')
const tabContent = document.querySelectorAll('.js-tab-content section')

if (tabMenu.length && tabContent.length) {
  function activeTab(index) {
    tabContent.forEach((item) => {
      item.classList.remove('ativo')
    });
    tabContent[index].classList.add('ativo')
  }

  tabMenu.forEach((item, index) => {
    item.addEventListener('click', () => activeTab(index))
  });
}