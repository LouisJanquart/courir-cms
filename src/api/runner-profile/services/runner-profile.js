'use strict';

/**
 * runner-profile service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::runner-profile.runner-profile');
