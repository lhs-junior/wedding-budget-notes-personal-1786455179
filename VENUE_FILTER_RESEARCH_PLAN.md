# Venue Filter Research and Improvement Plan

## What people actually use to narrow halls
Platform comparison and tour records repeatedly use: minimum guarantee, venue/time availability, subway access, hall interval, free parking time, aisle/stage, meal, and hall type. A tour record with a 200-person ceiling also combines location, bright hall, aisle, buffet/food, price, hall fee, interval, and parking. Sources: iWedding terminology guide; WeddingBook/iWedding comparative review; 200-person venue-tour record.

## Design correction
Existing filters begin with visual tags, not the couple's exclusion order. Replace the flat list with three groups:
1. **Can we invite everyone comfortably?** Guarantee ceiling, subway access, parking capacity/free time, ceremony interval, exclusive hall.
2. **Will the ceremony feel right?** Bright/dark, chapel/garden, verified aisle length.
3. **Can we sign safely?** Budget, verified conditional price.

## Data rule
An attribute gets a filter only when a deterministic existing field supports it. Its button shows coverage count. Missing data never passes a filter. `Food` remains an evidence-ranked priority and the strict `food` filter remains secondary.

## First implementation filters
- Guarantee ≤250
- Station access data available
- Parking 500+ (existing)
- Free parking ≥2 hours
- Exclusive venue/hall
- 90-minute+ interval (existing)
- Aisle ≥20m
- Verified conditional quote
