const fs = require("fs").promises;
const path = require("path");
const shortid = require("shortid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const getContacts = async () => JSON.parse(await fs.readFile(contactsPath));

const getContactById = async (contId) =>
    (await getContacts()).find(({ id }) => id === contId);

const removeContact = async (contId) => {
    const newContacts = (await getContacts()).filter(({ id }) => id !== contId);

    await fs.writeFile(contactsPath, JSON.stringify(newContacts));
};

const addContact = async (name, email, phone) => {
    const contacts = await getContacts();

    contacts.push({ id: shortid(), name, email, phone });

    await fs.writeFile(contactsPath, JSON.stringify(contacts));
};

module.exports = {
    getContacts,
    getContactById,
    removeContact,
    addContact,
};
