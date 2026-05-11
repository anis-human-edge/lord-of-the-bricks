# Brick 1: Robot Game Match Day Playbook (Korea Edition)
**Team:** Lord of the Bricks
**Event:** FLL Challenge Unearthed Internationals, South Korea
**Scope:** 3 robot matches, 2:30 each. Highest score counts.
**Current ceiling:** 545 points (theoretical)
**Regionals score:** 435 (80% of ceiling)
**Goal at Korea:** close the 110-point gap

---

## Strategic frame

You already win Robot Performance at UK level. The robot is championship-grade. The 8-run strategy is sound. The hardware is iterated. So what is this brick for?

**This brick is about converting capability into outcome under pressure.**

The 110-point gap between 545 (theoretical) and 435 (Regionals actual) is not a robot problem. It is a **match execution problem**. Specific failure modes:
- A run fails mid-execution and the team loses 60+ seconds deciding what to do
- A "90%" run hits its 10% on the day that matters
- Battery or temperature shifts behaviour in subtle ways
- Korean mat texture or paint differs from UK mat
- Team makes timing errors under pressure (resets too slow, panics, restarts unnecessarily)

This playbook addresses all of those.

---

## The 8-run game plan

*Placeholder section. Fill these with your actual mission-to-run mapping.*

| Run # | Missions | Attachment / Mechanism | Estimated time | Confidence | Points |
|---|---|---|---|---|---|
| Run 1 | [missions] | [mechanism] | ~[time] | 90% | [pts] |
| Run 2 | [missions] | [mechanism] | ~[time] | 100% | [pts] |
| Run 3 | [missions] | [mechanism] | ~[time] | 90% | [pts] |
| Run 4 | [missions] | [mechanism] | ~[time] | 90% | [pts] |
| Run 5 | [missions] | [mechanism] | ~[time] | 100% | [pts] |
| Run 6 | [missions] | [mechanism] | ~[time] | 100% | [pts] |
| Run 7 | [missions] | [mechanism] | ~[time] | 100% | [pts] |
| Run 8 | [missions] | [mechanism] | ~[time] | 90% | [pts] |
| | | **Total** | **~2:30** | | **545** |

### Run order strategy

**Recommended approach: high-risk first, high-confidence last.**

Reasoning:
- Batteries are freshest at the start. 90%-consistency runs benefit most from fresh motors.
- If a 90% run fails early, you have time to recover. If it fails at 2:00, you don't.
- Banking high-confidence runs (2/5/6/7) at the end locks in a floor score even if everything else has gone wrong.

**Current Q&A doc suggests:** Run 1 (angler artifacts) is risky. Confirm whether the current order front-loads or back-loads the 90% runs. If back-loaded, consider swapping.

---

## 3-match strategy

You get 3 matches. Highest score counts. The math on consistency:

- Per-run at 95% × 8 runs = 0.95^8 = **66% chance of clean 545 in a single match**
- Across 3 matches = 1 - (0.34)^3 = **~96% chance of at least one near-clean run**

This is excellent. But "near-clean" still requires hitting the runs you can hit.

### Match-by-match strategy

| Match | Approach | Risk posture | Target |
|---|---|---|---|
| Match 1 | Full strategy, no deviations. Establish baseline. Watch what fails. | Conservative on retries. If a 90% run fails, skip to next. | Floor: 435 (Regionals). Ceiling: 545. |
| Match 2 | Apply Match 1 observations. Adjust starting positions, motor angles, anything that drifted. | Standard. Retry one risky run if time allows. | Push to 480+. |
| Match 3 | Push the ceiling. If you've already banked a high score, take calculated risks. | Aggressive. Retry the missions worth most points if they fail. | 545. |

**The hidden discipline:** do not change tactics mid-match. Mid-match changes cause cascading errors. Adjust between matches only.

---

## Table-side team roles

A FLL team can have up to 2 (sometimes 4) members at the table per match. Roles are not formal in rules, but the team needs clear roles to execute under pressure.

### Recommended 4-person table team (rotate across matches)

| Role | Responsibility | Recommended | Backup |
|---|---|---|---|
| **Operator** | Drives the robot, presses start, calls "go" | [TBD] | [TBD] |
| **Resetter** | Swaps attachments, places robot in launch area, hands aligners | [TBD] | [TBD] |
| **Spotter** | Watches the robot during run, calls failures, reads the table | [TBD] | [TBD] |
| **Time/score caller** | Tracks 2:30 countdown, calls remaining time, mental-tracks points scored | [TBD] | [TBD] |

The other 5 team members support from the side of the table: cheering (positive only, no negative commentary), reading the score sheet, prepping mental encouragement.

**Rule of one voice:** during a run, only the Operator speaks to the robot/decisions. Everyone else stays silent or cheers. Cross-talk under pressure is the single biggest cause of timing errors.

### Communication protocol during the run

- **"Go"** = Operator initiates run
- **"Clear"** = Spotter confirms run completed successfully
- **"Fail"** = Spotter calls a failed mission
- **"Skip"** = Operator decides to abandon current run, move to next
- **"Retry [Run N]"** = Operator decides to repeat a specific run via the custom menu

No other words during the 2:30. Save talking for between matches.

---

## Failure decision tree

When a run fails, the Operator decides in under 3 seconds. Use this tree:

```
RUN FAILED
│
├── Failed at launch (robot didn't leave home area cleanly)
│   ├── Time remaining > 1:00 → RETRY (cost ~10 sec)
│   └── Time remaining < 1:00 → SKIP, move to next run
│
├── Failed mid-run (mission missed but robot continued)
│   ├── Run worth > 60 points
│   │   ├── Time remaining > 45 sec → RETRY
│   │   └── Time remaining < 45 sec → SKIP
│   └── Run worth < 60 points → SKIP (move to next, don't waste time)
│
├── Failed late-run (last mission missed but earlier missions scored)
│   └── Always SKIP. Don't redo. The earlier missions banked.
│
└── Robot stuck or off-table
    ├── Touch penalty acceptable → retrieve, place in home, RETRY current run
    └── Time remaining < 30 sec → take retrieve penalty, attempt safest remaining run
```

**The cardinal rule:** when in doubt, SKIP. Sunk cost is real but expensive. Move forward.

---

## Pre-match routine (T-30 minutes before)

### T-30 min: Equipment check
- Robot charged to 100%, last drained < 4 hours ago
- All 8 attachments in starting positions
- Aligners and jigs in carry bag
- Custom menu screen loads correctly
- Backup batteries charged
- Spare bricks (the most failure-prone pieces) packed

### T-20 min: Mental calibration
- Whole team huddle. 2 minutes max.
- Operator states: "Run order today is [X]. Failure protocol: skip when in doubt."
- Everyone confirms.
- L! O! T! B! Lord of the Bricks! chant (your primary slogan from Brick 4).

### T-15 min: Approach to table area
- Walk together, slowly, no rushing.
- Avoid bumping into other teams' tables.
- Greet referees by name (read name tag).

### T-10 min: Practice table (if available)
- One quick alignment test on the practice table.
- Test the gyro on a straight-line run.
- Do NOT run full sequences. You'll waste battery and burn timing memory.

### T-3 min: At competition table
- Operator and Resetter at the table.
- Spotter and Time-caller flanking.
- Other 5 members 6 feet back, silent.
- Operator places robot in launch position.
- Eyes up, breath in, breath out.

### T-0: Match starts
- Referee says go.
- Operator: "Go."

---

## Between-match routine

### Immediately after match (first 5 minutes)
- All 9 huddle. No phones, no parents.
- One round: each person says one thing they observed. Just observations, no judgments.
- Operator (or coach) decides: what's one change for the next match? **One change only.** Not two, not three. One.

### 15 to 60 minutes between matches
- Robot back to pit. Charge if needed (rarely needed for a 2:30 run).
- Inspect attachments for damage. Most common failure: pin loosening on Run [TBD high-stress run].
- Hydrate. Eat something light (banana, biscuit). Not sugary drinks.
- Use bathroom in plenty of time before the next call.

### What to fix between matches
- Mechanical: yes (loose pin, slipped rubber band)
- Code: only if a specific bug was clearly visible, and the fix is verified-safe
- Strategy: no. Don't change run order mid-event.

### What NOT to fix between matches
- "We could try X instead" → no. Stick to the plan.
- "Let me just rewrite this line" → no. Untested code on match day is catastrophic.
- "What if we add a sensor" → no. You go with what got you here.

---

## Korea-specific variables

These are the variables that don't exist at UK Nationals and need plans.

### 1. Mat differences
Korean mats may have different friction, may be older or newer, may have paint imperfections. Plan: arrive at the venue early on practice day (if available) and run all 8 runs once. Note differences in distance covered per motor rotation. Adjust calibration if needed.

### 2. Battery and temperature
Venue may be warmer or cooler than your training space. Motor behaviour shifts with temperature. Plan: do at least one full-match simulation in the venue temperature before competing.

### 3. Time zone and sleep
Korea is 9 hours ahead of UK time. Jet lag is real. Plan: land at least 2 days before competition. Sleep schedule adjusted by 2 hours per day starting 5 days before departure.

### 4. Foreign noise environment
Korean venue may be louder than UK venues (more spectators, more languages, more energy). Robot is unaffected but team focus may drop. Plan: practice runs at home with loud music or chatter in the room. Build noise immunity.

### 5. Referee variation
Korean referees may interpret rules slightly differently, especially around touch penalties and which side of a line counts. Plan: at registration, the coach asks 2 specific questions about edge cases the team has been worried about. Get written confirmation if possible.

### 6. Equipment damage in transit
The robot may shift in transit. Plan: rebuild any loose connection on arrival. Test all 8 runs on Day 1. Do not assume the robot survived the flight intact.

---

## Equipment manifest

What goes to Korea and who carries it.

### Primary kit (Karthic or designated coach carries on flight)
- World Dominator robot, in custom-fit hard case
- All 8 attachments, in labelled compartments
- Mechanical aligners and starting jigs
- Charged battery + 2 spare batteries
- Charging cable + UK-to-Korea plug adapter (Type F)

### Secondary kit (parent or team member carries)
- Spare LEGO Technic parts (the most failure-prone pieces, identified by Toby)
- Engineering journal
- Resources folder
- Prompt engineering printout (for Innovation Project)
- KAS newsletter printout
- Blueprint one-pager
- 40% to 95% consistency curve printout
- Animated mission map (or static version)
- List of all coding (printout)
- List of 50+ changes (printout)

### Team kit (each member carries)
- Team uniform
- UK gift items (for the GP playbook: pins, postcards, etc.)
- Personal water bottle
- Notebook + pen for between-match notes

### Backup kit (locked in hotel room, not at venue)
- Spare robot hub (if available)
- Spare full set of attachments
- Spare uniforms
- Printed copies of all scripts

---

## Mental preparation

The 110-point gap between Regionals and theoretical max is mostly mental. Train these habits in the next weeks:

### 1. The 3-second rule
When something goes wrong, the team has 3 seconds to decide and act. Train this by deliberately simulating failures during practice runs (knock a piece out of place, mis-align the robot) and seeing how fast the team adjusts.

### 2. The "no replay" rule
After a run, the team does not replay what happened in their heads. They observe, decide one fix, move on. Train this by ending every practice with the same protocol: huddle, one observation each, one fix decided, move on.

### 3. The L-O-T-B reset
When anyone on the team feels tension building, they say "L-O-T-B" quietly and the rest respond "Lord of the Bricks." Resets focus. Builds team rhythm under stress.

### 4. The breath
Operator takes 3 slow breaths before pressing start. Every match, every time. This is not optional.

### 5. Win or lose, the team chants together at the end
Regardless of outcome, after the final match, the team does the full closing chant together. This builds identity that survives results.

---

## Score targeting framework

The team is going for a **545 ceiling** but the real targets are:

| Tier | Score | What it means |
|---|---|---|
| Floor | 435 | What you hit at Regionals. The non-negotiable baseline. |
| Stretch | 480 | What a clean Match 1 should deliver |
| Strong | 510 | What a clean Match 2 with one retry should deliver |
| Ceiling | 545 | A perfect Match 3. This is the goal. |

**The strategic insight:** you do not need to hit 545. You need to **maximise the highest of 3 matches.** That means the goal in each match is different:
- Match 1: clear the floor (435+)
- Match 2: lift to strong (480+)
- Match 3: swing for ceiling (520+)

A score of 510 across all 3 matches is better than one 545 followed by two 380s. Consistency wins.

---

## Open items (need your input to lock)

1. **The 8-run table.** Mission-to-run mapping with point values per run. I have the strategy but not the specifics.
2. **Per-run time budget.** Sum should be ~2:30. Confirm.
3. **Per-run consistency rates.** Q&A doc says runs 2, 5, 6, 7 are ~100% and others ~90%. Confirm or update.
4. **UK Nationals score.** Documents say Regionals = 435. What did you score at Nationals?
5. **Table roles.** Who is your current Operator, Resetter, Spotter, Time-caller? Or is it different per match?
6. **Backup hardware.** Do you have a spare hub, spare attachments, or a full backup robot?
7. **Practice day access in Korea.** Is there a practice day at the venue before competition? If yes, the Day-1-full-simulation plan kicks in.
8. **Custom menu specifics.** The Q&A doc says custom menu auto-increments and allows manual selection. Confirm the manual selection logic. (When you press X, which run loads?)
9. **Common failure modes from Regionals.** Which runs failed at Regionals, and at what stage? This will sharpen the failure decision tree.

---

## Final note

The robot is championship-grade. The 8-run strategy is sound. The hardware is iterated. The team has 4 years of accumulated skill.

This brick exists because under pressure, none of that matters if execution wobbles. The 110-point gap is closed by:
- Tighter table-side roles
- A failure decision tree the Operator can execute in 3 seconds
- A pre-match routine that locks focus
- A between-match discipline that resists "one more change"
- Mental preparation that converts capability into outcome

With this playbook drilled, Match 3 in Korea should be the run that earns Lord of the Bricks the Robot Performance championship at international level.

**Brick 1 status:** Framework complete. Ready for your placeholders on the 8-run details and table roles. Once those are in, this brick is operational.

**Next bricks queued:**
- Brick 5: Final Share script polish
- Brick 6: Gracious Professionalism playbook for Korea (operationalised)
- Brick 9: Q&A response bank (all 30+ judge questions with prepared answers)
- Brick 10: Team Welcome and icebreaker script (first 2 min of the judging session)
