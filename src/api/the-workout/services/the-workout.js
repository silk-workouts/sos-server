'use strict';

/**
 * the-workout service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::the-workout.the-workout');
