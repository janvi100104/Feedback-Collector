# API Documentation

## Feedback API

### POST /api/feedback

Create a new feedback entry.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "message": "string",
  "createdAt": "date"
}
```

**Status Codes:**
- 201: Feedback created successfully
- 400: Invalid request data
- 500: Server error

### GET /api/feedback

Retrieve all feedback entries.

**Response:**
```json
[
  {
    "id": "string",
    "name": "string",
    "email": "string",
    "message": "string",
    "createdAt": "date"
  }
]
```

**Status Codes:**
- 200: Feedback retrieved successfully
- 500: Server error