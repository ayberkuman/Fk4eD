"use client";
import { TextEditorProps } from "@/components/TextEditor";
import { buttonVariants } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

//this component is just for demo purposes so i did not try to separate it into smaller components
//but in a real world scenario i would separate it into smaller components and 
//use mapping to not repeat myself
export default function UsageDemo({
  textEditorProps,
  setTextEditorProps,
}: {
  textEditorProps: TextEditorProps;
  setTextEditorProps: (props: TextEditorProps) => void;
}) {
  return (
    <div className="bg-white p-8 mt-10 max-w-lg mx-auto space-y-4">
      <h1 className="font-semibold text-xl text-center">Usage</h1>
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={textEditorProps.title}
          onChange={(e) =>
            setTextEditorProps({ ...textEditorProps, title: e.target.value })
          }
        />
      </div>
      <div className="flex items-center">
        <Switch
          checked={textEditorProps.withTitle}
          onCheckedChange={(checked) =>
            setTextEditorProps({ ...textEditorProps, withTitle: checked })
          }
          id="withTitle"
        />
        <Label className="ml-2" htmlFor="withTitle">
          With Title
        </Label>
      </div>
      <div>
        <Label htmlFor="buttonText">Button Text</Label>
        <Input
          id="buttonText"
          maxLength={10}
          value={textEditorProps.buttonText}
          onChange={(e) =>
            setTextEditorProps({
              ...textEditorProps,
              buttonText: e.target.value,
            })
          }
        />
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger
            className={cn(
              "capitalize",
              buttonVariants({
                variant: "outline",
              })
            )}
          >
            {textEditorProps.buttonAlignment}
            <ChevronDown className="ml-2 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() =>
                setTextEditorProps({
                  ...textEditorProps,
                  buttonAlignment: "left",
                })
              }
            >
              Left
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                setTextEditorProps({
                  ...textEditorProps,
                  buttonAlignment: "center",
                })
              }
            >
              Center
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                setTextEditorProps({
                  ...textEditorProps,
                  buttonAlignment: "right",
                })
              }
            >
              Right
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Label className="ml-2" htmlFor="buttonAlignment">
          Button Alignment
        </Label>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger
            className={cn(
              "capitalize",
              buttonVariants({
                variant: "outline",
              })
            )}
          >
            {textEditorProps.toolbarAlignment}
            <ChevronDown className="ml-2 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() =>
                setTextEditorProps({
                  ...textEditorProps,
                  toolbarAlignment: "left",
                })
              }
            >
              Left
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                setTextEditorProps({
                  ...textEditorProps,
                  toolbarAlignment: "center",
                })
              }
            >
              Center
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                setTextEditorProps({
                  ...textEditorProps,
                  toolbarAlignment: "right",
                })
              }
            >
              Right
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Label className="ml-2" htmlFor="toolbarAlignment">
          Toolbar Alignment
        </Label>
      </div>
    </div>
  );
}
