import { PERSONS } from "../constants/chatConstants.js";
class LocalStorageService {
	setItemToLocalStorage = (selectedPerson, messages, i, k) => {
		localStorage.setItem(selectedPerson[0], JSON.stringify({ ...messages, ...i, ...k }));
	};

	getItemToLocalStorage = (setAllMessage, selectedPerson) => {
		for (let i = 0; i < PERSONS.length; i++) {
			if (localStorage.key(i) === null) {
				localStorage.setItem(selectedPerson[0], "{}");
			}
		}
		setAllMessage(Object.values(JSON.parse(localStorage.getItem(selectedPerson[0]))));
	};
}

export const localStorageService = new LocalStorageService();
