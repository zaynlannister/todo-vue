<template>
  <div class="header">Время</div>
  <div class="wrapper">
    <div class="time">
      <div class="title">На часах у нас:</div>
      <div class="time__data">
        <span><i class="bi bi-clock time-icon"></i></span>
        <span class="primary-text">{{ props.time }}</span>
      </div>
    </div>
    <div class="date">
      <div class="title">Сегодня у нас:</div>
      <div class="date__data">
        <span><i class="bi bi-calendar date-icon"></i></span>
        <span class="primary-text">{{ props.date }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["time", "date"]);
</script>
<style>
.wrapper {
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.header {
  color: rgb(33, 204, 133);
  font-size: 20px;
}

.title {
  font-size: 14px;
  color: #a6a6a6;
  margin-bottom: 5px;
}

.primary-text {
  font-size: 20px;
}

.date-icon,
.time-icon {
  margin-right: 10px;
}
</style>
