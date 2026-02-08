# In
## Project Overview
*In* and its sister repository *Out* together constitute something like a point-and-click game or the interactive ebook of *Out of Tales*, my first full-length, self-published book, which braids together fantasy, lay philosophy, poetry, and memoir through a funhouse mirror. In addition, it will contain supplemental material for *Of the Abandoned*, the second book in the series — this is what you'll see if you click ahead in the date picker to February. Not much there — yet! — but expect more soon.

## Features

*In* during January is a minimalist sketch of a black and white bedroom (and, for now, at least, outwardly speaking not much else). The laptop offers supremely janky personality quizzes, a photos app and a music app, weather forecasts, and — most important — a place to set the date. The books contain — well, books of varying sizes (more appear as you explore); garbage contains sketchbook pages and other garbage or "garbage" (including, recursively, the room itself); lights out usher you into a fittingly dark branching story that turns out to be shaped like a maze; and the window takes you [*Out*](https://github.com/gleameil/out). 

During February, it becomes a child's bedroom, soon with a diffrent set of books and links to new environments to explore.

## Getting Started

*In* lives at https://gleameil.github.io/in and https://gleameil.github.io/out (for now, I'd recommend starting *In*). Click around and see what happens! Check out the browser console in developer tools for a few surprises. 

It has been updated to work better on mobile, but better is not perfect. Likewise, primarily tested on Chrome but seems ok on Firefox and Safari too.

While there's no downloadable executable, if you're a curious cat who wants to run it locally, the process should be straightforward: 
1. Clone the repository
2. Install node 22.17.1 using your node version manager of choice (asdf + nodejs plugin for me)
3. Run `npm install` in the root of repo
4. Run `npm start` (also in the root)
5. open your browser to `http://localhost:1234`

## Technical Details

No game engine here, just a bunch of Typescript bundled up with Parcel and some likely questionable architectural choices that seem to be working for now. 

Implementation notes:
- Time is stored in your browser's LocalStorage along with a bit of progress info. As long as you're *In*, it progresses at the rate of real-world time, but you'll find it is also settable via the laptop.
- Most of the Creation is hardcoded in giant TypeScript objects (ew, yes), though I did export a bunch of them to JSON in case I want to port this.
- Technically as well as artistically, *In* and *Out* are perpetually a work in progress. Planned improvements on the technical side include:
  - Automated tests
  - Using my Color class to handle color throughout the app
  - (Maybe) an iOS app!

## Contributing

Not looking for contributors per se, but if you find bugs or would like improvements I'd love to hear about it. (I am one person with a day job and a ton of my own ideas for expanding this work, so no promises I'll get to any given thing, but I love the feedback.)

## Credits & Acknwoledgments

Music, art, and writing are mine apart from the public domain bits you'll find in the Anthology (book pile). Used Adobe Creative Cloud to edit music and art and MuseScore to create the music. GitHub Copilot gave me the outline for this README.

## License

Please contact me if you're interested in using any of this. I am likelier to be flexible about code than the contents of the gamem though I doubt there's anything too useful there.

## Contact & Links
itch.io: https://dreamswithopeneyes.itch.io (you will see the previous incarnation of this work, Jennie's Room, there)
Instagram: https://instagram.com/dreamswithopeneyes
Wordpress blog: https://megmoseman.com


