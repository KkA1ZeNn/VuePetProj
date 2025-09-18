// UI константы дизайн-системы

export const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '25px',
  xxl: '32px',
} as const;

export const BORDER_RADIUS = {
  sm: '6px',
  md: '8px',
} as const;

export const BUTTON_SIZES = {
  small: {
    width: '36px',
    height: '36px',
  },
  medium: {
    width: '40px',
    height: '40px',
  },
  large: {
    width: '48px',
    height: '48px',
  },
} as const;

export const INPUT_SIZES = {
  small: {
    height: '36px',
    padding: '8px 10px',
  },
  medium: {
    height: '40px',
    padding: '10px 12px',
  },
} as const;

export const TABLE_SETTINGS = {
  rowHeight: '73px',
  headerHeight: '48px',
  minHeight: '350px',
  columnWidth: '20%',
} as const;

export const TRANSITIONS = {
  fast: 'all 0.2s ease-in-out',
  normal: 'all 0.3s ease-in-out',
} as const;
