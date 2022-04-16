const jobs = require("./jobs.js");
const { join } = require("path");
const { existsSync, statSync, readFileSync, writeFileSync } = require("fs");
const { execSync } = require("child_process");

const dryRun = false;
const output = true;

const stats = [];
const oldStatsPath = join(__dirname, ".cache");
let oldStats = false;
if (existsSync(oldStatsPath)) {
  oldStats = JSON.parse(readFileSync(oldStatsPath).toString());
}

// prettier-ignore
for (const job of jobs) {
  const [width, filename] = job;
  const inkscape = filename.replace(/\.svg$/, ".inkscape.svg");
  if (existsSync(inkscape)) {
    const scaled = filename.replace(/\.svg$/, ".scaled.svg");
    const stat = statSync(inkscape);
    stats.push({
      name: inkscape,
      mtime: stat.mtimeMs
    });

    let valid = true;
    if (oldStats) {
      const entry = oldStats.find(({ name }) => inkscape === name);
      if (entry) {
        if (entry.mtime >= stat.mtimeMs) {
          valid = false;
        }
      }
    }
    if (valid) {
      run(`rsvg-convert ${inkscape} -w ${width} -f svg -o ${scaled}`, dryRun, output);
      run(
        `scour -i ${scaled} -o ${filename} --enable-id-stripping --enable-comment-stripping --shorten-ids --indent=none`,
        dryRun,
        output
      );
      run(`rm ${scaled}`);
    }
  } else {
    console.error("File missing: " + filename);
  }
}

// console.log(stats);
writeFileSync(oldStatsPath, JSON.stringify(stats, null, 2));

function run(cmd, dryRun = false, output = true) {
  if (output) console.log(cmd);
  if (!dryRun) {
    const stdout = execSync(cmd);
    if (output) console.log(stdout.toString());
  }
}
