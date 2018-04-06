import {JetView} from "webix-jet";
import {contacts} from "models/contacts";
import Form from "views/contactsForm";

export default class ContactsView extends JetView{
	config(){
		const _ = this.app.getService("locale")._;

		let header = {
			view: "template", 
			template: _("Contacts"),
			type:"header"
		};

		let contactsList = {
			view: "list",
			select:true,
			borderless:true,
			type: {
				height:70
			},
			template:"<img class='contactsCircle'><span class='contactsList'>#Name#</span><span class='contactsList'>#Email#</span><span class='webix_icon fa-times delete'></span>",
			on:{
				onAfterSelect: (id) =>{
					let item = this.list.getItem(id);
					this.setParam("id", id, true);
					this.app.callEvent("onContactSelect", [item]);
				}
			},
			onClick: {
				"fa-times":function(ev, id) {
					contacts.remove(id);
				}
			}
		};

		let button = {
			view:"button", value:_("Add"), click:() => {this.add();}
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
		contacts.add({ 
			Name:"Alex Wanny",
			Email:"alex@gmail.com",
			Status:1,
			Country:2
		});
	}
	init(view){
		this.list = view.queryView({ view: "list"});
		this.list.parse(contacts);
		this.on(this.app,"onFormSave", (data) => {
			let id = this.list.getSelectedId();
			if(id){
				this.list.updateItem(id, data);
			}
		});
	}
	urlChange(){
		let id = this.getParam("id");
		if (id && this.list.exists(id)) this.list.select(id);
		else this.list.select(1);
	}

}