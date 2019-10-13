<template>
    <aside class="aside">
      <div class="aside-decor" style="background-image: url('../assets/svg/footer_bg.svg')"></div>
      <div class="container">
        <div class="aside-title">Добавьте свою историю о&nbsp;событии или человеке!</div>
        <a href="/addhistory" class="aside-button">ДОБАВИТЬ свою ИСТОРИЮ</a>
      </div>
    </aside>
</template>

<style>
  .aside{
  background-color: #18305E;    
  box-shadow: 0px 4px 50px rgba(22, 22, 22, 0.2);
  padding: 65px 0; 
  position: relative;
}
@media(min-width: 768px){
  .aside{
    padding: 109px 0; 
  }
}
 
.aside-decor{
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  background-position: left;  
  background-repeat: no-repeat;
  opacity: 0.1;
}

@media(min-width: 768px){
  .aside-decor{
    background-position: center;
    bottom: -30px;   
  }
}
@media(min-width: 1024px){
  .aside-decor{   
    bottom: -50px;   
  }
}


.aside-title{
  font-family: 'TT_Firs_Bold', Arial, Helvetica, sans-serif;
  font-size: 32px;
  line-height: 32px;
  text-align: center;
  color: #fff;
  max-width: 320px;   
  position: relative; 
  margin: 0 auto;
}

@media(min-width: 768px){
  .aside-title{
    font-size: 48px;
    line-height: 48px; 
    max-width: 768px;   
  }
}

@media(min-width: 1024px){
  .aside-title{
    font-size: 64px;
    line-height: 64px;
    max-width: 100%;  
    letter-spacing: 0.01em; 
  }
}
@media(min-width: 1440px){
  .aside-title{
    width: 50%;
  }
}

.aside-button{
  display: block;
  font-family: 'PT_Root_UI_Bold', Arial, Helvetica, sans-serif;
  font-weight: 600;
  border: 1px solid #FFFFFF;
  padding-top: 17px;
  padding-bottom: 18px;
  box-sizing: border-box;
  width: 100%; 
  text-align: center;
  letter-spacing: 0.1em;
  font-size: 12px;
  line-height: 12px;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;  
  position: relative;
  max-width: 320px;
  position: relative;
  margin: 0 auto;
  margin-top: 47px;
}
@media(min-width: 768px){
  .aside-button{
    margin-top: 35px;
    font-size: 14px;
    line-height: 14px;
    max-width: 272px;
    padding-top: 19px;
    padding-bottom: 22px;
  }
}
@media(min-width: 768px){
  .aside-button{
    margin-top: 51px;
    padding-top: 28px;
    padding-bottom: 31px;    
  }
}
@media(min-width: 1440px){
  .aside-button{
    width: 290px;
  }
}
.aside-button:before{
  content: '';
  display: block;
  background: #DA4348;
  width: 56px;
  height: 1px;
  position: absolute;
  bottom: 12px;
  left: calc(50% - 28px);
}
@media(min-width: 768px){
  .aside-button:before{
    bottom: 20px; 
  }
}
</style>