import React, { useState } from "react";
import { FiBell } from "react-icons/fi";
import { Input, Table } from "antd";
import { ColumnType } from "antd/es/table";

import Layout from "../Layout/AdminLayout";

interface User {
	key: string;
	name: string;
	username: string;
	accountNumber: string;
	balance: number;
	branch: string;
	swiftCode: string;
}

const users: User[] = [
	{
		key: "1",
		name: "Kathryn Murphy",
		username: "Kathryn21",
		accountNumber: "(808) 555-0111",
		balance: 219.78,
		branch: "Jember",
		swiftCode: "68342",
	},
	{
		key: "2",
		name: "Courtney Henry",
		username: "Henrygaul",
		accountNumber: "(208) 555-0112",
		balance: 778.35,
		branch: "Banyuwangi",
		swiftCode: "68488",
	},
	{
		key: "3",
		name: "Eleanor Pena",
		username: "Penagolem",
		accountNumber: "(239) 555-0108",
		balance: 328.85,
		branch: "Surabaya",
		swiftCode: "62912",
	},
	{
		key: "4",
		name: "Floyd Miles",
		username: "Floydbanjir",
		accountNumber: "(480) 555-0103",
		balance: 219.78,
		branch: "Purwokerto",
		swiftCode: "90882",
	},
	{
		key: "5",
		name: "Kathryn Murphy",
		username: "Kathryn21",
		accountNumber: "(808) 555-0111",
		balance: 219.78,
		branch: "Jember",
		swiftCode: "68342",
	},
	{
		key: "6",
		name: "Courtney Henry",
		username: "Henrygaul",
		accountNumber: "(208) 555-0112",
		balance: 778.35,
		branch: "Banyuwangi",
		swiftCode: "68488",
	},
	{
		key: "7",
		name: "Eleanor Pena",
		username: "Penagolem",
		accountNumber: "(239) 555-0108",
		balance: 328.85,
		branch: "Surabaya",
		swiftCode: "62912",
	},
];

const ManageUsersPage: React.FC = () => {
	const [searchText, setSearchText] = useState<string>("");
	const [filteredData, setFilteredData] = useState<User[]>(users);

	const handleSearch = (value: string) => {
		const filtered = users.filter((user) =>
			Object.values(user).some((field) => String(field).toLowerCase().includes(value.toLowerCase())),
		);
		setFilteredData(filtered);
		setSearchText(value);
	};

	const columns: ColumnType<User>[] = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			sorter: (a, b) => a.name.localeCompare(b.name),
			sortDirections: ["ascend", "descend"] as ("ascend" | "descend")[],
			filters: [
				{ text: "Kathryn Murphy", value: "Kathryn Murphy" },
				{ text: "Courtney Henry", value: "Courtney Henry" },
				{ text: "Eleanor Pena", value: "Eleanor Pena" },
				{ text: "Floyd Miles", value: "Floyd Miles" },
			],
			onFilter: (value, record) => record.name.includes(value as string),
			filterMultiple: true,
		},
		{
			title: "Username",
			dataIndex: "username",
			key: "username",
			sorter: (a, b) => a.username.localeCompare(b.username),
			sortDirections: ["ascend", "descend"] as ("ascend" | "descend")[],
		},
		{
			title: "Account Number",
			dataIndex: "accountNumber",
			key: "accountNumber",
		},
		{
			title: "Balance",
			dataIndex: "balance",
			key: "balance",
			sorter: (a, b) => a.balance - b.balance,
			sortDirections: ["ascend", "descend"] as ("ascend" | "descend")[],
			defaultSortOrder: "descend" as const,
		},
		{
			title: "Branch",
			dataIndex: "branch",
			key: "branch",
			filters: [
				{ text: "Jember", value: "Jember" },
				{ text: "Banyuwangi", value: "Banyuwangi" },
				{ text: "Surabaya", value: "Surabaya" },
				{ text: "Purwokerto", value: "Purwokerto" },
			],
			onFilter: (value, record) => record.branch.includes(value as string),
			filterMultiple: false,
		},
		{
			title: "Swift Code",
			dataIndex: "swiftCode",
			key: "swiftCode",
			sorter: (a, b) => a.swiftCode.localeCompare(b.swiftCode),
			sortDirections: ["ascend", "descend"] as ("ascend" | "descend")[],
		},
	];

	return (
		<Layout>
			<div className="mx-auto max-w-7xl p-8">
				{/* Phần avatar và thông báo */}
				<div className="mb-6 flex items-center justify-between">
					{/* Phần tiêu đề bên trái */}
					<div>
						<h2 className="text-2xl font-semibold text-blue-800">Manage Users</h2>
						<p className="text-sm text-gray-500">Manage and organize your users</p>
					</div>

					{/* Phần thông báo và avatar bên phải */}
					<div className="flex items-center">
						<button className="relative p-2 text-gray-600 hover:text-gray-900">
							<FiBell size={24} />
							<span className="absolute right-0 top-0 inline-block h-2 w-2 rounded-full bg-red-500"></span>
						</button>
						<div className="ml-4">
							<img
								src="https://via.placeholder.com/40" // Đường dẫn đến ảnh đại diện
								alt="Avatar"
								className="h-10 w-10 rounded-full border border-gray-300"
							/>
						</div>
					</div>
				</div>

				{/* Phần bao bọc tiêu đề, tìm kiếm và bảng */}
				<div className="rounded-md bg-white p-6 shadow-md">
					<div className="mb-8 mt-4 flex items-center justify-between">
						<h2 className="text-2xl font-semibold text-blue-900">Users List</h2>
						<Input.Search
							placeholder="Search..."
							allowClear
							value={searchText}
							onChange={(e) => handleSearch(e.target.value)}
							onSearch={handleSearch}
							style={{ width: "33%" }}
						/>
						<div className="flex gap-2">
							<button className="rounded-lg border bg-gray-100 px-4 py-2 hover:bg-gray-200">
								Filter by ▼
							</button>
							<button className="rounded-lg border bg-gray-100 px-4 py-2 hover:bg-gray-200">
								Sort by ▼
							</button>
						</div>
					</div>

					{/* Sử dụng Table của Ant Design */}
					<Table
						columns={columns}
						dataSource={filteredData}
						pagination={{ pageSize: 10 }}
					/>
				</div>
			</div>
		</Layout>
	);
};

export default ManageUsersPage;
