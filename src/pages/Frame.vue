<template>
    <div class="bg-black">
        <h1 class="text-sm font-bold p-20 text-gray-100">
            Frame
        </h1>
        <div class="text-gray-100 p-20">
            <p v-for="(message, index) in messages" :key="index">{{ message }}</p>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const messages = ref([""]);
onMounted(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'getContent' }, (response) => {
            if (chrome.runtime.lastError) {
                console.error('Error sending message:', chrome.runtime.lastError.message)
            } else if (response.success) {
                console.log('Received greeting:', response.content)
                messages.value = response.content
            } else {
                console.error('Error in response:', response.error)
            }
        })
    })
})

</script>