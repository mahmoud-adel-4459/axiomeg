import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Preloader } from "@/components/layout/preloader";
import { ThemeProvider } from "@/components/theme/theme-provider";

type SiteLayoutProps = {
  children: React.ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-page text-ink">
        <Preloader />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
