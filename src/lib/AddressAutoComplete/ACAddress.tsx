import React, {Component} from 'react';
import  TextField from "@mui/material/TextField";
import Grid  from "@mui/material/Grid";
import ACGoogleMapSearchField, {GoogleAddress , GoogleApiConfig} from './ACGoogleMapSearchField';



/**
 *
 */
export interface SAAddressProps {
    untNumber?: string,
    addressLine?: string,
    addressLineTwo?: string,
    suburb?: string,
    city?: string,
    postCode?: string,
    googleApiConfig:GoogleApiConfig
    onChange?:(result:SAAddressState) =>void

}

/**
 *
 */
interface SAAddressState {
    untNumber?: string,
    addressLine?: string,
    addressLineTwo?: string,
    suburb?: string,
    city?: string,
    postCode?: string,
}

/**
 * author: betwar
 * Date:  28/11/20
 */
class ACAddress extends Component<SAAddressProps, SAAddressState> {

    constructor(props: Readonly<SAAddressProps> | SAAddressProps) {
        super(props);

        this.state = {
            untNumber: props.untNumber ? props.untNumber : '',
            addressLine: props.addressLine ? props.addressLine : '',
            addressLineTwo: props.addressLineTwo ? props.addressLineTwo : '',
            suburb: props.suburb ? props.suburb : '',
            city: props.city ? props.city : '',
            postCode: props.postCode ? props.postCode : '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.onAddressChanged = this.onAddressChanged.bind(this);
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onAddressChanged(selectedAddress: GoogleAddress | null): void {
        if (selectedAddress) {
            this.setState({
                postCode: selectedAddress.postal_code,
                city: selectedAddress.locality,
                addressLineTwo: selectedAddress.street_number + " " + selectedAddress.route,
                untNumber: selectedAddress.subpremise
            })

            if(this.props.onChange){
                this.props.onChange(this.state);
            }
        }
    }


    render() {
        return (
                <Grid container spacing={3}>
                    <Grid item md={12}>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <ACGoogleMapSearchField onAddressSelects={this.onAddressChanged}
                                                googleApiConfig={this.props.googleApiConfig}
                                                textFiledProps={
                                                     {
                                                         fullWidth: true,
                                                         helperText: "Search for address ... ",
                                                         label: "Address", variant: "outlined",
                                                         name: "AddressLine", required: true
                                                     }}/>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <TextField
                            fullWidth
                            helperText="optional"
                            label="Address Line"
                            name="AddressLineTwo"
                            onChange={this.handleChange}
                            value={this.state.addressLineTwo}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextField
                            fullWidth
                            label="Unit Number"
                            name="untNumber"
                            onChange={this.handleChange}
                            value={this.state.untNumber}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextField
                            fullWidth
                            label="City"
                            name="city"
                            onChange={this.handleChange}
                            required
                            value={this.state.city}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextField
                            fullWidth
                            label="Post Code"
                            name="postCode"
                            onChange={this.handleChange}
                            required
                            value={this.state.postCode}
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
        )
    }
}

export default ACAddress;