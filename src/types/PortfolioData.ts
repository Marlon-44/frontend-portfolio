export interface PortfolioData {
    name: string;
    contact: {
        phone: string;
        email: string;
    };
    role: string;
    description: string;
    experience: any[];
    education: any[];
    skills: string[];
    portfolio: {
        linkedin: string;
        github: string;
    };
    languages: string[];
}
