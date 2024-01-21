import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./toolbar";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import { TextStyleExtended } from "./extensions/font-size-extension";
import { TextEditorProps } from ".";
export default function TipTap({
  description,
  onChange,
  toolbarAlignment,
}: {
  description: string;
  onChange: (desc: string) => void;
  toolbarAlignment: TextEditorProps["toolbarAlignment"];
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
          "border-x-[1px] prose max-w-none border-x-[#DBDADE] border-b-[1px] border-b-[#DBDADE] rounded-md p-5 min-h-[250px] focus:outline-none text-[15px] text-[#4B465C]",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });
  return (
    <div className="flex flex-col justify-stretch min-h-[250px]">
      <Toolbar editor={editor} toolbarAlignment={toolbarAlignment} />
      <EditorContent editor={editor} />
    </div>
  );
}
