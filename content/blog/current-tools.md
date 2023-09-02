---
title: "Current Tools"
date: 2023-09-01T20:31:50-04:00
draft: false
---


Given the start of the year and some recent changes to my desktop environment I thought a summation of my current software tools and why I use them might be of use / interest.  As a programmer you build up a stack of tools you like and some you hate. There are no right or wrong answers here this is just what I prefer. 

My goal in settings up my environment is to make the process of using my computer efficient and enjoyable. These are the tools I use to do that. 

## Browser: Vivaldi

The [vast majority of people use Chrome](https://en.wikipedia.org/wiki/Usage_share_of_web_browsers#/media/File:StatCounter-browser-ww-monthly-202011-202011-bar.png) or at least something Chromium based. I for a long time was one of the exceptions to the rule, dying on the Firefox hill. My motivation was to not support the seemingly inevitable take over of Chrome and to hold onto what sliver of privacy I still hold. Chrome and chromium derived browsers great browsers and but I think having more than just Chromium based browsers is good for the internet as a whole. [A competitive market  s good](https://arstechnica.com/gadgets/2023/07/googles-web-integrity-api-sounds-like-drm-for-the-web/) for keeping the internet open. I still use Firefox on mobile and on desktop at times but I have succumbed to the Chromium wave.  (Firefox is better for CSS development in my opinion).  

One of the key reasons is UMD uses the DUO api for 2 factor authentication and when using Firefox often I got a `403` which never happens on Chromium based browsers. 

I now use [Vivaldi](https://vivaldi.com) for its customization and because its Chromium based but is not Chrome. I can also log into my UMD accounts without trouble. Some things I like, pined tabs, workspaces, minimal extra stuff around the window, and enough ability to make everything just the way I want. Things I don't like, to many pop-ups, takes a long time to configure, and it feels a little heavy at times. Fair warn, if you have a config you like and sync it pulls from the cloud and overwrite your local setup without the option to mix and match. Also if they had the ability to have pined tabs throughout all workspace I think it would be a game changer. I look forward to what they develop in the future. 

![Vivaldi Config](/imgs/vivaldi-config.png "vivaldi confg")

## OS: Pop-os

I dual boot windows on a smaller separate SSD. My [Pop-OS](https://pop.system76.com) install is on another drive which also contains a partition which I use as a shared space between windows and Linux which saves a lot of time. Having seamless-ish access to files across operating systems on one device means that device still feels like only one even when dual booting. I will go into my Window Manager later but for the most part I stay out of the GNOME wm. 

A clear question is  "why pop-os?". Its mainly meant for games and in all honestly I don't play many these days. The reason I use it is because I got a OMEN 15-en0000ns refurbished from micro center and it uses AMD integrated graphics with a dedicated 1660 Ti. I don't have the expedience or motivation to figure out how to balance NVIDIA dedicated graphics and AMD integrated graphics. NVIDIA graphics drivers on Linux are bad enough on their own. But Pop-OS has the most impressive graphics management I have seen on any distro, also Pop-OS lets me use my full sized HDMI port (after a restart). Overall compared to the pain it was to figure out before Pop-OS's graphics management makes it well work the effort. 

Also its based on Ubuntu which makes life easy when it comes to support. I at times prefer Debian or Arch to tinker but when I want to do home work my computer just has to function with as little intervention as possible.

## Terminal Emulator: Alacritty

Currently [Alacritty](https://alacritty.org) is my terminal of choice. Why? its speed peaked my interest. To be honest what matters most for a Terminal emulator is if it works for you. I used to use [Kitty](https://sw.kovidgoyal.net/kitty/overview/) because its GPU acceleration sounded interesting and its keyboard orientated config but I think at one point I ran into a issue I did not feel like fixing. Also there is [Terminator](https://github.com/software-jessies-org/jessies/wiki/Terminator) which I start with, its reliable and gets the job done. At the end of the day I just switch to scratch curiosity's itch.  Pick a terminal and stick with it, if you need a different feature switch.


## Window Manager: I3

My main motivation for a configurable WM is the same as most peoples to use the mouse less and work faster (and it makes me feel like a hollywood hacker). I use [I3](https://i3wm.org) mostly for simplicity and access to donation. My first rice used [BSPWM](https://github.com/baskerville/bspwm) which I have nothing against. I just now find it simpler to install and configure I3. Specifically I3 bar does its job well and I don't need to deal with  [Polybar](https://github.com/polybar/polybar).  Also I prefer I3's built in method of creating shortcuts over [sxhkd](https://man.archlinux.org/man/sxhkd.1). Something else I have some to appreciate is once you get the hang of I3 is gives a slightly speedier control. There may be a way to get behavior like Horizontal windows in a Stacked group of other windows in BSPWM but I find it more intuitive in i3.

![I3](/imgs/i3-config.png "window manager")

## Text Editor: NVIM/VIM

By no means am I a VIM power user but I can get around pretty well. My VIM config is nothing fancy but it gets the job done. There was a time where me and VIM plug we close but then VIM started to take 30 seconds to open and close. I do not use VIM and configure my own WM to have enough time to get a snack between hitting enter and being able to edit a file. My plain is to add more to my config as needed but not to go all out like I did last time.

## Terminal Multiplexer: tmux

[Tmux](https://github.com/tmux/tmux/wiki) works and although screen is good to I always return to tmux. I do add vim-like key binds to take advantage of my muscle memory. 

## IDE: VS code

[VS Code](https://code.visualstudio.com) is open source well supported and FREE! The extensions make it a very flexible environment so I can do both low-level and high-level stuff in the same environment. I use a VIM extension and a few others but this is not the place to discuss that in detail.  I am not the most effective  in VSCode but when I need it its tried and true. 

## Note Taking: Obsidian

I used to take notes with Markdown in VSCode with a extension to automatically generate  the live output. This worked for most of high school when taking digital notes. However I was always looking for something better. I had a few parameters, it still had to be markdown, it had to take notes it better than VSCode, it had to feel good to use, and I needed to be able to move my notes away from the application easily. [Obsidian](https://obsidian.md) dose this and more. If you are looking for a way to improve your note taking I cannot speak highly enough about Obsidian. Its a polished free app that takes notes in peer mark down and allows to organize them as you see fit. It also supports Latex with MathJax so math notes are not a problem. My goal is to create effectively a knowledge base in Obsidian on everything I know. Also all you notes are just stored as `.md` in your file system so they are easy to move around. As we speak I am writing this in Obsidian. Its also got a very impressive graph feature to show relationships between notes. I can't go into more detail here but it is a excellent program. 


## Conclusiton

Hopefully some of the insight here is useful. Coinciding with  post this I have updated my [dot-files on github](https://github.com/O-Despo/dot-files). 
