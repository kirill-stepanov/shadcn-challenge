import { getUsers } from "@/api/users";
import AddIcon from "@/assets/icons/AddIcon";
import { Button } from "@/components/ui/button";
import { SidebarInset } from "@/components/ui/sidebar";
import HomeTable from "@/components/home/HomeTable";

const HomeContent = async () => {
  const data = await getUsers();

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
        <HomeTable users={data.users ?? []} />
      </div>
    </SidebarInset>
  );
};

export default HomeContent;
