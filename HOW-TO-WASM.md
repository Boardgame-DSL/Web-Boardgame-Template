## UI Development

The UI side of this project is targeting the web by compiling the Haskell code
to WASM with [asterius](https://github.com/tweag/asterius/).

All the following instructions assumes that the current directory is in the
[`model`](./model/).

### Setup

The easies way to use asterius is with their prebuilt docker container, here is
how you do it:

1. Firstly you need to install docker, just follow the instructions from
   [docker docs](https://docs.docker.com/get-docker/).
2. Once docker is up and running, run the asterius container with the following
   command
   ```sh
   docker run -it -v $(pwd):/workspace -w /workspace --name asterius terrorjack/asterius
   ```
   Where `$(pwd)` is the absolute path to this directory. Docker will mount this
   directory to the "workspace", where you can use all the Asterius commands.  
   When you want to use this container the next time, simply use the following
   docker command
   ```sh
   docker start -i asterius
   ```

### Building

Well up and running, you should use `ahc-cabal` instead of `cabal` to compile
the project, we've also have a flag for activating the WASM features.
Building the executable should look like this now:
```sh
ahc-cabal new-build --flags="wasm"
```

But building targeting WASM doesn't actually get us anything useful. To
transform the output to `.wasm` and `.js` you can use `ahc-dist`. Run the
following command:
```sh
ahc-dist --browser --bundle \
	--input-exe /absolute/path/to/boardgame \
	--output-directory /absolute/path/to/existing/out-directory
```
The `--input-exe` is the path to the output of building the project, it is
listed last in the output of the `ahc-cabal new-build` command. The output
directory needs to be absolute, bu remember that we're in a docker container,
meaning a path such as `/workspace/web` refers to `./web` (relative to where you
ran the `docker run` command).

In your output directory you'll now find a `.wasm` and a `.js` file, with the
name of your project (if unchanged "Web-Boardgame-Template"). Move these files
to the `dist` folder of the view project (from project root `./view/dist/`), and
start the UI development. The template `index.html` has a `script` tag for the
`.js` file already but it assumes the full name of the file is `boardgame.js`,
change this to the name of your file.
