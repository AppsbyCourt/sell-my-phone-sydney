import { z } from "zod";

export const conditionValues = ["brand-new", "like-new", "good", "has-issues"] as const;
export type Condition = (typeof conditionValues)[number];

export const conditionLabels: Record<Condition, string> = {
  "brand-new": "Brand new",
  "like-new": "Like new",
  good: "Good",
  "has-issues": "Has issues",
};

export const deviceSchema = z
  .object({
    model: z
      .string()
      .trim()
      .min(2, "Tell us the model (e.g. iPhone 14 Pro)")
      .max(120),
    condition: z.enum(conditionValues, {
      message: "Pick a condition",
    }),
    issues: z.string().trim().max(1000),
  })
  .refine(
    (d) => d.condition !== "has-issues" || d.issues.trim().length >= 3,
    {
      message: "Tell us a bit about the issues",
      path: ["issues"],
    },
  );

export type Device = z.infer<typeof deviceSchema>;

export const submissionSchema = z.object({
  devices: z.array(deviceSchema).min(1, "Add at least one device").max(10),
  name: z.string().trim().min(2, "Your name, please").max(120),
  phone: z
    .string()
    .trim()
    .min(8, "Phone number looks short")
    .max(20)
    .regex(/^[0-9+()\-\s]+$/, "Digits, spaces, +, ( ) and - only"),
  email: z.string().trim().toLowerCase().email("That email doesn't look right").max(200),
});

export type Submission = z.infer<typeof submissionSchema>;
