const {
    getContacts,
    getContactById,
    removeContact,
    addContact,
} = require("./contacts");

(async () => {
    try {
        // console.log(await getContacts());
        // console.log(await getContactById(9));
    } catch (err) {
        console.log(err.message);
    }
})();
