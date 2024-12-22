'use strict';

/**
 * pre-loaded-workout service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pre-loaded-workout.pre-loaded-workout');
