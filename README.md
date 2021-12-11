# **Enviromental platform module frontend**
This repository contains a web application for an IoT management platform. It is developed using `Angular` and `TypeScript`. If you are looking for the API calls and documentation, [click here](https://github.com/Losina24/enviromental-module-api).

# **Contents**
- [**Project**](#enviromental-platform-module-frontend)
- [**Contents**](#contents)
- [**Pre requirements**](#pre-requirements)
- [**Getting started**](#getting-started)
- [**Project structure**](#project-structure)
- [**Requests**](#requests)
  - [**Enviromental devices**](#enviromental-devices)
  - [**Sensors**](#sensors)
  - [**Measures**](#measures)
- [**Deployment**](#deployment)

# **Pre requirements**
This API is being developed using `Angular` and `TypeScript` so you need to be installed `npm` and `Node.js`. 

- Install [Node.js](https://nodejs.org/en/download/)
- Install Angular:

```js
$ npm install -g @angular/cli
```

# **Getting started**

1. Clone the repository

```js
$ git clone https://github.com/Losina24/enviromental-module-front
```

2. Install node modules

```js
$ cd <path-to-directory>/enviromental-module-front
$ npm install
```

3. Run Angular

```js
$ ng serve --open

// If the port 4200 is already in use
$ ng serve --port {port} --open

// If you want to run the application without open it in the browser
$ ng serve
```

4. `Optional` If you want to use the development API, you must to run it. For more information, see at API docs.

```js
// On API directory
$ npm run dev
```


Now you can start with the implementation of new features at `http:\\localhost:4200` or `http:\\localhost:{port}`.

# **Project structure**
```
enviromental-module-api/
    ├── build/
    ├── db/
    ├── docs/
    ├── test/
    └── src/
        ├── enviromental-device/
        ├── measures/
        ├── sensor/
        ├── gateway/
        ├── council/
        ├── network-server/
        ├── database.ts
        ├── index.ts
        ├── MqttRouter.ts
        └── utils.ts
```

# **Requests**
Here there is a list with all API calls for different entities. The common route for all calls is `/v2/enviromental/`


## **Enviromental devices**
Enviromental devices are the core of the application. These devices are a modular sensor hub that can contain multiple sensors according to user requirements. Multiple devices are grouped on the same gateway.

###### Endpoints
<pre>
POST <a href="#store-new-enviromental-device">/devices/</a>
GET <a href="#get-enviromental-device-information">/devices/:id</a>
GET <a href="#get-all-user-enviromental-devices">/devices/user/:userId</a>
GET <a href="#get-all-gateway-enviromental-devices">/devices/gateway/:gatewayId</a>
GET <a href="#get-all-council-enviromental-devices">/devices/council/:councilId</a>
GET <a href="#get-user-enviromental-device-pagination">/devices/user/:userId/:pageSize/:pageIndex</a>
GET <a href="#get-admin-enviromental-device-pagination">/devices/admin/:adminId/:pageSize/:pageIndex</a>
GET <a href="#get-council-enviromental-device-pagination">/devices/council/:councilId/:pageSize/:pageIndex</a>
</pre>

<br>

### **Store new enviromental device**
```
POST /device/
```

Parameters:
| Name          |    Type    | Required | Description |
| ------------- |:----------:|:--------:|:-----------|
| name          | `string`   |  ✓       | Enviromental device's name |
| mac           | `string`   |  ✓       | Enviromental device's network identification key |
| gatewayId     | `integer`  |  ✓       | Id of the gateway that are linked the enviromental device to |
| latitude      | `double`   |  ✓       | Enviromental device's position coordinate X |
| longitude     | `double`   |  ✓       | Enviromental device's position coordinate Y |

###### Response
```yaml
{
    http: 200,
    status: "OK",
    response: "Enviromental device created succesfully."
}
```

<br>

### **Get enviromental device information**
```
GET /devices/:id
```

###### Response
```yaml
{
    http: 200,
    status: "OK",
    response: {
        id: 1,
        name: "Enviromental Device 1",
        mac: "2c549188c9e3",
        gatewayId: 6,
        sensors: [100, 101, 102, 103, 104],
        coords: [20.000, -10.000],
        status: true
    }
}
```

<br>

### **Get all user enviromental devices**
```
GET /devices/user/:userId
```

###### Response
```yaml
{
    http: 200,
    status: "OK",
    response: [{
        id: 1,
        name: "Enviromental Device 1",
        mac: "2c549188c9e3",
        gatewayId: 6,
        sensors: [100, 101, 102, 103, 104],
        coords: [20.000, -10.000],
        status: true
    }]
}
```

<br>

### **Get all gateway enviromental devices**
```
GET /devices/gateway/:gatewayId
```

###### Response
```yaml
{
    http: 200,
    status: "OK",
    response: [{
        id: 1,
        name: "Enviromental Device 1",
        mac: "2c549188c9e3",
        gatewayId: 6,
        sensors: [100, 101, 102, 103, 104],
        coords: [20.000, -10.000],
        status: true
    }]
}
```

<br>

### **Get all council enviromental devices**
```
GET /devices/council/:councilId
```

###### Response
```yaml
{
    http: 200,
    status: "OK",
    response: [{
        id: 1,
        name: "Enviromental Device 1",
        mac: "2c549188c9e3",
        gatewayId: 6,
        sensors: [100, 101, 102, 103, 104],
        coords: [20.000, -10.000],
        status: true
    }]
}
```

<br>

### **Get user enviromental device pagination**
```
GET /devices/user/:userId/:pageSize/:pageIndex
```

###### Response
```yaml
{
    http: 200,
    status: "OK",
    response: [{
        id: 1,
        name: "Enviromental Device 1",
        mac: "2c549188c9e3",
        gatewayId: 6,
        sensors: [100, 101, 102, 103, 104],
        coords: [20.000, -10.000],
        status: true
    }]
}
```

<br>

### **Get admin enviromental device pagination**
```
GET /devices/admin/:adminId/:pageSize/:pageIndex
```

###### Response
```yaml
{
    http: 200,
    status: "OK",
    response: [{
        id: 1,
        name: "Enviromental Device 1",
        mac: "2c549188c9e3",
        gatewayId: 6,
        sensors: [100, 101, 102, 103, 104],
        coords: [20.000, -10.000],
        status: true
    }]
}
```

<br>

### **Get council enviromental device pagination**
```
GET /devices/council/:councilId/:pageSize/:pageIndex
```

###### Response
```yaml
{
    http: 200,
    status: "OK",
    response: [{
        id: 1,
        name: "Enviromental Device 1",
        mac: "2c549188c9e3",
        gatewayId: 6,
        sensors: [100, 101, 102, 103, 104],
        coords: [20.000, -10.000],
        status: true
    }]
}
```

<br>

---

## **Sensors**
Sensors are inside the environmental devices. A single device can contain multiple sensors. These sensors are responsible for obtaining data from the environment and sending it to the associated device.

###### Endpoints
<pre>
POST <a href="#store-sensor">/sensors/</a>
GET <a href="#get-sensor-information">/sensors/:id</a>
GET <a href="#get-enviromental-device-sensors">/sensors/device/:deviceId</a>
GET <a href="#get-all-sensors-from-user">/sensors/user/:userId</a>
GET <a href="#get-all-sensors-from-admin">/sensors/admin/:adminId</a>
GET <a href="#get-all-sensors-from-council">/sensors/council/:councilId</a>
GET <a href="#get-user-sensor-pagination">/sensors/user/:userId/:pageSize/:pageIndex</a>
GET <a href="#get-admin-sensor-pagination">/sensors/admin/:adminId/:pageSize/:pageIndex</a>
GET <a href="#get-council-sensor-pagination">/sensors/council/:councilId/:pageSize/:pageIndex</a>
DELETE <a href="#remove-sensor">/sensors/:id</a>
</pre>

<br>

### **Store new sensor**
```
POST /sensor/:id
```

Parameters:
| Name          |    Type    | Required | Description |
| ------------- |:----------:|:--------:|:-----------|
| name          | `string`   |  ✓       | Sensor's name |
| deviceEUI     | `string`   |  ✓       | Sensor's identification key |
| deviceId      | `integer`  |  ✓       | Id of the device that are linked the sensor to |
| type          | `integer`  |  ✓       | Sensor's type ID |
| status        | `boolean`  |  ✓       | Sensor's status |

###### Response
```yaml
{
    http: 200,
    status: "OK",
    response: "Sensor created succesfully."
}
```

<br>

### **Get sensor information**
```
GET /sensors/:id
```

###### Response
```yaml
{
    http: 200,
    status: "OK",
    response: {
        id: 1,
        deviceEUI: "AS63126",
        deviceId: 1,
        name: "EnviromentalSensor1",
        type: 1,
        status: true
    }
}
```

<br>

### **Get enviromental device sensors**
```
GET /sensors/device/:deviceId
```

###### Response
```yaml
{
    http: 200,
    status: "OK",
    response: [{
        id: 1,
        deviceEUI: "AS63126",
        deviceId: 1,
        name: "EnviromentalSensor1",
        type: 1,
        status: true
    }]
}
```

<br>

### **Get all sensors from user**
```
GET /sensors/user/:userId
```

###### Response
```yaml
{
    http: 200,
    status: "OK",
    response: [{
        id: 1,
        deviceEUI: "AS63126",
        deviceId: 1,
        name: "EnviromentalSensor1",
        type: 1,
        status: true
    }]
}
```

<br>

### **Get all sensors from admin**
```
GET /sensors/admim/:adminId
```

###### Response
```yaml
{
    http: 200,
    status: "OK",
    response: [{
        id: 1,
        deviceEUI: "AS63126",
        deviceId: 1,
        name: "EnviromentalSensor1",
        type: 1,
        status: true
    }]
}
```

<br>

### **Get all sensors from council**
```
GET /sensors/council/:councilId
```

###### Response
```yaml
{
    http: 200,
    status: "OK",
    response: [{
        id: 1,
        deviceEUI: "AS63126",
        deviceId: 1,
        name: "EnviromentalSensor1",
        type: 1,
        status: true
    }]
}
```

<br>

### **Get user sensor pagination**
```
GET /sensors/user/:userId/:pageSize/:pageIndex
```

###### Response
```yaml
{
    http: 200,
    status: "OK",
    response: [{
        id: 1,
        deviceEUI: "AS63126",
        deviceId: 1,
        name: "EnviromentalSensor1",
        type: 1,
        status: true
    }]
}
```

<br>

### **Get admin sensor pagination**
```
GET /sensors/admin/:adminId/:pageSize/:pageIndex
```

###### Response
```yaml
{
    http: 200,
    status: "OK",
    response: [{
        id: 1,
        deviceEUI: "AS63126",
        deviceId: 1,
        name: "EnviromentalSensor1",
        type: 1,
        status: true
    }]
}
```

<br>

### **Get council sensor pagination**
```
GET /sensors/council/:councilId/:pageSize/:pageIndex
```

###### Response
```yaml
{
    http: 200,
    status: "OK",
    response: [{
        id: 1,
        deviceEUI: "AS63126",
        deviceId: 1,
        name: "EnviromentalSensor1",
        type: 1,
        status: true
    }]
}
```

<br>

### **Get user sensor pagination**
```
DELETE /sensor/
```

###### Response
```yaml
{
    http: 200,
    status: "OK",
    response: "Sensor was deleted succesfully."
}
```

<br>

---

## **Measures**
Measures, as their name suggests, represent a value collected by a sensor at a specific time and of a specific type of pollutant.

###### Endpoints - REST
<pre>
GET <a href="#get-all-measures-from-an-enviromental-device">/measures/:id</a>
</pre>

###### Endpoints - MQTT
<pre>
POST <a href="#store-measure">/46701/ambiental/1/#</a>
</pre>

<br>

### **Get all measures from an enviromental device** `REST`
```
GET /measures/:id
```

###### Response
```yaml
{
    http: 200,
    status: "OK",
    response: [{
        sensorId: 20,
        value: 10.00,
        date: "21-10-2021 21:20:15",
        unit: "ppm",
        type: "CO2"
    }]
}
```

<br>

### **Store measure** `MQTT`
```
TOPIC /46701/ambiental/1/#
```

Body:
| Name          |    Type    | Required | Description |
| ------------- |:----------:|:--------:|:-----------|
| value         | `float`   |  ✓       | Measure's value |
| date          | `string`   |  ✓       | Measure's date |
| unit          | `string`  |  ✓       | Measure's unit |
| type          | `string`  |  ✓       | Measure's type |

<br>

---


# **Deployment**
To upload the code to production, you just have to drag the files into the `/build` folder inside your server's folder (if it is local, it is not necessary). Then start the express server from the `index.js` file

# **License**
All the code in this repository is owned by [Alejandro Losa](https://alejandrolosa.es/). <br>
Copyright © 2021, Alejandro Losa.
