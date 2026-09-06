# Wedding Planning Decision System: Market Analysis & Product Plan

## Goal

Replace a collection of wedding-information pages with one connected decision system for a Seoul wedding of roughly 200 to 300 guests. The site must make the next decision, evidence, cost uncertainty, and owner visible at the same time.

## Market analysis

| Service pattern | Strength | Unresolved user problem |
|---|---|---|
| WeddingBook | Venue detail and expected quote are available after selecting a venue/date; it covers halls through appliances. | The user still moves from discovery to quote to planning as separate tasks. |
| iWedding | Rich venue filters, promotion visibility, and a hall quote calculator. | Filters locate venues but do not turn verified conditions, guest flow, and tour evidence into a decision record. |
| Yozm Wedding | Budget/style comparison and consultation request. | The handoff is consultation, not a durable comparison, negotiation, or execution workspace. |
| Planner marketplaces | Bundle price and partner-network convenience. | The user has to reconcile package price, required extras, and independent contracts manually. |

### Evidence

- WeddingBook markets venue selection, schedule-based quote comparison, and contract in one flow: https://event.weddingbook.com/weddingbook-ad
- iWedding presents venue search by concept, transport, food, outdoor/religious ceremony and related themes: https://www.iwedding.co.kr/brand/ihall?tab=best
- iWedding also offers a hall estimate calculator: https://www.iwedding.co.kr/calculator/hall
- A comparative user review notes a tradeoff: WeddingBook exposes concise detail such as stage, aisle, and free-parking time, while iWedding provides more detailed filters and promotion pricing: https://crystal-playgound.tistory.com/114
- Yozm Wedding positions its venue product around budget/style comparison and consultation: https://yozmwedding.co.kr/venue

## Product gap to own

**No marketplace is the couple's decision memory.**

This product will not optimize lead generation or browse depth. It will be a *decision ledger*: every recommendation must be traceable to a condition, price source, missing fact, responsible person, and next action.

## Product mechanism

1. **Hard-gate first**: remove options that violate budget, guest flow, date/time, or access constraints before preferences rank them.
2. **Evidence instead of confidence**: distinguish verified number, one-source number, and unknown number at the point a user makes a choice.
3. **Decision handoff**: a venue, package, or expense can create a tour/contract/check task rather than ending at a detail page.
4. **One wedding ledger**: confirmed commitments, estimates, and open quote requests remain separate so the total never pretends to be final.
5. **Action queue**: timeline and checklist are not documents; they are a work queue grouped by decision deadline and owner.

## Tab jobs

| Tab | Decision to finish | Unique interaction |
|---|---|---|
| Wedding hall | Which 2–3 venues get toured? | Hard-gate workspace and tour shortlist comparison |
| SDM | Do we need accompaniment and which quote is worth pursuing? | Package cost vs required-extra ledger and negotiation checklist |
| Vendors | Which extras are essential and who owns the booking? | Must/optional/defer decision queue |
| Total cost | What is committed, estimated, and unknown? | Evidence-weighted wedding ledger |
| Day/time | Which date/time changes meaningfully improve the deal? | Negotiation levers ranked by likely savings and tradeoff |
| Family | What needs agreement with each family? | Owner, decision deadline, and agreed/not-agreed register |
| Home | What gets funded before move-in? | House, furnishings, travel allocation with defer choices |
| Timeline | What must happen next? | Deadline-first action queue |
| Check | What is actually complete? | Persistent tasks that link to their source decision |
| Picks | Which route should we explore? | Affordable, visual-impact, and guest-meal routes into the decision workspace |
| Quote check | Is this quote safe to sign? | Missing-cost and negotiation-question review case file |

## Implementation sequence

1. Build a shared decision ledger and action queue in local storage.
2. Remodel money, SDM, vendor, family, home, timing, and timeline tabs around decisions rather than static cards/tables.
3. Convert checklist items to persistent tasks and connect recommendations/quotes to actions.
4. Retain all existing source data and calculations; only remove duplicate explanatory prose.
5. Run local regression, deploy, and validate each tab live.

## Non-goals

- Do not mimic an aggregator's grid, filter, or lead form.
- Do not manufacture prices, savings, deadlines, or certainty.
- Do not use generic score labels without an explanation next to the label.
