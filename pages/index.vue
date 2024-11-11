<script setup lang="ts">
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from '~/store/user';

const isPosts = ref(false);
const userStore = useUserStore()

</script>

<template>
    <MainLayout>
        <div id="index-page" class="w-full overflow-auto">
            <div class="w-full max-w-[500px] mx-auto">
                <div id="posts" class="px-4 max-w-[600px] mx-auto">
                    <div v-if="isPosts" v-for="post in userStore.posts" :key="post">

                    </div>
                </div>
            </div>
x
        </div>
    </MainLayout>
</template>