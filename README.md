# SETUP TERMINAL ENV #

## Configuring Fonts ##
Fira Code is one of the coolest fonts out there because it supports math symbols in terminal.

Go to https://github.com/tonsky/FiraCode/releases/download/5.2/Fira_Code_v5.2.zip to download the Fira Code font.
	- Extract the archive and go to the `ttf` directory
	- Then follow the instructions here specific to your OS to install the fonts
		- https://github.com/tonsky/FiraCode/wiki/Installing
		- It should be as simple as right clicking and pressing "install font" for the few font-types

## Configuring HYPER ##
Hyper Installation: https://hyper.is/#installation
	- Choose the appropriate installation file

Find the `.hyper.js` file
	- Most OS's located at root directory (and is hidden, so use `ls -A` or similar)

How the `hyper.js` configuration file works is pretty straightforward:
	- things like `fontSize` and `fontFamily` can be changed and scrolling down, you'll see a place to change colors
	- my config file already has the Fira Code font included so you don't have to add it in, but you can see where it was added

Replace your .hyper.js file with my config file and reload Hyper.js (quit out and open)
	- Colors should be changed, but prompt should still be the same as it was before
	- Font should also be changed
		- I enabled ligatures in my config file, so after you reload, try typing echo "=/=" and you'll see it instantly turn into a math symbol!
			- Stuff like "==>" and "-->" and "{|" and "===" are all results of Fira Code's Ligature support.

I prefer editing my own colors in the config file, as you can see in the list of Hex values, but another way to change the look is to use themes.
	- Try out `hyper i hyper-one-dark` to see a new look.
	- `hyper u hyper-one-dark` uninstalls the `hyper-one-dark` plugin and reverst it back to normal.

I already put in a couple of plugins into the config file such as `hyper-search`, `hyper-pane`, and `hypercwd` which I like.

## Configuring Starship ##
Here is where the prompt and organization of shell changes.

Go to https://github.com/starship/starship#-installation and check out how to install Starship for your OS.
	- Note that there are also ways to activate it depending on which shell you use: `bash`, `zsh`, `fish`, etc.

I'm using `bash` right now, so I can't test cool `zsh` features like syntax-highlighting and autosuggestion, but you can add those on for customization of `zsh` shell.

## Future Steps ##
Don't forget to add your aliases and other shell-specific additions for further customization.


