import {JetView} from "webix-jet";
import countries from "models/countries";
import statuses from "models/statuses";

export default class FormView extends JetView{
	config(){
		let form = {
			view:"form",
			id:"myform",
			borderless:true,
			elements:[
				{view:"text", label:"User Name", name:"Name", labelPosition:"top"},
				{view:"text", label:"Email", name:"Email", labelPosition:"top"},
				{view:"combo", label:"Country", name:"Country", options:{data:countries}},
				{view:"combo", label:"Status", name:"Status", options:{data:statuses}}
			],
			rules:{
				"Name": webix.rules.isNotEmpty,
				"Email": webix.rules.isEmail
			}
		};

		let button = {view:"button", value:"Save", click:() => {/* this.save(); */}};

		return {rows: [form, button, {}]};
	}
	init() {
		//$$("mylist").bind(view);
	}
	save() {
		var form = $$("myform");
		if(form.isDirty()){
			if(!form.validate())
				return false;
			form.save();
			$$("myform").clear();
		}
	}
}