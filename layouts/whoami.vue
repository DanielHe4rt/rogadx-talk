<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from './layoutHelper.ts'

const props = defineProps({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  full_name: {
    type: String,
  },
  handle: {
    type: String,
  },
  class: {
    type: String,
  },
  backgroundSize: {
    type: String,
    default: 'cover',
  },
})

const style = computed(() => handleBackground(props.image, false, props.backgroundSize))
</script>

<template>
  <div class="grid grid-cols-3 w-full h-full ">
    <div class="w-full h-full " :style="style" >
        <div class="bg-black bg-opacity-50 w-full h-full">
            <div class="flex justify-end space-y-3 flex-col items-center py-10 h-full">
                <h4 class="text-4xl text-white font-bold">{{ $props.full_name }}</h4>
                <div class="flex space-x-4">
                  <mdi-twitter class="text-1xl"/>  
                  <mdi-github class="text-1xl"/>
                  <mdi-linkedin class="text-1xl"/>
                  <mdi-twitch class="text-1xl"/>
                </div>
                <h4 class="text-1xl  text-white font-bold">{{ $props.handle }}</h4>
            </div>
        </div>
    </div>
    <div class="slidev-layout default col-span-2" :class="props.class">
      <slot />
    </div>
  </div>
</template>