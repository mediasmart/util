import moment from 'moment';

export default (start, finish, context = 'days', ceil = false) => {
  start = moment(start);
  finish = moment(finish);

  if (ceil) {
    start = start.startOf(context);
    finish = finish.endOf(context);
  }

  return finish.diff(start, context, ceil);
};
