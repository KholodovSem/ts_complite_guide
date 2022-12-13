import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onChangeAge,
      'click:.set-name': this.onChangeName,
      'click:.save-model': this.onSaveModel,
    };
  }

  onSaveModel = (): void => {
    this.model.save();
  };

  onChangeName = (): void => {
    const newName = this.parent.querySelector('input')!.value;

    this.model.set({ name: newName });
  };

  onChangeAge = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}"/>
        <button class="set-name">Set New Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">Save</button>
      </div>
    `;
  }
}
