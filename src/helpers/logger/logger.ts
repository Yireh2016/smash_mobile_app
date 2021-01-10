interface loggerInterface {
  obj?: any;
  type?: 'error' | 'info';
  str?: string;
}
const logger: (arg0: loggerInterface) => void = ({
  obj = {},
  type = 'info',
  str = '',
}) => {
  if (process.env.NODE_ENV?.match('development')) {
    switch (type) {
      case 'info':
        console.log(str, obj);
        break;
      case 'error':
        console.error(str, obj);
        break;
      default:
        console.log(str, obj);
        break;
    }
  }
};

export default logger;
