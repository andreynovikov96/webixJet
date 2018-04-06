import {JetView} from "webix-jet";
import {countries} from "models/countries";
import {statuses} from "models/statuses";

export default class FormView extends JetView{
	config(){
		const _ = this.app.getService("locale")._;

		let form = {
			view:"form",
			borderless:true,
			elements:[
				{view:"text", label:_("User Name"), name:"Name", labelPosition:"top"},
				{view:"text", label:_("Email"), name:"Email", labelPosition:"top"},
				{view:"combo", label:_("Country"), name:"Country", options:{data:countries}},
				{view:"combo", label:_("Status"), name:"Status", options:{data:statuses}}
			],
			rules:{
				"Name": webix.rules.isNotEmpty,
				"Email": webix.rules.isEmail
			}
		};

		let button = {view:"button", value:_("Save"), click:() => {this.save();}};

		return {rows: [form, button, {}]};
	}
	init(view) {
		this.on(this.app, "onContactSelect", (data) => {
			if(data){
				view.queryView({view:"form"}).setValues(data);
			}
		});
	}
	save() {
		let values = this.getRoot().queryView({view:"form"}).getValues();
		this.app.callEvent("onFormSave", [values]);
	}
}