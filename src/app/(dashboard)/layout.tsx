import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Dashboard da escola",
  description: "Dashboard do adiminstrador da Escola",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>{children}</main>
  );
}
