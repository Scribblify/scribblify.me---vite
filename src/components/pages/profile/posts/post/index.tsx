import { Eye, Heart, MessageSquare } from "lucide-react";
import type { FC } from "react";
import { Link } from "react-router-dom";

const Post: FC = () => {
  return (
    <Link to="/@abduvoitov">
      <div className="rounded-3xl bg-white dark:bg-[#222222] p-4 w-full border dark:border-[#393939]  hover:border-[#000] dark:hover:border-[#fff] transition-colors">
        <h1 className="text-1xl font-bold">Greenshop - AEMA Internship</h1>
        <p className="mt-3 font-normal">
          Ushbu internship 2 ~ 3 oy davom etadi. Internship umumiy 6 stagedan
          iborat, xar bir stage tugagandan so'ng, gurhga birlashtirilgan mentor
          tomidan suhbat orqalik anashu stage ga tegishlik bo'lgan savol-javob
          qilinadi. Agar suhbat muvaffaqiyatli bo'lsa keyingi stage ga o'tish
          uchun ruxsat beriladi, aks xolda esa anashu stage ni qayta o'qishingiz
          kerak bo'ladi. Projectdan siz quyidagilarni o'rganasiz:
        </p>
        <div className="mt-3 flex gap-4">
          <p className="text-sm text-[#949494]">August 3, 10:54</p>
          <div className="flex gap-1 items-center text-sm text-[#949494]">
            <Eye strokeWidth={"1.5"} className="w-[18px] h-[18px]" />
            <span>0</span>
          </div>
          <div className="flex gap-1 items-center text-sm text-[#949494]">
            <MessageSquare strokeWidth={"1.5"} className="w-[18px] h-[18px]" />
            <span>0</span>
          </div>
          <div className="flex gap-1 items-center text-sm text-[#949494]">
            <Heart strokeWidth={"1.5"} className="w-[18px] h-[18px]" />
            <span>0</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
