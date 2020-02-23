function initTabMenu() {
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

}
initTabMenu();

function initFaqList() {
  const faqDt = document.querySelectorAll('.js-faq-list dt')

  if (faqDt.length) {

    function showDD() {
      this.classList.toggle('active')
      this.nextElementSibling.classList.toggle('active')
    }

    faqDt.forEach((item) => {
      item.addEventListener('click', showDD)
    });

  }

}
initFaqList();
