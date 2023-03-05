import { z } from "zod";

export const newsletterFormValidationSchema = z.object({
  newsletterEmail: z.string().email({
    message: "Por favor, insira um e-mail válido.",
  }),
});

export type RegisterNewsletterFormData = z.infer<
  typeof newsletterFormValidationSchema
>;
