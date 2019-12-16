import { Node } from "tiptap";

export default class SeperatorNode extends Node {
  // name of the component
  get name() {
    return "seperator";
  }

  get schema() {
    return {
      // here you have to specify all values that can be stored in this node
      group: "block",
      selectable: false,
      // parseDOM and toDOM is still required to make copy and paste work
      parseDOM: [
        {
          tag: this.name,
          getAttrs: () => { }
        }
      ],
      toDOM: () => [
        "div",
        {
          allowfullscreen: "true",
          class: "abcd"
        }
      ]
    };
  }

  commands({ type }) {
    return () => (state, dispatch) =>
      dispatch(state.tr.replaceSelectionWith(type.create()));
  }

  get view() {
    return {
      props: ["node", "updateAttrs", "view"],
      template: `<span>...</span>`
    };
  }
}
