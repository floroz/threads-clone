<script setup lang="ts">
import { useUserStore } from '~/store/user';

const userStore = useUserStore();

</script>
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
                    <Icon name="material-symbols:home-outline" size="35" class="bg-white"/>
                </button>
                <button @click="userStore.isMenuOverlay = true" class="w-full h-full">
                    <Icon name="material-symbols:edit-square-outline-rounded" size="32" class="bg-white mb-1"/>
                </button>
                <button @click="userStore.isLogoutOverlay = true" class="w-full h-full">
                    <Icon name="ph:sign-out" size="32" class="bg-white mb-1"/>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>