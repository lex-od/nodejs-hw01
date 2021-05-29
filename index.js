const {
    getContacts,
    getContactById,
    removeContact,
    addContact,
} = require("./contacts");

(async () => {
    try {
        // console.log(await getContacts());
    } catch (err) {
        console.log(err.message);
    }
})();
