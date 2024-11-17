import { ReactNode } from "react";

export type experienceDataProps = {
    id:number,
    date:string,
    title:string,
    description:string,
    company:string,
    link: string,
}

export type PortfolioProjectsProps = {
    id:number,
    title:string,
    description:string,
    link:string,
    tags: {
        id:number,
        label:string
    }[]
}

export interface AnimatedComponentProps {
    children: ReactNode;
    delay?: number;
    customAnimation?: {
        initial?: {};
        whileInView?: {};
        transition?: {};
        viewport?: {};
        once?: boolean;
    };
}