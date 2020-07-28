import React from 'react';

import './Footer.scss';

const Footer = ({children}) => {
	const generateYear = () => {
		return new Date().getFullYear();
	}
	return (
		<footer className="site-footer">
			<div className="filter"></div>
			<div className="social">
				{children}
			</div>
			<p className="site-footer__copyright">copyright &copy; 2015-{generateYear()} Ivelin Iliev</p>
		</footer>
	)
}


export default Footer;