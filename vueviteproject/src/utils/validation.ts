// Правила валидации для форм

export interface ValidationRule {
  validate: (value: string | number) => boolean;
  message: string;
  clearCondition: (value: string | number) => boolean;
}

export const VALIDATION_RULES = {
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
} as const;

export type ValidationRuleKey = keyof typeof VALIDATION_RULES;
