"use client";
import axios from "axios";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { baseUrl } from "../baseUrl/BaseUrl"; // Adjusted to match new file location

const useApi = () => {
  const token = useSelector((state) => state.auth.token);

  const api = useMemo(() => {
    const instance = axios.create({
      baseURL: baseUrl,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (token) {
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    return instance;
  }, [token]);

  return api;
};

export default useApi;