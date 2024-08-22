function sendEmail(to, subject, body, from) {
    // Sending logic
}

function scheduleEmail(to, subject, body, from, time) {
    // Scheduling logic
}


/**
 * Solution: Encapsulate the clumps into an object
Group related data together into an object, making the API cleaner.
 * 
 */

class Email {
    constructor(to, subject, body, from) {
        this.to = to;
        this.subject = subject;
        this.body = body;
        this.from = from;
    }
}

function sendEmail(email) {
    // Sending logic
}

function scheduleEmail(email, time) {
    // Scheduling logic
}

const email = new Email('john@example.com', 'Hello', 'How are you?', 'me@example.com');
sendEmail(email);
scheduleEmail(email, '2024-08-22 10:00');
