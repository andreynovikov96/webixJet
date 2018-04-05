import {JetView} from "webix-jet";
import {contacts} from "models/contacts";
import Form from "views/contactsForm";

export default class ContactsView extends JetView{
	config(){
		let header = {
			view: "template", 
			template: "Contacts",
			type:"header"
		};

		let contactsList = {
			view: "list",
			id:"mylist",
			select:true,
			borderless:true,
			type: {
				height:70
			},
			template:"<img class='contactsCircle'><span class='contactsList'>#Name#</span><span class='contactsList'>#Email#</span><span class='webix_icon fa-times delete'></span>",
			onClick: {
				"fa-times":function(ev, id) {
					this.remove(id);
				}
			}
		};

		let button = {
			view:"button", value:"Add", click:() => {this.add();}
		};

		return { 
			cols: [
				{rows: [
					header,
					contactsList,						
					button
				]
				},
				Form
			]
		};
	}
	add() {
		this.contactsList.add({ 
			Name:"Alex Wanny",
			Email:"alex@gmail.com",
			Status:1,
			Country:2
		});
	}
	init(view){
		this.contactsList = this.getRoot().queryView({ view: "list"});
		view.queryView({ view:"list"}).parse(contacts);
	}
	urlChange(){
		const contactsList = $$("mylist");
		const id = contactsList.getFirstId();
		
		if (id && contactsList.exists(id)){
			contactsList.select(id);
		}
	}

}