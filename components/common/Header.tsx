import Searchbar from "@/components/common/Searchbar";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import BellRingIcon from "@/assets/icons/BellRingIcon";

const Header = () => {
  return (
    <div className="min-h-14 flex items-center justify-between fixed left-0 right-0 top-0 z-50 bg-primary pl-[135px] gap-4 pr-5">
      <div className="bg-[#303030] px-[10px] pt-[2px] pb-1 rounded-full xl:mr-30">
        <span className="text-xs leading-4 font-medium text-secondary">
          beta
        </span>
      </div>

      <Searchbar />

      <div className="flex items-center">
        <Button variant="secondary" size="sm" className="mr-4">
          Account plans
        </Button>

        <BellRingIcon className="cursor-pointer mr-[18px]" />

        <span className="text-primary-foreground font-medium text-sm leading-5 cursor-pointer">
          Support
        </span>

        <Avatar className="ml-[14px]">
          <AvatarFallback>KC</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
