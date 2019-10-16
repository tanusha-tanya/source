<template>
  <div id="app">   
     <div class="alert" v-if="isAlert">       
        <div class="container">
          <div class="alert-wrap">
            В данный момент Вы находитесь на beta-версии сайта {{udmDetected?'Удмуртиысь ошмесъёс':'Родники Удмуртии'}}
            <div class="close" @click.prevent="turneOf"><img src="assets/svg/cross.svg" alt="Vue Logo" height="9" width="9"> </div>
          </div>
        </div>
      </div>
    <header class="header">
      <div class="container"> 
        <div class="header-flex"> 
          <div class="lang" v-if="!addform">
            <a :class="!udmDetected?classLinkActive:classLink"  :href="rusLink" >Рус</a>
            <a :class="udmDetected?classLinkActive:classLink" :href="udmLink">Удм</a>
          </div>          
          <a href="/">
            <img src="assets/svg/logotype.svg" alt="Vue Logo" class="logotype" height="48"> 
          </a>
          <a :href="!udmDetected?'/addstory': '/udmadd'" class="addbutton" v-if="!addform">
            <span>{{udmDetected?'историез ватсаны':'добавить историю'}}</span>
          </a>     
        </div>
      </div>
    </header>
    <router-view></router-view>    
    <footer class="footer">
       <div class="container">
          <div class="footer-flex">
            <div class="footer-col">
              <p>{{udmDetected?'Удмуртиысь ошмесъёс':'Родники Удмуртии'}}, 2019</p>
              <p>Все права защищены законодательством РФ. При использовании любых материалов
              сайта ссылка обязательна, в Интернете обязательна гиперссылка на ресурс.
                Иное является незаконным использованием и подлежит правовым последствиям. </p>
              <p>Проект посвящен столетию Удмуртской Республики.</p>  
              <img src="assets/svg/footerlogo.svg" alt="Vue Logo" height="44" width="200" class="footer-logo">   
            </div>            
            <div class="footer-menu">
              <div class="menu-block">
                <div class="footer-menu-title">{{udmDetected?'Удмуртиысь ошмесъёс':'Родники Удмуртии'}}</div>
                <ul>
                  <li class="footer-menu-list">
                    <a :href="udmDetected?'/udm':'/story'" class="footer-menu-link">История</a>
                  </li>   
                  <li class="footer-menu-list">  
                    <a :href="udmDetected?'/projectudm':'/project'" class="footer-menu-link">О проекте</a>
                  </li> 
                  <li class="footer-menu-list">   
                    <a
                     :href="udmDetected?'/contactudm':'/contact'"                  
                    class="footer-menu-link">
                     {{udmDetected?'Контактъёс':'Контакты'}}
                  </a>
                  </li> 
                  <li class="footer-menu-list">   
                    <a href="/agreement" class="footer-menu-link">соглашение</a>
                  </li>              
                </ul>              
              </div>
              <div class="menu-block">
                <div class="footer-menu-title">Другие проекты</div>
                <ul>
                  <li class="footer-menu-list">
                    <a href="/empty" class="footer-menu-link"> столетие удмуртии</a>
                  </li>   
                  <li class="footer-menu-list">  
                    <a href="/empty" class="footer-menu-link">#про100летудмуртии</a>
                  </li> 
                  <li class="footer-menu-list">   
                    <a href="/empty" class="footer-menu-link">Афиша удмуртии</a>
                  </li>                             
                </ul>         
              </div>
            </div>
          </div>
          <div class="footer-flex footer-flex__center">
            <div class="copyright">
              {{udmDetected?'Удмуртиысь ошмесъёс':'Родники Удмуртии'}}, 2019
            </div>          
            <a href="http://picom.ru/" target="_blank" class="picom">Разработка — Picom</a>          
            <img src="assets/svg/heart.svg" alt="Vue Logo" height="16" width="16"  class="heart">  
          </div>
          <div class="footer-alert" v-if="coocies">
            <p>Мы используем cookie-файлы для наилучшего представления нашего сайта. Продолжая использовать этот сайт, 
            Вы соглашаетесь с использованием cookie-файлов.</p>
            <a href="#" class="footer-alert-close" @click.prevent="close">OK</a>
          </div>
      </div>
    </footer> 
  </div>
</template>

<script>

export default {  
  name: 'app',
  components: {    
  },
  data(){
    return{      
      classLink:"lang-link",
      classLinkActive:["lang-link", "lang-link__active"]        
    }
  },
  computed:{
    udmLink(){
      let path = this.$router.currentRoute.name; 
      switch(path) {
        case "/":  
          return "/udm";
          break;
        case "story":  
          return "/udm";
          break;
        case "main":  
          return "/udm";
          break;
        case 'addstory':  
          return "/udmadd";
          break;       
        case 'contact':  
          return "/contactudm";
          break;
        case 'project':  
          return "/projectudm";
          break;
        default:
          return path;
          break;
      }     
    },
    rusLink(){
      let path = this.$router.currentRoute.name;  
       switch(path) {
      case "udm":  
        return "/story";
        break;
      case 'udmadd':  
        return "/addstory";
         break;     
      case 'contactudm':  
        return "/contact";
        break;
      case 'projectudm':  
        return "/project";
        break;
      case 'main':  
        return "/";
        break;
      default:
        return path;
        break;
      }   
    },
    isAlert(){    
      return this.$store.state.isAlert
    },
    coocies(){      
      return this.$store.state.coocies
    },   
    udmDetected(){      
      let path = this.$router.currentRoute.name;     
      if(path == "udm" ||
        path == "udmadd" || 
        path == "contactudm" ||
        path == "projectudm"){        
        return true
      }
      else{
         return false
      }      
    },   
    addform: function(){
      let path = this.$router.currentRoute.name
      if(path != "addstory" && path != "udmadd"){
        return false
      }
      else{
         return true
      }     
    }   
  },
  methods:{
    turneOf(){      
      this.$store.commit('turneOf')
    },
    close(){
      this.$store.commit('close')      
    }    
  }
}

</script>


<style>
*{
  margin: 0;
  padding: 0;
}
#app{
  flex-direction:column;
  min-height: 100vh;
  justify-content: space-between;
  width: 100%; 
}
body{
  font-family: 'PT_Root_UI', Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 24px;
  margin:0 auto;
  color: #282828;
  display: flex;
   
}
.container{
 padding: 0 24px;
 margin: 0 auto; 
}
@media(min-width: 768px){
  .container{
    padding: 0 104px;   
  }
}
@media(min-width: 1024px){
  .container{
    padding: 0;   
    margin: 0 auto;
    position: relative;
    max-width: 866px;
  }
}
@media(min-width: 1440px){  
  .container{
    max-width: 1260px;
  }
}
@media(min-width: 1920px){  
  .container{
    max-width: 1505px;
  }
}
.alert{
  background: #18305E;
  color: #fff;
  padding-top: 20px;
  padding-bottom: 14px;
  position: relative;
}
.alert-wrap{
  position: relative;
  text-align: center;
}
.close{
  position: absolute;
  top: -10px;
  right: 10px;
}

@media(min-width: 1440px){  
  .close{
    right: -50px;
  }
}
.header{
  border-bottom: 1px solid  #E6E6E7;
  padding: 8px 0;
}
@media(min-width: 1024px){
  .header{  
    padding-top: 17px;
    padding-bottom: 0;
  }
}
.header-flex{
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
}
@media(min-width: 768px){
  .logotype{
    width: 62px;
    height: 39px;
  }
}
@media(min-width: 1024px){
  .logotype{
    width: 124px;
    height: 95px;
  }
}

.lang-link{
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 10px;
  line-height: 14px;
  display:block;
  position: relative;
  text-decoration: none;
  transition: border .3s;
  margin: 0 8px;
  font-family: 'PT_Root_UI_Bold', Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: #282828;
}

@media(min-width: 768px){
  .lang-link{
    font-size: 14px;
    line-height: 24px;
    margin: 0 12px;
  }
}

.lang-link:after{
  content: '';
  height: 1px;
  position: absolute;
  width: 100%;
  left: 0;
  top: 39px;
  transition: background .3s;
}


.lang-link__active, .lang-link:hover, .lang-link:active{
  color: #FF4646;
}
.lang-link__active:after, .lang-link:hover:after, .lang-link:active:after{
  background:  #FF4646;
}

@media(min-width: 768px){
  .lang-link__active:after, .lang-link:hover:after, .lang-link:active:after{
    top: 43px;  
  }
}
@media(min-width: 1024px){
  .lang-link__active:after, .lang-link:hover:after, .lang-link:active:after{
    top: 62px; 
  }
}
.lang{
  display: flex;
  margin: 0 -8px;
  position: absolute;
  left: 0;  
}

@media(min-width: 768px){
  .lang{
    margin: 0 -12px;    
  }
}
.addbutton{
  border: 0.444881px solid #FF4646;
  display: block;
  width: 42px;
  height: 32px;
  position: absolute;
  right: 0;
  background: #fff;
  transition: background .3s;
}


@media(min-width: 768px){
  .addbutton{
    width: 200px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
 
}

@media(min-width: 1440px){
  .addbutton{
    width: 266px;
    height: 48px;
  }
   .addbutton:hover, .addbutton:focus{
   background: #FF4646;
}
}


.addbutton:before, .addbutton:after{
  content: '';
  display: block;
  position: absolute;
  background: #FF4646;
}


.addbutton:before{
  content: '';
  width: 2px;
  height: 12px;
  top: 10px;
  left: 20px;
}
.addbutton:after{
  content: '';
  width: 12px;
  height: 2px;
  top: 15px;
  left: 15px;
}

@media(min-width: 768px){
  .addbutton:before, .addbutton:after{
    display: none;
  }
}

.addbutton span{
  display: none;
}

@media(min-width: 768px){
  .addbutton span{
    display: block;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #FF4646;
    font-family: 'PT_Root_UI_Bold', Arial, Helvetica, sans-serif;
    font-weight: 600;
    transition: color .3s;
  }
}
@media(min-width: 1440px){
.addbutton:hover span, .addbutton:focus span{
    color: #FFFFFF;
}
}
.footer{
  background: #161616;
  padding: 28px 0;
}
@media(min-width: 768px){
  .footer{   
    padding-top: 50px;
  }
}
@media(min-width: 1024px){
  .footer{   
    padding: 42px;
  }
}

@media(min-width: 1024px){
  .footer-flex{   
    display: flex;
    align-items:flex-start;
  }
}
@media(min-width: 1024px){
  .footer-flex__center{
    justify-content: center;
    position: relative;
    margin: 33px 0;
  }
}
@media(min-width: 1024px){
  .footer-col{   
    width: 50%;
    box-sizing: border-box;
    padding-right: 70px;
  }
}
.footer p{
  color: #FFFFFF;
  opacity: 0.6;
  font-size: 14px;
  line-height: 20px;
  margin: 20px 0;
}
@media(min-width: 768px){
  .footer p{
    font-size: 16px;
    line-height: 24px;
    color: #6D6D6D;
    opacity: 1;
  }
}
@media(min-width: 768px){
  .footer-logo{
    margin-top: 34px;
  }
}
@media(min-width: 1024px){
  .footer-logo{
    margin-top: 11px;
  }
}
.footer-menu{
  margin: 49px 0;
  font-family: 'PT_Root_UI_Bold', Arial, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 15px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #FFFFFF;
}
@media(min-width: 768px){
  .footer-menu{
    display: flex;
    margin: 65px -8px 75px -8px;
  }
}
@media(min-width: 1024px){
  .footer-menu{   
    width: 50%;
    margin: 20px -8px;
  }
}
.menu-block{
   margin: 42px 0;
}
@media(min-width: 768px){
  .menu-block{
    width: calc(50% - 16px);
    margin: 0 8px;
  }
}
.footer-menu-title{
  margin-bottom: 20px;
}
.footer-menu-link{
  opacity: 0.6;
  text-decoration: none;
  color:  #FFFFFF;  
}
@media(min-width: 768px){
  .footer-menu-link{
    font-size: 14px;
    line-height: 14px;
  }
}

.footer-menu-list{
  list-style: none;
  margin: 20px 0;
}

@media(min-width: 768px){
  .footer-menu-list{
    list-style: none;
    margin: 25px 0;
  }
}

.copyright{
  font-family: 'PT_Root_UI_Bold', Arial, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 15px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #FFFFFF;
  opacity: 0.6;
  text-align: center;
  margin: 20px 0;
}
@media(min-width: 768px){
  .copyright{
    margin: 31px;
  }
}
@media(min-width: 1024px){
  .copyright{
    margin: 0;
    position: absolute;
    left: 0;
  }
}
.picom{
  color: #fff;
  font-family: 'PT_Root_UI_Bold', Arial, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 15px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  display: block;
  margin: 20px 0;
}
@media(min-width: 768px){
  .picom{
    margin: 39px 0;
  }
}
@media(min-width: 1024px){
  .picom{
    margin: 0;
    position: absolute;
    right: 0;
  }
}
.heart{
  position: relative;
  margin: 30px auto 49px auto;  
  display: block;
}
@media(min-width: 768px){
  .heart{
    width: 22px;
    height: 22px;
  }
}
@media(min-width: 1024px){
  .heart{
    margin: 0;
  }
}
.footer-alert{
  background: #FFFFFF;
  padding: 20px;  
  bottom: 25px;
  left: 0; 
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #161616;
}
@media(min-width: 1024px){
  .footer-alert{
    width:50%;
    position: relative;
    left: 50%;
  }
}

.footer-alert p{
  font-family: 'PT_Root_UI', Arial, Helvetica, sans-serif;
  color: #282828;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  opacity: 1;
}
.footer-alert-close{
  font-family: 'PT_Root_UI', Arial, Helvetica, sans-serif;
  border: 1px solid #FF4646;
  padding: 17px 26px;
  display: block;
  width: 74px;
  height: 48px;
  box-sizing: border-box;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 14px;
  color: #FF4646;
  text-decoration: none;
  margin: 10px auto;
  position: relative;
  background: #fff;
  transition: background .3s, color .3s;
}

.footer-alert-close:hover{
  background: #FF4646;
  color: #fff;
}
</style>
