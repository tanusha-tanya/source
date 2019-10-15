<template>
    <div id="home" class="home decor-wrap">
        <main class="main">
            <div class="container">
                <div class="history">
                    <h1>О проекте</h1>
                    <div class="home-description">
                        <span>родники удмуртии</span>
                    </div>
                    <div class="project-text">
                        <p>Проект «Родники Удмуртии» появился к 100-летию государственности Удмуртии. Теперь каждый может отправить свою историю (и не одну) для публикации в нем. К тексту можно приложить фотографии, видео и аудиофайлы. После модерации нашим редактором материал появится на сайте. Позднее автор может дополнить его новой информацией</p>
                    </div>
                    <div class="project-big">«Родники Удмуртии» – это люди, которые рассказывают истории о себе, о своей семье, родных и близких, друзьях, соседях, знакомых и незнакомцах, которые жили и живут, творили и творят, работали и работают на территории Удмуртской Республики или, как ее еще иногда называют, Родникового края. Из историй отдельных личностей складывается история нашей Удмуртии.
                    </div>                    
                    <p>Оператором проекта является Информационное агентство <a href="https://udmurt.media/" target="blank">«Удмуртия»</a>. Истории также можно направлять по адресу <a href="mailto:red@udmurt.media">red@udmurt.media</a>, телефон для справок (3412) 570755.</p>
                </div>
            </div>          
        </main>
        <MyAside/>
    </div>
</template>

<script>
    import MyAside from './my-aside.vue'

    export default {
    name: 'app',
    components: {   
        MyAside
    }
}
</script>
<style>
     @media(min-width: 1440px ){
         .decor-wrap{
            background-image:url('/assets/svg/decor.svg');
            background-repeat: no-repeat;
            background-position: right -4%; 
        }
     }    
   
    .project-text{
        text-align: center;
    }
    .h2-left{
        text-align: left;
    }
    .project-big{
        font-size: 32px;
        line-height: 32px;
        margin: 29px 0;
        font-family: 'TT_Firs_Bold', Arial, Helvetica, sans-serif;
        text-align: center;
         margin: 40px auto;
  }
  @media(min-width: 768px){
    .project-big{
      font-size: 48px;
      line-height: 48px;
       margin: 60px auto;
    }
  }
  @media(min-width: 1024px){
    .project-big{
      font-size: 48px;
      line-height: 48px;
      margin: 80px auto;
    }
  }
  @media(min-width: 1920px){
    .project-big{
      font-size: 48px;
      line-height: 48px;
      letter-spacing: 0.01em;
      margin: 123px auto;
    }
  }
</style>