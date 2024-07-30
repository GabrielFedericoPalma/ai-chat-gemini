<template>
    <div class="cursor-pointer" 
    :class="[
        propsObject.textColor,
        propsObject.textAlign,
        propsObject.width,
        propsObject.maxWidth,
        propsObject.padding,
        localStore.bgButton
      ]" >
        {{ propsObject.text }}
    </div>
</template>
    
<script setup lang='ts'>
import { useLocalStore } from '../stores/local';

const localStore = useLocalStore()

const props = defineProps({
  propsObject: {
    type: Object,
    required: true
  }
});

</script>
    
<style>
    
</style>