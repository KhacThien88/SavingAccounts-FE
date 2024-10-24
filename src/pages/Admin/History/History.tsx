import React, { useState } from "react";
import { FiBell } from "react-icons/fi";
import { Button, Input, Table } from "antd";
import { ColumnType } from "antd/es/table";

import Layout from "../Layout/Layout";

interface TransferRecord {
	key: string;
	sender?: string;
	receiver: string;
	dateTransfer: string;
	accountNumber?: string;
}

const userTransfers: TransferRecord[] = [
	{ key: "1", sender: "Kathryn21", receiver: "Kathryn21", dateTransfer: "8/16/13" },
	{ key: "2", sender: "Henrygaul", receiver: "Henrygaul", dateTransfer: "5/27/15" },
	{ key: "3", sender: "Penagolem", receiver: "Penagolem", dateTransfer: "8/21/15" },
	{ key: "4", sender: "Floydbanjir", receiver: "Floydbanjir", dateTransfer: "5/27/15" },
	{ key: "5", sender: "Kathryn21", receiver: "Kathryn21", dateTransfer: "9/18/16" },
	{ key: "6", sender: "Henrygaul", receiver: "Henrygaul", dateTransfer: "8/21/15" },
];

const adminTransfers: TransferRecord[] = [
	{ key: "1", receiver: "Kathryn21", dateTransfer: "8/16/13", accountNumber: "(808) 555-0111" },
	{ key: "2", receiver: "Henrygaul", dateTransfer: "5/27/15", accountNumber: "(208) 555-0112" },
	{ key: "3", receiver: "Penagolem", dateTransfer: "8/21/15", accountNumber: "(239) 555-0108" },
	{ key: "4", receiver: "Floydbanjir", dateTransfer: "5/27/15", accountNumber: "(480) 555-0103" },
	{ key: "5", receiver: "Kathryn21", dateTransfer: "8/16/13", accountNumber: "(808) 555-0111" },
	{ key: "6", receiver: "Henrygaul", dateTransfer: "5/27/15", accountNumber: "(208) 555-0112" },
];

const HistoryTransfer: React.FC = () => {
	const [searchText, setSearchText] = useState<string>("");

	const handleSearch = (value: string) => {
		setSearchText(value);
	};

	const userColumns: ColumnType<TransferRecord>[] = [
		{
			title: "Sender",
			dataIndex: "sender",
			key: "sender",
		},
		{
			title: "Receive",
			dataIndex: "receiver",
			key: "receiver",
		},
		{
			title: "Date Transfer",
			dataIndex: "dateTransfer",
			key: "dateTransfer",
		},
	];

	const adminColumns: ColumnType<TransferRecord>[] = [
		{
			title: "Receiver",
			dataIndex: "receiver",
			key: "receiver",
		},
		{
			title: "Date Transfer",
			dataIndex: "dateTransfer",
			key: "dateTransfer",
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
						<h2 className="text-2xl font-semibold text-blue-800">History Transfer</h2>
						<p className="text-sm text-gray-500">
							See history of transfer from user to user and from admin to users
						</p>
					</div>

					{/* Phần thông báo và avatar bên phải */}
					<div className="flex items-center">
						<button className="relative p-2 text-gray-600 hover:text-gray-900">
							<FiBell size={24} />
							<span className="absolute right-0 top-0 inline-block h-2 w-2 rounded-full bg-red-500"></span>
						</button>
						<div className="ml-4">
							<img
								src="https://via.placeholder.com/40"
								alt="Avatar"
								className="h-10 w-10 rounded-full border border-gray-300"
							/>
						</div>
					</div>
				</div>

				{/* Phần chính chứa các bảng */}
				<div className="flex gap-6">
					{/* Bảng Transfer Users to Users */}
					<div className="flex-1 rounded-md bg-white p-6 shadow-md">
						<h2 className="mb-2 text-xl font-semibold text-gray-800">Transfer Users to Users</h2>
						<p className="mb-4 text-sm text-gray-500">Select one or more that you want to transfer</p>
						<div className="mb-4 flex items-center gap-2">
							<Button className="rounded-lg border bg-gray-100 px-4 py-2 hover:bg-gray-200">
								Filter by ▼
							</Button>
							<Button className="rounded-lg border bg-gray-100 px-4 py-2 hover:bg-gray-200">
								Sort by ▼
							</Button>
							<Input.Search
								placeholder="Search.."
								allowClear
								value={searchText}
								onChange={(e) => handleSearch(e.target.value)}
								style={{ width: "33%" }}
							/>
						</div>
						<Table
							columns={userColumns}
							dataSource={userTransfers.filter(
								(transfer) =>
									transfer.sender?.toLowerCase().includes(searchText.toLowerCase()) ||
									transfer.receiver.toLowerCase().includes(searchText.toLowerCase()),
							)}
							pagination={{ pageSize: 5 }}
						/>
					</div>

					{/* Bảng Your Transfer to Users */}
					<div className="flex-1 rounded-md bg-white p-6 shadow-md">
						<h2 className="mb-2 text-xl font-semibold text-gray-800">Your Transfer to Users</h2>
						<p className="mb-4 text-sm text-gray-500">Select one or more that you want to transfer</p>
						<div className="mb-4 flex items-center gap-2">
							<Button className="rounded-lg border bg-gray-100 px-4 py-2 hover:bg-gray-200">
								Filter by ▼
							</Button>
							<Button className="rounded-lg border bg-gray-100 px-4 py-2 hover:bg-gray-200">
								Sort by ▼
							</Button>
							<Input.Search
								placeholder="Search.."
								allowClear
								value={searchText}
								onChange={(e) => handleSearch(e.target.value)}
								style={{ width: "33%" }}
							/>
						</div>
						<Table
							columns={adminColumns}
							dataSource={adminTransfers.filter((transfer) =>
								transfer.receiver.toLowerCase().includes(searchText.toLowerCase()),
							)}
							pagination={{ pageSize: 5 }}
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default HistoryTransfer;
