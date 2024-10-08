# Fix iOS Screen Jump

## What is screen jump?
Upon focusing an input, iOS Safari will scroll the window to center the input that is too near the edge of the viewport. iOS does *not* reverse that scroll when the input loses focus. This breaks the fixed and absolute positioning that are used to create non-scrollable app-like GUIs. Users have to quit and relaunch and will complain that the app froze or some such. The issue is the iOS forcibly scrolls the viewport after the developer has purposefully *disabled* scrolling - and since iOS doesn't clean up after itself by un-scrolling, the GUI is messed up and the user is screwed. 

## What does it do?
This tool watches `scroll` events on the `window` object and when the window scrolls, it registers a handler for the `blur` event on the focused element, and when triggered, the window is programmatically scrolled back to the origin (0, 0).

## Instructions

```tsx
import './node_modules/jeffmcmahan/fix-ios-screen-jump/main.ts'
```

That is all.
