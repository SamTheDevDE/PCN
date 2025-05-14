import * as event from "./event";

// Wait for a key event
print("Press any key...");
const keyEvent = event.pullEventAs(event.KeyEvent, "key");
if (keyEvent) {
    print("You pressed key code: " + keyEvent.key);
} else {
    print("No key event received.");
}