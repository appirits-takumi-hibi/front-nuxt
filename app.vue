<script setup lang="ts">
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
// const { data: count } = await useFetch('https://zipcloud.ibsnet.co.jp/api/search')
const count = useState('counter', () => Math.round(Math.random() * 100))
</script>

<template>
  <div>
    <Header />
    <!-- <NuxtPage /> -->
    <p>Page visite: {{ count }}</p>
    <button @click="count++">+</button>
    <button @click="count--">-</button>
    <div class="m-5">
    <div class="btn btn-success">Success</div>
    <div class="btn btn-danger">Danger</div>
    <div class="btn btn-warning">Warning</div>
    </div>
    
    <!-- <NuxtPage /> -->
    <NuxtPage :transition="{
        name: 'bounce',
        mode: 'out-in'
    }" />
    <Footer />
  </div>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  /* filter: blur(1rem); */
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>