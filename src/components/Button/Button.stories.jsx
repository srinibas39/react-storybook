import { Button } from "./Button"



export default {
    title: "Design System/Form/Button",
    component: Button,
}

export const Primary = () => <Button variant={"primary"}>Primary</Button>
export const Secondary = () => <Button variant={"secondary"}>Secondary</Button>
export const Success = () => <Button variant={"success"}>Success</Button>
export const Danger = () => <Button variant={"danger"}>Danger</Button>

// using args

const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({})

PrimaryA.args = {
    variant: "primary",
    children: "Primary Args"
}

export const SecondaryA = Template.bind({})

SecondaryA.args = {
    variant: "secondary",
    children: "secondary Args"
}

export const SuccessA = Template.bind({})

SuccessA.args = {
    variant:"success",
    children:"Success Args"
}


export const DangerA = Template.bind({})

DangerA.args={
    variant:"danger",
    children:"Danger Args"
}

