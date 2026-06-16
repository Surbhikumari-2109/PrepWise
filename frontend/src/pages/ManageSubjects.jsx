import AdminLayout from "../components/AdminLayout";
import { useState } from "react";

const ManageSubjects = () => {
  const [subjects, setSubjects] = useState([
    "DSA",
    "Java",
    "DBMS",
    "OS",
    "CN",
  ]);

  const [newSubject, setNewSubject] = useState("");

  const addSubject = () => {
    if (!newSubject.trim()) return;

    setSubjects([...subjects, newSubject]);
    setNewSubject("");
  };

  const deleteSubject = (subject) => {
    setSubjects(
      subjects.filter((s) => s !== subject)
    );
  };

  return (
    <AdminLayout>
      <div className="p-4 md:p-6 lg:p-8">

        {/* Header */}

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Manage Subjects
          </h1>

          <p className="text-slate-400 mt-2">
            Create and manage subjects available on PrepWise.
          </p>
        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-5 mb-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <p className="text-slate-400 text-sm">
              Total Subjects
            </p>

            <h2 className="text-4xl font-bold mt-2">
              {subjects.length}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <p className="text-slate-400 text-sm">
              Questions
            </p>

            <h2 className="text-4xl font-bold mt-2">
              560
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <p className="text-slate-400 text-sm">
              Mock Tests
            </p>

            <h2 className="text-4xl font-bold mt-2">
              48
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <p className="text-slate-400 text-sm">
              Attempts
            </p>

            <h2 className="text-4xl font-bold mt-2">
              1.2K
            </h2>
          </div>

        </div>

        {/* Add Subject */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <div className="flex justify-between items-center mb-6">

            <div>
              <h2 className="text-2xl font-bold">
                Subject Management
              </h2>

              <p className="text-slate-400 mt-1">
                Add and organize subjects for learners.
              </p>
            </div>

            <div className="px-4 py-2 rounded-xl bg-violet-500/10 text-violet-400">
              {subjects.length} Subjects
            </div>

          </div>

<div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={newSubject}
              onChange={(e) =>
                setNewSubject(e.target.value)
              }
              placeholder="Enter subject name..."
              className="
              flex-1
              bg-slate-800
              border
              border-slate-700
              rounded-2xl
              px-5
              py-4
              text-white
              focus:outline-none
              focus:border-violet-500
              "
            />

            <button
              onClick={addSubject}
              className="
              px-8
              bg-gradient-to-r
              from-violet-600
              to-purple-600
              rounded-2xl
              font-medium
              hover:scale-105
              transition
              "
            >
              + Add Subject
            </button>

          </div>

        </div>

        {/* Subject Cards */}

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
          {subjects.map((subject) => (
            <div
              key={subject}
              className="
              group
              bg-gradient-to-br
              from-slate-900
              to-slate-800
              border
              border-slate-700
              rounded-3xl
              p-6
              hover:border-violet-500
              hover:-translate-y-2
              hover:shadow-2xl
              hover:shadow-violet-500/20
              transition-all duration-300
              "
            >

              {/* Top */}

              <div className="flex justify-between items-center">

                <div className="w-14 h-14 rounded-2xl bg-violet-600/20 flex items-center justify-center text-2xl">
                  📚
                </div>

                <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400">
                  Active
                </span>

              </div>

              {/* Subject Name */}

              <h3 className="text-2xl font-bold mt-6">
                {subject}
              </h3>

              <p className="text-slate-400 mt-2">
                Manage questions, notes and mock tests.
              </p>

              {/* Stats */}

              <div className="grid grid-cols-2 gap-4 mt-6">

                <div className="bg-slate-800 rounded-xl p-3">
                  <p className="text-slate-400 text-xs">
                    Questions
                  </p>

                  <h4 className="text-lg font-bold">
                    120
                  </h4>
                </div>

                <div className="bg-slate-800 rounded-xl p-3">
                  <p className="text-slate-400 text-xs">
                    Mocks
                  </p>

                  <h4 className="text-lg font-bold">
                    15
                  </h4>
                </div>

              </div>

              {/* Buttons */}

              <div className="flex gap-3 mt-8">

                <button
                  className="
                  flex-1
                  bg-violet-600
                  hover:bg-violet-700
                  py-3
                  rounded-xl
                  font-medium
                  transition
                  "
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteSubject(subject)
                  }
                  className="
                  flex-1
                  bg-red-500/10
                  text-red-400
                  hover:bg-red-500
                  hover:text-white
                  py-3
                  rounded-xl
                  font-medium
                  transition
                  "
                >
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </AdminLayout>
  );
};

export default ManageSubjects;