import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { createContext } from 'react';
import { SERVER_URL } from '../utils/api';
import { serverCallHandler } from '../utils/serverCallHandler';

const QuizzesContext = createContext({} as QuizzesContextValue);

export function QuizzesProvider({ children }: ContextProp) {
	const [allQuizzes, setAllQuizzes] = useState([]);

	useEffect(() => {
		(async function () {
			const { response } = await serverCallHandler('GET', `${SERVER_URL}/quiz`);
			if (response.success) {
				setAllQuizzes(response.data);
			}
		})();
	}, []);

	return (
		<QuizzesContext.Provider value={{ allQuizzes, setAllQuizzes }}>
			{children}
		</QuizzesContext.Provider>
	);
}

export function useQuizzes() {
	return useContext(QuizzesContext);
}
