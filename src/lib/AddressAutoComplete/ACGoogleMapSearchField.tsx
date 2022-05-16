import React, {FC} from 'react';
import TextField, {TextFieldProps} from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';
import {Loader} from "@googlemaps/js-api-loader";
import ACAddressCompleteLiElement from "./ACAddressCompleteLiElement";



export type GoogleLibraries =
    | "drawing"
    | "geometry"
    | "localContext"
    | "places"
    | "visualization"
    ;

export interface GoogleApiConfig {
    apiKey:string
    version:string
    libraries:GoogleLibraries[]
    region?:string

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
export interface ACGoogleMapSearchFieldProps {
    // Send his callback to get the result
     onAddressSelects : (address: GoogleAddress|null ) =>void ;
     // Pass this address to use as current
     address?: google.maps.places.AutocompletePrediction | null;
     // Send Text field Pros to config details if field
     textFiledProps?: TextFieldProps

    googleApiConfig:GoogleApiConfig
}


const autocompleteService = {insistence: null };


const google_locality:any = {
    floor: 'short_name',
    subpremise :'short_name',
    street_number: 'short_name', //Street
    route: 'long_name',  // road
    locality: 'long_name', //sub
    administrative_area_level_1: 'short_name', //state
    country: 'short_name', //country
    administrative_area_level_2:'short_name', //City
    postal_code: 'short_name' //post_code
};


export interface GoogleAddress  {
    formatted_address?:string,
    floor?: string,
    subpremise? :string,
    street_number?: string, //Street
    route?: string,  // road
    locality?: string, //sub
    administrative_area_level_1?: string, //state
    country?: string, //country
    administrative_area_level_2?:string, //City
    postal_code?: string //post_code
    lat?: number,
    lng?: number
}

function getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {
    return o[propertyName]; // o[propertyName] is of type T[K]
}
/**
 * author: betwar
 * Date:  29/11/20
 *@param props SAGoogleMapAutoCompleteProps
 */
const ACGoogleMapSearchField: FC<ACGoogleMapSearchFieldProps> = (props) => {


    const [value, setValue] = React.useState<google.maps.places.AutocompletePrediction | null>(props.address? props.address : null);
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState<google.maps.places.AutocompletePrediction[]>([]);
    const googleLoaded = React.useRef(false);

    if(!googleLoaded.current) {
        const googleLoader = new Loader({
            apiKey:props.googleApiConfig.apiKey,
            version:props.googleApiConfig.version,
            libraries: props.googleApiConfig.libraries,
            region: props.googleApiConfig.region
        });
        googleLoader.load().then(() => {
            googleLoaded.current = true;
        });
    }
    const fetch = React.useMemo(
        () =>
            throttle((request: { input: string }, callback: (results?: google.maps.places.AutocompletePrediction[]) => void) => {
                (autocompleteService.insistence as any).getPlacePredictions({input: request.input,types:[ "address"]}, callback);
            }, 200),
        [],
    );

    React.useEffect(() => {
        let active = true;

        if (!autocompleteService.insistence && (window as any).google) {
            autocompleteService.insistence = new (window as any).google.maps.places.AutocompleteService();

        }
        if (!autocompleteService.insistence) {
            return undefined;
        }

        if (inputValue === '') {
            setOptions(value ? [value] : []);
            return undefined;
        }

        fetch({input: inputValue}, (results?: google.maps.places.AutocompletePrediction[]) => {
            if (active) {
                let newOptions = [] as google.maps.places.AutocompletePrediction[];

                if (value) {
                    newOptions = [value];
                }

                if (results) {
                    newOptions = [...newOptions, ...results];
                }

                setOptions(newOptions);
            }
        });

        return () => {
            active = false;
        };
    }, [value, inputValue, fetch]);

    /**
     *  Setup Address and Return result
     * @param placeId search by Place Id for detail result
     */
    const setupResponse = (placeId?:string) => {
        if(placeId && placeId.length > 0) {
            const gCoder = new google.maps.Geocoder();
            gCoder.geocode({placeId: placeId }, (response) => {
                const location = response[0];
                let address: any = {
                    formatted_address : location.formatted_address,
                    lat: location.geometry.location.lat(),
                    lng: location.geometry.location.lng()
                };
                for (const component of location.address_components as google.maps.GeocoderAddressComponent[]) {
                    const addressType = component.types[0];
                    if (google_locality[addressType]) {
                        address[addressType] = getProperty(component, google_locality[addressType]);
                    }
                }
                props.onAddressSelects(address as GoogleAddress);
            });

        }
    };

    return (
        <Autocomplete
            id="sa-google-map-auto-complete"
            getOptionLabel={(option) => (typeof option === 'string' ? option : option.description)}
            filterOptions={(x) => x}
            options={options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            value={value}
            onChange={(event: any, newValue: google.maps.places.AutocompletePrediction | null) => {
                setOptions(newValue ? [newValue, ...options] : options);
                setValue(newValue);
                setupResponse(newValue?.place_id);
            }}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            renderInput={(params) => (
                <TextField {...params} {...props.textFiledProps}/>
            )}
            renderOption={(params , option) => {
                const matches = option.structured_formatting.main_text_matched_substrings;
                const parts = parse(
                    option.structured_formatting.main_text,
                    matches.map((match: any) => [match.offset, match.offset + match.length]),
                );

                return (
                    <ACAddressCompleteLiElement parts={parts} option={option} params={params}/>
                );
            }}
        />
    )
}


export default ACGoogleMapSearchField;