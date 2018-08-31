/*const winston = require('winston');
const moment = require('moment');
const { format } = require('logform');

class Logger {

  constructor(LOGGER_CONFIG) {
    this.LOGGER_CONFIG = LOGGER_CONFIG;
    this.transportsBuilder();
    //if (process.env.NODE_ENV !== 'production') 
    this.activateConsoleLogger();
    return winston;
  }

  formatBuilder(formatConfig = this.LOGGER_CONFIG.FORMAT) {
    return format.combine(
      format.timestamp({
        format: () => moment().locale('es').format(formatConfig.dateFormat),
      }),
      format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    );
  }

  //info, warn,error,
  transportsBuilder(files = this.LOGGER_CONFIG.FILES) {
    files.forEach(file => {
      if (file.disabled) return;
      winston.add(
        new winston.transports.File({
          filename: file.filename,
          level: file.level,
          format: this.formatBuilder(),
        })
      );
    });
  }

  activateConsoleLogger(consoleConfig = this.LOGGER_CONFIG.CONSOLE) {
    if (consoleConfig.disabled) return;
    winston.add(new winston.transports.Console({
      level: consoleConfig.level,
      colorize: true,
      format: this.formatBuilder(),
    }));
  }
}

module.exports = (config) => new Logger(config);

/*
EJEMPLO DE CONFIGURACIÓN

"LOG": {
  "FORMAT": {
    "dateFormat": "LLLL"
  },
  "FILES": [{
    "filename": "./logs/info.log",  carpeta raíz
    "level": "info",
    "disabled": false
  }],
  "CONSOLE": {
    "level": "info",
    "disabled": false
  }
}
*/
