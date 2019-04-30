import React from 'react';

const Footer = () => {
	return (
		<footer classNameName="page-footer font-small blue pt-4">
			<div classNameName="container-fluid text-center text-md-left">
				<h5 className="text-uppercase">Footer Content</h5>
				<p>
					Here you can use rows and columns here to organize your footer
					content.
				</p>
				<div className="footer-copyright text-center">
					© 2018 Copyright:
					<a href="https://mdbootstrap.com/education/bootstrap/">
						{' '}
						MDBootstrap.com
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
