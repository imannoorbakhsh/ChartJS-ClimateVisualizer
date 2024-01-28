document.addEventListener('DOMContentLoaded', function () {

    // First chart (line chart with real time API data)
    var ctx1 = document.getElementById('chart1').getContext('2d');
    var chart1 = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'API Data',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                data: []
            }]
        },
        options: {}
    });

    // Second chart (polarArea with random data)
    var ctx2 = document.getElementById('chart2').getContext('2d');
    var chart2 = new Chart(ctx2, {
        type: 'polarArea',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Random Data',
                backgroundColor: 'rgba(0, 99, 132, 0.2)',
                borderColor: 'rgb(0, 99, 132)',
                data: [0, 20, 15, 60, 60, 30, 70]
            }]
        },
        options: {}
    });

    // Third chart (Bar Chart with random data)
    var ctx3 = document.getElementById('chart3').getContext('2d');
    var chart3 = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Average Daily Temperature',
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                data: [12, 15, 14, 18, 20, 22, 19]
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    // Fourth chart (Doughnut Chart for temperature distribution)
    var ctx4 = document.getElementById('chart4').getContext('2d');
    var chart4 = new Chart(ctx4, {
        type: 'doughnut',
        data: {
            labels: ['Cold', 'Mild', 'Warm'],
            datasets: [{
                label: 'Temperature Distribution',
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(255, 205, 86, 0.6)', 'rgba(75, 192, 192, 0.6)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(255, 205, 86, 1)', 'rgba(75, 192, 192, 1)'],
                data: [25, 50, 25]
            }]
        }
    });




    // Function to update the first chart with new data from API
    function updateChart1(data) {
        chart1.data.labels = data.map(item => item.time);
        chart1.data.datasets[0].data = data.map(item => item.temperature);
        chart1.update();
    }

    // Function to fetch real-time data for the first chart
    function fetchWeatherData() {
        const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&timezone=GMT';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const hourlyTemperatures = data.hourly;
                const chartData = hourlyTemperatures.time.map((time, index) => {
                    return {
                        time: time,
                        temperature: hourlyTemperatures.temperature_2m[index]
                    };
                });

                updateChart1(chartData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    fetchWeatherData();
    setInterval(fetchWeatherData, 60000);
});
