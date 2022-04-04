import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomReactRouterLink = ({children, to, ...props}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <>
        {
            <Link
                style={{ color: match ? "rgb(62, 63, 64)" : "white"}}
                to={to}
                {...props}
            >
                {children}
            </Link>
        }
    </>
  )
};

export default CustomReactRouterLink;