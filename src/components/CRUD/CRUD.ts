import PathConstant from "constant/PathConstant";

import axiosUtils from "../../utils/axiosUtils";

export const GetHistoryAPI = (userId: string) => {
	return axiosUtils.get(`${PathConstant.userHistory}?userId=${userId}`);
};
export const GetListCardAPI = (userId: string) => {
	return axiosUtils.get(`${PathConstant.userWallet}?userId=${userId}`);
};
export const GetListSavingAccountsAPI = (userId: string) => {
	return axiosUtils.get(`${PathConstant.userListSavingAccounts}?userId=${userId}`);
};
