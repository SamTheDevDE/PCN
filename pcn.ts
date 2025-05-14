function startServer(): void {
    rednet.open("right");
    print("Rednet server started. Waiting for messages...");
    while (true) {
        const [senderID, message] = rednet.receive();
        print(`Received from ${senderID}: ${message}`);
    }
}

function startClient(targetID: number, message: string): void {
    rednet.open("right");
    rednet.send(targetID, message);
    print(`Message sent to ID ${targetID}: ${message}`);
}

// Main logic
const args = process.argv ? process.argv.slice(2) : (_G["arg"] || []);
const mode = args[0];

if (mode === "--server") {
    startServer();
} else if (mode === "--client") {
    const targetID = tonumber(args[1]);
    const message = args[2] || "Hello from client!";
    if (targetID) {
        startClient(targetID, message);
    } else {
        print("Usage: rednet --client <targetID> <message>");
    }
} else {
    print('Invalid argument. Please use "--server" or "--client".');
}