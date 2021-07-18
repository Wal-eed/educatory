import React from 'react';
// import Chart from "react-apexcharts";
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Donut = ({ label = 'no label', number = 5, total = 10, height = 200 }) => {
	var state = {
		series: [100 * number / total],
		options: {
			chart: {
				height: height,
				type: 'radialBar',
				animations: {
          speed: 2000,
        },
			},
			colors: ['#66DDDB'],
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
								return val / total + " / " + total;
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
