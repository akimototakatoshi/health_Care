export type Graph = {
    series: number[];
    enabled: boolean;
    labels: string[];
    formatter: (value: number) => string;
    show: boolean;
    type: string;
    breakpoint: number;
};
