import { createContext, useContext, useState } from "react";
import { en } from "../lang/en";
import { tr } from "../lang/tr";

const LanguageContext: any = createContext(null);

export const LanguageProvider = ({ children }: any) => {
    const [language, setLanguage] = useState("tr");
    const [dictionary, setDictionary] = useState(tr);

    const setLanguageTR = () => {
        if(language == "tr") return;

        setLanguage("tr");
        setDictionary(tr);
        return;
    }

    const setLanguageEn = () => {
        if(language == "en") return;

        setLanguage("en");
        setDictionary(en);
        return;
    }

    return <LanguageContext.Provider value={{ language, dictionary, setLanguageTR, setLanguageEn }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
    return useContext(LanguageContext);
}