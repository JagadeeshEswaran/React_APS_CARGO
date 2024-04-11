export const isValidUsername = (username) => {
	const regex = /^[a-zA-Z0-9_@]+$/; // Regular expression pattern
	return regex.test(username); // Test if the username matches the pattern
};
