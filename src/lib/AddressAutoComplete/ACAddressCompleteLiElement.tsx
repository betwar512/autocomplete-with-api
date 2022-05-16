import React, {FC} from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
/**
 *
 */
export interface SAAtomCompleteLiElementProps {
    parts: { text: string, highlight: boolean }[],
    option: google.maps.places.AutocompletePrediction,
    params: React.HTMLAttributes<HTMLLIElement>

}


/**
 * author: betwar
 * Date:  27/8/21
 *@param props SAAutomCompleteLiElementProps
 */
const ACAddressCompleteLiElement: FC<SAAtomCompleteLiElementProps> = (props) => {

    return (

        <li {...props.params}>
            <Grid container alignItems="center">
                <Grid item>
                    <LocationOnIcon sx={{color:t=>t.palette.text.secondary , mr:2}}/>
                </Grid>
                <Grid item xs>
                    {props.parts.map((part, index) => (
                        <span key={"item-in" + index} style={{fontWeight: part.highlight ? 700 : 400}}>
                              {part.text}
                            </span>
                    ))}
                    <Typography variant="body2" color="textSecondary">

                        {props.option.structured_formatting.secondary_text}
                    </Typography>
                </Grid>
            </Grid>
        </li>
    )
}


export default ACAddressCompleteLiElement;
