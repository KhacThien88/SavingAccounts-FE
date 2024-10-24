import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PathConstant from "constant/PathConstant";

const SignUp: React.FC = () => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [province, setProvince] = useState("");
	const [city, setCity] = useState("");
	const [fullAddress, setFullAddress] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle sign up logic here
		console.log({
			fullName,
			email,
			birthDate,
			phoneNumber,
			province,
			city,
			fullAddress,
			password,
			confirmPassword,
		});
	};

	const goToSignIn = (e: React.MouseEvent) => {
		e.preventDefault();
		navigate(PathConstant.loginPage);
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-100">
			<div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
				<h2 className="mb-6 text-center text-2xl font-bold text-gray-800">Get started</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							htmlFor="fullName"
							className="block font-medium text-gray-700"
						>
							Full Name *
						</label>
						<input
							type="text"
							id="fullName"
							placeholder="Email or username"
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
							className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block font-medium text-gray-700"
						>
							Email Address *
						</label>
						<input
							type="email"
							id="email"
							placeholder="Email Address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div className="mb-4 flex gap-4">
						<div className="flex-1">
							<label
								htmlFor="birthDate"
								className="block font-medium text-gray-700"
							>
								Birth Date
							</label>
							<input
								type="date"
								id="birthDate"
								value={birthDate}
								onChange={(e) => setBirthDate(e.target.value)}
								className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div className="flex-1">
							<label
								htmlFor="phoneNumber"
								className="block font-medium text-gray-700"
							>
								Phone Number
							</label>
							<input
								type="text"
								id="phoneNumber"
								placeholder="Phone Number"
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
								className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
					</div>
					<div className="mb-4 flex gap-4">
						<div className="flex-1">
							<label
								htmlFor="province"
								className="block font-medium text-gray-700"
							>
								Province
							</label>
							<input
								type="text"
								id="province"
								placeholder="Province"
								value={province}
								onChange={(e) => setProvince(e.target.value)}
								className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div className="flex-1">
							<label
								htmlFor="city"
								className="block font-medium text-gray-700"
							>
								City
							</label>
							<input
								type="text"
								id="city"
								placeholder="City"
								value={city}
								onChange={(e) => setCity(e.target.value)}
								className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
					</div>
					<div className="mb-4">
						<label
							htmlFor="fullAddress"
							className="block font-medium text-gray-700"
						>
							Full Address
						</label>
						<textarea
							id="fullAddress"
							placeholder="Full Address"
							value={fullAddress}
							onChange={(e) => setFullAddress(e.target.value)}
							className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<div className="mb-4 flex gap-4">
						<div className="flex-1">
							<label
								htmlFor="password"
								className="block font-medium text-gray-700"
							>
								Password *
							</label>
							<input
								type="password"
								id="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div className="flex-1">
							<label
								htmlFor="confirmPassword"
								className="block font-medium text-gray-700"
							>
								Confirm Password *
							</label>
							<input
								type="password"
								id="confirmPassword"
								placeholder="Confirm Password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
					</div>
					<button
						type="submit"
						className="mb-4 w-full rounded-lg bg-yellow-500 px-4 py-2 font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
					>
						Sign Up
					</button>
				</form>
				<div className="text-center">
					<span className="text-sm text-gray-500">Already have an account? </span>
					<a
						onClick={goToSignIn}
						className="cursor-pointer text-sm font-medium text-yellow-500 hover:text-yellow-700"
					>
						Back to Sign In
					</a>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
