import React, { useState } from "react";
import { FiBell } from "react-icons/fi";
import { Button, Checkbox, Input, Table } from "antd";
import { ColumnType } from "antd/es/table";

import Layout from "../Layout/AdminLayout";

interface User {
	key: string;
	name: string;
	username: string;
	accountNumber: string;
}

const users: User[] = [
	{
		key: "1",
		name: "Fadhil Arga",
		username: "Kathryn21",
		accountNumber: "(808) 555-0111",
	},
	{
		key: "2",
		name: "Fadhil Aksara",
		username: "Henrygaul",
		accountNumber: "(208) 555-0112",
	},
	{
		key: "3",
		name: "Fadhil Ruiban",
		username: "Penagolem",
		accountNumber: "(239) 555-0108",
	},
	{
		key: "4",
		name: "Fadhil Gimari",
		username: "Floydbanjir",
		accountNumber: "(480) 555-0103",
	},
	{
		key: "5",
		name: "Fadhil Muhammad",
		username: "Kathryn21",
		accountNumber: "(808) 555-0111",
	},
	{
		key: "6",
		name: "Fadhil Sausu",
		username: "Henrygaul",
		accountNumber: "(208) 555-0112",
	},
	{
		key: "7",
		name: "Fadhil Robert",
		username: "Penagolem",
		accountNumber: "(239) 555-0108",
	},
];

const TransferUsers: React.FC = () => {
	const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
	const [searchText, setSearchText] = useState<string>("");
	const [amount, setAmount] = useState<string>("");

	const handleSearch = (value: string) => {
		setSearchText(value);
	};

	const handleSelectUser = (record: User) => {
		setSelectedUsers((prev) =>
			prev.find((user) => user.key === record.key)
				? prev.filter((user) => user.key !== record.key)
				: [...prev, record],
		);
	};

	const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		// Kiểm tra xem giá trị có phải là số hợp lệ
		if (/^\d*$/.test(value)) {
			setAmount(value);
		}
	};

	const columns: ColumnType<User>[] = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Username",
			dataIndex: "username",
			key: "username",
		},
		{
			title: "Account Number",
			dataIndex: "accountNumber",
			key: "accountNumber",
		},
	];

	return (
		<Layout>
			<div className="mx-auto max-w-7xl p-8">
				{/* Phần avatar và thông báo */}
				<div className="mb-6 flex items-center justify-between">
					{/* Phần tiêu đề bên trái */}
					<div>
						<h2 className="text-2xl font-semibold text-blue-800">Transfer to Users</h2>
						<p className="text-sm text-gray-500">Transfers balance to your users</p>
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

				{/* Phần chính chứa các khối */}
				<div className="flex gap-6">
					{/* Khối Transfer Users */}
					<div className="flex-1 rounded-md bg-white p-6 shadow-md">
						<h2 className="mb-2 text-xl font-semibold text-gray-800">Transfer Users</h2>
						<p className="mb-4 text-sm text-gray-500">Select one or more that you want to transfer</p>
						<Input.Search
							placeholder="Search..."
							allowClear
							value={searchText}
							onChange={(e) => handleSearch(e.target.value)}
							style={{ marginBottom: "16px" }}
						/>
						<Table
							columns={columns}
							dataSource={users.filter((user) =>
								user.name.toLowerCase().includes(searchText.toLowerCase()),
							)}
							rowSelection={{
								type: "checkbox",
								onSelect: (record) => handleSelectUser(record),
								selectedRowKeys: selectedUsers.map((user) => user.key),
							}}
							pagination={{ pageSize: 5 }}
						/>
					</div>

					{/* Cột chứa Selected Users và Input Amount */}
					<div className="flex w-1/3 flex-col gap-6">
						{/* Khối Selected Users */}
						<div className="flex-1 rounded-md bg-white p-6 shadow-md">
							<h2 className="mb-2 text-xl font-semibold text-gray-800">Selected Users</h2>
							<p className="mb-4 text-sm text-gray-500">Here is a list of usernames of selected users</p>
							<div className="flex flex-wrap gap-2 rounded-md border bg-gray-50 p-3">
								{selectedUsers.map((user) => (
									<span
										key={user.key}
										className="rounded-full bg-yellow-300 px-3 py-1 text-yellow-800"
									>
										{user.username}
									</span>
								))}
							</div>
						</div>

						{/* Khối Input Amount */}
						<div className="flex-1 rounded-md bg-white p-6 shadow-md">
							<h2 className="mb-2 text-xl font-semibold text-gray-800">Input Amount</h2>
							<p className="mb-4 text-sm text-gray-500">Only selected users will receive this balance</p>
							<Input
								type="text"
								placeholder="Amount"
								value={amount}
								onChange={handleAmountChange}
								className="mb-4"
							/>
							<Checkbox className="mb-4">Are you sure to transfer to these users?</Checkbox>
							<Button
								type="primary"
								className="bg-yellow-500 hover:bg-yellow-600"
								disabled={!selectedUsers.length || !amount}
							>
								Transfer
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default TransferUsers;
