import { PERSONS } from "../constants/chatConstants.js";
class LocalStorageService {
	setItemToLocalStorage = (selectedPerson, lastMyMessage, lastResponseMessage, messages) => {
		localStorage.setItem(
			selectedPerson[0],
			JSON.stringify({
				...messages,
				...lastMyMessage,
				...lastResponseMessage,
			})
		);
	};

	getItemToLocalStorage = (selectedPerson) => {
		for (let i = 0; i < PERSONS.length; i++) {
			if (localStorage.key(i) === null) {
				localStorage.setItem(selectedPerson[0], "{}");
			}
		}
		return Object.values(JSON.parse(localStorage.getItem(selectedPerson[0])));
	};
}

export const localStorageService = new LocalStorageService();
