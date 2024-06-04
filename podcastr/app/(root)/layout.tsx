import LeftSidebar from "@/components/ui/LeftsSideBar";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html>
      <body>
      <LeftSidebar />
        <main>{children}</main>
      </body>
    </html>
    );
  }