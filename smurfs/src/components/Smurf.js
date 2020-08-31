import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/smurfActions';

const Smurf = ({ getSmurfs, smurfs, isFetching }) => {
    useEffect(() => {
        getSmurfs();
    }, [getSmurfs]);

    if (isFetching) {
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    console.log(smurfs);

    return(
        <div>
            <h1>Smurfs</h1>
            {smurfs.map(smurf => 
                <div>
                    <p>{smurf.name}</p>
                    <p>{smurf.age}</p>
                    <p>{smurf.height}</p>
                </div>
            )}
        </div>
    )
};

const mapStateToProps = (state) => {
    return { smurfs: state.smurfs, isFetching: state.isFetching };
};

const mapDisptatchToProps = { getSmurfs };

export default connect(mapStateToProps, mapDisptatchToProps)(Smurf);