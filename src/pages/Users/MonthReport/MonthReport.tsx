import React, { useState } from "react";
import { Input, Space, Table } from "antd";
import { ColumnType } from "antd/es/table";

import Layout from "../Layout/UserLayout";

interface MonthlyReport {
	key: string;
	month: string;
	year: string;
	openedAccounts: number;
	closedAccounts: number;
}

const monthlyReports: MonthlyReport[] = [
	{ key: "1", month: "January", year: "2024", openedAccounts: 150, closedAccounts: 50 },
	{ key: "2", month: "February", year: "2024", openedAccounts: 120, closedAccounts: 40 },
	{ key: "3", month: "March", year: "2024", openedAccounts: 180, closedAccounts: 60 },
	{ key: "4", month: "April", year: "2024", openedAccounts: 200, closedAccounts: 70 },
	{ key: "5", month: "May", year: "2024", openedAccounts: 160, closedAccounts: 55 },
];

const MonthReport: React.FC = () => {
	const [searchText, setSearchText] = useState<string>("");

	const handleSearch = (value: string) => {
		setSearchText(value);
	};

	const columns: ColumnType<MonthlyReport>[] = [
		{
			title: "Month",
			dataIndex: "month",
			key: "month",
		},
		{
			title: "Year",
			dataIndex: "year",
			key: "year",
		},
		{
			title: "Opened Accounts",
			dataIndex: "openedAccounts",
			key: "openedAccounts",
		},
		{
			title: "Closed Accounts",
			dataIndex: "closedAccounts",
			key: "closedAccounts",
		},
	];

	const filteredReports = monthlyReports.filter((report) => {
		const matchMonth = report.month.toLowerCase().includes(searchText.toLowerCase());
		const matchYear = report.year.toLowerCase().includes(searchText.toLowerCase());
		return matchMonth || matchYear;
	});

	return (
		<Layout>
			<div className="monthly-report">
				<Space style={{ marginBottom: "16px" }}>
					<Input.Search
						placeholder="Search by Month or Year..."
						allowClear
						value={searchText}
						onChange={(e) => handleSearch(e.target.value)}
					/>
				</Space>
				<Table
					columns={columns}
					dataSource={filteredReports}
					pagination={{ pageSize: 5 }}
				/>
			</div>
		</Layout>
	);
};

export default MonthReport;
