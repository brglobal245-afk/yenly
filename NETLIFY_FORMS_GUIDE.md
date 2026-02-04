# Netlify Forms - Where to See Contact Form Submissions

## After Deploying to Netlify

Once your website is deployed to Netlify, all contact form submissions will be stored in your **Netlify Dashboard**.

### How to Access Form Submissions:

1. **Log in to Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Sign in with your account

2. **Navigate to Your Site**
   - Click on your site name from the dashboard

3. **View Form Submissions**
   - In the left sidebar, click on **"Forms"**
   - You'll see all submissions from the contact form
   - Each submission will show:
     - Name
     - Email
     - Message
     - Timestamp

4. **Export Submissions** (Optional)
   - You can export submissions as CSV
   - Click the "Export" button in the Forms section

### Set Up Email Notifications (Recommended)

To receive email notifications when someone submits the form:

1. Go to **Site settings** → **Forms**
2. Find your form (named "contact")
3. Click **"Form notifications"**
4. Add your email address (official@yenly.in)
5. Save settings

Now you'll receive an email every time someone submits the contact form!

### Important Notes:

- **Local Testing**: The form won't work on localhost (localhost:3000). It only works after deploying to Netlify.
- **Form Name**: The form is named "contact" (defined in the HTML)
- **Spam Protection**: Netlify automatically filters spam using the honeypot field

### Testing the Form:

After deployment, test the form by:
1. Going to your live Netlify site
2. Filling out the contact form
3. Submitting it
4. Checking your Netlify dashboard for the submission

