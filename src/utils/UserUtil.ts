import { jwtDecode } from "jwt-decode";

type DecodedToken = any;

export const GetUserId = () => {
	const token = localStorage.getItem("token");
	if (!token) {
		throw new Error("User not authenticated");
	}

	const decodedToken = jwtDecode<DecodedToken>(token);
	console.log(decodedToken);
	return decodedToken["sub"];
};

export const GetRoleUser = () => {
	const token = localStorage.getItem("token");
	if (!token) {
		throw new Error("User not authenticated");
	}
	const decodedToken = jwtDecode<DecodedToken>(token);
	return decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
};
