import moment from 'moment';

export default (date, outputFormat, inputFormat = 'YYYY-MM-DD') => {
  moment(date, inputFormat).format(outputFormat);
};
