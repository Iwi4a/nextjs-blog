import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navigationOptions } from '../lib/constants';
import { MenuItem } from '../storybook';

const NavOptions = () => {
    const router = useRouter();

    return (
      <ul>
        {navigationOptions.map(option => {
          return (
            <li key={option.text}>
              <Link href={option.href} as={option.as}>
                <a>
                  <MenuItem title={option.text} active={router.pathname === option.href} />
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    )
  };

export default NavOptions;
