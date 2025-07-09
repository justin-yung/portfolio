# Interactive Portfolio Website

A modern, interactive portfolio website built with React and Framer Motion. This project is designed for job applications and recruiter engagement, featuring a professional tone with unique UI elements.

## Features

- **Modern Design**: Sleek, responsive design with interactive elements
- **Animated Components**: Smooth animations with Framer Motion
- **Section-Based Layout**: Clearly organized content in dedicated sections
- **Mobile Responsive**: Optimized for all device sizes
- **Interactive Elements**: Hover effects, expandable cards, and more
- **Contact Form**: Integrated with EmailJS for easy communication

## Sections

- **Home**: Strong initial impact with animated introduction
- **About Me**: Personal background, skills, and interests
- **Experience**: Professional experience and education
- **Projects**: Showcase of key projects and achievements
- **Skills**: Technical skills, languages, and certifications
- **Contact**: Easy ways to get in touch

## Technologies Used

- **React**: Front-end library for building the user interface
- **Custom CSS**: Clean, maintainable styling
- **Framer Motion**: Animation library for React
- **EmailJS**: Email handling service for the contact form
- **React Icons**: Icon library for visual elements
- **Vite**: Next-generation front-end tooling

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/justin-yung/portfolio-v2.git
   ```

2. Navigate to the project directory
   ```
   cd portfolio-v2
   ```

3. Install dependencies
   ```
   npm install
   ```

4. Start the development server
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Customization

### Personal Information

Update the following files to personalize your portfolio:

- `src/sections/Home.jsx`: Your name, title, and intro
- `src/sections/About.jsx`: Personal background and interests
- `src/sections/Experience.jsx`: Work history and education
- `src/sections/Projects.jsx`: Project showcase
- `src/sections/Skills.jsx`: Technical skills and certifications
- `src/sections/Contact.jsx`: Contact information and form

### Styling

The project uses custom CSS for styling. The main theme colors can be adjusted in `src/App.css`.

### Email Integration

To enable the contact form functionality:

1. Create an account on [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the following in `src/sections/Contact.jsx`:
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID';
   const templateId = 'YOUR_TEMPLATE_ID';
   const userId = 'YOUR_USER_ID';
   ```

## Deployment

This project can be easily deployed to Vercel or Netlify:

### Vercel

```
npm install -g vercel
vercel
```

### Netlify

```
npm install -g netlify-cli
netlify deploy
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Design inspired by modern portfolio trends
- Icons provided by React Icons
- Animation powered by Framer Motion
