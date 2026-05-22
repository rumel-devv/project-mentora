"use client";

import { AlertDialog, Button } from "@heroui/react";

import { useRouter } from "next/navigation";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiAlertTriangle } from "react-icons/fi";
import toast from "react-hot-toast";

const DeleteModal = ({ course }) => {
  console.log(course);
  const router = useRouter();

  // DATA
  const { _id, title } = course || {};

  // DYNAMIC NAME
  //   const itemName =
  //     destinationName || title || "this item";

  // DELETE HANDLER
  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:5000/bookedcours/${_id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Course Deleted Succesfully");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AlertDialog>
      {/* TRIGGER BUTTON */}
      <AlertDialog.Trigger>
        <button
          className="
            group
            flex items-center justify-center gap-2
            w-full sm:w-auto
            px-5 py-3
            rounded-2xl
            border border-red-200
            bg-white
            text-red-500
            font-medium
            shadow-sm
            hover:bg-red-500
            hover:text-white
            hover:shadow-lg
            transition-all duration-300
          "
        >
          <RiDeleteBin6Line className="text-lg group-hover:scale-110 transition" />

          <span>Delete</span>
        </button>
      </AlertDialog.Trigger>

      {/* MODAL */}
      <AlertDialog.Backdrop className="bg-black/50 backdrop-blur-sm px-4">
        <AlertDialog.Container className="flex items-center justify-center min-h-screen">
          <AlertDialog.Dialog
            className="
              w-full
              max-w-[95%]
              sm:max-w-md
              rounded-3xl
              border border-white/20
              bg-white
              shadow-2xl
              p-0
              overflow-hidden
            "
          >
            {/* CLOSE */}
            <AlertDialog.CloseTrigger />

            {/* TOP SECTION */}
            <div className="bg-gradient-to-r from-red-500 to-rose-500 p-6 text-white">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                <FiAlertTriangle className="text-3xl" />
              </div>

              <h2 className="text-2xl font-bold">Delete Confirmation</h2>

              <p className="text-white/80 mt-2 text-sm leading-relaxed">
                Please confirm before permanently removing this destination.
              </p>
            </div>

            {/* BODY */}
            <div className="p-6">
              <div className="bg-red-50 border border-red-100 rounded-2xl p-4">
                <p className="text-slate-700 text-sm leading-relaxed">
                  You are about to delete{" "}
                  <span className="font-bold text-red-600">{title}</span>. This
                  action cannot be undone.
                </p>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col-reverse sm:flex-row gap-3 mt-6">
                <Button
                  slot="close"
                  variant="flat"
                  className="
                    w-full
                    rounded-2xl
                    py-6
                    font-semibold
                    bg-slate-100
                    hover:bg-slate-200
                  "
                >
                  Cancel
                </Button>

                <Button
                  variant="danger"
                  onClick={handleDelete}
                  className="
                    w-full
                    rounded-2xl
                    py-6
                    font-semibold
                    shadow-lg
                  "
                >
                  Yes, Delete
                </Button>
              </div>
            </div>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteModal;
