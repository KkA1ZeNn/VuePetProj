// SVG иконки приложения

export const ICONS = {
  trash: `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4H14M12.6667 4V13.3333C12.6667 13.7015 12.5262 14.0544 12.2761 14.3045C12.0261 14.5545 11.6732 14.6667 11.3333 14.6667H4.66667C4.32681 14.6667 3.97391 14.5545 3.72386 14.3045C3.47381 14.0544 3.33333 13.7015 3.33333 13.3333V4M5.33333 4V2.66667C5.33333 2.29848 5.47381 1.94557 5.72386 1.69552C5.97391 1.44548 6.32681 1.33333 6.66667 1.33333H9.33333C9.67319 1.33333 10.0261 1.44548 10.2761 1.69552C10.5262 1.94557 10.6667 2.29848 10.6667 2.66667V4" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6.66669 7.33333V11.3333" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.33331 7.33333V11.3333" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  arrowLeft: `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  arrowRight: `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
} as const;

export type IconName = keyof typeof ICONS;
