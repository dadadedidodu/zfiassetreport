sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"zfiassetreport/test/integration/pages/AssetList.gen",
	"zfiassetreport/test/integration/pages/AssetObjectPage.gen"
], function (JourneyRunner, AssetListGenerated, AssetObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('zfiassetreport') + '/test/flp.html#app-preview',
        pages: {
			onTheAssetListGenerated: AssetListGenerated,
			onTheAssetObjectPageGenerated: AssetObjectPageGenerated
        },
        async: true
    });

    return runner;
});

