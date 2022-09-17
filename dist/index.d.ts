export declare const categories: Category[];
interface Category {
    key: string;
    name: string;
    groups: {
        key: number;
        name: string;
    }[];
}
export {};
