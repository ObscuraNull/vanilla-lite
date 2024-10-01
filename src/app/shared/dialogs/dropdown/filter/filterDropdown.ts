import { IOptionProps } from "@app/shared/forms/interfaces/props/shared";
import { SelectDropdown } from "../select/selectDropdown";

export class FilterDropdown extends SelectDropdown {
    filteredList: IOptionProps[];

    filter(val: string): void {
        this.filteredList = this.list.filter(item => item.text.includes(val));
        this[this.filteredList.length ? 'open' : 'close']();
        this.renderList(this.filteredList);
    }
}