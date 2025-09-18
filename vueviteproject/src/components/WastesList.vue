<script setup lang="ts">
    import { ref, computed, watch } from 'vue';
    import { WASTE_CATEGORIES } from '../constants/categories';
    import { SORT_OPTIONS } from '../constants/sorting';
    import type { Waste } from '../types/waste';

    const totalAmount = ref(0);
    const page = ref(1);
    const pageSize = ref(4);

    const props = defineProps<{
        wastes: Waste[]
    }>();

    const emit = defineEmits<{
        deleteWaste: [id: number]
    }>();
    
    const deleteWaste = (id: number) => {
        emit('deleteWaste', id);
    };

    watch(() => props.wastes, (newWastes) => {
        totalAmount.value = newWastes.reduce((acc, waste) => acc + waste.amount, 0);
    }, { deep: true, immediate: true });

    // Ограничиваем отображение до 5 записей на странице
    const displayedWastes = computed(() => {
        return props.wastes.slice((page.value - 1) * pageSize.value, page.value * pageSize.value);
    });
</script>

<template>
    <section id="wastes-list_wrapper">
        <div class="wastes-list_header">
            <h2 class="wastes-list_title">Список затрат</h2>
            <div class="wastes-list-filter_wrapper">
                <div class="wastes-list-filter_item">
                    <label class="wastes-list-filter_label">Сортировка</label>
                    <select class="wastes-list-filter_select">
                        <option v-for="option in SORT_OPTIONS" :key="option.value" :value="option.value">
                            {{ option.label }}
                        </option>
                    </select>
                </div>
                <div class="wastes-list-filter_item">
                    <label class="wastes-list-filter_label">Фильтр по категориям</label>
                    <select class="wastes-list-filter_select">
                        <option value="">Все категории</option>
                        <option v-for="category in WASTE_CATEGORIES" :key="category" :value="category">
                            {{ category }}
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <div class="wastes-list_main">
            <table class="wastes-list_table">
                <thead>
                    <tr>
                        <th scope="col">Описание</th>
                        <th scope="col">Сумма</th>
                        <th scope="col">Категория</th>
                        <th scope="col">Дата</th>
                        <th scope="col">Действия</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="waste in displayedWastes" :key="waste.id">
                        <tr>
                            <td>{{ waste.description }}</td>
                            <td>{{ waste.amount }}</td>
                            <td>{{ waste.category }}</td>
                            <td>{{ waste.date }}</td>
                            <td>
                                <button class="wastes-list_table_button" @click="deleteWaste(waste.id)">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 4H14M12.6667 4V13.3333C12.6667 13.7015 12.5262 14.0544 12.2761 14.3045C12.0261 14.5545 11.6732 14.6667 11.3333 14.6667H4.66667C4.32681 14.6667 3.97391 14.5545 3.72386 14.3045C3.47381 14.0544 3.33333 13.7015 3.33333 13.3333V4M5.33333 4V2.66667C5.33333 2.29848 5.47381 1.94557 5.72386 1.69552C5.97391 1.44548 6.32681 1.33333 6.66667 1.33333H9.33333C9.67319 1.33333 10.0261 1.44548 10.2761 1.69552C10.5262 1.94557 10.6667 2.29848 10.6667 2.66667V4" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6.66669 7.33333V11.3333" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9.33331 7.33333V11.3333" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
        <div class="wastes-list_footer">
            <p class="wastes-list_footer_text">Итого: <span class="wastes-list_footer_text_amount">{{ totalAmount }}</span> ₽</p>
            <div class="wastes-list-pagination_wrapper">
                <button class="wastes-list-pagination_button" @click="page--" :disabled="page <= 1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <p class="wastes-list-pagination_text">{{ page }}</p>
                <button class="wastes-list-pagination_button" @click="page++" :disabled="page >= Math.ceil(props.wastes.length / pageSize)">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
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

    .wastes-list-filter_wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 16px;
    }

    .wastes-list-filter_item {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
    }

    .wastes-list-filter_label {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 13px;
        line-height: 18px;
        color: #71717A;
        margin: 0;
        white-space: nowrap;
    }

    .wastes-list-filter_select {
        min-width: 160px;
        height: 36px;
        padding: 0 10px;
        border: 1px solid #E4E4E7;
        border-radius: 6px;
        background-color: #FFFFFF;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 14.1px;
        line-height: 20px;
        color: #09090B;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        outline: none;
        box-sizing: border-box;
    }

    .wastes-list-filter_select:hover {
        border-color: #D4D4D8;
        background-color: #F8F9FA;
    }

    .wastes-list-filter_select:focus {
        border-color: #18181B;
        box-shadow: 0 0 0 2px rgba(24, 24, 27, 0.1);
    }

    .wastes-list-filter_select option {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 14.1px;
        color: #09090B;
        background-color: #FFFFFF;
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
    }

    .wastes-list_table {
        width: 100%;
        height: 100%;
        min-height: 350px;
        background-color: #fff;
        border-collapse: collapse;
        table-layout: fixed;
    }

    .wastes-list_table th {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-style: normal;
        font-size: 14.1px;
        line-height: 20px;
        letter-spacing: 0px;
        color: #71717A;
        text-align: left;
        vertical-align: middle;
        height: 48px;
        padding: 0 16px;
        border-bottom: 1px solid #E4E4E7;
        background-color: #FAFAFA;
        width: 20%;
    }

    .wastes-list_table td {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 14.1px;
        line-height: 20px;
        letter-spacing: 0px;
        color: #09090B;
        text-align: left;
        vertical-align: middle;
        height: 73px;
        box-sizing: border-box;
        padding: 0 16px;
        border-bottom: 1px solid #E4E4E7;
        width: 20%;
    }

    .wastes-list_table tr:hover td {
        background-color: #F8F9FA;
    }

    .wastes-list_table tbody tr:last-child td {
        border-bottom: none;
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

    .wastes-list_table_button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 6px;
        border: 1px solid #E4E4E7;
        background-color: #FFFFFF;
        color: #71717A;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        mix-blend-mode: normal;
        padding: 0;
        margin: 0;
    }

    .wastes-list_table_button:hover {
        background-color: #FEF2F2;
        border-color: #FCA5A5;
        color: #DC2626;
        transform: scale(1.05);
    }

    .wastes-list_table_button:active {
        transform: scale(0.95);
    }

    .wastes-list_table_button svg {
        width: 16px;
        height: 16px;
        transition: color 0.2s ease-in-out;
    }

    .wastes-list_table th:last-child {
        text-align: right;
    }

    .wastes-list_table td:last-child {
        text-align: right;
        padding: 0 16px;
    }

    .wastes-list-pagination_button {
        width: 40px;
        height: 40px;
        border-radius: 6px;
        border: 1px solid #E4E4E7;
        background-color: #FFFFFF;
        color: #09090B;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease-in-out;
        padding: 0;
        margin: 0;
    }

    .wastes-list-pagination_button:hover:not(:disabled) {
        background-color: #F8F9FA;
        border-color: #D4D4D8;
    }

    .wastes-list-pagination_button:disabled {
        opacity: 50%;
        cursor: not-allowed;
        color: #A1A1AA;
    }

    .wastes-list-pagination_button svg {
        width: 16px;
        height: 16px;
        transition: color 0.2s ease-in-out;
    }

    .wastes-list-pagination_text {
        width: 40px;
        height: 40px;
        border-radius: 6px;
        border: 1px solid #E4E4E7;
        background-color: #FFFFFF;
        color: #09090B;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>