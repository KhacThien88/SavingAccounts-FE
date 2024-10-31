import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import PathConstant from "constant/PathConstant";

import AddCardUser from "@/pages/Admin/AdminAddCardUser/AdminAddCardUser";
import HistoryTransfer from "@/pages/Admin/History/History";
import ManageUsers from "@/pages/Admin/ManagerUser/ManagerUser";
import TransferUsers from "@/pages/Admin/TransferUsers/TransferUsers";
import ForgotPassword from "@/pages/LoginPage/ForgotPassword";
import Login from "@/pages/LoginPage/Login";
import Logout from "@/pages/LogoutPage/Logout";
import NotFound from "@/pages/NotFoundPage/NotFoundPage";
import ResetPassword from "@/pages/ResetPasswordPage/ResetPassword";
import SignUp from "@/pages/SignUp/SignUp";
import DepositsSavingAccount from "@/pages/Users/DeposisSavingAccount/DepositsSavingAccount";
import HistoryUsers from "@/pages/Users/History/HistoryUser";
import ListSavingAccounts from "@/pages/Users/ListSavingAccount/ListSavingAccounts";
import MonthReport from "@/pages/Users/MonthReport/MonthReport";
import MyWallet from "@/pages/Users/MyWallet/MyWallet";
import Profile from "@/pages/Users/Profile/Profile";
import Transfer from "@/pages/Users/Transfer/Transfer";
import WithdrawsSavingAccount from "@/pages/Users/WithdrawsSavingAccout/WithdrawsSavingAccount";

const useRouter = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<Navigate
					to={PathConstant.loginPage}
					replace
				/>
			),
		},
		{
			path: PathConstant.loginPage,
			element: <Login />,
		},
		{
			path: PathConstant.forgotPasswordPage,
			element: <ForgotPassword />,
		},
		{
			path: PathConstant.resetPasswordPage,
			element: <ResetPassword />,
		},
		{
			path: "*",
			element: <NotFound />,
		},
		{
			path: PathConstant.adminDashboardPageManagerUser,
			element: <ManageUsers />,
		},
		{
			path: PathConstant.adminDashboardPageTransferUser,
			element: <TransferUsers />,
		},
		{
			path: PathConstant.adminDashboardHistory,
			element: <HistoryTransfer />,
		},
		{
			path: PathConstant.adminDashboardAddCardUser,
			element: <AddCardUser />,
		},
		{
			path: PathConstant.signUpPage,
			element: <SignUp />,
		},
		{
			path: PathConstant.userProfile,
			element: <Profile />,
		},
		{
			path: PathConstant.userHistory,
			element: <HistoryUsers />,
		},
		{
			path: PathConstant.userTransfer,
			element: <Transfer />,
		},
		{
			path: PathConstant.userWallet,
			element: <MyWallet />,
		},
		{
			path: PathConstant.userListSavingAccounts,
			element: <ListSavingAccounts />,
		},
		{
			path: PathConstant.logout,
			element: <Logout />,
		},
		{
			path: PathConstant.userMonthReport,
			element: <MonthReport />,
		},
		{
			path: PathConstant.userDepositsSavingAccount,
			element: <DepositsSavingAccount />,
		},
		{
			path: PathConstant.userWithdrawsSavingAccount,
			element: <WithdrawsSavingAccount />,
		},
	]);

	return router;
};

export default useRouter;
