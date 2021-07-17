import React from 'react';
import PropTypes from 'prop-types';

const Paper = ({ margin = 20, children }) => {
	return (
		<div
			style={{
				boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
				margin: margin,
				padding: 20,
			}}
		>
			{children}
		</div>
	);
};

Paper.propTypes = {};

export default Paper;
