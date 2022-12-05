export interface Category {
  key: string;
  name: string;
  groups: {
    key: number;
    name: string;
  }[];
}

export enum CheckpointMode {
  default = "default",
  markCompleted = "markCompleted",
}

export enum ChecklistStatus {
  completed = "completed",
}
