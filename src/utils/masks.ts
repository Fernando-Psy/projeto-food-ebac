// src/utils/masks.ts

export const applyCepMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .substr(0, 9);
};

export const applyCardMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4} \d{4})(\d)/, '$1 $2')
    .replace(/(\d{4} \d{4} \d{4})(\d)/, '$1 $2')
    .substr(0, 19);
};

export const applyPhoneMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .substr(0, 15);
};

export const applyMonthMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .substr(0, 2);
};

export const applyYearMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .substr(0, 2);
};

export const applyCvvMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .substr(0, 3);
};

export const removeMask = (value: string): string => {
  return value.replace(/\D/g, '');
};