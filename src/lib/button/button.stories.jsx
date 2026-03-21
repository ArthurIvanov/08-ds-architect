import { Button } from "./button";

export default {
    title: "Компоненты/Button",
    component: Button,
    parameters: {
        layout: "centered",
        status: {
            //  'beta' | 'stable' | 'deprecated' 
            type: "beta"
        }
    },
    tags: ["autodocs"]
};

export const Primary = {
    args: {
        text: "Hello primary",
        appearance: "primary",
        size: "base",
    }
}

export const Secondary = {
    args: {
        text: "Hello primary",
        appearance: "secondary",
        size: "base",
    }
}

export const Disabled = {
    args: {
        text: "Hello disabled",
        appearance: "secondary",
        size: "base",
        disabled: true
    }
}