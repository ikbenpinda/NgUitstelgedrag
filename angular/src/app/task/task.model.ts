/**
 * Model definition for a single task.
 */
export class Task {
  private readonly _id: string = '';
  private _title: string = '';
  private _isCompleted: boolean = false;

  /**
   * Defines a single task
   * @param {string} _id an ObjectId a la MongoDB for this item.
   * @param {string} title, can be either a title or a description of the task.
   * @param {boolean} isCompleted, a boolean to indicate the state of the task.
   */
  constructor(_id: string, title: string = 'new task', isCompleted: boolean = false) {
    this._id = _id;
    this._title = title; // Defaults to 'new task' when value is omitted.
    this._isCompleted = isCompleted; // Defaults to false when value is omitted.
  }

  get id(): string { // fixme - see https://stackoverflow.com/a/37717475
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get isCompleted(): boolean {
    return this._isCompleted;
  }

  set isCompleted(value: boolean) {
    this._isCompleted = value;
  }
}
