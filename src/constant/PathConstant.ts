export default class PathConstant {
	// Common Pages
	static invalidPage = "*";
	static loginPage = "/login";
	static forgotPasswordPage = "/forgot-password";
	static signUpPage = "/signup";
	static forgotResetPassword = "/forgot-password/ResetPassword";
	static forgotPasswordGmail = "/forgot-password/ForgotPassword";
	//Authentication
	static loginAuthentication = "/Account/SignIn";
	static verifyPasswordAuthentication = "/Account/VerifyPassword";
	//Signup
	static signUpAuthentication = "/Account/SignUp";
	//Reset Password
	static resetPasswordPage = "/reset-password";
	//Admin Page
	static adminDashboard = "/admin/Dashboard";
	static adminDashboardPageManagerUser = "/admin/ManageUsers";
	static adminDashboardPageTransferUser = "/admin/TransferUsers";
	static adminDashboardHistory = "/admin/History";
	static adminDashboardAddCardUser = "/admin/AddCardUser";

	//User Page
	static userProfile = "/user/Profile";
	static userUpdateProfile = "/user/update-profile";
	static userMonthReport = "/user/MonthReport";
	static userWallet = "/user/Wallet";
	static userHistory = "/user/History";
	static userTransfer = "/user/Transfer";
	static userListSavingAccounts = "/user/ListSavingAccounts";
	static userHelp = "/user/Help";
	static userSettings = "/user/Settings";
	static userOpeningSavingAccount = "/user/opening-SavingAccount";
	static userDepositsSavingAccount = "/user/deposits-SavingAccount";
	static userWithdrawsSavingAccount = "/user/withdraws-SavingAccount";
	//Logout page
	static logout = "/logout";
}
