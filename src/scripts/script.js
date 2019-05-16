// add custom js below

const elements = document.getElementsByClassName('joinUs-team-human');
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function () { 
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove('joinUs-team-human__active');
    }
    this.classList.add('joinUs-team-human__active');
  })
}