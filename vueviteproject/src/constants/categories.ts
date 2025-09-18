// Список доступных категорий затрат
export const WASTE_CATEGORIES = [
  'Продукты',
  'Транспорт', 
  'Развлечения',
  'Здоровье',
  'Образование',
  'Другое'
] as const;

export type WasteCategory = typeof WASTE_CATEGORIES[number];
