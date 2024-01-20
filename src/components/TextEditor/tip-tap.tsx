import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./toolbar";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import { TextStyleExtended } from "./extensions/font-size-extension";
export default function TipTap({
  description,
  onChange,
}: {
  description: string;
  onChange: (desc: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right", "justify"],
        defaultAlignment: "left",
      }),
      ListItem,
      BulletList,
      OrderedList,
      TextStyleExtended,
    ],
    content: description,
    editorProps: {
      attributes: {
        class:
          "border-x-[1px] border-x-[#DBDADE] border-b-[1px] border-b-[#DBDADE] rounded-md p-2 min-h-[250px] focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
      console.log(editor.getHTML());
    },
  });
  return (
    <div className="flex flex-col justify-stretch min-h-[250px]">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
