# KARIBU AI Technologies — Corporate Website

Responsive React + Vite website for KARIBU AI Technologies.

## Requirements
- Node.js 18.0 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Contact form configuration
The contact form uses the visitor's email application (`mailto:`) rather than a server-side form service. Set `VITE_CONTACT_EMAIL` to your official business inbox before deployment. Add it under **Vercel → Project → Settings → Environment Variables**, then redeploy.

For a production form that submits directly without opening an email application, connect a service such as Formspree, Resend (with a serverless function), or your own API endpoint.

## Deploy to GitHub and Vercel
1. Create a new empty GitHub repository, for example `karibu-ai-technologies`.
2. In this project directory, run:
   ```bash
   git init
   git add .
   git commit -m "Initial KARIBU AI Technologies website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/karibu-ai-technologies.git
   git push -u origin main
   ```
3. In Vercel, choose **Add New → Project**, import the GitHub repository and deploy.
4. Vercel detects Vite automatically. Build command: `npm run build`; output directory: `dist`.
5. Add your real contact email as `VITE_CONTACT_EMAIL` in Vercel environment variables and redeploy.

## Before public launch
- Confirm the official company email, phone number and registered address.
- Add verified social media links and legal/privacy pages if needed.
- Replace any placeholder contact details with approved company information.
- Confirm brand name, domain and trademark availability.
