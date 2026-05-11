# Brick 3: Robot Design Script (Korea Edition)
**Team:** Lord of the Bricks
**Event:** FLL Challenge Unearthed Internationals, South Korea
**Slot:** 5 minutes (Robot Design Team Explanation)
**Speakers:** All 9 members
**Winning stroke:** Aaliya, position 8 of 9

---

## Strategic frame

You won UK Nationals Robot Performance award but Robot Design judging didn't put you top 10 there. That means the robot is championship-grade and the script communication was mid-tier.

This rebuild fixes that gap. Three things change versus Harrogate:

1. **Year-over-year arc.** Every section references the 4-year evolution. Most teams talk about this season only. You can talk about 4.
2. **Decision quality language.** Every section names a choice, a rejected alternative, and a reason. That's what "process" scoring rewards.
3. **The Aaliya reveal.** A meta-insight that reframes the entire presentation. No other team will land this.

---

## Speaker assignment and timing

| # | Speaker | Section | Time | Word count |
|---|---|---|---|---|
| 1 | Esha | Opening + Year-4 frame | 30 sec | 60 |
| 2 | Arvin | Resources (3 buckets) | 25 sec | 50 |
| 3 | Flossie | Mission strategy (5 strategies, 4 rejected) | 65 sec | 130 |
| 4 | Anaisa | Robot architecture (4 generations) | 30 sec | 60 |
| 5 | Guhan | Attachments (5 mechanisms reveal) | 30 sec | 55 |
| 6 | Sakthi | Programming (Pybricks architecture) | 25 sec | 50 |
| 7 | Elliot | Testing (40% to 95% curve) | 30 sec | 60 |
| 8 | **Aaliya** | **The winning stroke** | **27 sec** | **55** |
| 9 | Toby | Closer (Fun + Pride + Korea respect) | 20 sec | 40 |
| | | **Total** | **~4:42** | **560 words** |

Built-in buffer: 18 seconds. Tight but achievable with rehearsal.

---

## Artefact map

What's physically in the room and when each is referenced.

| Artefact | When used | Speaker |
|---|---|---|
| World Dominator robot | Throughout | Esha hands off, Anaisa demonstrates |
| Resources folder (3 buckets) | Hand to judges at start | Arvin (Anaisa hands over) |
| Animated mission map (8 runs) | During strategy explanation | Flossie points |
| Attachments (8 modular) | During attachments section | Guhan + others demonstrate |
| Custom menu screen | During programming section | Sakthi shows |
| Mechanical aligners + jigs | During programming section | Other team member shows |
| **40% to 95% consistency curve (HERO)** | During testing section | Elliot points |
| List of 50+ changes / engineering journal | Hand to judges | Anaisa |
| List of all coding | Hand to judges | Anaisa |

---

## The full script

### 1. ESHA — Opening + Year-4 Frame (30 sec)

> "Annyeong-haseyo. We are Lord of the Bricks, from Kent, United Kingdom.
>
> Three years ago, we didn't know how to code. This is our fourth year. This is our fourth-generation robot. World Dominator.
>
> Run consistency, Year 1 to Year 4: 40% to 95%.
>
> Today we'll show you how we got here."

*(Esha holds up World Dominator, then hands to Anaisa.)*

**Rubric hits:** Opens with humility (Year 1 we knew nothing). Plants the 40% to 95% stat that Elliot will pay off later. Korean greeting signals respect without forcing it.

---

### 2. ARVIN — Resources, 3 buckets (25 sec)

> "Learning never stops for us. We use three resource categories.
>
> **Strategy:** five teams we follow. Exploding Kettles, RailTech, Bricks and Biscuits, FLL Tutorials, Spike Prime Lessons.
>
> **Building:** SPIKE Prime tutorials, plus last year's Advanced Driving Base instructions.
>
> **Coding:** Pybricks documentation, and hours of YouTube on gear ratios and torque."

*(Anaisa hands resources folder to judges.)*

**Rubric hits:**
- RD IDENTIFY: "Clear use of building or coding resources to support mission strategy" → Exceeds candidate
- Core Values Discovery (dual-marked): 3 categories shows systematic learning, beats most teams who name 1 source

---

### 3. FLOSSIE — Mission Strategy (65 sec)

> "Our mission strategy was an engineering problem. **27 tasks. 15 missions. Two objectives: minimise runs, maximise points, lowest failure probability.**
>
> We evaluated 5 strategies. We rejected 4.
>
> **Strategy 1:** one run, all 15 missions. Rejected. One failure loses 545 points.
>
> **Strategy 2:** 15 individual runs. Rejected. Too much time in Home.
>
> **Strategy 3:** 5 to 6 runs with bigger attachments. Last year's approach. Attachments destabilised the robot.
>
> **Strategy 4:** Group purely by proximity. We started this season with this. Three months in, it failed. Efficient on path, slow on missions.
>
> **Strategy 5:** 8 runs, grouped by attachment pattern. Adopted.
>
> *(points to animated map)* That's our 8-run plan."

**Rubric hits:**
- RD IDENTIFY: "Clear evidence of mission strategy" → 5 strategies named, 4 rejected with reason = Exceeds candidate
- RD ITERATE (dual-marked Core Values Innovation): Strategy 4 → Strategy 5 evolution shows mid-season course correction
- Decision quality clearly demonstrated. This is what robot design judging actually scores.

---

### 4. ANAISA — Robot Architecture, 4 Generations (30 sec)

> "This is World Dominator. Fourth generation. Each version fixed a previous version's failure mode.
>
> **Gen 1** tipped over with heavy attachments.
>
> **Gen 2** slipped on the mat.
>
> **Gen 3** lost speed in long runs.
>
> **Gen 4** fixes all three. Thick rubber tyres. Low centre of gravity. Gyro-controlled straight-line drive.
>
> Four motors: two for driving, two for attachments. One reliable system."

*(Demonstrates robot, points to each feature.)*

**Rubric hits:**
- RD CREATE: "Clear explanation of innovative attachments" → 4 generations of failure-fix pairs = process evidence
- RD ITERATE: improvements based on testing visible across years
- Differentiator: most teams show one robot. You show four.

---

### 5. GUHAN — Attachments, 5 Mechanisms (30 sec)

> "15 missions sound like 15 different problems. They're not.
>
> We tested every attachment we built and saw a pattern. **Five mechanisms handle every mission.**
>
> Grabbers. Push-pull arms. Rack-and-pinion. Dual-motor arms. Rubber band systems.
>
> *(demonstrates with the modular attachments)*
>
> We stopped engineering missions. We engineered mechanisms. One mechanism. Multiple missions. Predictable behaviour."

**Rubric hits:**
- RD CREATE: "Clear explanation of innovative attachments and their purpose" → Exceeds candidate (5 mechanism categories)
- This is the original engineering philosophy that no other team will articulate. Most teams describe attachments one by one. You describe the abstraction layer above.

---

### 6. SAKTHI — Programming (25 sec)

> "We switched from SPIKE block coding to Pybricks for three reasons: precise distance control, custom wheel-diameter calibration, and no Bluetooth lag.
>
> We built a custom menu that auto-increments runs. One button press loads the next run.
>
> Gyro sensor handles straight-line drift. Mechanical aligners and starting jigs make every launch fail-safe."

*(Team member shows custom menu and aligners.)*

**Rubric hits:**
- RD CREATE: "Clear explanation of innovative code and/or sensor use"
- 3-reason switch demonstrates decision quality, not tool naming

---

### 7. ELLIOT — Testing and Consistency Curve (30 sec)

> "We test until we trust. 200+ individual run tests this season. 100 full-match simulations.
>
> *(points to the 40-to-95% curve)*
>
> Year 1, our runs were 40% consistent. Year 4, we're at 95%.
>
> After Regionals, we made 50+ changes. One example: Silo pieces were jamming our wheels. We tried a deflector. It failed. We built a full wheel-cover system. The path clears every time."

**Rubric hits:**
- RD ITERATE: "Clear evidence of repeated testing of robot and code" → Exceeds (220+ tests)
- RD ITERATE (dual-marked Core Values Innovation): "Clear evidence of improvements based on testing" → Exceeds (50+ changes, named example)
- Hero artefact deployed at the right moment.

---

### 8. AALIYA — THE WINNING STROKE (27 sec)

> "You've heard about World Dominator. Our robot isn't our best engineering. **We are.**
>
> Nine of us. Three sub-groups. Two experienced and one new member in each. The new members led research. The experienced led the build. Everyone built. Everyone tested. Everyone learned.
>
> We didn't just engineer a robot. We engineered the team that built it.
>
> That's how 40% became 95%."

**Why this is the winning stroke:**

1. **Meta-reframe.** Every other team will present their robot as their work. You present *the team* as the work. This is engineering maturity at its highest level.
2. **Locks Inclusion as a dual-marked Exceeds row** for Core Values without being preachy.
3. **Echoes the 40-to-95% curve** Elliot just showed, but reframes its cause: not luck, not just iteration, but team design.
4. **One memorable line.** *"Our robot isn't our best engineering. We are."* This is what judges write in the rubric comment box.
5. **Positioned at slot 8 of 9.** Last reveal before the emotional closer. Maximum recall.

**Rubric hits:**
- RD DESIGN (dual-marked Core Values Inclusion): "Clear evidence that all team members contributed ideas" → Exceeds
- RD DESIGN: "Clear evidence of building and coding skills in all team members" → Exceeds
- Plus halo effect on every other section: the judges retroactively reframe everything they just heard.

---

### 9. TOBY — Closer (20 sec)

> "502 hours. 96 sessions. Never missed a Sunday. Nine primary school friends who learned robotics together. Today we represent Team GB in Korea.
>
> Thank you for having us.
>
> **[All 9 together, eye contact with judges]: WE ARE LORD OF THE BRICKS!**"

**Rubric hits:**
- RD COMMUNICATE (dual-marked Core Values Fun): "Team clearly shows pride or enthusiasm for their work" → Exceeds candidate
- Korea respect closing bookends Esha's Korean greeting opening
- Team GB pride lands without bragging

---

## Why this script blows judges off

Five mechanics most teams don't combine:

**1. Numbers anchor every section.**
27, 15, 545, 5 (strategies), 4 (rejected), 4 (generations), 5 (mechanisms), 200, 50, 40 to 95, 502, 96. Korean judges, English second language, follow numbers faster than rhetoric.

**2. Every section names a decision, not just a feature.**
Rejected Strategy 1 because X. Switched from SPIKE to Pybricks for 3 reasons. Tried deflector, failed, built wheel-cover. This is process language. Robot Design judging is scored on process.

**3. Year-over-year arc.**
Esha opens with it. Anaisa demonstrates it through 4 generations. Elliot proves it with the curve. Aaliya reframes it. Toby closes on it. Five reinforcements of a single story. Other teams talk about one season.

**4. The meta-reveal at slot 8.**
Aaliya's line is the moment that reframes everything. Engineering at the team-design level is rare even in adult engineering. From children, it's the line judges remember.

**5. Cultural awareness without pandering.**
Korean greeting open. Team GB close. One short, one short. Doesn't dominate the script. Signals you came here knowing where you are.

---

## Rubric scoring map

Every dual-marked Core Values row hit by this script:

| Row | Core Value | Section that lands it |
|---|---|---|
| RD IDENTIFY: Building/coding resources | Discovery | Arvin (3 buckets, 5 teams named) |
| RD DESIGN: All team members contributed | Inclusion | Aaliya (winning stroke) |
| RD ITERATE: Improvements based on testing | Innovation | Elliot (50+ changes) + Flossie (Strategy 4 → 5) |
| RD COMMUNICATE: Process and lessons learned | Impact | Multiple (Anaisa Gen 1-4, Sakthi Pybricks reasons, Guhan mechanisms insight) |
| RD COMMUNICATE: Pride/enthusiasm | Fun | Toby + all-together closer |

Plus all 5 standard RD rows (non-dual-marked) covered:

| Row | Section |
|---|---|
| IDENTIFY: mission strategy | Flossie |
| DESIGN: all members contributed ideas | Aaliya + structurally across sections |
| CREATE: attachments and code | Guhan + Sakthi |
| ITERATE: repeated testing | Elliot |
| COMMUNICATE: process and lessons | Anaisa + closing |

---

## Rehearsal protocol

Don't try to memorise verbatim. Memorise the structure and key lines.

**Week 1:** Each speaker memorises their own section. Practice in isolation, hit time targets within 5 sec.

**Week 2:** Run the full script as a team. Focus on handoffs (Esha → Anaisa, Anaisa → Guhan, etc.). Time the full thing. Aim for 4:30 to 4:45.

**Week 3:** Drill the Aaliya reveal in isolation 20 times. This is the line that has to land perfectly. Pace, eye contact, pause before "We are."

**Week 4:** Full run with artefact movements. Practice the awkward gear changes (Esha handing robot, Anaisa receiving, etc.). These are the moments where teams stumble visibly.

**Week 5:** Full run in front of an external audience (parents, other students). Get feedback. Adjust.

**Week 6 (last week before Korea):** Polish only. No structural changes. Two full runs per day.

---

## Open items

1. **Animated mission map** for Flossie's section. Who's building it? When? Static map as backup is acceptable but animated is the 5/5 trigger.
2. **40-to-95% consistency curve** printed large. Single most important artefact. Confirm production.
3. **Engineering journal** open to a representative page during the explanation.
4. **List of 50+ changes** and **list of all coding** to hand to judges. Confirm both exist as physical printouts.
5. **Custom menu screen** displayed during Sakthi's section. Phone, tablet, or laptop. Confirm device.
6. **The 5 teams named in Arvin's resources section** need to be confirmed. The draft uses Exploding Kettles, RailTech, Bricks and Biscuits, FLL Tutorials, Spike Prime Lessons. If you follow different teams, swap.

---

## Final note

If this is delivered cleanly, Robot Design rank should be top 5 minimum, top 3 likely. Combined with the Robot Performance score that already wins, Robot Design ceases to be a weak link in the Champion's score.

The bar from here: the script is now world-class. Execution is the only variable left.

**Next brick:** Innovation Project script (Brick 2).
