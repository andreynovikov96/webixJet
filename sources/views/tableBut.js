import {JetView} from "webix-jet";

export default class TableBut extends JetView{
	config(){
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
				{view:"button", value:"Add", click:() => {this.add();}},
				{view:"button", value:"Delete", click:() => {this.remove();}}
			]
		};

		return {rows: [table, buttons]};
	}
	init(){
		this.table = this.getRoot().queryView({view:"datatable"});
	}
	add() {
		this.table.add({ Name:"New"});
	}
	remove() {
		let id = this.table.getSelectedId();
		if(id) this.table.remove(id);
	}
}