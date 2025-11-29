import { createContext } from "react";
import type { PortfolioData } from "../../types/PortfolioData";

export const PortfolioContext = createContext<PortfolioData | null>(null);
