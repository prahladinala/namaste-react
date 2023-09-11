const { exec } = require("node:child_process");

// run the `ls` command using exec
exec(
  "mkdir namaste-react && cd namaste-react && git clone https://github.com/prahladinala/simple-react-app . && npm i",
  (err, output) => {
    // once the command has completed, the callback function is called
    if (err) {
      // log and return if we encounter an error
      console.error("could not execute command: ", err);
      return;
    }
    // log the output received from the command
    console.log(
      "Output 🚀: \n",
      output,
      "RUN COMMAND: cd namaste-react \n",
      "THEN: npm start \n",
      "YOUR REACT APP IS UP AND RUNNING: https://localhost:1234 \n"
    );
  }
);
