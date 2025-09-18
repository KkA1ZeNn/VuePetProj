<script setup lang="ts">
    import { ref } from 'vue';

    const totalAmount = ref(0);
</script>

<template>
    <section id="wastes-list_wrapper">
        <div class="wastes-list_header">
            <h2 class="wastes-list_title">Список затрат</h2>
            <div class="wastes-list-filter_wrapper">

            </div>
        </div>
        <div class="wastes-list_main"></div>
        <div class="wastes-list_footer">
            <p class="wastes-list_footer_text">Итого: <span class="wastes-list_footer_text_amount">{{ totalAmount }}</span> ₽</p>
            <div class="wastes-list-pagination_wrapper">

            </div>
        </div>
    </section>
</template>

<style scoped>
#wastes-list_wrapper {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 25px;
        border: 1px solid #E4E4E7;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;
    }

    .wastes-list_header {
        width: 100%;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .wastes-list_title {
        font-family: 'Inter';
        font-style: semibold;
        font-weight: 600;
        font-size: 20.2px;
        line-height: 28px;
        color: #000;
    }

    .wastes-list-control_wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
    }

    .wastes-list_main {
        width: 100%;
        height: 100%;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .wastes-list_footer {
        width: 100%;
        min-height: 40px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .wastes-list_footer_text, .wastes-list_footer_text_amount  {
        font-family: 'Inter';
        font-style: semibold;
        font-weight: 600;
        font-size: 19.3px;
        line-height: 28px;
        color: #000;
        margin: 0;
        padding: 0;
    }

    .wastes-list-pagination_wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
    }
</style>