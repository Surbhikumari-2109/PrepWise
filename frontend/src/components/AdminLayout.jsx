import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Mobile Header */}

      <div className="lg:hidden flex items-center justify-between p-4 border-b border-slate-800">

        <h1 className="text-2xl font-bold text-violet-400">
          PrepWise
        </h1>

        <button
          onClick={() => setSidebarOpen(true)}
          className="text-3xl"
        >
          <HiMenu />
        </button>

      </div>

      <div className="flex">

        {/* Desktop Sidebar */}

        <div className="hidden lg:block">
          <AdminSidebar />
        </div>

        {/* Mobile Sidebar */}

        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/60 z-40"
              onClick={() => setSidebarOpen(false)}
            />

            <div className="fixed left-0 top-0 w-72 h-screen z-50">
              <AdminSidebar
                closeSidebar={() =>
                  setSidebarOpen(false)
                }
              />

              <button
                onClick={() =>
                  setSidebarOpen(false)
                }
                className="
                absolute
                top-5
                right-5
                text-3xl
                text-white
                "
              >
                <HiX />
              </button>
            </div>
          </>
        )}

        {/* Main Content */}

        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>

      </div>
    </div>
  );
};

export default AdminLayout;