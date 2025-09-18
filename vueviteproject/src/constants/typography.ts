// Типографические константы дизайн-системы

export const FONT_FAMILY = "'Inter', sans-serif" as const;

export const FONT_WEIGHTS = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const FONT_SIZES = {
  xs: '10px',      // Ошибки
  sm: '13px',      // Мелкие лейблы
  base: '14px',    // Основной текст
  md: '14.1px',    // Текст в таблице/формах
  lg: '19.3px',    // Крупный текст (итого)
  xl: '20.2px',    // Заголовки секций
  '2xl': '24.2px', // Заголовки форм
  '3xl': '31.1px', // Главный заголовок
} as const;

export const LINE_HEIGHTS = {
  tight: '12px',   // Ошибки
  snug: '18px',    // Мелкие лейблы
  normal: '20px',  // Основной текст
  relaxed: '24px', // Заголовки форм
  loose: '28px',   // Заголовки секций/итого
  xl: '36px',      // Главный заголовок
} as const;

export const LETTER_SPACING = {
  tight: '-0.6px',
  normal: '0px',
} as const;
