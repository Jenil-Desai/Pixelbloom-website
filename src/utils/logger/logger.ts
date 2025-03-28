import chalk from "chalk";

enum LogLevel {
    ERROR = "error",
    INFO = "info",
    SUCCESS = "success",
}

const log = (level: LogLevel, message: string) => {
    let color = chalk.gray;

    switch (level) {
        case LogLevel.ERROR:
            color = chalk.red.bold;
            break;
        case LogLevel.INFO:
            color = chalk.cyan;
            break;
        case LogLevel.SUCCESS:
            color = chalk.green.bold;
            break;
    }

    const timestamp = new Date().toISOString();
    console.log(color(`[${timestamp}] ${level.toUpperCase()}: ${message}`));
};

export const logger = {
    error: (message: string) => log(LogLevel.ERROR, message),
    info: (message: string) => log(LogLevel.INFO, message),
    success: (message: string) => log(LogLevel.SUCCESS, message),
};