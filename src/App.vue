<template>
    <div class="min-h-screen p-6">
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300&family=Nunito&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  font-family: "Nunito", sans-serif;
}

</style>
