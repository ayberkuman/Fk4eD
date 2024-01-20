"use client";
import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
} from "lucide-react";
import { Toggle } from "./toggle";
import { Icons } from "@/assets/Icons";

interface ToolbarProps {
  editor: Editor | null;
}
export default function Toolbar({ editor }: ToolbarProps) {
  if (!editor) {
    return null;
  }
  return (
    <div>
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Icons.bold />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Icons.italic />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("underline")}
        onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
      >
        <Icons.underline />
      </Toggle>
      <Toggle
        size="sm"
       
      >
        <Icons.alignLeft />
      </Toggle>
    </div>
  );
}
