# FitZone - Modern Fitness Gym Website

A premium, modern fitness gym landing page built with React and Vite. Features a dark theme with yellow/gold accents, showcasing programs, trainers, pricing, testimonials, and contact information.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI**: Dark premium theme with bold typography and yellow/gold accents
- **Component-Based Architecture**: Clean, reusable React components
- **Smooth Animations**: CSS animations and transitions for better UX
- **Scalable Structure**: Easy to extend with authentication, payments, dashboards, etc.

## 📋 Sections

- **Hero Section**: Eye-catching landing with call-to-action and stats
- **Features**: Why choose FitZone (equipment, trainers, results, 24/7 access)
- **Programs**: Weight training, CrossFit, Yoga & Wellness, Group Fitness
- **Trainers**: Meet the coaching team with specialties
- **Pricing**: Three membership tiers (Basic, Pro, Elite)
- **Testimonials**: Customer success stories
- **Contact**: Contact form and information with opening hours

## 🛠️ Tech Stack

- **React 18**: Modern JavaScript library for building user interfaces
- **Vite**: Next-generation frontend tooling
- **CSS3**: Custom styling with CSS variables for theming
- **Google Fonts**: Inter & Montserrat for professional typography

## 📦 Project Structure

```
Front/
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx/css
│   │   ├── Hero.jsx/css
│   │   ├── Features.jsx/css
│   │   ├── Programs.jsx/css
│   │   ├── Trainers.jsx/css
│   │   ├── Pricing.jsx/css
│   │   ├── Testimonials.jsx/css
│   │   ├── Contact.jsx/css
│   │   └── Footer.jsx/css
│   ├── data/             # Content data
│   │   └── content.js
│   ├── styles/           # Global styles
│   │   └── index.css
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm installed

### Installation

1. Navigate to the Front directory:
   ```bash
   cd Front
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 🎨 Customization

### Colors & Theme

Edit the CSS variables in `src/styles/index.css`:

```css
:root {
  --color-primary: #FDB913;        /* Yellow/gold accent */
  --color-primary-dark: #E5A500;   /* Darker gold */
  --color-bg: #000000;             /* Black background */
  --color-bg-card: #0F0F0F;        /* Card background */
  --color-text: #FFFFFF;           /* White text */
  --color-text-muted: #A0A0A0;     /* Muted text */
}
```

### Content

All content is centralized in `src/data/content.js`. Edit:
- Site configuration
- Navigation items
- Features
- Programs
- Trainers
- Pricing plans
- Testimonials
- Contact information

## 🔮 Future Enhancements

Ready to add:
- User authentication (login/signup)
- Member dashboard
- Payment integration (Stripe/PayPal)
- Class booking system
- Admin panel
- Backend API integration
- Real-time chat support
- Progress tracking
- Workout planner

## 📝 Notes for Developers

- **Component Style**: Each component has its own CSS file for easy maintenance
- **Reusability**: Components are designed to be reusable and composable
- **No Hard-coding**: All content comes from `data/content.js`
- **Responsive First**: Mobile-first approach with breakpoints at 480px, 768px, 1024px
- **Performance**: Optimized with Vite for fast builds and HMR (Hot Module Replacement)

## 🤝 Contributing

This is a starting template. Feel free to:
- Add new components
- Enhance animations
- Integrate with backend APIs
- Add authentication flows
- Implement payment systems

## 📄 License

MIT License - feel free to use this for your projects!

---

Built with ❤️ using React + Vite
