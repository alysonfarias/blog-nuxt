---
description: Optimize your code with debounce and throttle techniques
head:
  meta:
    - name: "keywords"
      content: "debouce, throttle, web development"
    - name: "robots"
      content: "index, follow"
    - name: "author"
      content: "Alyson Farias"
    - name: "copyright"
      content: "© 2024 Alyson Farias"
    - name: "og:title"
      content: "Optimize your code with debounce and throttle techniques"
    - name: "og:description"
      content: "Optimize your code with debounce and throttle techniques"
    - name: "og:type"
      content: "article"

publishedAt: 2024-08-03 23:45:00
toc: true
---

# Front-End Optimization: Debouncing and Throttling Explained

## What is Debouncing?

Debouncing is a technique that delays the execution of a function until the user stops performing a certain action for a specified amount of time.

If you have a search bar that fetches suggestions from the backend as the user types, you can debounce the function that makes the API call, so that it only runs after the user stops typing for a few seconds. This way, you can avoid making too many API calls that might overload your server or return irrelevant results.

## What is Throttling?

Throttling is a technique that limits the execution of a function to once in every specified time interval.
Common use:

If you have a resize event handler that adjusts the layout of your page, you can throttle the function that updates the layout, so that it only runs once every 100ms. This way, you can avoid running your code too frequently, which might cause janky user interface or high CPU usage.

##### You can see clearly in this video

[Debounce vs Throttle](https://x.com/_ntnhon/status/1485718357995401224)
