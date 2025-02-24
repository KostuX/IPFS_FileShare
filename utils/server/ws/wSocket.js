

export default class WSocket {
    constructor({address}) {

       
        if (!WSocket.instance) {
            this.  url = `ws://${address.address}:${address.port}`;
            this.connection = null;
            WSocket.instance = this;
        }

        return WSocket.instance;
    }

    connect() {
        if (!this.connection) {
            this.connection = new WebSocket(this.url);

            this.connection.onopen = () => {
                console.log('WebSocket connection opened');
            };

         
            this.connection.onclose = () => {
                console.log('WebSocket connection closed');
                this.connection = null;
            };

            this.connection.onerror = (error) => {
                console.error('WebSocket error:', error);
            };
        }
    }

    send(message) {
        this.connection.onopen = () => {
            this.connection.send(message);
        }
        
    }

    close() {
        if (this.connection) {
            this.connection.close();
        }
    }
}