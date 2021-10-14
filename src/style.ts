import { color } from './colors';
import { markdown } from './md';
import { BackgroundColorOption, EffectOption, FontColorOption } from './model';

export type StyleOptions = {
    font?: FontColorOption;
    background?: BackgroundColorOption;
    effects?: EffectOption[];
    bold?: boolean;
    italic?: boolean;
    mono?: boolean;
    link?: string;
};

export function style(text: string, options: StyleOptions) {
    if (text.length === 0) {
        return text;
    }
    if ('font' in options || 'background' in options || 'effects' in options) {
        return color(text, options);
    }
    if ('bold' in options || 'italic' in options || 'mono' in options || 'link' in options) {
        return markdown(text, options);
    }
    return text;
}
