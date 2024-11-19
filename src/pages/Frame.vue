<template>
    <div class="bg-blue-400">
        <h1 class="text-2xl font-bold pt-6 px-6 text-black">
            This bar is from the H1 Extractor Chrome Extension
        </h1>
        <div class="text-black px-6 py-4 text-lg">
            <p>H1 headlines:</p>
            <p v-for="(message, index) in messages" :key="index">{{ message }}</p>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const messages = ref(["500"]);
onMounted(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'getContent' }, (response) => {
            if (chrome.runtime.lastError) {
                console.error('Error sending message:', chrome.runtime.lastError.message)
            } else if (response.success) {
                messages.value = response.content
            } else {
                console.error('Error in response:', response.error)
            }
        })
    })
})

</script>