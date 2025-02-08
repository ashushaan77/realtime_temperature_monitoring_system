# temperature_monitoring_system
This is a sample app for monitoring temperature from any sensor or API.


## Project Setup

#### 1. Clone Repository
```
git clone https://github.com/giwallet/temperature_monitoring_system.git
cd temperature_monitoring_system
```
#### 2. Build and Start Docker:

```
docker-compose down -v
docker-compose up --build
```

####  3. Access URLs:
Frontend: ```http://localhost:3000```

Backend: ```http://localhost:5000```


## API specifications

#### 1. Health Check
###### Description: System Health Check API for backend server

```
GET /api/health
Response: {
  status: 'ok' | 'error'
  timestamp: string
}
```

#### 2. Process Temperature Reading
###### Description: API for processing temperature readings 

```
POST /api/readings/process
Request: {
  id: string,
  temperature: Number
}
 Response: {
    success: boolean,
    reading: {
         id: string,
         status: 'NORMAL' | 'HIGH',
         processedAt: string
    }
}
```

## Processing Implementation Details
#### Conditional Logic:
```
  Temperatures <= 25°C are marked as 'NORMAL'
  Temperatures > 25°C are marked as 'HIGH'
```

## Tests:
    - Located in _tests_
    - Run with: npm test


  ##### API Integration Tests:
    - Located in _tests_/api.test.js
    - Tests API endpoints
    
  ##### WebSocket Tests:
    - Located in _tests_/socket.test.js

  ##### Processing Logic Tests:  
    _tests_/processing_logic.test.js


#### Chosen Approach: Node.js Internal Processing
 
 ##### Implementation Decisions:
 Processing is handled internally within the backend server. For this simple application, internal handling was suitable. It allows simple & easy implementation, low latency, higher availability & cost efficiency compared to n8n.
 
