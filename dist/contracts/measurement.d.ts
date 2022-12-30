export interface MeasurementType {
    id: string;
    shortName: string;
    longName: string;
    enhet: string;
    hasPol: string;
}
export interface MeasurementExtendedDataTitle {
    kont: {
        subResults: {
            name: string;
            data: {
                [key: string]: string;
            };
        };
        limits: {
            name: string;
            data: {
                [key: string]: string;
            };
        };
        parameters: {
            name: string;
            data: {
                [key: string]: string;
            };
        };
    };
    iso: {
        subResults: {
            name: string;
            data: {
                [key: string]: string;
            };
        };
        limits: {
            name: string;
            data: {
                [key: string]: string;
            };
        };
        parameters: {
            name: string;
            data: {
                [key: string]: string;
            };
        };
    };
    rcds: {
        subResults: {
            name: string;
            data: {
                [key: string]: string;
            };
        };
        limits: {
            name: string;
            data: {
                [key: string]: string;
            };
        };
        parameters: {
            name: string;
            data: {
                [key: string]: string;
            };
        };
    };
    rcd: {
        subResults: {
            name: string;
            data: {
                [key: string]: string;
            };
        };
        limits: {
            name: string;
            data: {
                [key: string]: string;
            };
        };
        parameters: {
            name: string;
            data: {
                [key: string]: string;
            };
        };
    };
    ikmin: {
        subResults: {
            name: string;
            data: {
                [key: string]: string;
            };
        };
        limits: {
            name: string;
            data: {
                [key: string]: string;
            };
        };
        parameters: {
            name: string;
            data: {
                [key: string]: string;
            };
        };
    };
}
