import React from 'react';
import './logo.css';
import logo from '../assets/cinnamon-bun-logo.png';

interface LogoProps {
  /**
   * Do you want only the icon?
   */
  iconOnly?: boolean;
  /**
   * What's the lockup?
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * How large should the logo be?
   */
  size?: 'small' | 'large';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Logo = ({ iconOnly, orientation, size }: LogoProps) => (
      <div className={["grid",`${orientation=='vertical' ? 'grid-flow-row' : 'grid-flow-col'}`, '', ['w-fit'].join(''), "place-content-evenly"].join(' ')}>
        <div className="ml-auto mr-auto px-2"><img src={logo} width={`${size=='large' ? '40' : '30'}`} height={`${size=='large' ? '40' : '30'}`}></img></div>
        <div className="">
          <h1 className = {[`${size=='large' ? 'text-lg' : 'text-sm'}`].join(' ')}>{`${iconOnly ? '' : 'cinnamon-bun'}`}</h1>
        </div>
      </div>
);
