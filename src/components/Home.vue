<template>
    <div id="home" class="home">
        <main class="main">
            <div class="container">
                <div class="home-description">
                    <span>ИСТОРИЯ о личности</span>
                    </div>
                <h1>История Сергея Николаевича Селивановского</h1>
                <div class="home-title">Я – Сергей Николаевич Селивановский – коренной
                житель Ижевска, прямой потомок оружейников. Доцент, много лет преподавал
                 в Ижевском государственном техническом университете им. М. Т. Калашникова 
                 на кафедре конструирования радиоэлектронной аппаратуры.</div>
                 <a href="/story" class="home-story">ЧИТАТЬ ИСТОРИЮ</a>
            </div>
            <div class="big-green">Родники Удмуртии</div> 
            <div class="big-blue">Столетие Удмуртии</div> 
            <div class="container">
                <div class="project">
                    <div class="project-title">О проекте</div>
                    <div class="project-subtitle">о людях удмуртии</div>
                    <div clas="project-flex">
                        <div clas="project-pic">
                        </div>
                         <div clas="project-text">
                            <h2>Родники Удмуртии</h2>
                            <div clas="project-text">
                                Все поступившие истории сортируются
                                редактором на пять категорий: новые основные, 
                                остальные новые, повторные, копии и всякая всячина. 
                                Повторными называются тексты, уже имеющиеся в архиве
                                нашего сайта. В копии отправляются истории, ранее 
                                опубликованные на других сайтах.
                            </div>
                        </div>
                    </div>
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
    .home-description{
        color:  #FF4646;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-size: 14px;
        line-height: 14px;
        font-family: 'PT_Root_UI_Bold', Arial, Helvetica, sans-serif;
        justify-content: center;
        display: flex;    
        align-items: center;     
    }
    .home-description:before{
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        background: #FF4646;
        transform: rotate(-45deg);   
        margin-right: 15px;     
    }
    .home-title{
        text-align: center;
    }
    .home-story{
        margin: 20px auto;
        display: block;
        display: block;
        font-family: 'PT_Root_UI_Bold', Arial, Helvetica, sans-serif;
        font-weight: 600;
        border: 1px solid #E6E6E7;
        color:#28282;
        padding-top: 17px;
        padding-bottom: 18px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        text-align: center;
        letter-spacing: 0.1em;
        font-size: 12px;
        line-height: 12px;       
        text-transform: uppercase;
        text-decoration: none;
        position: relative;
        max-width: 320px;
        position: relative;
    }
    .home-story:before{
         content: '';
        display: block;
        background: #DA4348;
        width: 56px;
        height: 1px;
        position: absolute;
        bottom: 12px;
        left: calc(50% - 28px)
    }
</style>