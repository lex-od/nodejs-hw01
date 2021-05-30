const fs = require("fs").promises;
const path = require("path");
const shortid = require("shortid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const getContacts = async () => JSON.parse(await fs.readFile(contactsPath));

const getContactById = async (contId) => {
    const contact = (await getContacts()).find(({ id }) => id === contId);

    if (!contact) throw new Error("Contact with requested ID was not found.");

    return contact;
};

const removeContact = async (contId) => {
    const contacts = await getContacts();
    const newContacts = contacts.filter(({ id }) => id !== contId);

    if (contacts.length === newContacts.length)
        throw new Error("Impossible to delete contact. ID was not found.");

    await fs.writeFile(contactsPath, JSON.stringify(newContacts));
};

const addContact = async (name, email, phone = "") => {
    if (!name || !email)
        throw new Error("Impossible to add contact. Name, email is required.");

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
