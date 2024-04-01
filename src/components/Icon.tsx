import {FC, SVGProps} from 'react';
import {IconsEnumKeys} from '@specs/icons';
import cn from 'classnames';


export interface IIcon extends Omit<SVGProps<SVGSVGElement>, 'fill' | 'fillRule' | 'fillOpacity'> {
    name: IconsEnumKeys,
    color?: any
}

const Icon: FC<IIcon> = ({name, color, height = 24, width = 24, ...props}) => {


    return (
        <svg
            {...props}
            className={cn(
                props.className,
                `icon icon-${name}`
            )}
            fill={color}
            width={width}
            height={height}
        >
            <use href={`/icons.svg#icon-${name}`}/>
        </svg>
    )
};

export default Icon;