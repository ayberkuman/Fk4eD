"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import TipTap from "./tip-tap";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

export const formSchema = z.object({
  textEditorForm: z.any(),
});

export default function TextEditor() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      textEditorForm:""
    },
  });

  function onSubmit(input: z.infer<typeof formSchema>) {
    return toast({
      title: "You Submitted",
      description: <code className="bg-slate-900">{JSON.stringify(input.textEditorForm, null, 2)}</code>,
      variant: "default",
    });
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
          <div className="ml-auto w-min">
            <Button
              className="bg-[#7367F0] hover:bg-[#7367F0]/80 px-5 rounded-lg"
              type="submit"
              size="default"
            >
              Send
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
