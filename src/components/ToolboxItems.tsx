import React from 'react';
import { TechIcon } from './TechIcon';

interface ToolboxItem {
    title: string;
    iconType: React.ElementType;
}

export const ToolboxItems = ({ toolboxitems }: { toolboxitems: ToolboxItem[] }) => {
    return (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {toolboxitems.map((item) => (
                <TechIcon key={item.title} component={item.iconType} title={item.title} />
            ))}
        </div>
    )
}