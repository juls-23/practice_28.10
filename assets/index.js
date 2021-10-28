const btns = document.querySelectorAll('[data-flex-direction]');

const bord = document.querySelector('.bord');


const changeStyle = ({target:{dataset: {flexDirection}}}) => {
  bord.style.flexDirection = flexDirection;
}

const changeColor = ({target}) => {
  btns.forEach((el)=>{
    el.classList.remove(('activeBtn'))
    if(el === target){
      el.classList.add('activeBtn')
    }
 })
}

btns.forEach((el) => {
  console.log(el)
  el.addEventListener('click', changeStyle)  
  el.addEventListener('click', changeColor)  
})


