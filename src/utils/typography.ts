import Typography from "typography";
import moragaTheme from "typography-theme-moraga";

moragaTheme.headerWeight = "300";

/**
 * Typography to be shared across application
 */
const typography = new Typography(moragaTheme);

export default typography;
