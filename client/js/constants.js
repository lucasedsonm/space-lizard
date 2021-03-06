// Global scope constants object
const constants = {
    spaceColor: "black",
    shipColor: "darkgreen",
    canvasDimensions: [1000, 800],
    canvasId: "space-lizard-canvas",
    editTextId: "space-lizard-text",
    webSocketAddress: "ws://192.168.1.50:1234",
    initScript: "" 
    + "// Use the provided \"vars\" instance to access read-only ship parameters."
    + "\r\n" + "// Set the value for torque and thrust to be sent to the ship's brain."
    + "\r\n" + "// The ship's brain can also be used to store variables between method calls."
    + "\r\n" + "brain.torque = -0.00; "
    + "\r\n" + "brain.thrust = 0.00;",
}