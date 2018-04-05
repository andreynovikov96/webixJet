import {JetView} from "webix-jet";
import {contacts} from "models/contacts";

export default class ContactsView extends JetView{
	config(){
		return { 
			cols: [
				{rows: [
					{
						view: "template", 
						template: "Contacts",
						type:"header"
					},
					{
						view: "list",
						select:true,
						borderless:true,
						type: {
							height:70
						},
						template:"<img class='contactsCircle'><span class='contactsList'>#Name#</span><span class='contactsList'>#Email#</span><span class='webix_icon fa-times delete'></span>"
					}
				]
				},
				{
					view:"form",
					borderless:true,
					elements:[
						{view:"text", label:"User Name", labelPosition:"top"},
						{view:"text", label:"Email", labelPosition:"top"},
						{}
					]
				}
			]
		};
	}
	init(view){
		//view.parse(contacts);
		view.queryView({ view:"list"}).parse(contacts);
	}
}