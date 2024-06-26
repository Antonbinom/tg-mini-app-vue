<template>
  <div class="p-fluid p-grid dashboard" style="width: 100%">
    <div class="p-col-12 p-lg-6">
      <div class="p-card card p-p-2">
        <div class="p-grid p-fluid p-ai-center">
          <div class="p-col-4 p-pl-3">
            <span class="p-badge p-badge-xl">
              <i class="pi pi-paperclip" style="color: white"></i>
            </span>
            <span style="font-size: 1.5rem"> Resources</span>
          </div>
          <div class="p-col-8 p-text-right p-pr-3">
            <span class="p-text-bold" style="font-size: 1.7rem">$159,400</span>
            / $250,000
          </div>
          <div class="p-col-12">
            <ProgressBar value="61.7" />
          </div>
        </div>
      </div>
    </div>
    <div class="p-col-6 p-lg-3" v-for="item in list1" :key="item.num">
      <div class="p-card card p-p-2">
        <div class="p-grid">
          <div class="p-col-6 p-mt-3">
            <span class="p-text-bold" style="font-size: 2rem">{{
              item.num
            }}</span>
          </div>
          <div class="p-col-6 p-text-right">
            <span :class="`p-badge p-badge-xl p-badge-${item.color}`">
              <i :class="`pi pi-${item.icon}`" style="color: #666"></i>
            </span>
          </div>
          <div class="p-col-12">
            <span class="p-text-italic" style="color: grey">{{
              item.text
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="p-col-12 p-lg-4" v-for="item in list2" :key="item.title">
      <div
        class="p-card p-text-center p-p-2"
        :style="`background-color: ${item.color}`"
      >
        <div class="p-card-title">{{ item.title }}</div>
        <div class="p-card-subtitle">{{ item.subtitle }}</div>
        <div class="p-card-content">
          <Rating
            :value="item.star"
            :readonly="true"
            :stars="5"
            :cancel="false"
          />
        </div>
        <div class="p-card-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eaque
          rerum minima architecto autem labore mollitia harum ipsa non impedit.
        </div>
        <div class="p-card-footer">
          <div class="p-grid p-ai-center">
            <div class="p-col-6">
              <i class="pi pi-fw pi-chart-bar" style="font-size: 1.3rem"></i>
              <i
                class="pi pi-fw pi-exclamation-circle"
                style="font-size: 1.3rem"
              ></i>
            </div>
            <div class="p-col-6">
              <i class="pi pi-clock"></i> {{ item.hour }} hours left
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="stats p-col-12 p-md-6">
      <div class="p-card p-p-2">
        <div class="p-card-title p-ml-2">Invoice Stats</div>
      </div>
    </div>
    <div class="p-col-6 p-md-3" v-for="item in stats" :key="item.title">
      <div class="p-card p-text-center p-p-2">
        <div class="p-card-title p-text-light p-text-italic">
          {{ item.title }}
        </div>
        <h1 style="color: #101d2c">${{ item.amount }}</h1>
        <div class="p-card-subtitle p-text-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
          rerum, vitae odit nihil possimus repellat?
        </div>
        <div class="p-card-content" style="font-size: 1.2rem; color: #101d2c">
          <span class="p-text-bold">
            <i class="pi pi-arrow-up"></i>
            %{{ item.quantity }}</span
          >
          more than last year
        </div>
        <div class="p-card-footer">
          <Button label="Withdraw" class="p-button-help"></Button>
        </div>
      </div>
    </div>
    <div class="p-col-12 p-md-6">
      <div class="p-card p-p-2">
        <div class="p-card-title p-ml-2">Sales</div>
      </div>
      <div class="p-card-content"></div>
    </div>
    <div class="p-col-12 p-md-4">
      <Calendar
        v-model="time"
        :inline="true"
        :showWeek="true"
        :monthNavigator="true"
        :yearNavigator="true"
        yearRange="1980:2040"
      />
      {{ time }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProgressBar from "primevue/progressbar";
import Rating from "primevue/rating";

import Button from "primevue/button";
import Calendar from "primevue/calendar";

const time = ref(null);
const color = ref("purple");
const list1 = ref([
  {
    num: 149,
    text: "Active Account",
    icon: "bell",
    color: "warning",
  },
  {
    num: 54,
    text: "Time Efficiency",
    icon: "compass",
    color: "success",
  },
]);
const list2 = ref([
  {
    title: "Vue.js",
    subtitle: "Completed",
    star: 2,
    hour: 3,
    color: "#e6ffe6",
  },
  {
    title: "React.js",
    subtitle: "Inactive",
    star: 4,
    hour: 1,
    color: "#e6e6ff",
  },
  {
    title: "Angular",
    subtitle: "Pending",
    star: 1,
    hour: 7,
    color: "#ffe6f2",
  },
]);
const lineData = ref({
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Paid",
      data: [165, 59, 130, 81, 126, 155, 140, 152, 98, 75, 147, 198],
      fill: false,
      borderColor: "#101d2c",
    },
    {
      label: "Past Due",
      data: [65, 29, 80, 181, 26, 55, 10, 15, 38, 25, 97, 78],
      fill: false,
      borderColor: "#f08080",
    },
  ],
});

const stats = ref([
  { title: "Monthly Stats", amount: "3,850", quantity: 20 },
  { title: "Yearly Stats", amount: "93,750", quantity: 0 },
]);
</script>

<style>
.dashboard {
  position: relative;
  top: 75px;
}
.stats > * {
  background-color: #f2f2f2;
}
.card {
  border-radius: 7px;
}
</style>
