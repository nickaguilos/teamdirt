---
# Copy this file to src/pages/blog/<your-post-slug>.md to publish a new post.
# This source file stays outside src/pages, so Astro never creates a production route for it.
layout: "../../layouts/BlogPostLayout.astro"
title: "Post title"
date: 2026-07-29
heroImg: "/assets/img/blog/<post-folder>/hero.jpg"
category: "Race Report"
author: "Team Dirt Media"
position: "Writer"
excerpt: "A concise one- or two-sentence summary for the blog listing and social metadata."
# supportcopy: "Optional photo credit or supporting note"
# mainClass: "Optional additional class for the article main element"
---

<p class="lead">
  Start with a short introduction that gives readers the key context.
</p>

## Section heading

Write the post content here.

<img src="/assets/img/blog/<post-folder>/image-1.jpg" class="my-5" alt="Describe the image for screen-reader users">

## Next section

Continue the story, results, or recap here.

<!--
For a carousel, copy an existing carousel block from a post in src/pages/blog,
then give it a unique id (for example, carousel1) and update each image path and alt text.
-->
