class WhatsApp {
    constructor() {
        this.init();
    }

    get loaded () {
        return this.chatlist.length > 0;
    }

    init () {
        console.log( 'init' );
        this.chatlist = $( '.chatlist-panel-body .infinite-list-viewport div' );
        if ( !this.loaded ) {
            setTimeout( this.init, 5000 );
        } else {
            console.log( 'Religare activated' );
            this.addTestButton();
        }
    }

    addTestButton () {
        const button = $( '<button id="teste-send-message">SM</button>' );
        button.on( 'click', this.testClick.bind( this ) );
        $( '.pane-list-controls div.menu.menu-horizontal > span' ).prepend( button );
    }

    testClick ( e ) {
        this.sendMessage( 'dornellas' );
    }

    sendMessage ( id ) {
        console.log( 'send message: ' + id );
        $( '.chat-main' ).click();
    }
}