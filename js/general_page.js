/*Встановлюємо стартовий індекс слайда по замовчуваннюі*/
let slideIndex = 1;
/*Викликаємо функцію яка реалізована нижче*/
showSlides(slideIndex);

/*Збільшуємо індекс 1 — показуємо наступний слайд*/
function nextSlide() {
    showSlides(slideIndex += 1);
}
/* Зменшуємо індекс на 1 — показуємо попередній слайд*/
function previousSlide() {
    showSlides(slideIndex -= 1);
}
/*Встановлюємо поточний слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}
/*Функція перелистування*/
function showSlides(n) {
    /*Звертаємось до картинок з класу "item", тобто до картинок */
    let slides = document.getElementsByClassName("item");
    /*Перевіряємо кількість слайдів*/
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    /*Проходимо по кожному слайді через цикл for*/
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /*Робимо елемент блочним*/
    slides[slideIndex - 1].style.display = "block";
}
