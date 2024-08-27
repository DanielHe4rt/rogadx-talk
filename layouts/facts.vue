<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from './layoutHelper.ts';

const props = defineProps({
    image: {
        type: String,
    },
    name: {
        type: String,
    },
    fact: {
        type: String,
    },
    context: {
        type: String,
    },
    year: {
        type: String,
    },
    class: {
        type: String,
    },
    backgroundSize: {
        type: String,
        default: 'contain',
    },
})

const style = computed(() => handleBackground(props.image, false, props.backgroundSize))
</script>

<template>

    <div class="grid grid-cols-2 w-full h-full auto-rows-fr">
        <div class="slidev-layout default" :class="props.class">
            <div class="flex flex-col justify-center">
                <h2>{{ props.name }}</h2>
                <div class="flex flex-col justify-center h-full w-full content-center" style="font-size: small">
                    <slot />
                </div>
            </div>
        </div>
        <div id="right-image-container" :style="{ backgroundImage: `url(${props.image})`, backgroundPosition: '60%' }">
            <div :style="style" class="flex justify-end backdrop-blur-md space-y-1 flex-col items-center h-full">
                <div class="div flex justify-end text-center space-y-1 backdrop-blur-md w-full flex-col items-center py-2 ">
                    <h4 class="text-4xl bg-clip-text specialtext font-bold ">{{ props.fact }}</h4>
                    <h5 class="text-1xl  bg-clip-text specialtext w-90 font-bold ">{{ props.context }}</h5>
                    <h5 class="text-1xl  bg-clip-text specialtext font-bold">{{ props.year }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.specialtext
{
    color: white;
  text-shadow:
   -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000;
}
</style>