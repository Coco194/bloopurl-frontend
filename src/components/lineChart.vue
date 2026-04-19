<template>
    <Line
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
    />
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default {
    name: 'LineChart',
    components: { Line },
    data() {
        return {
            chartData: {
                labels: this.dates,
                datasets: [
                    {
                        label: 'Visits per day',
                        backgroundColor: 'Blue',
                        data: this.data
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                aspectRatio: 1,
                layout: {
                    padding: 40
                },
                scale: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: "Visits",
                        color: "black",
                        align: "start",
                        font: {
                            size: 24,
                            weight: "bold"
                        }
                    }
                }
            }
        }
    },
    props: {
        dates: {
            type: Array,
        },
        data: {
            type: Array
        }
    }
}
</script>