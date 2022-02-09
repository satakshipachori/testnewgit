/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["project1tesgit/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
