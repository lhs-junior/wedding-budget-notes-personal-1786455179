# 11-Tab Decision System Specification

## Release gate
A release is rejected unless every tab has: (1) one decision it finishes, (2) a visible next action, (3) persistent user state where a choice is made, (4) a link or handoff to the next relevant decision, and (5) a live-screen evidence capture.

## Global state
- `weddingTourShortlist`: venue tour candidates
- `weddingDecisionState`: contract choices, budget assumptions, family decisions, and task completion
- Every user-set state must be reversible from its originating tab.

## Acceptance matrix

| # | Tab | Decision finished | Required interaction | Persistent state | Handoff / live acceptance |
|---|---|---|---|---|---|
| 1 | Wedding hall | tour 2–5 candidates | hard filter, save, compare | shortlist | opens hall detail / compare table visible |
| 2 | SDM | planner route and quote requests | select companion/no-companion, add quote checklist | `sdmRoute`, `sdmTasks` | contract questions and total-cost ledger link |
| 3 | Vendors | essential / optional / defer | three-state classification per category | `vendorPlan` | selected essentials enter cost ledger |
| 4 | Total cost | budget ceiling and uncertainty | committed / estimate / no-quote ledger fields | `budgetLedger` | opens source contract category |
| 5 | Day/time | negotiation request to make | choose flexible dates/time trade-off | `timingPlan` | generates copyable quote request and hall link |
| 6 | Family | family agreement items | owner + agreed/defer status | `familyAgreement` | incomplete decisions appear in timeline |
| 7 | Home | funds now versus later | fund/defer selection and cap | `homePlan` | budget ledger reflects consumption category |
| 8 | Timeline | next three actions | complete and reorder/defer tasks | `timelineTasks` | source-tab links for each task |
| 9 | Check | readiness for tour/contract/day | complete grouped checklist | `checkTasks` | progress count and source-tab links |
| 10 | Picks | which trade-off route to explore | price / visual / food route selection | `pickRoute` | opens filtered hall decision workspace |
| 11 | Quote check | safe to negotiate/sign or not | input quote, flag unknowns | `quoteCases` | creates cost ledger review item and questions |

## Information constraints
- Never synthesize prices, discounts, parking, or contract conditions.
- Display source strength at a decision point: verified, single source, or unknown.
- A price cannot become “discounted” without a direct source and date.

## UI constraints
- Each tab uses its own operational structure, not a repeated card grid.
- Explanations sit next to the relevant state label.
- Long reference data is secondary to the action surface and remains accessible without deletion.

## Verification protocol
1. Fresh local load with empty state.
2. Exercise each tab’s primary action and confirm localStorage state.
3. Reload and confirm state restoration.
4. Verify every handoff link opens the expected tab or detail.
5. Push, wait for Pages, repeat 1–4 live.
6. Capture one focused screenshot per tab plus one cross-tab state proof.
