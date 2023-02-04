<script setup>
import CardTemplate from "./components/CardTemplate.vue";
import UserImage from "./components/UserImage.vue";
</script>

<template>
  <CardTemplate>
    <UserImage />
    <div class="flex items-center">
      <div class="mt-[0.5rem] mx-auto">
        <span class="font-bold font-main">Victor Crest</span>
        <span class="ml-[1rem] text-textGrey font-main">26</span>
      </div>
    </div>
    <div class="text-center mt-[0.2rem] text-textGrey font-main">London</div>
    <hr class="mt-[0.8rem]" />
    <div class="grid grid-cols-3 mt-[0.7rem]">
      <div :key="stat.value" v-for="stat in stats">
        <div class="text-center">
          <div class="font-bold font-main">{{ stat.value }}K</div>
          <div class="text-xs text-textGrey font-main">{{ stat.name }}</div>
        </div>
      </div>
    </div>
  </CardTemplate>
</template>
<script>
export default {
  data() {
    return {
      stats: [
        {
          name: "Followers",
          value: 80,
        },
        {
          name: "Likes",
          value: 803,
        },
        {
          name: "Photos",
          value: 1.4,
        },
      ],
    };
  },
};
</script>

<style>
body {
  background-color: #19a1ad;
}
</style>
