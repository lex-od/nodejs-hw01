const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function getContacts() {
    const buffer = await fs.readFile(contactsPath);
    contacts = JSON.parse(buffer);

    return contacts;
}

function getContactById(contactId) {
    // ...твой код
}

function removeContact(contactId) {
    // ...твой код
}

function addContact(name, email, phone) {
    // ...твой код
}

module.exports = {
    getContacts,
    getContactById,
    removeContact,
    addContact,
};
