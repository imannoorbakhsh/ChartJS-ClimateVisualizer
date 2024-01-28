# ChartJS-ClimateVisualizer

## Overview
This project is focused on visualizing climate data using Chart.js, a popular JavaScript library for rendering charts in a web browser. The application presents four different types of charts, each serving a unique purpose in displaying climate-related data. It's designed to be responsive, ensuring a seamless experience across various devices and screen sizes.

## Features

- **API Data Visualization**: The first chart dynamically fetches and displays climate data from the Open-Meteo API, showing hourly temperature data.
- **Random Data Visualization**: The second chart is a polar area chart that displays random data for demonstration purposes.
- **Daily Averages Visualization**: The third chart, a bar chart, illustrates average daily temperatures.
- **Temperature Distribution Visualization**: The fourth chart, a doughnut chart, shows the distribution of temperature conditions like 'Cold', 'Mild', and 'Warm'.

## Technology Stack

- **HTML**: Structure of the web pages.
- **CSS**: Styling of the charts and layout.
- **JavaScript**: Fetching and processing data, and rendering the charts using Chart.js.
- **Chart.js**: A versatile charting library to visualize the data.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

```bash
   git clone https://github.com/imannoorbakhsh/ChartJS-ClimateVisualizer.git

```
3. Navigate to the project directory:
```bash
cd ChartJS-ClimateVisualizer

```
3. Open the index.html file in a web browser.

## Usage
The application automatically fetches climate data from the Open-Meteo API upon loading. You can view the rendered charts in the web browser. The data for the first chart will update automatically every minute.

## Responsiveness
The layout of the charts adjusts according to the screen size, ensuring readability and usability across devices. On smaller screens, charts are stacked vertically, while on larger screens, they are displayed in a two-by-two grid.

## Customization
You can customize the charts by modifying the `script.js` file. Chart types, data sources, and styling can be adjusted as per your preference.

