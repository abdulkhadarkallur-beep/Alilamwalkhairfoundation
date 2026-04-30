# Al-Ilam Wal Khair Foundation Website

A professional, modern website for Al-Ilam Wal Khair Foundation built with HTML5, CSS3, and Tailwind CSS.

## 📋 Pages Included

1. **Home** - Hero section with foundation description, gallery, and key services
2. **About Us** - Mission, vision, core values, and foundation journey
3. **Services** - Healthcare, education, vocational training, and community support
4. **Learning** - Educational programs including primary, secondary, and vocational courses
5. **Jobs** - Career opportunities and job listings
6. **Donations** - Donation options, impact information, and giving methods

## 🎨 Features

- **Responsive Design** - Mobile-first approach with full responsiveness
- **Modern UI** - Clean, attractive design with gradient accents
- **Fast Loading** - Uses CDN-hosted Tailwind CSS and Font Awesome icons
- **User-Friendly Navigation** - Sticky navbar with mobile menu
- **Professional Styling** - Card hover effects, smooth transitions, and consistent color scheme
- **Image Gallery** - Beautiful image sections showcasing foundation work
- **Easy to Customize** - All content easily editable without coding knowledge

## 🚀 Quick Start

### Open in Browser
Simply double-click any HTML file to open it in your default browser.


### How Admin Data is Stored
All admin panel changes (cases, jobs, home content, etc.) are saved in your browser's localStorage. This works on GitHub Pages and any static hosting—no server or localhost required.

**Note:**
- Data is only available in the browser/device where you made the changes.
- Other users or devices will not see your changes unless you export/import data manually.

If you want to test the site locally, you can still use a local server (e.g., ), but this is not required for admin functionality.`python -m http.server 8000`

## 📁 File Structure

```
AlIlamWalKhair/
├── index.html          # Home page
├── about.html          # About Us page
├── services.html       # Services page
├── learning.html       # Learning programs page
├── jobs.html           # Career opportunities page
├── donations.html      # Donations page
└── README.md          # This file
```

## 🎯 Customization Guide

### Update Foundation Name/Logo
Edit in each HTML file's navigation:
```html
<h1 class="text-2xl font-bold">Your Foundation Name</h1>
```

### Change Colors
Modify the gradient in CSS:
```css
.hero-gradient {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Update Images
Replace image URLs (currently using Unsplash samples):
```html
<img src="your-image-url.jpg" alt="Description">
```

### Add Contact Information
Update footer contact details:
```html
<li>Email: your-email@domain.com</li>
<li>Phone: Your Phone Number</li>
```

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔗 External Dependencies

- **Tailwind CSS 3** - Via CDN
- **Font Awesome 6.4** - Via CDN

Internet connection required for styling and icons.

## 💡 Tips

1. **Replace Images** - Use your own foundation photos instead of Unsplash
2. **Connect Forms** - Forms are templates; connect to backend for functionality
3. **Add Analytics** - Insert Google Analytics code in `<head>`
4. **SEO** - Update meta descriptions in each page
5. **Mobile Testing** - Test on real devices

## 🚀 Deployment Options

**Free:**
- GitHub Pages
- Netlify
- Vercel
- Surge.sh

**Paid:**
- Shared Hosting (FTP)
- VPS/Cloud (AWS, Google Cloud, Azure)

## 📄 License

Free to use and modify for your foundation.

## ✨ Next Steps

1. Replace placeholder images with actual foundation photos
2. Update all content with real information
3. Integrate donation payment system
4. Add email form functionality
5. Deploy to web server
6. Set up custom domain

---

**Built with ❤️ for Al-Ilam Wal Khair Foundation**
