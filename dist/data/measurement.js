"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.measurementsExtendedDataTitles = exports.measurementTypes = void 0;
const measurementTypes_json_1 = __importDefault(require("./measurementTypes.json"));
exports.measurementTypes = measurementTypes_json_1.default.types;
exports.measurementsExtendedDataTitles = {
    kont: {
        subResults: {
            name: "Sub resultater",
            data: { plus: "R+", minus: "R-", cal: "Kalibrert" },
        },
        limits: {
            name: "Grenser",
            data: { r: "Grense R" },
        },
        parameters: {
            name: "Parametre",
            data: {
                outPut: "Utgang",
                bonding: "Sammenkobling",
                current: "Målestrøm",
            },
        },
    },
    iso: {
        subResults: {
            name: "Sub resultater",
            data: { um: "Um" },
        },
        limits: {
            name: "Grenser",
            data: { rIso: "Grense (Riso)" },
        },
        parameters: {
            name: "Parametre",
            data: {
                "uIso ": "Uiso ",
                typeIsos: "Type Riso",
            },
        },
    },
    rcds: {
        subResults: {
            name: "Sub resultater",
            data: {
                tDi: "t IΔ",
                uCi: "Uc IΔ",
                uc: "Uc",
            },
        },
        limits: {
            name: "Grenser",
            data: { uc: "Grense(Uc)" },
        },
        parameters: {
            name: "Parametre",
            data: {
                "RCDStandard ": "RCD standard",
                iDn: "I dN",
                selectivity: "Selektivitet",
                type: "Type",
                phase: "Fase",
                use: "Anvend",
                earth: "Jordingssystem",
            },
        },
    },
    rcd: {
        subResults: {
            name: "Sub resultater",
            data: {
                uc: "Uc",
            },
        },
        limits: {
            name: "Grenser",
            data: { uc: "Grense(Uc)" },
        },
        parameters: {
            name: "Parametre",
            data: {
                "RCDStandard ": "RCD standard",
                iDn: "I dN",
                selectivity: "Selektivitet",
                type: "Type",
                phase: "Fase",
                use: "Anvend",
                earth: "Jordingssystem",
            },
        },
    },
    ikmin: {
        subResults: {
            name: "Sub resultater",
            data: {
                z: "Z",
                r: "R",
                xl: "XL",
                uln: "Uln",
            },
        },
        limits: {
            name: "Grenser",
            data: { ia: "Ia (Ipsc)" },
        },
        parameters: {
            name: "Parametre",
            data: {
                "fuseI ": "Sikring I",
                fuseT: "Sikring t ",
                iscFactor: "Isc faktor",
                fuseType: "Sikringstype",
                earth: "Jordingssystem",
            },
        },
    },
};
