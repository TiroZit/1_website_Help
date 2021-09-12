const burger = document.querySelector('.burger');
if (burger) {
   const menu = document.querySelector('.menu');
   burger.addEventListener("click", function(e) {
      document.body.classList.toggle('lock');
      burger.classList.toggle('active');
      burger.classList.toggle('burger--active');
      menu.classList.toggle('active');
   });
}