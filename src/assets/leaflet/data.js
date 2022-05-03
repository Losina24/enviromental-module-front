/* var data = {
    "councils": [{
            "name": "Ayuntamiento 1",
            "radius": 30,
            "coords": [38.9951001,  -0.163353]
        },
        {
            "name": "Ayuntamiento 2",
            "radius": 40,
            "coords": [38.9918992, -0.166]
        }
    ],
    "gateways": [{
            "name": "Gateway 1",
            "coords": [38.9951001, -0.183353],
            "councilName": "Ayuntamiento 1",
            "radius": 8
        },
        {
            "name": "Gateway 2",
            "coords": [38.9551001, -0.173353],
            "councilName": "Ayuntamiento 1",
            "radius": 8
        }
    ],
    "devices": [{
        "name": "device 1",
        "measurements": [{
                "type": "CO2",
                "value": 40,
                "unit": "ppm",
                "dangerous": "red",
                "date": "10101010110"
            },
            {
                "type": "H2",
                "value": 5,
                "unit": "ppm",
                "dangerous": "green",
                "date": "10101010110"
            },
            {
                "type": "O3",
                "value": 10,
                "unit": "ppm",
                "dangerous": "green",
                "date": "10101010110"
            }
        ],
        "coords":  [38.9951001, -0.15353]
    }, {
        "name": "device 2",
        "measurements": [{
                "type": "CO2",
                "value": 10,
                "unit": "ppm",
                "dangerous": "red",
                "date": "10101010110"
            },
            {
                "type": "H2",
                "value": 40,
                "unit": "ppm",
                "dangerous": "green",
                "date": "10101010110"
            },
            {
                "type": "O3",
                "value": 50,
                "unit": "ppm",
                "dangerous": "green",
                "date": "10101010110"
            }
        ],
        "coords":  [38.9951001, -0.143353]
    }]
} */
/*
var data = {
    "councils": [{
            "name": "Ayuntamiento 1",
            "radius": 30,
            "coords": [38.9951001, -0.163353]
        },
        {
            "name": "Ayuntamiento 2",
            "radius": 40,
            "coords": [38.9918992, -0.166]
        }
    ],
    "gateways": [{
            "name": "Gateway 1",
            "coords": [38.9951001, -0.183353],
            "councilName": "Ayuntamiento 1",
            "radius": 8
        },
        {
            "name": "Gateway 2",
            "coords": [38.9551001, -0.173353],
            "councilName": "Ayuntamiento 1",
            "radius": 8
        }
    ],
    "devices": [{
        "name": "device 1",
        "measurements": [{
                "type": "CO2",
                "value": 40,
                "unit": "ppm",
                "dangerous": "red",
                "date": "10101010110"
            },
            {
                "type": "H2",
                "value": 5,
                "unit": "ppm",
                "dangerous": "green",
                "date": "10101010110"
            },
            {
                "type": "O3",
                "value": 10,
                "unit": "ppm",
                "dangerous": "green",
                "date": "10101010110"
            }
        ],
        "coords": [38.9951001, -0.15353]
    }, {
        "name": "device 2",
        "measurements": [{
                "type": "CO2",
                "value": 10,
                "unit": "ppm",
                "dangerous": "red",
                "date": "10101010110"
            },
            {
                "type": "H2",
                "value": 40,
                "unit": "ppm",
                "dangerous": "green",
                "date": "10101010110"
            },
            {
                "type": "O3",
                "value": 50,
                "unit": "ppm",
                "dangerous": "green",
                "date": "10101010110"
            }
        ],
        "coords": [38.9951001, -0.143353]
    }]
} */

var data = {
    "councils": [{
        "name": "ayuntamiento gandia",
        "radius": 30,
        "coords": [38.968, -0.1844]
    }],
    "gateways": [{
        "name": "gandia_gateway_1",
        "coords": [38.968, -0.1844],
        "councilName": "ayuntamiento alcoy",
        "radius": 15
    }],
    "devices": [{
            "name": "BuchuDev",
            "measurements": [{
                    "type": "HCO",
                    "value": 10,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "VOC",
                    "value": 17,
                    "unit": "ppm",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "CO",
                    "value": 22,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "CO2",
                    "value": 4,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2",
                    "value": 7,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2S",
                    "value": 22,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "HCL",
                    "value": 3,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HCN",
                    "value": 12,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HF",
                    "value": 22,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NH3",
                    "value": 9,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "NO2",
                    "value": 5,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "O3",
                    "value": 20,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "O2",
                    "value": 7,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SO2",
                    "value": 9,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "TEMP",
                    "value": 13,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NOISE",
                    "value": 1,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "EPSILON",
                    "value": 18,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SOIL",
                    "value": 8,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                }
            ],
            "coords": [38.96, -0.186]
        },
        {
            "name": "ElMejorDispositivoDelMundo",
            "measurements": [{
                    "type": "HCO",
                    "value": 30,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "VOC",
                    "value": 17,
                    "unit": "ppm",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "CO",
                    "value": 22,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "CO2",
                    "value": 44,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2",
                    "value": 17,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2S",
                    "value": 22,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "HCL",
                    "value": 33,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HCN",
                    "value": 12,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HF",
                    "value": 22,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NH3",
                    "value": 19,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "NO2",
                    "value": 15,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "O3",
                    "value": 20,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "O2",
                    "value": 17,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SO2",
                    "value": 19,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "TEMP",
                    "value": 13,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NOISE",
                    "value": 11,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "EPSILON",
                    "value": 18,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SOIL",
                    "value": 18,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                }
            ],
            "coords": [38.96, -0.189]
        },
        {
            "name": "amb_dev12",
            "measurements": [{
                    "type": "HCO",
                    "value": 20,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "VOC",
                    "value": 27,
                    "unit": "ppm",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "CO",
                    "value": 6,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "CO2",
                    "value": 21,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2",
                    "value": 11,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2S",
                    "value": 15,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "HCL",
                    "value": 23,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HCN",
                    "value": 21,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HF",
                    "value": 11,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NH3",
                    "value": 29,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "NO2",
                    "value": 25,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "O3",
                    "value": 5,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "O2",
                    "value": 17,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SO2",
                    "value": 29,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "TEMP",
                    "value": 23,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NOISE",
                    "value": 10,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "EPSILON",
                    "value": 16,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SOIL",
                    "value": 20,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                }
            ],
            "coords": [38.954, -0.185]
        },
        {
            "name": "amb_dev11",
            "measurements": [{
                    "type": "HCO",
                    "value": 20,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "VOC",
                    "value": 9,
                    "unit": "ppm",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "CO",
                    "value": 1,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "CO2",
                    "value": 24,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2",
                    "value": 27,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2S",
                    "value": 13,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "HCL",
                    "value": 16,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HCN",
                    "value": 4,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HF",
                    "value": 12,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NH3",
                    "value": 15,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "NO2",
                    "value": 5,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "O3",
                    "value": 10,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "O2",
                    "value": 27,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SO2",
                    "value": 19,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "TEMP",
                    "value": 23,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NOISE",
                    "value": 10,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "EPSILON",
                    "value": 28,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SOIL",
                    "value": 18,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                }
            ],
            "coords": [38.977, -0.183]
        },
        {
            "name": "amb_dev10",
            "measurements": [{
                    "type": "HCO",
                    "value": 30,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "VOC",
                    "value": 37,
                    "unit": "ppm",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "CO",
                    "value": 32,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "CO2",
                    "value": 34,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2",
                    "value": 37,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2S",
                    "value": 32,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "HCL",
                    "value": 33,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HCN",
                    "value": 32,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HF",
                    "value": 32,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NH3",
                    "value": 29,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "NO2",
                    "value": 25,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "O3",
                    "value": 30,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "O2",
                    "value": 27,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SO2",
                    "value": 29,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "TEMP",
                    "value": 23,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NOISE",
                    "value": 31,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "EPSILON",
                    "value": 28,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SOIL",
                    "value": 28,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                }
            ],
            "coords": [38.976, -0.19]
        },
        {
            "name": "amb_dev9",
            "measurements": [{
                    "type": "HCO",
                    "value": 1,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "VOC",
                    "value": 7,
                    "unit": "ppm",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "CO",
                    "value": 2,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "CO2",
                    "value": 4,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2",
                    "value": 1,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2S",
                    "value": 3,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "HCL",
                    "value": 8,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HCN",
                    "value": 1,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HF",
                    "value": 2,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NH3",
                    "value": 1,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "NO2",
                    "value": 9,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "O3",
                    "value": 2,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "O2",
                    "value": 5,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SO2",
                    "value": 3,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "TEMP",
                    "value": 3,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NOISE",
                    "value": 1,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "EPSILON",
                    "value": 8,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SOIL",
                    "value": 8,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                }
            ],
            "coords": [38.965, -0.194]
        },
        {
            "name": "amb_dev8",
            "measurements": [{
                    "type": "HCO",
                    "value": 40,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "VOC",
                    "value": 41,
                    "unit": "ppm",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "CO",
                    "value": 42,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "CO2",
                    "value": 34,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2",
                    "value": 37,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2S",
                    "value": 38,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "HCL",
                    "value": 37,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HCN",
                    "value": 36,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HF",
                    "value": 35,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NH3",
                    "value": 39,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "NO2",
                    "value": 35,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "O3",
                    "value": 30,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "O2",
                    "value": 37,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SO2",
                    "value": 39,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "TEMP",
                    "value": 33,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NOISE",
                    "value": 41,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "EPSILON",
                    "value": 38,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SOIL",
                    "value": 48,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                }
            ],
            "coords": [38.962, -0.192]
        },
        {
            "name": "amb_dev6",
            "measurements": [{
                    "type": "HCO",
                    "value": 21,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "VOC",
                    "value": 13,
                    "unit": "ppm",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "CO",
                    "value": 33,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "CO2",
                    "value": 34,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2",
                    "value": 17,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2S",
                    "value": 19,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "HCL",
                    "value": 11,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HCN",
                    "value": 26,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HF",
                    "value": 1,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NH3",
                    "value": 5,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "NO2",
                    "value": 25,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "O3",
                    "value": 28,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "O2",
                    "value": 13,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SO2",
                    "value": 14,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "TEMP",
                    "value": 19,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NOISE",
                    "value": 26,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "EPSILON",
                    "value": 10,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SOIL",
                    "value": 24,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                }
            ],
            "coords": [38.97, -0.178]
        },
        {
            "name": "amb_dev5",
            "measurements": [{
                    "type": "HCO",
                    "value": 1,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "VOC",
                    "value": 2,
                    "unit": "ppm",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "CO",
                    "value": 3,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "CO2",
                    "value": 4,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2",
                    "value": 5,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2S",
                    "value": 6,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "HCL",
                    "value": 7,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HCN",
                    "value": 8,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HF",
                    "value": 9,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NH3",
                    "value": 9,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "NO2",
                    "value": 8,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "O3",
                    "value": 7,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "O2",
                    "value": 6,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SO2",
                    "value": 5,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "TEMP",
                    "value": 4,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NOISE",
                    "value": 1,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "EPSILON",
                    "value": 3,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SOIL",
                    "value": 2,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                }
            ],
            "coords": [38.965, -0.186]
        },
        {
            "name": "amb_dev4",
            "measurements": [{
                    "type": "SOIL",
                    "value": 810,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-16T09:33:40.000Z"
                },
                {
                    "type": "TEMP",
                    "value": 20,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2022-01-14T09:15:37.000Z"
                }
            ],
            "coords": [38.972, -0.1844]
        },
        {
            "name": "amb_dev3",
            "measurements": [{
                    "type": "HCO",
                    "value": 27,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "VOC",
                    "value": 12,
                    "unit": "ppm",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "CO",
                    "value": 13,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "CO2",
                    "value": 24,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2",
                    "value": 15,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2S",
                    "value": 16,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "HCL",
                    "value": 17,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HCN",
                    "value": 18,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HF",
                    "value": 19,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NH3",
                    "value": 20,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "NO2",
                    "value": 21,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "O3",
                    "value": 22,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "O2",
                    "value": 23,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SO2",
                    "value": 24,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "TEMP",
                    "value": 25,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NOISE",
                    "value": 26,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "EPSILON",
                    "value": 27,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SOIL",
                    "value": 28,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                }
            ],
            "coords": [38.959, -0.1833]
        },
        {
            "name": "amb_dev2",
            "measurements": [{
                    "type": "HCO",
                    "value": 20,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "VOC",
                    "value": 10,
                    "unit": "ppm",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "CO",
                    "value": 10,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "CO2",
                    "value": 10,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2",
                    "value": 10,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2S",
                    "value": 10,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "HCL",
                    "value": 10,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HCN",
                    "value": 10,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HF",
                    "value": 10,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NH3",
                    "value": 10,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "NO2",
                    "value": 10,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "O3",
                    "value": 10,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "O2",
                    "value": 10,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SO2",
                    "value": 10,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "TEMP",
                    "value": 10,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NOISE",
                    "value": 10,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "EPSILON",
                    "value": 10,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SOIL",
                    "value": 10,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                }
            ],
            "coords": [38.96, -0.182]
        },
        {
            "name": "amb_dev1",
            "measurements": [{
                    "type": "HCO",
                    "value": 24,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "VOC",
                    "value": 24,
                    "unit": "ppm",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:57:33.000Z"
                },
                {
                    "type": "CO",
                    "value": 24,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "CO2",
                    "value": 24,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2",
                    "value": 24,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "H2S",
                    "value": 24,
                    "unit": "ppm",
                    "dangerous": "red",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "HCL",
                    "value": 24,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HCN",
                    "value": 24,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "HF",
                    "value": 24,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NH3",
                    "value": 24,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "NO2",
                    "value": 24,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "O3",
                    "value": 24,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "O2",
                    "value": 24,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SO2",
                    "value": 24,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "TEMP",
                    "value": 24,
                    "unit": "ppm",
                    "dangerous": "green",
                    "date": "2021-12-20T10:57:34.000Z"
                },
                {
                    "type": "NOISE",
                    "value": 24,
                    "unit": "",
                    "dangerous": "yellow",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "EPSILON",
                    "value": 24,
                    "unit": "",
                    "dangerous": "red",
                    "date": "2021-12-20T10:58:05.000Z"
                },
                {
                    "type": "SOIL",
                    "value": 24,
                    "unit": "",
                    "dangerous": "green",
                    "date": "2021-12-20T10:58:05.000Z"
                }
            ],
            "coords": [38.958, -0.185]
        }
    ]
}