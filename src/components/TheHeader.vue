<template>
  <header class="header">
    <div class="container container--header">
      <img src="@/assets/img/logo.svg" alt="" class="header__logo">
      <ul class="header__links">
        <li class="header__links-item">
          <a href="" class="header__links-src">Каталог</a>
        </li>
        <li class="header__links-item">
          <a href="" class="header__links-src">Доставка</a>
        </li>
        <li class="header__links-item">
          <a href="" class="header__links-src">Оплата</a>
        </li>
        <li class="header__links-item">
          <a href="" class="header__links-src">Контакты</a>
        </li>
        <li class="header__links-item">
          <a href="" class="header__links-src">О галерее</a>
        </li>
      </ul>
      <form action="" class="header__search">
        <input type="text" placeholder="Поиск по названию картины" class="header__search-input">
        <button class="header__search-button">Найти</button>
      </form>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>
