import React from 'react';
// import Chart from "react-apexcharts";
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Radar = ({
	label = '',
	data = [
		{ category: 'Science', number: 69 },
		{ category: 'Numeracy', number: 10 },
		{ category: 'Logic', number: 50 },
		{ category: 'Geography', number: 70 },
		{ category: 'Reading', number: 90 },
		{ category: 'Writing', number: 80 },
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
				animations: {
					speed: 2000,
				},
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
