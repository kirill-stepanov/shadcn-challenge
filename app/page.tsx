import HomeContent from "@/components/home/HomeContent";
import AppSidebar from "@/components/common/Sidebar/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const Home = () => {
  return (
    <SidebarProvider className="mt-14">
      <AppSidebar />
      <HomeContent />
    </SidebarProvider>
  );
};

export default Home;
