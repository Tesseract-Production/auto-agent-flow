# Production Deployment Checklist

## ✅ Pre-deployment Setup

### Environment Variables (Required)

- [ ] Set up Sentry account and get DSN
- [ ] Configure Vercel project and get tokens
- [ ] Ensure all `.env.example` variables are set in Vercel

### Services to Configure

1. **Sentry** (Error Tracking)

   - Create project at https://sentry.io
   - Copy DSN to environment variables
   - Set up alerts and integrations

2. **Vercel** (Hosting)

   - Import project from GitHub
   - Configure environment variables
   - Set up custom domain

3. **Supabase** (Already configured)
   - Verify production URL and keys
   - Set up Row Level Security policies
   - Configure backup strategy

### Optional Services

- **PostHog** - Product analytics
- **LaunchDarkly** - Feature flags
- **Cloudflare** - CDN and DDoS protection

## 🔒 Security Checklist

- [x] Security headers configured in `next.config.ts`
- [x] Rate limiting middleware implemented
- [x] CSP headers configured
- [x] HTTPS enforced (automatic on Vercel)
- [ ] Review and update API keys
- [ ] Enable Vercel DDoS protection
- [ ] Set up monitoring alerts

## 🚀 Performance Checklist

- [x] Lighthouse CI configured (target: 90+ scores)
- [x] Image optimization enabled
- [x] Sentry performance monitoring
- [x] Vercel Analytics integrated
- [ ] Review bundle size
- [ ] Test Core Web Vitals

## 📊 Monitoring Setup

- [x] Sentry error tracking
- [x] Vercel Analytics
- [x] Vercel Speed Insights
- [ ] Set up uptime monitoring
- [ ] Configure alert thresholds

## 🔄 CI/CD Pipeline

- [x] GitHub Actions workflow configured
- [x] Automated testing on PR
- [x] Security scanning enabled
- [x] Preview deployments for PRs
- [ ] Add E2E tests
- [ ] Configure branch protection rules

## 📝 Final Steps

1. **Test Production Build Locally**

   ```bash
   npm run build
   npm run start
   ```

2. **Run Security Audit**

   ```bash
   npm audit
   ```

3. **Check TypeScript**

   ```bash
   npm run typecheck
   ```

4. **Format Code**

   ```bash
   npm run format
   ```

5. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

## 🎯 Post-Launch

- [ ] Monitor error rates in Sentry
- [ ] Check Core Web Vitals in Vercel
- [ ] Review analytics data
- [ ] Set up weekly performance reviews
- [ ] Plan for scaling strategy

## 📞 Support Contacts

- **Vercel Support**: enterprise@vercel.com
- **Sentry Support**: support@sentry.io
- **Urgent Issues**: Create incident in GitHub Issues

## 🔍 Monitoring URLs

- Sentry Dashboard: https://sentry.io/organizations/[your-org]/
- Vercel Dashboard: https://vercel.com/[your-team]/[your-project]
- Analytics: Built into Vercel dashboard

Remember: Always test in staging before production deployment!
