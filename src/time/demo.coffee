moment = require 'moment'
# -- Common
C = require '../../common/constants'

module.exports =

  # -- Formats
  # verbose: (date) ->
  #   moment(date, 'YYYY-MM-DD').format('MMMM Do, YYYY') if date
  #
  # verboseExtended: (date) ->
  #   moment(date).format('MMMM Do, YYYY - HH:mm:ss')
  #
  # short: (date) ->
  #   moment(date).format('MMM.D')
  #
  # iso: (date) ->
  #   moment(date).format('YYYY-MM-DD')
  #
  # isoExtended: (date) ->
  #   moment(date).format('YYYY-MM-DD HH:mm:ss')
  #
  # isoHour: (date) ->
  #   moment(date).format('YYYY-MM-DD-HH')

  # isValid: (date) ->
  #   moment(date).isValid()

  # -- Ops
  # between: (start, finish, context = 'days', ceil = false) ->
  #   start = moment(start)
  #   finish = moment(finish)
  #   if ceil
  #     start = start.startOf(context)
  #     finish = finish.endOf(context)
  #   finish.diff start, context, ceil

  # subtract: (date, value, context = 'days') ->
  #   moment(date).subtract(value, context)

  range: (value) ->
    weekday = moment.utc().day()
    dates = from: moment.utc(), to: moment.utc()
    switch value
      when 'yesterday'
        dates =
          from: moment().subtract(1, 'day'),
          to: moment().subtract(1, 'day')
      when 'last_7_days'
        dates.from = moment().subtract(1, 'week')
        dates.to = moment().subtract(1, 'day')
      when 'last_30_days'
        dates.from = moment().subtract(1, 'month')
        dates.to = moment().subtract(1, 'day')
      when 'this_month'
        dates.from = moment.utc().startOf 'month'
      when 'this_year'
        dates.from = moment.utc().startOf 'year'
      when 'last_month'
        dates.from = moment().subtract(1, 'month').startOf 'month'
        dates.to = moment().subtract(1, 'month').endOf 'month'
    dates =
      from: dates.from.format 'YYYY-MM-DD'
      to: dates.to.format 'YYYY-MM-DD'

  consolidate: (form = {}) ->
    if form.date? and form.date isnt C.EMPTY_STRING
      dates = @range form.date
      form.from = dates.from
      form.to = dates.to
    form.to = form.from if form.to < form.from
    form

  limit: (value, context = 'days', limit = 0) ->
    floor = @iso moment().subtract(limit, context)
    if value < floor then floor else value

  isRecent: (date) ->
    moment(date) >= moment().subtract(1, 'month')

  delay: (date) ->
    moment(date).fromNow()
