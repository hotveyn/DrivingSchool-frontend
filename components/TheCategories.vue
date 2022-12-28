<template>
  <section class="categories">
    <h2 class="categories__title">Выберите категорию</h2>
    <div
        v-if="!isLoading"
        class="categories__cards">
      <CategoryCard
          v-for="category in categories.data"
          :category="category"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
let categories = ref();
let isLoading = ref<boolean>(true)

async function getCategories() {
  let response = await fetch('http://127.0.0.1:8000/api/categories');
  if (response.ok) {
    response = await response.json()
    categories.value = response;
    isLoading.value = false;
  }
}

onMounted(() => {
  getCategories()
});

</script>

<style scoped lang="scss">
.categories {
  @include myFlex($fd: column);
  margin-top: 107px;

  .categories__title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 140%;
    text-align: center;
    color: #282828;
    margin-bottom: 52px;
  }

  .categories__cards {
    @include myGrid();
    gap: 20px;
  }

}
</style>