export class UserForm {
  constructor(public parent: Element) {}

  eventsMap() {
    return {
      "click:button": this.onButtonClick,
    };
  }

  onButtonClick(): void {
    console.log("hi there");
  }

  template(): string {
    return `
          <div onClick = {this.onClick}  >
          <h1>User Form</h1>
          <input/>
          <button>Click</button>
          </div>
          `;
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}
