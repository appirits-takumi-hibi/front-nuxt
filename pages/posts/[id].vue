<!-- <script lang="ts">
export default {
  async setup() {
    const route = useRouter();
    console.log(route);
    return {
    }
  }
}
</script> -->

<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    return /^\d+$/.test(route.params.id)
  },
  pageTransition: {
    name: 'slide-right',
    mode: 'out-in'
  },
  middleware (to, from) {
    to.meta.pageTransition.name = +to.params.id > +from.params.id ? 'slide-left' : 'slide-right'
  },
})
</script>

<template>
  <div>
    <h1>#{{ $route.params.id }}</h1>
  </div>
</template>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>