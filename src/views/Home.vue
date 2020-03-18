<template>
  <div class="home">
    <HelloWorld msg="Welcome to my website! It is currently under construction though..."/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
