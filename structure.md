
# Project Structure Overview

```
qr-code-tracker/
│
├── pages/                   # Main directory for Next.js pages
│   ├── api/                 # API routes for backend functionality
│   │   ├── auth/            # Authentication-related API routes (login, register)
│   │   ├── qrcodes/         # QR code-related API routes (create, get, track)
│   │   └── scans/           # API route for tracking scans
│   ├── dashboard.js         # User dashboard page to manage QR codes
│   ├── login.js             # Login page
│   ├── register.js          # Registration page
│   ├── index.js             # Home page
│   └── [...slug].js         # Dynamic route for QR code redirects
│
├── components/              # Reusable UI components
│   ├── Layout.js            # Layout component for consistent structure across pages
│   └── QRCodeForm.js        # Form for creating QR codes
│
├── lib/                     # Utility functions and services
│   ├── auth.js              # JWT authentication utilities
│   ├── mongodb.js           # MongoDB connection setup
│   └── qrcode.js            # QR code generation and management utilities
│
├── models/                  # Mongoose models
│   ├── User.js              # User schema and model
│   ├── QRCode.js            # QR code schema and model
│   └── QRCodeScan.js        # QR code scan log schema and model
│
├── styles/                  # Global and component-specific styles
│   └── globals.css          # Global styles
│
├── .env                     # Environment variables (e.g., MongoDB URI, JWT secret)
├── next.config.js           # Next.js configuration
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation
```
