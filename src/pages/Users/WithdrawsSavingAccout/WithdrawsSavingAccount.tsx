import React, { useEffect, useState } from "react";
import { Button, Input, message, Select } from "antd";
import { GetUserId } from "utils/UserUtil";

import UserLayout from "../Layout/UserLayout";

import { GetListSavingAccountsAPI, withdrawsSavingAccount } from "@/components/CRUD/CRUD";

const { Option } = Select;

const WithdrawsSavingAccount = () => {
	const [ListSavingAccount, setListSavingAccount] = useState([]);
	const [showPassword, setShowPassword] = useState(false);
	const [savingAccountData, setSavingAccountData] = useState({
		idSavingAccount: "",
		savingAccountName: "",
		balance: "", // Store current balance
		term: "", // Add term field
		amount: "",
		password: "",
	});
	const [successMessage, setSuccessMessage] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchListSavingAccount = async () => {
			try {
				const response = await GetListSavingAccountsAPI(GetUserId());
				setListSavingAccount(response.data);
			} catch (error) {
				console.error("Error fetching saving accounts:", error);
				message.error("Failed to load saving accounts.");
			}
		};
		fetchListSavingAccount();
	}, []);

	const handleInputChange = (field: any, value: any) => {
		setSavingAccountData((prevData) => ({ ...prevData, [field]: value }));
	};

	const handleSavingAccountSelection = (selectedSavingAccountId: any) => {
		const selectedAccount: any = ListSavingAccount.find(
			(account: any) => account.IdSavingAccount === selectedSavingAccountId,
		);
		if (selectedAccount) {
			setSavingAccountData({
				idSavingAccount: selectedAccount.IdSavingAccount,
				savingAccountName: selectedAccount.NameOfSavingAccount,
				balance: selectedAccount.Balance,
				term: selectedAccount.Term, // Set the term of the selected account
				amount: selectedAccount.Term === "No limited" ? "" : selectedAccount.Balance, // Set amount based on term
				password: "",
			});
		}
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleAmountChange = (value: any) => {
		if (savingAccountData.term === "No limited" && value <= savingAccountData.balance) {
			handleInputChange("amount", value);
		} else if (savingAccountData.term !== "No limited") {
			handleInputChange("amount", savingAccountData.balance); // If term is restricted, set full balance
		}
	};

	const handleWithdrawSavingAccount = async () => {
		if (!savingAccountData.idSavingAccount || !savingAccountData.amount || !savingAccountData.password) {
			setError("Please fill in all required fields.");
			return;
		}

		// Prepare the data to send to the API
		const savingAccountInformation = {
			IdUser: GetUserId(),
			NameOfSavingAccount: savingAccountData.savingAccountName,
			IdSavingAccount: savingAccountData.idSavingAccount,
			Amount: parseFloat(savingAccountData.amount),
			password: savingAccountData.password,
		};

		try {
			// Call the withdrawsSavingAccount API function
			await withdrawsSavingAccount(savingAccountInformation);
			setSuccessMessage("Saving account withdrawal successful!");
			setError("");

			// Clear the form
			setSavingAccountData({
				idSavingAccount: "",
				savingAccountName: "",
				balance: "",
				term: "",
				amount: "",
				password: "",
			});
		} catch (error) {
			console.error("Error withdrawing from saving account:", error);
			setError("Failed to withdraw from saving account. Please try again.");
		}
	};

	return (
		<UserLayout>
			<div className="rounded-md bg-white p-6 shadow-md">
				<h2 className="mb-4 text-xl font-semibold text-gray-800">Withdraw from Saving Account</h2>
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

					{/* Current Balance */}
					<div className="col-span-2">
						<label className="block text-sm font-medium text-gray-700">Current Balance</label>
						<Input
							value={savingAccountData.balance}
							disabled
							className="mt-1 w-full bg-gray-100" // Gray background to indicate readonly
						/>
					</div>

					{/* Term */}
					<div className="col-span-2">
						<label className="block text-sm font-medium text-gray-700">Term</label>
						<Input
							value={savingAccountData.term}
							disabled
							className="mt-1 w-full bg-gray-100" // Gray background to indicate readonly
						/>
					</div>

					{/* Amount to Withdraw */}
					<div className="col-span-2">
						<label className="block text-sm font-medium text-gray-700">Amount *</label>
						<Input
							type="number"
							placeholder="Enter Amount"
							value={savingAccountData.amount}
							disabled={savingAccountData.term !== "No limited"} // Disable input if term is restricted
							onChange={(e) => handleAmountChange(e.target.value)}
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
					onClick={handleWithdrawSavingAccount}
				>
					Withdraw from Saving Account
				</Button>
			</div>
		</UserLayout>
	);
};

export default WithdrawsSavingAccount;
