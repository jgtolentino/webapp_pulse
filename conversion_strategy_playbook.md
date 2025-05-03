# InsightPulseAI Conversion Strategy Playbook

## Overview

This playbook outlines the conversion strategy for InsightPulseAI's digital marketing efforts, focusing on LinkedIn campaigns. The strategy incorporates five key conversion goals, each with specific tracking mechanisms and attribution models.

## Conversion Goals & Tracking

| Conversion Goal | URL | LinkedIn Name | Attribution Target | Priority |
|-----------------|-----|---------------|-------------------|----------|
| **Signup Completion** | `/signup-success` | `Signup Thank You Page` | Lead acquisition | Medium |
| **Quote Request** | `/quote-success` | `Quote Request` | Business Development | High |
| **Diagnostic Completion** | `/diagnostic-success` | `Diagnostic Tool Completion` | AI Readiness Qualification | Medium |
| **Strategy Call Booking** | `/appointment-success` | `Strategy Call Booking` | High-Intent BD Engagement | High |
| **Email Capture/Download** | Via `/diagnostic-success` | (part of diagnostic logic) | CRM Growth / Retargeting | Medium |

## Call-to-Action Placement

The website features strategic placement of conversion CTAs:

- **Main Navigation**: "Get a Quote" button in primary position
- **Hero Section**: "Take the Free Diagnostic" and "Book a Strategy Call" buttons
- **Bottom CTA**: "Start Free Diagnostic" and "Book a Strategy Call" buttons
- **Pricing Page**: "Get a Custom Quote" button and pricing tier CTAs
- **Contact Page**: Prominent "Book a Strategy Call" CTA with supportive text

## UTM Parameter Strategy

All traffic sources should use consistent UTM parameters:

```
?utm_source=linkedin
&utm_medium=paid
&utm_campaign=campaign_name
&utm_content=ad_variation
```

The website automatically captures these parameters and associates them with conversion events, enabling precise attribution in LinkedIn Campaign Manager.

## Campaign Structure Recommendations

### 1. Awareness Campaigns
- **Objective**: Brand awareness
- **Target**: Broad industry audiences
- **Ad Format**: Single image, carousel
- **CTA**: "Learn More"
- **Landing Page**: Homepage

### 2. Consideration Campaigns
- **Objective**: Website visits
- **Target**: Interest-based audiences
- **Ad Format**: Video, carousel
- **CTA**: "Take Free Diagnostic"
- **Landing Page**: `/diagnostic`

### 3. Conversion Campaigns
- **Objective**: Lead generation
- **Target**: Warm audiences, lookalikes
- **Ad Format**: Single image, carousel
- **CTA**: "Book Strategy Call", "Get Quote"
- **Landing Page**: `/appointment` or `/quote-request`

### 4. Retargeting Campaigns
- **Objective**: Conversions
- **Target**: Website visitors, partial form completions
- **Ad Format**: Single image
- **CTA**: Match the user's previous engagement
- **Landing Page**: Specific to previous engagement

## LinkedIn Campaign Manager Setup

1. **Create Conversions**:
   - Navigate to Account Assets > Conversions
   - Create each conversion with the URLs listed above
   - Set attribution to post-click and post-view
   - Use 30-day click, 7-day view attribution windows

2. **Campaign Setup**:
   - When creating campaigns, select the relevant conversion goal
   - Ensure "Enable Audience Expansion" is toggled according to campaign goal
   - Set bid strategy to "maximize conversions" for conversion campaigns

3. **Audience Segmentation**:
   - Create segmented audiences based on website visitor engagement
   - Build custom audiences for different conversion funnels
   - Develop lookalike audiences from high-value converters

## Testing Strategy

Implement A/B testing across campaigns to optimize:

1. **Ad Creative**: Test different visuals, headlines, and copy
2. **CTA Variations**: Test different call-to-action phrases
3. **Landing Page Variants**: Test different landing page layouts
4. **Audience Segments**: Test different targeting parameters

Run tests for at least 2 weeks before making decisions, ensuring statistical significance.

## Optimization Guidelines

- **Budget Allocation**: Shift budget toward best-performing campaigns weekly
- **Audience Refinement**: Analyze audience insights every 2 weeks
- **Creative Refresh**: Update ad creative monthly to prevent fatigue
- **Bid Adjustments**: Review and adjust bids weekly based on performance
- **Device Performance**: Optimize delivery by device type monthly

## Reporting Framework

Create a standardized reporting template that tracks:

1. **Campaign Performance**: Impressions, clicks, CTR, CPC
2. **Conversion Metrics**: Conversion rate, cost per conversion, total conversions
3. **Funnel Analysis**: Progression from awareness to conversion
4. **UTM Attribution**: Conversion attribution by campaign
5. **ROI Calculation**: Business impact of conversions (requires integration with CRM)

## Next Steps for Implementation

1. Finalize LinkedIn Insight Tag installation and testing
2. Complete conversion tracking setup in LinkedIn Campaign Manager
3. Create campaign structure and initial audience segments
4. Develop creative assets aligned with campaign objectives
5. Launch initial campaigns and establish baseline performance
6. Implement weekly review and optimization cadence

---

*This playbook is a living document. Update it regularly based on campaign learnings and performance insights.*

🔍 **Created for**: InsightPulseAI Marketing Team  
📅 **Last Updated**: May 2025