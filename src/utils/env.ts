import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().nonempty(),
});

type Env = z.infer<typeof envSchema>;

export const ENV: Env = envSchema.parse(process.env);

export default ENV;
