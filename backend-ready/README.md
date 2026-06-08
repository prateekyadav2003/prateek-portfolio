# Future Backend Scalability Structure (Express.js, JWT, MongoDB/PostgreSQL)

This folder contains the architectural roadmap and blueprint schemas for migating the React portfolio into a dynamic CMS-driven system.

## Proposed Directory Architecture
```
backend-ready/
├── server.js               # Express application entrance
├── package.json            # Node backend dependencies
├── config/
│   ├── db.js               # Database connection (MongoDB Mongoose / Prisma Client)
│   └── index.js            # Environment configurations (JWT secrets, Port, AWS S3)
├── controllers/
│   ├── authController.js   # Admin Login & JWT validation
│   ├── projectController.js# Add, edit, delete projects
│   └── certController.js   # Manage certifications upload
├── models/
│   ├── User.js             # JWT user schema
│   ├── Project.js          # Project dataset
│   └── Certificate.js      # Certificate links database
├── routes/
│   ├── auth.js             # Auth endpoints
│   ├── projects.js         # Projects API routes
│   └── certificates.js     # Certificates API routes
└── middleware/
    └── auth.js             # JWT verification interceptor
```

## JWT Authentication Flow
1. **POST `/api/auth/login`**: Validate admin email and password from environment variables.
2. Returns a signed JWT token containing user permissions.
3. Protected endpoints (`POST /api/projects`, `DELETE /api/projects`, etc.) verify the bearer token via the auth middleware before executing operations.

## Database Schema (MongoDB Mongoose Example)

### Project Model
```javascript
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  emoji: String,
  gradientClass: String,
  shortDesc: String,
  overview: String,
  techStack: [String],
  features: [String],
  challenges: String,
  solutions: String,
  improvements: [String],
  github: String,
  demo: String
}, { timestamps: true });
```

### Certificate Model
```javascript
const certSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issuer: { type: String, required: true },
  tags: [String],
  category: { type: String, enum: ['Cloud', 'Database', 'Data', 'Security'] },
  fileUrl: String, // AWS S3 URL or static asset path
  icon: String
}, { timestamps: true });
```
