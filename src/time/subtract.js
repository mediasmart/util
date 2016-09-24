import moment from 'moment';

export default (date, value, context = 'days') => moment(date).subtract(value, context);
