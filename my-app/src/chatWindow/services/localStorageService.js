class LocalStorageService {
	setItemToLocalStorage = (selectedPerson, allMessages) => {
		localStorage.setItem(selectedPerson[0], JSON.stringify({ ...allMessages }));
	};

	getItemToLocalStorage = (setAllMessage, selectedPerson) => {
		setAllMessage(Object.values(JSON.parse(localStorage.getItem(selectedPerson[0]))));
	};

	setFirstMessageLocalStorage = (PERSONS, FIRST_MESSAGES) => {
		PERSONS.forEach((e) => {
			localStorage.setItem(`${e.FIRST_NAME}`, FIRST_MESSAGES);
		});
	};
}

export const localStorageService = new LocalStorageService();
