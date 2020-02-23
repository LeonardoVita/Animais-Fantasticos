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


function initSmoothScroll() {
  const linkInterno = document.querySelectorAll('.js-nav-manu a[href^="#"]')

  if (linkInterno.length) {

    function scrollToSection(event) {
      event.preventDefault()

      const href = this.getAttribute('href')
      const section = document.querySelector(href)
      const topo = section.offsetTop;

      section.scrollIntoView({
        behavior: 'smooth'
      })

      //forma alternativa
      // window.scrollTo({
      //   top: topo,
      //   behavior: 'smooth'
      // })

    }

    linkInterno.forEach((item) => {
      item.addEventListener('click', scrollToSection)
    })

  }

}
initSmoothScroll();