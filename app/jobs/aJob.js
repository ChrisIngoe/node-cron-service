'use strict';

const CronJob = require('cron').CronJob,
    config = require('config');

exports.startCronJob = function(){
    console.log(`aJob schedule=${config.get('job.aJob.scheduleInterval')}`);
    new CronJob(config.get('job.aJob.scheduleInterval'), function(){
        console.log('aJob job started at: ' + new Date());
        processUpdates();
    }, null, true, 'Europe/London');
};

exports.processUpdates = processUpdates;

function processUpdates(){
    console.log(`aJob started at: ${new Date()}`);
}
