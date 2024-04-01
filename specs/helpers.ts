import {SVGProps} from "react";
import {IconsEnumKeys} from "@specs/icons";

export interface IIcon extends Omit<SVGProps<SVGSVGElement>, 'fill' | 'fillRule' | 'fillOpacity'> {
    name: IconsEnumKeys,
    // color?: string | SpringValue<string>,
    color?: any
}