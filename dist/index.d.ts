import React, { FC, Component } from 'react';
import { TextFieldProps } from '@mui/material';
import { TextFieldProps as TextFieldProps$1 } from '@mui/material/TextField';

/**
 *
 */
interface AutoCompleteWithApiProps {
    id?: string;
    onSearch: (input: string) => Promise<OptionProps[] | undefined | null>;
    onValueSelected?: (result: OptionProps) => void;
    selectedOption?: OptionProps;
    textFiledProps?: TextFieldProps;
}
interface OptionProps {
    id: string;
    value: string;
}
/**
 * author: betwar
 * Date:  13/5/2022
 *@param props AutoCompleteWithApiProps
 */
declare const AutoCompleteWithApi: FC<AutoCompleteWithApiProps>;

declare type GoogleLibraries = "drawing" | "geometry" | "localContext" | "places" | "visualization";
interface GoogleApiConfig {
    apiKey: string;
    version: string;
    libraries: GoogleLibraries[];
    region?: string;
}
/**
 * {
 *             apiKey: "",
 *             version: "weekly",
 *             libraries: ["places","geometry"],
 *             region:"AU"
 *
 *         }
 */
interface ACGoogleMapSearchFieldProps {
    onAddressSelects: (address: GoogleAddress | null) => void;
    address?: google.maps.places.AutocompletePrediction | null;
    textFiledProps?: TextFieldProps$1;
    googleApiConfig: GoogleApiConfig;
}
interface GoogleAddress {
    formatted_address?: string;
    floor?: string;
    subpremise?: string;
    street_number?: string;
    route?: string;
    locality?: string;
    administrative_area_level_1?: string;
    country?: string;
    administrative_area_level_2?: string;
    postal_code?: string;
    lat?: number;
    lng?: number;
}
/**
 * author: betwar
 * Date:  29/11/20
 *@param props SAGoogleMapAutoCompleteProps
 */
declare const ACGoogleMapSearchField: FC<ACGoogleMapSearchFieldProps>;

/**
 *
 */
interface SAAddressProps {
    untNumber?: string;
    addressLine?: string;
    addressLineTwo?: string;
    suburb?: string;
    city?: string;
    postCode?: string;
    googleApiConfig: GoogleApiConfig;
    onChange?: (result: SAAddressState) => void;
}
/**
 *
 */
interface SAAddressState {
    untNumber?: string;
    addressLine?: string;
    addressLineTwo?: string;
    suburb?: string;
    city?: string;
    postCode?: string;
}
/**
 * author: betwar
 * Date:  28/11/20
 */
declare class ACAddress extends Component<SAAddressProps, SAAddressState> {
    constructor(props: Readonly<SAAddressProps> | SAAddressProps);
    handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
    onAddressChanged(selectedAddress: GoogleAddress | null): void;
    render(): JSX.Element;
}

export { ACAddress, ACGoogleMapSearchField, AutoCompleteWithApi as default };
