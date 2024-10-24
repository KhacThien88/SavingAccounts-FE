import React from "react";
import { FiBell } from "react-icons/fi";
import { Button, Input, Select } from "antd";

import Layout from "../Layout/Layout";

const { Option } = Select;

const MyWallet: React.FC = () => {
	return (
		<Layout>
			<div className="mx-auto max-w-7xl p-8">
				{/* Avatar and notification section */}
				<div className="mb-6 flex items-center justify-between">
					<div>
						<h2 className="text-2xl font-semibold text-blue-800">Manage Bank Account</h2>
						<p className="text-sm text-gray-500">Manage Your Bank Account</p>
					</div>

					{/* Notification and avatar on the right */}
					<div className="flex items-center">
						<Input.Search
							placeholder="Search..."
							className="mr-4 w-64"
						/>
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

				{/* My Card Section */}
				<div className="mb-6">
					<h2 className="mb-4 text-xl font-semibold text-gray-800">My Card</h2>
					<div className="flex gap-4">
						<div className="w-1/3 rounded-lg bg-blue-600 p-6 text-white shadow-md">
							<div className="flex justify-between">
								<span className="material-icons-outlined">credit_card</span>
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
									alt="MasterCard"
									className="h-8"
								/>
							</div>
							<p className="mt-4 text-sm">Total Balance</p>
							<h3 className="text-2xl font-semibold">$219.78</h3>
							<p className="mt-2">**** **** ** 3783</p>
							<p className="mt-1">05/22</p>
						</div>
						<div className="w-1/3 rounded-lg bg-yellow-400 p-6 text-white shadow-md">
							<div className="flex justify-between">
								<span className="material-icons-outlined">credit_card</span>
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
									alt="MasterCard"
									className="h-8"
								/>
							</div>
							<p className="mt-4 text-sm">Total Balance</p>
							<h3 className="text-2xl font-semibold">$219.78</h3>
							<p className="mt-2">**** **** ** 3783</p>
							<p className="mt-1">05/22</p>
						</div>
					</div>
				</div>

				{/* Add New Bank Account Section */}
				<div className="rounded-md bg-white p-6 shadow-md">
					<h2 className="mb-4 text-xl font-semibold text-gray-800">Add New Savings Account</h2>
					<div className="grid grid-cols-2 gap-4">
						<div className="col-span-2">
							<label className="block text-sm font-medium text-gray-700">Card Name *</label>
							<Select
								placeholder="Select Card Name"
								className="mt-1 w-full"
							>
								<Option value="bank1">Card 1</Option>
								<Option value="bank2">Card 2</Option>
							</Select>
						</div>
						<div className="col-span-2">
							<label className="block text-sm font-medium text-gray-700">Account Name *</label>
							<Input
								placeholder="Account Name"
								className="mt-1"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">Card Number *</label>
							<Input
								placeholder="Account Number"
								className="mt-1"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">Swift Code</label>
							<Input
								placeholder="Swift Code"
								className="mt-1"
							/>
						</div>
						<div className="col-span-2">
							<label className="block text-sm font-medium text-gray-700">Branch *</label>
							<Input
								placeholder="Branch"
								className="mt-1"
							/>
						</div>
						<div className="col-span-2">
							<label className="block text-sm font-medium text-gray-700">Saving Account Name *</label>
							<Input
								placeholder="Name"
								className="mt-1"
							/>
						</div>
						<div className="col-span-2">
							<label className="block text-sm font-medium text-gray-700">Term</label>
							<Select
								placeholder="Select Term"
								className="mt-1 w-full"
							>
								<Option value="bank1">3 months</Option>
								<Option value="bank2">6 months </Option>
								<Option value="bank3">No limited</Option>
							</Select>
						</div>
						<div className="col-span-2">
							<label className="block text-sm font-medium text-gray-700">Amount *</label>
							<Input
								placeholder="Amount"
								className="mt-1"
							/>
						</div>
					</div>
					<Button
						type="primary"
						className="mt-4 w-full bg-blue-600 hover:bg-blue-700"
					>
						Add/Deposits Saving Account
					</Button>
				</div>
			</div>
		</Layout>
	);
};

export default MyWallet;
