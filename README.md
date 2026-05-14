# TypeScript Dutch Word Clock

Browser-based prototype of a Dutch word clock with minute precision. Built with React and TypeScript as a testbed before transferring the logic to Arduino hardware.

- **Live demo:** [sanderdesnaijer.github.io/typescript-dutch-wordclock](https://sanderdesnaijer.github.io/typescript-dutch-wordclock/)
- **Blog post:** [Building a 3D-Printed Arduino Word Clock](https://sanderdesnaijer.com/blog/3d-printed-arduino-word-clock)
- **Project:** [sanderdesnaijer.com/projects/arduino-3d-printed-dutch-word-clock](https://sanderdesnaijer.com/projects/arduino-3d-printed-dutch-word-clock)
- **Arduino version:** [arduino-dutch-wordclock](https://github.com/sanderdesnaijer/arduino-dutch-wordclock) / the final hardware implementation

## About

Most word clocks you find online only show time in five-minute increments. This one displays Dutch time phrases with minute precision. The browser version was used to develop and verify the letter grid layout and word mapping logic before porting everything to the Arduino.

## Getting started

```bash
npm ci
npm run dev
```

## Deploy

```bash
npm run deploy
```

## Related

- [sanderdesnaijer.com](https://sanderdesnaijer.com) / portfolio and blog
- [Building a 3D-Printed Arduino Word Clock](https://sanderdesnaijer.com/blog/3d-printed-arduino-word-clock) / full build guide
- [arduino-dutch-wordclock](https://github.com/sanderdesnaijer/arduino-dutch-wordclock) / Arduino firmware for the physical clock
