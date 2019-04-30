import React from 'react';

const Header = () => {
	return (
		<React.Fragment>
			<div className="media">
				<div className="media-left">
					<img
						src="https://regionalgwflow.iah.org/files/2018/11/instagram-png.png"
						alt="icon"
						width="60px"
						height="60px"
						className="mr-3"
					/>
				</div>
				<div className="media-body">
					<h4 className="media media-heading">Barker Social Marketing</h4>
					<p className="media media-heading">April 30 at 7:48am</p>
				</div>
			</div>
			<div className="caption" style={{ textAlign: 'left' }}>
				Make more sales and grow your business -- you need a Brand Barker! We
				get your brand and message in front of your target customers with
				engaging, cost-effective marketing and a proven return on your
				investment.
			</div>
		</React.Fragment>
	);
};

export default Header;
