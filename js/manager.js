'use strict';

module.exports = function (oAppData) {
	var App = require('%PathToCoreWebclientModule%/js/App.js');
	
	if (App.getUserRole() === Enums.UserRole.NormalUser || App.getUserRole() === Enums.UserRole.Customer)
	{
		return {
			/**
			 * Runs before application start. Subscribes to the event before post displaying.
			 * 
			 * @param {Object} ModulesManager
			 */
			start: function (ModulesManager) {
				var App = require('%PathToCoreWebclientModule%/js/App.js');

				App.subscribeEvent('SimpleChat::DisplayPost::before', function (oParameters) {
					oParameters.Post.displayText = oParameters.Post.text.replace(new RegExp(':[)]','g'), '&#128522;');
				});
			}
		};
	}
	
	return null;
};
