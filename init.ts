import { join, resolve } from "https://deno.land/std@0.140.0/path/mod.ts";

// curl -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/denoland/examples/contents/with-eleventy
const gitHubContentsApiUrl =
  "https://api.github.com/repositories/493838917/contents/";
const HELP = `Scaffold a starter example project:
  deno run --allow-net --allow-read --allow-write --no-check https://raw.githubusercontent.com/denoland/examples/main/init.ts with-<example> <path/to/destination>

Learn more about starter example projects here: https://github.com/denoland/examples
`;

/**
 * Print help.
 */

function printHelp() {
  console.log(HELP);
  Deno.exit(0);
}

/**
 * Get directory object from GitHub API.
 */

async function getExampleObj(path: string) {
  const res = await fetch(gitHubContentsApiUrl);
  const contents = await res.json();
  return contents.filter((dir) => dir.path === path)[0];
}

/**
 * Strip top level directory from path in GitHub contents object.
 */

function getSubPath(path: string, example: string) {
  if (!path.includes(example)) {
    throw Error(`Path "${path}" does not include ${example}.`);
  }
  return path.substring(example.length);
}

/**
 *  TODO
 */

async function init(example: string, directory: string) {
  directory = resolve(directory);

  console.log(`Setting up "${example}" in ${directory}...`);
  try {
    const dir = [...Deno.readDirSync(directory)];
    if (dir.length > 0) {
      const confirmed = confirm(
        `You are trying to scaffold "${example}" in an non-empty directory, do you want to continue?`,
      );
      if (!confirmed) {
        throw new Error("Directory is not empty, aborting.");
      }
    }
  } catch (err) {
    if (!(err instanceof Deno.errors.NotFound)) {
      throw err;
    }
  }

  // Get the example subdirectory API URL.
  const exampleObj = await getExampleObj(example);
  if (!exampleObj) {
    throw Error(`Example subdirectory "${example}" not found in repo.`);
  }

  // Make main directory.
  await Deno.mkdir(join(directory), example);

  // Get all items in subdirectory.
  const res = await fetch(exampleObj.url);
  const items = await res.json();

  // Iterate through items.
  for (const item of items) {
    if (item.type === "dir") {
      const path = join(directory, getSubPath(item.path, example));
      console.log(`Making directory ${path}...`);
      await Deno.mkdir(path, { recursive: true });
      const resp = await fetch(item.url);
      const subItems = await resp.json();
      items.push(...subItems);
    } else if (item.type === "file") {
      const resp = await fetch(item.download_url);
      const text = await resp.text();
      const path = join(directory, getSubPath(item.path, example));
      console.log(`Writing file to ${path}...`);
      await Deno.writeTextFile(path, text);
    } else {
      console.log("This item is not a file nor a directory.");
      console.log(item);
    }
  }
}

/**
 * Main.
 */

if (import.meta.main) {
  if (Deno.args.includes("-h") || Deno.args.includes("--help")) {
    printHelp();
  }

  const example = Deno.args[0];
  const directory = Deno.args[1];
  if (directory == null || example == null) {
    throw new Error(
      "Missing example and destination path. Try -h or --help to view instructions.",
    );
  }

  await init(example, directory);
  console.log("Done!");
} else {
  throw new Error("This module is meant to be executed as a CLI.");
}
