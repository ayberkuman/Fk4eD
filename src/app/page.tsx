"use client";
import TextEditor, { TextEditorProps } from "@/components/TextEditor";
import UsageDemo from "@/components/UsageDemo";
import { useState } from "react";

export default function Home() {
  const [textEditorProps, setTextEditorProps] = useState<TextEditorProps>({
    title: "Text Editor",
    withTitle: true,
    buttonText: "Submit",
    buttonAlignment: "right",
    toolbarAlignment: "left",
  });

  return (
    <div className="min-h-screen bg-slate-200 p-12 ">
      <TextEditor {...textEditorProps} />
      <UsageDemo
        textEditorProps={textEditorProps}
        setTextEditorProps={setTextEditorProps}
      />
    </div>
  );
}
