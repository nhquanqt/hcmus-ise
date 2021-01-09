import React from 'react'
import {Button as MaterialButton} from '@material-ui/core/';

function UploadButton(props) {
    return (
        <div>
            <input
                id="contained-button-file"
                type="file"
                style={{display: "none"}}
                onChange={props.onChange}
            />
            <label htmlFor="contained-button-file">
                <MaterialButton variant="contained" color="primary" component="span" style={props.style}>
                    Browse
                </MaterialButton>
            </label>
        </div>
    );
}

export default UploadButton