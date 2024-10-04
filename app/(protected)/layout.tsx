import LayoutSide from "@/components/layout/layout-side";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BASE",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <LayoutSide>{children}</LayoutSide>;
}
