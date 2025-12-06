# 🎭 heheMemes — React Meme Generator

**heheMemes:** A simple and interactive Meme Generator built with React. Users input top and bottom text, and the app fetches a random meme image from an external API. The meme updates instantly, showing the text overlaid on the image. This project demonstrates core React concepts like state, controlled components, useEffect, and useRef.

---

## Features

- Fetch a random meme image from an external meme API on button click.
- Live preview of Top Text and Bottom Text (controlled inputs).
- Classic meme styling (Impact-like font, uppercase, bold outline).
- Responsive image handling.
- Fully responsive layout

---

## Tech Stack

- Frontend: React (Vite)
- Styling: CSS (flexbox / absolute positioning)
- Fetching: browser `fetch()` to hit meme API
- Local state: `useState`, `useRef` for DOM access, `useEffect` for side-effects

---

## How it works

1. User clicks **Get a new Meme image** → frontend calls the meme API and updates the `image` state.
2. User types Top Text / Bottom Text in controlled inputs.
3. Text is absolutely positioned over the image and updates live.
4. Image respects container width (`max-width: 100%`) and text uses `text-shadow` for readability.
