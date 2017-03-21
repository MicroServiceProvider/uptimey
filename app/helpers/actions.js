const _ = require('lodash');
const $ = require('jquery');
const common = require('./common');

module.export = {
    /**
     * Register an action
     * @param {Object} options
     */
    register(options) {
        _.bindAll(this);

        this[options.ev](options.selector);
    },

    /**
     * Copy action
     * @param {String} selector
     */
    copy(selector) {
        $(selector).find('.copy-action').on('click', function() {
            let element = $(this).parent().find('.data-value');

            common.copyToClipboard(element[0]);
        });
    }
};