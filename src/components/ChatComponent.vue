<template>

    <article class="flex flex-col justify-center justify-items-center px-3 pt-8 pb-16 w-full" >
        <section class="flex flex-col justify-between" v-for="item in chatMessages" :key="item.id" >    

            <div class="flex flex-row self-end mb-2" v-if="item.type === 'friend'" >
                <span class="max-w-80 bg-blue-200 text-md py-4 px-2 rounded" >{{ item.value }}</span>
                <span class="triangle_right mt-[-11px]" ></span>
                <img src="/img/friend.jpg" alt="Friend" class="max-w-16 h-16 w-16 ml-1 rounded-full" >
            </div>
            
            <div class="flex flex-row self-start mb-2" v-if="item.type === 'profile'" @click="$router.go(-1)" >
                <img src="/img/profile.jpg" alt="Friend" class="max-w-16 h-16 w-16 mr-1 rounded-full" >
                <span class="triangle_left mt-[-11px]" ></span>
                <span class="max-w-80 bg-white py-4 px-2 rounded" >{{ item.value }}</span>
            </div>

        </section>
    </article>    
    <section class="flex justify-center fixed bottom-0 w-full max-w-lg bg-slate-900 p-2" >
        <input type="text" placeholder="Write a message..." class="block w-full max-w-80 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="inputText"  >
        <button @click="sendMessage" type="button" class="ml-2" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="size-6">
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
        </button>
    </section>
</template>

<script setup lang="ts">

import { storeToRefs } from 'pinia';

import { useChatStore } from '../stores/chat';

import { ref } from 'vue';

const inputText = ref('')
const chatStore = useChatStore()
const chatStoreToRefs = storeToRefs(chatStore)
const chatMessages = chatStoreToRefs.messages

chatStore.randomMessage('friend')

const sendMessage = () => {
    chatStore.randomMessage('profile', inputText.value)

    setTimeout(() => {
        chatStore.randomMessage('friend')
    }, 1000)
}
</script>

<style scoped >
.triangle_right:after {
    content:'';
    width: 0;
    height: 0;
    border-bottom: 5px solid transparent;
    border-left: 5px solid #bfdbfe;
    font-size: 8px;
    margin-left: -3px;
}
.triangle_left:before {
    content:'';
    width: 0;
    height: 0;
    border-bottom: 5px solid transparent;
    border-right: 5px solid #fff;
    font-size: 8px;
    margin-left: -3px;
}
</style>
