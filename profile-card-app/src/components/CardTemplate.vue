<template>
  <div
    class="overflow-hidden relative w-[18rem] h-[19rem] mx-auto rounded-2xl shadow-2xl mt-[10rem] bg-[white] bg-[url('../assets/images/bg.svg') ]"
  >
    <img class="absolute z-0" src="../assets/images/bg.svg" />
    <slot />
  </div>
</template>
<script>
export default {
  name: "CardTemplate",
  // props: {},
};
</script>
