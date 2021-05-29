const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const getContacts = async () => JSON.parse(await fs.readFile(contactsPath));

const getContactById = async (contId) =>
    (await getContacts()).find(({ id }) => id === contId);

const removeContact = async (contId) => {
    const newContacts = (await getContacts()).filter(({ id }) => id !== contId);

    fs.writeFile(contactsPath, JSON.stringify(newContacts));
};

async function addContact(name, email, phone) {
    // ...твой код
}

module.exports = {
    getContacts,
    getContactById,
    removeContact,
    addContact,
};
