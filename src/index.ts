const { exec } = require("child_process");
const path = require("path");
const chapter = process.argv.slice(2);
exec(
  `node chapter${chapter}`,
  { cwd: path.join(process.cwd(), "built") },
  (err: any, stdout: any, stderr: any) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`运行chapter${chapter}输出：\n ${stdout}`);
  }
);
// console.log("result", result);
