<template>
  <div :class="[ 'rounded-lg', expanded ? 'bg-gray-100 dark:bg-gray-800' : '' ]">
  <div :class="['mx-2 mt-2 my-4 w-full grid grid-cols-5 cursor-pointer' ]"
    @click="expanded = !expanded"
  >
    <div class="col-span-3 text-2xl  font-bold" >
      <ChevronDoubleUpIcon class="h-6 w-6 mr-2 inline" v-if="expanded" />
      <ChevronDoubleDownIcon class="h-6 w-6 mr-2 inline" v-else />
      {{ entry.manager }}
    </div>
    <div class="text-sm font-normal text-right">
      <span class="pt-2 inline-block text-[#59D185] text-xs font-normal my-auto" v-if="entry.picks.find( x => x.stat === statKey)?.todayTotal">
      +{{ entry.picks.find( x => x.stat === statKey)?.todayTotal }} today
      </span>
    </div>
    <div class="font-bold text-2xl text-center ">
      <div>
      {{ entry.picks.find( x => x.stat === statKey)?.total }}
      </div>
    </div>
  </div>
  <div :class="['m-2 pb-2 w-full ', expanded ? '' : 'hidden']">
    <table class="w-full  text-xl">
      <tr>
        <th class="text-left"></th>
        <th class="text-left pl-1">Player</th>
        <th class="text-center w-16">Price</th>
        <th class="text-center w-16">{{statKey}}</th>
        <th class="w-8"></th>
      </tr>
      <tr v-for="player of entry.picks.filter( x => x.stat === statKey)[0].players">
        <td class="text-center">
          <div class="inline-block h-18 w-12">
            <img class="inline h-18 w-12" :src="player.imageURL">
          </div>
        </td>
        <td class=" pl-1">
          <span>
            {{ player.name }}
          </span>
        </td>
        <td class="text-center">{{ player.price }}</td>
        <td class="text-center">{{ player.season[statKey] }}</td>
        <td class="text-left text-[#59D185] text-sm" v-if="player.today[statKey]">+{{ player.today[statKey] }}</td>
      </tr>
    </table>
  </div>
  </div>
</template>


<script setup lang="ts">
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/vue/24/solid'
type Entry = {
    manager: string;
    picks: {
        stat: string;
        total: number;
        todayTotal: number;
        players: {
            name: string;
            key_mlbam: string;
            team_id: string;
            price: number;
            season: any;
            today: any;
            imageURL: string;
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
