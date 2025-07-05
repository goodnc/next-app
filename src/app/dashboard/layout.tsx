"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  console.log("pathname", pathname);
  const linkData = [
    {
      title: "About",
      href: "/dashboard/about",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
    },
  ];
  return (
    <div className="border-2 border-dashed p-4 w-1/2 mx-auto mt-10">
      <h2>Dashboard Layout</h2>
      <div className="flex gap-4">
        {linkData.map((item) => (
          <Link
            className={pathname === item.href ? "text-purple-500" : ""}
            key={item.title}
            href={item.href}>
            {item.title}
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
}
