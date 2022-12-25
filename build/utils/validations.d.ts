import { z, infer as Infer } from 'zod';
export declare const excgangeSchema: z.ZodObject<{
    amount: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
}, "strip", z.ZodTypeAny, {
    amount: string;
}, {
    amount: string;
}>;
export type ExcgangeSchema = Infer<typeof excgangeSchema>;
//# sourceMappingURL=validations.d.ts.map