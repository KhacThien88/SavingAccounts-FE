import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Button, Input } from "antd";

import Layout from "../Layout/Layout";

const Profile: React.FC = () => {
	const [fullName, setFullName] = useState("Feby Sabihul Hanafi");
	const [email, setEmail] = useState("febysabihul@gmail.com");
	const [birthDate, setBirthDate] = useState("1998-03-02");
	const [phoneNumber, setPhoneNumber] = useState("6282233014136");
	const [province, setProvince] = useState("Jawa Timur");
	const [city, setCity] = useState("Banyuwangi");
	const [address, setAddress] = useState(
		"Dsn. Sumbersuko, RT/RW 01/01, Desa Kesilir, Kec. Siliragung Kab. Banyuwangi",
	);

	const [currentPassword, setCurrentPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");
	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const handleToggleNewPasswordVisibility = () => {
		setShowNewPassword(!showNewPassword);
	};

	const handleToggleConfirmPasswordVisibility = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};

	const handleSaveChanges = () => {
		// Handle save changes logic here
		console.log({
			fullName,
			email,
			birthDate,
			phoneNumber,
			province,
			city,
			address,
			currentPassword,
			newPassword,
			confirmNewPassword,
		});
	};

	return (
		<Layout>
			<div className="mx-auto max-w-7xl p-8">
				<div className="mb-6">
					<h2 className="text-2xl font-semibold text-blue-800">Edit Profile</h2>
					<p className="text-sm text-gray-500">You may also edit your profile</p>
				</div>

				<div className="flex gap-8">
					{/* Phần chỉnh sửa thông tin hồ sơ */}
					<div className="flex-1 rounded-md bg-white p-6 shadow-md">
						<h2 className="mb-2 text-xl font-semibold text-gray-800">Edit Profile</h2>
						<form className="space-y-4">
							<div>
								<label className="block font-medium text-gray-700">Full Name *</label>
								<Input
									value={fullName}
									onChange={(e) => setFullName(e.target.value)}
									placeholder="Full Name"
									className="rounded-lg"
								/>
							</div>
							<div>
								<label className="block font-medium text-gray-700">Email Address *</label>
								<Input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Email Address"
									className="rounded-lg"
									disabled
								/>
							</div>
							<div className="flex gap-4">
								<div className="flex-1">
									<label className="block font-medium text-gray-700">Birth Date</label>
									<Input
										type="date"
										value={birthDate}
										onChange={(e) => setBirthDate(e.target.value)}
										className="rounded-lg"
									/>
								</div>
								<div className="flex-1">
									<label className="block font-medium text-gray-700">Phone Number</label>
									<Input
										value={phoneNumber}
										onChange={(e) => setPhoneNumber(e.target.value)}
										placeholder="Phone Number"
										className="rounded-lg"
									/>
								</div>
							</div>
							<div className="flex gap-4">
								<div className="flex-1">
									<label className="block font-medium text-gray-700">Province</label>
									<Input
										value={province}
										onChange={(e) => setProvince(e.target.value)}
										placeholder="Province"
										className="rounded-lg"
									/>
								</div>
								<div className="flex-1">
									<label className="block font-medium text-gray-700">City</label>
									<Input
										value={city}
										onChange={(e) => setCity(e.target.value)}
										placeholder="City"
										className="rounded-lg"
									/>
								</div>
							</div>
							<div>
								<label className="block font-medium text-gray-700">Address</label>
								<Input.TextArea
									value={address}
									onChange={(e) => setAddress(e.target.value)}
									placeholder="Full Address"
									className="rounded-lg"
								/>
							</div>
						</form>
					</div>

					{/* Phần thay đổi mật khẩu */}
					<div className="w-1/3 rounded-md bg-white p-6 shadow-md">
						<h2 className="mb-2 text-xl font-semibold text-gray-800">Change Password</h2>
						<form className="space-y-4">
							<div>
								<label className="block font-medium text-gray-700">Current Password</label>
								<Input.Password
									value={currentPassword}
									onChange={(e) => setCurrentPassword(e.target.value)}
									placeholder="Current Password"
									className="rounded-lg"
								/>
							</div>
							<div>
								<label className="block font-medium text-gray-700">New Password</label>
								<div className="relative">
									<Input
										type={showNewPassword ? "text" : "password"}
										value={newPassword}
										onChange={(e) => setNewPassword(e.target.value)}
										placeholder="New Password"
										className="w-full rounded-lg"
									/>
									<span
										className="absolute inset-y-0 right-3 flex cursor-pointer items-center"
										onClick={handleToggleNewPasswordVisibility}
									>
										{showNewPassword ? <FiEyeOff /> : <FiEye />}
									</span>
								</div>
							</div>
							<div>
								<label className="block font-medium text-gray-700">Confirm New Password</label>
								<div className="relative">
									<Input
										type={showConfirmPassword ? "text" : "password"}
										value={confirmNewPassword}
										onChange={(e) => setConfirmNewPassword(e.target.value)}
										placeholder="Confirm New Password"
										className="w-full rounded-lg"
									/>
									<span
										className="absolute inset-y-0 right-3 flex cursor-pointer items-center"
										onClick={handleToggleConfirmPasswordVisibility}
									>
										{showConfirmPassword ? <FiEyeOff /> : <FiEye />}
									</span>
								</div>
							</div>
							<Button
								type="primary"
								className="w-full bg-yellow-500 hover:bg-yellow-600"
								onClick={handleSaveChanges}
							>
								Save Changes
							</Button>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Profile;
