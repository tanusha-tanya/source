<template>
     <main class="main">
         <div class="container">
            <div class="return">
               <img src="assets/svg/arrow.svg" width="15" height="12">
               <span>вернуться назад</span>
            </div>
            <h1>Добавление истории</h1>         
            <form>                  
                  <div class="form-block">
                     <h2>Расскажите об авторе</h2>
                     <input type="text" placeholder="Имя*" class="form-input">
                     <input type="text" placeholder="Фамилия*" class="form-input">
                     <input type="text" placeholder="Город или район*" class="form-input">
                     <textarea placeholder="информация об атворе" class="form-textarea"></textarea>
                  </div>
                  <div class="form-block">
                     <h2>Укажите контактную информацию</h2>
                     <input type="text" placeholder="Имя*" class="form-input">
                     <input type="text" placeholder="Фамилия*" class="form-input">
                     <input type="text" placeholder="Город или район*" class="form-input">
                     <textarea placeholder="информация об атворе" class="form-textarea"></textarea>
                  </div>
                  <div class="form-block">
                     <h2>Укажите контактную информацию</h2>
                     <input type="text" placeholder="номер телефона*" class="form-input">
                     <div class="form-description">Укажите номер телефона для связи с редакцией</div>
                     <input type="text" placeholder="e-mail*" class="form-input">
                     <div class="form-description">Укажите e-mail для связи с редакцией</div>
                     <div class="form-flex">
                        <input type="text" placeholder="Город или район*" class="input-short">
                        <button type="submit"></button>
                     </div>
                     <div class="checkbox">
                        <input type="checkbox" id="agree-soc" class="input-short">
                        <label for="agree-soc"> Разместить ссылку на персональную страницу в соц. сети на сайте</label>
                     </div>
                  </div>
                  <div class="form-block">
                     <h2>Прикрепите фото автора</h2>
                     <input type="file" placeholder="Имя*">
                     <label><img class="history-image" src="assets/svg/photo.svg" width="42" height="34"></label>
                     <div class="form-description">Прикрепляйте фотоматериалы в формате .jpg или .png. Максимальный размер изображения 20 мб.</div>
                     <textarea placeholder="информация об атворе"></textarea>
                  </div>
                  <div class="form-attention">
                     <div class="attention-title">Важно!</div>
                     <div class="attention-text">После отправки истории и ее последующей модерации 
                     Вы можете дополнить или изменить историю. Для этого заново добавьте свою историю,
                      выберите статус истории - Редактирование истории. Далее укажите название истории,
                       которую хотите отредактировать, заполните поля и отправьте отредактированную
                        историю на модерацию.
                     </div>
                  </div>
                  <div class="form-block">
                     <div class="checkbox">
                        <input type="checkbox" id="agree-agree" class="input-short">
                        <label for="agree-agree"> Я согласен с обработкой персональных данных согласно условиям <a href="/agreement">Пользовательского соглашения</a></label>
                     </div>
                     <div class="checkbox">
                        <input type="checkbox" id="agree-info" class="input-short">
                        <label for="agree-info"> Я согласен с публикацей истории и сопутствующих к ней материалов и дополнительной информации</label>
                     </div>
                  </div>
               </form>
            </div>
     </main>
</template>
<style>
   .form-block{
      margin: 42px 0;
   }
  .form-input{
     padding: 19px 16px;
     margin: 16px 0;
     border: 1px solid #F3F3F3;
     display: block;
     width: 100%;
     box-sizing: border-box;
  }
  .form-textarea{
     padding: 19px 16px;
     margin: 16px 0;
     border: 1px solid #F3F3F3;
     display: block;
     width: 100%;
     box-sizing: border-box;
     height: 223px;
  }
</style>