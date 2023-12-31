class Contacts_API {
    // static API_URL() { return "http://localhost:5000/api/contacts" };
    //Je ne comprend pas comment faire en sorte que le lien sans .json accede au fichier json apres plusieurs heures.
    //J'ai donc utiliser ce lien pour pouvoir travailler sur le reste du laboratoire. Mon lien est:
    //https://pyrite-bramble-hell.glitch.me/Contacts%20API/contacts.json
   static API_URL() { return "https://api-server-5.glitch.me/api/bookmarks" }; 
    static async Get(id = null) {
        return new Promise(resolve => {
            $.ajax({
                url: this.API_URL() + (id != null ? "/" + id : ""),
                success: contacts => { resolve(contacts); },
                error: (xhr) => { console.log(xhr); resolve(null); }
            });
        });
    }
    static async Save(contact, create = true) {
        return new Promise(resolve => {
            $.ajax({
                url: this.API_URL(),
                type: create ? "POST" : "PUT",
                contentType: 'application/json',
                data: JSON.stringify(contact),
                success: (/*data*/) => { resolve(true); },
                error: (/*xhr*/) => { resolve(false /*xhr.status*/); }
            });
        });
    }
    static async Delete(id) {
        return new Promise(resolve => {
            $.ajax({
                url: this.API_URL() + "/" + id,
                type: "DELETE",
                success: () => { resolve(true); },
                error: (/*xhr*/) => { resolve(false /*xhr.status*/); }
            });
        });
    }
}