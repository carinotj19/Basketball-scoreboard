# Basketball Scoreboard

A browser-based scoreboard for tracking home vs. guest points in real time.

## 📂 Files Included

- `index.html` – Main interface and layout of the scoreboard. :contentReference[oaicite:1]{index=1}  
- `styles.css` – Styling for the score cards, buttons, and overall layout. :contentReference[oaicite:2]{index=2}  
- `script.js` – Game logic for incrementing scores, determining the leader, and resetting the game. :contentReference[oaicite:3]{index=3}  
- `.gitattributes` – Git configuration to handle line endings and other attributes.

## 🚀 Getting Started

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/carinotj19/Basketball-scoreboard.git
   ```

2. **Navigate into the project folder:**

   ```bash
   cd Basketball-scoreboard
   ```

3. **Open the game in your browser:**

   - Double‑click `index.html` in your file explorer  
   - Or serve via a simple HTTP server:
     ```bash
     npx live-server .
     ```

## 🎮 Usage

1. Click **+1**, **+3**, or **+5** under the **HOME** or **GUEST** card to add points.  
2. The leading team’s card glows **red**; a tie highlights both cards in **blue**.  
3. Click **Start new Game** to reset scores. Alerts notify if it’s a tie or which team wins.

## 🎨 Customization

- Adjust colors or shadows in `styles.css` under `#leading` and `#tie` selectors.  
- Modify scoring increments by editing or adding functions in `script.js`.

## 📄 License

This project is open‑source under the MIT License. See the [LICENSE](LICENSE) file for details.  
