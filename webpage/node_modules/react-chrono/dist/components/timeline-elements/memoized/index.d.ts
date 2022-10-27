import React from 'react';
import { Theme } from '../../../models/Theme';
interface Title {
    title?: string;
    url?: string;
    theme?: Theme;
    color?: string;
    dir?: string;
    active?: boolean;
}
interface Content {
    content?: string;
    color?: string;
    dir?: string;
    theme?: Theme;
}
declare const MemoTitle: React.MemoExoticComponent<({ title, url, theme, color, dir, active }: Title) => JSX.Element | null>;
declare const MemoSubTitle: React.NamedExoticComponent<Content>;
export { MemoTitle, MemoSubTitle };
