/*globals define*/
/*jshint node:true, browser:true*/

/**
* Generated by PluginGenerator from webgme on Wed Mar 11 2015 17:57:33 GMT-0500 (Central Daylight Time).
*/

define(['plugin/PluginConfig', 'plugin/PluginBase', 'plugin/NewPlugin/NewPlugin/meta'], function (PluginConfig, PluginBase, MetaTypes) {
    'use strict';

    /**
    * Initializes a new instance of NewPlugin.
    * @class
    * @augments {PluginBase}
    * @classdesc This class represents the plugin NewPlugin.
    * @constructor
    */
    var NewPlugin = function () {
        // Call base class' constructor.
        PluginBase.call(this);
        this.metaTypes = MetaTypes;
    };

    // Prototypal inheritance from PluginBase.
    NewPlugin.prototype = Object.create(PluginBase.prototype);
    NewPlugin.prototype.constructor = NewPlugin;

    /**
    * Gets the name of the NewPlugin.
    * @returns {string} The name of the plugin.
    * @public
    */
    NewPlugin.prototype.getName = function () {
        return 'New Plugin';
    };

    /**
    * Gets the semantic version (semver.org) of the NewPlugin.
    * @returns {string} The version of the plugin.
    * @public
    */
    NewPlugin.prototype.getVersion = function () {
        return '0.1.0';
    };

    /**
    * Main function for the plugin to execute. This will perform the execution.
    * Notes:
    * - Always log with the provided logger.[error,warning,info,debug].
    * - Do NOT put any user interaction logic UI, etc. inside this method.
    * - callback always has to be called even if error happened.
    *
    * @param {function(string, plugin.PluginResult)} callback - the result callback
    */
    NewPlugin.prototype.main = function (callback) {
        // Use self to access core, project, result, logger etc from PluginBase.
        // These are all instantiated at this point.
        var self = this;
        self.updateMETA(self.metaTypes);
        // Using the logger.
        self.logger.info('This is a debug message.');
        self.logger.info('This is an info message.');
        self.logger.warning('This is a warning message.');
        self.logger.error('This is an error message.');

        // This will save the changes. If you don't want to save;
        // exclude self.save and call callback directly from this scope.
        self.result.setSuccess(true);
        self.save('added obj', function (err) {
            callback(null, self.result);
        });

    };

    return NewPlugin;
});