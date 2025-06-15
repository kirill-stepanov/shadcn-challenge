import AddIcon from "@/assets/icons/AddIcon";
import { Button } from "@/components/ui/button";
import { SidebarInset } from "@/components/ui/sidebar";

const HomeContent = () => {
  return (
    <SidebarInset>
      <div className="px-15 py-5 border border-border">
        <div className="max-w-[1080px] flex items-center justify-between mx-auto">
          <div className="flex gap-[11px] items-baseline">
            <span className="font-semibold text-lg leading-6 ">
              Lorem ipsum
            </span>
            <span className="font-medium text-sm leading-5 text-secondary">
              (12)
            </span>
            <span className="font-medium text-sm leading-[18px]">
              Lorem ipsum dolar sit amet
            </span>
          </div>

          <Button>
            <AddIcon />
            Lorem ipsum
          </Button>
        </div>
      </div>

      <div className="px-15 py-[47px] w-full">
        <div className="bg-muted h-[213px] rounded-xl max-w-[1080px] flex items-center justify-between mx-auto" />
      </div>
    </SidebarInset>
  );
};

export default HomeContent;
