import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Grid from "@material-ui/core/Grid"
import Typograpy from "@material-ui/core/Typography"
import FormHelperText from "@material-ui/core/TextField"
import FormControl from "@material-ui/core/FormControl"
import {Link} from "react-router-dom"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { TextField } from '@material-ui/core'
import { domain } from '../env'

export default class CreateRoomPage extends Component {
    defaultVotes =2;
    constructor(props){
        super(props)
        this.state = {
            guestCanPause:true,
            votesToSkip:this.defaultVotes,
        }
        this.handleRoomButtonPressed = this.handleRoomButtonPressed.bind(this)
        this.handleVotesChange = this.handleVotesChange.bind(this)
        this.handleGuestCanPauseChange = this.handleGuestCanPauseChange.bind(this)
    }

    handleVotesChange(e){
        this.setState({votesToSkip:e.target.value})
    }
    handleGuestCanPauseChange(e){
        this.setState({guestCanPause:e.target.value === 'true'?true:false})
    }
    handleRoomButtonPressed(){
        const requestOptions ={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                votes_to_skip:this.state.votesToSkip,
                guest_can_pause:this.state.guestCanPause
            }),
            credentials: 'include'

        }
        fetch(`${domain}/create-room`,requestOptions)
        .then(res =>res.json())
        .then(data => this.props.history.push(`/room/${data.code}`))
    }
    render() {
        return (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typograpy component="h4" variant="h4">
                        Create A Room
                    </Typograpy>
                </Grid> 
                <Grid item xs={12} align="center">
                  <FormControl component ="fieldset">
                 
                          <div align="center">
                              Guest Control of Playback State
                          </div>
                 
                      <RadioGroup onChange={this.handleGuestCanPauseChange} row defaultValue="true">
                          <FormControlLabel value="true" 
                          control={<Radio color="primary" />}
                          label="Play/Pause" labelPlacement="bottom" />
                         <FormControlLabel value="false" 
                          control={<Radio color="secondary" />}
                          label="No Control" labelPlacement="bottom" />
                          
                      </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl>
                        <TextField onChange={this.handleVotesChange} required={true} type="number" defaultValue={this.defaultVotes}
                        inputProps={{min:1,style:{textAlign:"center"}}} />
            
                            <div align="center">
                                Votes to Skip Song
                            </div>
                      
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button onClick={this.handleRoomButtonPressed} color="primary" variant="contained">Create A Room</Button>
                </Grid>
                <Grid item xs={12} align="center">
                <Button variant="contained" color="secondary" to="/" component={Link}>Back</Button>
                </Grid>

            </Grid>
        )
    }
}

