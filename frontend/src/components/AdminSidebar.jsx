import { NavLink } from "react-router-dom";

const AdminSidebar = ({ closeSidebar }) => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: "📊",
    },
    {
      name: "Subjects",
      path: "/admin/subjects",
      icon: "📚",
    },
    {
      name: "Question Bank",
      path: "/admin/questions",
      icon: "❓",
    },
    {
      name: "Notes",
      path: "/admin/notes",
      icon: "📝",
    },
    {
      name: "Mock Tests",
      path: "/admin/mocks",
      icon: "🎯",
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: "👥",
    },
    {
      name: "Results",
      path: "/admin/results",
      icon: "🏆",
    },
    {
      name: "Analytics",
      path: "/admin/analytics",
      icon: "📈",
    },
  ];

  return (
    <div
      className="
      w-72
      min-h-screen
      bg-slate-900
      border-r
      border-slate-800
      p-6
      "
    >

      <h1 className="text-3xl font-bold text-violet-400 mb-10">
        PrepWise
      </h1>

      <div className="space-y-3">

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/admin"}
            onClick={() =>
              closeSidebar?.()
            }
            className={({ isActive }) =>
              `
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-xl
              transition-all
              duration-300

              ${
                isActive
                  ? "bg-violet-600 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }
            `
            }
          >
            <span className="text-lg">
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>
          </NavLink>
        ))}

      </div>

    </div>
  );
};

export default AdminSidebar;