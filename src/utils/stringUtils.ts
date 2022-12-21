import { IForm } from "../components/sections/BookSection/BookSection";

export const containsIgnoreCase = (string: string | number, substring: string): boolean => String(string).toLocaleLowerCase().includes(substring.toLowerCase())

export const INPUT_TYPES = ['email', 'text', 'password', 'date']

export const capitalize = (string: string): string => string[0].toLocaleUpperCase() + string.slice(1);


export const generateBookMsg = ( { email, name, phone, date, persons }: IForm) => {
    return `Dear ${name}! We'll wait on you ${+persons > 1 ? `and ${+persons - 1} your friends`: ''} ${date.replaceAll('T', ' at ')}. If something will change, we'll contact you by ${email} or ${phone}.`
}