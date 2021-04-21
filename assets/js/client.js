/*global $, WebSocket, console, window, document*/
"use strict";

/**
 * Connects to Pi server and receives video data.
 */
var client = {

    // Connects to Pi via websocket
    connect: function (port) {
        var self = this, video = document.getElementById("video");
        var url = window.location.hostname.match(
            /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
        );
        if (url == null || url.length == 0){
            console.log('publix');
            this.socket = new WebSocket("ws://" + window.location.hostname +"/websocket");
        } else {
            console.log('local')
            this.socket = new WebSocket("ws://" + window.location.hostname +":"+port+"/websocket");
        };

        // Request the video stream once connected
        this.socket.onopen = function () {
            console.log("Connected!");
            self.readCamera();
        };

        // Currently, all returned messages are video data. However, this is
        // extensible with full-spec JSON-RPC.null
        this.socket.onmessage = function (messageEvent) {
            video.src = "data:image/jpeg;base64," + messageEvent.data;
        };
    },

    // Requests video stream
    readCamera: function () {
        this.socket.send("read_camera");
    }
};
