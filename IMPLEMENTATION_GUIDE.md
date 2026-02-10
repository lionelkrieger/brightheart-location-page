# Bright Heart Location Page Template - Implementation Guide

## Overview

This is a mockup/wireframe for location-specific landing pages designed to help Bright Heart Education compete for local SEO keywords like "ADHD tutors in London" and "SEND tutors in Surrey".

## Design Philosophy

**Warm Modernism with Educational Trust Signals**

The design uses:
- **Vibrant magenta pink (#FF0066)** - Bright Heart's signature color representing care and heart
- **Soft blush backgrounds (#FFF5F8)** - Warmth and approachability
- **Diagonal flow architecture** - Creates visual momentum and breaks typical grid monotony
- **Outfit font** for headings - Geometric, friendly, modern
- **Inter font** for body text - Highly readable, professional

## Key Features

### 1. SEO-Optimized Structure

The page includes all essential elements for local SEO:

- **H1 tag**: "ADHD & SEN Tutors in {Location}"
- **Location-specific content** throughout
- **Service area details** with postcodes and boroughs
- **Local testimonials** with area attribution
- **Schema markup ready** (see implementation section below)
- **Mobile-responsive** design
- **Fast loading** with optimized images

### 2. Trust Signals

Prominently displayed throughout:
- Award badges (UK's Tuition Business of the Year)
- Star ratings (4.9/5 from 277 reviews)
- QTS qualification badges
- Statistics (200+ families, etc.)
- Real testimonials with locations

### 3. Clear Conversion Path

Multiple CTAs strategically placed:
- Header: "Get Started" button
- Hero: "Book a Consultation" + "Call" buttons
- Sticky header for easy access
- Dedicated CTA section before footer
- Phone number prominently displayed

### 4. Comprehensive Information

Sections included:
- Hero with location-specific messaging
- Stats/trust indicators
- Services offered (ADHD, Autism, Dyslexia, etc.)
- Why choose Bright Heart
- Service areas with postcodes
- Testimonials from local families
- Strong CTA section
- Footer with contact info

## How to Adapt for Different Locations

### Template Variables

In `client/src/pages/Home.tsx`, update the `location` object:

```typescript
const location = {
  city: "London",              // Change to: "Surrey", "Manchester", etc.
  region: "Greater London",    // Change to: "South East", "North West", etc.
  areas: [                     // Update with local areas
    "Central London",
    "North London",
    "South London",
    "East London",
    "West London"
  ],
  postcodes: [                 // Update with local postcodes
    "SW", "SE", "N", "E", "W", "NW", "WC"
  ],
};
```

### Content Customization

For each location, customize:

1. **Hero section**:
   - Update H1: "ADHD & SEN Tutors in {City}"
   - Update description to mention location 2-3 times naturally
   - Consider location-specific hero image

2. **Stats section**:
   - Update "Families Supported" if you have location-specific data
   - Keep awards and ratings consistent

3. **Services section**:
   - Keep services consistent
   - Update heading: "SEN Tutoring Services in {City}"
   - Mention local areas in description

4. **Service areas section**:
   - Update areas list with local boroughs/neighborhoods
   - Update postcodes list
   - Consider adding a real map embed (Google Maps)

5. **Testimonials**:
   - Use testimonials from families in that specific location
   - Update author attribution with local area names

6. **Footer**:
   - Update location mention

### SEO Metadata (Add to each page)

Create unique metadata for each location page:

```html
<title>ADHD Tutors in {City} | SEN Tutoring {Region} | Bright Heart</title>
<meta name="description" content="Expert ADHD tutors in {City}. Award-winning SEN tutoring with qualified teachers. Home visits & online. Serving {areas}. Call 0208 064 3800.">
<meta name="keywords" content="ADHD tutors {city}, SEN tutors {city}, SEND tutoring {city}, autism tutors {city}, dyslexia help {city}">
```

### Schema Markup (LocalBusiness)

Add this JSON-LD schema to each location page:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Bright Heart Education - {City}",
  "description": "Award-winning SEN tutoring in {City}",
  "url": "https://www.brightheart.co.uk/locations/{city-slug}",
  "telephone": "+442080643800",
  "email": "hello@brightheart.co.uk",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "{City}",
    "addressRegion": "{Region}",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "{latitude}",
    "longitude": "{longitude}"
  },
  "areaServed": {
    "@type": "City",
    "name": "{City}"
  },
  "priceRange": "££",
  "image": "https://www.brightheart.co.uk/images/logo.png",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "277"
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "sameAs": [
    "https://www.facebook.com/BrightHeartEducation/",
    "https://twitter.com/BrightHeartEdu",
    "https://www.linkedin.com/company/bright-heart-education"
  ]
}
```

## URL Structure Recommendation

Create a hierarchical structure:

```
brightheart.co.uk/
├── send-tutors-london/
├── adhd-tutors-london/
├── send-tutors-surrey/
├── adhd-tutors-surrey/
├── send-tutors-manchester/
└── adhd-tutors-manchester/
```

Or by service type:

```
brightheart.co.uk/
├── locations/
│   ├── london/
│   ├── surrey/
│   └── manchester/
└── services/
    ├── adhd-tutoring/
    │   ├── london/
    │   └── surrey/
    └── autism-support/
        ├── london/
        └── surrey/
```

## Content Guidelines

### Avoid Duplicate Content

Each location page MUST have unique content:

1. **Location-specific statistics**: "Supporting 50+ families in Surrey" vs "Supporting 80+ families in London"
2. **Local partnerships**: Mention local schools, councils, or organizations
3. **Local context**: "Surrey's growing demand for SEN support..." vs "London's diverse educational landscape..."
4. **Unique testimonials**: Use different reviews for each location
5. **Local tutor profiles**: If possible, feature tutors available in that specific area

### Keyword Integration

Target keywords to include naturally:

Primary:
- "ADHD tutors in {city}"
- "SEN tutors {city}"
- "SEND tutoring {city}"

Secondary:
- "Autism tutors {city}"
- "Dyslexia help {city}"
- "Special needs tutoring {city}"
- "{city} SEN support"

Long-tail:
- "ADHD tutors near me {city}"
- "Best SEN tutors {city}"
- "Home tutoring for ADHD {city}"

### Content Depth

Aim for 800-1200 words per page with:
- 300-500 words of unique, location-specific content
- Service descriptions (can be similar across pages)
- Trust signals and credentials
- Testimonials
- FAQ section (optional but recommended)

## Technical Implementation

### Image Optimization

All images are already optimized and served via CDN. For production:

1. Use WebP format for modern browsers
2. Implement lazy loading for below-fold images
3. Add proper alt text with location keywords
4. Use responsive images with srcset

### Performance

The template is built with performance in mind:
- Minimal dependencies
- CSS-in-JS avoided
- Tailwind CSS for small bundle size
- Optimized fonts from Google Fonts
- No heavy JavaScript frameworks

### Mobile Optimization

The design is fully responsive:
- Mobile-first approach
- Touch-friendly buttons (min 44px)
- Readable font sizes on mobile
- Optimized images for mobile bandwidth
- Sticky header for easy navigation

## Google Maps Integration (Optional Enhancement)

Consider adding an embedded Google Map showing:
- Service area coverage
- Tutor locations (if appropriate)
- Office location (if applicable)

Example embed code:
```html
<iframe 
  src="https://www.google.com/maps/embed?pb=..."
  width="600" 
  height="450" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy">
</iframe>
```

## Conversion Optimization

### A/B Testing Recommendations

Test variations of:
1. CTA button text ("Get Started" vs "Book Free Consultation")
2. Hero image (tutor with student vs awards/credentials)
3. Testimonial placement (above vs below services)
4. Phone number prominence (header vs hero)

### Analytics Tracking

Implement tracking for:
- Button clicks (all CTAs)
- Phone number clicks
- Scroll depth
- Time on page
- Form submissions (if added)

## Next Steps for Production

1. **Create pages for priority locations**:
   - London (highest volume)
   - Surrey
   - Manchester
   - Birmingham
   - Other major cities

2. **Implement proper routing**:
   - Set up React Router or Next.js routing
   - Create dynamic routes for scalability

3. **Add Schema markup**:
   - LocalBusiness schema
   - BreadcrumbList schema
   - Review schema

4. **Set up Google Business Profile**:
   - Create/claim listings for each location
   - Link to corresponding location pages

5. **Build local citations**:
   - List on UK education directories
   - Local business directories
   - Educational resource sites

6. **Content strategy**:
   - Create unique content for each location
   - Add local blog posts
   - Feature local success stories

7. **Link building**:
   - Partner with local schools
   - Get listed on council websites
   - Educational charity partnerships

## Maintenance

Regular updates needed:
- Update testimonials quarterly
- Refresh statistics annually
- Update awards as received
- Keep service areas current
- Monitor and respond to reviews

## Questions or Issues?

This is a mockup/wireframe template. For production implementation:
- Consult with your development team
- Test across all major browsers
- Validate HTML and accessibility
- Run Lighthouse audits
- Test on real devices

## Design Credits

Design approach: Warm Modernism with Educational Trust Signals
- Diagonal flow architecture for visual momentum
- Bright Heart brand colors (#FF0066 primary)
- Outfit + Inter typography system
- Trust-focused layout with prominent credentials
