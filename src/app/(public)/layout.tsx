import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main id="contenido" tabIndex={-1} className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
