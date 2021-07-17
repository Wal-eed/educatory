import React from 'react';
// import Chart from "react-apexcharts";
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const HeatMap = ({ title = 'Title here', height = 200 }) => {
	const state = {
		series: [
			{
				name: 'Metric1',
				data: [
					{
						x: 'W1',
						y: 22,
					},
					{
						x: 'W2',
						y: 29,
					},
					{
						x: 'W3',
						y: 13,
					},
					{
						x: 'W4',
						y: 32,
					},
				],
			},
			{
				name: 'Metric2',
				data: [
					{
						x: 'W1',
						y: 22,
					},
					{
						x: 'W2',
						y: 29,
					},
					{
						x: 'W3',
						y: 13,
					},
					{
						x: 'W4',
						y: 32,
					},
				],
			},
			{
				name: 'Metric3',
				data: [
					{
						x: 'W1',
						y: 22,
					},
					{
						x: 'W2',
						y: 29,
					},
					{
						x: 'W3',
						y: 13,
					},
					{
						x: 'W4',
						y: 32,
					},
				],
			},
			{
				name: 'Metric4',
				data: [
					{
						x: 'W1',
						y: 22,
					},
					{
						x: 'W2',
						y: 29,
					},
					{
						x: 'W3',
						y: 13,
					},
					{
						x: 'W4',
						y: 32,
					},
				],
			},
			{
				name: 'Metric5',
				data: [
					{
						x: 'W1',
						y: 22,
					},
					{
						x: 'W2',
						y: 29,
					},
					{
						x: 'W3',
						y: 13,
					},
					{
						x: 'W4',
						y: 32,
					},
				],
			},
			{
				name: 'Metric6',
				data: [
					{
						x: 'W1',
						y: 22,
					},
					{
						x: 'W2',
						y: 29,
					},
					{
						x: 'W3',
						y: 13,
					},
					{
						x: 'W4',
						y: 32,
					},
				],
			},
			{
				name: 'Metric7',
				data: [
					{
						x: 'W1',
						y: 22,
					},
					{
						x: 'W2',
						y: 29,
					},
					{
						x: 'W3',
						y: 13,
					},
					{
						x: 'W4',
						y: 32,
					},
				],
			},
			{
				name: 'Metric8',
				data: [
					{
						x: 'W1',
						y: 22,
					},
					{
						x: 'W2',
						y: 29,
					},
					{
						x: 'W3',
						y: 13,
					},
					{
						x: 'W4',
						y: 32,
					},
				],
			},
			{
				name: 'Metric9',
				data: [
					{
						x: 'W1',
						y: 22,
					},
					{
						x: 'W2',
						y: 29,
					},
					{
						x: 'W3',
						y: 13,
					},
					{
						x: 'W4',
						y: 32,
					},
				],
			},
		],
		options: {
			chart: {
				height: height,
				type: 'heatmap',
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
