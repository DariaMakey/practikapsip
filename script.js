document.addEventListener('DOMContentLoaded', function() {
    const fileUploadContainer = document.getElementById('fileUploadContainer');
    const fileUploadInput = document.getElementById('fileUploadInput');
  
    fileUploadContainer.addEventListener('click', function() {
      fileUploadInput.click();
    });
  //Прикрепление файла
    fileUploadInput.addEventListener('change', function() {
      const fileName = this.files[0].name;
      const attachFileSpan = fileUploadContainer.querySelector('.span-attach-file');
      if (fileName) {
        attachFileSpan.textContent = fileName;
      } else {
        attachFileSpan.textContent = 'Прикрепить файл...';
      }
    });
  });
  //Поле ввода "Имя" + окно ошибки
  document.querySelector('.input-name').addEventListener('input', function(event) {
    const input = event.target;
    const regex = /^[а-яА-ЯёЁa-zA-Z]*$/;
  
    if (!regex.test(input.value)) {
      alert('Введите только буквы!');
      input.value = input.value.replace(/[^а-яА-ЯёЁa-zA-Z]/g, '');
    }
  });
  //Маска ввода
  document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
  
    phoneInput.addEventListener('input', function(event) {
      let input = phoneInput.value.replace(/\D/g, '');
      let formattedInput = '+7 (';
  
      if (input.length > 1) {
        formattedInput += input.substring(1, 4);
      }
      if (input.length >= 4) {
        formattedInput += ') ' + input.substring(4, 7);
      }
      if (input.length >= 7) {
        formattedInput += '-' + input.substring(7, 9);
      }
      if (input.length >= 9) {
        formattedInput += '-' + input.substring(9, 11);
      }
  
      phoneInput.value = formattedInput;
    });
  
    phoneInput.addEventListener('keydown', function(event) {
      // Prevent deletion of static characters in the mask
      const key = event.key;
      const cursorPosition = phoneInput.selectionStart;
  
      if ((key === 'Backspace' || key === 'Delete') && (cursorPosition === 3 || cursorPosition === 6 || cursorPosition === 10 || cursorPosition === 13)) {
        event.preventDefault();
      }
    });
  });
//Проверка на пустые поля 
// Функция, которая показывает или скрывает кнопку в зависимости от положения прокрутки
function toggleScrollTopButton() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
}

// Функция, которая показывает или скрывает кнопку в зависимости от положения прокрутки
function toggleScrollTopButton() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
}

// Функция для прокрутки страницы вверх
function scrollToTop() {
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для других браузеров
}

// Обработчик события прокрутки страницы
window.addEventListener('scroll', function() {
  toggleScrollTopButton();
});
// JavaScript для добавления подсказки
document.addEventListener('DOMContentLoaded', function() {
  const ourServicesTooltip = document.querySelector('.our-services .tooltiptext');
  const ourServicesSpan = document.querySelector('.our-services');

  // Показываем подсказку при наведении
  ourServicesSpan.addEventListener('mouseover', function() {
    ourServicesTooltip.style.visibility = 'visible';
    ourServicesTooltip.style.opacity = '1';
  });

  // Скрываем подсказку при уходе курсора с элемента
  ourServicesSpan.addEventListener('mouseout', function() {
    ourServicesTooltip.style.visibility = 'hidden';
    ourServicesTooltip.style.opacity = '0';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const orderButton = document.getElementById('orderButton');
  const nameInput = document.getElementById('nameInput');
  const phoneInput = document.getElementById('phone');

  orderButton.addEventListener('click', function(event) {
    // Проверяем, что все обязательные поля заполнены
    if (nameInput.value.trim() === '' || phoneInput.value.trim() === '') {
      alert('Пожалуйста, заполните все обязательные поля.');
      event.preventDefault(); // Предотвращаем отправку формы
    } else {
      // Все обязательные поля заполнены, выводим сообщение о успешном оформлении заказа
      alert('Ваш заказ успешно оформлен!');
      // Можно добавить здесь код для отправки данных на сервер или других действий
    }
  });
});
//Скрипт потеряшка
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.frame-f1');
  const scrollStep = container.clientWidth; // Шаг прокрутки равен ширине контейнера

  // Настройка кнопки слайдера влево
  document.querySelector('.slider-btn-3c').addEventListener('click', function() {
      scrollToDirection('left');
  });

  // Настройка кнопки слайдера вправо
  document.querySelector('.slider-btn-3f').addEventListener('click', function() {
      scrollToDirection('right');
  });

  function scrollToDirection(direction) {
      const currentScrollLeft = container.scrollLeft;
      let newScrollLeft;

      if (direction === 'left') {
          newScrollLeft = currentScrollLeft - scrollStep;
      } else {
          newScrollLeft = currentScrollLeft + scrollStep;
      }

      container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
  }
});
//Конец потеряшки

  