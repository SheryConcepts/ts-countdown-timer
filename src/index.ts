const clearLastLine = () => {
  process.stdout.moveCursor(0, -1) // up one line
  process.stdout.clearLine(1) // from cursor to end
}

let duration: number = Number(process.argv[2]) * 60;
if (typeof Number(process.argv[2]) === "number") {
    let interval = setInterval(() => {
        if (duration > 0) {
            let minutes = Math.floor(duration/ 60);
            let seconds = duration % 60;
            clearLastLine();
            process.stdout.write(`${minutes} min ::: ${seconds} sec\n`)
            duration = duration - 1
        } else {
            clearInterval(interval);
            console.log("Timer Finished")
        }
    }, 1000)
} else {
    console.error("please enter a number")
}