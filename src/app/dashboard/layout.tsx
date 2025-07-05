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
  return (
    <div className="border-2 border-dashed p-4 w-1/2 mx-auto mt-10">
      <h2>Dashboard Layout</h2>
      <div className="flex gap-4">
        <Link
          className={pathname === "/dashboard/about" ? "text-purple-500" : ""}
          href="/dashboard/about">
          About
        </Link>
        <Link
          className={
            pathname === "/dashboard/settings" ? "text-purple-500" : ""
          }
          href="/dashboard/settings">
          Settings
        </Link>
      </div>
      {children}
    </div>
  );
}
