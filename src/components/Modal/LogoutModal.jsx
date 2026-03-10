"use client"
import React from "react";
import { LogOut } from "lucide-react";

const LogoutModal = ({ open, setOpen, handleLogout }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-[9999]">

            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
                onClick={() => setOpen(false)}
            />

            {/* <div className="relative bg-white w-[90%] max-w-md rounded-2xl shadow-xl p-6 animate-in fade-in zoom-in"> */}
            <div className="relative z-[9999] bg-white w-[90%] max-w-md rounded-2xl shadow-xl animate-in fade-in zoom-in p-6">
                <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-red-100">
                        <LogOut className="text-red-600" size={28} />
                    </div>
                </div>
                <h2 className="text-xl font-semibold text-center">
                    Confirm Logout
                </h2>
                <p className="text-gray-500 text-center mt-2">
                    Are you sure you want to log out of your account?
                </p>
                <div className="flex gap-3 mt-6">
                    <button
                        onClick={() => setOpen(false)}
                        className="flex-1 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleLogout}
                        className="flex-1 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;