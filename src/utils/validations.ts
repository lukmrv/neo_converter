import { z, infer as Infer, object } from 'zod';

export const excgangeSchema = object({
  amount: z
    .string()
    .refine((data) => data.length, {
      message: 'Podaj wartość do przekonwertowania',
    })
    .refine((data) => new RegExp(/\d+/).test(data), {
      message: 'Pole musi zawierać wartość numeryczną!',
    }),
});
export type ExcgangeSchema = Infer<typeof excgangeSchema>;
