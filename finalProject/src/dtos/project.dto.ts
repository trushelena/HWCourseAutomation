export interface Counts {
    cases: number;
    suites: number;
    milestones: number;
    runs: {
        total: number;
        active: number;
    };
    defects: {
        total: number;
        open: number;
    };
}

export interface ProjectEntity {
    title: string;
    code: string;
    counts: Counts;
}

export interface ProjectResponse {
    status: boolean;
    result: {
        total: number;
        filtered: number;
        count: number;
        entities: ProjectEntity[];
    };
}
