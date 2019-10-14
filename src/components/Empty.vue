<template>
    <div id="home" class="home">
        <main class="main">
            <div class="container">
                <a class="return" href="/">
                    <img src="assets/svg/arrow.svg" width="15" height="12">
                    <span>на главную</span>
                </a>
                  <h1 class="succsess-title">Страница в разработке</h1>
                  <img src="assets/svg/success.svg" class="success-img" width="128" height="128">
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