# Recommendation Priority Evidence Audit

## Problem
The original food/value/visual priority treated any non-empty tag as equally strong evidence. This made a menu nickname, a third-party ranking, and an explicit media selection all look like “recommended.” It also used verified conditional-price existence as a value signal without showing whether the candidate's total was actually competitive.

## Evidence hierarchy

### Food
- **A**: named external selection, e.g. GQ selection
- **B**: named external rank, e.g. Direct Wedding ranking
- **C**: repeated community nickname or one menu-specific claim
- **None**: no food-reputation evidence

### Value
- **A**: direct, dated conditional quote and 200-person conditional total inside the stated budget
- **B**: direct, dated conditional quote but total above budget
- **None**: unverified price or no conditional quote

### Visual impact
- **A**: two or more concrete physical signals in collected detail, such as high ceiling, long aisle, natural light, chandelier, rooftop/terrace, garden, or large window
- **B**: one concrete physical signal
- **C**: mood tag only
- **None**: no collected visual evidence

## Product change
- The three controls remain ranking priorities, not result-count filters.
- The selected priority adds an explicit evidence reason to every candidate row, including “evidence not collected.”
- Candidate order is evidence tier first and 200-person total second.
- A candidate is never called food-famous, value-for-money, or visually strong based only on an empty/generic tag.
