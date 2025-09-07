//import { TwitterIcon } from "../icons/TwitterIcon";
import { DocumentGifIcon } from "../icons/DocumentIcon";
import { LinkGifIcon } from "../icons/LinkIcon";
import { LogoGifIcon } from "../icons/LogoIcon";
import { TwitterGifIcon } from "../icons/TwitterIcon";
import { YoutubeGifIcon } from "../icons/YouTubeIcon";
import { SidebarItem } from "./SidebarItem";




export function Sidebar() {
  return (
    <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
      <div className="flex items-center gap-3 text-2xl pt-4">
        <LogoGifIcon />
        <span className="font-bold">NeuroVault</span>
      </div>
      <div className="pt-10">
        <SidebarItem text="Twitter" icon={<TwitterGifIcon />} />
        <SidebarItem text="YouTube" icon={<YoutubeGifIcon />} />
        <SidebarItem text="Document" icon={<DocumentGifIcon />} />
        <SidebarItem text="Links" icon={<LinkGifIcon />} />
      </div>
    </div>
  );
}

