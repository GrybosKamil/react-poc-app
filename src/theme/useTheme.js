import { useEffect, useState } from 'react';
import { setToLocal, getFromLocal } from '../utils/storage';
import _ from 'lodash';

import * as themesSchema from './schema.json';

export const useTheme = () => {
    setToLocal('all-themes', themesSchema.default.themes);

    const themes = getFromLocal('all-themes');
    const [theme, setTheme] = useState(themes.light);

    const [themeLoaded, setThemeLoaded] = useState(false);

    const setThemeWithName = themeName => {
        console.log("theme name :" + themeName);
        setToLocal('local-theme', themeName)
        setTheme(themes[themeName])
        console.log(theme)
    };

    const getThemes = () => {
        return themes;
    }

    useEffect(() => {
        const localTheme = getFromLocal('local-theme');
        console.log("local theme is:" + localTheme);
        localTheme ? setTheme(themes[localTheme]) : setTheme(themes[themesSchema.default.defaultTheme]);
        setThemeLoaded(true);
    }, []);

    return { theme, themeLoaded, setThemeWithName, getThemes };
};