import { Component, Prop } from "vue-property-decorator";
import { Component as tsc } from "vue-tsx-support";
import Button, { ButtonType, ButtonSize } from "./button";

interface IContainerProps {
  name?: string;
}

@Component
export default class Container extends tsc<IContainerProps> {
  @Prop() public name!: string;

  protected render() {
    return (
      <div>
        <p>container Name:{this.name}</p>
        <p>{this.$slots.default}</p>
        <p>
          button:
          <Button num={9} type={ButtonType.primary} size={ButtonSize.large} />
        </p>
      </div>
    );
  }
}
