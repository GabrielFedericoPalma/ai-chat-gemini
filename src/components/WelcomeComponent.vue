<template>

    <article class="flex flex-col justify-center justify-items-center px-3 pt-8 pb-[80px] w-full max-w-96 mx-auto" >
        <section class="relative flex justify-center max-w-64 mx-auto">
            <img :src="friend.photo" alt="" class="w-full max-w-64 rounded-full cursor-pointer" >
            <aside class="flex flex-col justify-center absolute top-0 right-0 h-16 w-16 rounded-full bg-green-300" >
                <span class="text-sm text-center text-white" >{{ friend.status }}</span>
            </aside>
        </section>
        <section>
            <section class="flex justify-between">
                <p>{{ friend.firstName }}, {{ friend.age }}</p>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </p>
            </section>
            <p class="text-red-600" >{{ friend.location }}</p>
            <p>{{ friend.description }}</p>
        </section>
    </article>    
    <section class="flex justify-center fixed bottom-0 m-2 w-full max-w-lg" >
        <Button :propsObject="buttonPropsObject" @click="$router.push('/chat')" ></Button>
    </section>
</template>

<script setup lang="ts">
import { useSearchFriendStore } from '../stores/searchFriend';
import { useLocalStore } from '../stores/local';
import Button from '../components/ButtonComponent.vue'

import { ref } from 'vue';

const friendStore = useSearchFriendStore()
const localStore = useLocalStore()

const friend = friendStore.friend[0]

const buttonPropsObject = ref({
  text: 'START',
  bgColor: 'bg-slate-900',
  textColor: 'text-white',
  textAlign: 'text-center',
  width: 'w-full',
  maxWidth: 'max-w-80',
  padding: 'py-2'
});

</script>

<style></style>
