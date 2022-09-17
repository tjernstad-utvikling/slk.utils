export declare const categories: {
    [x: number]: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    };
    length: number;
    toString(): string;
    toLocaleString(): string;
    pop(): {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    } | undefined;
    push(...items: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[]): number;
    concat(...items: ConcatArray<{
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }>[]): {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[];
    concat(...items: ({
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    } | ConcatArray<{
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }>)[]): {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[];
    join(separator?: string | undefined): string;
    reverse(): {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[];
    shift(): {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    } | undefined;
    slice(start?: number | undefined, end?: number | undefined): {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[];
    sort(compareFn?: ((a: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, b: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }) => number) | undefined): {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[];
    splice(start: number, deleteCount?: number | undefined): {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[];
    splice(start: number, deleteCount: number, ...items: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[]): {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[];
    unshift(...items: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[]): number;
    indexOf(searchElement: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, fromIndex?: number | undefined): number;
    lastIndexOf(searchElement: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, fromIndex?: number | undefined): number;
    every<S extends {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }>(predicate: (value: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, index: number, array: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[]) => value is S, thisArg?: any): this is S[];
    every(predicate: (value: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, index: number, array: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[]) => unknown, thisArg?: any): boolean;
    some(predicate: (value: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, index: number, array: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[]) => unknown, thisArg?: any): boolean;
    forEach(callbackfn: (value: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, index: number, array: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[]) => void, thisArg?: any): void;
    map<U>(callbackfn: (value: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, index: number, array: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[]) => U, thisArg?: any): U[];
    filter<S_1 extends {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }>(predicate: (value: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, index: number, array: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[]) => value is S_1, thisArg?: any): S_1[];
    filter(predicate: (value: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, index: number, array: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[]) => unknown, thisArg?: any): {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[];
    reduce(callbackfn: (previousValue: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, currentValue: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, currentIndex: number, array: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[]) => {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }): {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    };
    reduce(callbackfn: (previousValue: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, currentValue: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, currentIndex: number, array: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[]) => {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, initialValue: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }): {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    };
    reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, currentIndex: number, array: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[]) => U_1, initialValue: U_1): U_1;
    reduceRight(callbackfn: (previousValue: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, currentValue: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, currentIndex: number, array: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[]) => {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }): {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    };
    reduceRight(callbackfn: (previousValue: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, currentValue: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, currentIndex: number, array: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[]) => {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, initialValue: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }): {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    };
    reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, currentIndex: number, array: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[]) => U_2, initialValue: U_2): U_2;
    find<S_2 extends {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }>(predicate: (this: void, value: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, index: number, obj: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[]) => value is S_2, thisArg?: any): S_2 | undefined;
    find(predicate: (value: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, index: number, obj: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[]) => unknown, thisArg?: any): {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    } | undefined;
    findIndex(predicate: (value: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, index: number, obj: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[]) => unknown, thisArg?: any): number;
    fill(value: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, start?: number | undefined, end?: number | undefined): {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[];
    copyWithin(target: number, start: number, end?: number | undefined): {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }[];
    entries(): IterableIterator<[number, {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<{
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }>;
    includes(searchElement: {
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }, fromIndex?: number | undefined): boolean;
    [Symbol.iterator](): IterableIterator<{
        key: string;
        name: string;
        groups: {
            key: number;
            name: string;
        }[];
    }>;
    [Symbol.unscopables](): {
        copyWithin: boolean;
        entries: boolean;
        fill: boolean;
        find: boolean;
        findIndex: boolean;
        keys: boolean;
        values: boolean;
    };
};
