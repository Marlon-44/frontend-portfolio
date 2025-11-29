import { useMemo } from "react";
import type { ReactNode } from "react";
import { PortfolioContext } from "./PortfolioContext";
import portfolioData from "../../api/resume.json"
interface Props {
    children: ReactNode;
}

export const PortfolioProvider = ({ children }: Props) => {

    const value = useMemo(() => portfolioData, []);

    return (
        <PortfolioContext.Provider value={value}>
            {children}
        </PortfolioContext.Provider>
    );
};
