import { ValidateSpellPower } from "./decorators";
import { House, Identifiable, NewWizard, Spell } from "./types";
import { Wizard } from "./wizard";

export { Identifiable };

export class Repository<T extends { id: number }> {
	private items: T[] = [];

	public getItems(): T[] {
		return this.items;
	}

	public getAll(): T[] {
		return this.items;
	}

	public add(item: T) {
		this.items.push(item);
	}

	public remove(index: number) {
		this.items.splice(index, 1);
	}

	public findBy(predicate: (item: T) => boolean): T[] {
		return this.items.filter(predicate);
	}
}

export class WizardRepository extends Repository<Wizard> {
	public register(data: NewWizard): Wizard {
		const w = new Wizard(data.name, data.house, data.level, data.active);
		this.add(w);
		return w;
	}

	public findByHouse(house: Wizard["house"]): Wizard[] {
		return this.getAll().filter(wizard => wizard.house === house);
	}
}

export class SpellRepository extends Repository<Spell> {
	@ValidateSpellPower
	override add(spell: Spell): void {
		super.add(spell);
	}
}
