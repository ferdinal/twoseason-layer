'use strict'

exports.handler = function (event, context, callback) {
  console.log(JSON.stringify(`Event: event`))
  callback(null, {
    statusCode: 200,
    body: 'OK'
  })
}