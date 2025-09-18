import type { Waste, SortOption } from '../types/waste';

// Функции сравнения для разных типов данных
const compareStrings = (a: string, b: string): number => {
  return a.localeCompare(b, 'ru', { numeric: true });
};

const compareNumbers = (a: number, b: number): number => {
  return a - b;
};

const compareDates = (a: string, b: string): number => {
  return new Date(a).getTime() - new Date(b).getTime();
};

// Функции сортировки для каждого типа
const sortFunctions: Record<SortOption, (a: Waste, b: Waste) => number> = {
  '': () => 0, // Без сортировки
  
  'date-asc': (a, b) => compareDates(a.date, b.date),
  'date-desc': (a, b) => compareDates(b.date, a.date),
  
  'amount-asc': (a, b) => compareNumbers(a.amount, b.amount),
  'amount-desc': (a, b) => compareNumbers(b.amount, a.amount),
  
  'description-asc': (a, b) => compareStrings(a.description, b.description),
  'description-desc': (a, b) => compareStrings(b.description, a.description),
};

// Основная функция сортировки
export const sortWastes = (wastes: Waste[], sortType: SortOption): Waste[] => {
  // Если тип сортировки пустой или не задан
  if (!sortType) {
    return [...wastes]; // Возвращаем копию без сортировки
  }
  
  const sortFunction = sortFunctions[sortType];
  
  if (!sortFunction) {
    console.warn(`Неизвестный тип сортировки: ${sortType}`);
    return [...wastes];
  }
  
  return [...wastes].sort(sortFunction);
};
