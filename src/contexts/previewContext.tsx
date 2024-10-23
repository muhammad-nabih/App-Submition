'use client';
import { createContext, ReactNode, useContext, useState } from 'react';

// Define the context value type
interface PreviewContextType {
	isShow: boolean;
	setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
	isSaved: boolean;
	setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
}

// Provide a default value for the context (optional, could also be `null`)
const PreviewContext = createContext<PreviewContextType | undefined>(undefined);

export const usePreviewContext = () => {
	const context = useContext(PreviewContext);
	if (context === undefined) {
		throw new Error('usePreviewContext must be used within a PreviewProvider');
	}
	return context;
};

interface PreviewProviderProps {
	children: ReactNode;
}

const PreviewProvider = ({ children }: PreviewProviderProps) => {
	const [isShow, setIsShow] = useState(false);
	const [isSaved, setIsSaved] = useState(false);

	// Pass isShow and setIsShow as the context value
	const value = { isShow, setIsShow ,isSaved, setIsSaved};

	return (
		<PreviewContext.Provider value={value}>{children}</PreviewContext.Provider>
	);
};

export default PreviewProvider;
