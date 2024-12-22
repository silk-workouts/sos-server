'use strict';

/**
 * all-workout service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::all-workout.all-workout');
