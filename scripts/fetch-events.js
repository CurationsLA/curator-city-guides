#!/usr/bin/env node
/**
 * scripts/fetch-events.js
 *
 * Scaffold utility to:
 * - Fetch events for a target window (this week) from an EVENTS API (optional)
 * - Fetch weather alerts from OpenWeatherMap (optional)
 * - Merge fetched data into the rainy-day/the-guide content and write it to file
 *
 * Usage: node scripts/fetch-events.js
 *
 * Environment:
 * - OPENWEATHER_API_KEY (optional) — used to fetch alerts
 * - EVENTS_API_KEY (optional) — if you have an events provider (Ticketmaster, Eventbrite, custom)
 *
 * NOTE: This script is a scaffold. Replace the event-fetch block with a provider-specific API integration.
 */

const fs = require('fs');
const path = require('path');

const OUT_FILE = path.join(__dirname, '..', 'rainy-day', 'the-guide');

const LA_COORDS = { lat: 34.0522, lon: -118.2437 };

function isoLocal(date) {
  // Returns ISO string in local LA offset (-08:00 at this time in Nov 2025)
  return date.toISOString();
}

async function fetchWeatherAlerts(apiKey) {
  if (!apiKey) return null;
  try {
    // Note: Using native fetch which is available in Node 18+
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${LA_COORDS.lat}&lon=${LA_COORDS.lon}&exclude=current,minutely,hourly,daily&appid=${apiKey}`;
    const res = await fetch(url);
    if (!res.ok) {
      console.warn('OpenWeather fetch failed', res.status);
      return null;
    }
    const data = await res.json();
    return data.alerts || null;
  } catch (err) {
    console.warn('Error fetching weather alerts', err);
    return null;
  }
}

async function fetchEventsFromProvider(apiKey) {
  // This is a placeholder function.
  // Replace this with Ticketmaster, Eventbrite, or another provider call as needed.
  // Return should be an array of event objects with: name, startDateISO, time, venue, neighborhood, description, ticketUrl, familyFriendly
  if (!apiKey) {
    // Return seeded events as fallback (the ones included in the PR)
    return [
      {
        name: 'Suffs',
        startDateISO: '2025-11-19T19:30:00-08:00',
        venue: 'Hollywood Pantages Theatre',
        neighborhood: 'Hollywood',
        description: 'A new Broadway musical about the U.S. women\'s suffrage movement - theatrical, stirring, and well-reviewed.',
        ticketUrl: 'https://www.broadwayinhollywood.com/shows/detail/suffs',
        familyFriendly: true
      },
      {
        name: 'Patrick Martinez — Made in LA talk',
        startDateISO: '2025-11-19T12:30:00-08:00',
        venue: 'Hammer Museum',
        neighborhood: 'Westwood',
        description: 'Artist talk and walkthrough; great free museum programming for contemporary art fans.',
        ticketUrl: 'https://hammer.ucla.edu/programs-events',
        familyFriendly: true
      },
      {
        name: 'Amadeus Screening + Masquerade',
        startDateISO: '2025-11-18T19:30:00-08:00',
        venue: 'Vidiots',
        neighborhood: 'Eagle Rock',
        description: 'Classic film screening followed by a themed masquerade - dress up, watch, and mingle indoors.',
        ticketUrl: 'https://vidiotsfoundation.org/events',
        familyFriendly: false
      },
      {
        name: 'Chamber Works — Rothenberg Hall',
        startDateISO: '2025-11-19T19:30:00-08:00',
        venue: 'The Huntington',
        neighborhood: 'San Marino / Pasadena',
        description: 'Evening of chamber music - intimate, seated, and perfect for a rain-soaked night of concertgoing.',
        ticketUrl: 'https://www.huntington.org/events',
        familyFriendly: true
      },
      {
        name: 'L.A. Auto Show',
        startDateISO: '2025-11-21T09:00:00-08:00',
        venue: 'Los Angeles Convention Center',
        neighborhood: 'Downtown LA',
        description: 'Big indoor auto show with interactive displays and family-friendly exhibits - ideal for long rainy days.',
        ticketUrl: 'https://laautoshow.com/tickets',
        familyFriendly: true
      },
      {
        name: 'Sigur Rós',
        startDateISO: '2025-11-19T20:00:00-08:00',
        venue: 'Orpheum Theatre',
        neighborhood: 'Downtown LA',
        description: 'Icelandic post-rock legends perform in an intimate historic theater setting.',
        ticketUrl: 'https://www.orpheum-theatre.com/',
        familyFriendly: false
      },
      {
        name: 'Sabrina Carpenter',
        startDateISO: '2025-11-21T19:30:00-08:00',
        venue: 'Crypto.com Arena',
        neighborhood: 'Downtown LA',
        description: 'Pop sensation brings her energetic show to LA for a rainy night concert.',
        ticketUrl: 'https://www.cryptoarena.com/',
        familyFriendly: true
      },
      {
        name: 'Little Simz',
        startDateISO: '2025-11-18T20:00:00-08:00',
        venue: 'Hollywood Palladium',
        neighborhood: 'Hollywood',
        description: 'British rapper and singer delivers powerful performance in iconic venue.',
        ticketUrl: 'https://www.hollywoodpalladium.com/',
        familyFriendly: false
      }
    ];
  }

  // Example provider fetch pseudo-code:
  // const url = `https://api.ticketprovider.com/events?near=Los+Angeles&startDate=2025-11-18&endDate=2025-11-23&apikey=${apiKey}`;
  // const res = await fetch(url);
  // const json = await res.json();
  // return json.events.map(event => ({ ... }))
  return [];
}

function buildPageContent(baseContent, events, alerts) {
  // Inserts a simple events block into the base content and returns the combined content.
  const eventsBlock = [
    '\n\n---\n\n<!-- THIS BLOCK GENERATED: Events for Nov 18–23, 2025 -->\n\n## This Week: Nov 18–23, 2025 — Indoor Events & Picks\n\n'
  ];
  events.forEach(ev => {
    eventsBlock.push(`- **${ev.name}** — ${ev.venue}`);
    eventsBlock.push(`  - Date & time: ${ev.startDateISO}`);
    eventsBlock.push(`  - Neighborhood: ${ev.neighborhood || 'TBD'}`);
    eventsBlock.push(`  - Short description: ${ev.description || ''}`);
    eventsBlock.push(`  - Ticket link: ${ev.ticketUrl || ''}`);
    eventsBlock.push(`  - Family-friendly: ${ev.familyFriendly ? 'yes' : 'teens and older'}`);
    eventsBlock.push('\n');
  });

  if (alerts && alerts.length > 0) {
    eventsBlock.push('\n**Active weather alerts (auto-fetched):**\n\n');
    alerts.forEach((a, idx) => {
      eventsBlock.push(`- ${a.event}: ${a.description ? a.description.slice(0,250) + '...' : ''} — source: ${a.sender_name || 'weather provider'}`);
    });
    eventsBlock.push('\n');
  }

  return baseContent + eventsBlock.join('\n');
}

async function main() {
  const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
  const EVENTS_API_KEY = process.env.EVENTS_API_KEY;

  // Read existing file
  let base = '';
  try {
    base = fs.readFileSync(OUT_FILE, 'utf8');
  } catch (err) {
    console.warn('Could not read base file; creating a new one.');
    base = '# Rainy Day Guide — Los Angeles\n\n(Generated content will be added here.)\n';
  }

  console.log('Fetching events...');
  const events = await fetchEventsFromProvider(EVENTS_API_KEY);

  console.log('Fetching weather alerts...');
  const alerts = await fetchWeatherAlerts(OPENWEATHER_API_KEY);

  const newContent = buildPageContent(base, events, alerts);

  // Write updated content to file
  fs.writeFileSync(OUT_FILE, newContent, 'utf8');
  console.log(`Wrote updated content to ${OUT_FILE}`);
}

if (require.main === module) {
  main().catch(err => {
    console.error('Error running fetch-events:', err);
    process.exit(1);
  });
}
