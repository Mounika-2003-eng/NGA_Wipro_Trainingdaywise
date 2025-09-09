
# Event Management App (Angular)

An Angular app that lists events, formats ticket prices with a custom pipe, and highlights premium events with a custom directive.

## Features
- **EventListComponent**: Displays Name, Date, Ticket Price, Category using `*ngFor`
- **PriceFormatPipe**: Formats numbers like `500` → `₹500.00`, `1200` → `₹1,200.00`
- **HighlightDirective**: Premium events (price > ₹2000) get a light-gold background
- Simple animations (fade-in table + row hover)

## Quick Start
1. Ensure Node.js 18+ installed.
2. Install Angular CLI if needed:
   ```bash
   npm i -g @angular/cli
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run locally:
   ```bash
   npm start
   # then open http://localhost:4200
   ```

## Structure
```
src/
  app/
    app.component.*
    app.module.ts
    components/event-list/*
    directives/highlight.directive.ts
    pipes/price-format.pipe.ts
```

## Notes
- Built against Angular 16.x in `package.json` for wide compatibility.
- Submission: zip the project **without** `node_modules` (already excluded here).
