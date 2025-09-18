<script setup lang="ts">
    import AddWaste from './AddWaste.vue';
    import WastesList from './WastesList.vue';
    import { ref } from 'vue';
    import type { Waste, WasteFormData } from '../types/waste';
    
    let nextId = 1;
    
    const addWaste = (wasteData: WasteFormData) => {
        const waste: Waste = {
            ...wasteData,
            id: nextId++,
            amount: Number(wasteData.amount),
            category: wasteData.category as any // Temporary cast until form validation is updated
        };
        wastes.value.push(waste);
    }

    const deleteWaste = (id: number) => {
        wastes.value = wastes.value.filter(waste => waste.id !== id);
    }

    const wastes = ref<Waste[]>([])
</script>

<template>
    <div class="calc-page_container">
        <header class="calc-page_header">
            <h1 class="calc-page_title">Калькулятор затрат</h1>
        </header>
        <main class="calc-page_main">
            <AddWaste @addWaste="addWaste" />
            <WastesList :wastes="wastes" @deleteWaste="deleteWaste" />
        </main>
    </div>
</template>

<style scoped>
    .calc-page_container {
        max-width: 1400px;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 32px;
    }

    .calc-page_header {
        width: 100%;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .calc-page_main {
        width: 100%;
        height: 100%;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 32px;
    }
    
    .calc-page_title {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 31.1px;
        line-height: 36px;
        color: #000000;
    }
</style>