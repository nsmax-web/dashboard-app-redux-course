import { baseTheme } from "./styles/themes";

// import original module declarations
import "styled-components";

type ITheme = typeof baseTheme;

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
