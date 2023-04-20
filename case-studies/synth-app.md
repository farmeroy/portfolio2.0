---
title: 'Synth-App'
---

## Overview

**Synth-App** is a musical wep app that allows users 
to play with musical tools in the browser.
It uses Tone.js, a library built upon the WebAudio API,
to create sound, loops, and timing,
and Recoil to manage state. 

At the moment, there is only one musical tool.
However, the intention is to build a series 
of musical tools the user can utilize.

With that end in mind, 
the project is built using Next.js
to allow it to scale easily to a larger app,
eventually with a login option that 
will allow users to save their work.

![synth-app screenshot](/synth-app-1.png)
![note-picker modal](/synth-app-2.png)

## Purpose/Context
I wanted to create something fun,
and also something that I could use
as a sort of harmonic metronome for 
musical practice.

With this app, the user can create a sequence
of notes/chords in rhythm, and play along.

Additionally, this sort of project will
be easily extensible, and I plan to add more
features in the future.

# Development

## Tools and Methodologies

- React/Typescript
- Next.js
- Tone.js
- Tailwind/HeadlessUI
- Recoil

### Tone.js
I had already built an [synthesizer app](https://farmeroy.github.io/Noise-Machine/) with the native WebAudio API.
One of the major issues with audio is scheduling events,
which is not easily done with JavaScript in the browser.
The [Tone.js](https://tonejs.github.io/) library, among many features, 
schedules all events along a single timeline called [Transport](https://tonejs.github.io/docs/14.7.77/Transport).
This was my primary motiviation for using this libary.
Initially, I had to iterate over 
different ideas for a sequencer,
and it tooke some time to learn how to use
Tone.js to do what I wanted. There were
further problems incorporating it with 
React, Next.js, and Recoil as well. 

### Recoil
My concept for the app was that the user could
have fine-grained control over a series of 
synthesizers, beats, and events. 
Anticipating that there might be hundres of components 
with highly individual states,
I decided to manage my state with Recoil,
which isolates individual 'atoms' of state 
*outside* of React and allows you to access
and manipulate these atoms in a very similar way
to the React `useState()`  hook.
This allows for surgical precision on state updates,
but does come at the cost of creating a sort
of graph of atomic state.
This also lead to quite a lot of complications 
when handling Tone.js events, as I will discuss later.

### Tailwind/HeadlessUI
I wanted to have a clean UI that was also accessible.
I love how Tailwind makes it easy to have consistent,
responsive styles.
Originally, I built a modal dialog for the 'Note Picker' 
with pure Tailwind. 
However, I wanted to also add a portal, 
and ensure it was accessible. 
This lead me to HeadlessUI, 
which is an unstyled, barebones
UI library built by the Tailwind team.
This is great because it allows me to have a lot of control
over the design, while also a lot of built in accessibility
support, without having to add a giant UI library like Chakra or Material.

### TypeScript
I love TypeScript. While working at Encore,
we transitioned our codebase from JavaScript to TypeScript 
and saw and immediate increase in code quality and maintability.
It is *so* much easier to create and maintain a complex codebase
when types are strictly defined. 
So I went with TypeScript. 

## Final Touches
I used Tabler-Icons-React to add some clean icons to the play button,
[coolers.io](https://coolors.co/) to help me find a nice colorscheme,
and went with a mobile-first layout.

There is still a lot I would like to do with this app, 
but as it is, it is functional and fun to play with.

# Challenges
## Tone.js
I had to spend a lot of time playing with the Tone.js API,
exploring how to use it with React/Next and my chosen state management libary.
One major challene was styling the currently active beat as the Transport timeline
progressed. 

## Recoil
I chose recoil because it allows for atomic control of state,
meaning state can be updated outside of the component tree.
A graph of dependencies can be managed so that certain atoms 
can cause state updates accross the app when necessary.
I hoped this would isolate components and ensure that only
specific parts of the DOM would rerender.
It allowed me to keep most of my central business logic for the 
synthesizer in only one tiny component (the 'start' button), 
and isolated rows of notes, ensuring minimal rerenders would occur. 
However, it does come at cognitive cost of mapping all these 
state dependencies in a graph, which I plan to do on the projects README.md.

# Conclusion
This was a sometimes frustrating but in the end satisfying project.
One key take away for me is to not over0plan and over optimise a code base.
I believe if I had begun with a simple implementation of my end goal 
in a single componenent without managing state outside of basic react hooks/props,
I might have made faster progress. Quite a few times I had to backtrack,
undo early optimisations, and rethink my entire approach.


## Credits
- Lead Developer: Raffaele Cataldo
