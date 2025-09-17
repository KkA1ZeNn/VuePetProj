<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type: 'text' | 'number' | 'select' | 'date'
  label: string
  placeholder?: string
  options?: string[]
  modelValue?: string | number
  error?: string
}

interface Emits {
  (e: 'update:modelValue', value: string | number): void
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  options: () => [],
  error: ''
})

const emit = defineEmits<Emits>()

const inputValue = computed({
  get: () => props.modelValue || '',
  set: (value) => emit('update:modelValue', value)
})
</script>

<template>
  <div class="input-field_container">
    <label class="input-field_label">{{ label }}</label>
    
    <div class="input-field_input-wrapper">
      <div v-if="error" class="input-field_error">{{ error }}</div>
      
      <input 
        v-if="type !== 'select'"
        v-model="inputValue"
        :type="type"
        :placeholder="placeholder"
        :class="['input-field_input', { 'input-field_input--error': error }]"
      />
      
      <select 
        v-else-if="type === 'select'"
        v-model="inputValue"
        :class="['input-field_input', 'input-field_select', { 'input-field_input--error': error }]"
      >
        <option value="" disabled>{{ placeholder || 'Выберите категорию' }}</option>
        <option v-for="option in options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.input-field_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-field_input-wrapper {
  position: relative;
  width: 100%;
}

.input-field_label {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #09090B;
}

.input-field_input {
  width: 100%;
  height: 40px;
  padding: 10px 12px;
  box-sizing: border-box;
  border: 1px solid #E4E4E7;
  border-radius: 6px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #09090B;
  background-color: #fff;
  outline: none;
  transition: border-color 0.2s ease;
}

.input-field_input:focus {
  border-color: #18181B;
}

.input-field_input::placeholder {
  color: #71717A;
}

.input-field_select {
  cursor: pointer;
}

.input-field_select option {
  padding: 8px;
}

.input-field_input--error {
  border-color: #ef4444 !important;
}

.input-field_error {
    position: absolute;
    top: -7px;
    left: 5px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #ef4444;
    background-color: #fff;
    padding: 0 2px;
    z-index: 10;
}
</style>
