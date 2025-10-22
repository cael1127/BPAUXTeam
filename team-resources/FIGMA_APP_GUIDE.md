# 📱 Easy Figma App Creation Guide
## Create Your Perfect Mobile App Prototype in 2 Hours!

**Make your 5-screen mobile app stunning and competition-ready!**

---

## 🎯 WHAT YOU'RE CREATING

### Required 5 Screens (BPA Specification):
1. **Live Scores** - Real-time match updates
2. **Stats** - Player and team performance data
3. **Replays** - Match highlights and replays
4. **Brackets** - Tournament progression
5. **Chat** - Community engagement

**Time to Create**: 2-3 hours (even if you're a Figma beginner!)

---

## 🚀 QUICK START (Step-by-Step)

### Step 1: Set Up Figma (5 minutes)

1. **Go to Figma**: https://www.figma.com
2. **Sign up** (free account)
3. **Click** "New design file"
4. **Name it**: "BPA UX Team 2026 - Mobile App"

✅ **Done! You're ready to design!**

---

### Step 2: Create Your Artboards (5 minutes)

**Frame Creation**:
1. Press `F` key (or click Frame tool)
2. On right panel, select **"Phone" → "iPhone 14 Pro"** (375 x 812)
3. Create **5 frames** (one for each screen)
4. **Name them**:
   - Frame 1: "Live Scores"
   - Frame 2: "Stats"
   - Frame 3: "Replays"
   - Frame 4: "Brackets"
   - Frame 5: "Chat"

**Pro Tip**: Duplicate frames with `Cmd/Ctrl + D` to keep consistent sizing!

---

### Step 3: Apply Your Brand Colors (10 minutes)

**Color Palette** (from your project):

```
Purple: #8B5CF6
Pink: #EC4899
Blue: #3B82F6
Cyan: #06B6D4
Gray-50: #F9FAFB (background)
Gray-900: #111827 (text)
White: #FFFFFF
```

**How to Add Colors**:
1. Click any shape
2. **Fill** section on right
3. Click color swatch
4. Enter hex code
5. Click ⭐ to save to palette

**Create Gradient** (Purple to Pink):
1. Select shape
2. **Fill** → Click **Solid** → Change to **Linear**
3. Add purple (#8B5CF6) at start
4. Add pink (#EC4899) at end

✅ **Brand colors ready!**

---

### Step 4: Add Navigation Bar (15 minutes)

**Bottom Tab Bar** (appears on ALL 5 screens):

1. **Create Rectangle**:
   - Width: 375px (full width)
   - Height: 80px
   - Position: Bottom of screen
   - Fill: White (#FFFFFF)
   - Add shadow: Y=4, Blur=16, Color=#00000015

2. **Add 5 Icons** (use Figma's icon plugin):
   - Install: Plugins → Browse → "Iconify" (free!)
   - Search icons: "chart-line", "user", "play", "trophy", "message"
   - Place icons evenly spaced
   - Size: 24x24px each
   - Color: Gray for inactive, Purple for active

3. **Add Labels** (under each icon):
   - Text: "Live", "Stats", "Replays", "Brackets", "Chat"
   - Font: Inter Regular, 11px
   - Color: Gray (#6B7280) for inactive, Purple (#8B5CF6) for active

4. **Duplicate** this navigation to all 5 screens!

✅ **Navigation done! Copy to all screens.**

---

## 📱 SCREEN-BY-SCREEN GUIDE

### Screen 1: Live Scores (20 minutes)

**Top Section**:
- **Header**: "Live Matches"
  - Font: Inter Bold, 24px
  - Color: Gray-900 (#111827)
- **Subtext**: "Real-time updates"
  - Font: Inter Regular, 14px
  - Color: Gray-500 (#6B7280)

**Match Cards** (create 2-3):
1. **Rectangle**: 
   - Width: 343px, Height: 120px
   - Rounded corners: 12px
   - Fill: White, Shadow: subtle
   
2. **Team Names**:
   - "Cloud9" vs "FaZe Clan"
   - Font: Inter SemiBold, 16px
   
3. **Score**:
   - "2 - 1" in large text
   - Font: Inter Bold, 32px
   - Color: Purple gradient
   
4. **Live Indicator**:
   - Small red dot + "LIVE" text
   - Pulsing animation (optional)
   
5. **Game Icon**: 
   - Small Valorant/RL/Smash icon
   - Top right corner

**Quick Tip**: Duplicate card, change team names and scores!

✅ **Live Scores screen complete!**

---

### Screen 2: Stats (20 minutes)

**Top Section**:
- **Header**: "Player Stats"
- **Filter Tabs**: "All" | "Valorant" | "Rocket League" | "Smash"
  - Active tab has purple background

**Player Cards** (create 3-4):
1. **Rectangle**: 
   - Width: 343px, Height: 80px
   - Rounded: 8px
   
2. **Player Photo** (circle):
   - Use placeholder: Circle, 48x48px
   - Fill: Gradient or solid color
   
3. **Player Info**:
   - Name: "TenZ" (Inter SemiBold, 16px)
   - Team: "Sentinels" (Inter Regular, 12px, Gray)
   
4. **Stats** (right side):
   - "K/D: 1.8" 
   - "Wins: 24"
   - Font: Inter Medium, 14px

**Bar Chart** (optional detail):
- Simple colored bars showing performance
- Use rectangles with different widths

✅ **Stats screen complete!**

---

### Screen 3: Replays (20 minutes)

**Top Section**:
- **Header**: "Match Replays"
- **Filter**: "Highlights" | "Full Matches"

**Video Cards** (create 3-4):
1. **Rectangle**:
   - Width: 343px, Height: 200px
   - Rounded: 12px
   - Fill: Dark gradient (simulating video thumbnail)
   
2. **Play Button** (center):
   - Circle: 64x64px, White with opacity
   - Triangle play icon inside
   - Shadow for depth
   
3. **Duration Badge** (bottom right):
   - Small rectangle, rounded
   - Text: "2:34" or "Full Match"
   - Semi-transparent black background
   
4. **Info Below**:
   - Match title: "Cloud9 vs FaZe - Finals"
   - Views: "12.5K views"
   - Date: "2 days ago"

**Quick Tip**: Add thumbnail images or colored gradients to simulate video previews!

✅ **Replays screen complete!**

---

### Screen 4: Brackets (25 minutes)

**Top Section**:
- **Header**: "Tournament Bracket"
- **Round Indicator**: "Semifinals"

**Bracket Visualization**:

**Simple Version** (Easy - 15 min):
1. **Vertical List** of matches:
   - Match 1: Team A vs Team B → Winner: Team A
   - Match 2: Team C vs Team D → Winner: Team C
   - Final: Team A vs Team C → TBD
   
2. **Use Cards**:
   - Same style as Live Scores
   - Add "Winner" indicator (checkmark or crown)
   - Connect with simple lines

**Advanced Version** (Impressive - 25 min):
1. **Tournament Tree**:
   - Use lines (L key) to connect matches
   - Quarterfinals → Semifinals → Finals
   - Color winning teams purple
   
2. **Match Nodes**:
   - Small rectangles with team names
   - Connect with lines
   - Highlight current match

**Pro Tip**: Search Figma Community for "tournament bracket template" for inspiration!

✅ **Brackets screen complete!**

---

### Screen 5: Chat (20 minutes)

**Top Section**:
- **Header**: "Team Chat"
- **Channel Selector**: "#cloud9-fans" dropdown

**Chat Messages** (create 5-6):
1. **Message Bubble**:
   - Width: varies (200-300px)
   - Height: auto
   - Rounded: 16px
   - Fill: Gray-100 (received) or Purple (sent)
   
2. **Message Layout**:
   - Avatar: Circle, 32x32px (left side)
   - Username: "TenZFan23" (Inter Medium, 14px)
   - Message: "Let's go Cloud9! 🔥" (Inter Regular, 14px)
   - Time: "2:34 PM" (Inter Regular, 11px, Gray)
   
3. **Alternate Sides**:
   - Received messages: Left-aligned
   - Sent messages: Right-aligned, purple background

**Input Bar** (bottom, above navigation):
- **Rectangle**: Full width, 60px height
- **Text Input**: "Type a message..."
- **Send Button**: Circle with arrow icon, purple

**Add Emojis**: 
- Use emoji picker plugin or just type emojis! 🎮⚡🏆

✅ **Chat screen complete!**

---

## 🎨 DESIGN POLISH (30 minutes)

### Make It Perfect:

**1. Consistent Spacing** (10 min):
- Use **8px grid**: Everything aligns to 8, 16, 24, 32, 48px
- Padding: 16px around content
- Gap between elements: 12-16px

**2. Typography Hierarchy** (5 min):
- Headers: Inter Bold, 24px
- Subheaders: Inter SemiBold, 18px
- Body: Inter Regular, 14-16px
- Captions: Inter Regular, 11-12px

**3. Shadows & Depth** (10 min):
- Cards: Y=2, Blur=8, #00000010
- Buttons: Y=4, Blur=12, #8B5CF615
- Bottom nav: Y=4, Blur=16, #00000015

**4. Colors** (5 min):
- Check contrast with plugin: "Stark" (free)
- Ensure text is readable (4.5:1 ratio minimum)
- Use purple/pink for primary actions only

---

## 🔗 ADD INTERACTIONS (15 minutes)

### Make It Clickable!

**Prototype Mode**:
1. Click **"Prototype"** tab (top right)
2. Select element (e.g., "Stats" tab icon)
3. Drag blue **+** to target screen (Stats screen)
4. Set transition: **"Navigate to"** → **"Instant"** (or "Smart Animate")

**Add Interactions For**:
- ✅ All 5 bottom nav buttons → their screens
- ✅ Match cards → Detail view (bonus!)
- ✅ Play buttons → Video player (bonus!)
- ✅ Chat input → Keyboard (bonus!)

**Test Your Prototype**:
- Click ▶️ **Present** button (top right)
- Try tapping through all screens
- Verify navigation works!

✅ **Interactive prototype ready!**

---

## 📤 EXPORT & SHARE (10 minutes)

### Get Your Figma Link:

1. **Click "Share"** button (top right)
2. Change **"Anyone with the link"** to **"can view"**
3. **Copy link**
4. **Paste in**: `SUBMISSION_PACKAGE/Mobile_Prototype_Link.txt`

**Your Link Format**:
```
https://www.figma.com/proto/[PROJECT-ID]/[PROJECT-NAME]
```

### Export Screenshots (For PDF):

1. **Select each frame**
2. **Right panel** → "Export"
3. **Format**: PNG, 2x scale
4. **Export** → Save to folder: `SUBMISSION_PACKAGE/Mobile_Screenshots/`

✅ **Ready for submission!**

---

## 🎨 DESIGN RESOURCES (Use These!)

### Free Assets:

**Icons**:
- **Iconify Plugin** (in Figma): 150,000+ free icons
- **Lucide Icons**: Matches your website style
- **Feather Icons**: Clean, minimal

**Illustrations** (optional):
- **unDraw**: https://undraw.co (customizable purple!)
- **Streamline**: Free icons and illustrations
- **Figma Community**: Search "esports illustration"

**Mockups**:
- **Figma Community**: Search "iPhone mockup"
- Drag your screens into mockups
- Export for presentations

**Fonts**:
- **Inter** (already in Figma!)
- Professional, clean, readable

---

## ⚡ SHORTCUTS CHEATSHEET

```
F           - Frame tool
R           - Rectangle
T           - Text
O           - Ellipse (circles)
L           - Line
Cmd/Ctrl+D  - Duplicate
Cmd/Ctrl+G  - Group
Cmd/Ctrl+/  - Search (find any tool!)
Option+Drag - Duplicate while dragging
Shift+Drag  - Constrain proportions
Cmd+Ctrl+K  - Create component
```

---

## 🏆 COMPETITION TIPS

### Make It Impressive:

**1. Consistency** ✅
- Same card styles across all screens
- Same color palette throughout
- Same spacing system (8px grid)

**2. Realism** ✅
- Use real team names (Cloud9, FaZe, etc.)
- Realistic stats and numbers
- Proper game names (Valorant, etc.)

**3. Details** ✅
- Shadows for depth
- Rounded corners (8-12px)
- Status indicators (LIVE, NEW)
- Loading states (optional)

**4. Brand Alignment** ✅
- Purple-pink gradient prominently
- Matches your website design
- Inter font family
- Professional polish

---

## 🚨 COMMON MISTAKES TO AVOID

❌ **Don't**:
- Use more than 5 screens (BPA requires exactly 5!)
- Use copyrighted game logos without permission
- Make text too small (<11px)
- Forget the bottom navigation
- Skip the prototype interactions

✅ **Do**:
- Keep it simple and clean
- Use consistent spacing
- Make text readable
- Test your prototype
- Show it to a friend for feedback

---

## ⏱️ TIME BREAKDOWN

**Total Time**: 2-3 hours

- Setup & Artboards: 10 min
- Brand Colors: 10 min
- Navigation: 15 min
- Screen 1 (Live Scores): 20 min
- Screen 2 (Stats): 20 min
- Screen 3 (Replays): 20 min
- Screen 4 (Brackets): 25 min
- Screen 5 (Chat): 20 min
- Polish: 30 min
- Interactions: 15 min
- Export: 10 min

**Beginner?** Add 30-60 minutes for learning Figma basics.

---

## 🎓 LEARNING RESOURCES

### Quick Tutorials:

**Figma Basics** (15 min):
- Official Tutorial: https://www.figma.com/resources/learn-design/
- YouTube: "Figma in 15 minutes"

**Mobile App Design** (30 min):
- YouTube: "Mobile app design tutorial Figma"
- Figma Community: Browse mobile app examples

**Your App Specifically**:
- This guide! Follow step-by-step
- Takes 2-3 hours even if totally new

---

## ✅ FINAL CHECKLIST

Before submitting, verify:

### Design Quality:
- [ ] Exactly 5 screens ✅
- [ ] Bottom navigation on all screens ✅
- [ ] Consistent purple-pink branding ✅
- [ ] Inter font used throughout ✅
- [ ] 375px width (iPhone frame) ✅
- [ ] Touch targets 44px minimum ✅
- [ ] Text readable (12px+) ✅

### Content:
- [ ] Screen 1: Live Scores ✅
- [ ] Screen 2: Stats ✅
- [ ] Screen 3: Replays ✅
- [ ] Screen 4: Brackets ✅
- [ ] Screen 5: Chat ✅
- [ ] Realistic content (team names, etc.) ✅
- [ ] No copyrighted assets ✅

### Interactions:
- [ ] Bottom nav links to all 5 screens ✅
- [ ] Prototype mode tested ✅
- [ ] No broken links ✅

### Submission:
- [ ] Figma link copied ✅
- [ ] "Anyone can view" access ✅
- [ ] Screenshots exported (PNG) ✅
- [ ] Link tested from different browser ✅

---

## 🏆 YOU'RE READY!

**Your mobile app prototype will:**
- ✅ **Meet BPA requirements** (exactly 5 screens)
- ✅ **Look professional** (brand-consistent, polished)
- ✅ **Be interactive** (working prototype)
- ✅ **Impress judges** (clean, functional design)

**Create it in 2-3 hours and win nationals!** 🚀📱

---

**Start now**: https://www.figma.com

**Questions?** Watch "Figma mobile app design tutorial" on YouTube

**You've got this!** 💪🏆

