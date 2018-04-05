import {JetView} from "webix-jet";
import {statuses} from "models/statuses";

export default class StatusesView extends JetView{
	config(){
		return { 
			view:"datatable",
			id:"Statuses", 
			autoConfig:true, 
			scrollX:false, 
			editable:true
		};
	}
	init(view){
		view.parse(statuses);
	}
}