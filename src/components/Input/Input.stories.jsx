import { Input } from "./Input";


export default {
    title: "Design System/Form/Input",
    component: Input
}

export const Small = () => <Input size={"small"} placeholder={"small"} />
export const Medium = () => <Input size={"medium"} placeholder={"medium"} />
export const Large = () => <Input size={"large"} placeholder={"large"} />

// renaming the story name
Small.storyName="Small Input"
