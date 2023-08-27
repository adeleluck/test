//Задание 2.5 Форма

function handleFormSubmit(event) {
  event.preventDefault();
  
  const data = new FormData(event.target);
  
  const value  = Object.fromEntries(data);
  
  const results = document.querySelector('.results pre');
  results.innerText = JSON.stringify(value , null, 2);
}

const form = document.querySelector('.my-form');
form.addEventListener('submit', handleFormSubmit);

