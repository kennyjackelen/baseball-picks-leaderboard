<template>
  <div class="w-full grid grid-cols-4 gap-4 my-4 cursor-pointer"
    @click="expanded = !expanded"
  >
    <div class="col-span-3 text-2xl  font-bold">
      <ChevronDoubleUpIcon class="h-6 w-6 mr-2 inline" v-if="expanded" />
      <ChevronDoubleDownIcon class="h-6 w-6 mr-2 inline" v-else />
      {{ entry.manager }}
    </div>
    <div class="font-bold text-2xl text-center">{{ entry.picks.find( x => x.stat === statKey)?.total }}</div>
  </div>
  <table class="w-full" v-if="expanded">
    <tr>
      <th class="text-left">Player</th>
      <th class="text-center w-16">Price</th>
      <th class="text-center w-16">{{statKey}}</th>
    </tr>
    <tr v-for="player of entry.picks.filter( x => x.stat === statKey)[0].players">
      <td>{{ player.name }}</td>
      <td class="text-center">{{ player.price }}</td>
      <td class="text-center">{{ player[statKey] }}</td>
    </tr>
  </table>
</template>


<script setup lang="ts">
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/vue/24/solid'
type Entry = {
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
};

const { entry } = defineProps({
  entry: {
    type: Object as PropType<Entry>,
    required: true
  },
  statKey: {
    type: String,
    required: true
  },
});

const expanded = ref(false);
</script>
