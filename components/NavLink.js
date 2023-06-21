import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import React from 'react';

const ActiveLink = ({ href, isLeftSideBar = false, children }) => {
  const router = useRouter();
  const isCurrentPath = router.pathname === href || router.asPath === href;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  (function prefetchPages() {
    if (typeof window !== 'undefined') router.prefetch(router.pathname);
  })();

  const color = isCurrentPath ? '#e65100' : '#ffeb3b';

  return (
    <a
      href={href}
      onClick={handleClick}
      style={{
        textDecoration: 'none',
        margin: 16,
        padding: 0,
        fontWeight: isCurrentPath ? 'bold' : 'normal',
        fontSize: 17,
        color: isLeftSideBar ? '#e65100' : '#ffeb3b',
      }}
    >
      {children}
    </a>
  );
};

ActiveLink.propTypes = {
  href: PropTypes.string.isRequired,
  isLeftSideBar: PropTypes.bool,
  children: PropTypes.node,
};

export default ActiveLink;
