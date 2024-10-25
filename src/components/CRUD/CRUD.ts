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
export const GetProfileAPI = (userId: string) => {
	return axiosUtils.get(`${PathConstant.userProfile}?userId=${userId}`);
};
export const ChangeProfileAPI = (userId: string, updatedProfile: any) => {
	return axiosUtils.post(`${PathConstant.userUpdateProfile}?id=${userId}`, updatedProfile, {
		headers: {
			"Content-Type": "application/json",
		},
	});
};
