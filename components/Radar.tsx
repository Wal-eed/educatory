import React from 'react';
// import Chart from "react-apexcharts";
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Radar = ({
	label = '',
	data = [
		{ category: 'January', number: 100 },
		{ category: 'January', number: 100 },
		{ category: 'January', number: 100 },
		{ category: 'January', number: 100 },
		{ category: 'January', number: 100 },
		{ category: 'January', number: 80 },
	],
	height = 350,
}) => {
	const state = {
		series: [
			{
				name: 'Series 1',
				data: data.map((item) => item.number),
			},
		],
		options: {
			chart: {
				height: height,
				type: 'radar',
			},
			title: {
				text: label,
			},
			xaxis: {
				categories: data.map((item) => item.category),
			},
			yaxis: {
				max: 100,
				tickAmount: 5,
				floating: false,
				maxWidth: 2,
				labels: {
					formatter: (val) => {
						// convert to int
						return Math.round(val);
					},
				},
				// forceNiceScale: true,
			},
		},
	};
	return (
		<div id="chart">
			<Chart options={state.options} series={state.series} type="radar" height={height} />
		</div>
	);
};

export default Radar;
