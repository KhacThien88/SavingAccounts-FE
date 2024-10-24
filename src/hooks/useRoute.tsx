import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import PathConstant from "constant/PathConstant";

import HistoryTransfer from "@/pages/Admin/History/History";
import ManageUsers from "@/pages/Admin/ManagerUser/ManagerUser";
import TransferUsers from "@/pages/Admin/TransferUsers/TransferUsers";
import ForgotPassword from "@/pages/LoginPage/ForgotPassword";
import Login from "@/pages/LoginPage/Login";
import SignUp from "@/pages/LoginPage/SignUp";
import NotFound from "@/pages/NotFoundPage/NotFoundPage";
import ResetPassword from "@/pages/ResetPasswordPage/ResetPassword";
import HistoryUsers from "@/pages/Users/History/HistoryUser";
import ListSavingAccounts from "@/pages/Users/ListSavingAccount/ListSavingAccounts";
import MonthReport from "@/pages/Users/MonthReport/MonthReport";
import MyWallet from "@/pages/Users/MyWallet/MyWallet";
import Profile from "@/pages/Users/Profile/Profile";
import Transfer from "@/pages/Users/Transfer/Transfer";

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
		// {
		// 	path: PathConstant.userHelp,
		// 	element: <HelpUser />,
		// },
		{
			path: PathConstant.userMonthReport,
			element: <MonthReport />,
		},
	]);

	return router;
};

export default useRouter;
