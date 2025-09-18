// Цветовая палитра дизайн-системы
export const COLORS = {
  // Основные цвета
  primary: '#18181B',      // Основной черный
  secondary: '#09090B',    // Текст
  white: '#FFFFFF',        // Белый
  
  // Серые оттенки
  gray: {
    50: '#FAFAFA',          // Фон заголовков
    100: '#F8F9FA',         // Hover состояния
    200: '#E4E4E7',         // Границы
    300: '#D4D4D8',         // Hover границы
    400: '#A1A1AA',         // Disabled текст
    500: '#71717A',         // Вторичный текст
  },
  
  // Состояния
  error: '#ef4444',         // Ошибки
  errorLight: '#FEF2F2',   // Фон ошибки
  errorBorder: '#FCA5A5',  // Граница ошибки
  errorText: '#DC2626',    // Текст ошибки
  
  // Специальные
  success: '#22c55e',      // Успех
  warning: '#f59e0b',      // Предупреждение
} as const;

export type ColorKey = keyof typeof COLORS;
export type GrayShade = keyof typeof COLORS.gray;
