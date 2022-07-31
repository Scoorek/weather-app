function makeTemperatureChart() {
    document.getElementById("myChart").remove();
    document.querySelector(".chart-place").innerHTML = `<canvas id="myChart"></canvas>`;
    //Making latitude, longitude and actually time variables
    let long;
    let lat;
    var allTemperatures;
    let actualTime = new Date();
    //Checking if user allow for location access
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            //Parameters to get from api 
            const params = ['airTemperature'];
            fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${long}&params=${params}`, {
                headers: {
                    //Api key 
                    'Authorization': '66f47824-005a-11ed-9a2a-0242ac130002-66f47888-005a-11ed-9a2a-0242ac130002'
                }
            }).then((response) => response.json()).then((jsonData) => {
                //Typing data from api into divs
                console.log(jsonData);
                document.querySelector('.temp').innerHTML = `${jsonData.hours[actualTime.getHours()].airTemperature.noaa} &#176;`;
                document.getElementById("1am").innerHTML = `${jsonData.hours[1].airTemperature.noaa} &#176;`;
                document.getElementById("3am").innerHTML = `${jsonData.hours[3].airTemperature.noaa} &#176;`;
                document.getElementById("5am").innerHTML = `${jsonData.hours[5].airTemperature.noaa} &#176;`;
                document.getElementById("7am").innerHTML = `${jsonData.hours[7].airTemperature.noaa} &#176;`;
                document.getElementById("9am").innerHTML = `${jsonData.hours[9].airTemperature.noaa} &#176;`;
                document.getElementById("11am").innerHTML = `${jsonData.hours[11].airTemperature.noaa} &#176;`;
                document.getElementById("1pm").innerHTML = `${jsonData.hours[13].airTemperature.noaa} &#176;`;
                document.getElementById("3pm").innerHTML = `${jsonData.hours[15].airTemperature.noaa} &#176;`;
                document.getElementById("5pm").innerHTML = `${jsonData.hours[17].airTemperature.noaa} &#176;`;
                document.getElementById("7pm").innerHTML = `${jsonData.hours[19].airTemperature.noaa} &#176;`;
                document.getElementById("9pm").innerHTML = `${jsonData.hours[21].airTemperature.noaa} &#176;`;
                document.getElementById("11pm").innerHTML = `${jsonData.hours[23].airTemperature.noaa} &#176;`;
                allTemperatures = [jsonData.hours[1].airTemperature.noaa, jsonData.hours[3].airTemperature.noaa, jsonData.hours[5].airTemperature.noaa, jsonData.hours[7].airTemperature.noaa, jsonData.hours[9].airTemperature.noaa, jsonData.hours[11].airTemperature.noaa, jsonData.hours[13].airTemperature.noaa, jsonData.hours[15].airTemperature.noaa, jsonData.hours[17].airTemperature.noaa, jsonData.hours[19].airTemperature.noaa, jsonData.hours[21].airTemperature.noaa, jsonData.hours[23].airTemperature.noaa];
                console.log(allTemperatures);
                const labels = [
                    '1:00',
                    '3:00',
                    '5:00',
                    '7:00',
                    '9:00',
                    '11:00',
                    '13:00',
                    '15:00',
                    '17:00',
                    '19:00',
                    '21:00',
                    '23:00',

                ];

                const data = {
                    labels: labels,
                    datasets: [{
                        label: 'Temperature',
                        backgroundColor: 'rgb(255, 245, 108)',
                        borderColor: 'rgb(255, 211, 108)',
                        data: allTemperatures,
                        fill: true
                    }]
                };

                const config = {
                    type: 'line',
                    data: data,
                    options: {
                        scales: {
                            yAxes: {
                                ticks: {
                                    beginAtZero: false,
                                    stepSize: 20
                                },
                                gridLines: {
                                    drawBorder: false,
                                }
                            },
                            xAxes: {
                                display: false
                            }
                        },
                        plugins: {
                            legend: {
                                display: false
                            }
                        }
                    }
                };

                const myTempChart = new Chart(
                    document.getElementById('myChart'),
                    config
                );
            });
        });
    }

}

function makePrecipitationChart() {
    document.getElementById("myChart").remove();
    document.querySelector(".chart-place").innerHTML = `<canvas id="myChart"></canvas>`;
    //Making latitude, longitude and actually time variables
    let long;
    let lat;
    var allTemperatures;
    let actualTime = new Date();
    //Checking if user allow for location access
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            //Parameters to get from api 
            const params = ['precipitation'];
            fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${long}&params=${params}`, {
                headers: {
                    //Api key 
                    'Authorization': '5e004026-faa7-11ec-8f55-0242ac130002-5e004094-faa7-11ec-8f55-0242ac130002'
                }
            }).then((response) => response.json()).then((jsonData) => {
                //Typing data from api into divs
                console.log(jsonData);
                document.querySelector('.temp').innerHTML = `${jsonData.hours[actualTime.getHours()].precipitation.noaa*100} %;`;
                document.getElementById("1am").innerHTML = `${Math.round(jsonData.hours[1].precipitation.noaa*100)} %`;
                document.getElementById("3am").innerHTML = `${Math.round(jsonData.hours[3].precipitation.noaa*100)} %`;
                document.getElementById("5am").innerHTML = `${Math.round(jsonData.hours[5].precipitation.noaa*100)} %`;
                document.getElementById("7am").innerHTML = `${Math.round(jsonData.hours[7].precipitation.noaa*100)} %`;
                document.getElementById("9am").innerHTML = `${Math.round(jsonData.hours[9].precipitation.noaa*100)} %`;
                document.getElementById("11am").innerHTML = `${Math.round(jsonData.hours[11].precipitation.noaa*100)} %`;
                document.getElementById("1pm").innerHTML = `${Math.round(jsonData.hours[13].precipitation.noaa*100)} %`;
                document.getElementById("3pm").innerHTML = `${Math.round(jsonData.hours[15].precipitation.noaa*100)} %`;
                document.getElementById("5pm").innerHTML = `${Math.round(jsonData.hours[17].precipitation.noaa*100)} %`;
                document.getElementById("7pm").innerHTML = `${Math.round(jsonData.hours[19].precipitation.noaa*100)} %`;
                document.getElementById("9pm").innerHTML = `${Math.round(jsonData.hours[21].precipitation.noaa*100)} %`;
                document.getElementById("11pm").innerHTML = `${Math.round(jsonData.hours[23].precipitation.noaa*100)} %`;
                allTemperatures = [Math.round(jsonData.hours[1].precipitation.noaa * 100), Math.round(jsonData.hours[3].precipitation.noaa * 100), Math.round(jsonData.hours[5].precipitation.noaa * 100), Math.round(jsonData.hours[7].precipitation.noaa * 100), Math.round(jsonData.hours[9].precipitation.noaa * 100), Math.round(jsonData.hours[11].precipitation.noaa * 100), Math.round(jsonData.hours[13].precipitation.noaa * 100), Math.round(jsonData.hours[15].precipitation.noaa * 100), Math.round(jsonData.hours[17].precipitation.noaa * 100), Math.round(jsonData.hours[19].precipitation.noaa * 100), Math.round(jsonData.hours[21].precipitation.noaa * 100), Math.round(jsonData.hours[23].precipitation.noaa * 100)];
                console.log(allTemperatures);
                const labels = [
                    '1:00',
                    '3:00',
                    '5:00',
                    '7:00',
                    '9:00',
                    '11:00',
                    '13:00',
                    '15:00',
                    '17:00',
                    '19:00',
                    '21:00',
                    '23:00',

                ];

                const data = {
                    labels: labels,
                    datasets: [{
                        label: 'Temperature',
                        backgroundColor: 'rgb(120, 255, 255)',
                        borderColor: 'rgb(0, 255, 255)',
                        data: allTemperatures,
                        fill: true
                    }]
                };

                const config = {
                    type: 'line',
                    data: data,
                    options: {
                        scales: {
                            yAxes: {
                                ticks: {
                                    beginAtZero: false,
                                    stepSize: 20
                                },
                                gridLines: {
                                    drawBorder: false,
                                }
                            },
                            xAxes: {
                                display: false
                            }
                        },
                        plugins: {
                            legend: {
                                display: false
                            }
                        }
                    }
                };

                const myPrecipitationChart = new Chart(
                    document.getElementById('myChart'),
                    config
                );
            });
        });
    }

}

function makePressureChart() {
    document.getElementById("myChart").remove();
    document.querySelector(".chart-place").innerHTML = `<canvas id="myChart"></canvas>`;
    //Making latitude, longitude and actually time variables
    let long;
    let lat;
    var allTemperatures;
    let actualTime = new Date();
    //Checking if user allow for location access
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            //Parameters to get from api 
            const params = ['pressure'];
            fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${long}&params=${params}`, {
                headers: {
                    //Api key 
                    'Authorization': 'fc96cca6-0064-11ed-b21f-0242ac130002-fc96cd0a-0064-11ed-b21f-0242ac130002'
                }
            }).then((response) => response.json()).then((jsonData) => {
                //Typing data from api into divs
                console.log(jsonData);
                document.querySelector('.temp').innerHTML = `${jsonData.hours[actualTime.getHours()].pressure.noaa} `;
                document.getElementById("1am").innerHTML = `${jsonData.hours[1].pressure.noaa} `;
                document.getElementById("3am").innerHTML = `${jsonData.hours[3].pressure.noaa} `;
                document.getElementById("5am").innerHTML = `${jsonData.hours[5].pressure.noaa} `;
                document.getElementById("7am").innerHTML = `${jsonData.hours[7].pressure.noaa} `;
                document.getElementById("9am").innerHTML = `${jsonData.hours[9].pressure.noaa} `;
                document.getElementById("11am").innerHTML = `${jsonData.hours[11].pressure.noaa} `;
                document.getElementById("1pm").innerHTML = `${jsonData.hours[13].pressure.noaa} `;
                document.getElementById("3pm").innerHTML = `${jsonData.hours[15].pressure.noaa} `;
                document.getElementById("5pm").innerHTML = `${jsonData.hours[17].pressure.noaa} `;
                document.getElementById("7pm").innerHTML = `${jsonData.hours[19].pressure.noaa} `;
                document.getElementById("9pm").innerHTML = `${jsonData.hours[21].pressure.noaa} `;
                document.getElementById("11pm").innerHTML = `${jsonData.hours[23].pressure.noaa} `;
                allTemperatures = [jsonData.hours[1].pressure.noaa, jsonData.hours[3].pressure.noaa, jsonData.hours[5].pressure.noaa, jsonData.hours[7].pressure.noaa, jsonData.hours[9].pressure.noaa, jsonData.hours[11].pressure.noaa, jsonData.hours[13].pressure.noaa, jsonData.hours[15].pressure.noaa, jsonData.hours[17].pressure.noaa, jsonData.hours[19].pressure.noaa, jsonData.hours[21].pressure.noaa, jsonData.hours[23].pressure.noaa];
                console.log(allTemperatures);
                const labels = [
                    '1:00',
                    '3:00',
                    '5:00',
                    '7:00',
                    '9:00',
                    '11:00',
                    '13:00',
                    '15:00',
                    '17:00',
                    '19:00',
                    '21:00',
                    '23:00',

                ];

                const data = {
                    labels: labels,
                    datasets: [{
                        label: 'Pressure',
                        backgroundColor: 'rgb(255, 255, 255)',
                        borderColor: 'rgb(160, 160, 160)',
                        data: allTemperatures,
                        fill: true
                    }]
                };

                const config = {
                    type: 'line',
                    data: data,
                    options: {
                        scales: {
                            yAxes: {
                                ticks: {
                                    beginAtZero: false,
                                    stepSize: 10
                                },
                                gridLines: {
                                    drawBorder: false,
                                }
                            },
                            xAxes: {
                                display: false
                            }
                        },
                        plugins: {
                            legend: {
                                display: false
                            }
                        }
                    }
                };

                const myPressureChart = new Chart(
                    document.getElementById('myChart'),
                    config
                );
            });
        });
    }

}

window.addEventListener("load", makeTemperatureChart());