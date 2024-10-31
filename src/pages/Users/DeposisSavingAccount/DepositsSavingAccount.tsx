import React, { useEffect, useState } from "react";
import { Button, Input, message, Select } from "antd";
import { GetUserId } from "utils/UserUtil";

import UserLayout from "../Layout/UserLayout";

import { depositsSavingAccount, GetListCardAPI, GetListSavingAccountsAPI } from "@/components/CRUD/CRUD";

const { Option } = Select;

const DepositsSavingAccount = () => {
	const [ListCard, setListCard] = useState([]);
	const [ListSavingAccount, setListSavingAccount] = useState([]);
	const [showPassword, setShowPassword] = useState(false);
	const [savingAccountData, setSavingAccountData] = useState({
		idSavingAccount: "",
		savingAccountName: "",
		cardName: "",
		cardNumber: "",
		cardBalance: "",
		amount: "",
		password: "",
	});
	const [successMessage, setSuccessMessage] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchListCard = async () => {
			try {
				const response = await GetListCardAPI(GetUserId());
				setListCard(response.data);
			} catch (error) {
				console.error("Error fetching card list:", error);
				message.error("Failed to load card list.");
			}
		};
		const fetchListSavingAccount = async () => {
			try {
				const response = await GetListSavingAccountsAPI(GetUserId());
				setListSavingAccount(response.data);
			} catch (error) {
				console.error("Error fetching saving accounts:", error);
				message.error("Failed to load saving accounts.");
			}
		};
		fetchListCard();
		fetchListSavingAccount();
	}, []);

	const handleInputChange = (field: any, value: any) => {
		setSavingAccountData((prevData) => ({ ...prevData, [field]: value }));
	};

	const handleCardSelection = (selectedCardId: any) => {
		const selectedCard: any = ListCard.find((card: any) => card.IdCard === selectedCardId);
		if (selectedCard) {
			setSavingAccountData((prevData) => ({
				...prevData,
				cardName: selectedCard.NameOfCard,
				cardNumber: selectedCard.CardNumber,
				cardBalance: selectedCard.Balance, // Set card balance here
				idSavingAccount: selectedCard.IdCard,
			}));
		}
	};

	const handleSavingAccountSelection = (selectedSavingAccountId: any) => {
		const selectedAccount: any = ListSavingAccount.find(
			(account: any) => account.IdSavingAccount === selectedSavingAccountId,
		);
		if (selectedAccount) {
			setSavingAccountData((prevData) => ({
				...prevData,
				idSavingAccount: selectedAccount.IdSavingAccount,
				savingAccountName: selectedAccount.NameOfSavingAccount,
			}));
		}
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleAddSavingAccount = async () => {
		if (!savingAccountData.idSavingAccount || !savingAccountData.amount || !savingAccountData.password) {
			setError("Please fill in all required fields.");
			return;
		}

		// Prepare the data to send to the API
		const savingAccountInformation = {
			IdUser: GetUserId(),
			NameOfSavingAccount: savingAccountData.savingAccountName,
			IdCard: savingAccountData.idSavingAccount,
			Amount: parseFloat(savingAccountData.amount),
			password: savingAccountData.password,
		};

		try {
			// Call the depositsSavingAccount API function
			await depositsSavingAccount(savingAccountInformation);
			setSuccessMessage("Saving account deposit successful!");
			setError("");

			// Clear the form
			setSavingAccountData({
				idSavingAccount: "",
				savingAccountName: "",
				cardName: "",
				cardNumber: "",
				cardBalance: "",
				amount: "",
				password: "",
			});
		} catch (error) {
			console.error("Error depositing to saving account:", error);
			setError("Failed to deposit to saving account. Please try again.");
		}
	};

	return (
		<UserLayout>
			<div className="rounded-md bg-white p-6 shadow-md">
				<h2 className="mb-4 text-xl font-semibold text-gray-800">Deposit to Saving Account</h2>
				<div className="grid grid-cols-2 gap-4">
					{/* Saving Account Selection */}
					<div className="col-span-2">
						<label className="block text-sm font-medium text-gray-700">Select Saving Account *</label>
						<Select
							placeholder="Select Saving Account"
							className="mt-1 w-full"
							onChange={handleSavingAccountSelection}
						>
							{ListSavingAccount.map((account: any) => (
								<Option
									key={account.IdSavingAccount}
									value={account.IdSavingAccount}
								>
									{account.NameOfSavingAccount}
								</Option>
							))}
						</Select>
					</div>

					{/* Name of Saving Account */}
					<div className="col-span-2">
						<label className="block text-sm font-medium text-gray-700">Name of Saving Account</label>
						<Input
							value={savingAccountData.savingAccountName}
							disabled
							className="mt-1 w-full bg-gray-100" // Gray background to indicate readonly
						/>
					</div>

					{/* Card Selection */}
					<div className="col-span-2">
						<label className="block text-sm font-medium text-gray-700">Card Name *</label>
						<Select
							placeholder="Select Card Name"
							className="mt-1 w-full"
							onChange={handleCardSelection}
						>
							{ListCard.map((card: any, index) => (
								<Option
									key={card.IdCard}
									value={card.IdCard}
								>
									{`Card ${index + 1} - ${card.CardNumber.slice(-4)}`}
								</Option>
							))}
						</Select>
					</div>

					{/* Amount of Card (Balance) */}
					<div className="col-span-2">
						<label className="block text-sm font-medium text-gray-700">
							Amount of Card (Current Balance)
						</label>
						<Input
							value={savingAccountData.cardBalance}
							disabled
							className="mt-1 w-full bg-gray-100" // Gray background to indicate readonly
						/>
					</div>

					{/* Amount to Deposit */}
					<div className="col-span-2">
						<label className="block text-sm font-medium text-gray-700">Amount *</label>
						<Input
							type="number"
							placeholder="Enter Amount"
							value={savingAccountData.amount}
							onChange={(e) => handleInputChange("amount", e.target.value)}
							className="mt-1 w-full"
						/>
					</div>

					{/* Password */}
					<div className="col-span-2">
						<label className="block text-sm font-medium text-gray-700">Password *</label>
						<div className="relative">
							<Input
								placeholder="Enter Password"
								type={showPassword ? "text" : "password"}
								value={savingAccountData.password}
								onChange={(e) => handleInputChange("password", e.target.value)}
								className="mt-1 w-full pr-10"
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
				</div>

				{error && <p className="mt-2 text-sm text-red-500">{error}</p>}
				{successMessage && <p className="mt-2 text-sm text-green-500">{successMessage}</p>}

				<Button
					type="primary"
					className="mt-4 w-full bg-blue-600 hover:bg-blue-700"
					onClick={handleAddSavingAccount}
				>
					Add/Deposit Saving Account
				</Button>
			</div>
		</UserLayout>
	);
};

export default DepositsSavingAccount;
