import React, { useEffect, useState } from "react";
import { FiBell } from "react-icons/fi";
import { Button, Input, message, Select } from "antd";
import { GetUserId } from "utils/UserUtil";

import Layout from "../Layout/UserLayout";

import { Card } from "./MyWallet.type";

import { AddSavingAccount, GetListCardAPI } from "@/components/CRUD/CRUD";

const { Option } = Select;

const MyWallet: React.FC = () => {
	const [ListCard, setListCard] = useState<Card[]>([]);
	const [showPassword, setShowPassword] = useState(false);

	// Function to generate a random alphanumeric ID
	const generateUniqueId = () => {
		return Math.random().toString(36).substr(2, 9);
	};

	const [savingAccountData, setSavingAccountData] = useState({
		IdCard: "",
		IdUser: GetUserId(),
		IdSavingAccount: generateUniqueId(),
		CardName: "",
		CardNumber: "",
		AccountName: "",
		Password: "",
		SavingAccountName: "",
		Term: "",
		Amount: 0,
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await GetListCardAPI(GetUserId());
				setListCard(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, []);

	const cardColors = ["bg-blue-600", "bg-yellow-400", "bg-green-500", "bg-red-500"];

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	// Function to handle card selection from dropdown
	const handleCardSelection = (selectedCardId: any) => {
		const selectedCard = ListCard.find((card) => card.IdCard === selectedCardId);

		if (selectedCard) {
			setSavingAccountData((prevData) => ({
				...prevData,
				IdCard: selectedCard.IdCard,
				CardName: selectedCard.NameOfCard || "",
				CardNumber: selectedCard.CardNumber || "",
			}));
		}
	};

	const handleInputChange = (field: any, value: any) => {
		setSavingAccountData((prevData) => ({ ...prevData, [field]: value }));
	};

	const handleAddSavingAccount = async () => {
		try {
			await AddSavingAccount(savingAccountData);
			message.success("Savings account added successfully!");
			setTimeout(() => {
				window.location.reload();
			}, 1500);
		} catch (error) {
			console.error("Error adding savings account:", error);
			message.error("Failed to add savings account. Please try again.");
		}
	};

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
						{ListCard.map((card, index) => (
							<div
								key={card.IdCard}
								className={`w-1/3 rounded-lg p-6 text-white shadow-md ${cardColors[index % cardColors.length]}`}
							>
								<div className="flex justify-between">
									<span className="material-icons-outlined">credit_card</span>
									<img
										src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
										alt="MasterCard"
										className="h-8"
									/>
								</div>
								<p className="mt-4 text-sm">Total Balance</p>
								<h3 className="text-2xl font-semibold">${card.Balance.toFixed(2)}</h3>
								<p className="mt-2">**** **** ** {card.CardNumber.slice(-4)}</p>
								<p className="mt-1">{new Date(card.DateOpened).toLocaleDateString()}</p>
							</div>
						))}
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
								onChange={handleCardSelection} // Update to use handleCardSelection
							>
								{ListCard.map((card, index) => (
									<Option
										key={card.IdCard}
										value={card.IdCard}
									>
										{`Card ${index + 1} - ${card.CardNumber.slice(-4)}`}
									</Option>
								))}
							</Select>
						</div>
						<div className="col-span-2">
							<label className="block text-sm font-medium text-gray-700">Account Name *</label>
							<Input
								placeholder="Account Name"
								className="mt-1"
								onChange={(e) => handleInputChange("AccountName", e.target.value)}
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">Card Number *</label>
							<Input
								placeholder="Card Number"
								className="mt-1"
								value={savingAccountData.CardNumber} // Display selected CardNumber
								onChange={(e) => handleInputChange("CardNumber", e.target.value)}
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">Password</label>
							<div className="relative">
								<Input
									placeholder="Password"
									type={showPassword ? "text" : "password"}
									className="mt-1 w-full pr-10"
									onChange={(e) => handleInputChange("Password", e.target.value)}
								/>
								<button
									type="button"
									onClick={togglePasswordVisibility}
									className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
								>
									{showPassword ? "Hide" : "Show"}
								</button>
							</div>
						</div>
						<div className="col-span-2">
							<label className="block text-sm font-medium text-gray-700">Saving Account Name *</label>
							<Input
								placeholder="Saving Account Name"
								className="mt-1"
								onChange={(e) => handleInputChange("SavingAccountName", e.target.value)}
							/>
						</div>
						<div className="col-span-2">
							<label className="block text-sm font-medium text-gray-700">Term</label>
							<Select
								placeholder="Select Term"
								className="mt-1 w-full"
								onChange={(value) => handleInputChange("Term", value)}
							>
								<Option value="3 months">3 months</Option>
								<Option value="6 months">6 months</Option>
								<Option value="No limited">No limited</Option>
							</Select>
						</div>
						<div className="col-span-2">
							<label className="block text-sm font-medium text-gray-700">Amount *</label>
							<Input
								type="number"
								placeholder="Amount"
								className="mt-1"
								onChange={(e) => handleInputChange("Amount", parseFloat(e.target.value))}
							/>
						</div>
					</div>
					<Button
						type="primary"
						className="mt-4 w-full bg-blue-600 hover:bg-blue-700"
						onClick={handleAddSavingAccount}
					>
						Add/Deposit Saving Account
					</Button>
				</div>
			</div>
		</Layout>
	);
};

export default MyWallet;
