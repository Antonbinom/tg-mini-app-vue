<template>
  <HeaderComponent style="position: fixed; z-index: 1000; width: 100%" />
  <main style="padding: 20px">
    <router-view />
  </main>

  <Alert v-if="isAlert" message="Hello! I am telegram mini app." />
  <BackButton :visible="$route.path !== '/'" @click="$router.back()" />
  <MainButton
    text="Open Popup"
    textColor="#000"
    color="#fff"
    :disabled="isMainButtonDisabled"
    :visible="isMainButtonVisible"
    @click="isPopupOpened = true"
  />

  <Popup
    :message="popupContent"
    title="I Am Popup"
    @close="handlePopupClose"
    v-if="isPopupOpened"
  />
</template>

<script setup>
import { ref } from "vue";
import {
  Alert,
  BackButton,
  ClosingConfirmation,
  Confirm,
  Popup,
  MainButton,
} from "vue-tg";

import HeaderComponent from "@/components/HeaderComponent.vue";

const isBackButtonVisible = ref(true);
const isAlert = ref(false);
const isMainButtonDisabled = ref(false);
const isMainButtonVisible = ref(true);
const isPopupOpened = ref(false);
const popupContent = ref(
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. \n\nIn soluta ab quam accusantium magni doloribus quisquam eaque veritatis excepturi consequuntur accusamus corporis reprehenderit enim, recusandae, vero numquam, vitae ipsam repellendus."
);
const handleBackButton = () => {
  isBackButtonVisible.value = false;
  setTimeout(() => {
    isBackButtonVisible.value = true;
  }, 5000);
};

const handleConfirmClose = (ok) => {
  isAlert.value = ok;
};
function handlePopupClose(buttonId) {
  isPopupOpened.value = false;
}
</script>
