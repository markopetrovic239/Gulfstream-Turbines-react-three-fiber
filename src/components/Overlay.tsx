/* eslint-disable no-restricted-globals */
import React, {useEffect, useState} from "react"
import {Html} from "@react-three/drei"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import { useSpring } from "@react-spring/three";
import TextField from "@material-ui/core/TextField";
import {useStore} from './Store'




const useStyles = makeStyles({
  root: {
    width: '15vw',
    position: "absolute",
    marginLeft: "-45vw",
    marginTop: "-40vh",
    
  },
});
const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
    position: "relative",
    fontFamily: "Candara",
    fontSize: "12px",
  }
})(Typography);

const WhiteTextField = withStyles({
  root: {
    color: "#FFFFFF",
    WebkitTextFillColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    position: "relative",
    fontFamily: "Candara",
    fontSize: "10px",
  }
})(TextField);

 const OutputTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
    position: "relative",
    fontFamily: "Candara, serif",
    fontSize: "20px",
    marginTop:"20px",
  }
})(Typography);

const GlobeButton = withStyles({
  root: {
    position: "relative",
    marginTop: '50vh',
  }
})(Button);

function ContinuousSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState<number>(1);
  const speed:any = useStore(state => state.speed);
  const depth:any = useStore(state => state.depth);
  const [sliderDepth, setSliderDepth] = useState(100);
  const [arrayNum, setArrayNum] = useState(10);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number);
    useStore.setState({speed: newValue})
  };

  const handleDepth = (event: any, newValue: number | number[]) => {
    var b =newValue;
    useStore.setState({num: newValue as number / 100})
    setSliderDepth(newValue as number);
  };

  useSpring({
    sliderDepth: sliderDepth,
    onChange: ({ sliderDepth }) => useStore.setState({depth: sliderDepth*-1}),
    config: {
      tension: 100,    // How much tension is on the spring
      mass: 2,         // The mass of the spring
      velocity: 1    // The initial speed of the movement
  }    
    
 })
  return (
    <div className={classes.root}>
      <Grid container spacing={2} aria-colspan={4}>
        <Grid>
        <OutputTextTypography id="continuous-slider" gutterBottom>
      Energy Calculator
      </OutputTextTypography>
      <WhiteTextTypography id="continuous-slider" gutterBottom>
     &nbsp;
      </WhiteTextTypography>

          <Slider  
          value={speed} 
          valueLabelDisplay="auto"
          step={0.01}
          min={1}
          max={2}
          onChange={handleChange} 
          aria-labelledby="continuous-slider" />
          <WhiteTextTypography id="continuous-slider" gutterBottom>
      Surface Current Speed &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{value} m/s
      </WhiteTextTypography>
      <WhiteTextTypography id="continuous-slider" gutterBottom>
      &nbsp;
      </WhiteTextTypography><WhiteTextTypography id="continuous-slider" gutterBottom>
      &nbsp;
      </WhiteTextTypography>

        <Slider  
          value={sliderDepth} 
          valueLabelDisplay="auto"
          step={100}
          min={100}
          max={800}
          onChange={handleDepth} 
          aria-labelledby="continuous-slider" />
          <WhiteTextTypography id="continuous-slider" gutterBottom>
      Depth &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {sliderDepth} meters
      </WhiteTextTypography>
      <WhiteTextTypography id="continuous-slider" gutterBottom>
      &nbsp;
      </WhiteTextTypography>
      <WhiteTextTypography id="continuous-slider" gutterBottom>
      &nbsp;
      </WhiteTextTypography>
      <WhiteTextField
          id="standard-number"
          label="Cable Arrays"
          type="number"
          value={arrayNum}
          onChange={(e:any)=>{
            setArrayNum(e.target.value)
            if(e.target.value < 10)
              setArrayNum(10)
          }}
          style={{floodColor: 'white'}}
          InputLabelProps={{
            shrink: true,
          }}
        />

<WhiteTextTypography id="continuous-slider" gutterBottom>
      Total turbines: &nbsp;&nbsp;&nbsp;{sliderDepth/100 * arrayNum}
      </WhiteTextTypography>


      <OutputTextTypography color="secondary" id="continuous-slider" gutterBottom>
      Output: {Math.round(((speed/1.75)*0.25*(sliderDepth/100 * arrayNum))*100)/100} MW
      </OutputTextTypography>

        </Grid> 
      </Grid>
    </div>
  );
}
export default function Overlay() {
  return (
    <Html>
       <ContinuousSlider /> 
    </Html>
  )
}

