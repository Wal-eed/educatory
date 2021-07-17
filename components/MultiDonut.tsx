import React from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const MultiDonut = ({
	title = 'progress',
	height = 350,
	total = 10,
	data = [
		{ category: 'Science', number: 69 },
		{ category: 'Numeracy', number: 10 },
		{ category: 'Logic', number: 50 },
		{ category: 'Geography', number: 70 },
		{ category: 'Reading', number: 90 },
		{ category: 'Writing', number: 80 },
	],
}) => {
	const state = {
		series: data.map((item) => 100 * item.number / total ),
		options: {
			chart: {
				height: height,
				animations: {
					speed: 2000,
				},
				type: 'radialBar',
			},
			plotOptions: {
				radialBar: {
					dataLabels: {
						name: {
							fontSize: '22px',
						},
						value: {
							fontSize: '16px',
						},
						value: {
							formatter: function (v) {
								// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
								return v * total / 100;
							},
						},
						total: {
							show: true,
							label: title,
							formatter: function (w) {
								// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
								return 5;
							},
						},
					},
				},
			},
			labels: data.map((item) => item.category),
		},
	};
	return (
		<div id="chart">
			<Chart options={state.options} series={state.series} type="radialBar" height={height} />
		</div>
	);
};

export default MultiDonut;
