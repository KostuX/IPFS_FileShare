export default class WebSocketDownloader {
    constructor(url) {
        this.url = url;
        this.connection = null;
    }

    connect() {
        if (!this.connection) {
            this.connection = new WebSocket(this.url);

            this.connection.onopen = () => {
                console.log('WebSocket connection opened');
            };

            this.connection.onmessage = (event) => {
                this.handleMessage(event);
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

    sendRequest(requestData) {
        if (this.connection && this.connection.readyState === WebSocket.OPEN) {
            this.connection.send(JSON.stringify(requestData));
        } else {
            console.error('WebSocket is not open. Unable to send request');
        }
    }

    handleMessage(event) {
        const data = event.data;
        const blob = new Blob([data], { type: 'application/octet-stream' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'downloaded_file';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        console.log('File downloaded');
    }

    close() {
        if (this.connection) {
            this.connection.close();
        }
    }
}