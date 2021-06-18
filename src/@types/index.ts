import internal from "events";

export interface APIUser{
    login: string;
    name: string;
    followers?: undefined;
    following?: undefined;
    public_repos: string;
    avatar_url: string;
    html_url?: undefined;
    bio?: string;
    created_at?:undefined;
    score?: undefined;
}

export interface APIRepo{
    name: string;
    owner: {
        login: string;
    };
    stargazers_count: number;
    forks: number;
    html_url: string;
    language?: string;
    description?: string;
}