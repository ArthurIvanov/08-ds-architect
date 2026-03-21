import { Badge } from "./badge";

export default {
    title: "Компоненты/Badge",
    component: Badge,
    parameters: {
        layout: "centered",
        status: {
            //  'beta' | 'stable' | 'deprecated' 
            type: "beta"
        }
    },
    tags: ["autodocs"]
};

export const Outlined = {
    args: {
        text: "Hello text size",
        appearance: "blue",
        size: "base",
        outlined: true,
    }
}

export const SizeBase = {
    args: {
        text: "Hello text size",
        appearance: "blue",
        size: "base"
    }
}

export const SizeSmall = {
    args: {
        text: "Hello text size",
        appearance: "blue",
        size: "small"
    }
}
