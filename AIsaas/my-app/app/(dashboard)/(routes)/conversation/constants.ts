import *  as z from "zod";

export const formSchema = z.object({
    prompt: z.string().min(1, {
        message: "Prompt is required",
    }),
});

// Atleast 1 char is required otherwise it will show the message