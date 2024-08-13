import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="flex bg-slate-200 w-screen min-h-screen h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
