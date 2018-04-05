import {JetView} from "webix-jet";

export default class multiView extends JetView{
	config(){
		return { 
			rows: [
				{
					view:"list",
					select:true,
					data:[
						{value:"Countries", id:"Countries"},
						{value:"Statuses", id:"Statuses"}
					],

				},
				{
					view:"select",
					label:"languages",
					options:["English", "Russian"]
				}
			]
		};
	}
}