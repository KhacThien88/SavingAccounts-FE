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
export const LoginAPI = (email: string, password: string) => {
	return axiosUtils.post(
		`${PathConstant.loginAuthentication}`,
		{ email, password },
		{
			headers: {
				"Content-Type": "application/json",
			},
		},
	);
};
export const SignUpAPI = (signUpData: any) => {
	return axiosUtils.post(`${PathConstant.signUpAuthentication}`, signUpData, {
		headers: {
			"Content-Type": "application/json",
		},
	});
};
export const ChangePassword = (changePasswordData: any) => {
	return axiosUtils.post(`${PathConstant.verifyPasswordAuthentication}`, changePasswordData, {
		headers: {
			"Content-Type": "application/json",
		},
	});
};
export const AddCardUser = (CardInformation: any) => {
	return axiosUtils.post(`${PathConstant.adminDashboardAddCardUser}`, CardInformation, {
		headers: {
			"Content-Type": "application/json",
		},
	});
};
export const AddSavingAccount = (SavingAccountInformation: any) => {
	return axiosUtils.post(`${PathConstant.userOpeningSavingAccount}`, SavingAccountInformation, {
		headers: {
			"Content-Type": "application/json",
		},
	});
};
export const depositsSavingAccount = (SavingAccountInformation: any) => {
	return axiosUtils.post(`${PathConstant.userDepositsSavingAccount}`, SavingAccountInformation, {
		headers: {
			"Content-Type": "application/json",
		},
	});
};
