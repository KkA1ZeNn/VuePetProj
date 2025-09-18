import type { SortOption } from '../types/waste';

// Опции сортировки для селекта
export const SORT_OPTIONS: Array<{ value: SortOption; label: string }> = [
  { value: '', label: 'Выберите сортировку' },
  { value: 'date-desc', label: 'По дате (новые)' },
  { value: 'date-asc', label: 'По дате (старые)' },
  { value: 'amount-desc', label: 'По сумме (больше)' },
  { value: 'amount-asc', label: 'По сумме (меньше)' },
  { value: 'description-asc', label: 'По описанию (А-Я)' },
  { value: 'description-desc', label: 'По описанию (Я-А)' },
] as const;
