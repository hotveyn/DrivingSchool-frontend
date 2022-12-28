<template>
  <footer>
    <hr>
    <div class="footer-info">
      <NuxtLink
          to="/"
          class="logo"
      >
        <img src="~/assets/image/icon.png" alt="logo">
        <h1 class="title">АВТОШКОЛА</h1>
      </NuxtLink>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Тарифы и цены</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Этапы обучения</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Контакты</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped lang="scss">
.footer-info {
  @include myFlex();
  margin-top: 20px;
  gap: 25px;

  .logo {
    @include myFlex($jc: center);
    gap: 15px;
    text-decoration: none;

    .title {
      font-family: 'Montserrat', serif;
      font-weight: 700;
      font-size: 25px;
      color: #282828;
    }
  }

  ul {
    @include myFlex();
    gap: 20px;

    a {
      font-family: 'Montserrat';
      color: $myDark;
      font-size: 16px;
      text-decoration: none;
    }
  }
}
</style>