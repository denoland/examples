import { createDefine } from "fresh";

export interface State {
  title: string;
}

export const define = createDefine<State>();
