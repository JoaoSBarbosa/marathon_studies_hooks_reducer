import {ReactNode} from "react";
import {TabTypes} from "@/app/components/types/tabTypes";

export type ButtonTabList = {
    id: number;
    icon: ReactNode,
    value: TabTypes
    label: string
}

export type ButtonTabProps = {
    icon: ReactNode,
    value: string,
    onClick: () => void,
}