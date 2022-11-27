export const containsIgnoreCase = (string: string | number, substring: string): boolean => String(string).toLocaleLowerCase().includes(substring.toLowerCase())

export const INPUT_TYPES = ['email', 'text', 'password', 'date']

export const capitalize = (string: string) : string => string[0].toLocaleUpperCase() + string.slice(1);

