# Realtime Temperature Monitoring System
This is a sample app for monitoring temperature from any sensor or API.


## Project Setup

#### 1. Clone Repository
```
git clone https://github.com/ashushaan77/realtime_temperature_monitoring_system.git
cd realtime_temperature_monitoring_system
```
#### 2. Build and Start Docker:

```
docker-compose down -v
docker-compose up --build
```

#### 3. Setup n8n workflow
      - Go to n8n: ```http://localhost:5678```
      - Create Account
      - Select new Workflow
      - Import from file 
      - Workflow file available in ```n8n/workflows/process_readings.json```
      - Activate workflow by toggling to Active mode

####  4. Access URLs:
n8n: ```http://localhost:5678```
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
  temperature: Number,
  timestamp: string
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


#### Chosen Approach: n8n implementation for processing reading with implementing Node.js Internal Processing in case of n8n failure/unavailibity.
 
 ##### Implementation Decisions:
 I have implemented n8n for processing reading as n8n implemenation was getting preferred for this task. I have also implemented NodeJs internal processing for fallback, in case n8n failure/unavailibity.
 
