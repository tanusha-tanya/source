<template>
    <div id="home" class="home decor-wrap">
        <main>
            <div class="container">
                <div class="history">
                    <h1>{{udmDetected?'Контактъёс':'Контакты'}}</h1>
                    <div class="home-description">
                        <span>мы на связи</span>
                    </div>
                    <div class="project-text" v-if="!udmDetected">                        
                        <p>Вопросы по работе проекта вы можете задать его оператору – Информационному агентству «Удмуртия». Сообщайте о возможных ошибках, предлагайте свои идеи и улучшения – вместе мы сделаем «Родники Удмуртии» интереснее!</p>
                    </div>
                    <div class="project-text" v-else>
                        <p>Ӵектослэн ужамез сярысь юанъёстэс операторезлы сётыны быгатӥськоды – ивортодэтъя «Удмуртия» агентстволы. Ивортэ милемыз кылем янгышъёсмы сярысь, малпанъёстэс но ӵектосмес умоятыны ӵектонъёстэс вералэ – ӵошен асьмеос «Удмуртиысь ошмесъёсты» тунсыкогес каром!</p>
                    </div>
                    <div class="contacts">
                        <div class="contacts-item">
                            <div class="contacts-title">Адрес</div>  
                            Россия, Ижевск, ул. Пастухова, 13, офис 15   
                        </div>
                        <div class="contacts-item">
                            <div class="contacts-title">время работы</div>
                            <div class="contact-day">
                                <span>ПН-ПТ</span> 9:00 – 18:00  
                            </div>
                             <div class="contact-day">
                                <span>СБ </span>12:00 – 14:00 
                            </div>
                             <div class="contact-day">    
                                <span>ВС </span> выходной   
                            </div>
                        </div> 
                        <div class="contacts-item">
                            <div class="contacts-title">телефон </div>
                            +7 (3412) 57 07 55    
                        </div> 
                        <div class="contacts-item">
                            <div class="contacts-title"> отдел продаж </div>     
                            <div class="contacts-name">Юрий Злобин</div>
                            <a href="mailto:sales@udmurt.media" class="contacts-link">sales@udmurt.media</a>
                        </div>
                        <div class="contacts-item">
                            <div class="contacts-title">И.о. директора</div>    
                            <div class="contacts-name">Дмитрий Викторович Винокуров</div> 
                            <a href="mailto:red@udmurt.media" class="contacts-link">red@udmurt.media </a>
                        </div>                        
                        <div class="contacts-item">
                           <div class="contacts-title"> Редакция </div>   
                            <a href="mailto:red@udmurt.media" class="contacts-link">red@udmurt.media</a>
                        </div>                        
                        <div class="contacts-item">
                            <div class="contacts-title">соц. сети</div> 
                            <div class="soc">
                                <a class="soc-item vk" href="https://vk.com/udmurt.media" target="_blank">
                                    <img class="soc-image" src="assets/svg/vk.svg" width="22" height="22">
                                </a>
                                <a class="soc-item ok" href="https://ok.ru/udmurt.media" target="_blank">
                                    <img class="soc-image" src="assets/svg/ok.svg" width="22" height="22">
                                </a> 
                                <a class="soc-item fb" href="https://www.facebook.com/udmurt.media/" target="_blank">
                                    <img class="soc-image" src="assets/svg/fb.svg" width="22" height="22">
                                </a>
                                 <a class="soc-item tw" href="https://twitter.com/udmurtmedia" target="_blank">
                                    <img class="soc-image" src="assets/svg/tw.svg" width="22" height="22">
                                </a>                                 
                                <a class="soc-item inst" href="https://www.instagram.com/udmurt.media" target="_blank">
                                    <img class="soc-image" src="assets/svg/inst.svg" width="22" height="22">
                                </a> 
                                 <a class="soc-item youtube" href="https://www.youtube.com/c/%D0%98%D0%90%D0%A3%D0%B4%D0%BC%D1%83%D1%80%D1%82%D0%B8%D1%8F" target="_blank">
                                    <img class="soc-image" src="assets/svg/youtube.svg" width="22" height="22">
                                </a> 
                            </div> 
                        </div>
                    </div>
                </div>
            </div> 
            <yandex-map :coords="coords" @click="onClick">
            <ymap-marker 
                marker-id="123" 
                :coords="coords"                
                :icon="{layout: 'default#image', imageHref: markerIcon, imageSize: [48, 48]}"                    
            ></ymap-marker>
            </yandex-map>         
        </main>
        <MyAside/>
    </div>
</template>

<script>
import MyAside from './my-aside.vue'
export default {
    components: {   
    MyAside
  },
  data: () => ({
    coords: [56.842270, 53.206064],    
    markerIcon: 'assets/svg/ico.svg' 
  }),
   methods: {
    onClick(e) {
      this.coords = e.get('coords');
    }
  },
  computed:{
       udmDetected:function(){ 
      let path = this.$router.currentRoute.name;     
      if(path == "contactudm"){      
        return true
      }
      else{
         return false
      }   
    }  
  }   
}
</script>

<style>
.ymap-container {
  height: 300px;
}

@media(min-width:1024px){
    .ymap-container {
        height: 500px;
    }
}

@media(min-width:1440px){
    .ymap-container {
        height: 600px;
    }
}
.contacts{
    margin: 30px 0;
}
@media(min-width:1024px){
    .contacts{
        margin: 50px 0;
    }
}
@media(min-width:1440px){
    .contacts{
        margin: 120px 0;
    }
}
.contacts-item{
    margin: 20px 0;
}
@media(min-width:1024px){
    .contacts-item{
    margin: 38px 0;
}
}
.contacts-name{
    color: #282828;
    font-family: 'TT_Firs_Bold', Arial, Helvetica, sans-serif;
    font-weight: 600;
    margin: 4px 0;
}
@media(min-width: 1440px){
    .contacts-name{
        font-size: 24px;
        line-height: 32px;
         margin: 8px 0;
    }  
}

.contacts-title{
    color: #282828;
    opacity: 0.6;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-family: 'PT_Root_UI_Bold', Arial, Helvetica, sans-serif;
      font-weight: 600;
      margin: 4px 0;
      font-size: 14px;
line-height: 14px;
}

@media(min-width: 1440px){
    .contacts-title{
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin: 8px 0;
    }  
}
 .contacts-link{
    color:  #FF4646;
    opacity: 0.8;
    text-decoration: none;
    margin: 4px 0;    
}
@media(min-width: 1440px){
    .contacts-link{       
        margin: 8px 0;
    }  
}
.contacts-info{
    opacity: 0.8;
    color: #111A1F;
    margin: 4px 0;   
}
@media(min-width: 1440px){
    .contacts-info{       
        margin: 8px 0;
    }  
}

.soc{
    display: flex;
    flex-wrap:wrap;
    margin: 14px -12px;
}
.soc-item{
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px 12px;
    transition: opacity .3s;
}
.soc-item:hover{
    opacity: 0.5;
}
@media(min-width: 768px){
    .soc-item{
      width: 48px;
    height: 48px;  
    }
}

.vk{
   background: #597DA3;
}
.fb{
    background: #3B5998;
}
.tw{
    background: #00ACEE;
}
.ok{
   background: #EF7F1A;
}
.inst{
    background: #000;
   background: radial-gradient(100.92% 101.13% at 29.06% 99.75%, #F7D37A 0%, #E09E60 25%, #D76651 38%, #C16173 55%, #AC5C96 70%, #8669A4 85%, #6A74B4 99%, #6A74B4 100%); 
}
.youtube{
    background: #FF0000;
}
.contact-day span{
    color: #282828;
    opacity: 0.8;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 14px;
    font-family: 'PT_Root_UI_Bold', Arial, Helvetica, sans-serif;
      font-weight: 600;
}
</style>