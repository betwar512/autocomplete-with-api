import { FC } from 'react';

/**
 *
 */
interface AutoCompleteWithApiProps {
    id?: string;
    onSearch: (res: string) => void;
}
/**
 * author: betwar
 * Date:  13/5/2022
 *@param props AutoCompleteWithApiProps
 */
declare const AutoCompleteWithApi: FC<AutoCompleteWithApiProps>;

export { AutoCompleteWithApi as default };
