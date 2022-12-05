export interface Category {
    key: string;
    name: string;
    groups: {
        key: number;
        name: string;
    }[];
}
export declare enum CheckpointMode {
    default = "default",
    markCompleted = "markCompleted"
}
export declare enum ChecklistStatus {
    completed = "completed"
}
