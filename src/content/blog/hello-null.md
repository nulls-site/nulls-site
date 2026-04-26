---
title: "null's Domain — On the Personal Web, Horror and Heavy Metal"
date: 2026-04-26
description: "The story behind this site: its aesthetic obsessions, its rejection of algorithm-driven design, and why a 2018 art horror film became its foundation."
tags: ["site", "horror", "mandy", "web", "personal"]
---

## What This Is

This is a personal website.

A place where I document what I am interested in, what I am building, and what I am thinking about.

The small web is real. This is a small piece of it.

## Aesthetic Choices

When planning this site I had a clear direction: horror. Watching horror movies is a hobby I picked up some time ago with my sister, and it has greatly shaped the kind of atmosphere I wanted to build here.

The foundation is the film **Mandy** (2018, dir. Panos Cosmatos). I really liked how it combines an 80s aesthetic with Black Metal visual language — the deep purple-black forests, electric pink-red rage, the amber fire of the chainsaw scene. Even though I am not particularly into Black Metal, I do like heavy metal broadly, and that intersection felt right.

From there I expanded into two more themes — **They Will Kill You** (cold surveillance horror, black) and **Evil Dead** (Necronomicon parchment, deadite green, forest rot). Each one is selectable from the button in the bottom-right corner.

The fonts are **Cinzel Decorative** for gothic display headings and **Cinzel** for chapter labels, paired with **Geist** for readable body copy. The VHS scanlines and noise layers are baked into the layout globally — they don't belong to any one theme.

## Technical Stuff

The site is built with **Astro**, deployed to **Neocities** via GitHub Actions. Tailwind CSS handles styling, and React is used only where actual interactivity is needed.

I chose Astro because of how it handles componentization on a static site — you get the ergonomics of a component-based workflow without shipping a JavaScript bundle to the browser. For a personal site where most things are just HTML and CSS, that matters.

### Limitations

I don't have a Neocities supporter account yet, which means the site runs without Cross-Origin support. Because of that, API-dependent things like the commit history widget can't update in real time — it fetches at build time and stays frozen until the next deploy.

## What Comes Next

The site is under construction, as all personal websites perpetually are.

Planned additions include a project documentation section, a recommendations page, and eventually a guest book.


— null
