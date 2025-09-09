
// contact.ts
interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
}

class ContactManager {
    private contacts: Contact[] = [];

    addContact(contact: Contact): void {
        if (this.contacts.some(c => c.id === contact.id)) {
            console.error(`❌ Contact with ID ${contact.id} already exists.`);
            return;
        }
        this.contacts.push(contact);
        console.log(`✅ Contact "${contact.name}" added successfully.`);
    }

    viewContacts(): Contact[] {
        return this.contacts;
    }

    modifyContact(id: number, updatedContact: Partial<Contact>): void {
        const index = this.contacts.findIndex(c => c.id === id);
        if (index === -1) {
            console.error(`❌ Contact with ID ${id} does not exist.`);
            return;
        }
        this.contacts[index] = { ...this.contacts[index], ...updatedContact };
        console.log(`✏️ Contact with ID ${id} modified successfully.`);
    }

    deleteContact(id: number): void {
        const index = this.contacts.findIndex(c => c.id === id);
        if (index === -1) {
            console.error(`❌ Contact with ID ${id} does not exist.`);
            return;
        }
        const deleted = this.contacts.splice(index, 1)[0];
        console.log(`🗑️ Contact "${deleted.name}" deleted successfully.`);
    }
}

// ====== TEST SCRIPT ======
const manager = new ContactManager();

// Add contacts
manager.addContact({ id: 1, name: "Alice", email: "alice@example.com", phone: "1234567890" });
manager.addContact({ id: 2, name: "Bob", email: "bob@example.com", phone: "0987654321" });

// View contacts
console.log("📜 All Contacts:", manager.viewContacts());

// Modify contact
manager.modifyContact(1, { email: "alice.new@example.com" });

// Delete contact
manager.deleteContact(2);

// Try modifying a non-existent contact
manager.modifyContact(5, { name: "Ghost" });

// View final contacts
console.log("📜 Final Contacts:", manager.viewContacts());
