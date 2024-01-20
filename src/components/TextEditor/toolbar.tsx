"use client";
import { Icons } from "@/assets/Icons";
import { type Editor } from "@tiptap/react";
import { Toggle } from "../ui/toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";

const FONT_SIZES = ["14", "16", "18", "20", "24", "28"];

interface ToolbarProps {
  editor: Editor | null;
}
export default function Toolbar({ editor }: ToolbarProps) {
  const [fontSize, setFontSize] = useState("14");
  if (!editor) {
    return null;
  }
  return (
    <div className="flex items-center gap-[10px] p-3 border-[1px] border-[#DBDADE] rounded-md rounded-b-lg -my-1 text-[#4B465C] *:border-[#DBDADE] *:border-[1px] *:py-[6px] *:px-[10px]">
      <Toggle
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Icons.bold />
      </Toggle>
      <Toggle
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Icons.italic />
      </Toggle>
      <Toggle
        pressed={editor.isActive("underline")}
        onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
      >
        <Icons.underline />
      </Toggle>
      <Toggle
        pressed={editor.isActive({ textAlign: "left" })}
        onPressedChange={() =>
          editor.chain().focus().setTextAlign("left").run()
        }
      >
        <Icons.alignLeft />
      </Toggle>
      <Toggle
        pressed={editor.isActive({ textAlign: "center" })}
        onPressedChange={() =>
          editor.chain().focus().setTextAlign("center").run()
        }
      >
        <Icons.alignCenter />
      </Toggle>
      <Toggle
        pressed={editor.isActive({ textAlign: "right" })}
        onPressedChange={() =>
          editor.chain().focus().setTextAlign("right").run()
        }
      >
        <Icons.alignRight />
      </Toggle>
      <Toggle
        pressed={editor.isActive({ textAlign: "justify" })}
        onPressedChange={() =>
          editor.chain().focus().setTextAlign("justify").run()
        }
      >
        <Icons.alignJustify />
      </Toggle>
      <Toggle
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => {
          () => editor.chain().focus().toggleBulletList().run();
        }}
      >
        <Icons.list />
      </Toggle>
      <Toggle
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <Icons.listNumbered />
      </Toggle>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex text-[#4B465C] text-[15px] p-0 max-h-9">
          <div>{fontSize}</div>
          <Icons.arrows />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {FONT_SIZES.map((size) => (
            <DropdownMenuItem
              key={size}
              onClick={() => {
                editor.commands.setFontSize(size);
                setFontSize(size);
              }}
            >
              {size}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Toggle
        pressed={editor.isActive("undo")}
        onPressedChange={() => editor.chain().focus().undo().run()}
      >
        <Icons.undo />
      </Toggle>
      <Toggle
        pressed={editor.isActive("redo")}
        onPressedChange={() => editor.chain().focus().redo().run()}
      >
        <Icons.redo />
      </Toggle>
    </div>
  );
}
