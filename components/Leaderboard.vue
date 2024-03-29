<template>
  <section>
    <h1 class="text-center uppercase font-bold text-3xl">{{ title }}</h1>
    <div v-for="entry of sortedList" class="m-4">
      <LeaderboardEntry :entry="entry" :statKey="statKey" />
    </div>
  </section>
</template>


<script setup lang="ts">

const { title, statKey, sortedList } = defineProps({
  title: String,
  statKey: {
    type: String,
    required: true
  },
  sortedList: Array<{
    manager: string;
    picks: {
        stat: string;
        total: number;
        players: {
            name: string;
            key_mlbam: string;
            team_id: string;
            price: number;
        }[];
    }[];
}>
});
</script>
