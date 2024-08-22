function createUser(name, age, email, address, phone) {
    return { name, age, email, address, phone };
}

/**
   Solution: Create specific classes
   Encapsulate related properties into meaningful objects.
 */

class User {
    constructor(name, age, contactInfo) {
        this.name = name;
        this.age = age;
        this.contactInfo = contactInfo;
    }
}

class ContactInfo {
    constructor(email, address, phone) {
        this.email = email;
        this.address = address;
        this.phone = phone;
    }
}

const contactInfo = new ContactInfo('john.doe@example.com', '123 Main St', '555-1234');
const user = new User('John Doe', 30, contactInfo);
