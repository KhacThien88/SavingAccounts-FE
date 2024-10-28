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

	// Function to generate a random IdCard
	const generateRandomIdCard = () => {
		return `card-${Math.floor(Math.random() * 1000000)}`; // Random IdCard
	};

	const handleAddCard = async () => {
		if (!idUser.trim() || !typeCard.trim() || !nameOfCard.trim() || !cardNumber.trim()) {
			setError("All fields are required");
			return;
		}

		// Generate random IdCard
		const newIdCard = generateRandomIdCard();

		// Prepare card information to be sent to API
		const cardInformation = {
			IdUser: idUser,
			TypeOfCard: typeCard,
			NameOfCard: nameOfCard,
			CardNumber: cardNumber,
			IdCard: newIdCard,
		};

		try {
			// Call the API to add the card
			const response = await AddCardUser(cardInformation);

			if (response.status === 200) {
				// Reset the form and show success message
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
				{/* Header with Notification and Avatar */}
				<div className="mb-6 flex items-center justify-between">
					<div>
						<h2 className="text-2xl font-semibold text-blue-800">Add Card for User</h2>
						<p className="text-sm text-gray-500">Add a new card by entering the details below</p>
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

				{/* Centered Form */}
				<div className="flex min-h-[70vh] items-center justify-center">
					<div className="mx-auto max-w-md rounded-lg bg-white p-4 shadow-md">
						<h2 className="mb-4 text-xl font-semibold">Card Information</h2>

						{/* IdUser Input */}
						<label
							htmlFor="idUser"
							className="mb-2 block text-sm font-medium text-gray-700"
						>
							IdUser
						</label>
						<input
							type="text"
							id="idUser"
							value={idUser}
							onChange={(e) => setIdUser(e.target.value)}
							placeholder="Enter IdUser"
							className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
						/>

						{/* Card Number Input */}
						<label
							htmlFor="cardNumber"
							className="mb-2 mt-4 block text-sm font-medium text-gray-700"
						>
							Card Number
						</label>
						<input
							type="text"
							id="cardNumber"
							value={cardNumber}
							onChange={(e) => setCardNumber(e.target.value)}
							placeholder="Enter Card Number"
							className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
						/>

						{/* TypeCard Input */}
						<label
							htmlFor="typeCard"
							className="mb-2 mt-4 block text-sm font-medium text-gray-700"
						>
							Type of Card
						</label>
						<input
							type="text"
							id="typeCard"
							value={typeCard}
							onChange={(e) => setTypeCard(e.target.value)}
							placeholder="Enter Type of Card"
							className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
						/>

						{/* NameOfCard Input */}
						<label
							htmlFor="nameOfCard"
							className="mb-2 mt-4 block text-sm font-medium text-gray-700"
						>
							Name of Card
						</label>
						<input
							type="text"
							id="nameOfCard"
							value={nameOfCard}
							onChange={(e) => setNameOfCard(e.target.value)}
							placeholder="Enter Name of Card"
							className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
						/>

						{/* Error and Success Messages */}
						{error && <p className="mt-2 text-sm text-red-500">{error}</p>}
						{successMessage && <p className="mt-2 text-sm text-green-500">{successMessage}</p>}

						{/* Add Card Button */}
						<button
							onClick={handleAddCard}
							className="mt-4 w-full rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600"
						>
							Add Card
						</button>

						{/* Display generated IdCard */}
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
			</div>
		</AdminLayout>
	);
};

export default AdminAddCardUser;
