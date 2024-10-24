import React, { useState } from "react";
import { DatePicker, Input, Space, Table, Tag } from "antd";
import { ColumnType } from "antd/es/table";
import moment from "moment";

import Layout from "../Layout/Layout";

interface SavingAccount {
	key: string;
	name: string;
	deposits: string;
	balance: string;
	withdraw: string; // New withdraw property
	date: string;
}

const savingAccounts: SavingAccount[] = [
	{
		key: "1",
		name: "Alice Smith",
		deposits: "+ $500.00",
		withdraw: "$0.00",
		balance: "$1500.00",
		date: "2024-10-01",
	},
	{ key: "2", name: "John Doe", deposits: "- $200.00", withdraw: "$200.00", balance: "$1300.00", date: "2024-10-03" },
	{ key: "3", name: "Emma Brown", deposits: "+ $300.00", withdraw: "$0.00", balance: "$1600.00", date: "2024-10-05" },
	{
		key: "4",
		name: "Michael Lee",
		deposits: "- $100.00",
		withdraw: "$100.00",
		balance: "$1500.00",
		date: "2024-10-06",
	},
	{
		key: "5",
		name: "Sophia Davis",
		deposits: "+ $700.00",
		withdraw: "$0.00",
		balance: "$2200.00",
		date: "2024-10-07",
	},
];

const ListSavingAccounts: React.FC = () => {
	const [searchText, setSearchText] = useState<string>("");
	const [selectedDate, setSelectedDate] = useState<string>("");

	const handleSearch = (value: string) => {
		setSearchText(value);
	};

	const handleDateChange = (date: any, dateString: string | string[]) => {
		if (typeof dateString === "string") {
			setSelectedDate(dateString);
		}
	};

	const columns: ColumnType<SavingAccount>[] = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Date",
			dataIndex: "date",
			key: "date",
			render: (date) => moment(date).format("DD MMM YYYY"),
		},
		{
			title: "Deposits",
			dataIndex: "deposits",
			key: "deposits",
			render: (deposits, record) => <Tag color={deposits.startsWith("+") ? "green" : "red"}>{deposits}</Tag>,
		},
		{
			title: "Withdraw",
			dataIndex: "withdraw",
			key: "withdraw",
		},
		{
			title: "Balance",
			dataIndex: "balance",
			key: "balance",
		},
	];

	const filteredSavingAccounts = savingAccounts.filter((account) => {
		const matchName = account.name.toLowerCase().includes(searchText.toLowerCase());
		const matchDate = selectedDate ? account.date === selectedDate : true;
		return matchName && matchDate;
	});

	return (
		<Layout>
			<div className="saving-accounts">
				<Space style={{ marginBottom: "16px" }}>
					<Input.Search
						placeholder="Search by Name..."
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
					dataSource={filteredSavingAccounts}
					pagination={{ pageSize: 5 }}
				/>
			</div>
		</Layout>
	);
};

export default ListSavingAccounts;
