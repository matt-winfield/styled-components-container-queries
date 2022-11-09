import classNames from 'classnames';
import { FC } from 'react';
import { useContainerQuery } from 'react-container-query';
import { Query } from 'react-container-query/lib/interfaces';

interface StyledContainerQueryProps {
    children: React.ReactNode;
    query: Query;
    className?: string;
}

export const ContainerBoundary: FC<StyledContainerQueryProps> = ({ children, query, className }) => {
    const [params, containerRef] = useContainerQuery(query, {});

    return (
        <div ref={containerRef} className={classNames(params, className)}>
            {children}
        </div>
    )
}
