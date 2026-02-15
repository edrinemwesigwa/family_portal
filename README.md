# Lukula Family Portal

A comprehensive family information and savings management system built with HTML, CSS, and JavaScript. Hosted on GitHub Pages.

## Features

### 👨‍👩‍👧‍👦 Family Information Management
- Complete family member profiles with biography
- Blood group, allergies, and medical information
- Emergency contacts and addresses
- Occupation and employer details

### 💰 Savings Tracking
- Monthly contribution tracking
- Interactive charts and visualizations
- Savings goal monitoring
- Individual member contributions

### 🔐 Authentication & Security
- Login system with username and password
- Local storage (no server required)
- Role-based access control (Super Admin, Admin, User)

### 📊 Dashboard
- Total savings overview
- Monthly progress charts
- Savings distribution pie chart
- Recent activity feed

## Default Users

| Username | Password | Role |
|----------|----------|------|
| edrine | edrine123 | Super Admin |
| angel | angel123 | Admin |
| joy | joy123 | Admin |
| fred | fred123 | User |
| lydia | lydia123 | User |
| hope | hope123 | User |
| drice | drice123 | User |

## Roles & Permissions

### Super Admin (Edrine)
- Full CRUD access to all data
- Can promote/demote users to admin
- Can deactivate accounts
- Access to all settings

### Admin (Angel, Joy)
- Can edit family members
- Can add/delete savings records
- Can manage user roles
- Cannot access system settings

### User (Fred, Lydia, Hope, Drice)
- Can view all family information
- Can only add their own savings
- Can only delete their own savings
- Can edit their own profile

## How to Deploy to GitHub Pages

1. **Create a GitHub Account** (if you don't have one)
   - Go to [github.com](https://github.com)

2. **Create a New Repository**
   - Click the "+" icon → "New repository"
   - Name: `family-dashboard` (or any name)
   - Choose "Public"
   - Click "Create repository"

3. **Upload Files**
   - Click "uploading an existing file"
   - Upload all three files/folder:
     - `index.html`
     - `css/styles.css`
     - `js/app.js`
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to Repository Settings
   - Click "Pages" on the left sidebar
   - Under "Build and deployment" → "Source"
   - Select "Deploy from a branch"
   - Under "Branch" → select "main" (or "master")
   - Set folder to "/ (root)"
   - Click "Save"

5. **Access Your Site**
   - Wait 1-2 minutes for deployment
   - Your site will be available at: `https://yourusername.github.io/family-dashboard`

## Local Development

To test locally:
1. Open `index.html` in any web browser
2. The app will work without any server

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern responsive design with Flexbox/Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Chart.js** - Beautiful charts
- **Font Awesome** - Icons
- **Google Fonts** - Inter font family
- **Local Storage** - Data persistence

## Project Structure

```
family-dashboard/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling
└── js/
    └── app.js          # Application logic
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to modify and use as needed!

---

Built Lukula Family
 with ❤️ for the