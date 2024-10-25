import React, { useEffect, useState } from "react";
import { FiBell } from "react-icons/fi";
import { DatePicker, Input, Space, Table, Tag } from "antd";
import { ColumnType } from "antd/es/table";
import moment from "moment";

import Layout from "../Layout/Layout";

import { Transaction } from "./HistoryUser.type";

import { GetHistoryAPI } from "@/components/CRUD/CRUD";

// const transactions: Transaction[] = [
// 	{
// 		IdHistory: "1",
// 		Change: 328.85,
// 		DateTransfer: "2022-01-15",
// 		Note: "Salary Payment",
// 	},
// 	{
// 		IdHistory: "2",
// 		Change: -106.58,
// 		DateTransfer: "2022-01-15",
// 		Note: "Grocery Shopping",
// 	},
// 	{
// 		IdHistory: "3",
// 		Change: 275.43,
// 		DateTransfer: "2021-12-16",
// 		Note: "Freelance Work",
// 	},
// 	{
// 		IdHistory: "4",
// 		Change: 202.87,
// 		DateTransfer: "2021-11-23",
// 		Note: "Project Bonus",
// 	},
// 	{
// 		IdHistory: "5",
// 		Change: -80.0,
// 		DateTransfer: "2022-02-01",
// 		Note: "Utilities Bill",
// 	},
// 	{
// 		IdHistory: "6",
// 		Change: 150.75,
// 		DateTransfer: "2022-02-03",
// 		Note: "Stock Dividend",
// 	},
// 	{
// 		IdHistory: "7",
// 		Change: -45.5,
// 		DateTransfer: "2022-02-05",
// 		Note: "Dinner Out",
// 	},
// 	{
// 		IdHistory: "8",
// 		Change: 100.0,
// 		DateTransfer: "2022-02-10",
// 		Note: "Gift",
// 	},
// 	{
// 		IdHistory: "9",
// 		Change: 300.0,
// 		DateTransfer: "2022-02-15",
// 		Note: "Consulting Fee",
// 	},
// 	{
// 		IdHistory: "10",
// 		Change: -120.0,
// 		DateTransfer: "2022-02-18",
// 		Note: "Car Repair",
// 	},
// ];

const HistoryUsers: React.FC = () => {
	const [searchText, setSearchText] = useState<string>("");
	const [selectedDate, setSelectedDate] = useState<string>("");
	const [transactions, setTransactions] = useState<Transaction[]>();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await GetHistoryAPI("1");
				console.log(response.data);
				setTransactions(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);
	const handleSearch = (value: string) => {
		setSearchText(value);
	};

	const handleDateChange = (date: any, dateString: string | string[]) => {
		if (typeof dateString === "string") {
			setSelectedDate(dateString);
		}
	};

	const columns: ColumnType<Transaction>[] = [
		{
			title: "Date",
			dataIndex: "DateTransfer",
			key: "DateTransfer",
			render: (DateTransfer) => moment(DateTransfer).format("DD MMM YYYY"),
		},
		{
			title: "Amount",
			dataIndex: "Change",
			key: "Change",
			render: (Change) => {
				const isIncome = Change > 0;
				return (
					<Tag color={isIncome ? "green" : "red"}>
						{isIncome ? `+ $${Change.toFixed(2)}` : `- $${Math.abs(Change).toFixed(2)}`}
					</Tag>
				);
			},
		},
		{
			title: "Note",
			dataIndex: "Note",
			key: "Note",
		},
	];

	const filteredTransactions = transactions?.filter((transaction) => {
		const matchNote = transaction?.Note?.toLowerCase().includes(searchText?.toLowerCase());
		const matchDate = selectedDate ? transaction.DateTransfer === selectedDate : true;
		return matchNote && matchDate;
	});

	// Group transactions by date
	const groupTransactionsByDate = (transactions: Transaction[]) => {
		return transactions.reduce((acc: Record<string, Transaction[]>, transaction) => {
			const date = moment(transaction.DateTransfer).format("DD MMM YYYY");
			if (!acc[date]) {
				acc[date] = [];
			}
			acc[date].push(transaction);
			return acc;
		}, {});
	};

	const groupedTransactions = transactions ? groupTransactionsByDate(transactions.slice(0, 10)) : {};

	return (
		<Layout>
			<div className="mx-auto max-w-7xl p-8">
				{/* Avatar and notification section */}
				<div className="mb-6 flex items-center justify-between">
					<div>
						<h2 className="text-2xl font-semibold text-blue-800">History Transactions</h2>
						<p className="text-sm text-gray-500">View your transaction history</p>
					</div>

					{/* Notification and avatar on the right */}
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

				{/* Main section containing the history table */}
				<div className="flex gap-6">
					{/* Transaction History Table */}
					<div className="flex-1 rounded-md bg-white p-6 shadow-md">
						<h2 className="mb-2 text-xl font-semibold text-gray-800">Transaction History</h2>
						<p className="mb-4 text-sm text-gray-500">Browse your recent transactions</p>
						<Space style={{ marginBottom: "16px" }}>
							<Input.Search
								placeholder="Search..."
								allowClear
								value={searchText}
								onChange={(e) => handleSearch(e.target.value)}
							/>
							<DatePicker
								onChange={handleDateChange}
								format="YYYY-MM-DD"
							/>
						</Space>
						<Table
							columns={columns}
							dataSource={filteredTransactions}
							pagination={{ pageSize: 5 }}
							rowKey="IdHistory"
						/>
					</div>

					{/* Recent Activities Column */}
					<div className="w-1/3 rounded-md bg-white p-6 shadow-md">
						<h2 className="mb-2 text-xl font-semibold text-gray-800">Recent Activities</h2>
						{Object.keys(groupedTransactions).map((date, index) => (
							<React.Fragment key={date}>
								{index !== 0 && <hr className="mx-4 my-4 border-gray-200" />}
								<div>
									<h3 className="font-medium text-gray-700">{date}</h3>
									<ul className="space-y-2">
										{groupedTransactions[date].map((transaction) => (
											<li
												key={transaction.IdHistory}
												className="flex justify-between"
											>
												<span>{transaction.Note}</span>
												<Tag color={transaction.Change > 0 ? "green" : "red"}>
													{transaction.Change > 0
														? `+ $${transaction.Change}`
														: `- $${Math.abs(transaction.Change)}`}
												</Tag>
											</li>
										))}
									</ul>
								</div>
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default HistoryUsers;
