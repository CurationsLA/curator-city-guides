# Rainy Day Guide for Los Angeles

This folder contains the comprehensive Rainy Day Guide for Los Angeles, specifically designed to help visitors and locals enjoy the city during wet weather, with a focus on the rainy week of November 18-23, 2025.

## Purpose

Unlike our Holiday Guides, this Rainy Day Guide is a specialized resource focused entirely on indoor activities, covered venues, and rain-friendly experiences across Los Angeles neighborhoods. It provides practical recommendations for coffee shops, cafes, restaurants, museums, entertainment venues, and special events that are perfect for rainy days.

## Folder Structure

### Files in this folder:

- **`readme.md`** - This file; explains the structure and purpose of the Rainy Day Guide
- **`the-guide`** - The main rainy day guide content with neighborhood-based recommendations for cafes, coffee shops, and restaurants, plus auto-generated events for the target week
- **`enhanced-guide`** - Extended version with structured data (JSON-LD), interactive map code, weather alert integration, and additional venue details
- **`fetch-events`** - Original reference/placeholder for event fetching concepts

### Scripts and Automation

- **`/scripts/fetch-events.js`** - Node.js script that fetches events and weather alerts, then updates `the-guide` with current information
- **`.github/workflows/curations-events-updater.yml`** - GitHub Actions workflow that runs daily to automatically update the guide with fresh events and weather data

## Guide Features

### Neighborhood Coverage

The guide breaks down recommendations by neighborhood to help visitors cluster activities and minimize travel in rainy conditions:

- Downtown LA (DTLA)
- Hollywood
- Koreatown
- Westwood
- West Hollywood
- Miracle Mile / Mid-Wilshire
- Pasadena
- Eagle Rock

### Categories Covered

1. **Coffee Shops & Cafes** - Spots with excellent indoor seating, warm drinks, and cozy atmospheres
2. **Restaurants** - Places with covered seating, hearty comfort food, and rain-friendly access
3. **Museums** - World-class indoor cultural experiences from The Broad to the Getty Center
4. **Entertainment** - Theaters, concert venues, and cinemas perfect for rainy evenings
5. **Activities** - Escape rooms, arcades, board game cafes, and indoor climbing
6. **Events** - Specific happenings during the target week (Nov 18-23, 2025)

### Technical Features

The enhanced-guide includes:

- **JSON-LD structured data** for search engine optimization and rich snippets
- **Weather alert integration** using OpenWeatherMap API
- **Interactive map** with "Hot Soup Index" by neighborhood (requires Mapbox token)
- **Event schema markup** for calendar integration

## Automation Workflow

The guide is designed to stay current through automation:

1. **Daily Updates**: GitHub Actions workflow runs daily at 09:00 UTC
2. **Event Fetching**: Script pulls indoor events from configured APIs
3. **Weather Alerts**: Fetches active weather alerts for Los Angeles
4. **Auto-PR**: Creates pull requests with updated content for review
5. **Manual Approval**: Team reviews and merges updates

### Required Secrets

For full automation, configure these GitHub repository secrets:

- `OPENWEATHER_API_KEY` - For weather alerts
- `EVENTS_API_KEY` - Optional, for event provider integration
- `MAPBOX_ACCESS_TOKEN` - For interactive map tiles

## Content Guidelines

When updating the Rainy Day Guide:

1. **Focus on Indoor Options** - Prioritize fully covered or indoor venues
2. **Practical Details** - Include parking info, covered access, indoor seating capacity
3. **Neighborhood Clustering** - Help visitors minimize driving in rain
4. **Verify Hours** - Weather can affect venue hours; always double-check
5. **Family-Friendly Flags** - Note which venues work well for families vs. adults-only

## Events for Nov 18-23, 2025

The guide currently features these curated events:

- **Nov 18**: Amadeus Screening + Masquerade (Vidiots, Eagle Rock), Little Simz (Hollywood Palladium)
- **Nov 19**: Suffs Broadway Musical (Hollywood Pantages), Patrick Martinez Talk (Hammer Museum), Sigur Rós (Orpheum Theatre)
- **Nov 19**: Chamber Music at The Huntington (Pasadena)
- **Nov 21-30**: L.A. Auto Show (LA Convention Center)
- **Nov 21**: Sabrina Carpenter (Crypto.com Arena)

Plus many more concerts and performances at The Wiltern, Orpheum, and other venues.

## Contributing

To enhance the Rainy Day Guide:

1. Create a branch from the main repository
2. Edit `the-guide` or `enhanced-guide` as needed
3. Test the fetch-events.js script locally if adding new events
4. Submit a pull request with clear description of changes
5. Tag relevant reviewers for approval

## Future Enhancements

Planned improvements:

- [ ] Real-time weather API integration
- [ ] User-submitted rain photos gallery
- [ ] SMS alert system for sudden weather changes
- [ ] Accessibility and stroller-friendly filters
- [ ] Indoor parking heatmap
- [ ] Partnership with rideshare services

---

**Last Updated**: November 18, 2025

**Maintained by**: CurationsLA Team 
