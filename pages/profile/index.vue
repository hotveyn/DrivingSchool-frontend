<template>
  <div class="profile-wrapper">
    <h1 class="profile-title">Ваш аккаунт</h1>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  middleware: 'auth'
})
</script>

<style scoped lang="scss">
.profile-wrapper{
  @include myFlex($jc:center);
  min-height: 85vh;
  .profile-title{
    font-size: 40px;
    font-family: 'Montserrat', serif;

  }
}
</style>