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