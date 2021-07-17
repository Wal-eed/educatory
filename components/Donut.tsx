import React from 'react';
// import Chart from "react-apexcharts";
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Donut = ({ label = 'no label', percentage = 50, height = 200 }) => {
	var state = {
		series: [percentage],
		options: {
			chart: {
				height: height,
				type: 'radialBar',
			},
			colors: ['#20E647'],
			plotOptions: {
				radialBar: {
					startAngle: -150,
					endAngle: 150,
					hollow: {
						size: '50%',
					},
					dataLabels: {
						value: {
							color: 'white',
							formatter: function (val) {
								return val;
							},
						},
					},
				},
			},
			labels: [label],
		},
	};

	return (
		<div id="chart">
			<Chart options={state.options} series={state.series} type="radialBar" height={height} />
		</div>
	);
};
export default Donut;
