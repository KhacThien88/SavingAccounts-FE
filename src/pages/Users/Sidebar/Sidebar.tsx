import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PathConstant from "constant/PathConstant";

const Sidebar: React.FC = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const handleNavigation = (path: string) => {
		navigate(path);
	};

	const isActive = (path: string) => location.pathname === path;

	return (
		<aside className="min-h-screen w-64 bg-white shadow-md">
			<div className="p-6">
				<h2 className="text-2xl font-bold text-blue-600">IBankCare</h2>
			</div>
			<nav className="mt-6">
				<p className="mb-2 ml-4 text-sm font-semibold text-gray-500">General</p>
				<ul className="space-y-2">
					<li>
						<button
							onClick={() => handleNavigation(PathConstant.userMonthReport)}
							className={`flex w-full items-center rounded-lg px-4 py-2 ${
								isActive(PathConstant.userMonthReport)
									? "bg-gray-200 text-yellow-500"
									: "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
							}`}
						>
							<span className="material-icons-outlined">home</span>
							<span className="ml-3">Month Report </span>
						</button>
					</li>
					<li>
						<button
							onClick={() => handleNavigation(PathConstant.userWallet)}
							className={`flex w-full items-center rounded-lg px-4 py-2 ${
								isActive(PathConstant.userWallet)
									? "bg-gray-200 text-yellow-500"
									: "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
							}`}
						>
							<span className="material-icons-outlined">account_balance_wallet</span>
							<span className="ml-3">My Wallet</span>
						</button>
					</li>
					<li>
						<button
							onClick={() => handleNavigation(PathConstant.userHistory)}
							className={`flex w-full items-center rounded-lg px-4 py-2 ${
								isActive(PathConstant.userHistory)
									? "bg-gray-200 text-yellow-500"
									: "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
							}`}
						>
							<span className="material-icons-outlined">history</span>
							<span className="ml-3">History</span>
						</button>
					</li>
					<li>
						<button
							onClick={() => handleNavigation(PathConstant.userTransfer)}
							className={`flex w-full items-center rounded-lg px-4 py-2 ${
								isActive(PathConstant.userTransfer)
									? "bg-gray-200 text-yellow-500"
									: "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
							}`}
						>
							<span className="material-icons-outlined">insert_chart</span>
							<span className="ml-3">Transfer</span>
						</button>
					</li>
					<li>
						<button
							onClick={() => handleNavigation(PathConstant.userListSavingAccounts)}
							className={`flex w-full items-center rounded-lg px-4 py-2 ${
								isActive(PathConstant.userListSavingAccounts)
									? "bg-gray-200 text-yellow-500"
									: "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
							}`}
						>
							<span className="material-icons-outlined">inbox</span>
							<span className="ml-3">Manage Saving Account</span>
						</button>
					</li>
					<li>
						<button
							onClick={() => handleNavigation(PathConstant.userProfile)}
							className={`flex w-full items-center rounded-lg px-4 py-2 ${
								isActive(PathConstant.userProfile)
									? "bg-gray-200 text-yellow-500"
									: "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
							}`}
						>
							<span className="material-icons-outlined">person</span>
							<span className="ml-3">Profile</span>
						</button>
					</li>
				</ul>
				<hr className="mx-4 my-4 border-gray-200" />
				<p className="mb-2 ml-4 text-sm font-semibold text-gray-500">Other</p>
				<ul className="space-y-2">
					<li>
						<button
							onClick={() => handleNavigation(PathConstant.userHelp)}
							className={`flex w-full items-center rounded-lg px-4 py-2 ${
								isActive(PathConstant.userHelp)
									? "bg-gray-200 text-yellow-500"
									: "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
							}`}
						>
							<span className="material-icons-outlined">info</span>
							<span className="ml-3">Help & Support</span>
						</button>
					</li>
					<li>
						<button
							onClick={() => handleNavigation(PathConstant.userSettings)}
							className={`flex w-full items-center rounded-lg px-4 py-2 ${
								isActive(PathConstant.userSettings)
									? "bg-gray-200 text-yellow-500"
									: "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
							}`}
						>
							<span className="material-icons-outlined">settings</span>
							<span className="ml-3">Setting</span>
						</button>
					</li>
				</ul>
			</nav>
			<div className="mt-auto p-4">
				<button
					onClick={() => handleNavigation("/logout")}
					className="flex w-full items-center py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
				>
					<span className="material-icons-outlined">logout</span>
					<span className="ml-3">Log Out</span>
				</button>
			</div>
		</aside>
	);
};

export default Sidebar;
