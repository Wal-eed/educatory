import React from 'react';
// import Chart from "react-apexcharts";
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const HeatMap = ({
	xLabels = [
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
		26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
		50, 51,
	],
	yLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'].reverse(),
	data = [
		[
			0, 7, 5, 5, 6, 0, 1, 5, 1, 6, 2, 6, 5, 7, 6, 2, 5, 0, 5, 7, 4, 5, 1, 2, 2, 5, 2, 3, 0, 6, 7,
			4, 4, 3, 3, 6, 6, 0, 2, 5, 6, 6, 2, 6, 5, 4, 1, 2, 3, 6, 1, 7,
		],
		[
			0, 6, 0, 2, 1, 2, 7, 0, 0, 0, 0, 4, 1, 5, 1, 0, 0, 0, 2, 2, 0, 2, 6, 1, 6, 4, 0, 0, 1, 7, 5,
			0, 0, 6, 7, 5, 6, 4, 7, 7, 5, 5, 4, 1, 4, 1, 0, 4, 6, 3, 5, 1,
		],
		[
			7, 6, 4, 3, 5, 4, 5, 5, 3, 4, 0, 3, 3, 7, 7, 1, 3, 2, 1, 3, 3, 6, 5, 1, 1, 0, 4, 0, 4, 2, 5,
			6, 2, 1, 2, 3, 3, 1, 6, 2, 6, 2, 6, 7, 0, 2, 2, 2, 7, 6, 5, 7,
		],
		[
			5, 3, 3, 6, 7, 1, 7, 0, 4, 6, 6, 7, 6, 5, 4, 7, 1, 7, 6, 0, 5, 6, 4, 4, 0, 0, 6, 3, 7, 7, 7,
			4, 5, 1, 5, 5, 1, 0, 5, 3, 2, 6, 6, 3, 5, 7, 6, 3, 4, 3, 4, 3,
		],
		[
			6, 6, 3, 2, 7, 1, 5, 3, 3, 2, 6, 4, 1, 7, 6, 5, 6, 4, 6, 7, 6, 5, 2, 3, 2, 3, 6, 4, 4, 6, 2,
			2, 3, 1, 2, 2, 3, 1, 7, 5, 5, 1, 4, 1, 6, 4, 4, 3, 1, 3, 1, 0,
		],
		[
			3, 4, 1, 7, 5, 2, 3, 3, 6, 1, 6, 4, 1, 0, 5, 5, 2, 3, 0, 1, 3, 6, 3, 4, 2, 3, 7, 5, 2, 3, 1,
			7, 7, 3, 3, 3, 0, 2, 3, 2, 6, 1, 4, 1, 3, 4, 1, 3, 2, 7, 0, 1,
		],
		[
			5, 6, 0, 0, 3, 4, 0, 6, 0, 6, 3, 0, 1, 3, 7, 6, 1, 6, 5, 3, 3, 2, 4, 3, 3, 5, 1, 5, 2, 2, 5,
			5, 6, 2, 3, 5, 4, 0, 5, 3, 6, 5, 7, 0, 2, 1, 7, 5, 4, 1, 3, 7,
		],
	],
	title = '',
	height = 200,
}) => {
	const gen_series = yLabels.map((y, j) => {
		return {
			name: y,
			data: xLabels.map((x, i) => {
				return {
					x,
					y: data[j][i],
				};
			}),
		};
	});

	const state = {
		series: gen_series,
		options: {
			chart: {
				height: height,
				type: 'heatmap',
				animations: {
					speed: 2000,
				},
			},
			dataLabels: {
				enabled: false,
			},
			colors: ['#008FFB'],
			title: {
				text: title,
			},
		},
	};
	return (
		<div id="chart">
			<Chart options={state.options} series={state.series} type="heatmap" height={height} />
		</div>
	);
};

export default HeatMap;
