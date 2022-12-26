import { z, infer as Infer, object } from 'zod';

// type AtCurrencyToNull<T> = { [K in keyof T]: K extends `currency_${string}` ? T[K] | null : T[K] };

export const excgangeSchema = object({
  amount: z
    .string()
    .refine((data) => data.length, {
      message: 'Podaj wartość do przekonwertowania',
    })
    .refine((data) => new RegExp(/\d+/).test(data), {
      message: 'Pole musi zawierać wartość numeryczną!',
    }),
  currency_from: z
    .object({
      label: z.string(),
      value: z.number(),
    })
    .refine((data) => data, {
      message: 'Wybierz walutę',
    })
    .nullable(),
  currency_to: z
    .object({
      label: z.string(),
      value: z.number(),
    })
    .refine((data) => data, {
      message: 'Wybierz walutę',
    })
    .nullable(),
});
export type ExcgangeSchema = Infer<typeof excgangeSchema>;
