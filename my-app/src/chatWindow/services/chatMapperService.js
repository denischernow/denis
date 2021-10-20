class ChatMapperService {
	mapMyMessage = (textMyMessage, AUTHOR) => {
		return [
			{
				TEXT_MESSAGE: textMyMessage,
				DATE_MESSAGE: Date.now(),
				AUTHOR: AUTHOR[0],
			},
		];
	};

	mapNotMyMessage = (json, AUTHOR) => {
		return [
			{
				TEXT_MESSAGE: json.title,
				DATE_MESSAGE: Date.now(),
				AUTHOR: AUTHOR[1],
			},
		];
	};
}

export const chatMapperService = new ChatMapperService();
