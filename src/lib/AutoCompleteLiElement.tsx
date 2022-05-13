import React, {FC} from 'react';
import {OptionProps} from "./AutoCompleteWithApi";
import {Grid, Typography} from "@mui/material";

/**
 *
 */
export interface STAutoCompleteLiElementProps {
    params: React.HTMLAttributes<HTMLLIElement>
    option:OptionProps

}

/**
 * author: betwar
 * Date:  13/5/2022
 *@param props STAutoCompleteLiElementProps
 */
const AutoCompleteLiElement: FC<STAutoCompleteLiElementProps> = (props) => {
    return (
        <li {...props.params}>
             <Grid container alignItems="center">
                 <Grid item>

                 </Grid>
                 <Grid item xs>
                 <Typography variant="body2" color="textSecondary">
                     {props.option.value}
                 </Typography>
                 </Grid>
            </Grid>
        </li>
    )
}


export default AutoCompleteLiElement;