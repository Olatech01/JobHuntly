"use client";

import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState, useCallback } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Changed from {} to null
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    const updateUser = useCallback((userData) => {
        setUser(userData);
    }, []);

    const updateToken = useCallback((newToken) => {
        setToken(newToken);
    }, []);

    useEffect(() => {
        const loadUserFromCookies = () => {
            try {
                const savedToken = getCookie("token");
                if (savedToken) {
                    setToken(savedToken);
                }

                const savedUserData = getCookie("user");
                if (savedUserData) {
                    if (typeof savedUserData === 'string') {
                        const userData = JSON.parse(savedUserData);
                        updateUser(userData);
                    } else {
                        updateUser(savedUserData);
                    }
                }
            } catch (error) {
                console.error("Error loading user from cookies:", error);
                deleteCookie("user");
                deleteCookie("token");
            } finally {
                setIsLoading(false);
            }
        };

        loadUserFromCookies();
    }, [updateUser]);

    const logOut = () => {
        // Log user before logout (for debugging)
        const getUser = getCookie("user");
        if (getUser) {
            try {
                const parsedUser = typeof getUser === 'string' ? JSON.parse(getUser) : getUser;
                console.log("Logging out user:", parsedUser);
            } catch (e) {
                console.log("Logging out user");
            }
        }

        // Clear cookies
        deleteCookie("token");
        deleteCookie("user");

        // Clear state
        setUser(null);
        setToken(null);

        // Show success message (optional)
        // toast.success("Logged out successfully");

        // Redirect immediately instead of using setTimeout
        router.push("/");

        // If you want to keep the timeout for showing a message:
        // setTimeout(() => {
        //     router.push("/");
        // }, 3000);
    };

    return (
        <UserContext.Provider value={{
            user,
            token,
            isLoading,
            updateUser,
            updateToken,
            logOut
        }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext };