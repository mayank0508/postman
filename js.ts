// List of policy numbers
const policyNumbers = ["567888", "123456", "789012", "345678", "901234", "567890", "112233", "445566", "778899", "990011"];

// Get the current policy number from the collection variables
let currentPolicyNumber = pm.collectionVariables.get("currentPolicyNumber");

// If the currentPolicyNumber is not set, start with the first policy number
if (!currentPolicyNumber) {
    pm.collectionVariables.set("currentPolicyNumber", policyNumbers[0]);
    pm.collectionVariables.set("currentIndex", 0);
} else {
    // Increment the index to get the next policy number
    let currentIndex = pm.collectionVariables.get("currentIndex");
    currentIndex = (currentIndex + 1) % policyNumbers.length; // Loop back to the start if needed
    pm.collectionVariables.set("currentPolicyNumber", policyNumbers[currentIndex]);
    pm.collectionVariables.set("currentIndex", currentIndex);
}

// Set the policyNumber variable for the request
pm.variables.set("policyNumber", pm.collectionVariables.get("currentPolicyNumber"));