import {JetView} from "webix-jet";

export default class TableBut extends JetView{
	config(){
		const _ = this.app.getService("locale")._;

		let table = {
			view:"datatable",
			autoConfig:true,
			editable:true,
			select:true,
			editaction:"dblclick",
			scrollX:false
		};

		let buttons = {
			cols: [
				{view:"button", value:_("Add"), click:() => this.add()},
				{view:"button", value:_("Delete"), click:() => this.remove()}
			]
		};

		return {rows: [table, buttons]};
	}
	init(){
		this.table = this.getRoot().queryView({view:"datatable"});
	}
}