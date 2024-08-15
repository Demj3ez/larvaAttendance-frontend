import AdminNav from "@/components/AdminNav";

export default function AdminDashboardLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <main className="flex flex-col bg-[#E6E6E6] min-h-screen h-full">
            <AdminNav />
            {children}
          </main>
        </body>
      </html>
    );
  }