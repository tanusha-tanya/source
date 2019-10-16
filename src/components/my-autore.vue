<template>
    <div id="aboutautor">
        <div class="form-block">
            <h2 class="form-h2">Расскажите об авторе</h2>
            <input type="text" placeholder="Имя*" class="form-input" name="autorname" v-model="autor.name">
            <input type="text" placeholder="Фамилия*" class="form-input" name="autorlastname"  v-model="autor.lastname">
            <input type="text" placeholder="Город или район*" class="form-input" name="autorcity" v-model="autor.city">
            <textarea placeholder="информация об авторе" class="form-textarea" name="autorinformation" v-model="autor.information"></textarea>
        </div>                  
            <div class="form-block">
                <h2 class="form-h2">Укажите контактную информацию</h2>
                <input type="text" placeholder="номер телефона*" class="form-input" name="autorphone" v-model="autor.phone">
                <div class="form-description">Укажите номер телефона для связи с редакцией</div>
                <input type="text" placeholder="e-mail*" class="form-input" v-model="autor.email">
                <div class="form-description">Укажите e-mail для связи с редакцией</div>
                <div class="form-flex">
                    <input type="text" placeholder="ссылка на соц. сеть" class="input-short form-input"  v-model="autor.link">
                    <button type="button" class="form-addbutton" @click.prevent=""></button>
                </div>
                <div class="checkbox-block">
                    <input type="checkbox" id="agree-soc" class="input-checkbox" v-model="agreesoc">
                    <label for="agree-soc" class="checkbox-label"> Разместить ссылку на персональную страницу в соц. сети на сайте</label>
                </div>
            </div>
            <div class="form-block">
                <h2 class="form-h2">Прикрепите фото автора</h2>
                <div class="file-block">
                    <input type="file" class="file-input" id="picture" @change="previewFiles($event)" >
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
                   <button type="button" class="form-submit" @click.prevent="nextform()">Продолжить</button>
                </div>
            </div>  
     </div>
</template>
<script>
export default {
   name: 'app',
    data(){
    return{
        autor:{
         name:'',
         lastname:'',
         city:'',
         information:'',
         phone:'',
         email:'',
         link: ''
      }
    }
    }        
}
</script>
