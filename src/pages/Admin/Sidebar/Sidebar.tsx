import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PathConstant from "constant/PathConstant";

const Sidebar: React.FC = () => {
	const navigate = useNavigate();
	const location = useLocation(); // Sử dụng để xác định trang hiện tại

	const handleNavigation = (path: string) => {
		navigate(path);
	};

	// Hàm để kiểm tra xem mục có được chọn hay không
	const isActive = (path: string) => location.pathname === path;

	return (
		<aside className="min-h-screen w-64 bg-white shadow-md">
			<div className="p-6">
				<h2 className="text-2xl font-bold text-blue-600">IBankCare</h2>
			</div>
			<nav className="mt-6">
				<ul className="space-y-2">
					<li>
						<button
							onClick={() => handleNavigation(PathConstant.adminDashboard)}
							className={`flex w-full items-center px-4 py-2 ${
								isActive(PathConstant.adminDashboard)
									? "bg-gray-200 text-blue-600"
									: "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
							}`}
						>
							<span className="material-icons-outlined">dashboard</span>
							<span className="ml-3">Dashboard</span>
						</button>
					</li>
					<li>
						<button
							onClick={() => handleNavigation(PathConstant.adminDashboardPageManagerUser)}
							className={`flex w-full items-center px-4 py-2 ${
								isActive(PathConstant.adminDashboardPageManagerUser)
									? "bg-gray-200 text-blue-600"
									: "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
							}`}
						>
							<span className="material-icons-outlined">people</span>
							<span className="ml-3">Manage Users</span>
						</button>
					</li>
					<li>
						<button
							onClick={() => handleNavigation(PathConstant.adminDashboardPageTransferUser)}
							className={`flex w-full items-center px-4 py-2 ${
								isActive(PathConstant.adminDashboardPageTransferUser)
									? "bg-gray-200 text-blue-600"
									: "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
							}`}
						>
							<span className="material-icons-outlined">swap_horiz</span>
							<span className="ml-3">Transfer to Users</span>
						</button>
					</li>
					<li>
						<button
							onClick={() => handleNavigation(PathConstant.adminDashboardHistory)}
							className={`flex w-full items-center px-4 py-2 ${
								isActive(PathConstant.adminDashboardHistory)
									? "bg-gray-200 text-blue-600"
									: "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
							}`}
						>
							<span className="material-icons-outlined">history</span>
							<span className="ml-3">History</span>
						</button>
					</li>
					<li>
						<button
							onClick={() => handleNavigation(PathConstant.adminDashboardAddCardUser)}
							className={`flex w-full items-center px-4 py-2 ${
								isActive(PathConstant.adminDashboardAddCardUser)
									? "bg-gray-200 text-blue-600"
									: "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
							}`}
						>
							<span className="material-icons-outlined">inbox</span>
							<span className="ml-3">Add Card User</span>
						</button>
					</li>
					<li>
						<button
							onClick={() => handleNavigation("/help-support")}
							className={`flex w-full items-center px-4 py-2 ${
								isActive("/help-support")
									? "bg-gray-200 text-blue-600"
									: "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
							}`}
						>
							<span className="material-icons-outlined">help_outline</span>
							<span className="ml-3">Help & Support</span>
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
