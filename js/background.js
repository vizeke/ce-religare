// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(( tab ) => {
    // No tabs or host permissions needed!
    chrome.tabs.executeScript( {
        code: 'new WhatsApp()'
    } );
} );