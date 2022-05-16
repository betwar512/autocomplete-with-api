import React, {FC} from 'react';
import {TextFieldProps} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import AutoCompleteLiElement from "./AutoCompleteLiElement";



/**
 *
 */
export interface AutoCompleteWithApiProps {

    id?: string
    onSearch: (input: string) => Promise<OptionProps[] | undefined | null>
    onValueSelected?:(result:OptionProps) => void
    selectedOption?: OptionProps
    textFiledProps?: TextFieldProps



}


export interface OptionProps {
    id: string
    value: string
}


/**
 * author: betwar
 * Date:  13/5/2022
 *@param props AutoCompleteWithApiProps
 */
const AutoCompleteWithApi: FC<AutoCompleteWithApiProps> = (props) => {
    const [value, setValue] = React.useState<OptionProps | null>(props.selectedOption ? props.selectedOption : null);
    const [inputValue, setInputValue] = React.useState<string>('');
    const [options, setOptions] = React.useState<OptionProps[]>([]);
    const [loading,setLoading] = React.useState<boolean>(false);
    React.useEffect(() => {
        console.log(inputValue)
        if (inputValue === '') {
            setOptions(value ? [value] : []);
            return undefined;
        }
        setLoading(true);
        props.onSearch(inputValue).then((result)=>{
           setOptions(result ? result : [])
           setLoading(false)
        }).catch((e)=>{
           setLoading(false)
        })

    }, [value, inputValue, loading ,props])


    return (
        <Autocomplete options={options} includeInputInList
                      filterOptions={(x) => x}
                      filterSelectedOptions
                      loading={loading}
                      value={value}
                      getOptionLabel={(o)=>o.value}
                      isOptionEqualToValue={(option:OptionProps, value:OptionProps) => option.id === value.id}
                      onChange={(event: any, newValue: OptionProps | null) => {
                          setOptions(newValue ? [newValue, ...options] : options);
                          setValue(newValue);
                          if(props.onValueSelected && newValue) {
                              props.onValueSelected(newValue);
                          }
                      }}

                      onInputChange={(event, newInputValue) => {
                          setInputValue(newInputValue);
                      }}
                      renderInput={(params) => (
                          <TextField {...params} {...props.textFiledProps}/>
                      )}
                      renderOption={(params, option) => {
                          // const matches = option.value
                          // const parts = parse(
                          //     option.value,
                          //     matches.map((match: any) => [match.offset, match.offset + match.length]),
                          // );

                          return (
                              <AutoCompleteLiElement option={option} params={params} key={"option-"+option.id}/>
                          )
                      }}
        />
    )
}


export default AutoCompleteWithApi;