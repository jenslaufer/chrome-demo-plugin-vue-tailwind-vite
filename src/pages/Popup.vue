<template>
    <div class="bg-black">
        <h1 class="text-sm font-bold p-8 text-gray-100">
            H1 Extractor Chrome Extension (Popup)
        </h1>
        <div class="flex justify-center bt-20 p-8">
            <a :href="url" target="_blank" class="text-white bg-red-600 hover:bg-red-800 px-3 py-2">Extension Home</a>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const url = ref('')

onMounted(() => {
    url.value = `chrome-extension://${chrome.runtime.id}/index.html#/`
})
</script>