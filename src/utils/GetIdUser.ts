import { jwtDecode } from "jwt-decode";

type DecodedToken = {
	sub: string;
};

const token = localStorage.getItem("token");

if (!token) {
	throw new Error("User not authenticated");
}

const decodedToken = jwtDecode<DecodedToken>(token);
export const GetUserId = () => {
	return decodedToken.sub;
};
