<template>
  <header>
    <div class="header-info">
      <NuxtLink
          to="/"
          class="logo"
      >
        <img src="~/assets/image/icon.png" alt="logo">
        <h1 class="title">АВТОШКОЛА</h1>
      </NuxtLink>
      <span class="grey-line-vertical"/>
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
    <div class="buttons">
      <div class="phone">
        <p>
          +7 (985) 775-12-62
        </p>
      </div>
      <NuxtLink
          to="/profile"
          class="auth"
      >
        Профиль
      </NuxtLink>
    </div>
  </header>
</template>

<script>
</script>

<style scoped lang="scss">
header {
  @include myFlex();
  margin-top: 25px;

  .header-info {
    @include myFlex();
    gap: 25px;

    .grey-line-vertical {
      display: block;
      height: 30px;
      width: 1px;
      background: rgba(0, 0, 0, 0.3);
    }

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

  .buttons {
    @include myFlex();
    gap: 15px;

    .phone {
      padding: 10px 25px;
      background-color: $myBlue;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #FFFFFF;
      border: 1px solid $myBlue;
      border-radius: 4px;
    }

    .auth {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #282828;
      padding: 10px 20px;
      background: rgba(40, 40, 40, 0);
      cursor: pointer;
      border: 1px solid $myDark;
      border-radius: 4px;
      transition: color 0.2s, background-color 0.2s;
      text-decoration: none;

      &:hover {
        background-color: $myDark;
        color: $myGrey;
      }
    }
  }
}
</style>