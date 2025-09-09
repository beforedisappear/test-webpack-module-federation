import React, { createContext, useContext, useState, ReactNode } from "react";

interface CPMContextType {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  user: {
    name: string;
    role: string;
  };
  campaigns: any[];
  setCampaigns: (campaigns: any[]) => void;
}

const CPMContext = createContext<CPMContextType | undefined>(undefined);

interface CPMProviderProps {
  children: ReactNode;
}

export const CPMProvider: React.FC<CPMProviderProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: "Summer Sale 2024",
      budget: 5000,
      spent: 3200,
      status: "active",
    },
    {
      id: 2,
      name: "Black Friday",
      budget: 10000,
      spent: 8500,
      status: "active",
    },
  ]);

  const user = {
    name: "CPM Администратор",
    role: "Manager",
  };

  const value = {
    currentPage,
    setCurrentPage,
    user,
    campaigns,
    setCampaigns,
  };

  return <CPMContext.Provider value={value}>{children}</CPMContext.Provider>;
};

export const useCPM = () => {
  const context = useContext(CPMContext);
  if (context === undefined) {
    throw new Error("useCPM must be used within a CPMProvider");
  }
  return context;
};
