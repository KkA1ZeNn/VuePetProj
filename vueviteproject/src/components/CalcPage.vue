<script setup lang="ts"></script>

<template>
    <div class="calc-page_container">
        <header class="calc-page_header">
            <h1 class="calc-page_title">Калькулятор затрат</h1>
        </header>
    </div>
</template>

<style scoped>
    .calc-page_container {
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
        height: 100px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
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