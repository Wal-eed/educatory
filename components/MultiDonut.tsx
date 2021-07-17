import React from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const MultiDonut = ({
    title="title",
    height = 350,
	data = [
		{ category: 'January', number: 100 },
		{ category: 'January', number: 100 },
		{ category: 'January', number: 100 },
		{ category: 'January', number: 100 },
		{ category: 'January', number: 100 },
		{ category: 'January', number: 80 },
	],
}) => {
	const state = {
		series: data.map((item) => item.number),
		options: {
			chart: {
				height: height,
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
						total: {
							show: true,
							label: title,
							formatter: function (w) {
								// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
								return 249;
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
