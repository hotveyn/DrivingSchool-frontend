<template>
  <div class="login-wrapper">
    <div class="login">
      <h2 class="login__title">Вход</h2>
      <input
          v-model.trim="name"
          type="text"
          placeholder="ФИО"
      >
      <input
          v-model.trim="phone"
          type="text"
          placeholder="Номер телефона"
      >
      <input
          v-model.trim="email"
          type="text"
          placeholder="Эл. почта"
      >
      <input
          v-model.trim="password"
          type="password"
          placeholder="Пароль"
      >
      <input
          v-model.trim="repeatPassword"
          type="password"
          placeholder="Подтвердите пароль"
      >
      <button
          @click="goLogin()"
          class="login__button"
      >
        Войти
      </button>
      <p class="login__new">Уже есть аккаунт?
        <NuxtLink class="blue" to="/register">Авторизуйтесь</NuxtLink>
      </p>
      <p class="login__description">Ввод данных подтверждает ваше согласие с
        <NuxtLink class="blue" to="/">политикой конфиденциальности</NuxtLink>
        и
        <NuxtLink class="blue" to="/">обработкой персональных данных.</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">


let name = ref<string>('');
let phone = ref<string>('');
let email = ref<string>('');
let password = ref<string>('');
let repeatPassword = ref<string>('');

async function goLogin() {
  if (
      name.value &&
      phone.value &&
      email.value &&
      repeatPassword.value &&
      (password.value === repeatPassword.value)
  ) {
    let response = await fetch('http://127.0.0.1:8000/api/reg', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name.value,
        phone: phone.value,
        email: email.value,
        password: password.value,
      })
    })

    if (response.ok) {
      return navigateTo('/login')
    }
    return console.log(response.statusText)
  }
}
</script>

<style scoped lang="scss">

.login-wrapper {
  min-height: 85vh;
  width: 100%;
  @include myFlex($jc: center);

  .login {
    @include myFlex($ai: start, $fd: column);
    padding: 30px;
    background-color: white;
    border-radius: 10px;
    box-sizing: border-box;
    height: 661px;
    width: 427px;

    .login__title {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      line-height: 140%;
      text-align: center;
      color: #282828;
    }

    input {
      font-family: 'Montserrat';
      width: 100%;
      padding-bottom: 12px;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 20px;
      color: #000000;
      opacity: 0.5;
      border: 0;
      border-bottom: 1px solid grey;
    }

    .login__button {
      font-family: 'Montserrat';
      padding: 10px 60px;
      border: 2px solid $myBlue;
      border-radius: 4px;
      background-color: $myBlue;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: white;
      cursor: pointer;
      transition: background-color 0.2s, color 0.2s;

      &:hover {
        background-color: white;
        color: $myBlue;
      }
    }

    .login__new {
      font-family: 'Montserrat';
      font-weight: 400;
      font-size: 16px;
      line-height: 17px;
      color: #222222;
    }

    .login__description {
      font-family: 'Montserrat';
      font-weight: 400;
      font-size: 12px;
      line-height: 12px;
      color: #222222;
    }

    .blue {
      color: $myBlue;
      text-decoration: none;
    }
  }
}
</style>