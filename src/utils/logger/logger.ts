import chalk from "chalk";

enum LogLevel {
    ERROR = "error",
    INFO = "info",
    SUCCESS = "success",
}

const log = (level: LogLevel, message: string, ...args: unknown[]) => {
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
    console.log(color(`[${timestamp}] ${level.toUpperCase()}: ${message}`), ...args);
};

export const logger = {
    error: (message: string, ...args: unknown[]) => log(LogLevel.ERROR, message, ...args),
    info: (message: string, ...args: unknown[]) => log(LogLevel.INFO, message, ...args),
    success: (message: string, ...args: unknown[]) => log(LogLevel.SUCCESS, message, ...args),
};