import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-5">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
