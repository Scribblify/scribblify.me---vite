import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { IconRendererWithText } from "@/generic/icon-renderer";

const AvatarRenderer = () => {
  const [img, setImg] = useState<string>("https://github.com/scribblify.png");

  const convertFile = (files: FileList | null) => {
    if (files) {
      const fileRef = files[0] || "";
      const fileType: string = fileRef.type || "";
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);

      reader.onload = (ev: ProgressEvent<FileReader>) => {
        setImg(`data:${fileType};base64,${btoa(String(ev.target?.result))}`);
      };
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        accept=".png, .jpg, .jpeg, .gif"
        className="hidden"
        type="file"
        id="avatar"
        name="avatar"
        onChange={(e) => convertFile(e.target.files)}
      />
      <Label htmlFor="avatar">
        <Avatar className="w-[65px] h-[65px] cursor-pointer">
          <AvatarImage src={img} />
          <AvatarFallback className="bg-[#CC6566] text-white font-semibold text-[18px] dark:bg-[#CC6566] dark:border-[#2B2B2C]">
            A
          </AvatarFallback>
        </Avatar>
      </Label>
      <Label id="upload-button" htmlFor="avatar">
        <IconRendererWithText>Upload</IconRendererWithText>
      </Label>
      <Button
        onClick={() => setImg("")}
        variant="link"
        className="text-red-500 dark:text-red-500"
        type="button"
      >
        Remove
      </Button>
    </div>
  );
};

export default AvatarRenderer;
