
//The original implementation with the National Weather Service's (NWS) Web API has been replaced due to issues with API calls and data parsing.

/*This project has transitioned to using the Open-Meteo API for weather data retrieval. 
The initial approach using the National Weather Service's (NWS) Web API was revised due to complications in API calls and data handling. 
The current implementation fetches hourly temperature data using the Open-Meteo API. 
This data is then used to populate a line chart, showcasing the temperature trends at different times. 
The chart is dynamically updated with real-time weather data. Additionally, a secondary chart is included in the implementation, displaying random data for comparison and layout purposes.
*/


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
