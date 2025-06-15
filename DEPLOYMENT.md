# Menagenix Website Deployment Guide

This guide covers different deployment options for the Menagenix company website.

## Quick Deployment Options

### 1. Netlify (Recommended)

1. Build the project:
```bash
npm run build
```

2. Deploy to Netlify:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Configure custom domain (menagenix.com)

### 2. Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel --prod
```

### 3. GitHub Pages

1. Push code to GitHub repository
2. Run deployment script:
```bash
npm run deploy
```

### 4. Custom Domain Setup (menagenix.com)

#### DNS Configuration
Point your domain to your hosting provider:

**For Netlify:**
```
Type: CNAME
Name: www
Value: your-site-name.netlify.app

Type: A
Name: @
Value: 75.2.60.5
```

**For Vercel:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.61
```

#### SSL Certificate
Most hosting providers automatically provide SSL certificates. Ensure HTTPS is enabled.

## Environment Configuration

### Production Environment Variables
Create `.env.production` file:
```bash
VITE_SITE_URL=https://menagenix.com
VITE_CONTACT_EMAIL=info@menagenix.com
VITE_PHONE_NUMBER=+1-555-123-4567
```

### Build Optimization
The project is already configured for optimal production builds:
- Code splitting
- Asset optimization
- CSS minification
- Tree shaking

## Performance Checklist

- ✅ Optimized images
- ✅ Minified CSS/JS
- ✅ Lazy loading
- ✅ SEO meta tags
- ✅ Responsive design
- ✅ Accessibility standards

## Post-Deployment

1. **Test all pages** on multiple devices
2. **Verify contact form** functionality
3. **Check SEO** using Google Search Console
4. **Monitor performance** with Google PageSpeed Insights
5. **Set up analytics** (Google Analytics recommended)

## Monitoring and Maintenance

### Analytics Setup
1. Add Google Analytics to `index.html`
2. Configure conversion tracking for contact form
3. Monitor user behavior and page performance

### Content Updates
Update content by modifying the respective page components:
- Services: `src/pages/Services.tsx`
- Portfolio: `src/pages/Portfolio.tsx`
- About: `src/pages/About.tsx`
- Contact: `src/pages/Contact.tsx`

### Security
- Regular dependency updates
- SSL certificate renewal (automatic with most providers)
- Contact form spam protection

## Support

For deployment issues or questions:
- Email: developer@menagenix.com
- Check hosting provider documentation
- Review build logs for errors

---

**Ready to go live with menagenix.com!** 🚀

