const argv = require("yargs").argv;

const {
    getContacts,
    getContactById,
    removeContact,
    addContact,
} = require("./contacts");

(async ({ action = "list", id, name, email, phone }) => {
    try {
        switch (action) {
            case "list":
                console.table(await getContacts());
                break;

            case "get":
                console.table(await getContactById(id));
                break;

            case "add":
                await addContact(name, email, phone);
                console.log("Contact successfully added.");
                break;

            case "remove":
                await removeContact(id);
                console.log("Contact successfully removed.");
                break;

            default:
                console.warn("\x1B[31m Unknown action type!");
        }
    } catch (err) {
        console.log(err.name, err.message);
    }
})(argv);
