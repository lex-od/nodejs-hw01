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
        // removeContact("8-yj5yVJDd");
        // addContact("aaa", "bbb", "ccc");
    } catch (err) {
        console.log(err.message);
    }
})();
