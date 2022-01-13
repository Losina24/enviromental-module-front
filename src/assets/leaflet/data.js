var data = {
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
}