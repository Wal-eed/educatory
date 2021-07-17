import React from 'react';
// import Chart from "react-apexcharts";
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const LineChart = ({
	data = {
		// math:
		science: [
			{ date: '18 Jul', number: 40 },
			{ date: '17 Jul', number: 40 },
		],
		numeracy: [
			{ date: '18 Jul', number: 40 },
			{ date: '17 Jul', number: 40 },

		],
		geography: [
			{ date: '18 Jul', number: 40 },
			{ date: '17 Jul', number: 40 },
		],
	},
}) => {
	const state = {
		series: [
			{
				name: 'science',
				data: data.science.map(item => item.number),
			},
			{
				name: 'numeracy',
				data: data.numeracy.map(item => item.number),
			},

			{
				name: 'geography',
				data: data.geography.map(item => item.number),
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'line',
				zoom: {
					enabled: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				width: [5, 7, 5],
				curve: 'straight',
				// dashArray: [0, 5, 8],
			},
			title: {
				text: 'Page Statistics',
				align: 'left',
			},
			legend: {
				tooltipHoverFormatter: function (val, opts) {
					return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '';
				},
			},
			markers: {
				size: 0,
				hover: {
					sizeOffset: 6,
				},
			},
			xaxis: {
				categories: data.science.map(item => item.date), 
			},
			tooltip: {
				y: [
					{
						title: {
							formatter: function (val) {
								return val + ' (mins)';
							},
						},
					},
					{
						title: {
							formatter: function (val) {
								return val + ' per session';
							},
						},
					},
					{
						title: {
							formatter: function (val) {
								return val;
							},
						},
					},
				],
			},
			grid: {
				borderColor: '#f1f1f1',
			},
		},
	};

	return (
		<div id="chart">
			<Chart options={state.options} series={state.series} type="line" height={350} />
		</div>
	);
};

export default LineChart;
