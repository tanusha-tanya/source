<template>
     <main class="main">
         <div class="container">
            <a class="return" @click.prevent="backform()" v-if="secondform">
               <img src="assets/svg/arrow.svg" width="15" height="12">
               <span>{{udmDetected?"берен берытсконо":"вернуться назад"}}</span>
            </a>
            <a class="return" href="/" v-if="success">
               <img src="assets/svg/arrow.svg" width="15" height="12">
               <span>на главную</span>
            </a>
            <h1 class="form-title" v-if="firstform||secondform">
               {{udmDetected?'Историез ватсан':'Добавление истории'}}</h1>    
            <div class="form-red"  v-if="firstform||secondform">
               <span v-if="!udmDetected">Культурного портала родники удмуртии</span>
               <span v-else>Удмуртилэн ошмесъёсызлэн лулчеберет шыкысазы</span>
            </div>  
            <form action="https://postmail.invotes.com/send" method="post" v-if="firstform">                                     
                     <div class="form-block">
                        <h2 class="form-h2">{{udmDetected?'Историез ватсан':'Расскажите об авторе'}}</h2>
                        <span class="input-wrap">
                           <input
                              type="text"
                              :placeholder="udmDetected?'Нимыз*':'Имя*'"
                              class="form-input"
                              :class="{invalid: ($v.autor.name.$dirty && !$v.autor.name.required)}"                           
                              name="autorname" 
                              v-model.trim="autor.name" 
                              > 
                           <div class="form-error" v-if="$v.autor.name.$dirty && !$v.autor.name.required">
                              {{udmDetected?'Одно гожтоно чуръёс':'Обязательное поле'}}</div> 
                        </span>

                        <span class="input-wrap">                       
                           <input 
                              type="text"
                              :placeholder="udmDetected?'Фамилиез*':'Фамилия*'"                              
                              class="form-input" 
                              :class="{invalid: ($v.autor.lastname.$dirty && !$v.autor.lastname.required)}" 
                              name="autorlastname" 
                              v-model.trim="autor.lastname"
                              >
                               <div class="form-error" v-if="$v.autor.lastname.$dirty && !$v.autor.lastname.required">
                              {{udmDetected?'Одно гожтоно чуръёс':'Обязательное поле'}}</div> 
                        </span>

                        <span class="input-wrap">
                           <input 
                              type="text" 
                              :placeholder="udmDetected?'Кар яке ёрос*':'Город или район*'"                     
                              :class="{invalid: ($v.autor.city.$dirty && !$v.autor.city.required)}" 
                              class="form-input"
                              name="autorcity"
                              v-model.trim="autor.city"
                           >
                            <div class="form-error" v-if="$v.autor.city.$dirty && !$v.autor.city.required">
                             {{udmDetected?'Одно гожтоно чуръёс':'Обязательное поле'}}</div>
                        </span>
                        <span class="input-wrap">
                           <textarea 
                              :placeholder="udmDetected?'Гожтӥсез сярысь ивортон*':'Информация об авторе*'" 
                              class="form-textarea"
                              name="autorinformation" 
                              :class="{invalid: ($v.autor.information.$dirty && !$v.autor.information.required)}" 
                              v-model.trim="autor.information">                             
                           </textarea>
                            <div class="form-error" v-if="$v.autor.information.$dirty && !$v.autor.information.required">
                              {{udmDetected?'Одно гожтоно чуръёс':'Обязательное поле'}}</div>
                        </span>
                     </div>                  
                     <div class="form-block">
                        <h2 class="form-h2">{{udmDetected?'Гожтӥсез сярысь ивортон':'Укажите контактную информацию'}}</h2>
                        <span class="input-wrap">
                           <input 
                              type="text"
                              :placeholder="udmDetected?'Телефон номер*':'Номер телефона*'" 
                              id="phone"
                              class="form-input" 
                              :class="{invalid: ($v.autor.phone.$dirty && !$v.autor.phone.required)}" 
                              name="autorphone" 
                              v-model.trim="autor.phone"
                              v-mask="'+#(###) #######'"
                           >
                           <div class="form-error" v-if="$v.autor.phone.$dirty && !$v.autor.phone.required">
                              {{udmDetected?'Одно гожтоно чуръёс':'Обязательное поле'}}</div>    
                        </span>                  
                        <div class="form-description" v-if="!udmDetected">Укажите номер телефона для связи с редакцией</div>
                        <div class="form-description" v-else>Редакциен герӟаськон понна телефон номердэс гожтэ</div>
                        <span class="input-wrap">
                           <input type="text"
                              placeholder="e-mail*"
                              class="form-input"
                              name="autoremail"
                              :class="{invalid: ($v.autor.email.$dirty && !$v.autor.email.required) ||
                              ($v.autor.email.$dirty && !$v.autor.email.email)}" 
                              v-model.trim="autor.email"
                           >
                           <div class="form-error" v-if="$v.autor.email.$dirty && !$v.autor.email.required">
                               {{udmDetected?'Одно гожтоно чуръёс':'Обязательное поле'}}</div>
                           <div class="form-error" v-if="$v.autor.email.$dirty && !$v.autor.email.email && $v.autor.email.required">
                             {{udmDetected?'Гожтэ шонер валатон':'Введите корректное значение'}}</div>
                        </span>
                        <div class="form-description" v-if="!udmDetected">Укажите e-mail для связи с редакцией</div> 
                        <div class="form-description" v-else>Редакциен герӟаськыны e-mail гожтэ</div>
                        <div class="form-flex" v-for="link in autor.links" :key="link">                            
                           <input
                             type="text"
                             :placeholder="udmDetected?'Мерлыко вотэс вылэ чӧлсконпус*':'Ссылка на соц. сеть*'" 
                             class="input-short form-input autor-soclink" 
                             :name="'autorlink'+link"                                                                 
                           >                           
                           <button type="button" class="form-addbutton" @click.prevent="pushLinks()"></button>
                        </div>                        
                        <div class="checkbox-block">
                           <input
                              type="checkbox"
                              id="agree-soc"
                              class="input-checkbox"
                              v-model="autor.agreesoc"
                              name="agreesoc"                              
                           >
                           <label for="agree-soc" class="checkbox-label" v-if="!udmDetected" > Разместить ссылку на персональную страницу в соц. сети на сайте</label>
                           <label for="agree-soc" class="checkbox-label" v-else> Ас бам вылэ чӧлсконпусэз сайтэ пуктыны</label>
                        </div>
                     </div>
                     <div class="form-block">                        
                        <h2 class="form-h2">{{udmDetected?'Гожтӥсьлэсь туспуктэмзэ юнматэ':'Прикрепите фото автора '}}</h2>
                        <div class="file-block">
                           <input type="file" class="file-input" id="autorpicture"  @change="previewFiles($event)" name="autorpicture" accept="image/jpeg,image/png,image/gif">
                           <label class="file-label" for="autorpicture" v-if="autorpick.length <= 0">
                              <img class="form-image" src="assets/svg/photo.svg" width="42" height="34">
                              <span>{{udmDetected?'Туспуктэм':'Фото'}}</span>
                           </label>
                           <div class="filename" v-else>
                              <img class="prevew" src="assets/svg/photo.svg" width="24" height="24"> 
                              {{autorpick}}
                              <a href="#" class="delete" @click.prevent="deletePick()">
                                 <img src="assets/svg/redcross.svg" width="9" height="9"> 
                              </a>
                           </div>
                        </div>
                        <div class="form-description" v-if="!udmDetected">Прикрепляйте фотоматериалы в формате .jpg или .png. Максимальный размер изображения 20 мб.</div>
                        <div class="form-description" v-else>Прикрепляйте фотоматериалы в формате .jpg или .png. Максимальный размер изображения 20 мб.  – Туспуктэмъёсты .jpg яке .png форматэн пуктэ. Тусъетлэн быдӟалаез троссэ 20 мб.</div>
                     </div>                     
                     <div class="form-block">
                        <div class="checkbox-block">
                           <input
                              type="checkbox" 
                              id="agree-agree" 
                              class="input-checkbox"                              
                              name="agreeagree"
                              v-model="autor.agreeagree"                              
                           >
                           <label for="agree-agree" class="checkbox-label" v-if="!udmDetected"> Я согласен с обработкой персональных данных согласно условиям <a href="/agreement" targe="_blank">Пользовательского соглашения</a></label>
                           <label for="agree-agree" class="checkbox-label" v-else> Мон соглаш ачим сярысь ивортонэн ужаны <a href="/agreement" targe="_blank">Пользователен тупанкыллэн куронъёсызъя</a></label>  
                           <div class="checkbox-error" v-if="$v.autor.agreeagree.$dirty && !$v.autor.agreeagree.required">
                              {{udmDetected?'Одно гожтоно чуръёс':'Обязательное поле'}}</div> 
                        </div>
                        <div class="checkbox-block">
                           <input 
                              type="checkbox"
                              id="agree-info"
                              class="input-checkbox"                              
                              name="agreeinfo" 
                              v-model="autor.agreeinfo"                              
                           >
                           <label for="agree-info" class="checkbox-label" v-if="!udmDetected"> Я согласен с публикацей истории и сопутствующих к ней материалов и дополнительной информации</label> 
                           <label for="agree-info" class="checkbox-label" v-else> Мон соглаш историез но соин герӟаськем материалъёсты но ватсаса ивортодэтэз шараянэн</label> 
                           <div class="checkbox-error" v-if="$v.autor.agreeinfo.$dirty && !$v.autor.agreeinfo.required">
                              {{udmDetected?'Одно гожтоно чуръёс':'Обязательное поле'}}</div> 
                        </div>
                     </div>
                     <div class="form-flex-big">                     
                        <div class="form-block">
                           <button type="button" class="form-submit" @click.prevent="nextform()">
                              {{udmDetected?'Азьланьтыны':'Продолжить'}}
                           </button>
                        </div>
                     </div>
               </form>
               <form action="https://postmail.invotes.com/send" method="post" v-if="secondform">                 
                     <div class="form-block">
                        <h2 class="form-h2">{{udmDetected?'Вералэ историдэс':'Расскажите историю'}}</h2>
                        <span class="input-wrap">
                           <input type="text"
                              :placeholder="udmDetected?'Йыръян*':'Заголовок*'" 
                              class="form-input" 
                              :class="{invalid: ($v.story.title.$dirty && !$v.story.title.required)}"                      
                              name="storytitle" 
                              v-model.trim="story.title"                              
                           >
                           <div class="form-error" v-if="$v.story.title.$dirty && !$v.story.title.required">
                              {{udmDetected?'Одно гожтоно чуръёс':'Обязательное поле'}}</div>                            
                        </span>
                        <span class="input-wrap">
                           <textarea 
                              :placeholder="udmDetected?'Верандылэн текстэз*':'Текст истории*'"  
                              class="form-textarea"
                              :class="{invalid: ($v.story.text.$dirty && !$v.story.text.required)}" 
                              name="storytext"
                            v-model="story.text">
                           </textarea>
                           <div class="form-error" v-if="$v.story.text.$dirty && !$v.story.text.required">
                              {{udmDetected?'Одно гожтоно чуръёс':'Обязательное поле'}}</div>                             
                        </span>                    
                     </div>
                     <div class="form-block">
                        <h2 class="form-h2">{{udmDetected?'Хронологизэ ватсалэ':'Добавьте хронологию'}}</h2>
                        <div class="form-flex" v-for="storyDate in storyDates" :key="storyDate">
                           <textarea
                              :placeholder="udmDetected?'Нуналзэ пусъе но вакчияк со сярысь гожтэ':'Дата и описание'" 
                              :name="'storydate'+storyDate"
                              class="form-textarea textarea-short"
                           >
                           </textarea> 
                           <button type="button" class="form-addbutton form-addbutton__long" @click.prevent="pushdate()"></button>    
                        </div>
                        <div class="form-description" v-if="!udmDetected">Укажите хронологию событий. Например, 1980 - Проходили Летние Олимпийские Игры в Москве. Для того чтобы добавить новую дату и описание нажмите кнопку “Плюс”.</div>                   
                        <div class="form-description" v-else>Ужрадъёслэсь радызъя ортчемзэс гожтэ. Кылсярысь, 1980-тӥ ар – Москваын Гужем Олимпи Шудонъёс ортчизы. Выль нуналэз но со сярысь вакчияк веранэз ватсан понна «+» кнопка вылэ зӥбе.</div>
                     </div>                     
                     <div class="form-block">
                        <h2 class="form-h2">{{udmDetected?'Чӧлсконъёс пуктэ':'Укажите ссылки'}}</h2>
                        <div class="form-flex" v-for="linkdoc in linkdocs" :key="linkdoc">
                           <input type="text"
                              :placeholder="udmDetected?'Ужкагаз вылэ чӧлскон':'Ссылка на документ'" 
                              :name="'linkdoc'+linkdoc" 
                              class="input-short form-input"
                           >
                           <button type="button" class="form-addbutton" @click.prevent="pushdoc()"></button>
                        </div>
                        <div class="form-flex" v-for="linkpick in linkpicks" :key="linkpick">
                           <input type="text"
                              :placeholder="udmDetected?'Туспуктэм вылэ чӧлскон':'ссылка на фото'" 
                              :name="'linkpick'+linkpick"
                              class="input-short form-input" 
                           >
                           <button type="button" class="form-addbutton" @click.prevent="pushpick()"></button>
                        </div>
                        <div class="form-flex" v-for="linkaudio in linkaudios" :key="linkaudio">
                           <input type="text" 
                              :placeholder="udmDetected?'Аудио вылэ чӧлскон':'Ссылка на аудио'" 
                              :name="'linkaudio'+linkaudio" 
                              class="input-short form-input" 
                           >
                           <button type="button" class="form-addbutton" @click.prevent="pushaudio()"></button>
                        </div>
                        <div class="form-flex" v-for="linkvideo in linkvideos" :key="linkvideo">
                           <input
                              type="text"
                              :placeholder="udmDetected?'Видео вылэ чӧлскон':'Ссылка на видео'" 
                              :name="'linkvideo'+linkvideo"
                              class="input-short form-input" 
                           >
                           <button type="button" class="form-addbutton" @click.prevent="pushvideo()"></button>
                        </div> 
                        <div class="form-description" v-if="!udmDetected">Укажите ссылку на видео, которое расположено на youtube.com или vimeo.com. Для добавления нескольких ссылок нажмите на кнопку “Плюс”.</div>                                       
                        <div class="form-description" v-else>youtube.com яке vimeo.com сайтъёсы интыям видео вылэ чӧлскон пуктэ. Кӧня ке чӧлсконъёс пуктон понна «+» кнопка вылэ зӥбе.</div>
                     </div>
                      <div class="form-block">
                        <div class="form-attention">
                           <div class="attention-title">{{udmDetected?'Туж кулэез!':'ВАЖНО!'}}</div>
                           <div class="attention-text" v-if="!udmDetected">После отправки истории и ее последующей модерации 
                              Вы можете дополнить или изменить историю. Для этого заново добавьте свою историю,
                              выберите статус истории - Редактирование истории. Далее укажите название истории,
                              которую хотите отредактировать, заполните поля и отправьте отредактированную
                              историю на модерацию.
                           </div>
                           <div class="attention-text" v-else>Историез келям но сое эскерем бере 
                              Тӥ историез будэтыны яке воштыны быгатӥськоды. Со понна историдэс
                              выльысь ватсалэ, быръе историлэсь инлыксэ – Историез тупатъян. 
                              Собере тупатъяно историлэсь нимзэ пусъе, чуръёсты гожъялэ но 
                              тупатъям историез эскерыны лэзе.
                           </div>
                        </div>
                     </div>
                     <div class="form-flex-big">
                     <div class="form-block">
                        <a class="return return__center" @click.prevent="backform()">
                           <img src="assets/svg/arrow.svg" width="15" height="12">
                           <span>{{udmDetected?"берен берытсконо":"вернуться назад"}}</span>
                        </a>
                     </div>                     
                     <div class="form-block">
                        <button type="submit" class="form-submit" @click.prevent="addSuccess()">Отправить на модерацию</button>
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

import {required, email, minLength} from 'vuelidate/lib/validators'
import {mask} from 'vue-the-mask'

export default { 
   directives: {mask},    
   validations:{
      autor:{
         name: {required},
         lastname:{required},
         city:{required},
         information:{required},
         phone:{required},         
         email:{required, email},
         agreeagree:{required},
         agreeinfo:{required},          
      }, 
      story:{
         title: {required},
         text: {required},
      }    
   }, 
   computed:{
    udmDetected:function(){ 
      let path = this.$router.currentRoute.name;     
      if(path == "udmadd"){      
        return true
      }
      else{
         return false
      }   
    }
  },  
   data(){
    return{ 
      autorpick: '',
      storyDates: [1],
      linkdocs: [1], 
      linkpicks: [1],  
      linkaudios: [1],
      linkvideos: [1],  
      firstform: true,
      secondform: false,
      success: false,      
      autor:{
         name:'',
         lastname:'',
         city:'',
         information:'',
         phone:'',
         agreesoc: false,
         email:'',
         links: [1],  
         agreeagree: '',
         agreeinfo: '', 
         soclinkContent: []    
      },            
      story:{
         title:'',
         text:'',
         date:'',
         link:{
            doc: '',
            pick: '',
            audio: '',
            video: '',
         }
      },
      dataForm:{
         autor: '',         
         story: ' '
      },         
    }    
  },   
   methods:{ 
      pushLinks(){
         let lastId = this.autor.links.length;
         let enough = 5;
         if(lastId < enough){
            this.autor.links.push(lastId+1)
         } 
         else{
            alert(`Вы не можете добавить более ${enough} ссылок`)
         }        
      },   
      pushdate(){
         let lastId = this.storyDates.length;        
         this.storyDates.push(lastId+1)          
      }, 
      pushdoc(){
         let lastId = this.linkdocs.length;        
         this.linkdocs.push(lastId+1)          
      }, 
      pushpick(){
         let lastId = this.linkpicks.length;        
         this.linkpicks.push(lastId+1)          
      },
      pushaudio(){
         let lastId = this.linkaudios.length;        
         this.linkaudios.push(lastId+1)          
      },  
      pushvideo(){
         let lastId = this.linkvideos.length;        
         this.linkvideos.push(lastId+1)          
      },    
      previewFiles(event) {
         let fileName = event.target.value.split('/').pop().split('\\').pop();        
         this.autorpick = fileName;
      },
      deletePick(){
         this.autorpick = '';
         document.querySelector('#autorpicture').value  = '';        
      },  
      nextform(){         
         if(this.$v.autor.$invalid){
            this.$v.autor.$touch()            
            return
         }  
         let autorSoclinkCollection = document.querySelectorAll('.autor-soclink'); 
         let links = []        
         for(let i = 0; i < autorSoclinkCollection.length; i++){            
            links.push(autorSoclinkCollection[i].value)
         } 
         this.autor.soclinkContent = links;                 
         this.dataForm.autor = this.autor;                              
         this.firstform = false;
         this.secondform = true;         
         window.scrollTo(200,0)
      },
       addSuccess(){ 
        if(this.$v.story.$invalid){
            this.$v.story.$touch()             
            return
         } 
        this.dataForm.story = this.story   
        let name = this.dataForm.autor.name; 
        let lastname = this.dataForm.autor.lastname; 
        let city = this.dataForm.autor.city;
		  let information = this.dataForm.autor.information;
        let phone = this.dataForm.autor.phone;
		  let email = this.dataForm.autor.email;
        let links = this.dataForm.autor.links.length;        
        let agreesoc = this.dataForm.autor.agreesoc == true? 'Да': 'Нет';        
		  let title = this.dataForm.story.title;
		  let text = this.dataForm.story.text;
		  let date = this.dataForm.story.date;
		  let doc = this.dataForm.story.link.doc;
		  let pick = this.dataForm.story.link.pick;
		  let audio = this.dataForm.story.link.audio;
		  let video = this.dataForm.story.link.video ;
        let autorlinks = this.autor.soclinkContent;
        let autorlinksText = '';
                  
         for(let i = 0; i < autorlinks.length; i++){
            autorlinksText += `${i+1}: ${autorlinks[i]} `
         }       
        
        let data_js = {
            "access_token": "n2cbf58kwnmnszvhdb7goest"
        };       

    function js_send() {        
        var request = new XMLHttpRequest();       

        var subject = 'Заполнена форма на сайте Родники Удмуртии';
        var message = `Имя автора: ${name} \nФамилия автора: ${lastname}\nГород автора: ${city}\nИнформация об авторе: ${information}\nТелефон автора: ${phone}\nE-mail автора: ${email}\nСсылка на соцсети: ${autorlinksText}\nРазместить ссылку на соцсети: ${agreesoc}\nЗаголовок истории: ${title} \nТекст истории: ${text} \nДата истории: ${date} \n Ссылка на документ: ${doc} \nСссылка на картинку: ${pick} \nСссылка на аудио: ${audio}\nСссылка на видео: ${video}`;
        data_js['subject'] = subject;
        data_js['text'] = message;
        var params = toParams(data_js);
        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send(params);
        return false;
    }
    js_send()

    function toParams(data_js) {
        var form_data = [];
        for ( var key in data_js ) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
        }
        return form_data.join("&");
    }      
         this.secondform = false;
         this.firstform = false;
         this.success= true;         
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
.return span{
   cursor: pointer;
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
.form-red{
    color: #FF4646;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 14px;
    font-family: 'PT_Root_UI_Bold', Arial, Helvetica, sans-serif;
     display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
   .form-red:before{
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        background: #FF4646;
        transform: rotate(-45deg);   
        margin-right: 15px;     
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
      font-family: 'PT_Root_UI_Bold', Arial, Helvetica, sans-serif;
      font-weight: 600;
      transition: background .3s;
  }
  .form-input::placeholder{
     text-transform: uppercase;
     font-family: 'PT_Root_UI_Bold', Arial, Helvetica, sans-serif;
     font-weight: 600;
     letter-spacing: 0.1em;  
  }
   .form-input:hover,  .form-input:focus{
      outline: none;
   }

 .form-input.invalid{
   background: rgba(255,70,70, 0.3)  
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
      font-family: 'PT_Root_UI_Bold', Arial, Helvetica, sans-serif;
      font-weight: 600;
      transition: background .3s;
  }

.form-textarea.invalid{
   background: rgba(255,70,70, 0.3)  
 }
.form-textarea + .form-error{
   top: 30px;
}
  .form-textarea::placeholder{
     text-transform: uppercase;
     font-family: 'PT_Root_UI_Bold', Arial, Helvetica, sans-serif;
     font-weight: 600;
     letter-spacing: 0.1em;  
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

  .input-wrap{
     position: relative;
     display: block; 
  }
  .form-error{
     color:  #FF4646;
     font-size: 12px;
     line-height: 12px;
     font-family: 'PT_Root_UI_Bold', Arial, Helvetica, sans-serif;
     letter-spacing: 0.1em;
      text-transform: uppercase; 
      position: absolute;
      right: 24px;
       bottom: 20px;  
  }
  @media(min-width:768px){
     .form-error{
         bottom: 30px;
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
    margin: 13px 0 16px 0 ;
    transition: background .3s, opacity .3s; 
}
.form-addbutton__long{
   height: 111px;
}

.form-addbutton:hover, .form-addbutton:focus{
   background: #FF4646;
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
    transition: background .3s;
}

.form-addbutton:hover:before, .form-addbutton:hover:after,
 .form-addbutton:focus:after, .form-addbutton:focus:before{
   background: #FFFFFF;
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
.checkbox-error{
   left: 40px;
   bottom: 20px;
   color:#FF4646;
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

.filename{
   display: flex;
   align-items: center;
}
.prevew{
   margin-right: 8px;
}
.delete{
   margin-left: 5px;
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
   transition: background .3s, color .3s;
}

.form-submit:hover, .form-submit:focus{
   color:  #fff;
   background: #FF4646;
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