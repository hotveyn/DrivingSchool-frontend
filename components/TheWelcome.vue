<template>
  <section class="welcome">
    <div class="welcome__banner">
      <div class="welcome__info">
        <h2 class="welcome__title">
          Научитесь водить уже через 3 месяца
        </h2>
        <p class="welcome__description">
          Научитесь водить уже через 3 месяца. Предостовляем высококачественные уроки вождения с 2000 года и выпускаем
          более 450 студентов в месяц.
        </p>
        <button
            class="welcome__button"
        >
          Записаться <span class="material-symbols-outlined">arrow_right_alt</span>
        </button>
      </div>
    </div>
    <div class="cards">
      <div class="card">
        <img src="~/assets/image/graph.png" alt="graph">
        <div class="card__title">
          График
        </div>
        <div class="card__description">
          Подстраивающийся под вас
        </div>
      </div>
      <div class="card">
        <img src="~/assets/image/mini_car.png" alt="graph">
        <div class="card__title">
          Автопарк
        </div>
        <div class="card__description">
          Ежегодно обновляется
        </div>
      </div>
      <div class="card">
        <img src="~/assets/image/usach.png" alt="graph">
        <div class="card__title">
          Инструктора
        </div>
        <div class="card__description">
          С опытом не менее 5 лет
        </div>
      </div>
      <div class="card">
        <img src="~/assets/image/gift.png" alt="graph">
        <div class="card__title">
          Рассрочка и скидки
        </div>
        <div class="card__description">
          На 12 м. и скидки студентам
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheWelcome"
}
</script>

<style scoped lang="scss">
.welcome {
  margin-top: 64px;

  width: 100%;

.welcome__banner {
  width: 100%;
  max-height: 480px;
  background-color: white;
  border-radius: 15px;
  background-image: url('~/assets/image/car.png');
  background-repeat: no-repeat;
  background-position-x: right;
  padding: 112px 50px;

.welcome__title {
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 140%;
  text-transform: uppercase;
  color: #282828;
  width: 715px;
  font-family: 'Montserrat';
}

.welcome__description {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  width: 459px;
  color: #454545;
}

.welcome__button {
  margin-top: 20px;
  background: #0075FF;
  border-radius: 4px;
  padding: 9px 22px;
  border: 0;
  display: flex;
  align-items: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  cursor: pointer;
}
}

.cards {
  margin-top: 20px;
  @include myGrid(4);
  gap: 20px;

.card {
  font-family: 'Montserrat';
  @include myFlex($fd: column);
  height: 143px;
  background-color: white;
  border-radius: 15px;
  padding: 17px 12px;

.card__title{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #282828;
}
.card__description{
  color: #454545;
}
}
}
}
</style>