/* item.ts */

export class Item {
	constructor(private name:string, private price:number) {};
	public say(elem:HTMLElement | null):void {
		if (elem) {
			let e:HTMLElement = document.createElement("tr");
			e.innerHTML = `<td>${this.name}</td><td>${this.price}</td>`;
			elem.appendChild(e);
		}
	}
}
