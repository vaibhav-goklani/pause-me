# Pause Me

## Overview

This project provides functionality to automatically pause and play a video element based on the visibility state of the browser tab. It uses the `visibilitychange` event to detect when the document is in the foreground or background, and accordingly controls the playback of a video.

## Features

- Pauses the video when the browser tab is not visible.
- Resumes video playback when the browser tab becomes visible again.
- Efficiently listens for visibility state changes and manages the video playback without continuous polling.

## How It Works

The core functionality of this script relies on the following:

1. **Visibility API**: The `document.visibilityState` property and `visibilitychange` event are used to determine if the browser tab is active or hidden.
2. **Video Control**: When the document is hidden, the video is paused, and when the document becomes visible, the video resumes playing.

## Prerequisites

No prerequisites are required.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/vaibhav-goklani/pause-me.git
```

2. Modify the configuration file `manifest.json`:

3. Go to the chrome extension webstore and publish the `pause-me` folder with configuration file.


## Project Structure

- `assets/`
- `manifest.json`
- `script.js`


### Authored by

- Vaibhav
