<template>
    <div id="main-layout" class="h-screen">
        <div class="w-full max-w-[500px] mx-auto">
            <div id="top-menu" class="w-full flex items-center justify-center px-2 h-10 my-2">
                <img src="/threads-logo.png" class="w-[35px]" alt="Threads Logo">
            </div>
        </div>
        <div id="content" class="w-full max-w-[500px] mx-auto">
            <slot></slot>  
        </div>
        <div id="bottom-nav" class="fixed z-50 bottom-0 flex w-full h-[70px] border-t border-t-gray-700 bg-black">
            <div class="flex w-full mx-auto flex items-center justify-around max-w-[500px]">
                <button @click="navigateTo('/')" class="w-full h-full">
                    <Icon name="home" size="35" color="#ffffff"/>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>