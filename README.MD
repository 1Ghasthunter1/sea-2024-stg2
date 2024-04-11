# HunterSnap - SEA Stage 2

HunterSnap is a comprehensive data catalog application that displays fun info about my friends!

[See It In Action on Netlify](https://glittering-faun-b6f4ab.netlify.app/ "See It In Action") (please use a computer to view)

### Changelog

- 10 Apr 2024: Authentication page and logic removed

### Key Features

- ~~**Authentication**~~: (deprecated)
- **Searching**: Search through my deep list of, you guessed it, 7 entire friends!
- **Editing/Deleting**: Don't like one of my friends, or want to remove them altogether? Not a problem! Use the edit button on the top right of the floating cards.
- **Data Aggregation**: Use the data aggregation to see useful statistics about the incredibly large friend population available. Aggregations include favorite food, most common school, average age, and a bar chart of schools.

### Resources Used

- Bitmoji URL's to show friend bitmojis, both face shots and full-body images.
- Snapchat's web platform [web.snapchat.com](https://web.snapchat.com "web.snapchat.com") for significant design inspiration, and the cloud image from snap web as well.
- [Kevin Powell's Video](https://www.youtube.com/watch?v=Z-3tPXf9a7M "Kevin Powell's Video") on how to build a 3D-rotating card. I started with his code, and modified it to suit the needs of HunterSnap. Much of his original styling and JS logic remains, but I've added comments to demonstrate I know exactly what's going on with floating cards.

### Fun things to try

- **Edit and check stats**: Change people's info like age, favorite meal, and favorite food, and go back to the stats window to watch it update.
- **Play around with the 3D card**: Nothing very data-structure related here, but kind of fun. And, yes, the `pre` is `contenteditable`, so you can write in that code box! Does not save unfortunately, but will update if you edit through the edit modal :)

---

### npm in this project

Node's npm (node-package-manager) is only used for **development purposes** for static hosting. The final deploy on Netlify does not use npm and is simply static hosting HTML, CSS, and JS files.
