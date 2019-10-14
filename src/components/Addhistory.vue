<template>
     <main class="main">
         <div class="container">
            <a class="return" href="/" v-if="firstform||secondform">
               <img src="assets/svg/arrow.svg" width="15" height="12">
               <span>вернуться назад</span>
            </a>
            <a class="return" href="/" v-if="success">
               <img src="assets/svg/arrow.svg" width="15" height="12">
               <span>на главную</span>
            </a>
            <h1 class="form-title" v-if="firstform||secondform">Добавление истории</h1>                    
            <form v-if="firstform">                  
                  <div class="form-block">
                     <h2 class="form-h2">Расскажите об авторе</h2>
                     <input type="text" placeholder="Имя*" class="form-input" v-model="autorname">
                     <input type="text" placeholder="Фамилия*" class="form-input" v-model="autorlastname">
                     <input type="text" placeholder="Город или район*" class="form-input"  v-model="city">
                     <textarea placeholder="информация об атворе" class="form-textarea" v-model="autorinformation"></textarea>
                  </div>                  
                  <div class="form-block">
                     <h2 class="form-h2">Укажите контактную информацию</h2>
                     <input type="text" placeholder="номер телефона*" class="form-input" v-model="phone">
                     <div class="form-description">Укажите номер телефона для связи с редакцией</div>
                     <input type="text" placeholder="e-mail*" class="form-input" v-model="email">
                     <div class="form-description">Укажите e-mail для связи с редакцией</div>
                     <div class="form-flex">
                        <input type="text" placeholder="ссылка на соц. сеть" class="input-short form-input"  v-model="link">
                        <button type="submit" class="form-addbutton"></button>
                     </div>
                     <div class="checkbox-block">
                        <input type="checkbox" id="agree-soc" class="input-checkbox" v-model="agreesoc">
                        <label for="agree-soc" class="checkbox-label"> Разместить ссылку на персональную страницу в соц. сети на сайте</label>
                     </div>
                  </div>
                  <div class="form-block">
                     <h2 class="form-h2">Прикрепите фото автора</h2>
                     <div class="file-block">
                        <input type="file" class="file-input" id="picture">
                        <label class="file-label" for="picture">
                           <img class="form-image" src="assets/svg/photo.svg" width="42" height="34">
                           <span>Фото</span>
                        </label>
                        <div class="filename"></div>
                     </div>
                     <div class="form-description">Прикрепляйте фотоматериалы в формате .jpg или .png. Максимальный размер изображения 20 мб.</div>
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
                     <div class="checkbox-block">
                        <input type="checkbox" id="agree-agree" class="input-checkbox" v-model="agreeagree">
                        <label for="agree-agree" class="checkbox-label"> Я согласен с обработкой персональных данных согласно условиям <a href="/agreement" targe="_blank">Пользовательского соглашения</a></label>
                     </div>
                     <div class="checkbox-block">
                        <input type="checkbox" id="agree-info" class="input-checkbox" v-model="agreeinfo">
                        <label for="agree-info" class="checkbox-label"> Я согласен с публикацей истории и сопутствующих к ней материалов и дополнительной информации</label>
                     </div>
                  </div>
                  <div class="form-flex-big">
                     <div class="form-block">
                        <a class="return return__center" href="/">
                           <img src="assets/svg/arrow.svg" width="15" height="12">
                           <span>вернуться назад</span>
                        </a>
                     </div>
                     <div class="form-block">
                        <button type="submit" class="form-submit">Отправить на модерацию</button>
                     </div>
                  </div>
               </form>
               <form v-if="secondform">
                     <div class="form-block">
                        <h2 class="form-h2">Расскажите историю</h2>
                        <input type="text" placeholder="Заголовок*" class="form-input"  v-model="title">
                        <textarea placeholder="Текст истории*" class="form-textarea" v-model="text"></textarea>                        
                     </div>
                     <div class="form-block">
                        <h2 class="form-h2">Добавьте хронологию</h2>
                        <div class="form-flex">
                           <textarea placeholder="Дата и описание" class="form-textarea textarea-short" v-model="text"></textarea> 
                           <button type="submit" class="form-addbutton form-addbutton__long"></button>    
                        </div>   
                        <div class="form-description">Укажите хронологию событий. Например, 1980 - Проходили Летние Олимпийские Игры в Москве. Для того чтобы добавить новую дату и описание нажмите кнопку “Плюс”.</div>                   
                     </div>
                     <div class="form-block">
                        <h2 class="form-h2">Прикрепите файлы</h2>
                        <div class="file-flex">
                           <div class="file-block">
                              <input type="file" class="file-input" id="doc">
                              <label class="file-label" for="doc">
                                 <img class="form-image" src="assets/svg/doc.svg" width="42" height="34">
                                 <span>документ</span>
                              </label>                              
                           </div>
                           <div class="file-block">
                              <input type="file" class="file-input" id="pic">
                              <label class="file-label" for="pic">
                                 <img class="form-image" src="assets/svg/photo.svg" width="42" height="34">
                                 <span>Фото</span>
                              </label>                              
                           </div>
                           <div class="file-block">
                              <input type="file" class="file-input" id="audio">
                              <label class="file-label" for="audio">
                                 <img class="form-image" src="assets/svg/audio.svg" width="42" height="34">
                                 <span>аудио</span>
                              </label>                              
                           </div>
                        </div>
                        <div class="form-description">Прикрепите текстовые файлы в формате .doc, фотоматериалы в формате .jpg или .png, аудиоматериалы в формате .mp3, а также ссылки на видео. Максимальный размер текстового файла 20 мб; изображения - 20 мб; аудиофайла - 20 мб. Максимальное количество файлов 10 шт.</div>                   
                     </div>   
                     <div class="form-block">
                           <div class="or">Или</div>
                     </div>
                     <div class="form-block">
                        <h2 class="form-h2">Укажите ссылки</h2>
                        <div class="form-flex">
                        <input type="text" placeholder="ссылка на документ" class="input-short form-input" v-model="linkdoc">
                        <button type="submit" class="form-addbutton"></button>
                     </div>
                     <div class="form-flex">
                        <input type="text" placeholder="ссылка на фото" class="input-short form-input"  v-model="linkpick">
                        <button type="submit" class="form-addbutton"></button>
                     </div>
                     <div class="form-flex">
                        <input type="text" placeholder="ссылка на аудио" class="input-short form-input" v-model="linkaudio">
                        <button type="submit" class="form-addbutton"></button>
                     </div>
                     <div class="form-flex">
                        <input type="text" placeholder="ссылка на видео" class="input-short form-input" v-model="linkvideo">
                        <button type="submit" class="form-addbutton"></button>
                     </div> 
                     <div class="form-description">Укажите ссылку на видео, которое расположено на youtube.com или vimeo.com. Для добавления нескольких ссылок нажмите на кнопку “Плюс”.</div>                                       
                     </div>
                     <div class="form-flex-big">
                     <div class="form-block">
                        <a class="return return__center" href="/">
                           <img src="assets/svg/arrow.svg" width="15" height="12">
                           <span>вернуться назад</span>
                        </a>
                     </div>
                     <div class="form-block">
                        <button type="submit" class="form-submit">Продолжить</button>
                     </div>
                  </div>                  
               </form>
               <div v-if="success" class="success">
                  <h1 class="succsess-title">Спасибо!</h1>
                  <img src="assets/svg/success.svg" class="success-img" width="128" height="128">
                  <div class="success-text">Ваша история успешно создана и отправлена на модерацию. В ближайшее время она будет проверена и возможно отредактирована. Оставайтесь на связи, мы Вам напишем или перезвоним.
                  </div>
               </div> 
            </div>
     </main>
</template>

<script>
export default {
   data(){
    return{
      firstform: true,
      secondform: false,
      success: false
    }
  }
}  
</script>
<style>
.return{
   font-size: 12px;
   line-height: 14px;
   letter-spacing: 0.1em;
   text-transform: uppercase;
   color: #282828;
   font-family: 'PT_Root_UI_Bold', Arial, Helvetica, sans-serif;
   font-weight: 600;
   text-decoration: none;
   display: flex;
   opacity: 0.6;
}
@media(min-width:768px){
   .return{
      font-size: 14px;
      line-height: 14px;
   }
}

.return__center{
   margin-left: 40px
}
@media(min-width:768px){
   .return__center{
      margin: 0;
      justify-content: center;
   }
}
.return img{
   margin-right: 12px;
}
.form-title{
   font-size: 32px;
   line-height: 32px;
   text-align: left;
   font-family: 'TT_Firs_Bold', Arial, Helvetica, sans-serif;
}
@media(min-width:768px){
   .form-title{
      font-size: 48px;
      line-height: 48px;
   }
}
@media(min-width:1024px){
   .form-title{
      font-size: 64px;
      line-height: 64px;
   }
}
.form-h2{
   font-size: 24px;
   line-height: 32px;
   font-family: 'TT_Firs_Bold', Arial, Helvetica, sans-serif;
   text-align: left;
}
@media(min-width:768px){
   .form-h2{
      font-size: 32px;
      line-height: 42px;
      margin-bottom: 35px;
   }
}

   .form-block{
      margin: 42px 0;
      max-width: 400px;
   }
   @media(min-width:768px){
   .form-block{
      margin: 56px 0;
      max-width: 560px;
   }
}
@media(min-width:1024px){
   .form-block{
      margin: 58px 0;
      max-width: 847px;
   }
}
  .form-input{
     padding: 19px 16px;
     margin: 13px 0 16px 0;
     border: 1px solid #F3F3F3;
     display: block;
     width: 100%;
     box-sizing: border-box;
     background: #F3F3F3;
     font-size: 10px;
     height: 48px;
      line-height: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;   
      font-family: 'PT_Root_UI_Bold', Arial, Helvetica, sans-serif;
      font-weight: 600;
  }

  @media(min-width:768px){
   .form-input{
      height: 64px;
      margin-bottom: 24px;
      font-size: 12px;
      line-height: 12px;
      padding: 24px;
   }
}
  
 @media(min-width:1024px){
   .form-input{
      height: 72px
   }
} 
  .form-textarea{
     padding: 19px 16px;
     margin: 16px 0;
     border: 1px solid #F3F3F3;
     display: block;
     width: 100%;
     box-sizing: border-box;
     height: 223px;
     background: #F3F3F3;
     resize: none;
      font-size: 10px;
      line-height: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;   
      font-family: 'PT_Root_UI_Bold', Arial, Helvetica, sans-serif;
      font-weight: 600;
  }
  @media(min-width:768px){
   .form-textarea{
      height: 64px;
      margin-top: 48px;
      font-size: 12px;
      line-height: 12px;
      padding: 24px;
      height: 456px;
   }
}
.textarea-short{
   height: 111px;
   width: calc(100% - 60px);
}
@media(min-width:768px){
.textarea-short{
   height: 184px;
   width: calc(100% - 60px);
}
}
  @media(min-width:1024px){
     .textarea-short{
      width: calc(100% - 150px);
   }
  }
  .form-description{
     font-size: 14px;
      line-height: 20px;
      margin-top: -4px;
      margin-bottom: 23px;
  }
   @media(min-width:768px){
   .form-description{
     margin-top: -20px;
     font-size: 16px;
      line-height: 24px;
      margin-bottom: 50px;
   }
}
@media(min-width:1024px){
   .form-description{   
       margin-top: -14px;  
      margin-bottom: 50px;
   }
}
  .form-flex{
     display: flex;
     justify-content: space-between;
     align-items: center;
  }
  .input-short{
     width: calc(100% - 60px);
  }

@media(min-width:768px){
   .input-short{
      width: calc(100% - 60px);
  }
}
@media(min-width:1024px){
   .input-short{
      width: calc(100% - 150px);
  }
}
.form-addbutton{
   border: 0.444881px solid #FF4646;
    display: block;
    width: 42px;
    height: 48px;
    position: relative;   
    background: #fff;
    outline: none; 
    margin: 13px 0 16px 0   
}
.form-addbutton__long{
   height: 111px;
}
@media(min-width:768px){
   .form-addbutton{      
      height: 64px;    
      margin-bottom: 24px; 
      width: 50px 
   }  
   .form-addbutton__long{
      margin-top: 48px;
      height: 184px;
      margin-bottom: 16px;      
}
}
@media(min-width:1024px){
   .form-addbutton{      
     width: 127px;
      height: 72px;
   }   
    .form-addbutton__long{
      margin-top: 48px;
      height: 184px;
      margin-bottom: 16px;      
} 
}
.form-addbutton:before, .form-addbutton:after {
    content: '';
    display: block;
    position: absolute;
    background: #FF4646;
}

.form-addbutton:before {
    content: '';
    width: 2px;
    height: 12px;
    top: 17px;
    left: 20px;
}
.form-addbutton__long:before{
   top: 50px;
}

@media(min-width:768px){
   .form-addbutton:before {     
      width: 2px;
      height: 24px;
      top: 20px;
      left: 24px;
   }   
   .form-addbutton__long:before {
      top: 80px;
   }
}
@media(min-width:1024px){
   .form-addbutton:before{      
    width: 4px;
    top: 22px;
    left: 60px;
   } 
   .form-addbutton__long:before {
      top: 80px;
   }
}
.form-addbutton:after {
    content: '';
    width: 12px;
    height: 2px;
    top: 22px;
    left: 15px;
}
.form-addbutton__long:after{
   top: 55px;
}
@media(min-width:768px){
   .form-addbutton:after {     
      width: 24px;
      height: 2px;
      top: 30px;
      left: 13px;
   }   
   .form-addbutton__long:after {
      top: 90px;
   }
}
@media(min-width:1024px){
   .form-addbutton:after{      
     height: 4px;
     top: 32px;
     left: 50px;
   } 
   .form-addbutton__long:after {
      top: 90px;
   }
}
.checkbox-block{
   position: relative;
   margin: 15px 0;
}
.input-checkbox{
   position: absolute;
   visibility: hidden;
}
.checkbox-label{
   padding-left: 40px;
   display: block;
   font-size: 14px;
   line-height: 20px;
}
@media(min-width:1024px){
   .checkbox-label{   
     font-size: 16px;
      line-height: 24px;
   } 
}
.checkbox-label:before{
   content: '';
   display: block;
   position: absolute;
   left: 0;
   top: 0;
   width: 24px;
   height: 24px;  
   border: 1px solid #FF4646;      
}
.checkbox-label:after{
   content: '';
   display: block;
   position: absolute;
   height: 10px;
   width: 6px;
   border-right: 0 solid #FF4646;
   border-bottom: 0 solid #FF4646;
   transform: rotate(45deg) skewX(3deg);
   top: 5px;
   left: 8px;
   transition: border .3s;
}
.checkbox-label a{
   color: #FF4646;
   text-decoration: none;
}
.checkbox-label a:hover{
   text-decoration: underline;
}
.input-checkbox:checked + .checkbox-label:after{
   border-right: 3px solid #FF4646;
   border-bottom: 3px solid #FF4646;
}
.file-block{
   position: relative;
   margin: 21px 0 17px 0;
}
@media(min-width:768px){
   .file-block{
      margin: 35px 0 40px 0;
   }
}
.file-input{
   position: absolute;
   visibility: hidden;
}
.file-label{
   border: 1px solid #FF4646;
   display: block;
   width: 128px;
   height: 144px;
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}
@media(min-width:768px){
   .file-label{
      width: 224px;  
   }
}
.file-label span{
   margin-top: 14px;
   letter-spacing: 0.1em;
   text-transform: uppercase;
   font-size: 12px;
   line-height: 12px;
   color: #FF4646;
   font-family: 'PT_Root_UI_Bold', Arial, Helvetica, sans-serif;
   font-weight: 600;
}
.form-attention{
   padding: 5px 0 5px 22px;
   position: relative;
   max-width: 400px;
}

   @media(min-width:768px){
   .form-attention{     
      max-width: 560px;
       padding: 10px 0 10px 40px;
   }
}
@media(min-width:1024px){
   .form-attention{           
      max-width: 847px;
   }
}

.form-attention:before{
   content: '';
   display: block;
   position: absolute;
   left: 0;
   top: 0;
   width: 4px;
   background: #FF4646;
   height: calc(100% - 15px);
}

.form-attention:after{
   content: '';
   display: block;
   position: absolute;
   left: 0;
   bottom: 0;
   width: 4px;
   background: #FF4646;
   height: 4px;
}
.attention-title{
   font-size: 10px;
   line-height: 14px;
   letter-spacing: 0.1em;
   text-transform: uppercase;
   font-family: 'PT_Root_UI_Bold', Arial, Helvetica, sans-serif;
   font-weight: 600;
   margin-bottom: 4px;
}
 @media(min-width:768px){
   .attention-title{
     font-size: 12px;
      line-height: 14px; 
       margin-bottom: 11px;    
   }
}
.attention-text{
   font-size: 14px;
   line-height: 20px;      
}
 @media(min-width:768px){
   .attention-text{
    font-size: 16px;
   line-height: 24px;       
   }
}
.form-submit{
   text-align: center;
   letter-spacing: 0.1em;
   text-transform: uppercase;
   font-size: 12px;
   line-height: 12px;
   font-family: 'PT_Root_UI_Bold', Arial, Helvetica, sans-serif;
   font-weight: 600;
   padding: 16px;
   border: 1px solid #FF4646;
   color:  #FF4646;
   background: #fff;
   width: 272px;
   height: 48px;
   box-sizing: border-box;
   position: relative;
   margin: 0 auto 20px auto;
   display: block;
}
@media(min-width:768px){
   .form-submit{
      font-size: 14px;
   line-height: 14px;
   width: 560px;
   height: 64px;
   margin: 0 auto 72px auto;
   }
}
@media(min-width:1024px){
   .form-submit{
      width: 848px;
      margin: 0 auto 95px auto;
   }
}
@media(min-width:1440px){
   .form-submit{           
      max-width: 624px;
   }
}
@media(min-width:1440px){
   .form-flex-big{
      display: flex;
      align-items: center;
      margin-bottom: 104px;
   }
}
@media(min-width:1440px){
   .form-flex-big .form-block{
      margin: 0;
   }
   .form-flex-big .form-submit{
      margin: 0;
      margin-left: 20px;
   }
}
.file-flex{
   display: flex;
   flex-wrap: wrap;   
    margin: 20px -8px;
}
.file-flex .file-block{
   margin: 8px;
}
.or{
   font-size: 12px;
   line-height: 12px;
   letter-spacing: 0.1em;
   opacity: 0.6;
    font-family: 'PT_Root_UI_Bold', Arial, Helvetica, sans-serif;
   font-weight: 600;
   text-decoration: none;
   text-transform: uppercase;
}
.success-img{
   margin: 20px auto;
   position: relative;
   display: block;
}
@media(min-width: 768px){
   .success-img{
      width: 160px;
      height: 160px;
      margin: 40px auto;
   }
}
@media(min-width: 1024px){
   .success-img{
      width: 235px;
      height: 235px; 
       margin: 45px auto;    
   }
}
.success-text{
   text-align: center;
   margin: 20px auto;
   position: relative;

}
@media(min-width: 1024px){
   .success-text{
      font-size: 20px;
      line-height: 36px; 
      max-width: 736px;   
   }
}

</style>