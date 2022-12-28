<template>
  <div class="category">
    <h3 class="category__title">
      Категория <span class="blue">{{ category.category }}</span>
    </h3>
    <div class="category__info">
      <img src="~/assets/image/category_car.png" alt="car">
      <div class="category__features">
        <p class="category__feature">
          <img src="~/assets/image/money.png" alt="money">
          <span class="strong-text">{{ category.price }}₽</span> с учётом топлива
        </p>
        <p class="category__feature">
          <img src="~/assets/image/theory.png" alt="theory">
          <span class="strong-text">Теория </span> - {{ category.theory }} месяца
        </p>
        <p class="category__feature third-feature">
          <img src="~/assets/image/rudder.png" alt="money">
          <span class="strong-text">Практика </span> - {{ category.practice }} месяца
        </p>
      </div>
      <button class="sign-up">
        Записаться <span class="material-symbols-outlined">trending_flat</span>
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">

import ICategory from "~/interfaces/category";

const props = defineProps<{
  category: ICategory
}>();
</script>

<style scoped lang="scss">
.category {
  font-family: 'Montserrat';
  width: 542px;
  height: 372px;
  padding: 20px 13px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 10px;
  @include myFlex($jc: start, $ai: start, $fd: column);

  .category__title {
    font-style: normal;
    font-weight: 900;
    font-size: 25px;
    line-height: 30px;
    color: #282828;

    .blue {
      color: #0075FF;
    }
  }

  .category__info {
    @include myFlex($fd: column);
    width: 100%;

    .category__features {
      @include myGrid(2);
      margin-top: 10px;

      .category__feature {
        margin: 0 auto;
        @include myFlex();
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #454545;

        .strong-text {
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          margin: 0 10px;
          color: #282828;
        }
      }

      .third-feature {
        margin-top: 18px;
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }

    .sign-up{
      font-family: 'Montserrat';
      @include myFlex($jc:center);
      margin-top: 25px;
      box-sizing: border-box;
      width: 100%;
      padding: 10px 0;

      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #FFFFFF;

      background-color: $myBlue;
      border: 2px solid $myBlue;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s, color 0.2s;

      &:hover{
        background-color: white;
        color: $myBlue;
      }
    }
  }

}
</style>