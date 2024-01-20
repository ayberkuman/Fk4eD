"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import TipTap from "./tip-tap";

export const formSchema = z.object({
  textEditorForm: z.string(),
});

export default function TextEditor() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      textEditorForm: "Hello World!",
    },
  });

  function onSubmit(input: z.infer<typeof formSchema>) {
    console.log(input);
  }

  return (
    <div className="max-w-screen-2xl mx-auto p-6 bg-white space-y-6">
      <h1 className="text-[#4B465C] font-semibold text-[22px]">Text Editor</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="textEditorForm"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <TipTap
                    description={field.value}
                    onChange={(desc) => field.onChange(desc)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
