'use strict';

/**
 * my-workout service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-workout.my-workout');
