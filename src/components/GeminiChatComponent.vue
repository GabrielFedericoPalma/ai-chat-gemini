<template>

    <article class="flex flex-col justify-center justify-items-center px-3 pt-8 pb-16 w-full" >
        <section class="flex flex-col justify-between" v-for="(item, index) in chatMessages" :key="index" >    

            <div class="flex flex-row self-end mb-2" v-if="item.role === 'model'" >
                <span class="max-w-80 bg-blue-200 text-md py-4 px-2 rounded" >{{ item.parts[0].text }}</span>
                <span class="triangle_right mt-[-11px]" ></span>
                <img src="/img/friend.jpg" alt="Friend" class="max-w-16 h-16 w-16 ml-1 rounded-full" >
            </div>
            
            <div class="flex flex-row self-start mb-2" v-if="item.role === 'user'" >
                <img src="/img/profile.jpg" alt="Friend" class="max-w-16 h-16 w-16 mr-1 rounded-full" >
                <span class="triangle_left mt-[-11px]" ></span>
                <span class="max-w-80 bg-white py-4 px-2 rounded" >{{ item.parts[0].text }}</span>
            </div>

        </section>
    </article>    
    <section class="flex justify-center fixed bottom-0 w-full max-w-lg bg-slate-900 p-2" >
        <input type="text" placeholder="Write a message..." class="block w-full max-w-80 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="prompt"  @keyup.enter="promptted()" ref="inputPrompt" >
        <button @click="promptted" type="button" class="ml-2" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="size-6">
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
        </button>
    </section>
</template>

<script setup lang="ts">

import { GoogleGenerativeAI } from "@google/generative-ai";
import { ref } from 'vue';

const prompt = ref('')
const inputPrompt = ref(null)
let chatMessages = ref([{}])

// Access your API key (see "Set up your API key" above)
const API_G = import.meta.env.VITE_API_GEMINI
const genAI = new GoogleGenerativeAI(API_G);

// The Gemini 1.5 models are versatile and work with multi-turn conversations (like chat)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

const chat = model.startChat({
    history: [],
    generationConfig: {
        maxOutputTokens: 100,
    },
});

const promptted = async () => {
    
    const promptValue = prompt.value
    
    chatMessages.value.push(
        {
            role: 'user', parts: [{text: promptValue}],
        },
        {
            role: 'model', parts: [{text: 'Thinking...'}]
        }
    );
    
    const result = await chat.sendMessage(prompt.value);

    // const response = await result.response;

    // const text = response.text();
    
    const response = await chat.getHistory() 
    // chatMessages.value = []    
    chatMessages.value = [...response]

    prompt.value = ''    
    // chatMessages = history
    // console.log(chatMessages.value);
    
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
