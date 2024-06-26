<script setup>
import { ref } from "vue";
import { Alert, BackButton, ClosingConfirmation, Confirm, Popup } from "vue-tg";
const isBackButtonVisible = ref(true);
const isAlert = ref(false);

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
  console.log(buttonId);
}
</script>

<template>
  <main>
    <Alert v-if="isAlert" message="Hello! I am telegram mini app." />
    <BackButton :visible="isBackButtonVisible" @click="handleBackButton" />
    <ClosingConfirmation />
    <Confirm message="Hello?" @close="handleConfirmClose" />
    <Popup
      message="Hello, i am popup"
      title="Popup"
      @close="handlePopupClose"
    />
  </main>
</template>
