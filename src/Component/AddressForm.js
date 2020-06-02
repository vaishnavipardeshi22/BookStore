import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";


export default function AddressForm() {
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField required id="Name" name="Name" label="Name" fullWidth
                               autoComplete="given-name" variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField required id="phone number" name="phone number" label="Phone Number" fullWidth
                               autoComplete="phone-number" variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField required id="zip" name="zip" label="Postal code" fullWidth
                               autoComplete="shipping postal-code" variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField required id="Locality" name="Locality" label="Locality" fullWidth
                               autoComplete="locality" variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField required id="address1" name="address1" label="Address line 1" fullWidth multiline
                               rows={4} variant="outlined" autoComplete="shipping address-line1"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField required id="city" name="city" label="City / Town" fullWidth
                               autoComplete="shipping address-level2" variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="state" name="state" label="Landmark" fullWidth variant="outlined"/>
                </Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Type</FormLabel>
                        <RadioGroup row aria-label="position" name="position" defaultValue="top">
                            <FormControlLabel value="Home" control={<Radio color="primary"/>} label="Home"/>
                            <FormControlLabel value="Work " control={<Radio color="primary"/>} label="Work"/>
                            <FormControlLabel value="Other" control={<Radio color="primary"/>} label="Other"/>
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </React.Fragment>

    );
}