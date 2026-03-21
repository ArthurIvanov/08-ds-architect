import { Card } from "./card";

export default {
    title: "Компоненты/Card",
    component: Card,
    parameters: {
        layout: "centered",
        status: {
            //  'beta' | 'stable' | 'deprecated' 
            type: "beta"
        }
    },
    tags: ["autodocs"]
};

export const TextSizeLarge = {
    args: {
        text: "Hello text large",
        textSize: "large"
    }
}

