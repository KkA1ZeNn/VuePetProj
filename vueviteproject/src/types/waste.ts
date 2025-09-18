import type { WasteCategory } from '../constants/categories';

// Основной интерфейс для затраты
export interface Waste {
  id: number;
  description: string;
  amount: number;
  category: WasteCategory;
  date: string;
}

// Данные формы (без ID)
export interface WasteFormData {
  description: string;
  amount: string | number;
  category: WasteCategory | '';
  date: string;
}

// Ошибки валидации формы
export interface WasteFormErrors {
  description: string;
  amount: string;
  category: string;
  date: string;
}

// Опции сортировки
export type SortOption = 
  | 'date-desc' 
  | 'date-asc' 
  | 'amount-desc' 
  | 'amount-asc' 
  | 'description-asc' 
  | 'description-desc'
  | '';

// Опции фильтрации
export interface FilterOptions {
  category: WasteCategory | '';
  sort: SortOption;
}
