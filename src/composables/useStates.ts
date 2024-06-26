import { ref } from "vue";

export default function useStates() {
  const isDrawer = ref(true);

  const toggleDrawer = (state: boolean) => {
    isDrawer.value = state;
    console.log(isDrawer.value);
  };

  return {
    isDrawer,
    toggleDrawer,
  };
}
