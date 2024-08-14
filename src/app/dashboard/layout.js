import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="flex bg-[#E6E6E6] min-h-screen h-full">
          <Sidebar />
          <div className="laptop:ml-[252px] w-full flex flex-col">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
