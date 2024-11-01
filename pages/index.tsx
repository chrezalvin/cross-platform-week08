import { PageIndex } from "../libs";
import edit from "./edit";

import home from "./home";

// cant use PageIndex<keyof RouteStackParamList>[] here
export const pagesList: PageIndex<any>[] = [
    home,
    edit,
];

export default pagesList;