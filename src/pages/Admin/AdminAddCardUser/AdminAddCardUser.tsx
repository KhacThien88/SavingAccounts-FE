import React, { useState } from "react";
import { FiBell } from "react-icons/fi";

import AdminLayout from "../Layout/AdminLayout";

import { AddCardUser } from "@/components/CRUD/CRUD";

const AdminAddCardUser: React.FC = () => {
	const [idUser, setIdUser] = useState("");
	const [typeCard, setTypeCard] = useState("");
	const [nameOfCard, setNameOfCard] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [idCard, setIdCard] = useState("");
	const [error, setError] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	// Generate a random IdCard
	const generateRandomIdCard = () => `card-${Math.floor(Math.random() * 1000000)}`;

	const handleAddCard = async () => {
		if (!idUser.trim() || !typeCard.trim() || !nameOfCard.trim() || !cardNumber.trim()) {
			setError("All fields are required");
			return;
		}
		const newIdCard = generateRandomIdCard();
		const cardInformation = {
			IdUser: idUser,
			TypeOfCard: typeCard,
			NameOfCard: nameOfCard,
			CardNumber: cardNumber,
			IdCard: newIdCard,
		};

		try {
			const response = await AddCardUser(cardInformation);
			if (response.status === 200) {
				setIdCard(newIdCard);
				setIdUser("");
				setTypeCard("");
				setNameOfCard("");
				setCardNumber("");
				setError("");
				setSuccessMessage("Card added successfully!");
			} else {
				setError("Failed to add card. Please try again.");
			}
		} catch (err) {
			setError("An error occurred while adding the card.");
		}
	};

	return (
		<AdminLayout>
			<div className="mx-auto max-w-7xl p-8">
				<div className="mb-6 flex items-center justify-between">
					<div>
						<h2 className="text-2xl font-semibold text-blue-800">Add New Bank Account</h2>
						<p className="text-sm text-gray-500">Add a new bank account by filling the details below</p>
					</div>
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

				<div className="rounded-md bg-white p-6 shadow-md">
					<h2 className="mb-4 text-xl font-semibold text-gray-800">Add New Savings Account</h2>
					<div className="grid grid-cols-2 gap-4">
						<div className="col-span-2">
							<label className="block text-sm font-medium text-gray-700">Id User *</label>
							<input
								type="text"
								placeholder="Enter IdUser"
								value={idUser}
								onChange={(e) => setIdUser(e.target.value)}
								className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500"
							/>
						</div>
						<div className="col-span-2">
							<label className="block text-sm font-medium text-gray-700">Card Number *</label>
							<input
								type="text"
								placeholder="Enter Card Number"
								value={cardNumber}
								onChange={(e) => setCardNumber(e.target.value)}
								className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500"
							/>
						</div>
						<div className="col-span-2">
							<label className="block text-sm font-medium text-gray-700">Type of Card *</label>
							<input
								type="text"
								placeholder="Enter Type of Card"
								value={typeCard}
								onChange={(e) => setTypeCard(e.target.value)}
								className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500"
							/>
						</div>
						<div className="col-span-2">
							<label className="block text-sm font-medium text-gray-700">Name of Card *</label>
							<input
								type="text"
								placeholder="Enter Name of Card"
								value={nameOfCard}
								onChange={(e) => setNameOfCard(e.target.value)}
								className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500"
							/>
						</div>
					</div>
					{error && <p className="mt-2 text-sm text-red-500">{error}</p>}
					{successMessage && <p className="mt-2 text-sm text-green-500">{successMessage}</p>}
					<button
						onClick={handleAddCard}
						className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
					>
						Add Card
					</button>
					{idCard && (
						<p className="mt-4 text-green-600">
							New Card Added: <span className="font-semibold">{idCard}</span>
							<br />
							Type: {typeCard} <br />
							Name: {nameOfCard}
						</p>
					)}
				</div>
			</div>
		</AdminLayout>
	);
};

export default AdminAddCardUser;
