import React, { useEffect, useState } from "react";
import { DatePicker, Input, Space, Table, Tag } from "antd";
import { ColumnType } from "antd/es/table";
import moment from "moment";
import { GetUserId } from "utils/UserUtil";

import Layout from "../Layout/UserLayout";

import { SavingAccount } from "./ListSavingAccount.type";

import { GetListSavingAccountsAPI } from "@/components/CRUD/CRUD";

// const savingAccounts: SavingAccount[] = [
// 	{
// 		IdSavingAccount: "1",
// 		NameOfSavingAccount: "Alice Smith",
// 		Deposits: 500.0,
// 		Withdraw: 0.0,
// 		Balance: 1500.0,
// 		DateOpened: "2024-10-01",
// 		Term: "6 months",
// 	},
// 	{
// 		IdSavingAccount: "2",
// 		NameOfSavingAccount: "John Doe",
// 		Deposits: -200.0, // Số âm để biểu diễn tiền rút ra
// 		Withdraw: 200.0,
// 		Balance: 1300.0,
// 		DateOpened: "2024-10-03",
// 		Term: "12 months",
// 	},
// 	{
// 		IdSavingAccount: "3",
// 		NameOfSavingAccount: "Emma Brown",
// 		Deposits: 300.0,
// 		Withdraw: 0.0,
// 		Balance: 1600.0,
// 		DateOpened: "2024-10-05",
// 		Term: "3 months",
// 	},
// 	{
// 		IdSavingAccount: "4",
// 		NameOfSavingAccount: "Michael Lee",
// 		Deposits: -100.0,
// 		Withdraw: 100.0,
// 		Balance: 1500.0,
// 		DateOpened: "2024-10-06",
// 		Term: "6 months",
// 	},
// 	{
// 		IdSavingAccount: "5",
// 		NameOfSavingAccount: "Sophia Davis",
// 		Deposits: 700.0,
// 		Withdraw: 0.0,
// 		Balance: 2200.0,
// 		DateOpened: "2024-10-07",
// 		Term: "No limited",
// 	},
// ];

const ListSavingAccounts: React.FC = () => {
	const [searchText, setSearchText] = useState<string>("");
	const [selectedDate, setSelectedDate] = useState<string>("");
	const [savingAccounts, setSavingAccounts] = useState<SavingAccount[]>();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await GetListSavingAccountsAPI(GetUserId());
				setSavingAccounts(response.data);
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

	const columns: ColumnType<SavingAccount>[] = [
		{
			title: "Name Of Saving Account",
			dataIndex: "NameOfSavingAccount",
			key: "NameOfSavingAccount",
		},
		{
			title: "Date Opened",
			dataIndex: "DateOpened",
			key: "DateOpened",
			render: (date) => moment(date).format("DD MMM YYYY"),
		},
		{
			title: "Deposits",
			dataIndex: "Deposits",
			key: "Deposits",
			render: (deposits) => (
				<Tag color={deposits > 0 ? "green" : "red"}>
					{deposits > 0 ? `+ $${deposits.toFixed(2)}` : `- $${Math.abs(deposits).toFixed(2)}`}
				</Tag>
			),
		},
		{
			title: "Withdraw",
			dataIndex: "Withdraw",
			key: "Withdraw",
			render: (withdraw) => <Tag color={withdraw > 0 ? "red" : "default"}>{`$${withdraw.toFixed(2)}`}</Tag>,
		},
		{
			title: "Balance",
			dataIndex: "Balance",
			key: "Balance",
			render: (balance) => `$${balance.toLocaleString()}`, // Format number as currency
		},
		{
			title: "Term",
			dataIndex: "Term",
			key: "Term",
		},
	];

	const filteredSavingAccounts = savingAccounts?.filter((account) => {
		const matchName = account.NameOfSavingAccount.toLowerCase().includes(searchText.toLowerCase());
		const matchDate = selectedDate ? account.DateOpened === selectedDate : true;
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
					rowKey="IdSavingAccount"
				/>
			</div>
		</Layout>
	);
};

export default ListSavingAccounts;
