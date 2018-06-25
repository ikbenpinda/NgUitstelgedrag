/**
 * Model definition for a single task.
 */
export class Task {
  private readonly _title: string = '';
  private _isCompleted: boolean = false;

  /**
   * Defines a single task
   * @param {string} title, can be either a title or a description of the task.
   * @param {boolean} isCompleted, a boolean to indicate the state of the task.
   */
  constructor(title: string = 'new task', isCompleted: boolean = false) {
    this._title = title; // Defaults to 'new task' when value is omitted.
    this._isCompleted = isCompleted; // Defaults to false when value is omitted.
  }

  get title(): string {
    return this._title;
  }

  get isCompleted(): boolean {
    return this._isCompleted;
  }

  set isCompleted(value: boolean) {
    this._isCompleted = value;
  }
}
