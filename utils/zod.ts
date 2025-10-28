import * as z from "zod";

const emailSchema = z.object({
  name: z.string().min(1, { message: "Le nom est requis" }),
  email: z
    .string()
    .email({ message: "L'email doit être valide!" })
    .min(1, { message: "L'email est requis" }),
  message: z.string().min(1, { message: "Le Message est requis" }),
});

type SendMailFormValue = z.infer<typeof emailSchema>;

export { emailSchema, type SendMailFormValue };
