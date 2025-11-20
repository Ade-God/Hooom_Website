import type { Metadata } from "next";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";

export const metadata: Metadata = {
  title: "HoooM Technologies",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-slate-50 to-white">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
