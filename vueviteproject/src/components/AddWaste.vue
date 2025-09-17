<script setup lang="ts">
import { reactive, watch } from 'vue'
import InputField from './InputField.vue'

// Данные формы в одном объекте
const formData = reactive({
  description: '',
  amount: '' as string | number,
  category: '',
  date: ''
})

// Ошибки в одном объекте
const errors = reactive({
  description: '',
  amount: '',
  category: '',
  date: ''
})

// Опции для категорий
const categoryOptions = ['Продукты', 'Транспорт', 'Развлечения', 'Здоровье', 'Образование', 'Другое']

// Правила валидации
const validationRules = {
  description: {
    validate: (value: string | number) => !!String(value).trim(),
    message: 'Это поле обязательно для заполнения',
    clearCondition: (value: string | number) => !!String(value).trim()
  },
  amount: {
    validate: (value: string | number) => !!value && Number(value) > 0,
    message: 'Некорректная сумма', 
    clearCondition: (value: string | number) => !!value && Number(value) > 0
  },
  category: {
    validate: (value: string | number) => !!String(value),
    message: 'Выберите категорию',
    clearCondition: (value: string | number) => !!String(value)
  },
  date: {
    validate: (value: string | number) => !!String(value),
    message: 'Укажите дату',
    clearCondition: (value: string | number) => !!String(value)
  }
}

// Универсальная функция валидации поля
const validateField = (fieldName: keyof typeof formData): boolean => {
  const rule = validationRules[fieldName]
  const value = formData[fieldName]
  
  if (rule.validate(value)) {
    errors[fieldName] = ''
    return true
  } else {
    errors[fieldName] = rule.message
    return false
  }
}

// Универсальный watch для всех полей
Object.keys(formData).forEach(fieldName => {
  watch(
    () => formData[fieldName as keyof typeof formData],
    (newValue) => {
      const rule = validationRules[fieldName as keyof typeof validationRules]
      if (rule.clearCondition(newValue)) {
        errors[fieldName as keyof typeof errors] = ''
      }
    }
  )
})

// Валидация всей формы
const validateForm = (): boolean => {
  const fieldNames = Object.keys(formData) as Array<keyof typeof formData>
  const results = fieldNames.map(fieldName => validateField(fieldName))
  return results.every(Boolean)
}

// Очистка формы
const resetForm = () => {
  Object.keys(formData).forEach(key => {
    formData[key as keyof typeof formData] = ''
  })
  
  Object.keys(errors).forEach(key => {
    errors[key as keyof typeof errors] = ''
  })
}

// Добавление затраты
const addWaste = () => {
  if (validateForm()) {
    console.log('Затрата успешно добавлена:', { ...formData })
    resetForm()
  }
}
</script>

<template>
    <section id="add-waste_wrapper">
        <div class="add-waste_header">
            <h2 class="add-waste_title">Добавить новую затрату</h2>
        </div>
        <div class="add-waste_main">
            <div class="add-waste_main_item">
                <InputField 
                    type="text" 
                    label="Описание" 
                    placeholder="Введите описание затраты"
                    v-model="formData.description"
                    :error="errors.description"
                />
                <InputField 
                    type="number" 
                    label="Сумма (₽)" 
                    placeholder="0"
                    v-model="formData.amount"
                    :error="errors.amount"
                />
            </div>
            <div class="add-waste_main_item">
                <InputField 
                    type="select" 
                    label="Категория" 
                    placeholder="Выберите категорию"
                    :options="categoryOptions"
                    v-model="formData.category"
                    :error="errors.category"
                />
                <InputField 
                    type="date" 
                    label="Дата"
                    v-model="formData.date"
                    :error="errors.date"
                />
            </div>
            <button class="add-waste_main_item_button" @click="addWaste">Добавить затрату</button>
        </div>
    </section>
</template>

<style scoped>
    #add-waste_wrapper {
        width: 100%;
        box-sizing: border-box;
        padding: 25px;
        border: 1px solid #E4E4E7;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 24px;
    }

    .add-waste_header {
        width: 100%;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .add-waste_title {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 24.2px;
        line-height: 24px;
        letter-spacing: -0.6px;

        color: #09090B;
    }

    .add-waste_main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;
    }

    .add-waste_main_item {
        width: 100%;
        background-color: #fff;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
    }

    .add-waste_main_item_button {
        width: 100%;
        min-height: 40px;
        background-color: #18181B;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14.1px;
        line-height: 20px;
        color: #FAFAFA;
        padding: 0;
        border: none;
        border-radius: 6px;
        cursor: pointer;
    }

    .add-waste_main_item_button:hover {
        background-color: #FAFAFA;
        color: #18181B;
        border: 1px solid #18181B;
    }
</style>