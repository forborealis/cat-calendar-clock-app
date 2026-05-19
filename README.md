# Electron Calendar Clock

A pixel-art desktop widget built with Electron that displays the current date and time. Features automatic day/night theming and an interactive cat sprite.

## Preview

- **Day mode** (6 AM - 6 PM): Light blue and golden orange theme
- **Night mode** (6 PM - 6 AM): Dark purple and pink theme

## File Structure

```
electron-calendar-clock/
├── assets/                  # Sprite images
│   ├── spriteDay_1.png      # Day cat sprite (default)
│   ├── spriteDay_2.png      # Day cat sprite (click 1)
│   ├── spriteDay_3.png      # Day cat sprite (click 2)
│   ├── spriteNight_1.png    # Night cat sprite (default)
│   ├── spriteNight_2.png    # Night cat sprite (click 1)
│   └── spriteNight_3.png    # Night cat sprite (click 2)
├── index.html               # App markup
├── main.js                  # Electron main process (window config)
├── script.js                # Clock logic, sprite cycling, day/night switching
├── styles.css               # All styling, themes, and animations
├── package.json             # Project metadata and scripts
└── README.md
```

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/forborealis/electron-calendar-clock.git
   cd electron-calendar-clock
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app:
   ```bash
   npm start
   ```

## Features

- **Live clock** - Updates every second with 12-hour format (AM/PM)
- **Auto day/night theme** - Switches automatically based on time of day
- **Interactive sprite** - Click the cat to cycle through 3 sprite frames with a bounce animation
- **Idle animation** - Cat gently bobs up and down when not clicked
- **Resizable** - Window can be shrunk down from 430x430 to 250x250, content scales proportionally
- **Frameless window** - Clean look with no title bar, draggable by the background
