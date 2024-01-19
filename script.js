//for this project, I want to use National Weather Service's (NWS) Web API. the API is not called properly or the data is not parsed correctly is going to be fixed


document.addEventListener('DOMContentLoaded', function() {
    // First chart (API data)
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

    // Second chart (random data)
    var ctx2 = document.getElementById('chart2').getContext('2d');
    var chart2 = new Chart(ctx2, {
        type: 'line',
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

    // Function to update the first chart with new data from API
    function updateChart1(data) {
        chart1.data.labels = data.map(item => item.date);
        chart1.data.datasets[0].data = data.map(item => item.value);
        chart1.update();
    }

    // Function to fetch real-time data for the first chart
    function fetchWeatherData() {
        const url = `https://api.weather.gov/points/39.7456,-97.0892/forecast`;

        fetch(url, {
            method: 'GET',
            headers: {
                'User-Agent': 'my-weather-app/1.0 (myemail@example.com)'
            }
        })
        .then(response => response.json())
        .then(data => {
            const periods = data.properties.periods;
            const chartData = periods.map(period => {
                return {
                    date: period.startTime,
                    value: period.temperature
                };
            });

            updateChart1(chartData);
        })
        .catch(error => console.error('Error fetching data:', error));
    }

    fetchWeatherData();
    setInterval(fetchWeatherData, 60000);
});
