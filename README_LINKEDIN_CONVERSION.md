# LinkedIn Insight Tag & Conversion Tracking Setup

This document outlines how LinkedIn conversion tracking has been implemented for the InsightPulseAI website.

## Implementation Steps

1. **LinkedIn Insight Tag Installation**
   - The LinkedIn Insight Tag has been added to the website in `/index.html`
   - Partner ID: `5575322` (placeholder - replace with your actual LinkedIn partner ID)

2. **UTM Parameter Tracking**
   - Added UTM parameter tracking via `/src/utils/utmTracker.ts`
   - Captures all UTM parameters from incoming traffic
   - Associates conversions with their originating campaigns
   - Implemented on all key site entry points

3. **Conversion Pages Creation**
   - **Signup Success Page**
     - Created a new page at `/signup-success` route
     - Located at `/src/pages/SignupSuccess.tsx`
     - Added to the router in `App.tsx`
     - Modified the signup form to redirect here on submission

   - **Quote Request Success Page**
     - Created a new page at `/quote-success` route
     - Located at `/src/pages/QuoteSuccess.tsx`
     - Added to the router in `App.tsx`
     - Created a dedicated Quote Request form that redirects here
     
   - **Diagnostic Completion Page**
     - Created a new page at `/diagnostic-success` route
     - Located at `/src/pages/DiagnosticSuccess.tsx`
     - Added email capture form for results delivery
     - Tracks diagnostic tool completion as a conversion
     
   - **Strategy Call Booking Success Page**
     - Created a new page at `/appointment-success` route
     - Located at `/src/pages/AppointmentSuccess.tsx`
     - Added to the router in `App.tsx`
     - Added "Book a Strategy Call" CTA to homepage and contact page

4. **Conversion Triggering**
   - All thank you/success pages automatically trigger LinkedIn conversion tracking
   - Conversion events are fired when users reach any success page
   - Added "Get a Quote" buttons in the navigation and pricing page
   - Added diagnostic tool completion tracking

## LinkedIn Campaign Manager Configuration

To complete the setup, configure the following in LinkedIn Campaign Manager:

1. Go to Campaign Manager > Account Assets > Conversions
2. Click "Create conversion"
3. Select "URL" as the conversion method
4. Set the following details for Signup:
   - Name: "Signup Thank You Page"
   - Conversion URL: `https://insightpulseai.com/signup-success`
   - Attribution model: Post-click and post-view (recommended)
   - Attribution window: 30 days post-click, 7 days post-view (default)

5. Create a conversion for Quote Requests:
   - Name: "Quote Request"
   - Conversion URL: `https://insightpulseai.com/quote-success`
   - Attribution model: Post-click and post-view (recommended)
   - Attribution window: 30 days post-click, 7 days post-view (default)
   - Link this conversion to your business development goals in campaign settings

6. Create a conversion for Diagnostic Tool completions:
   - Name: "Diagnostic Tool Completion"
   - Conversion URL: `https://insightpulseai.com/diagnostic-success`
   - Attribution model: Post-click and post-view (recommended)
   - Attribution window: 30 days post-click, 7 days post-view (default)
   
7. Create a conversion for Strategy Call bookings:
   - Name: "Strategy Call Booking"
   - Conversion URL: `https://insightpulseai.com/appointment-success`
   - Attribution model: Post-click and post-view (recommended)
   - Attribution window: 30 days post-click, 7 days post-view (default)
   - Link this conversion to your business development goals in campaign settings

## Verifying Conversion Tracking

To verify the conversion tracking is working:

1. Use LinkedIn Campaign Manager's tag helper tool
2. Complete the signup process and reach the thank you page
3. Similarly, test the quote request form submission
4. Check the "Conversions" section in LinkedIn Campaign Manager to ensure events are being recorded
5. Allow 24-48 hours for data to appear in reports

## Troubleshooting

If conversions aren't being tracked:

1. Verify the Insight Tag is properly installed using LinkedIn's Tag Helper
2. Ensure the conversion URL exactly matches your website URL
3. Check browser console for any JavaScript errors
4. Confirm that the conversion tracking code is executing on the thank you pages

## Next Steps

1. Consider implementing additional conversion points (e.g., contact form submissions)
2. Set up event-specific conversions for more granular tracking
3. Configure LinkedIn Matched Audiences for retargeting