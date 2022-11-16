export interface Category {
    key: string;
    name: string;
    groups: {
        key: number;
        name: string;
    }[];
}
