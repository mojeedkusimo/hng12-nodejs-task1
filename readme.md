# [Nodejs](https://hng.tech/hire/nodejs-developers) Task Description

## Develop a public API that returns the following information in JSON format:

1. Your registered email address (used to register on the HNG12 Slack workspace).
2. The current datetime as an ISO 8601 formatted timestamp.
3. The GitHub URL of the project's codebase.

```javascript
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "<https://github.com/yourusername/your-repo>"
}
```

## Setup instructions

1. Execute below command to install dependencies

```bash

npm i 

```

2. Execute below to start the service

```bash

node imdex.js 

```

3. Request format

```bash

GET: http://localhost:3434/api

```

4. Response format

```javascript
{
  "email": "mkusimo90@gmail.com",
  "current_datetime": "2025-01-31T23:09:08.332Z",
  "github_url": "https://github.com/mojeedkusimo/hng12-nodejs-task1"
}
```