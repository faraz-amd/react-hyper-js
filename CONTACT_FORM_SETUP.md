# Contact Form Integration Guide

This project supports **three** contact form solutions, implemented in recommended order:

## 🥇 Method 1: Netlify Forms (Primary - Active)

**Status:** ✅ Fully integrated and ready

**Setup:** Already configured! Netlify automatically detects the form.

**How it works:**

- Form submissions go to Netlify's dashboard
- You'll receive email notifications (configure in Netlify)
- Free tier: 100 submissions/month

**Access submissions:**

1. Go to your Netlify site dashboard
2. Navigate to Forms tab
3. View all submissions with spam filtering

**Configure notifications:**

- Netlify Dashboard → Forms → Form notifications
- Add email notification to receive alerts

**Cost:** Free (100 submissions/month)

---

## 🥈 Method 2: EmailJS (Fallback)

**Status:** ⏸️ Code ready, needs credentials

**Setup steps:**

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your credentials:
   - Service ID
   - Template ID
   - Public Key

**Activate:**

1. Uncomment EmailJS script in `public/index.html` (lines 52-57)
2. Replace `YOUR_PUBLIC_KEY` with your actual key
3. Uncomment EmailJS code in `src/pages/Home.js` (lines 113-122)
4. Add your Service ID, Template ID, and Public Key

**Benefits:**

- Sends emails directly from client-side
- 200 emails/month (free tier)
- Custom email templates

**Cost:** Free (200 emails/month), Paid: $7/month (500 emails)

---

## 🥉 Method 3: Formspree (Alternative)

**Status:** ⏸️ Code ready, needs endpoint

**Setup steps:**

1. Sign up at [Formspree.io](https://formspree.io/)
2. Create a new form
3. Get your form endpoint (looks like `https://formspree.io/f/xyzabc123`)

**Activate:**

1. Uncomment Formspree code in `src/pages/Home.js` (lines 124-129)
2. Replace `YOUR_FORM_ID` with your actual form ID

**Benefits:**

- Backend form processing
- Spam protection included
- Email forwarding

**Cost:** Free (50 submissions/month), Paid: $10/month (1,000 submissions)

---

## 🔄 Fallback Strategy

The code is structured to try methods in order:

1. **Netlify Forms** (Primary) → Works automatically on Netlify
2. **EmailJS** (Fallback) → Activate when needed
3. **Formspree** (Alternative) → Use if others fail

---

## 🧪 Testing

**Test Netlify Forms locally:**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Run dev server with Netlify functions
netlify dev
```

**Production testing:**

- Deploy to Netlify
- Submit a test message
- Check Netlify Dashboard → Forms

---

## 📧 Recommended Next Steps

1. **Now:** Deploy and test Netlify Forms (already working)
2. **Optional:** Set up EmailJS for additional redundancy
3. **Optional:** Set up Formspree as a third option

You only need ONE method active. Netlify Forms is sufficient for most use cases!
