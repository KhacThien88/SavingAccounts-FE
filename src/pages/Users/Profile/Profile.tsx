import React, { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Button, Input } from "antd";
import bcrypt from "bcryptjs";

import Layout from "../Layout/Layout";

import { ChangeProfileAPI, GetProfileAPI } from "@/components/CRUD/CRUD";

const Profile: React.FC = () => {
	const [idUser, setIdUser] = useState("");
	const [cccd, setCccd] = useState("");
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [province, setProvince] = useState("");
	const [city, setCity] = useState("");
	const [accessFailedCount, setAccessFailedCount] = useState(0);
	const [emailConfirmed, setEmailConfirmed] = useState(false);
	const [phoneNumberConfirmed, setPhoneNumberConfirmed] = useState(false);
	const [passwordHash, setPasswordHash] = useState("");
	const [twoFactorEnable, setTwoFactorEnable] = useState(false);
	const [securityStampHash, setSecurityStampHash] = useState("");
	const [nation, setNation] = useState("");
	const [lockoutEnable, setLockoutEnable] = useState(false);

	const [originalProfile, setOriginalProfile] = useState<any>({});

	const [currentPassword, setCurrentPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");
	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	// Fetch user profile data
	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const response = await GetProfileAPI("1"); // Replace with actual user ID
				const data = response.data;
				setIdUser(data.IdUser);
				setCccd(data.CCCD);
				setFullName(data.FullName);
				setEmail(data.Email);
				setBirthDate(data.BirthDate);
				setPhoneNumber(data.PhoneNumber);
				setProvince(data.Province);
				setCity(data.City);
				setAccessFailedCount(data.AccessFailedCount);
				setEmailConfirmed(data.EmailConfirmed);
				setPhoneNumberConfirmed(data.PhoneNumberConfirmed);
				setPasswordHash(data.PasswordHash);
				setTwoFactorEnable(data.TwoFactorEnable);
				setSecurityStampHash(data.SecurityStampHash);
				setNation(data.Nation);
				setLockoutEnable(data.LockoutEnable);

				// Lưu trạng thái ban đầu
				setOriginalProfile(data);
			} catch (error) {
				console.error("Error fetching profile data:", error);
			}
		};

		fetchProfile();
	}, []);

	const handleToggleNewPasswordVisibility = () => {
		setShowNewPassword(!showNewPassword);
	};

	const handleToggleConfirmPasswordVisibility = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};

	const handleSaveChanges = () => {
		const updatedProfile: Record<string, any> = {};

		if (fullName !== originalProfile.FullName) updatedProfile["FullName"] = fullName;
		if (email !== originalProfile.Email) updatedProfile["Email"] = email;
		if (birthDate !== originalProfile.BirthDate) updatedProfile["BirthDate"] = birthDate;
		if (phoneNumber !== originalProfile.PhoneNumber) updatedProfile["PhoneNumber"] = phoneNumber;
		if (province !== originalProfile.Province) updatedProfile["Province"] = province;
		if (city !== originalProfile.City) updatedProfile["City"] = city;
		if (cccd !== originalProfile.CCCD) updatedProfile["CCCD"] = cccd;
		if (accessFailedCount !== originalProfile.AccessFailedCount)
			updatedProfile["AccessFailedCount"] = accessFailedCount;
		if (emailConfirmed !== originalProfile.EmailConfirmed) updatedProfile["EmailConfirmed"] = emailConfirmed;
		if (phoneNumberConfirmed !== originalProfile.PhoneNumberConfirmed)
			updatedProfile["PhoneNumberConfirmed"] = phoneNumberConfirmed;
		if (passwordHash !== originalProfile.PasswordHash) updatedProfile["PasswordHash"] = passwordHash;
		if (twoFactorEnable !== originalProfile.TwoFactorEnable) updatedProfile["TwoFactorEnable"] = twoFactorEnable;
		if (securityStampHash !== originalProfile.SecurityStampHash)
			updatedProfile["SecurityStampHash"] = securityStampHash;
		if (nation !== originalProfile.Nation) updatedProfile["Nation"] = nation;
		if (lockoutEnable !== originalProfile.LockoutEnable) updatedProfile["LockoutEnable"] = lockoutEnable;

		if (Object.keys(updatedProfile).length === 0) {
			console.log("No changes detected.");
			return;
		}

		// Convert to proper JSON format before sending
		const payload = JSON.stringify(updatedProfile);

		ChangeProfileAPI("1", payload)
			.then((response) => {
				console.log("Profile updated successfully:", response.data);
				alert("Profile updated!");
				window.location.reload();
			})
			.catch((error) => {
				console.error("Error updating profile:", error.response ? error.response.data : error.message);
			});
	};

	const handleChangePassword = async () => {
		try {
			// Hash the current password input by the user
			const isPasswordMatch = await bcrypt.compare(currentPassword, passwordHash);

			if (!isPasswordMatch) {
				alert("The current password you entered is incorrect.");
				return;
			}

			// If current password is correct, proceed to update the password
			const salt = await bcrypt.genSalt(10);
			const newPasswordHash = await bcrypt.hash(newPassword, salt);

			const passwordChangeData = {
				IdUser: idUser,
				CurrentPassword: currentPassword,
				NewPassword: newPasswordHash,
			};

			ChangeProfileAPI("1", passwordChangeData)
				.then((response) => {
					console.log("Profile updated successfully:", response.data);
					alert("Password updated successfully!");
					window.location.reload();
				})
				.catch((error) => {
					console.error("Error updating password:", error.response ? error.response.data : error.message);
				});
		} catch (error) {
			console.error("Error comparing passwords:", error);
			alert("There was an error verifying your password. Please try again.");
		}
		if (newPassword !== confirmNewPassword) {
			alert("New password and confirmation do not match.");
			return;
		}
	};
	return (
		<Layout>
			<div className="mx-auto max-w-7xl p-8">
				<div className="mb-6">
					<h2 className="text-2xl font-semibold text-blue-800">Edit Profile</h2>
					<p className="text-sm text-gray-500">You may also edit your profile</p>
				</div>

				<div className="flex gap-8">
					{/* Edit Profile Section */}
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
										value={birthDate.split("T")[0]}
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
							<Button
								type="primary"
								className="w-full bg-blue-500 hover:bg-blue-600"
								onClick={handleSaveChanges}
							>
								Save Changes
							</Button>
						</form>
					</div>

					{/* Change Password Section */}
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
								onClick={handleChangePassword}
							>
								Change Password
							</Button>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Profile;
