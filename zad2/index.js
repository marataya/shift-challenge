// этот код должен при клике на кнопку изменить цвет текста внутри кнопки на красный и через 2 секунды вызвать аллерт
// с текстом из инпута и изменить цвет текста внутри кнопки на синий
const warningButton = document.querySelector('.warning-button');
console.log(warningButton);
warningButton.addEventListener('click', () => {
  warningButton.style.color = 'red';
  // console.log('klik');
  setTimeout(() => {
    const warningInput = document.getElementById('warning-input');
    alert(warningInput.value);
    warningButton.style.color = 'blue';
  }, 2000)
})

