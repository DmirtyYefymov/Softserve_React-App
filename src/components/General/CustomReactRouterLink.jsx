import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomReactRouterLink = ({children, to, ...props}) => {
    let resolved = useResolvedPath(to);
    console.log(resolved);
    let match = useMatch({ path: resolved.pathname, end: true });
    console.log(match)

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