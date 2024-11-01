export const routeList = {
    home: "home",
    edit: "edit",
} as const;

export type RouteStackParamList = {
    [routeList.home]: undefined;
    [routeList.edit]: {
        title: string;
        body: string;
        id: number;
        editPost: (id: number, title: string, body: string) => void;
    };
};