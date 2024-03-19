import { MenuAppBar } from "@/components/menus/MenuHorizontal";
import { MenuAppBarVertical } from "@/components/menus/MenuVertical";
import { Metadata } from "next";

export const metadata : Metadata = {
    title : "Dashboard da escola",
    description : "Este e um aplicativo para gerenciar uma escola"
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main>
        <MenuAppBar />
        <MenuAppBarVertical />
        <div className="pl-[220px] pt-[80px]">
            {children}
        </div>
    </main>
  );
}

