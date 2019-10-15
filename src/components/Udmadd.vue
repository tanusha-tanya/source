<template>
     <main class="main">
         <div class="container">
            <a class="return" @click.prevent="backform()" v-if="secondform">
               <img src="assets/svg/arrow.svg" width="15" height="12">
               <span>вернуться назад</span>
            </a>
            <a class="return" href="/udm" v-if="success">
               <img src="assets/svg/arrow.svg" width="15" height="12">
               <span>на главную</span>
            </a>
            <h1 class="form-title" v-if="firstform||secondform">Историез ватсан</h1>   
            <div class="form-red"  v-if="firstform||secondform">
               <span>"Удмуртиысь ошмесъёс" лулчеберет порталлэсь
               </span>
            </div>                          
            <form v-if="firstform">                  
                  <div class="form-block">
                     <h2 class="form-h2">Ужрад яке адями сярысь</h2>
                     <input type="text" placeholder="Имя*" class="form-input" v-model="autor.name">
                     <input type="text" placeholder="Фамилия*" class="form-input" v-model="autor.lastname">
                     <input type="text" placeholder="Город или район*" class="form-input"  v-model="autor.city">
                     <textarea placeholder="информация об атворе" class="form-textarea" v-model="autor.information"></textarea>
                  </div>                  
                  <div class="form-block">
                     <h2 class="form-h2">Укажите контактную информацию</h2>
                     <input type="text" placeholder="номер телефона*" class="form-input" v-model="autor.phone">
                     <div class="form-description">Укажите номер телефона для связи с редакцией</div>
                     <input type="text" placeholder="e-mail*" class="form-input" v-model="autor.email">
                     <div class="form-description">Укажите e-mail для связи с редакцией</div>
                     <div class="form-flex">
                        <input type="text" placeholder="ссылка на соц. сеть" class="input-short form-input"  v-model="autor.link">
                        <button type="submit" class="form-addbutton" @click.prevent=""></button>
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
                        <button type="submit" class="form-submit" @click.prevent="nextform()">Отправить на модерацию</button>
                     </div>
                  </div>
               </form>
               <form v-if="secondform">
                     <div class="form-block">
                        <h2 class="form-h2">Вералэ историдэс</h2>
                        <input type="text" placeholder="Йыръян*" class="form-input"  v-model="story.title">
                        <textarea placeholder="Верандылэн текстэз*" class="form-textarea" v-model="story.text"></textarea>                        
                     </div>
                     <div class="form-block">
                        <h2 class="form-h2">Хронологизэ ватсалэ</h2>
                        <div class="form-flex">
                           <textarea placeholder="Нуналзэ пусъе но вакчияк со сярысь гожтэ" class="form-textarea textarea-short" v-model="story.date"></textarea> 
                           <button type="submit" class="form-addbutton form-addbutton__long" @click.prevent=""></button>    
                        </div>   
                        <div class="form-description">Ужрадъёслэсь радызъя ортчемзэс гожтэ. Кылсярысь, 1980-тӥ ар – Москваын Гужем Олимпи Шудонъёс ортчизы. Выль нуналэз но со сярысь вакчияк веранэз ватсан понна «+» кнопка вылэ зӥбе.</div>                   
                     </div>
                     <div class="form-block">
                        <h2 class="form-h2">Файлъёс ватсалэ</h2>
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
                        <div class="form-description">Текстэн файлъёстэс .doc форматэн юнматэ, туспуктэмъёстэс - .jpg яке .png форматэн, аудиоматериалъёстэс - .mp3 форматэн, озьы ик видео вылэ чӧлскон пуктэ. Текстэн файллэн быдӟалаез 20 мб луыны быгатэ, туспуктэмъёслэн – 20 мб, аудиоматериалъёслэн – 20 мб. Тужгес троссэ 10 файл ватсаны луэ.</div>                   
                     </div>   
                     <div class="form-block">
                           <div class="or">яке</div>
                     </div>
                     <div class="form-block">
                        <h2 class="form-h2">Чӧлсконъёс пуктэ</h2>
                        <div class="form-flex">
                        <input type="text" placeholder="Ужкагаз вылэ чӧлскон" class="input-short form-input" v-model="link.doc">
                        <button type="submit" class="form-addbutton" @click.prevent=""></button>
                     </div>
                     <div class="form-flex">
                        <input type="text" placeholder="Туспуктэм вылэ чӧлскон" class="input-short form-input"  v-model="link.pick">
                        <button type="submit" class="form-addbutton" @click.prevent=""></button>
                     </div>
                     <div class="form-flex">
                        <input type="text" placeholder="ссылка на аудио" class="input-short form-input" v-model="link.audio">
                        <button type="submit" class="form-addbutton" @click.prevent=""></button>
                     </div>
                     <div class="form-flex">
                        <input type="text" placeholder="Аудио вылэ чӧлскон" class="input-short form-input" v-model="link.video">
                        <button type="submit" class="form-addbutton" @click.prevent=""></button>
                     </div> 
                     <div class="form-description">Укажите ссылку на видео, которое расположено на youtube.com или vimeo.com. Для добавления нескольких ссылок нажмите на кнопку “Плюс”.</div>                                       
                     </div>
                     <div class="form-flex-big">
                     <div class="form-block">
                        <a class="return return__center" @click.prevent="backform()">
                           <img src="assets/svg/arrow.svg" width="15" height="12">
                           <span>вернуться назад</span>
                        </a>
                     </div>
                     <div class="form-block">
                        <button type="submit" class="form-submit" @click.prevent="addSuccess()">Продолжить</button>
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
      success: false,      
      autor:{
         name:'',
         lastname:'',
         city:'',
         information:'',
         phone:'',
         email:'',
         link: ''
      },
      agreesoc: false,
      agreeagree: false,
      agreeinfo: false,
      story:{
         title:'',
         text:'',
         date:''
      },
      link:{
        doc: '',
        pick: '',
        audio: '',
        video: '',
      }
    }    
  },
   methods:{
      nextform(){
         this.firstform = false;
         this.secondform = true;
         window.scrollTo(200,0)
      },
      addSuccess(){
         this.secondform = false;
         this.firstform = false;
         this.success = true;
         window.scrollTo(200,0)
      },
      backform(){
         this.firstform = true;
         this.secondform = false;         
         window.scrollTo(200,0)
      }
   }
}  
</script>