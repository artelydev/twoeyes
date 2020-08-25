import { UseNavigationReturn } from "../useNavigation";

const navigation: UseNavigationReturn = [jest.fn(), jest.fn(), jest.fn(), jest.fn(), jest.fn(), 0];

export default jest.fn().mockReturnValue(navigation);
