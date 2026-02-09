# nodetestapp

A simple Node.js Express test application with GET and POST endpoints.

## Installation

```bash
npm install
```

## Usage

Start the server:

```bash
npm start
```

The server will run on http://localhost:3000

## Endpoints

### GET /
Returns a simple JSON response.

**Example:**
```bash
curl http://localhost:3000/
```

**Response:**
```json
{
  "message": "Hello! This is a GET endpoint",
  "timestamp": "2026-02-09T08:49:45.257Z"
}
```

### POST /data
Accepts JSON data and returns it back with a confirmation message.

**Example:**
```bash
curl -X POST http://localhost:3000/data \
  -H "Content-Type: application/json" \
  -d '{"name": "test", "value": 123}'
```

**Response:**
```json
{
  "message": "Data received successfully via POST",
  "receivedData": {
    "name": "test",
    "value": 123
  },
  "timestamp": "2026-02-09T08:49:45.257Z"
}
```